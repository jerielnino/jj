/**
 * Showdown XI - Live Match Simulation & Data Engine
 * Real-time event dispatch, minute-by-minute live stats tally, and FPL score recalculation.
 */

class MatchSimulationEngine {
    constructor() {
        this.activeFixture = null;
        this.currentMinute = 0;
        this.homeScore = 0;
        this.awayScore = 0;
        this.isPlaying = false;
        this.speedMultiplier = 1; // 1x, 2x, 5x, 10x
        this.timer = null;
        this.eventsLog = [];
        this.livePlayerStats = {}; // { [playerId]: { minutes, goals, assists, cleanSheet, goalsConceded, saves, ... } }
        this.listeners = new Set();
    }

    /**
     * Load a fixture and initialize player stats.
     */
    loadFixture(fixture) {
        this.stop();
        this.activeFixture = fixture;
        this.currentMinute = 0;
        this.homeScore = 0;
        this.awayScore = 0;
        this.eventsLog = [];
        this.livePlayerStats = {};

        // Initialize all players in both teams with starting clean sheets & 0 stats
        const players = getMatchPlayers(fixture.homeClub, fixture.awayClub);
        players.forEach(p => {
            this.livePlayerStats[p.id] = {
                minutes: 0,
                goals: 0,
                assists: 0,
                cleanSheet: true,
                goalsConceded: 0,
                saves: 0,
                penSaves: 0,
                penMisses: 0,
                yellowCards: 0,
                redCards: 0,
                ownGoals: 0,
                bonus: 0
            };
        });

        this.notify();
    }

    start(speed = 1) {
        if (!this.activeFixture) return;
        this.speedMultiplier = speed;
        this.isPlaying = true;
        this.clearInterval();

        const tickInterval = Math.max(100, 1000 / this.speedMultiplier);
        this.timer = setInterval(() => {
            this.tick();
        }, tickInterval);

        this.notify();
    }

    pause() {
        this.isPlaying = false;
        this.clearInterval();
        this.notify();
    }

    stop() {
        this.isPlaying = false;
        this.clearInterval();
        this.currentMinute = 0;
        this.homeScore = 0;
        this.awayScore = 0;
        this.eventsLog = [];
    }

    clearInterval() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    jumpToEnd() {
        if (!this.activeFixture) return;
        this.pause();
        while (this.currentMinute < 90) {
            this.tick(true); // silent ticks
        }
        this.notify();
    }

    tick(silent = false) {
        if (this.currentMinute >= 90) {
            this.currentMinute = 90;
            this.pause();
            this.calculateBonusPoints();
            if (!silent) this.notify();
            return;
        }

        this.currentMinute += 1;

        // Update player minutes
        Object.keys(this.livePlayerStats).forEach(pId => {
            this.livePlayerStats[pId].minutes = this.currentMinute;
        });

        // Check for planned match events from simulatedEvents
        const plannedEvents = this.activeFixture.simulatedEvents || [];
        const matchingEvents = plannedEvents.filter(e => e.min === this.currentMinute);

        matchingEvents.forEach(evt => {
            this.processEvent(evt);
        });

        if (!silent) {
            this.notify();
        }
    }

    processEvent(evt) {
        this.eventsLog.unshift({ ...evt, timestamp: Date.now() });

        const playerStats = this.livePlayerStats[evt.player];
        const assistStats = evt.assist ? this.livePlayerStats[evt.assist] : null;

        if (evt.type === 'GOAL') {
            if (evt.team === this.activeFixture.homeClub) {
                this.homeScore += 1;
                // Opponent defense loses clean sheet and increments goals conceded
                this.updateConcededGoals(this.activeFixture.awayClub);
            } else {
                this.awayScore += 1;
                this.updateConcededGoals(this.activeFixture.homeClub);
            }

            if (playerStats) playerStats.goals += 1;
            if (assistStats) assistStats.assists += 1;
        } else if (evt.type === 'SAVE' || evt.type === 'PEN_SAVE') {
            if (playerStats) {
                if (evt.type === 'PEN_SAVE') {
                    playerStats.penSaves += 1;
                } else {
                    playerStats.saves += 1;
                }
            }
        } else if (evt.type === 'YELLOW') {
            if (playerStats) playerStats.yellowCards += 1;
        } else if (evt.type === 'RED') {
            if (playerStats) playerStats.redCards += 1;
        } else if (evt.type === 'OWN_GOAL') {
            if (playerStats) playerStats.ownGoals += 1;
            if (evt.team === this.activeFixture.homeClub) {
                this.awayScore += 1;
                this.updateConcededGoals(this.activeFixture.homeClub);
            } else {
                this.homeScore += 1;
                this.updateConcededGoals(this.activeFixture.awayClub);
            }
        }
    }

    updateConcededGoals(concedingClubId) {
        const teamData = TEAMS_DATA[concedingClubId];
        if (!teamData) return;

        teamData.players.forEach(p => {
            const pStats = this.livePlayerStats[p.id];
            if (pStats) {
                pStats.cleanSheet = false;
                pStats.goalsConceded += 1;
            }
        });
    }

    calculateBonusPoints() {
        // Calculate BPS ranking for top 3 players
        const allPlayerScores = [];
        Object.entries(this.livePlayerStats).forEach(([pId, stats]) => {
            const player = getPlayerById(pId);
            if (!player) return;
            const res = calculatePlayerFPLPoints(player, stats, false, false);
            allPlayerScores.push({ playerId: pId, points: res.basePoints });
        });

        allPlayerScores.sort((a, b) => b.points - a.points);

        if (allPlayerScores.length > 0 && allPlayerScores[0].points > 0) {
            this.livePlayerStats[allPlayerScores[0].playerId].bonus = 3;
        }
        if (allPlayerScores.length > 1 && allPlayerScores[1].points > 0) {
            this.livePlayerStats[allPlayerScores[1].playerId].bonus = 2;
        }
        if (allPlayerScores.length > 2 && allPlayerScores[2].points > 0) {
            this.livePlayerStats[allPlayerScores[2].playerId].bonus = 1;
        }
    }

    subscribe(callback) {
        this.listeners.add(callback);
        return () => this.listeners.delete(callback);
    }

    notify() {
        const state = {
            fixture: this.activeFixture,
            minute: this.currentMinute,
            homeScore: this.homeScore,
            awayScore: this.awayScore,
            isPlaying: this.isPlaying,
            isFinished: this.currentMinute >= 90,
            events: this.eventsLog,
            livePlayerStats: this.livePlayerStats
        };
        this.listeners.forEach(cb => cb(state));
    }
}

// Global singleton
window.matchSimulator = new MatchSimulationEngine();
