/**
 * Showdown XI - Authentication & User Access Management System
 * Supports Admin Approval, Custom Username Assignment, Plain JSON Persistence & Export/Import.
 */

const DEFAULT_USERS_DB = {
    "jj7758": {
        username: "jj7758",
        password: "foot4life",
        displayName: "JJ (Commissioner)",
        role: "ADMIN",
        status: "APPROVED", // 'APPROVED', 'PENDING', 'REJECTED'
        avatar: "👑",
        createdAt: "2026-09-01T00:00:00.000Z"
    }
};

class AuthManager {
    constructor() {
        this.STORAGE_KEY = 'showdown_users_db_v1';
        this.SESSION_KEY = 'showdown_auth_session_v1';
        this.users = this.loadUsers();
        this.currentUser = this.loadSession();
    }

    loadUsers() {
        try {
            const raw = localStorage.getItem(this.STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                // Ensure default admin always exists
                if (!parsed['jj7758']) {
                    parsed['jj7758'] = DEFAULT_USERS_DB['jj7758'];
                }
                return parsed;
            }
        } catch (e) {
            console.error('Error loading users DB:', e);
        }
        this.saveUsers(DEFAULT_USERS_DB);
        return { ...DEFAULT_USERS_DB };
    }

    saveUsers(usersObj = this.users) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(usersObj, null, 2));
            this.users = usersObj;
        } catch (e) {
            console.error('Error saving users DB:', e);
        }
    }

    loadSession() {
        try {
            const raw = localStorage.getItem(this.SESSION_KEY);
            if (raw) {
                const sessionUser = JSON.parse(raw);
                // Verify user is still approved
                if (this.users[sessionUser.username] && this.users[sessionUser.username].status === 'APPROVED') {
                    return this.users[sessionUser.username];
                }
            }
        } catch (e) {}
        return null;
    }

    saveSession(user) {
        this.currentUser = user;
        if (user) {
            localStorage.setItem(this.SESSION_KEY, JSON.stringify(user));
        } else {
            localStorage.removeItem(this.SESSION_KEY);
        }
    }

    login(username, password) {
        const uKey = (username || '').trim().toLowerCase();
        const user = Object.values(this.users).find(u => u.username.toLowerCase() === uKey);

        if (!user) {
            return { success: false, message: 'Invalid username or password.' };
        }

        if (user.password !== password) {
            return { success: false, message: 'Invalid username or password.' };
        }

        if (user.status === 'PENDING') {
            return {
                success: false,
                isPending: true,
                message: '⏳ Account Pending Approval!\nYour registration is awaiting approval by the commissioner (jj7758).'
            };
        }

        if (user.status === 'REJECTED') {
            return { success: false, message: '❌ Account request was not approved.' };
        }

        this.saveSession(user);
        return { success: true, user };
    }

    register(requestedUsername, password, displayName = '') {
        const uKey = (requestedUsername || '').trim().toLowerCase();
        if (!uKey || !password) {
            return { success: false, message: 'Username and password are required.' };
        }

        const existing = Object.values(this.users).find(u => u.username.toLowerCase() === uKey);
        if (existing) {
            return { success: false, message: 'This username is already registered or requested.' };
        }

        const avatars = ['⚽', '🔥', '⚡', '🏆', '🎯', '🧤', '🚀', '🌟'];
        const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];

        const newUser = {
            username: requestedUsername.trim(),
            password: password,
            displayName: displayName.trim() || requestedUsername.trim(),
            role: 'USER',
            status: 'PENDING',
            avatar: randomAvatar,
            createdAt: new Date().toISOString()
        };

        this.users[newUser.username] = newUser;
        this.saveUsers();

        return {
            success: true,
            isPending: true,
            message: '🎉 Access Requested!\nYour account has been submitted to admin (jj7758) for approval.'
        };
    }

    approveUser(originalUsername, newUsername = null, newDisplayName = null) {
        if (!this.isAdmin()) return { success: false, message: 'Unauthorized' };

        const user = this.users[originalUsername];
        if (!user) return { success: false, message: 'User not found' };

        // If admin re-assigned the username
        const finalUsername = (newUsername && newUsername.trim()) ? newUsername.trim() : user.username;
        const finalDisplayName = (newDisplayName && newDisplayName.trim()) ? newDisplayName.trim() : (user.displayName || finalUsername);

        // If username changed, delete old key and re-assign
        if (finalUsername !== originalUsername) {
            delete this.users[originalUsername];
        }

        user.username = finalUsername;
        user.displayName = finalDisplayName;
        user.status = 'APPROVED';
        user.approvedAt = new Date().toISOString();

        this.users[finalUsername] = user;
        this.saveUsers();

        return { success: true, user };
    }

    rejectUser(username) {
        if (!this.isAdmin()) return { success: false, message: 'Unauthorized' };
        if (username === 'jj7758') return { success: false, message: 'Cannot reject admin' };

        const user = this.users[username];
        if (!user) return { success: false, message: 'User not found' };

        user.status = 'REJECTED';
        this.saveUsers();
        return { success: true };
    }

    adminAddUser(username, password, displayName, role = 'USER') {
        if (!this.isAdmin()) return { success: false, message: 'Unauthorized' };
        const u = username.trim();
        if (!u || !password) return { success: false, message: 'Username and password required' };

        const newUser = {
            username: u,
            password: password,
            displayName: displayName.trim() || u,
            role: role,
            status: 'APPROVED',
            avatar: role === 'ADMIN' ? '👑' : '⚽',
            createdAt: new Date().toISOString(),
            approvedAt: new Date().toISOString()
        };

        this.users[u] = newUser;
        this.saveUsers();
        return { success: true, user: newUser };
    }

    logout() {
        this.saveSession(null);
    }

    isAdmin() {
        return this.currentUser && this.currentUser.role === 'ADMIN';
    }

    getPendingUsers() {
        return Object.values(this.users).filter(u => u.status === 'PENDING');
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
                    parsed['jj7758'] = DEFAULT_USERS_DB['jj7758'];
                }
                this.saveUsers(parsed);
                return { success: true, count: Object.keys(parsed).length };
            }
        } catch (e) {
            return { success: false, error: e.message };
        }
        return { success: false, message: 'Invalid JSON format' };
    }
}

window.authManager = new AuthManager();
