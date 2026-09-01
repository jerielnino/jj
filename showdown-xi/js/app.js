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
        }

        // Find default upcoming fixture
        this.initDefaultFixture();
        this.renderFixturesSelector();
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
        const tabLogin = document.getElementById('tabBtnLogin');
        const tabRegister = document.getElementById('tabBtnRegister');
        const formLogin = document.getElementById('loginForm');
        const formRegister = document.getElementById('registerForm');
        const errorMsg = document.getElementById('authErrorMsg');

        if (tabLogin && tabRegister) {
            tabLogin.addEventListener('click', () => {
                tabLogin.classList.add('active');
                tabRegister.classList.remove('active');
                formLogin.classList.add('active');
                formRegister.classList.remove('active');
                if (errorMsg) errorMsg.textContent = '';
            });

            tabRegister.addEventListener('click', () => {
                tabRegister.classList.add('active');
                tabLogin.classList.remove('active');
                formRegister.classList.add('active');
                formLogin.classList.remove('active');
                if (errorMsg) errorMsg.textContent = '';
            });
        }

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

        // Register form submit
        if (formRegister) {
            formRegister.addEventListener('submit', (e) => {
                e.preventDefault();
                const u = document.getElementById('regUsername').value;
                const d = document.getElementById('regDisplayName').value;
                const p = document.getElementById('regPassword').value;
                const res = window.authManager.register(u, p, d);
                if (res.success) {
                    alert(res.message);
                    tabLogin.click();
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
                    location.reload();
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
            const authUsers = localStorage.getItem('showdown_xi_auth_users');
            const loggedUser = localStorage.getItem('showdown_xi_logged_user');
            const masterSquads = localStorage.getItem('showdown_xi_master_squads');
            const rooms = localStorage.getItem('showdown_xi_rooms_v2');
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
            if (authUsers) localStorage.setItem('showdown_xi_auth_users', authUsers);
            if (loggedUser) localStorage.setItem('showdown_xi_logged_user', loggedUser);
            if (masterSquads) localStorage.setItem('showdown_xi_master_squads', masterSquads);
            if (rooms) localStorage.setItem('showdown_xi_rooms_v2', rooms);
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

        if (tabName === 'leaderboard' && window.roomManager && window.roomManager.currentRoom) {
            window.leaderboardUI.render(window.roomManager.currentRoom);
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

        if (!window.roomManager.currentRoom || window.roomManager.currentRoom.fixtureId !== fixture.id) {
            const existingRoom = window.roomManager.findRoomByFixture(fixture.id);
            if (existingRoom) {
                window.roomManager.currentRoom = existingRoom;
            } else {
                window.roomManager.createRoom(fixture.id);
            }
        }

        window.pitchBuilder.init(fixture);
        window.matchCenterUI.init(fixture);
        window.leaderboardUI.render(window.roomManager.currentRoom);

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
            const pending = window.authManager.getPendingUsers();
            if (badge) badge.textContent = pending.length;
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
            btnAdd.addEventListener('click', () => {
                const u = document.getElementById('adminAddUsername').value;
                const d = document.getElementById('adminAddDisplayName').value;
                const p = document.getElementById('adminAddPassword').value;
                const res = window.authManager.adminAddUser(u, p, d);
                if (res.success) {
                    alert(`✅ User '${u}' created and approved!`);
                    document.getElementById('adminAddUsername').value = '';
                    document.getElementById('adminAddDisplayName').value = '';
                    document.getElementById('adminAddPassword').value = '';
                    this.renderAdminPanel();
                    this.updateAdminHeaderButton();
                } else {
                    alert('Error: ' + res.message);
                }
            });
        }

        // Export JSON
        const btnExport = document.getElementById('btnAdminExportJson');
        if (btnExport) {
            btnExport.addEventListener('click', () => {
                const json = window.authManager.exportJSON();
                const textarea = document.getElementById('adminUsersJsonTextarea');
                if (textarea) textarea.value = json;
                navigator.clipboard?.writeText(json);
                alert('📋 Plain JSON copied to clipboard and refreshed in textarea!');
            });
        }

        // Import JSON
        const btnImport = document.getElementById('btnAdminImportJson');
        if (btnImport) {
            btnImport.addEventListener('click', () => {
                const textarea = document.getElementById('adminUsersJsonTextarea');
                if (!textarea || !textarea.value) return;
                const res = window.authManager.importJSON(textarea.value);
                if (res.success) {
                    alert(`📥 Successfully imported & synced ${res.count} users from JSON!`);
                    this.renderAdminPanel();
                    this.updateAdminHeaderButton();
                } else {
                    alert('JSON Import Error: ' + (res.error || res.message));
                }
            });
        }
    }

    renderAdminPanel() {
        const pendingList = document.getElementById('adminPendingList');
        const approvedList = document.getElementById('adminApprovedList');
        const pendingCount = document.getElementById('adminPendingCount');
        const textarea = document.getElementById('adminUsersJsonTextarea');

        const pending = window.authManager.getPendingUsers();
        const allUsers = window.authManager.getAllUsers().filter(u => u.status === 'APPROVED');

        if (pendingCount) pendingCount.textContent = pending.length;
        if (textarea) textarea.value = window.authManager.exportJSON();

        // Render Pending Approvals
        if (pendingList) {
            if (pending.length === 0) {
                pendingList.innerHTML = `<div class="admin-empty-state">No pending approval requests.</div>`;
            } else {
                pendingList.innerHTML = pending.map(u => `
                    <div class="admin-user-row pending-row" data-orig-username="${u.username}">
                        <div class="user-row-meta">
                            <span class="user-avatar">${u.avatar}</span>
                            <div>
                                <strong>${u.displayName}</strong>
                                <div class="sub-user-req">Requested: <code>${u.username}</code> • Pass: <code>${u.password}</code></div>
                            </div>
                        </div>
                        <div class="user-assign-box">
                            <label>Assign Username:</label>
                            <input type="text" class="input-assign-uname" value="${u.username}">
                        </div>
                        <div class="user-row-actions">
                            <button class="btn btn-primary btn-sm btn-approve-user" data-user="${u.username}">✓ Approve</button>
                            <button class="btn btn-danger btn-sm btn-reject-user" data-user="${u.username}">✗ Reject</button>
                        </div>
                    </div>
                `).join('');

                // Bind approve/reject handlers
                pendingList.querySelectorAll('.btn-approve-user').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const origU = btn.getAttribute('data-user');
                        const row = btn.closest('.admin-user-row');
                        const customU = row.querySelector('.input-assign-uname').value;
                        const res = window.authManager.approveUser(origU, customU);
                        if (res.success) {
                            alert(`✅ User approved with assigned username: '${res.user.username}'!`);
                            this.renderAdminPanel();
                            this.updateAdminHeaderButton();
                        }
                    });
                });

                pendingList.querySelectorAll('.btn-reject-user').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const u = btn.getAttribute('data-user');
                        if (confirm(`Reject registration for '${u}'?`)) {
                            window.authManager.rejectUser(u);
                            this.renderAdminPanel();
                            this.updateAdminHeaderButton();
                        }
                    });
                });
            }
        }

        // Render Approved Users
        if (approvedList) {
            approvedList.innerHTML = allUsers.map(u => `
                <div class="admin-user-row">
                    <div class="user-row-meta">
                        <span class="user-avatar">${u.avatar}</span>
                        <div>
                            <strong>${u.displayName || u.username}</strong>
                            <div class="sub-user-req">Username: <code>${u.username}</code> • Role: <span class="badge-role">${u.role}</span></div>
                        </div>
                    </div>
                    <div class="user-row-actions">
                        <span class="badge-approved">APPROVED</span>
                    </div>
                </div>
            `).join('');
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
                const room = window.roomManager.createRoom(this.selectedFixture.id, roomName);
                this.closeModal('createRoomModal');
                this.switchTab('leaderboard');
                alert(`✨ Room created!\nInvite Code: ${room.code}`);
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
                const room = window.roomManager.joinRoom(code);
                if (room) {
                    const fixture = FIXTURES_DATA.find(f => f.id === room.fixtureId);
                    if (fixture) this.selectFixture(fixture.id);
                    this.closeModal('joinRoomModal');
                    this.switchTab('pitch');
                    alert(`✅ Joined room: ${room.name}`);
                }
            });
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    window.app = new ShowdownApp();
    window.app.init();
});
