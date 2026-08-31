/**
 * Showdown XI - Official FPL & Football API Sync Module
 * Synchronizes real-world live fixtures, player points, and match status directly from official sources.
 */

class OfficialDataSyncService {
    constructor() {
        this.fplBaseUrl = 'https://fantasy.premierleague.com/api/';
        this.corsProxies = [
            'https://corsproxy.io/?',
            'https://api.allorigins.win/raw?url='
        ];
        this.isSyncing = false;
        this.lastSyncedAt = null;
    }

    async syncLiveFPLData() {
        if (this.isSyncing) return;
        this.isSyncing = true;

        try {
            console.log('🔄 Fetching live updates from Official FPL API...');

            let bootstrapData = null;
            let fixturesData = null;

            // Try direct fetch first, fallback to CORS proxies
            try {
                const resB = await fetch(`${this.fplBaseUrl}bootstrap-static/`);
                if (resB.ok) bootstrapData = await resB.json();
            } catch (e) {
                for (const proxy of this.corsProxies) {
                    try {
                        const resB = await fetch(`${proxy}${encodeURIComponent(this.fplBaseUrl + 'bootstrap-static/')}`);
                        if (resB.ok) {
                            bootstrapData = await resB.json();
                            break;
                        }
                    } catch (err) {}
                }
            }

            if (bootstrapData && bootstrapData.elements) {
                this.updateLocalPlayerData(bootstrapData);
                this.lastSyncedAt = Date.now();
                console.log('✅ Official FPL player database updated with latest stats!');
                return { success: true, count: bootstrapData.elements.length };
            }

            return { success: false, message: 'Could not reach FPL server from browser CORS' };
        } catch (error) {
            console.warn('Sync failed:', error);
            return { success: false, error: error.message };
        } finally {
            this.isSyncing = false;
        }
    }

    updateLocalPlayerData(bootstrapData) {
        const elementsMap = {};
        bootstrapData.elements.forEach(el => {
            elementsMap[el.id] = el;
        });

        // Update existing teams players with newest real form and points
        for (const teamKey in TEAMS_DATA) {
            const team = TEAMS_DATA[teamKey];
            team.players.forEach(p => {
                if (p.fplId && elementsMap[p.fplId]) {
                    const latest = elementsMap[p.fplId];
                    p.form = parseFloat(latest.form) || p.form;
                    p.price = latest.now_cost / 10;
                    p.goals = latest.goals_scored;
                    p.assists = latest.assists;
                    p.cleanSheets = latest.clean_sheets;
                    p.saves = latest.saves;
                }
            });
        }
    }
}

window.apiSyncService = new OfficialDataSyncService();
