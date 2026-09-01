/**
 * Showdown XI - GitHub REST API Sync Engine
 * Allows direct browser-to-GitHub commits and pulls for permanent multi-device squad and room storage.
 */

class GitSyncService {
    constructor() {
        this.STORAGE_KEY = 'showdown_xi_github_sync_config';
        this.config = this.loadConfig();
        this.isSyncing = false;
    }

    loadConfig() {
        try {
            const raw = localStorage.getItem(this.STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                return {
                    repo: parsed.repo || 'jerielnino/jj',
                    branch: parsed.branch || 'main',
                    filePath: parsed.filePath || 'showdown-xi/js/data/savedSquads.js',
                    token: parsed.token || '',
                    autoPush: typeof parsed.autoPush === 'boolean' ? parsed.autoPush : false,
                    lastSyncedAt: parsed.lastSyncedAt || null
                };
            }
        } catch (e) {}

        return {
            repo: 'jerielnino/jj',
            branch: 'main',
            filePath: 'showdown-xi/js/data/savedSquads.js',
            token: '',
            autoPush: false,
            lastSyncedAt: null
        };
    }

    saveConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.config));
        } catch (e) {}
    }

    getFilePath() {
        if (this.config.filePath) return this.config.filePath;
        const repo = (this.config.repo || '').trim().toLowerCase();
        if (repo.includes('jerielnino/jj')) {
            return 'showdown-xi/js/data/savedSquads.js';
        }
        return 'js/data/savedSquads.js';
    }

    isConfigured() {
        return Boolean(this.config.repo && this.config.token);
    }

    generateFileContent() {
        const localRooms = JSON.parse(localStorage.getItem('showdown_xi_rooms_v2') || '{}');
        const localMaster = JSON.parse(localStorage.getItem('showdown_xi_master_squads') || '{}');
        const currentUserId = window.authManager?.currentUser?.username || window.roomManager?.userProfile?.id || 'jj7758';

        const mergedRooms = { ...(typeof SAVED_ROOMS_DATA !== 'undefined' ? SAVED_ROOMS_DATA : {}), ...localRooms };
        const mergedSquads = { ...(typeof SAVED_SQUADS_DATA !== 'undefined' ? SAVED_SQUADS_DATA : {}), ...localMaster };
        const mergedUserSquads = { ...(typeof SAVED_USER_SQUADS_DATA !== 'undefined' ? SAVED_USER_SQUADS_DATA : {}) };

        if (!mergedUserSquads[currentUserId]) mergedUserSquads[currentUserId] = {};
        mergedUserSquads[currentUserId] = { ...mergedUserSquads[currentUserId], ...localMaster };

        return `/**
 * Showdown XI - Permanent Git-Backed Rooms & Squads Database
 * This file is tracked in Git to provide permanent multiplayer rooms, user profiles, and squad rosters across all devices.
 */

// 1. Permanent Default Rooms (Separated by Room Code and Fixture)
const SAVED_ROOMS_DATA = ${JSON.stringify(mergedRooms, null, 4)};

// 2. Permanent User Squads (Separated by User ID -> Fixture ID -> Squad)
const SAVED_USER_SQUADS_DATA = ${JSON.stringify(mergedUserSquads, null, 4)};

// 3. Baseline Fixture Squads Map
const SAVED_SQUADS_DATA = ${JSON.stringify(mergedSquads, null, 4)};

// Helper Functions
function getGitRoom(roomCode) {
    if (typeof SAVED_ROOMS_DATA !== 'undefined' && SAVED_ROOMS_DATA[roomCode]) {
        return JSON.parse(JSON.stringify(SAVED_ROOMS_DATA[roomCode]));
    }
    return null;
}

function getGitRoomByFixture(fixtureId) {
    if (typeof SAVED_ROOMS_DATA !== 'undefined') {
        for (const code in SAVED_ROOMS_DATA) {
            if (SAVED_ROOMS_DATA[code].fixtureId === fixtureId) {
                return JSON.parse(JSON.stringify(SAVED_ROOMS_DATA[code]));
            }
        }
    }
    return null;
}

function getGitUserSquad(userId, fixtureId) {
    if (typeof SAVED_USER_SQUADS_DATA !== 'undefined' && SAVED_USER_SQUADS_DATA[userId] && SAVED_USER_SQUADS_DATA[userId][fixtureId]) {
        return JSON.parse(JSON.stringify(SAVED_USER_SQUADS_DATA[userId][fixtureId]));
    }
    return getGitSavedSquad(fixtureId);
}

function getGitSavedSquad(fixtureId) {
    if (typeof SAVED_SQUADS_DATA !== 'undefined' && SAVED_SQUADS_DATA[fixtureId]) {
        return JSON.parse(JSON.stringify(SAVED_SQUADS_DATA[fixtureId]));
    }
    return null;
}

function exportSavedSquadsFile() {
    const localRooms = JSON.parse(localStorage.getItem('showdown_xi_rooms_v2') || '{}');
    const localMaster = JSON.parse(localStorage.getItem('showdown_xi_master_squads') || '{}');
    const currentUserId = window.authManager?.currentUser?.username || window.roomManager?.userProfile?.id || 'jj7758';

    const mergedRooms = { ...(typeof SAVED_ROOMS_DATA !== 'undefined' ? SAVED_ROOMS_DATA : {}), ...localRooms };
    const mergedSquads = { ...(typeof SAVED_SQUADS_DATA !== 'undefined' ? SAVED_SQUADS_DATA : {}), ...localMaster };
    const mergedUserSquads = { ...(typeof SAVED_USER_SQUADS_DATA !== 'undefined' ? SAVED_USER_SQUADS_DATA : {}) };

    if (!mergedUserSquads[currentUserId]) mergedUserSquads[currentUserId] = {};
    mergedUserSquads[currentUserId] = { ...mergedUserSquads[currentUserId], ...localMaster };

    const content = '/**\\n' +
        ' * Showdown XI - Permanent Git-Backed Rooms & Squads Database\\n' +
        ' * This file is tracked in Git to provide permanent multiplayer rooms, user profiles, and squad rosters across all devices.\\n' +
        ' */\\n\\n' +
        '// 1. Permanent Default Rooms (Separated by Room Code and Fixture)\\n' +
        'const SAVED_ROOMS_DATA = ' + JSON.stringify(mergedRooms, null, 4) + ';\\n\\n' +
        '// 2. Permanent User Squads (Separated by User ID -> Fixture ID -> Squad)\\n' +
        'const SAVED_USER_SQUADS_DATA = ' + JSON.stringify(mergedUserSquads, null, 4) + ';\\n\\n' +
        '// 3. Baseline Fixture Squads Map\\n' +
        'const SAVED_SQUADS_DATA = ' + JSON.stringify(mergedSquads, null, 4) + ';\\n\\n' +
        'function getGitRoom(roomCode) {\\n' +
        '    if (typeof SAVED_ROOMS_DATA !== \\'undefined\\' && SAVED_ROOMS_DATA[roomCode]) {\\n' +
        '        return JSON.parse(JSON.stringify(SAVED_ROOMS_DATA[roomCode]));\\n' +
        '    }\\n' +
        '    return null;\\n' +
        '}\\n\\n' +
        'function getGitRoomByFixture(fixtureId) {\\n' +
        '    if (typeof SAVED_ROOMS_DATA !== \\'undefined\\') {\\n' +
        '        for (const code in SAVED_ROOMS_DATA) {\\n' +
        '            if (SAVED_ROOMS_DATA[code].fixtureId === fixtureId) {\\n' +
        '                return JSON.parse(JSON.stringify(SAVED_ROOMS_DATA[code]));\\n' +
        '            }\\n' +
        '        }\\n' +
        '    }\\n' +
        '    return null;\\n' +
        '}\\n\\n' +
        'function getGitUserSquad(userId, fixtureId) {\\n' +
        '    if (typeof SAVED_USER_SQUADS_DATA !== \\'undefined\\' && SAVED_USER_SQUADS_DATA[userId] && SAVED_USER_SQUADS_DATA[userId][fixtureId]) {\\n' +
        '        return JSON.parse(JSON.stringify(SAVED_USER_SQUADS_DATA[userId][fixtureId]));\\n' +
        '    }\\n' +
        '    return getGitSavedSquad(fixtureId);\\n' +
        '}\\n\\n' +
        'function getGitSavedSquad(fixtureId) {\\n' +
        '    if (typeof SAVED_SQUADS_DATA !== \\'undefined\\' && SAVED_SQUADS_DATA[fixtureId]) {\\n' +
        '        return JSON.parse(JSON.stringify(SAVED_SQUADS_DATA[fixtureId]));\\n' +
        '    }\\n' +
        '    return null;\\n' +
        '}\\n';

    const blob = new Blob([content], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'savedSquads.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
`;
    }

    async pushToGitHub() {
        if (!this.isConfigured()) {
            this.openSyncModal();
            return { success: false, message: 'Please enter your GitHub Repository and Access Token.' };
        }

        if (this.isSyncing) return { success: false, message: 'Sync in progress...' };
        this.isSyncing = true;
        this.updateSyncUIState(true, '⬆️ Pushing to GitHub...');

        try {
            const repo = this.config.repo.trim().replace(/^https?:\/\/github\.com\//, '').replace(/\/$/, '');
            const branch = (this.config.branch || 'main').trim();
            const token = this.config.token.trim();
            const filePath = this.getFilePath();

            // Multi-strategy uncached SHA resolver (Contents API + Git Trees fallback)
            const fetchLatestSha = async () => {
                // Strategy 1: GitHub Contents API
                try {
                    const getRes = await fetch(`https://api.github.com/repos/${repo}/contents/${filePath}?ref=${encodeURIComponent(branch)}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Accept': 'application/vnd.github+json'
                        }
                    });
                    if (getRes.ok) {
                        const getData = await getRes.json();
                        if (getData.sha) return getData.sha;
                    } else if (getRes.status === 401) {
                        throw new Error('401 Bad credentials (Token was revoked or expired). Please generate a new GitHub Personal Access Token and paste it in the Git Sync settings.');
                    }
                } catch (err) {
                    if (err.message.includes('401')) throw err;
                    console.warn('Contents API SHA lookup error, attempting Git Trees fallback...', err);
                }

                // Strategy 2: GitHub Git Trees API fallback
                try {
                    const treeRes = await fetch(`https://api.github.com/repos/${repo}/git/trees/${encodeURIComponent(branch)}?recursive=1`, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Accept': 'application/vnd.github+json'
                        }
                    });
                    if (treeRes.ok) {
                        const treeData = await treeRes.json();
                        const matchingItem = (treeData.tree || []).find(item => item.path === filePath || item.path.endsWith(filePath));
                        if (matchingItem && matchingItem.sha) {
                            return matchingItem.sha;
                        }
                    }
                } catch (treeErr) {
                    console.warn('Git Trees SHA lookup error:', treeErr);
                }

                return null;
            };

            // 1. Get current file sha from GitHub
            let currentSha = await fetchLatestSha();

            // 2. Encode UTF-8 content to Base64
            const contentString = this.generateFileContent();
            const utf8Bytes = new TextEncoder().encode(contentString);
            let binary = '';
            for (let i = 0; i < utf8Bytes.length; i++) {
                binary += String.fromCharCode(utf8Bytes[i]);
            }
            const base64Content = btoa(binary);

            const buildPayload = (sha) => {
                const body = {
                    message: `Update Showdown XI Squads & Rooms Database [${new Date().toISOString()}]`,
                    content: base64Content,
                    branch: branch
                };
                if (sha) {
                    body.sha = sha;
                }
                return JSON.stringify(body);
            };

            // 3. Commit file via GitHub Contents API
            let putRes = await fetch(`https://api.github.com/repos/${repo}/contents/${filePath}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/vnd.github+json',
                    'Content-Type': 'application/json'
                },
                body: buildPayload(currentSha)
            });

            // 4. If SHA mismatch or missing (409 Conflict / 422), re-fetch latest SHA and retry
            if (!putRes.ok && (putRes.status === 409 || putRes.status === 422)) {
                console.warn('Retrying commit with fresh SHA from GitHub tree...');
                currentSha = await fetchLatestSha();
                putRes = await fetch(`https://api.github.com/repos/${repo}/contents/${filePath}`, {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/vnd.github+json',
                        'Content-Type': 'application/json'
                    },
                    body: buildPayload(currentSha)
                });
            }

            if (!putRes.ok) {
                const errData = await putRes.json().catch(() => ({}));
                if (putRes.status === 401) {
                    throw new Error('401 Bad credentials (Token was revoked or expired). Please generate a new GitHub Personal Access Token and paste it in the Git Sync settings.');
                }
                throw new Error(errData.message || `GitHub API error: HTTP ${putRes.status}`);
            }

            this.saveConfig({ lastSyncedAt: Date.now() });
            this.updateSyncUIState(false, '✅ Synced to GitHub');
            return { success: true };
        } catch (error) {
            console.error('Git Push Error:', error);
            this.updateSyncUIState(false, '❌ Git Sync Error');
            alert(`⚠️ Git Push Failed: ${error.message}`);
            this.openSyncModal();
            return { success: false, error: error.message };
        } finally {
            this.isSyncing = false;
        }
    }

    async pullFromGitHub() {
        if (!this.isConfigured()) {
            this.openSyncModal();
            return { success: false, message: 'Please enter your GitHub Repository name.' };
        }

        if (this.isSyncing) return;
        this.isSyncing = true;
        this.updateSyncUIState(true, '⬇️ Pulling from GitHub...');

        try {
            const repo = this.config.repo.trim().replace(/^https?:\/\/github\.com\//, '').replace(/\/$/, '');
            const branch = (this.config.branch || 'main').trim();
            const filePath = this.getFilePath();
            const rawUrl = `https://raw.githubusercontent.com/${repo}/${branch}/${filePath}?t=${Date.now()}`;

            const res = await fetch(rawUrl);
            if (!res.ok) throw new Error(`Could not fetch savedSquads.js (HTTP ${res.status})`);

            const codeText = await res.text();
            
            // Safe evaluation of the remote data
            const sandbox = new Function(codeText + '\nreturn { SAVED_ROOMS_DATA, SAVED_USER_SQUADS_DATA, SAVED_SQUADS_DATA };');
            const data = sandbox();

            if (data.SAVED_SQUADS_DATA) {
                window.SAVED_SQUADS_DATA = data.SAVED_SQUADS_DATA;
                localStorage.setItem('showdown_xi_master_squads', JSON.stringify(data.SAVED_SQUADS_DATA));
            }
            if (data.SAVED_ROOMS_DATA) {
                window.SAVED_ROOMS_DATA = data.SAVED_ROOMS_DATA;
                const localRooms = JSON.parse(localStorage.getItem('showdown_xi_rooms_v2') || '{}');
                localStorage.setItem('showdown_xi_rooms_v2', JSON.stringify({ ...data.SAVED_ROOMS_DATA, ...localRooms }));
            }
            if (data.SAVED_USER_SQUADS_DATA) {
                window.SAVED_USER_SQUADS_DATA = data.SAVED_USER_SQUADS_DATA;
            }

            this.saveConfig({ lastSyncedAt: Date.now() });
            this.updateSyncUIState(false, '✅ Pulled from Git');

            // Refresh UI if active
            if (window.pitchBuilder && window.pitchBuilder.activeFixture) {
                window.pitchBuilder.loadSavedSquad();
                window.pitchBuilder.render();
            }
            if (window.roomManager && window.roomManager.currentRoom) {
                window.leaderboardUI?.render(window.roomManager.currentRoom);
            }

            alert('🎉 Successfully pulled the latest squads and rooms from GitHub!');
            return { success: true };
        } catch (error) {
            console.error('Git Pull Error:', error);
            this.updateSyncUIState(false, '❌ Pull Failed');
            alert(`⚠️ Git Pull Failed: ${error.message}`);
            return { success: false, error: error.message };
        } finally {
            this.isSyncing = false;
        }
    }

    updateSyncUIState(loading, text) {
        const btn = document.getElementById('btnGitSync');
        if (!btn) return;
        const textEl = btn.querySelector('.btn-text');
        if (textEl) textEl.textContent = text;
        btn.classList.toggle('syncing', loading);
    }

    openSyncModal() {
        const modal = document.getElementById('gitSyncModal');
        if (!modal) return;

        const repoInput = document.getElementById('gitRepoInput');
        const branchInput = document.getElementById('gitBranchInput');
        const tokenInput = document.getElementById('gitTokenInput');
        const autoPushCheck = document.getElementById('gitAutoPushCheck');
        const statusText = document.getElementById('gitSyncStatusInfo');

        if (repoInput) repoInput.value = this.config.repo || '';
        if (branchInput) branchInput.value = this.config.branch || 'main';
        if (tokenInput) tokenInput.value = this.config.token || '';
        if (autoPushCheck) autoPushCheck.checked = Boolean(this.config.autoPush);
        if (statusText) {
            statusText.textContent = this.config.lastSyncedAt
                ? `Last Synced: ${new Date(this.config.lastSyncedAt).toLocaleString()}`
                : 'Not synced yet';
        }

        modal.classList.add('open');
    }

    closeSyncModal() {
        const modal = document.getElementById('gitSyncModal');
        if (modal) modal.classList.remove('open');
    }

    init() {
        const btnHeader = document.getElementById('btnGitSync');
        if (btnHeader) {
            btnHeader.addEventListener('click', () => {
                this.openSyncModal();
            });
        }

        const modal = document.getElementById('gitSyncModal');
        if (!modal) return;

        modal.querySelectorAll('.modal-close-btn').forEach(b => {
            b.addEventListener('click', () => this.closeSyncModal());
        });

        const btnSaveConfig = document.getElementById('btnSaveGitConfig');
        if (btnSaveConfig) {
            btnSaveConfig.addEventListener('click', () => {
                const repo = document.getElementById('gitRepoInput')?.value.trim();
                const branch = document.getElementById('gitBranchInput')?.value.trim() || 'main';
                const token = document.getElementById('gitTokenInput')?.value.trim();
                const autoPush = document.getElementById('gitAutoPushCheck')?.checked || false;

                this.saveConfig({ repo, branch, token, autoPush });
                alert('✅ GitHub Sync configuration saved locally!');
                this.closeSyncModal();
            });
        }

        const btnPushNow = document.getElementById('btnGitPushNow');
        if (btnPushNow) {
            btnPushNow.addEventListener('click', async () => {
                const repo = document.getElementById('gitRepoInput')?.value.trim();
                const branch = document.getElementById('gitBranchInput')?.value.trim() || 'main';
                const token = document.getElementById('gitTokenInput')?.value.trim();
                const autoPush = document.getElementById('gitAutoPushCheck')?.checked || false;

                this.saveConfig({ repo, branch, token, autoPush });
                const res = await this.pushToGitHub();
                if (res.success) {
                    alert('🎉 Successfully committed and pushed squads to your GitHub repository!');
                    this.closeSyncModal();
                }
            });
        }

        const btnPullNow = document.getElementById('btnGitPullNow');
        if (btnPullNow) {
            btnPullNow.addEventListener('click', async () => {
                const repo = document.getElementById('gitRepoInput')?.value.trim();
                const branch = document.getElementById('gitBranchInput')?.value.trim() || 'main';
                this.saveConfig({ repo, branch });
                await this.pullFromGitHub();
            });
        }

        const btnExportFile = document.getElementById('btnGitExportFile');
        if (btnExportFile) {
            btnExportFile.addEventListener('click', () => {
                if (typeof exportSavedSquadsFile === 'function') {
                    exportSavedSquadsFile();
                }
            });
        }
    }
}

window.gitSyncService = new GitSyncService();
