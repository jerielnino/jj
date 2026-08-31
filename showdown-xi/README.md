# ⚽ Showdown XI - Match Clash Fantasy (EPL & La Liga)

An online joinable fantasy football game where managers compete match-by-match by drafting their **Best 11** from both competing clubs before a **strict 5-hour pre-match lock deadline**. Points are calculated against real-time match events using the **official Fantasy Premier League (FPL) scoring system**.

---

## 🌟 Key Features

1. **5-Hour Pre-Match Lock Engine**:
   - Strictly enforces squad submission before the 5-hour deadline countdown expires.
   - Opponent squads remain hidden until the deadline passes, followed by a live simultaneous reveal.

2. **Marquee Clashes (Premier League & La Liga)**:
   - Curated high-stakes fixtures: Arsenal vs Liverpool, Chelsea vs Man United, Real Madrid vs Barcelona (El Clásico), Atletico vs Real Madrid, Man City vs Spurs, etc.

3. **Tactical 2D Pitch Builder**:
   - Multiple tactical formations: 4-3-3, 4-4-2, 3-5-2, 3-4-3, 5-3-2, 4-2-3-1, 5-2-3.
   - Drag & drop / slot-based selection from combined 36+ player rosters.
   - Captain (2x points) & Vice-Captain assignment badges.
   - Auto Best 11 generator for quick drafting.

4. **Official FPL Scoring Engine**:
   - Goals: FWD (+4), MID (+5), DEF/GK (+6)
   - Assists: +3
   - Clean Sheets (60+ mins): GK/DEF (+4), MID (+1)
   - Goalkeeper Saves (+1 per 3 saves), Penalty Saves (+5)
   - Goals Conceded (-1 per 2 conceded for DEF/GK)
   - Cards & Discipline: Yellow (-1), Red (-3), Own Goal (-2), Penalty Miss (-2)
   - Bonus Points System (BPS +1 to +3)

5. **Multiplayer Rooms & Leaderboards**:
   - Instant Room Codes (e.g. `ARS-LIV-401`).
   - One-click shareable invite links and URL hash state syncing.
   - Live room standings with live point updates and rank badges.
   - Side-by-side squad comparison matrix with differential player tags.

6. **Live Match Simulator & Action Feed**:
   - Minute-by-minute live scoreboard with live commentary, goals, cards, and instant FPL point recalculation.

---

## 🚀 How to Host on GitHub Pages (Zero Server / 100% Free)

1. Push this folder (`showdown-xi`) or its files to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Showdown XI"
   git remote add origin https://github.com/YOUR_USERNAME/showdown-xi.git
   git push -u origin main
   ```
2. Go to your repository on GitHub:
   - Click **Settings** > **Pages** (on the left sidebar).
   - Under **Build and deployment** > **Branch**, select `main` branch and `/ (root)` folder.
   - Click **Save**.
3. In ~1 minute, your app will be live at:
   `https://YOUR_USERNAME.github.io/showdown-xi/`

---

## 📱 Tech Stack
- **Frontend**: Vanilla HTML5, Modern CSS3 (Variables, Glassmorphism, 2D Pitch Turf Markings), ES6+ JavaScript.
- **Data & Engine**: Offline-ready modular engines for FPL rules and match simulation.
- **Zero-Backend Sync**: BroadcastChannel, LocalStorage, and URL hash routing.
