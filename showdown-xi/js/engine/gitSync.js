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
        const mergedRooms = typeof SAVED_ROOMS_DATA !== 'undefined' ? SAVED_ROOMS_DATA : {};
        const mergedSquads = typeof SAVED_SQUADS_DATA !== 'undefined' ? SAVED_SQUADS_DATA : {};
        const mergedUserSquads = typeof SAVED_USER_SQUADS_DATA !== 'undefined' ? SAVED_USER_SQUADS_DATA : {};

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

function getAllGitRooms() {
    if (typeof SAVED_ROOMS_DATA !== 'undefined') {
        return Object.values(SAVED_ROOMS_DATA).map(r => JSON.parse(JSON.stringify(r)));
    }
    return [];
}

function setGitRoom(room) {
    if (typeof SAVED_ROOMS_DATA !== 'undefined' && room && room.code) {
        SAVED_ROOMS_DATA[room.code] = JSON.parse(JSON.stringify(room));
    }
}

function getGitUserSquad(userId, fixtureId) {
    if (typeof SAVED_USER_SQUADS_DATA !== 'undefined' && SAVED_USER_SQUADS_DATA[userId] && SAVED_USER_SQUADS_DATA[userId][fixtureId]) {
        return JSON.parse(JSON.stringify(SAVED_USER_SQUADS_DATA[userId][fixtureId]));
    }
    return getGitSavedSquad(fixtureId);
}

function setGitUserSquad(userId, fixtureId, squadData) {
    if (!fixtureId || !squadData) return;
    const cleanSquad = JSON.parse(JSON.stringify(squadData));
    if (typeof SAVED_USER_SQUADS_DATA !== 'undefined') {
        if (!SAVED_USER_SQUADS_DATA[userId]) SAVED_USER_SQUADS_DATA[userId] = {};
        SAVED_USER_SQUADS_DATA[userId][fixtureId] = cleanSquad;
    }
    if (typeof SAVED_SQUADS_DATA !== 'undefined') {
        SAVED_SQUADS_DATA[fixtureId] = cleanSquad;
    }
}

function getGitSavedSquad(fixtureId) {
    if (typeof SAVED_SQUADS_DATA !== 'undefined' && SAVED_SQUADS_DATA[fixtureId]) {
        return JSON.parse(JSON.stringify(SAVED_SQUADS_DATA[fixtureId]));
    }
    return null;
}

function updateGitDatabase(newRooms, newUserSquads, newSquads) {
    if (newRooms && typeof SAVED_ROOMS_DATA !== 'undefined') {
        for (const code in newRooms) SAVED_ROOMS_DATA[code] = newRooms[code];
    }
    if (newUserSquads && typeof SAVED_USER_SQUADS_DATA !== 'undefined') {
        for (const u in newUserSquads) SAVED_USER_SQUADS_DATA[u] = newUserSquads[u];
    }
    if (newSquads && typeof SAVED_SQUADS_DATA !== 'undefined') {
        for (const f in newSquads) SAVED_SQUADS_DATA[f] = newSquads[f];
    }
}
`;
    }

    cleanRepo(input) {
        let clean = (input || '').trim();
        clean = clean.replace(/^https?:\/\/github\.com\//i, '');
        const parts = clean.split('/').filter(Boolean);
        if (parts.length >= 2) {
            return `${parts[0]}/${parts[1]}`;
        }
        return clean;
    }

    mergeRemoteDatabase(remoteText) {
        try {
            const sandbox = new Function(remoteText + '\nreturn { SAVED_ROOMS_DATA, SAVED_USER_SQUADS_DATA, SAVED_SQUADS_DATA };');
            const remoteData = sandbox();
            if (!remoteData) return;

            // Merge Rooms and Participant Squads
            if (remoteData.SAVED_ROOMS_DATA && typeof SAVED_ROOMS_DATA !== 'undefined') {
                for (const code in remoteData.SAVED_ROOMS_DATA) {
                    const remoteRoom = remoteData.SAVED_ROOMS_DATA[code];
                    if (!SAVED_ROOMS_DATA[code]) {
                        SAVED_ROOMS_DATA[code] = remoteRoom;
                    } else {
                        const localRoom = SAVED_ROOMS_DATA[code];
                        const partMap = {};
                        (remoteRoom.participants || []).forEach(p => { partMap[p.userId] = p; });
                        (localRoom.participants || []).forEach(localPart => {
                            if (!partMap[localPart.userId]) {
                                partMap[localPart.userId] = localPart;
                            } else {
                                const remotePart = partMap[localPart.userId];
                                const mergedSquadsMap = { ...(remotePart.squads || {}) };
                                for (const fId in (localPart.squads || {})) {
                                    const localSq = localPart.squads[fId];
                                    const remoteSq = mergedSquadsMap[fId];
                                    if (!remoteSq || (localSq.updatedAt || 0) >= (remoteSq.updatedAt || 0)) {
                                        mergedSquadsMap[fId] = localSq;
                                    }
                                }
                                partMap[localPart.userId] = {
                                    ...remotePart,
                                    ...localPart,
                                    squads: mergedSquadsMap
                                };
                            }
                        });
                        localRoom.participants = Object.values(partMap);
                    }
                }
            }

            // Merge User Squads
            if (remoteData.SAVED_USER_SQUADS_DATA && typeof SAVED_USER_SQUADS_DATA !== 'undefined') {
                for (const uId in remoteData.SAVED_USER_SQUADS_DATA) {
                    if (!SAVED_USER_SQUADS_DATA[uId]) {
                        SAVED_USER_SQUADS_DATA[uId] = remoteData.SAVED_USER_SQUADS_DATA[uId];
                    } else {
                        for (const fId in remoteData.SAVED_USER_SQUADS_DATA[uId]) {
                            const remoteSq = remoteData.SAVED_USER_SQUADS_DATA[uId][fId];
                            const localSq = SAVED_USER_SQUADS_DATA[uId][fId];
                            if (!localSq || (remoteSq.updatedAt || 0) > (localSq.updatedAt || 0)) {
                                SAVED_USER_SQUADS_DATA[uId][fId] = remoteSq;
                            }
                        }
                    }
                }
            }
        } catch (e) {
            console.warn('Could not merge remote state:', e);
        }
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
            const repo = this.cleanRepo(this.config.repo);
            const branch = (this.config.branch || 'main').trim();
            const token = this.config.token.trim().replace(/^['"]|['"]$/g, '');
            const filePath = this.getFilePath();

            // 1. Verify Repository & Token access
            const repoCheckRes = await fetch(`https://api.github.com/repos/${repo}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/vnd.github+json'
                }
            });

            if (!repoCheckRes.ok) {
                if (repoCheckRes.status === 401) {
                    throw new Error('401 Bad credentials (Token was revoked or expired). Please generate a new GitHub Personal Access Token and paste it in the Git Sync modal.');
                }
                if (repoCheckRes.status === 404) {
                    throw new Error(`Repository "${repo}" not found (404). Please ensure the repository is in "owner/repo" format (e.g. "jerielnino/jj") and your token has permission to access it.`);
                }
                if (repoCheckRes.status === 403) {
                    throw new Error('403 Forbidden. Your token needs "Contents: Read and write" repository permissions.');
                }
                const errJson = await repoCheckRes.json().catch(() => ({}));
                throw new Error(errJson.message || `GitHub error: HTTP ${repoCheckRes.status}`);
            }

            // 2. Multi-strategy SHA resolver & 3-Way Auto-Merge
            const fetchLatestShaAndMerge = async () => {
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
                        if (getData.content) {
                            try {
                                const decoded = atob(getData.content.replace(/\s/g, ''));
                                this.mergeRemoteDatabase(decoded);
                            } catch (e) {}
                        }
                        if (getData.sha) return getData.sha;
                    }
                } catch (err) {
                    console.warn('Contents API lookup error:', err);
                }

                // Strategy 2: GitHub Git Trees API
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

            let currentSha = await fetchLatestShaAndMerge();

            // 3. Encode UTF-8 content to Base64 after merging remote changes
            const buildEncodedPayload = (sha) => {
                const contentString = this.generateFileContent();
                const utf8Bytes = new TextEncoder().encode(contentString);
                let binary = '';
                for (let i = 0; i < utf8Bytes.length; i++) {
                    binary += String.fromCharCode(utf8Bytes[i]);
                }
                const base64Content = btoa(binary);

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

            // 4. Commit file via GitHub Contents API
            let putRes = await fetch(`https://api.github.com/repos/${repo}/contents/${filePath}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/vnd.github+json',
                    'Content-Type': 'application/json'
                },
                body: buildEncodedPayload(currentSha)
            });

            // 5. If SHA collision (409 Conflict / 422), re-fetch, re-merge remote updates, and retry
            if (!putRes.ok && (putRes.status === 409 || putRes.status === 422)) {
                console.warn('Multi-user commit conflict detected! Merging remote changes and retrying...');
                currentSha = await fetchLatestShaAndMerge();
                putRes = await fetch(`https://api.github.com/repos/${repo}/contents/${filePath}`, {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/vnd.github+json',
                        'Content-Type': 'application/json'
                    },
                    body: buildEncodedPayload(currentSha)
                });
            }

            if (!putRes.ok) {
                const errData = await putRes.json().catch(() => ({}));
                if (putRes.status === 401) {
                    throw new Error('401 Bad credentials (Token was revoked or expired). Please generate a new GitHub Personal Access Token and paste it in the Git Sync settings.');
                }
                throw new Error(errData.message || `GitHub API error: HTTP ${putRes.status}`);
            }

            this.saveConfig({ repo, branch, lastSyncedAt: Date.now() });
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

    async pullFromGitHub(isSilent = false) {
        if (!this.isConfigured()) {
            if (!isSilent) this.openSyncModal();
            return { success: false, message: 'Please enter your GitHub Repository name.' };
        }

        if (this.isSyncing) return;
        this.isSyncing = true;
        this.updateSyncUIState(true, '⬇️ Pulling from GitHub...');

        try {
            const repo = this.cleanRepo(this.config.repo);
            const branch = (this.config.branch || 'main').trim();
            const filePath = this.getFilePath();
            const rawUrl = `https://raw.githubusercontent.com/${repo}/${branch}/${filePath}?t=${Date.now()}`;

            const res = await fetch(rawUrl);
            if (!res.ok) throw new Error(`Could not fetch savedSquads.js (HTTP ${res.status})`);

            const codeText = await res.text();
            
            // Safe evaluation of the remote data
            const sandbox = new Function(codeText + '\nreturn { SAVED_ROOMS_DATA, SAVED_USER_SQUADS_DATA, SAVED_SQUADS_DATA };');
            const data = sandbox();

            if (typeof updateGitDatabase === 'function') {
                updateGitDatabase(data.SAVED_ROOMS_DATA, data.SAVED_USER_SQUADS_DATA, data.SAVED_SQUADS_DATA);
            }

            this.saveConfig({ lastSyncedAt: Date.now() });
            this.updateSyncUIState(false, '✅ Synced with Git');

            // Refresh UI if active
            if (window.pitchBuilder && window.pitchBuilder.activeFixture) {
                window.pitchBuilder.loadSavedSquad();
                window.pitchBuilder.render();
            }
            if (window.roomManager && window.roomManager.currentRoom) {
                window.leaderboardUI?.render(window.roomManager.currentRoom);
            }

            if (!isSilent) {
                alert('🎉 Successfully pulled the latest squads and rooms from GitHub!');
            }
            return { success: true };
        } catch (error) {
            console.error('Git Pull Error:', error);
            this.updateSyncUIState(false, '❌ Pull Failed');
            if (!isSilent) {
                alert(`⚠️ Git Pull Failed: ${error.message}`);
            }
            return { success: false, error: error.message };
        } finally {
            this.isSyncing = false;
        }
    }

    async autoSyncOnStartup() {
        if (this.isConfigured()) {
            console.log('🐙 Auto-syncing latest data from GitHub on startup...');
            await this.pullFromGitHub(true);
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
