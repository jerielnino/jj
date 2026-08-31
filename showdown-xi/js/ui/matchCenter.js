/**
 * Showdown XI - Match Center & Real Matchday Tracker
 * Clean matchday countdown, official scoreboard, and live FPL point tally.
 */

class MatchCenterUI {
    constructor() {
        this.activeFixture = null;
        this.timerInterval = null;
    }

    init(fixture) {
        this.activeFixture = fixture;
        this.render();
        this.startCountdownTimer();
    }

    render() {
        const container = document.getElementById('matchCenterSection');
        if (!container) return;

        const home = TEAMS_DATA[this.activeFixture.homeClub] || { name: this.activeFixture.homeClub, badge: '' };
        const away = TEAMS_DATA[this.activeFixture.awayClub] || { name: this.activeFixture.awayClub, badge: '' };
        const deadline = getMatchDeadlineInfo(this.activeFixture.kickoffTime);

        container.innerHTML = `
            <div class="match-center-card">
                <!-- 5-Hour Deadline Countdown Banner -->
                <div class="countdown-hero-banner ${deadline.isLocked ? 'is-locked-banner' : ''}">
                    <div class="countdown-box">
                        <span class="countdown-label">
                            ${deadline.isLocked ? '🔒 5-HOUR PRE-MATCH DEADLINE PASSED' : '⏱️ TIME REMAINING TO LOCK BEST 11 (5h Lock)'}
                        </span>
                        <div class="countdown-digits" id="deadlineCountdownDigits">
                            ${deadline.isLocked ? 'SQUADS LOCKED' : deadline.formattedLockCountdown}
                        </div>
                        <span class="countdown-sub">
                            Kickoff at ${deadline.kickoffDateStr} • Lock at ${deadline.lockDateStr}
                        </span>
                    </div>
                </div>

                <!-- Official Match Scoreboard -->
                <div class="live-scoreboard">
                    <div class="scoreboard-team home">
                        <img src="${home.badge}" alt="${home.name}" class="scoreboard-crest">
                        <span class="score-name">${home.name}</span>
                    </div>
                    <div class="scoreboard-middle">
                        <div class="score-numbers">
                            <span id="scoreHome">${this.activeFixture.homeScore || 0}</span>
                            <span class="score-colon">:</span>
                            <span id="scoreAway">${this.activeFixture.awayScore || 0}</span>
                        </div>
                        <div class="match-status-badge ${this.activeFixture.status === 'LIVE' ? 'is-live' : ''}">
                            <span>${this.activeFixture.status === 'LIVE' ? '🔴 LIVE IN PLAY' : (this.activeFixture.status === 'FINISHED' ? '🏁 FULL TIME' : '📅 SCHEDULED')}</span>
                        </div>
                    </div>
                    <div class="scoreboard-team away">
                        <span class="score-name">${away.name}</span>
                        <img src="${away.badge}" alt="${away.name}" class="scoreboard-crest">
                    </div>
                </div>

                <!-- Match Intel & Venue Card -->
                <div class="match-intel-card">
                    <div class="intel-col">
                        <span class="intel-label">Competition</span>
                        <span class="intel-val">${this.activeFixture.leagueName} • Gameweek ${this.activeFixture.matchweek}</span>
                    </div>
                    <div class="intel-col">
                        <span class="intel-label">Venue</span>
                        <span class="intel-val">${this.activeFixture.venue}</span>
                    </div>
                    <div class="intel-col">
                        <span class="intel-label">Squad Lock Rule</span>
                        <span class="intel-val">Exact 5 hours prior to kickoff</span>
                    </div>
                </div>
            </div>
        `;
    }

    startCountdownTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);

        this.timerInterval = setInterval(() => {
            if (!this.activeFixture) return;
            const deadline = getMatchDeadlineInfo(this.activeFixture.kickoffTime);
            const digits = document.getElementById('deadlineCountdownDigits');
            if (digits) {
                digits.textContent = deadline.isLocked ? 'SQUADS LOCKED' : deadline.formattedLockCountdown;
            }
        }, 1000);
    }
}

window.matchCenterUI = new MatchCenterUI();
