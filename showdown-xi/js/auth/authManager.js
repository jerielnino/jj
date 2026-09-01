/**
 * Showdown XI - Authentication & User Access Management System
 * Managed by Commissioner (jj7758) and synchronized with Git.
 */

class AuthManager {
    constructor() {
        this.SESSION_KEY = 'showdown_auth_session_v1';
        this.users = this.loadUsers();
        this.currentUser = this.loadSession();
    }

    loadUsers() {
        let db = {};
        if (typeof AUTH_USERS_DATA !== 'undefined') {
            db = JSON.parse(JSON.stringify(AUTH_USERS_DATA));
        }

        // Ensure default commissioner always exists
        if (!db['jj7758']) {
            db['jj7758'] = {
                username: "jj7758",
                password: "foot4life",
                displayName: "JJ (Commissioner)",
                role: "ADMIN",
                status: "APPROVED",
                avatar: "👑",
                createdAt: "2026-09-01T00:00:00.000Z",
                approvedAt: "2026-09-01T00:00:00.000Z"
            };
        }

        this.users = db;
        return db;
    }

    saveUsers(usersObj = this.users) {
        this.users = usersObj;
        if (typeof AUTH_USERS_DATA !== 'undefined') {
            for (const u in usersObj) {
                AUTH_USERS_DATA[u] = usersObj[u];
            }
            // remove deleted
            for (const u in AUTH_USERS_DATA) {
                if (!usersObj[u]) delete AUTH_USERS_DATA[u];
            }
        }
    }

    loadSession() {
        try {
            const raw = localStorage.getItem(this.SESSION_KEY);
            if (raw) {
                const sessionUser = JSON.parse(raw);
                const current = this.users[sessionUser.username];
                if (current && current.status === 'APPROVED') {
                    return current;
                }
            }
        } catch (e) {}
        return null;
    }

    saveSession(user) {
        this.currentUser = user;
        if (user) {
            try { localStorage.setItem(this.SESSION_KEY, JSON.stringify(user)); } catch (e) {}
        } else {
            try { localStorage.removeItem(this.SESSION_KEY); } catch (e) {}
        }
    }

    login(username, password) {
        const uKey = (username || '').trim().toLowerCase();
        const user = Object.values(this.users).find(u => u.username.toLowerCase() === uKey);

        if (!user) {
            return { success: false, message: 'Invalid username or password. Please contact Commissioner (jj7758).' };
        }

        if (user.password !== password) {
            return { success: false, message: 'Invalid username or password.' };
        }

        if (user.status !== 'APPROVED') {
            return { success: false, message: '❌ Account not active. Please contact Commissioner (jj7758).' };
        }

        this.saveSession(user);
        return { success: true, user };
    }

    adminAddUser(username, password, displayName, role = 'USER') {
        if (!this.isAdmin()) return { success: false, message: 'Unauthorized: Commissioner access required.' };
        const u = (username || '').trim();
        const p = (password || '').trim();
        if (!u || !p) return { success: false, message: 'Username and password are required.' };

        if (this.users[u]) {
            return { success: false, message: `User '${u}' already exists.` };
        }

        const avatars = ['⚽', '🔥', '⚡', '🏆', '🎯', '🧤', '🚀', '🌟'];
        const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];

        const newUser = {
            username: u,
            password: p,
            displayName: (displayName || '').trim() || u,
            role: role,
            status: 'APPROVED',
            avatar: role === 'ADMIN' ? '👑' : randomAvatar,
            createdAt: new Date().toISOString(),
            approvedAt: new Date().toISOString()
        };

        this.users[u] = newUser;
        this.saveUsers();

        // Auto-push users to Git
        this.pushUsersToGit().catch(e => console.warn('Auto git push users:', e));

        return { success: true, user: newUser };
    }

    adminDeleteUser(username) {
        if (!this.isAdmin()) return { success: false, message: 'Unauthorized' };
        if (username === 'jj7758') return { success: false, message: 'Cannot delete Commissioner account.' };

        if (!this.users[username]) return { success: false, message: 'User not found' };

        delete this.users[username];
        this.saveUsers();

        // Auto-push users to Git
        this.pushUsersToGit().catch(e => console.warn('Auto git push users:', e));

        return { success: true };
    }

    generateUsersFileContent() {
        return `/**
 * Showdown XI - Authorized Users Database
 * Managed by Commissioner (jj7758) and synchronized with Git.
 * This file is tracked in Git to provide persistent credentials across all devices.
 */

const AUTH_USERS_DATA = ${JSON.stringify(this.users, null, 4)};

function getGitUsersDatabase() {
    if (typeof AUTH_USERS_DATA !== 'undefined') {
        return JSON.parse(JSON.stringify(AUTH_USERS_DATA));
    }
    return {};
}

function updateGitUsersDatabase(newUsers) {
    if (typeof AUTH_USERS_DATA !== 'undefined' && newUsers) {
        for (const u in newUsers) {
            AUTH_USERS_DATA[u] = newUsers[u];
        }
    }
}
`;
    }

    async pushUsersToGit() {
        if (window.gitSyncService && window.gitSyncService.isConfigured()) {
            const content = this.generateUsersFileContent();
            return await window.gitSyncService.pushUsersToGitHub(content);
        }
        return { success: false, message: 'GitHub Sync not configured.' };
    }

    async pullUsersFromGit() {
        if (window.gitSyncService && window.gitSyncService.isConfigured()) {
            return await window.gitSyncService.pullUsersFromGitHub(false);
        }
        return { success: false, message: 'GitHub Sync not configured.' };
    }

    exportUsersFile() {
        const content = this.generateUsersFileContent();
        const blob = new Blob([content], { type: 'application/javascript' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'users.js';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    logout() {
        this.saveSession(null);
    }

    isAdmin() {
        return this.currentUser && this.currentUser.role === 'ADMIN';
    }

    getAllUsers() {
        return Object.values(this.users);
    }

    exportJSON() {
        return JSON.stringify(this.users, null, 2);
    }

    importJSON(jsonString) {
        try {
            const parsed = JSON.parse(jsonString);
            if (typeof parsed === 'object' && parsed !== null) {
                if (!parsed['jj7758']) {
                    parsed['jj7758'] = {
                        username: "jj7758",
                        password: "foot4life",
                        displayName: "JJ (Commissioner)",
                        role: "ADMIN",
                        status: "APPROVED",
                        avatar: "👑"
                    };
                }
                this.saveUsers(parsed);
                this.pushUsersToGit().catch(e => console.warn('Git push on import:', e));
                return { success: true, count: Object.keys(parsed).length };
            }
        } catch (e) {
            return { success: false, error: e.message };
        }
        return { success: false, message: 'Invalid JSON format' };
    }
}

window.authManager = new AuthManager();

