// Imposter — WebSocket relay for Internet Play
// ---------------------------------------------------------------
// A tiny message hub that lets the game work across any network
// (no WebRTC / TURN needed). Deploy me somewhere free:
//   Render / Railway / Fly / Glitch — anywhere that runs Node.
//
// Run locally for a quick check:
//   npm init -y && npm install ws && node relay.js
//
// Every client (host + guests) opens ONE WebSocket here and registers
// with the room code. The relay just forwards messages between sockets:
//   - app messages carry a JSON envelope { p: <payload>, to: <playerId>? }
//   - if "to" is set → deliver ONLY to that player's socket
//   - if "to" is missing → broadcast to every OTHER socket in the room
//   - binary frames (microphone audio) are fanned out to all other sockets
//
// This is deliberately dumb: all game logic stays in the browser.

const { WebSocketServer } = require("ws");

const PORT = process.env.PORT || 8765;
const MAX_ROOM = 24; // room code length

const rooms = new Map(); // roomKey -> Map<playerId, socket>

function roomKey(r){ return String(r || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, MAX_ROOM); }

function sendJson(ws, obj){
  if (ws && ws.readyState === 1){ try { ws.send(JSON.stringify(obj)); } catch(e){} }
}

function ctxOf(ws){ // convenience — what does the relay know about this socket?
  return { ws: ws, playerId: ws.__playerId || null, role: ws.__role || null, room: ws.__room || null };
}

// Forward an app envelope to target sockets (all except <sender>).
function forward(room, senderId, obj){
  const set = rooms.get(room);
  if (!set) return;
  console.log(`[relay] forward text from ${senderId} to ${set.size - 1} others: ${obj.p && obj.p.type || "?"}`);
  set.forEach((sock, id) => {
    if (id === senderId) return;
    sendJson(sock, { p: obj.p, from: senderId });
  });
}

const wss = new WebSocketServer({ port: PORT });
console.log("relay listening on " + PORT);

wss.on("connection", (ws) => {
  ws.__room = null;
  ws.__playerId = null;
  ws.__role = null;

  sendJson(ws, { type: "relay_hello", ok: true });

  ws.on("message", (raw, isBinary) => {
    // ---- Binary audio: fan out to everyone else in the room ----
    if (isBinary){
      const { room, playerId } = ctxOf(ws);
      if (!room || !playerId) return;
      const set = rooms.get(room);
      const buf = Buffer.isBuffer(raw) ? raw : Buffer.from(raw);
      // frame = [2-byte playerId length][playerId utf8][raw PCM]
      const head = Buffer.alloc(2);
      head.writeUInt16BE(Buffer.byteLength(playerId), 0);
      const frame = Buffer.concat([head, Buffer.from(playerId, "utf8"), buf]);
      console.log(`[relay] binary from ${playerId} (${buf.length} bytes) -> fanning to ${set.size - 1} others`);
      set.forEach((sock, id) => {
        if (id === playerId) return;
        if (sock.readyState === 1){
          try { sock.send(frame, { binary: true }); } catch(e){}
        }
      });
      return;
    }

    // ---- Text / JSON ----
    let m;
    try { m = JSON.parse(raw.toString()); } catch(e){ return; }
    if (!m || typeof m !== "object") return;

    if (m.type === "relay_join"){
      const room = roomKey(m.room);
      const playerId = String(m.playerId || "").slice(0, 120);
      if (!room || !playerId){
        sendJson(ws, { type: "relay_err", error: "need room + playerId" });
        return;
      }
      // if this socket was registered before, drop it so we don't duplicate
      if (ws.__room && rooms.has(ws.__room)){
        rooms.get(ws.__room).delete(ws.__playerId);
      }
      ws.__room = room;
      ws.__playerId = playerId;
      ws.__role = m.role === "host" ? "host" : "guest";
      if (!rooms.has(room)) rooms.set(room, new Map());
      const set = rooms.get(room);
      // if the same playerId was already in the room (stale tab), remove it
      if (set.has(playerId)){
        const old = set.get(playerId);
        try { if (old.readyState === 1 && old !== ws) old.close(); } catch(e){}
        set.delete(playerId);
      }
      set.set(playerId, ws);
      console.log(`[relay] JOIN ${room} player=${playerId} role=${ws.__role} (room now ${set.size})`);

      sendJson(ws, { type: "relay_ok", room: room, playerId: playerId, role: ws.__role, count: set.size });
      // send the new socket the current roster so it can find the host
      const roster = [];
      set.forEach((sock, id) => roster.push({ playerId: id, role: sock.__role }));
      sendJson(ws, { type: "relay_peers", peers: roster });
      forward(room, playerId, { p: { type: "relay_peer", action: "join", playerId: playerId, role: ws.__role } });
      return;
    }

    // Drop relay-prefixed control messages we don't understand
    if (typeof m.type === "string" && m.type.indexOf("relay_") === 0) return;

    // Ordinary app message (envelope { p, to? })
    const { room, playerId } = ctxOf(ws);
    if (!room || !playerId) return;
    const payload = (m && typeof m === "object" && "p" in m) ? m.p : m;
    if (m && m.to){
      // targeted delivery to one player
      const set = rooms.get(room);
      const target = set && set.get(String(m.to).slice(0, 120));
      if (target && target !== ws) sendJson(target, { p: payload, from: playerId });
    } else {
      // broadcast to all others
      forward(room, playerId, { p: payload });
    }
  });

  ws.on("close", () => {
    const { room, playerId } = ctxOf(ws);
    if (room && rooms.has(room)){
      const set = rooms.get(room);
      set.delete(playerId);
      forward(room, playerId, { p: { type: "relay_peer", action: "leave", playerId: playerId, role: ws.__role } });
      if (set.size === 0) rooms.delete(room);
    }
  });

  ws.on("error", () => {});
});

// Graceful shutdown
process.on("SIGINT", () => { console.log("shutting down"); process.exit(0); });