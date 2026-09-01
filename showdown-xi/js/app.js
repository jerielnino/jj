/**
 * Showdown XI - Main Application Controller
 * Handles Auth check, Commissioner Admin Panel, Upcoming vs Finished Fixtures, and view navigation.
 */

class ShowdownApp {
    constructor() {
        this.currentLeague = 'ALL'; // 'ALL', 'PL', 'LALIGA'
        this.currentFixtureView = 'UPCOMING'; // 'UPCOMING' (default on first page), 'FINISHED'
        this.selectedFixture = null;
        this.activeTab = 'pitch'; // 'pitch', 'matchCenter', 'leaderboard', 'rules'
    }

    init() {
        this.checkAuth();
        this.bindAuthEvents();
        this.bindGlobalNavigation();
        this.bindAdminPanelEvents();
        this.bindModals();
        
        if (window.gitSyncService) {
            window.gitSyncService.init();
            window.gitSyncService.autoSyncOnStartup();
        }

        // Find default upcoming fixture
        this.initDefaultFixture();
        this.renderFixturesSelector();

        // Check for URL room invite hash
        const hash = window.location.hash;
        if (hash && hash.startsWith('#room=')) {
            const inviteCode = decodeURIComponent(hash.substring(6)).trim();
            if (inviteCode && window.roomManager) {
                window.roomManager.joinRoom(inviteCode);
            }
        }

        this.selectFixture(this.selectedFixture.id);
        this.renderUserProfileHeader();
        this.updateAdminHeaderButton();
    }

    initDefaultFixture() {
        const lastFixtureId = localStorage.getItem('showdown_xi_last_fixture_id');
        if (lastFixtureId) {
            const match = FIXTURES_DATA.find(f => f.id === lastFixtureId);
            if (match) {
                this.selectedFixture = match;
                return;
            }
        }

        const now = Date.now();
        const upcomingMatches = FIXTURES_DATA
            .filter(f => new Date(f.kickoffTime).getTime() > now && f.status !== 'FINISHED')
            .sort((a, b) => new Date(a.kickoffTime).getTime() - new Date(b.kickoffTime).getTime());
        this.selectedFixture = upcomingMatches.length > 0 ? upcomingMatches[0] : FIXTURES_DATA[0];
    }

    checkAuth() {
        const overlay = document.getElementById('authScreenOverlay');
        if (!window.authManager.currentUser) {
            if (overlay) overlay.classList.add('active');
        } else {
            if (overlay) overlay.classList.remove('active');
            // Sync userProfile in roomManager
            if (window.roomManager) {
                window.roomManager.userProfile.id = window.authManager.currentUser.username;
                window.roomManager.userProfile.name = window.authManager.currentUser.displayName || window.authManager.currentUser.username;
                window.roomManager.userProfile.avatar = window.authManager.currentUser.avatar || '⚽';
            }
        }
    }

    bindAuthEvents() {
        const formLogin = document.getElementById('loginForm');
        const errorMsg = document.getElementById('authErrorMsg');

        // Login form submit
        if (formLogin) {
            formLogin.addEventListener('submit', (e) => {
                e.preventDefault();
                const u = document.getElementById('loginUsername').value;
                const p = document.getElementById('loginPassword').value;
                const res = window.authManager.login(u, p);
                if (res.success) {
                    this.checkAuth();
                    this.renderUserProfileHeader();
                    this.updateAdminHeaderButton();
                    if (errorMsg) errorMsg.textContent = '';
                } else {
                    if (errorMsg) {
                        errorMsg.textContent = res.message;
                        errorMsg.style.display = 'block';
                    }
                }
            });
        }

        // Logout
        const btnLogout = document.getElementById('btnLogoutBtn');
        if (btnLogout) {
            btnLogout.addEventListener('click', () => {
                if (confirm('Sign out from Showdown XI?')) {
                    window.authManager.logout();
                    this.checkAuth();
                }
            });
        }
    }

    bindGlobalNavigation() {
        // Tab navigation buttons
        document.querySelectorAll('.nav-tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.getAttribute('data-tab');
                this.switchTab(tab);
            });
        });

        // Fixtures Upcoming vs Finished main tabs
        document.querySelectorAll('.fixture-view-tab').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.fixture-view-tab').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentFixtureView = btn.getAttribute('data-view-status');
                this.renderFixturesSelector();
            });
        });

        // League filter tabs
        document.querySelectorAll('.league-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.league-filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentLeague = btn.getAttribute('data-league');
                this.renderFixturesSelector();
            });
        });

        // Header buttons
        const btnCreateRoom = document.getElementById('btnOpenCreateRoomModal');
        const btnJoinRoom = document.getElementById('btnOpenJoinRoomModal');
        const btnSyncFPL = document.getElementById('btnSyncFPL');
        const btnClearCache = document.getElementById('btnClearCache');

        if (btnCreateRoom) {
            btnCreateRoom.addEventListener('click', () => this.openModal('createRoomModal'));
        }
        if (btnJoinRoom) {
            btnJoinRoom.addEventListener('click', () => this.openModal('joinRoomModal'));
        }
        if (btnClearCache) {
            btnClearCache.addEventListener('click', () => this.clearAppCache());
        }
        if (btnSyncFPL) {
            btnSyncFPL.addEventListener('click', async () => {
                btnSyncFPL.textContent = '⏳ Syncing...';
                const res = await window.apiSyncService.syncLiveFPLData();
                btnSyncFPL.textContent = '⚡ Sync Live Data';
                if (res.success) {
                    alert(`✅ Successfully synced with Official FPL API! Updated ${res.count} players.`);
                    if (window.pitchBuilder) window.pitchBuilder.render();
                } else {
                    alert(`⚠️ Live FPL API sync info: using pre-bundled official FPL & La Liga roster database.`);
                }
            });
        }
    }

    async clearAppCache() {
        if (!confirm('🧹 Clear browser cache & reload with fresh data?\n\nThis will purge cached assets, drafts, and force a fresh fetch.')) {
            return;
        }

        try {
            // 1. Snapshot all critical permanent data first
            const authUsersDb = localStorage.getItem('showdown_auth_users_db_v1');
            const authSession = localStorage.getItem('showdown_auth_session_v1');
            const authUsersOld = localStorage.getItem('showdown_xi_auth_users');
            const loggedUserOld = localStorage.getItem('showdown_xi_logged_user');
            const masterSquads = localStorage.getItem('showdown_xi_master_squads');
            const rooms = localStorage.getItem('showdown_xi_rooms_v3');
            const activeRoomCode = localStorage.getItem('showdown_xi_active_room_code');
            const userProfile = localStorage.getItem('showdown_xi_user_profile');
            const lastFixture = localStorage.getItem('showdown_xi_last_fixture_id');
            const gitSyncConfig = localStorage.getItem('showdown_xi_github_sync_config');

            // 2. Clear browser cache and session
            if ('caches' in window) {
                const cacheNames = await caches.keys();
                await Promise.all(cacheNames.map(name => caches.delete(name)));
            }
            try { sessionStorage.clear(); } catch (e) {}
            try { localStorage.clear(); } catch (e) {}

            // 3. Restore all critical persistent data
            if (authUsersDb) localStorage.setItem('showdown_auth_users_db_v1', authUsersDb);
            if (authSession) localStorage.setItem('showdown_auth_session_v1', authSession);
            if (authUsersOld) localStorage.setItem('showdown_xi_auth_users', authUsersOld);
            if (loggedUserOld) localStorage.setItem('showdown_xi_logged_user', loggedUserOld);
            if (masterSquads) localStorage.setItem('showdown_xi_master_squads', masterSquads);
            if (rooms) localStorage.setItem('showdown_xi_rooms_v3', rooms);
            if (activeRoomCode) localStorage.setItem('showdown_xi_active_room_code', activeRoomCode);
            if (userProfile) localStorage.setItem('showdown_xi_user_profile', userProfile);
            if (lastFixture) localStorage.setItem('showdown_xi_last_fixture_id', lastFixture);
            if (gitSyncConfig) localStorage.setItem('showdown_xi_github_sync_config', gitSyncConfig);
        } catch (e) {
            console.error('Error clearing cache:', e);
        }

        const url = new URL(window.location.href);
        url.searchParams.set('nocache', Date.now().toString());
        window.location.href = url.toString();
    }

    switchTab(tabName) {
        this.activeTab = tabName;
        localStorage.setItem('showdown_xi_active_tab', tabName);

        document.querySelectorAll('.nav-tab-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-tab') === tabName);
        });

        document.querySelectorAll('.tab-content-panel').forEach(panel => {
            panel.classList.toggle('active', panel.id === `tab-${tabName}`);
        });

        if (tabName === 'leaderboard' && window.leaderboardUI) {
            window.leaderboardUI.render(window.roomManager?.currentRoom, window.matchSimulator?.livePlayerStats);
        }
    }

    renderFixturesSelector() {
        const container = document.getElementById('fixturesListContainer');
        if (!container) return;

        let filtered = FIXTURES_DATA;
        const now = Date.now();

        // Filter by Upcoming vs Finished with strict timestamp comparison
        if (this.currentFixtureView === 'UPCOMING') {
            filtered = filtered.filter(f => new Date(f.kickoffTime).getTime() > now && f.status !== 'FINISHED');
            filtered.sort((a, b) => new Date(a.kickoffTime).getTime() - new Date(b.kickoffTime).getTime());
        } else if (this.currentFixtureView === 'FINISHED') {
            filtered = filtered.filter(f => new Date(f.kickoffTime).getTime() <= now || f.status === 'FINISHED');
            filtered.sort((a, b) => new Date(b.kickoffTime).getTime() - new Date(a.kickoffTime).getTime());
        }

        // Filter by League
        if (this.currentLeague !== 'ALL') {
            filtered = filtered.filter(f => f.league === this.currentLeague);
        }

        if (filtered.length === 0) {
            container.innerHTML = `<div style="padding: 1rem; color: var(--text-muted); font-size: 0.85rem;">No ${this.currentFixtureView.toLowerCase()} fixtures matching criteria.</div>`;
            return;
        }

        container.innerHTML = filtered.map(f => {
            const home = TEAMS_DATA[f.homeClub] || { shortName: f.homeClub, badge: '' };
            const away = TEAMS_DATA[f.awayClub] || { shortName: f.awayClub, badge: '' };
            const deadline = getMatchDeadlineInfo(f.kickoffTime);
            const isSelected = this.selectedFixture && f.id === this.selectedFixture.id;
            const isFT = f.status === 'FINISHED';

            return `
                <div class="fixture-card ${isSelected ? 'selected' : ''}" data-fixture-id="${f.id}">
                    <div class="fixture-league-tag">
                        <span class="league-pill ${f.league.toLowerCase()}">${f.leagueName}</span>
                        <span class="deadline-pill ${isFT ? 'pill-finished' : (deadline.isLocked ? 'pill-locked' : 'pill-open')}">
                            ${isFT ? '🏁 FULL TIME' : (deadline.isLocked ? '🔒 5h Locked' : `⏱️ ${deadline.formattedLockCountdown}`)}
                        </span>
                    </div>
                    <div class="fixture-matchup">
                        <div class="match-club">
                            <img src="${home.badge}" class="fixture-crest-img" alt="${home.name}">
                            <span class="club-name">${home.shortName}</span>
                        </div>
                        <span class="vs-text">${isFT ? `${f.homeScore} - ${f.awayScore}` : 'VS'}</span>
                        <div class="match-club">
                            <span class="club-name">${away.shortName}</span>
                            <img src="${away.badge}" class="fixture-crest-img" alt="${away.name}">
                        </div>
                    </div>
                    <div class="fixture-date-bar">
                        <span>📅 ${deadline.kickoffDateStr}</span>
                    </div>
                </div>
            `;
        }).join('');

        container.querySelectorAll('.fixture-card').forEach(card => {
            card.addEventListener('click', () => {
                const fId = card.getAttribute('data-fixture-id');
                this.selectFixture(fId);
            });
        });
    }

    selectFixture(fixtureId) {
        const fixture = FIXTURES_DATA.find(f => f.id === fixtureId) || FIXTURES_DATA[0];
        this.selectedFixture = fixture;
        localStorage.setItem('showdown_xi_last_fixture_id', fixture.id);

        window.pitchBuilder.init(fixture);
        window.matchCenterUI.init(fixture);
        if (window.leaderboardUI) {
            window.leaderboardUI.render(window.roomManager?.currentRoom, window.matchSimulator?.livePlayerStats);
        }

        this.renderFixturesSelector();
    }

    renderUserProfileHeader() {
        const container = document.getElementById('userProfileHeader');
        if (!container) return;

        const user = window.authManager.currentUser;
        if (!user) {
            container.innerHTML = '';
            return;
        }

        container.innerHTML = `
            <div class="profile-chip" id="userProfileChip">
                <span class="user-avatar">${user.avatar || '⚽'}</span>
                <span class="user-name">${user.displayName || user.username}</span>
                ${user.role === 'ADMIN' ? '<span class="admin-tag">COMMISSIONER</span>' : ''}
            </div>
        `;
    }

    updateAdminHeaderButton() {
        const btn = document.getElementById('btnOpenAdminPanel');
        const badge = document.getElementById('adminPendingBadge');
        if (!btn) return;

        if (window.authManager.isAdmin()) {
            btn.style.display = 'inline-flex';
            const total = window.authManager.getAllUsers().length;
            if (badge) badge.textContent = total;
        } else {
            btn.style.display = 'none';
        }
    }

    bindAdminPanelEvents() {
        const btnOpen = document.getElementById('btnOpenAdminPanel');
        if (btnOpen) {
            btnOpen.addEventListener('click', () => {
                this.renderAdminPanel();
                this.openModal('adminPanelModal');
            });
        }

        // Add user directly
        const btnAdd = document.getElementById('btnAdminAddUser');
        if (btnAdd) {
            btnAdd.addEventListener('click', async () => {
                const u = document.getElementById('adminAddUsername')?.value;
                const d = document.getElementById('adminAddDisplayName')?.value;
                const p = document.getElementById('adminAddPassword')?.value;
                const res = window.authManager.adminAddUser(u, p, d);
                if (res.success) {
                    alert(`✅ User '${u}' created and synchronized with Git!\n\nThey can now sign in immediately from any device.`);
                    if (document.getElementById('adminAddUsername')) document.getElementById('adminAddUsername').value = '';
                    if (document.getElementById('adminAddDisplayName')) document.getElementById('adminAddDisplayName').value = '';
                    if (document.getElementById('adminAddPassword')) document.getElementById('adminAddPassword').value = '';
                    this.renderAdminPanel();
                } else {
                    alert('Error: ' + res.message);
                }
            });
        }

        // Push Users to Git
        const btnPushGit = document.getElementById('btnAdminPushGit');
        if (btnPushGit) {
            btnPushGit.addEventListener('click', async () => {
                btnPushGit.textContent = '⏳ Pushing to Git...';
                try {
                    const res = await window.authManager.pushUsersToGit();
                    if (res.success) {
                        alert('🐙 Successfully exported & pushed authorized users database to GitHub (js/data/users.js)!');
                    }
                } finally {
                    btnPushGit.textContent = '🐙 Push Users to GitHub';
                }
            });
        }

        // Pull Users from Git
        const btnPullGit = document.getElementById('btnAdminPullGit');
        if (btnPullGit) {
            btnPullGit.addEventListener('click', async () => {
                btnPullGit.textContent = '⏳ Pulling...';
                try {
                    await window.authManager.pullUsersFromGit();
                    this.renderAdminPanel();
                } finally {
                    btnPullGit.textContent = '⬇️ Pull Users from GitHub';
                }
            });
        }

        // Download users.js File
        const btnDownload = document.getElementById('btnAdminDownloadUsersFile');
        if (btnDownload) {
            btnDownload.addEventListener('click', () => {
                window.authManager.exportUsersFile();
            });
        }

        // Copy Plain JSON
        const btnExportJson = document.getElementById('btnAdminExportJson');
        if (btnExportJson) {
            btnExportJson.addEventListener('click', () => {
                const json = window.authManager.exportJSON();
                const textarea = document.getElementById('adminUsersJsonTextarea');
                if (textarea) textarea.value = json;
                navigator.clipboard?.writeText(json);
                alert('📋 Plain JSON copied to clipboard!');
            });
        }
    }

    renderAdminPanel() {
        const approvedList = document.getElementById('adminApprovedList');
        const approvedCount = document.getElementById('adminApprovedCount');
        const textarea = document.getElementById('adminUsersJsonTextarea');

        const allUsers = window.authManager.getAllUsers();

        if (approvedCount) approvedCount.textContent = allUsers.length;
        if (textarea) textarea.value = window.authManager.exportJSON();

        // Render Approved Users Directory
        if (approvedList) {
            approvedList.innerHTML = allUsers.map(u => `
                <div class="admin-user-row">
                    <div class="user-row-meta">
                        <span class="user-avatar" style="font-size: 1.2rem;">${u.avatar}</span>
                        <div>
                            <strong style="color: #fff; font-size: 0.9rem;">${u.displayName || u.username}</strong>
                            <div class="sub-user-req">
                                <span>User: <code style="color: var(--accent-gold);">${u.username}</code></span> • 
                                <span>Pass: <code class="pwd-display" data-pwd="${u.password}" style="color: #6EE7B7;">••••••••</code> <button class="btn-toggle-pwd" style="background: none; border: none; cursor: pointer; font-size: 0.75rem; padding: 0 0.2rem;" title="Show/Hide Password">👁️</button></span> • 
                                <span class="badge-role" style="font-size: 0.68rem; padding: 0.1rem 0.4rem; background: rgba(255,255,255,0.08); border-radius: 4px; color: var(--text-secondary);">${u.role}</span>
                            </div>
                        </div>
                    </div>
                    <div class="user-row-actions">
                        ${u.username !== 'jj7758' ? `
                            <button class="btn btn-danger btn-sm btn-delete-user" data-user="${u.username}">
                                🗑️ Delete
                            </button>
                        ` : `
                            <span style="font-size: 0.75rem; color: var(--accent-gold); font-weight: 600;">👑 Commissioner</span>
                        `}
                    </div>
                </div>
            `).join('');

            // Toggle password preview
            approvedList.querySelectorAll('.btn-toggle-pwd').forEach(btn => {
                btn.addEventListener('click', () => {
                    const row = btn.closest('.admin-user-row');
                    const codeEl = row.querySelector('.pwd-display');
                    if (codeEl) {
                        const realPwd = codeEl.getAttribute('data-pwd');
                        if (codeEl.textContent === '••••••••') {
                            codeEl.textContent = realPwd;
                        } else {
                            codeEl.textContent = '••••••••';
                        }
                    }
                });
            });

            // Delete user handler
            approvedList.querySelectorAll('.btn-delete-user').forEach(btn => {
                btn.addEventListener('click', async () => {
                    const u = btn.getAttribute('data-user');
                    if (confirm(`Are you sure you want to delete user '${u}' and revoke access across all devices?`)) {
                        window.authManager.adminDeleteUser(u);
                        this.renderAdminPanel();
                    }
                });
            });
        }
    }

    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.add('open');
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.remove('open');
    }

    bindModals() {
        document.querySelectorAll('.modal-close-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const modal = btn.closest('.app-modal');
                if (modal) modal.classList.remove('open');
            });
        });

        const btnSubmitCreate = document.getElementById('btnSubmitCreateRoom');
        if (btnSubmitCreate) {
            btnSubmitCreate.addEventListener('click', () => {
                const nameInput = document.getElementById('newRoomNameInput');
                const roomName = nameInput?.value?.trim() || null;
                const room = window.roomManager.createRoom(roomName);
                if (nameInput) nameInput.value = '';
                this.closeModal('createRoomModal');
                this.switchTab('leaderboard');
                alert(`✨ Showdown League Room created!\n\nRoom Name: ${room.name}\nInvite Code: ${room.code}\n\nShare this code with your friends to compete across all fixtures!`);
            });
        }

        const btnSubmitJoin = document.getElementById('btnSubmitJoinRoom');
        if (btnSubmitJoin) {
            btnSubmitJoin.addEventListener('click', () => {
                const codeInput = document.getElementById('joinRoomCodeInput');
                const code = codeInput?.value?.trim();
                if (!code) {
                    alert('Please enter a valid room code.');
                    return;
                }
                const res = window.roomManager.joinRoom(code);
                if (res.success) {
                    if (codeInput) codeInput.value = '';
                    this.closeModal('joinRoomModal');
                    this.switchTab('leaderboard');
                    alert(`✅ Successfully joined league: ${res.room.name}`);
                } else {
                    alert(res.message || 'Could not find or join room.');
                }
            });
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    window.app = new ShowdownApp();
    window.app.init();
});
