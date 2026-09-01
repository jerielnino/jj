/**
 * Showdown XI - Multiplayer Room & League Manager
 * Manages zero-server multiplayer rooms, join codes, URL sharing, squad storage,
 * and tracks both Match Score (per fixture) and Overall Total Score (cumulative across all room fixtures).
 * 100% Real Human Users only (AI Bots completely removed).
 */

class RoomManager {
    constructor() {
        this.currentRoom = null;
        this.storageKey = 'showdown_xi_rooms_v2'; // upgraded storage key
        this.userProfileKey = 'showdown_xi_user_profile';
        this.userProfile = this.loadUserProfile();
        this.broadcastChannel = null;

        if (typeof BroadcastChannel !== 'undefined') {
            this.broadcastChannel = new BroadcastChannel('showdown_xi_sync');
            this.broadcastChannel.onmessage = (event) => {
                this.handleBroadcastMessage(event.data);
            };
        }
    }

    loadUserProfile() {
        if (window.authManager && window.authManager.currentUser) {
            const u = window.authManager.currentUser;
            return {
                id: u.username,
                name: u.displayName || u.username,
                avatar: u.avatar || '⚽',
                favClub: 'ARS'
            };
        }

        try {
            const saved = localStorage.getItem(this.userProfileKey);
            if (saved) return JSON.parse(saved);
        } catch (e) {}

        const defaultUser = {
            id: 'jj7758',
            name: 'JJ (Commissioner)',
            avatar: '👑',
            favClub: 'LIV'
        };
        this.saveUserProfile(defaultUser);
        return defaultUser;
    }

    saveUserProfile(profile) {
        this.userProfile = profile;
        try {
            localStorage.setItem(this.userProfileKey, JSON.stringify(profile));
        } catch (e) {}
    }

    createRoom(fixtureId, roomName = null) {
        const fixture = FIXTURES_DATA.find(f => f.id === fixtureId) || FIXTURES_DATA[0];
        const randomCode = Math.random().toString(36).substring(2, 7).toUpperCase();
        const code = `${fixture.homeClub}-${fixture.awayClub}-${randomCode}`;

        const currentUser = this.loadUserProfile();

        const room = {
            code,
            name: roomName || `${fixture.homeClub} vs ${fixture.awayClub} Showdown Room`,
            fixtureId: fixture.id,
            createdAt: Date.now(),
            creatorId: currentUser.id,
            participants: [
                {
                    userId: currentUser.id,
                    name: currentUser.name,
                    avatar: currentUser.avatar,
                    isHost: true,
                    squads: {}, // { [fixtureId]: { playerIds: [], captainId, viceCaptainId, formation, matchPoints: 0, submittedAt } }
                    squad: null, // current fixture squad shortcut
                    matchScore: 0, // match score for active fixture
                    totalScore: 0, // cumulative total score in room
                    submittedAt: null
                }
            ]
        };

        this.saveRoom(room);
        this.currentRoom = room;
        this.broadcast({ type: 'ROOM_CREATED', room });
        return room;
    }

    joinRoom(roomCode) {
        const cleanCode = roomCode.trim().toUpperCase();
        let room = this.getRoom(cleanCode);
        const currentUser = this.loadUserProfile();

        if (!room) {
            const parts = cleanCode.split('-');
            const fixture = FIXTURES_DATA.find(f => f.homeClub === parts[0] && f.awayClub === parts[1]) || FIXTURES_DATA[0];
            room = {
                code: cleanCode,
                name: `${fixture.homeClub} vs ${fixture.awayClub} League`,
                fixtureId: fixture.id,
                createdAt: Date.now(),
                creatorId: 'host_peer',
                participants: []
            };
        }

        // Clean any legacy bot entries
        room.participants = (room.participants || []).filter(p => !p.isBot && !p.userId?.startsWith('bot_'));

        // Add current user if not present
        const existingIdx = room.participants.findIndex(p => p.userId === currentUser.id);
        if (existingIdx === -1) {
            room.participants.unshift({
                userId: currentUser.id,
                name: currentUser.name,
                avatar: currentUser.avatar,
                isHost: room.participants.length === 0,
                squads: {},
                squad: null,
                matchScore: 0,
                totalScore: 0,
                submittedAt: null
            });
        }

        this.saveRoom(room);
        this.currentRoom = room;
        this.broadcast({ type: 'ROOM_JOINED', roomCode: cleanCode, user: currentUser });
        return room;
    }

    submitSquad(roomCode, squadData) {
        const room = this.getRoom(roomCode) || this.currentRoom;
        if (!room) return false;

        const currentUser = this.loadUserProfile();
        let participant = room.participants.find(p => p.userId === currentUser.id);
        if (!participant) {
            participant = {
                userId: currentUser.id,
                name: currentUser.name,
                avatar: currentUser.avatar,
                isHost: false,
                squads: {},
                squad: null,
                matchScore: 0,
                totalScore: 0,
                submittedAt: null
            };
            room.participants.push(participant);
        }

        if (!participant.squads) participant.squads = {};

        const activeFixtureId = room.fixtureId;
        participant.squads[activeFixtureId] = {
            ...squadData,
            fixtureId: activeFixtureId,
            submittedAt: Date.now()
        };
        participant.squad = participant.squads[activeFixtureId];
        participant.submittedAt = Date.now();

        this.currentRoom = room;
        // Recalculate total score & active match score
        this.recalculateParticipantScores(participant, activeFixtureId);

        this.saveRoom(room);
        this.broadcast({ type: 'SQUAD_UPDATED', roomCode, userId: currentUser.id, squad: squadData });
        return true;
    }

    recalculateParticipantScores(participant, currentFixtureId = null) {
        if (!participant.squads) return;
        let total = 0;
        const targetFixtureId = currentFixtureId || (this.currentRoom ? this.currentRoom.fixtureId : null);
        for (const fId in participant.squads) {
            const sq = participant.squads[fId];
            if (sq && sq.playerIds && sq.playerIds.length === 11) {
                const res = calculateSquadTotalPoints(sq.playerIds, sq.benchIds || [], sq.captainId, sq.viceCaptainId, {});
                sq.matchPoints = res.totalScore;
                total += res.totalScore;
            }
        }
        participant.totalScore = total;
        if (targetFixtureId && participant.squads[targetFixtureId]) {
            participant.matchScore = participant.squads[targetFixtureId].matchPoints || 0;
        } else {
            participant.matchScore = 0;
        }
    }

    cleanAndRecalculateRoom(room) {
        if (!room || !room.participants) return room;
        room.participants = room.participants.filter(p => !p.isBot && !p.userId?.startsWith('bot_'));
        for (const p of room.participants) {
            this.recalculateParticipantScores(p, room.fixtureId);
        }
        return room;
    }

    findRoomByFixture(fixtureId) {
        if (typeof getGitRoomByFixture === 'function') {
            const gitRoom = getGitRoomByFixture(fixtureId);
            if (gitRoom) {
                return this.cleanAndRecalculateRoom(gitRoom);
            }
        }
        return null;
    }

    getRoom(code) {
        if (typeof getGitRoom === 'function') {
            const gitRoom = getGitRoom(code);
            if (gitRoom) {
                return this.cleanAndRecalculateRoom(gitRoom);
            }
        }
        return null;
    }

    getMyRooms() {
        if (typeof getAllGitRooms === 'function') {
            const rooms = getAllGitRooms();
            return rooms.map(r => this.cleanAndRecalculateRoom(r));
        }
        return [];
    }

    saveRoom(room) {
        if (!room || !room.code) return;
        if (room.participants) {
            room.participants = room.participants.filter(p => !p.isBot && !p.userId?.startsWith('bot_'));
        }
        if (typeof setGitRoom === 'function') {
            setGitRoom(room);
        }
        // Auto-push to GitHub in background
        if (window.gitSyncService && window.gitSyncService.isConfigured()) {
            window.gitSyncService.pushToGitHub().catch(e => console.warn('Git sync:', e));
        }
    }

    generateShareableLink(roomCode) {
        const baseUrl = window.location.origin + window.location.pathname;
        return `${baseUrl}#room=${encodeURIComponent(roomCode)}`;
    }

    broadcast(message) {
        if (this.broadcastChannel) {
            this.broadcastChannel.postMessage(message);
        }
    }

    handleBroadcastMessage(msg) {
        if (!msg) return;
        if (this.currentRoom && (msg.roomCode === this.currentRoom.code || msg.room?.code === this.currentRoom.code)) {
            const updated = this.getRoom(this.currentRoom.code);
            if (updated) {
                this.currentRoom = updated;
                if (window.leaderboardUI) window.leaderboardUI.render(this.currentRoom);
            }
        }
    }
}

window.roomManager = new RoomManager();
