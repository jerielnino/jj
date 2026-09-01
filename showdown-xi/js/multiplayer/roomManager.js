/**
 * Showdown XI - Multiplayer Room & League Manager
 * Manages overarching multiplayer league rooms spanning ALL fixtures/matches.
 * Tracks both Active Match Score (per selected fixture) and Overall Total Score (cumulative across all matches).
 * 100% Real Human Users only (AI Bots completely removed).
 */

class RoomManager {
    constructor() {
        this.storageKey = 'showdown_xi_rooms_v3';
        this.userProfileKey = 'showdown_xi_user_profile';
        this.activeRoomCodeKey = 'showdown_xi_active_room_code';
        this.userProfile = this.loadUserProfile();
        this.currentRoom = null;
        this.broadcastChannel = null;

        this.cleanLegacyLocalStorage();
        this.initActiveRoom();

        if (typeof BroadcastChannel !== 'undefined') {
            this.broadcastChannel = new BroadcastChannel('showdown_xi_sync');
            this.broadcastChannel.onmessage = (event) => {
                this.handleBroadcastMessage(event.data);
            };
        }
    }

    cleanLegacyLocalStorage() {
        try {
            // Remove old single-match fixture room keys from previous versions
            localStorage.removeItem('showdown_xi_rooms');
            localStorage.removeItem('showdown_xi_rooms_v2');
        } catch (e) {}
    }

    loadUserProfile() {
        if (window.authManager && window.authManager.currentUser) {
            const u = window.authManager.currentUser;
            return {
                id: u.username,
                name: u.displayName || u.username,
                avatar: u.avatar || '⚽',
                favClub: 'ARS'
            };
        }

        try {
            const saved = localStorage.getItem(this.userProfileKey);
            if (saved) return JSON.parse(saved);
        } catch (e) {}

        if (this.userProfile) return this.userProfile;

        const defaultUser = {
            id: 'jj7758',
            name: 'JJ (Commissioner)',
            avatar: '👑',
            favClub: 'LIV'
        };
        this.saveUserProfile(defaultUser);
        return defaultUser;
    }

    saveUserProfile(profile) {
        this.userProfile = profile;
        try {
            localStorage.setItem(this.userProfileKey, JSON.stringify(profile));
        } catch (e) {}
    }

    getUserAllSavedSquads(userId) {
        if (!userId) return {};
        const squads = {};
        if (typeof SAVED_USER_SQUADS_DATA !== 'undefined' && SAVED_USER_SQUADS_DATA[userId]) {
            for (const fId in SAVED_USER_SQUADS_DATA[userId]) {
                squads[fId] = JSON.parse(JSON.stringify(SAVED_USER_SQUADS_DATA[userId][fId]));
            }
        }
        return squads;
    }

    initActiveRoom() {
        const myRooms = this.getMyRooms();
        const savedActiveCode = localStorage.getItem(this.activeRoomCodeKey);
        if (savedActiveCode) {
            const match = this.getRoom(savedActiveCode);
            if (match) {
                this.currentRoom = match;
                return;
            }
        }
        if (myRooms.length > 0) {
            this.currentRoom = myRooms[0];
            localStorage.setItem(this.activeRoomCodeKey, this.currentRoom.code);
        } else {
            this.currentRoom = null;
        }
    }

    createRoom(roomName = null) {
        const randomCode = Math.random().toString(36).substring(2, 7).toUpperCase();
        const code = `XI-${randomCode}`;
        const currentUser = this.loadUserProfile();
        const userSquads = this.getUserAllSavedSquads(currentUser.id);

        const room = {
            code,
            name: roomName && roomName.trim() ? roomName.trim() : `Showdown League #${randomCode}`,
            createdAt: Date.now(),
            creatorId: currentUser.id,
            participants: [
                {
                    userId: currentUser.id,
                    name: currentUser.name,
                    avatar: currentUser.avatar,
                    isHost: true,
                    squads: userSquads,
                    squad: null,
                    matchScore: 0,
                    totalScore: 0,
                    submittedAt: Date.now()
                }
            ]
        };

        this.recalculateParticipantScores(room.participants[0]);
        this.saveRoom(room);
        this.currentRoom = room;
        try {
            localStorage.setItem(this.activeRoomCodeKey, room.code);
        } catch (e) {}

        this.broadcast({ type: 'ROOM_CREATED', room });
        return room;
    }

    joinRoom(roomCode) {
        const cleanCode = (roomCode || '').trim().toUpperCase();
        if (!cleanCode) {
            return { success: false, message: 'Please enter a valid room code.' };
        }

        let room = this.getRoom(cleanCode);
        if (!room) {
            return {
                success: false,
                message: `Room with code "${cleanCode}" was not found. Please verify the code with the room host.`
            };
        }

        const currentUser = this.loadUserProfile();
        const userSquads = this.getUserAllSavedSquads(currentUser.id);

        room.participants = (room.participants || []).filter(p => !p.isBot && !p.userId?.startsWith('bot_'));

        let existingPart = room.participants.find(p => p.userId === currentUser.id);
        if (!existingPart) {
            existingPart = {
                userId: currentUser.id,
                name: currentUser.name,
                avatar: currentUser.avatar,
                isHost: room.participants.length === 0,
                squads: userSquads,
                squad: null,
                matchScore: 0,
                totalScore: 0,
                submittedAt: Date.now()
            };
            room.participants.push(existingPart);
        } else {
            existingPart.squads = { ...userSquads, ...(existingPart.squads || {}) };
        }

        this.cleanAndRecalculateRoom(room);
        this.saveRoom(room);
        this.currentRoom = room;
        try {
            localStorage.setItem(this.activeRoomCodeKey, room.code);
        } catch (e) {}

        this.broadcast({ type: 'ROOM_JOINED', roomCode: cleanCode, user: currentUser });
        return { success: true, room };
    }

    submitSquad(roomCode, squadData, fixtureId = null) {
        const targetFixtureId = fixtureId || squadData.fixtureId || window.app?.selectedFixture?.id || (typeof FIXTURES_DATA !== 'undefined' ? FIXTURES_DATA[0]?.id : null);
        const currentUser = this.loadUserProfile();

        // 1. Save squad in all rooms the current user is part of
        const myRooms = this.getMyRooms();
        for (const room of myRooms) {
            let participant = room.participants.find(p => p.userId === currentUser.id);
            if (!participant) {
                participant = {
                    userId: currentUser.id,
                    name: currentUser.name,
                    avatar: currentUser.avatar,
                    isHost: false,
                    squads: {},
                    squad: null,
                    matchScore: 0,
                    totalScore: 0,
                    submittedAt: null
                };
                room.participants.push(participant);
            }

            if (!participant.squads) participant.squads = {};
            participant.squads[targetFixtureId] = {
                ...squadData,
                fixtureId: targetFixtureId,
                submittedAt: Date.now()
            };
            participant.squad = participant.squads[targetFixtureId];
            participant.submittedAt = Date.now();

            this.recalculateParticipantScores(participant, targetFixtureId);
            this.saveRoom(room);
        }

        if (this.currentRoom) {
            this.currentRoom = this.getRoom(this.currentRoom.code);
        }

        this.broadcast({ type: 'SQUAD_UPDATED', roomCode, userId: currentUser.id, squad: squadData });
        return true;
    }

    recalculateParticipantScores(participant, currentFixtureId = null) {
        if (!participant || !participant.squads) return;
        let total = 0;
        const targetFixtureId = currentFixtureId || window.app?.selectedFixture?.id || (typeof FIXTURES_DATA !== 'undefined' ? FIXTURES_DATA[0]?.id : null);
        const liveStatsMap = window.matchSimulator?.livePlayerStats || {};

        for (const fId in participant.squads) {
            const sq = participant.squads[fId];
            if (sq && sq.playerIds && sq.playerIds.length === 11) {
                const isTargetFixture = fId === targetFixtureId;
                const stats = isTargetFixture ? liveStatsMap : {};
                const res = typeof calculateSquadTotalPoints === 'function' ? calculateSquadTotalPoints(sq.playerIds, sq.benchIds || [], sq.captainId, sq.viceCaptainId, stats) : { totalScore: 0 };
                sq.matchPoints = res.totalScore;
                total += res.totalScore;
            }
        }

        participant.totalScore = total;
        if (targetFixtureId && participant.squads[targetFixtureId]) {
            participant.matchScore = participant.squads[targetFixtureId].matchPoints || 0;
            participant.squad = participant.squads[targetFixtureId];
        } else {
            participant.matchScore = 0;
            participant.squad = null;
        }
    }

    cleanAndRecalculateRoom(room) {
        if (!room || !room.participants) return room;
        room.participants = room.participants.filter(p => !p.isBot && !p.userId?.startsWith('bot_'));
        const targetFixtureId = window.app?.selectedFixture?.id || (typeof FIXTURES_DATA !== 'undefined' ? FIXTURES_DATA[0]?.id : null);
        for (const p of room.participants) {
            this.recalculateParticipantScores(p, targetFixtureId);
        }
        return room;
    }

    getRoom(code) {
        if (!code) return null;
        const cleanCode = code.trim().toUpperCase();

        // 1. Check Git-backed database
        if (typeof getGitRoom === 'function') {
            const gitRoom = getGitRoom(cleanCode);
            if (gitRoom) {
                return this.cleanAndRecalculateRoom(gitRoom);
            }
        }

        // 2. Check LocalStorage fallback
        try {
            const localRooms = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
            if (localRooms[cleanCode]) {
                return this.cleanAndRecalculateRoom(localRooms[cleanCode]);
            }
        } catch (e) {}

        return null;
    }

    getMyRooms() {
        const currentUser = this.loadUserProfile();
        const roomsMap = {};

        // 1. Load from Git database
        if (typeof getAllGitRooms === 'function') {
            const gitRooms = getAllGitRooms();
            gitRooms.forEach(r => {
                if (r && r.code) roomsMap[r.code] = r;
            });
        }

        // 2. Load from LocalStorage
        try {
            const localRooms = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
            for (const code in localRooms) {
                if (localRooms[code]) roomsMap[code] = localRooms[code];
            }
        } catch (e) {}

        // 3. Filter for rooms where current user is a participant or creator
        const myRooms = Object.values(roomsMap).filter(r => {
            if (!r || !r.code) return false;
            // Ignore legacy fixture-specific single match rooms
            if (r.fixtureId && r.code.endsWith('-LEAGUE') && (!r.participants || r.participants.length === 0)) return false;
            const isCreator = r.creatorId === currentUser.id;
            const isParticipant = (r.participants || []).some(p => p.userId === currentUser.id);
            return isCreator || isParticipant;
        });

        return myRooms.map(r => this.cleanAndRecalculateRoom(r));
    }

    saveRoom(room) {
        if (!room || !room.code) return;
        if (room.participants) {
            room.participants = room.participants.filter(p => !p.isBot && !p.userId?.startsWith('bot_'));
        }

        // 1. Save to Git database memory
        if (typeof setGitRoom === 'function') {
            setGitRoom(room);
        }

        // 2. Save to LocalStorage
        try {
            const localRooms = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
            localRooms[room.code] = room;
            localStorage.setItem(this.storageKey, JSON.stringify(localRooms));
        } catch (e) {}

        // 3. Auto-push to GitHub in background if configured
        if (window.gitSyncService && window.gitSyncService.isConfigured() && window.gitSyncService.config.autoPush) {
            window.gitSyncService.pushToGitHub().catch(e => console.warn('Git sync:', e));
        }
    }

    generateShareableLink(roomCode) {
        const baseUrl = window.location.origin + window.location.pathname;
        return `${baseUrl}#room=${encodeURIComponent(roomCode)}`;
    }

    broadcast(message) {
        if (this.broadcastChannel) {
            this.broadcastChannel.postMessage(message);
        }
    }

    handleBroadcastMessage(msg) {
        if (!msg) return;
        if (this.currentRoom && (msg.roomCode === this.currentRoom.code || msg.room?.code === this.currentRoom.code)) {
            const updated = this.getRoom(this.currentRoom.code);
            if (updated) {
                this.currentRoom = updated;
                if (window.leaderboardUI) {
                    window.leaderboardUI.render(this.currentRoom, window.matchSimulator?.livePlayerStats);
                }
            }
        }
    }
}

window.roomManager = new RoomManager();
