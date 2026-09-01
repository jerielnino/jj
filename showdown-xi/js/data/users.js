/**
 * Showdown XI - Authorized Users Database
 * Managed by Commissioner (jj7758) and synchronized with Git.
 * This file is tracked in Git to provide persistent credentials across all devices.
 */

const AUTH_USERS_DATA = {
    "jj7758": {
        "username": "jj7758",
        "password": "foot4life",
        "displayName": "JJ (Commissioner)",
        "role": "ADMIN",
        "status": "APPROVED",
        "avatar": "👑",
        "createdAt": "2026-09-01T00:00:00.000Z",
        "approvedAt": "2026-09-01T00:00:00.000Z"
    },
    "Thachi": {
        "username": "Thachi",
        "password": "Thachi1234",
        "displayName": "Thachi",
        "role": "USER",
        "status": "APPROVED",
        "avatar": "🧤",
        "createdAt": "2026-09-01T11:15:28.067Z",
        "approvedAt": "2026-09-01T11:15:28.068Z"
    }
};

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
