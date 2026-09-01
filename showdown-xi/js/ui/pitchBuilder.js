/**
 * Showdown XI - Tactical Pitch & 15-Player Squad Builder UI
 * Official FPL Rules: 11 Starters + 4 Substitutes Bench (1 GK Sub + 3 Outfield Subs) within £100.0M Budget.
 * Interactive Drag & Drop, Dual Dugout/Pitch Swapping, Position Validation, and Mobile Friendly.
 */

class PitchBuilderUI {
    constructor() {
        this.currentFormation = '4-3-3';
        this.selectedPlayers = new Array(11).fill(null); // 11 Starting slots on pitch
        this.benchPlayers = new Array(4).fill(null);     // 4 Bench slots: [0: GK Sub, 1: Sub 1, 2: Sub 2, 3: Sub 3]
        this.captainId = null;
        this.viceCaptainId = null;
        this.activeFixture = null;
        this.isLocked = false;
        this.selectedFilterPos = 'ALL';
        this.selectedFilterClub = 'ALL';
        this.highlightedSlotIdx = null;       // Highlighted Pitch slot
        this.highlightedBenchIdx = null;      // Highlighted Bench slot
        this.draggedPlayer = null;
        this.draggedSourceType = null;        // 'PITCH' | 'BENCH' | 'DOCK'
        this.draggedSourceIdx = null;

        this.formations = {
            '4-3-3': { GK: 1, DEF: 4, MID: 3, FWD: 3 },
            '4-4-2': { GK: 1, DEF: 4, MID: 4, FWD: 2 },
            '3-5-2': { GK: 1, DEF: 3, MID: 5, FWD: 2 },
            '3-4-3': { GK: 1, DEF: 3, MID: 4, FWD: 3 },
            '5-3-2': { GK: 1, DEF: 5, MID: 3, FWD: 2 },
            '4-2-3-1': { GK: 1, DEF: 4, MID: 5, FWD: 1 },
            '5-2-3': { GK: 1, DEF: 5, MID: 2, FWD: 3 }
        };
    }

    init(fixture) {
        this.activeFixture = fixture;
        const deadlineInfo = getMatchDeadlineInfo(fixture.kickoffTime);
        this.isLocked = deadlineInfo.isLocked;

        this.loadSavedSquad();
        this.render();
    }

    getMasterSquad(fixtureId) {
        try {
            const master = JSON.parse(localStorage.getItem('showdown_xi_master_squads') || '{}');
            return master[fixtureId] || null;
        } catch (e) {
            return null;
        }
    }

    saveMasterSquad(fixtureId, squadData) {
        try {
            const master = JSON.parse(localStorage.getItem('showdown_xi_master_squads') || '{}');
            master[fixtureId] = {
                ...squadData,
                fixtureId,
                updatedAt: Date.now()
            };
            localStorage.setItem('showdown_xi_master_squads', JSON.stringify(master));
        } catch (e) {}
    }

    loadSavedSquad() {
        const fixtureId = this.activeFixture.id;
        const currentUserId = window.authManager?.currentUser?.username || window.roomManager?.userProfile?.id || 'jj7758';
        const draftKey = `showdown_xi_draft_${fixtureId}_${currentUserId}`;

        const applySquadData = (data) => {
            if (!data) return false;
            const playerIds = data.playerIds || [];
            const benchIds = data.benchIds || [];
            const hasAnyPlayer = (playerIds.some(Boolean) || benchIds.some(Boolean));
            if (!hasAnyPlayer) return false;

            this.currentFormation = data.formation || '4-3-3';
            this.captainId = data.captainId || null;
            this.viceCaptainId = data.viceCaptainId || null;
            this.selectedPlayers = new Array(11).fill(null);
            this.benchPlayers = new Array(4).fill(null);

            for (let i = 0; i < 11; i++) {
                if (playerIds[i]) {
                    this.selectedPlayers[i] = getPlayerById(playerIds[i]);
                }
            }
            for (let i = 0; i < 4; i++) {
                if (benchIds[i]) {
                    this.benchPlayers[i] = getPlayerById(benchIds[i]);
                }
            }
            return true;
        };

        // 1. Primary: Master Permanent Squad Store
        const masterSquad = this.getMasterSquad(fixtureId);
        if (masterSquad && applySquadData(masterSquad)) return;

        // 2. User Specific Draft
        try {
            const savedDraft = localStorage.getItem(draftKey);
            if (savedDraft && applySquadData(JSON.parse(savedDraft))) return;
        } catch (e) {}

        // 3. Fallback General Drafts
        try {
            const guestDraft = localStorage.getItem(`showdown_xi_draft_${fixtureId}_jj7758`);
            if (guestDraft && applySquadData(JSON.parse(guestDraft))) return;
        } catch (e) {}

        // 4. Check Current Room
        const currentRoom = window.roomManager ? window.roomManager.currentRoom : null;
        if (currentRoom && currentRoom.fixtureId === fixtureId) {
            const userPart = currentRoom.participants?.find(p => p.userId === currentUserId) || currentRoom.participants?.[0];
            const squad = userPart?.squads?.[fixtureId] || userPart?.squad;
            if (squad && applySquadData(squad)) return;
        }

        // 5. Check Any Room Matching this Fixture
        if (window.roomManager) {
            const room = window.roomManager.findRoomByFixture(fixtureId);
            if (room && room.participants) {
                for (const part of room.participants) {
                    const squad = part.squads?.[fixtureId] || part.squad;
                    if (squad && applySquadData(squad)) return;
                }
            }
        }

        // 6. Permanent Git Repository Fallback (savedSquads.js)
        if (typeof getGitSavedSquad === 'function') {
            const gitSquad = getGitSavedSquad(fixtureId);
            if (gitSquad && applySquadData(gitSquad)) {
                this.saveMasterSquad(fixtureId, gitSquad);
                return;
            }
        }

        this.selectedPlayers = new Array(11).fill(null);
        this.benchPlayers = new Array(4).fill(null);
        this.captainId = null;
        this.viceCaptainId = null;
    }

    autoSaveDraft() {
        if (!this.activeFixture) return;
        const currentUserId = window.authManager?.currentUser?.username || window.roomManager?.userProfile?.id || 'jj7758';
        const draftKey = `showdown_xi_draft_${this.activeFixture.id}_${currentUserId}`;
        const draft = {
            fixtureId: this.activeFixture.id,
            formation: this.currentFormation,
            captainId: this.captainId,
            viceCaptainId: this.viceCaptainId,
            playerIds: this.selectedPlayers.map(p => p ? p.id : null),
            benchIds: this.benchPlayers.map(p => p ? p.id : null),
            updatedAt: Date.now()
        };
        try {
            localStorage.setItem(draftKey, JSON.stringify(draft));
            localStorage.setItem('showdown_xi_last_fixture_id', this.activeFixture.id);
            if (this.selectedPlayers.some(Boolean) || this.benchPlayers.some(Boolean)) {
                this.saveMasterSquad(this.activeFixture.id, draft);
            }
        } catch (e) {}
    }

    getSlotPositionsArray() {
        const config = this.formations[this.currentFormation] || this.formations['4-3-3'];
        const slots = [];
        for (let i = 0; i < config.GK; i++) slots.push('GK');
        for (let i = 0; i < config.DEF; i++) slots.push('DEF');
        for (let i = 0; i < config.MID; i++) slots.push('MID');
        for (let i = 0; i < config.FWD; i++) slots.push('FWD');
        return slots;
    }

    setFormation(formKey) {
        if (this.isLocked) {
            alert('Squad is locked! The 5-hour pre-match deadline has passed.');
            return;
        }
        if (!this.formations[formKey]) return;
        
        this.currentFormation = formKey;
        const oldStarters = this.selectedPlayers.filter(Boolean);
        const oldBench = this.benchPlayers.filter(Boolean);
        const allCurrentSquad = [...oldStarters, ...oldBench];

        this.selectedPlayers = new Array(11).fill(null);
        this.benchPlayers = new Array(4).fill(null);

        const newSlotPositions = this.getSlotPositionsArray();

        // 1. Assign Starting GK
        const gk = allCurrentSquad.find(p => p.pos === 'GK');
        if (gk) {
            this.selectedPlayers[0] = gk;
        }

        // 2. Assign Outfield Starters
        const outfieldSlots = newSlotPositions.slice(1);
        outfieldSlots.forEach((reqPos, slotOffset) => {
            const pitchIdx = slotOffset + 1;
            const match = allCurrentSquad.find(p => p.pos === reqPos && !this.selectedPlayers.includes(p));
            if (match) {
                this.selectedPlayers[pitchIdx] = match;
            }
        });

        // 3. Put remaining squad players onto Bench
        const remaining = allCurrentSquad.filter(p => !this.selectedPlayers.includes(p));
        const remGk = remaining.find(p => p.pos === 'GK');
        if (remGk) {
            this.benchPlayers[0] = remGk;
        }
        const remOutfield = remaining.filter(p => p.pos !== 'GK');
        for (let i = 0; i < 3; i++) {
            if (remOutfield[i]) this.benchPlayers[i + 1] = remOutfield[i];
        }

        this.highlightedSlotIdx = null;
        this.highlightedBenchIdx = null;
        this.renderPitch();
        this.renderBench();
        this.renderBottomDock();
        this.updateStatsBar();
    }

    render() {
        const container = document.getElementById('pitchBuilderSection');
        if (!container) return;

        const home = TEAMS_DATA[this.activeFixture.homeClub] || { name: this.activeFixture.homeClub, badge: '' };
        const away = TEAMS_DATA[this.activeFixture.awayClub] || { name: this.activeFixture.awayClub, badge: '' };
        const deadlineInfo = getMatchDeadlineInfo(this.activeFixture.kickoffTime);
        this.isLocked = deadlineInfo.isLocked;

        container.innerHTML = `
            <div class="pitch-builder-wrapper">
                <!-- Top Match Banner with Real Club Crests -->
                <div class="builder-match-banner">
                    <div class="banner-club home">
                        <img src="${home.badge}" alt="${home.name}" class="banner-crest-img" draggable="false">
                        <div class="club-meta">
                            <h3>${home.name}</h3>
                            <span class="club-role">HOME</span>
                        </div>
                    </div>
                    <div class="banner-vs-center">
                        <span class="vs-pill">VS</span>
                        <div class="lock-status-chip ${this.isLocked ? 'status-locked' : 'status-open'}">
                            ${this.isLocked ? '🔒 SQUAD LOCKED (5h Deadline)' : '🟢 PICKS OPEN'}
                        </div>
                        <div class="banner-kickoff-ist" title="Match Kickoff in Indian Standard Time">
                            <span>📅 ${deadlineInfo.kickoffDateStr}</span>
                        </div>
                    </div>
                    <div class="banner-club away">
                        <div class="club-meta" style="text-align: right;">
                            <h3>${away.name}</h3>
                            <span class="club-role">AWAY</span>
                        </div>
                        <img src="${away.badge}" alt="${away.name}" class="banner-crest-img" draggable="false">
                    </div>
                </div>

                <!-- Squad Controls & Formation Selector -->
                <div class="builder-controls-bar">
                    <div class="formation-select-group">
                        <label>Formation:</label>
                        <select id="formationSelector" ${this.isLocked ? 'disabled' : ''}>
                            ${Object.keys(this.formations).map(f => `<option value="${f}" ${f === this.currentFormation ? 'selected' : ''}>${f}</option>`).join('')}
                        </select>
                    </div>

                    <div class="builder-actions-group">
                        <button class="btn btn-secondary btn-sm" id="btnAutoPick" ${this.isLocked ? 'disabled' : ''}>
                            ⚡ Auto Best 15
                        </button>
                        <button class="btn btn-secondary btn-sm" id="btnExportGit" title="Download updated savedSquads.js file to commit to Git repository">
                            📥 Export to Git
                        </button>
                        <button class="btn btn-danger btn-sm" id="btnClearSquad" ${this.isLocked ? 'disabled' : ''}>
                            🗑️ Reset
                        </button>
                        <button class="btn btn-primary btn-sm" id="btnSaveSquad" ${this.isLocked ? 'disabled' : ''}>
                            💾 Save Squad
                        </button>
                    </div>
                </div>

                <!-- Squad Budget & Rules Info Bar -->
                <div class="squad-stats-bar" id="squadStatsBar">
                    <!-- Populated dynamically -->
                </div>

                <!-- 2D Tactical Football Pitch (Starting 11 Drop Zone) -->
                <div class="pitch-container">
                    <div class="pitch-field" id="pitchField">
                        <!-- Slots dynamically rendered -->
                    </div>
                </div>

                <!-- Substitutes Bench (Dugout: 4 Slots) -->
                <div class="pitch-bench-dugout" id="pitchBenchDugout">
                    <div class="bench-dugout-header">
                        <div class="bench-title-box">
                            <span class="bench-main-title">🪑 Substitutes Bench (4 Subs)</span>
                            <span class="bench-order-hint">• Official FPL Auto-Sub Priority Order</span>
                        </div>
                        <div class="bench-priority-pills">
                            <span class="bench-p-pill">1: GK Sub</span>
                            <span class="bench-p-pill">2: Sub 1</span>
                            <span class="bench-p-pill">3: Sub 2</span>
                            <span class="bench-p-pill">4: Sub 3</span>
                        </div>
                    </div>
                    <div class="bench-slots-row" id="benchSlotsRow">
                        <!-- Rendered by renderBench() -->
                    </div>
                </div>

                <!-- Persistent Bottom Player Dock (Drag Source & Mobile Tap Dock) -->
                <div class="bottom-player-dock" id="bottomPlayerDock">
                    <div class="dock-header">
                        <div class="dock-title-group">
                            <span class="dock-main-title">👥 Match Players</span>
                            <span class="dock-hint">Drag player to matching Pitch / Bench slot or tap to assign</span>
                        </div>
                        <div class="dock-filter-pills">
                            <button class="dock-filter-btn active" data-dock-pos="ALL">ALL</button>
                            <button class="dock-filter-btn" data-dock-pos="GK">GK</button>
                            <button class="dock-filter-btn" data-dock-pos="DEF">DEF</button>
                            <button class="dock-filter-btn" data-dock-pos="MID">MID</button>
                            <button class="dock-filter-btn" data-dock-pos="FWD">FWD</button>
                            <span class="dock-sep">|</span>
                            <button class="dock-filter-btn" data-dock-club="${home.id}">${home.shortName || home.id}</button>
                            <button class="dock-filter-btn" data-dock-club="${away.id}">${away.shortName || away.id}</button>
                        </div>
                    </div>

                    <!-- Scrollable Player Cards Row -->
                    <div class="dock-players-track" id="dockPlayersTrack">
                        <!-- Rendered by renderBottomDock() -->
                    </div>
                </div>
            </div>
        `;

        this.bindEvents();
        this.renderPitch();
        this.renderBench();
        this.renderBottomDock();
        this.updateStatsBar();
    }

    bindEvents() {
        const formationSelect = document.getElementById('formationSelector');
        if (formationSelect) {
            formationSelect.addEventListener('change', (e) => {
                this.setFormation(e.target.value);
            });
        }

        const autoPickBtn = document.getElementById('btnAutoPick');
        if (autoPickBtn) {
            autoPickBtn.addEventListener('click', () => {
                if (this.isLocked) return;
                this.autoPickBest15();
            });
        }

        const exportGitBtn = document.getElementById('btnExportGit');
        if (exportGitBtn) {
            exportGitBtn.addEventListener('click', () => {
                if (typeof exportSavedSquadsFile === 'function') {
                    exportSavedSquadsFile();
                } else {
                    alert('📥 Exporting squads to savedSquads.js...');
                }
            });
        }

        const clearBtn = document.getElementById('btnClearSquad');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                if (this.isLocked) return;
                this.clearSquad();
            });
        }

        const saveBtn = document.getElementById('btnSaveSquad');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                this.saveSquadToRoom();
            });
        }

        // Dock Filter Buttons
        document.querySelectorAll('.dock-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const pos = btn.getAttribute('data-dock-pos');
                const club = btn.getAttribute('data-dock-club');

                if (pos) {
                    this.selectedFilterPos = pos;
                    document.querySelectorAll('.dock-filter-btn[data-dock-pos]').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                } else if (club) {
                    if (this.selectedFilterClub === club) {
                        this.selectedFilterClub = 'ALL';
                        btn.classList.remove('active');
                    } else {
                        this.selectedFilterClub = club;
                        document.querySelectorAll('.dock-filter-btn[data-dock-club]').forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                    }
                }
                this.renderBottomDock();
            });
        });

        // Global listener to dismiss long-pressed remove badges when tapping outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.pitch-player-slot.show-remove-badge') && !e.target.closest('.bench-player-slot.show-remove-badge')) {
                document.querySelectorAll('.pitch-player-slot.show-remove-badge, .bench-player-slot.show-remove-badge').forEach(el => el.classList.remove('show-remove-badge'));
            }
        });
    }

    attachSlotInteractions(slotCard, isBench, idx, pos, assignedPlayer) {
        if (!assignedPlayer) {
            slotCard.addEventListener('click', () => {
                if (isBench) {
                    this.selectBenchSlot(idx);
                } else {
                    this.selectPitchSlot(idx, pos);
                }
            });
            return;
        }

        let longPressTimer = null;
        let touchStartX = 0;
        let touchStartY = 0;
        let didLongPress = false;

        slotCard.addEventListener('touchstart', (e) => {
            if (this.isLocked) return;
            if (e.target.closest('.slot-remove-badge') || e.target.closest('.btn-slot-action')) return;

            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            didLongPress = false;

            clearTimeout(longPressTimer);
            longPressTimer = setTimeout(() => {
                didLongPress = true;
                try {
                    if (navigator.vibrate) navigator.vibrate(35);
                } catch (err) {}

                // Dismiss remove badge on other slots
                document.querySelectorAll('.pitch-player-slot.show-remove-badge, .bench-player-slot.show-remove-badge').forEach(el => {
                    if (el !== slotCard) el.classList.remove('show-remove-badge');
                });

                // Toggle remove badge on this slot
                slotCard.classList.toggle('show-remove-badge');
            }, 400);
        }, { passive: true });

        slotCard.addEventListener('touchmove', (e) => {
            if (e.touches && e.touches.length > 0) {
                const dist = Math.hypot(e.touches[0].clientX - touchStartX, e.touches[0].clientY - touchStartY);
                if (dist > 8) {
                    // Finger moved (scrolling) -> cancel long-press immediately
                    clearTimeout(longPressTimer);
                    longPressTimer = null;
                }
            }
        }, { passive: true });

        slotCard.addEventListener('touchend', (e) => {
            clearTimeout(longPressTimer);
            longPressTimer = null;
            if (didLongPress) {
                e.preventDefault();
                setTimeout(() => { didLongPress = false; }, 150);
            }
        });

        slotCard.addEventListener('touchcancel', () => {
            clearTimeout(longPressTimer);
            longPressTimer = null;
            didLongPress = false;
        });

        slotCard.addEventListener('click', (e) => {
            if (didLongPress) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }

            const removeBtn = e.target.closest('.slot-remove-badge');
            if (removeBtn) {
                e.stopPropagation();
                e.preventDefault();
                if (isBench) {
                    this.removeBenchPlayer(idx);
                } else {
                    this.removePitchPlayer(idx);
                }
                return;
            }

            if (e.target.closest('.btn-slot-action')) {
                return;
            }

            const activeRemoveSlot = document.querySelector('.pitch-player-slot.show-remove-badge, .bench-player-slot.show-remove-badge');
            if (activeRemoveSlot) {
                document.querySelectorAll('.pitch-player-slot.show-remove-badge, .bench-player-slot.show-remove-badge').forEach(el => el.classList.remove('show-remove-badge'));
                if (activeRemoveSlot === slotCard) {
                    return;
                }
            }

            if (isBench) {
                this.selectBenchSlot(idx);
            } else {
                this.selectPitchSlot(idx, pos);
            }
        });
    }

    selectPitchSlot(slotIdx, pos) {
        if (this.isLocked) return;
        const player = this.selectedPlayers[slotIdx];
        if (player) {
            this.showPlayerActionModal({
                type: 'PITCH',
                idx: slotIdx,
                player: player,
                pos: pos
            });
        } else {
            if (this.highlightedSlotIdx === slotIdx) {
                this.highlightedSlotIdx = null;
            } else {
                this.highlightedSlotIdx = slotIdx;
                this.highlightedBenchIdx = null;
                // Auto-filter dock for easier mobile picking
                this.selectedFilterPos = pos;
                document.querySelectorAll('.dock-filter-btn[data-dock-pos]').forEach(b => {
                    b.classList.toggle('active', b.getAttribute('data-dock-pos') === pos);
                });
                this.renderBottomDock();
            }
            this.renderPitch();
            this.renderBench();
        }
    }

    selectBenchSlot(benchIdx) {
        if (this.isLocked) return;
        const player = this.benchPlayers[benchIdx];
        if (player) {
            this.showPlayerActionModal({
                type: 'BENCH',
                idx: benchIdx,
                player: player,
                role: benchIdx === 0 ? 'GK SUB' : `SUB ${benchIdx}`
            });
        } else {
            if (this.highlightedBenchIdx === benchIdx) {
                this.highlightedBenchIdx = null;
            } else {
                this.highlightedBenchIdx = benchIdx;
                this.highlightedSlotIdx = null;
                // Auto-filter dock
                const reqPos = benchIdx === 0 ? 'GK' : 'ALL';
                this.selectedFilterPos = reqPos;
                document.querySelectorAll('.dock-filter-btn[data-dock-pos]').forEach(b => {
                    b.classList.toggle('active', b.getAttribute('data-dock-pos') === reqPos);
                });
                this.renderBottomDock();
            }
            this.renderPitch();
            this.renderBench();
        }
    }

    renderPitch() {
        const field = document.getElementById('pitchField');
        if (!field) return;

        field.innerHTML = '';
        const config = this.formations[this.currentFormation] || this.formations['4-3-3'];

        const rows = [
            { pos: 'GK', count: config.GK },
            { pos: 'DEF', count: config.DEF },
            { pos: 'MID', count: config.MID },
            { pos: 'FWD', count: config.FWD }
        ];

        let globalSlotIndex = 0;

        rows.forEach(row => {
            const rowEl = document.createElement('div');
            rowEl.className = `pitch-row pitch-row-${row.pos.toLowerCase()}`;

            for (let i = 0; i < row.count; i++) {
                const slotIdx = globalSlotIndex++;
                const assignedPlayer = this.selectedPlayers[slotIdx];
                const isHighlighted = this.highlightedSlotIdx === slotIdx;

                const slotCard = document.createElement('div');
                slotCard.className = `pitch-player-slot ${assignedPlayer ? 'filled' : 'empty'} ${isHighlighted ? 'slot-highlighted' : ''} ${this.isLocked ? 'locked' : ''}`;
                slotCard.setAttribute('data-slot-index', slotIdx);
                slotCard.setAttribute('data-slot-pos', row.pos);

                // Setup Drag & Drop
                if (!this.isLocked) {
                    if (assignedPlayer) {
                        slotCard.setAttribute('draggable', 'true');
                        slotCard.addEventListener('dragstart', (e) => {
                            this.draggedPlayer = assignedPlayer;
                            this.draggedSourceType = 'PITCH';
                            this.draggedSourceIdx = slotIdx;
                            e.dataTransfer.setData('text/plain', assignedPlayer.id);
                            e.dataTransfer.effectAllowed = 'move';
                            slotCard.classList.add('is-dragging');
                        });
                        slotCard.addEventListener('dragend', () => {
                            slotCard.classList.remove('is-dragging');
                            this.clearDragOverStates();
                        });
                    }

                    slotCard.addEventListener('dragover', (e) => {
                        e.preventDefault();
                        e.dataTransfer.dropEffect = 'move';
                        slotCard.classList.add('drag-hover');
                    });

                    slotCard.addEventListener('dragleave', () => {
                        slotCard.classList.remove('drag-hover');
                    });

                    slotCard.addEventListener('drop', (e) => {
                        e.preventDefault();
                        slotCard.classList.remove('drag-hover');
                        const pId = e.dataTransfer.getData('text/plain');
                        const player = getPlayerById(pId) || this.draggedPlayer;
                        if (player) {
                            this.handleDropOnSlot(player, slotIdx, row.pos);
                        }
                    });
                }

                if (assignedPlayer) {
                    const isCap = assignedPlayer.id === this.captainId;
                    const isVC = assignedPlayer.id === this.viceCaptainId;
                    const team = TEAMS_DATA[assignedPlayer.club] || { primaryColor: '#333', name: assignedPlayer.club, badge: '' };
                    
                    const isInjured = assignedPlayer.status === 'i';
                    const isSuspended = assignedPlayer.status === 's';
                    const isDoubtful = assignedPlayer.status === 'd';

                    slotCard.innerHTML = `
                        <div class="player-photo-container">
                            <img src="${assignedPlayer.photo || ''}" alt="${assignedPlayer.name}" class="player-pitch-photo" draggable="false" referrerpolicy="no-referrer" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                            <div class="player-fallback-kit" style="display:none; background: linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor || team.primaryColor})">
                                <span>${assignedPlayer.number || assignedPlayer.pos}</span>
                            </div>
                            <img src="${team.badge}" class="player-club-mini-crest" alt="${team.name}" draggable="false">
                            ${isCap ? '<span class="captain-badge">C</span>' : ''}
                            ${isVC ? '<span class="vc-badge">V</span>' : ''}
                            ${isInjured ? '<span class="injury-slot-badge" title="Injured: ' + (assignedPlayer.news || '') + '">🚑</span>' : ''}
                            ${isSuspended ? '<span class="suspended-slot-badge" title="Suspended: ' + (assignedPlayer.news || '') + '">🚫</span>' : ''}
                            ${isDoubtful ? '<span class="doubtful-slot-badge" title="Doubtful (' + assignedPlayer.chance + '%): ' + (assignedPlayer.news || '') + '">⚠️</span>' : ''}
                            ${!this.isLocked ? `<button type="button" class="slot-remove-badge" data-remove-pitch-idx="${slotIdx}" title="Remove ${assignedPlayer.webName || assignedPlayer.name}">&times;</button>` : ''}
                        </div>
                        <div class="player-slot-meta">
                            <div class="slot-player-name">${assignedPlayer.webName || assignedPlayer.name.split(' ').pop()}</div>
                            <div class="slot-player-price">£${assignedPlayer.price}m</div>
                        </div>
                        ${!this.isLocked ? `
                            <div class="slot-actions-overlay">
                                <button type="button" class="btn-slot-action cap ${isCap ? 'active' : ''}" title="Captain (2x Points)" data-cap-id="${assignedPlayer.id}">C</button>
                                <button type="button" class="btn-slot-action vc ${isVC ? 'active' : ''}" title="Vice-Captain" data-vc-id="${assignedPlayer.id}">V</button>
                                <button type="button" class="btn-slot-action swap" title="Swap with Bench Player" data-swap-pitch-idx="${slotIdx}">⇄</button>
                                <button type="button" class="btn-slot-action remove" title="Remove Player" data-remove-pitch-idx="${slotIdx}">&times;</button>
                            </div>
                        ` : ''}
                    `;
                } else {
                    slotCard.innerHTML = `
                        <div class="empty-slot-plus">+</div>
                        <span class="empty-slot-label">${row.pos}</span>
                    `;
                }

                if (!this.isLocked) {
                    this.attachSlotInteractions(slotCard, false, slotIdx, row.pos, assignedPlayer);
                }

                rowEl.appendChild(slotCard);
            }

            field.appendChild(rowEl);
        });

        // Event Handlers for Pitch Actions
        field.querySelectorAll('[data-cap-id]').forEach(btn => {
            const handleCap = (e) => {
                e.stopPropagation();
                e.preventDefault();
                const pId = btn.getAttribute('data-cap-id');
                this.captainId = pId;
                if (this.viceCaptainId === pId) this.viceCaptainId = null;
                this.renderPitch();
                this.updateStatsBar();
            };
            btn.addEventListener('click', handleCap);
            btn.addEventListener('touchend', handleCap);
        });

        field.querySelectorAll('[data-vc-id]').forEach(btn => {
            const handleVC = (e) => {
                e.stopPropagation();
                e.preventDefault();
                const pId = btn.getAttribute('data-vc-id');
                this.viceCaptainId = pId;
                if (this.captainId === pId) this.captainId = null;
                this.renderPitch();
                this.updateStatsBar();
            };
            btn.addEventListener('click', handleVC);
            btn.addEventListener('touchend', handleVC);
        });

        field.querySelectorAll('[data-remove-pitch-idx]').forEach(btn => {
            const handleRemove = (e) => {
                e.stopPropagation();
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-remove-pitch-idx'), 10);
                this.removePitchPlayer(idx);
            };
            btn.addEventListener('click', handleRemove);
            btn.addEventListener('touchend', handleRemove);
        });

        field.querySelectorAll('[data-swap-pitch-idx]').forEach(btn => {
            const handleSwap = (e) => {
                e.stopPropagation();
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-swap-pitch-idx'), 10);
                this.promptSwapPitchPlayer(idx);
            };
            btn.addEventListener('click', handleSwap);
            btn.addEventListener('touchend', handleSwap);
        });
    }

    renderBench() {
        const row = document.getElementById('benchSlotsRow');
        if (!row) return;

        row.innerHTML = '';
        const roles = [
            { label: 'GK SUB', roleClass: 'gk', reqPos: 'GK', hint: 'Goalkeeper Backup' },
            { label: 'SUB 1', roleClass: 'sub1', reqPos: 'ANY', hint: '1st Outfield Sub' },
            { label: 'SUB 2', roleClass: 'sub2', reqPos: 'ANY', hint: '2nd Outfield Sub' },
            { label: 'SUB 3', roleClass: 'sub3', reqPos: 'ANY', hint: '3rd Outfield Sub' }
        ];

        roles.forEach((role, benchIdx) => {
            const assignedPlayer = this.benchPlayers[benchIdx];
            const isHighlighted = this.highlightedBenchIdx === benchIdx;

            const slotCard = document.createElement('div');
            slotCard.className = `bench-player-slot ${assignedPlayer ? 'filled' : 'empty'} ${isHighlighted ? 'slot-highlighted' : ''} ${this.isLocked ? 'locked' : ''}`;
            slotCard.setAttribute('data-bench-index', benchIdx);

            if (!this.isLocked) {
                if (assignedPlayer) {
                    slotCard.setAttribute('draggable', 'true');
                    slotCard.addEventListener('dragstart', (e) => {
                        this.draggedPlayer = assignedPlayer;
                        this.draggedSourceType = 'BENCH';
                        this.draggedSourceIdx = benchIdx;
                        e.dataTransfer.setData('text/plain', assignedPlayer.id);
                        e.dataTransfer.effectAllowed = 'move';
                        slotCard.classList.add('is-dragging');
                    });
                    slotCard.addEventListener('dragend', () => {
                        slotCard.classList.remove('is-dragging');
                        this.clearDragOverStates();
                    });
                }

                slotCard.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    e.dataTransfer.dropEffect = 'move';
                    slotCard.classList.add('drag-hover');
                });

                slotCard.addEventListener('dragleave', () => {
                    slotCard.classList.remove('drag-hover');
                });

                slotCard.addEventListener('drop', (e) => {
                    e.preventDefault();
                    slotCard.classList.remove('drag-hover');
                    const pId = e.dataTransfer.getData('text/plain');
                    const player = getPlayerById(pId) || this.draggedPlayer;
                    if (player) {
                        this.handleDropOnBench(player, benchIdx);
                    }
                });
            }

            if (assignedPlayer) {
                const team = TEAMS_DATA[assignedPlayer.club] || { primaryColor: '#333', name: assignedPlayer.club, badge: '' };
                const isInjured = assignedPlayer.status === 'i';
                const isSuspended = assignedPlayer.status === 's';
                const isDoubtful = assignedPlayer.status === 'd';

                slotCard.innerHTML = `
                    <span class="bench-role-tag ${role.roleClass}">${role.label}</span>
                    <div class="player-photo-container">
                        <img src="${assignedPlayer.photo || ''}" alt="${assignedPlayer.name}" class="player-pitch-photo" draggable="false" referrerpolicy="no-referrer" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="player-fallback-kit" style="display:none; background: linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor || team.primaryColor})">
                            <span>${assignedPlayer.number || assignedPlayer.pos}</span>
                        </div>
                        <img src="${team.badge}" class="player-club-mini-crest" alt="${team.name}" draggable="false">
                        ${isInjured ? '<span class="injury-slot-badge" title="Injured">🚑</span>' : ''}
                        ${isSuspended ? '<span class="suspended-slot-badge" title="Suspended">🚫</span>' : ''}
                        ${isDoubtful ? '<span class="doubtful-slot-badge" title="Doubtful">⚠️</span>' : ''}
                        ${!this.isLocked ? `<button type="button" class="slot-remove-badge" data-remove-bench-idx="${benchIdx}" title="Remove from Bench">&times;</button>` : ''}
                    </div>
                    <div class="player-slot-meta">
                        <div class="slot-player-name">${assignedPlayer.webName || assignedPlayer.name.split(' ').pop()}</div>
                        <div class="slot-player-price">£${assignedPlayer.price}m • ${assignedPlayer.pos}</div>
                    </div>
                    ${!this.isLocked ? `
                        <div class="slot-actions-overlay">
                            <button type="button" class="btn-slot-action swap" title="Swap with Starter on Pitch" data-swap-bench-idx="${benchIdx}">⇄</button>
                            <button type="button" class="btn-slot-action remove" title="Remove Player" data-remove-bench-idx="${benchIdx}">&times;</button>
                        </div>
                    ` : ''}
                `;
            } else {
                slotCard.innerHTML = `
                    <span class="bench-role-tag ${role.roleClass}">${role.label}</span>
                    <div class="empty-slot-plus">+</div>
                    <span class="empty-slot-label">${role.reqPos === 'GK' ? 'GK' : 'SUB'}</span>
                `;
            }

            if (!this.isLocked) {
                this.attachSlotInteractions(slotCard, true, benchIdx, null, assignedPlayer);
            }

            row.appendChild(slotCard);
        });

        // Event Handlers for Bench Actions (Guaranteed Mobile Click & Touch)
        row.querySelectorAll('[data-remove-bench-idx]').forEach(btn => {
            const handleRemoveBench = (e) => {
                e.stopPropagation();
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-remove-bench-idx'), 10);
                this.removeBenchPlayer(idx);
            };
            btn.addEventListener('click', handleRemoveBench);
            btn.addEventListener('touchend', handleRemoveBench);
        });

        row.querySelectorAll('[data-swap-bench-idx]').forEach(btn => {
            const handleSwapBench = (e) => {
                e.stopPropagation();
                e.preventDefault();
                const idx = parseInt(btn.getAttribute('data-swap-bench-idx'), 10);
                this.promptSwapBenchPlayer(idx);
            };
            btn.addEventListener('click', handleSwapBench);
            btn.addEventListener('touchend', handleSwapBench);
        });
    }

    renderBottomDock() {
        const track = document.getElementById('dockPlayersTrack');
        if (!track) return;

        const allPlayers = getMatchPlayers(this.activeFixture.homeClub, this.activeFixture.awayClub);
        const selectedPitchIds = new Set(this.selectedPlayers.filter(Boolean).map(p => p.id));
        const selectedBenchIds = new Set(this.benchPlayers.filter(Boolean).map(p => p.id));

        let filtered = allPlayers.filter(p => {
            if (this.selectedFilterPos !== 'ALL' && p.pos !== this.selectedFilterPos) return false;
            if (this.selectedFilterClub !== 'ALL' && p.club !== this.selectedFilterClub) return false;
            return true;
        });

        // Sort by form, placing fit players ahead of injured
        filtered.sort((a, b) => {
            const aPenalty = a.status === 'i' ? 100 : (a.status === 's' ? 50 : 0);
            const bPenalty = b.status === 'i' ? 100 : (b.status === 's' ? 50 : 0);
            return (b.form - bPenalty) - (a.form - aPenalty);
        });

        if (filtered.length === 0) {
            track.innerHTML = `<div class="dock-empty">No players found for selected filter.</div>`;
            return;
        }

        track.innerHTML = filtered.map(player => {
            const isStarting = selectedPitchIds.has(player.id);
            const isBenched = selectedBenchIds.has(player.id);
            const isPicked = isStarting || isBenched;
            const team = TEAMS_DATA[player.club] || { name: player.club, badge: '' };
            
            const isInjured = player.status === 'i';
            const isSuspended = player.status === 's';
            const isDoubtful = player.status === 'd';

            let statusBadge = '';
            if (isInjured) {
                statusBadge = `<span class="dock-status-tag tag-injured" title="${player.news || 'Injured'}">🚑 INJURED</span>`;
            } else if (isSuspended) {
                statusBadge = `<span class="dock-status-tag tag-suspended" title="${player.news || 'Suspended'}">🚫 SUSPENDED</span>`;
            } else if (isDoubtful) {
                statusBadge = `<span class="dock-status-tag tag-doubtful" title="${player.news || 'Doubtful'}">⚠️ ${player.chance}% CHANCE</span>`;
            }

            let roleBadge = '';
            if (isStarting) roleBadge = `<span class="dock-status-tag" style="background:#10B981; color:#000;">⭐ STARTING 11</span>`;
            else if (isBenched) roleBadge = `<span class="dock-status-tag" style="background:#8B5CF6; color:#fff;">🪑 BENCH</span>`;

            return `
                <div class="dock-player-card ${isPicked ? 'is-picked' : ''} ${isInjured ? 'card-injured' : ''} ${isSuspended ? 'card-suspended' : ''}" draggable="${!isPicked && !this.isLocked ? 'true' : 'false'}" data-dock-player-id="${player.id}">
                    <div class="dock-card-top">
                        <img src="${player.photo || ''}" alt="${player.name}" class="dock-player-img" draggable="false" referrerpolicy="no-referrer" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="dock-fallback-kit" style="display:none; background: linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor || team.primaryColor})">
                            <span>${player.number || player.pos}</span>
                        </div>
                        <img src="${team.badge}" class="dock-club-crest" alt="${team.name}" draggable="false">
                        <span class="dock-pos-badge ${player.pos.toLowerCase()}">${player.pos}</span>
                    </div>
                    <div class="dock-player-info">
                        <span class="dock-pname">${player.webName || player.name}</span>
                        ${roleBadge || statusBadge}
                        <div class="dock-pstats">
                            <span>⭐ ${player.form.toFixed(1)}</span>
                            <span>£${player.price}m</span>
                        </div>
                    </div>
                    <div class="dock-card-action">
                        ${isPicked ? `<button type="button" class="btn-dock-remove" data-remove-player-id="${player.id}" title="Click to remove ${player.name}">✕ REMOVE</button>` : `<button type="button" class="btn-dock-add" data-add-player-id="${player.id}">+ ADD</button>`}
                    </div>
                </div>
            `;
        }).join('');

        // Bind drag listeners to dock cards
        track.querySelectorAll('.dock-player-card').forEach(card => {
            const pId = card.getAttribute('data-dock-player-id');
            const player = getPlayerById(pId);
            if (!player) return;

            card.addEventListener('dragstart', (e) => {
                this.draggedPlayer = player;
                this.draggedSourceType = 'DOCK';
                this.draggedSourceIdx = null;
                e.dataTransfer.setData('text/plain', pId);
                e.dataTransfer.effectAllowed = 'move';
                card.classList.add('is-dragging');
            });

            card.addEventListener('dragend', () => {
                card.classList.remove('is-dragging');
                this.clearDragOverStates();
            });
        });

        // Bind Click / Tap on player card or add/remove buttons
        track.querySelectorAll('.dock-player-card').forEach(card => {
            const pId = card.getAttribute('data-dock-player-id');
            const player = getPlayerById(pId);
            if (!player) return;

            const handleCardTap = (e) => {
                if (this.isLocked) return;

                const isStarting = this.selectedPlayers.some(p => p && p.id === player.id);
                const isBenched = this.benchPlayers.some(p => p && p.id === player.id);
                const removeBtn = e.target.closest('.btn-dock-remove');
                const addBtn = e.target.closest('.btn-dock-add');

                if (removeBtn || ((isStarting || isBenched) && !addBtn)) {
                    if (isStarting) {
                        const idx = this.selectedPlayers.findIndex(p => p && p.id === player.id);
                        this.removePitchPlayer(idx);
                    } else if (isBenched) {
                        const idx = this.benchPlayers.findIndex(p => p && p.id === player.id);
                        this.removeBenchPlayer(idx);
                    }
                    return;
                }

                // Auto-assign player
                this.autoAssignPlayer(player);
            };

            card.addEventListener('click', handleCardTap);
        });
    }

    handleDropOnSlot(player, targetSlotIdx, targetPos) {
        if (this.isLocked) return;

        // Position Validation
        if (player.pos !== targetPos) {
            alert(`⚠️ Invalid Position!\n\n${player.name} is a ${player.pos}, but this is a ${targetPos} slot.`);
            return;
        }

        // Injury Warning
        if (player.status === 'i') {
            if (!confirm(`🚑 Injury Warning:\n\n${player.name} is currently INJURED (${player.news || '0% chance of playing'}).\n\nDo you still want to include them in your Starting 11?`)) {
                return;
            }
        }

        // 1. From Bench to Pitch (Swapping Pitch and Bench)
        if (this.draggedSourceType === 'BENCH' && this.draggedSourceIdx !== null) {
            const benchIdx = this.draggedSourceIdx;
            const existingPitchPlayer = this.selectedPlayers[targetSlotIdx];

            if (targetPos === 'GK' && player.pos !== 'GK') {
                alert('⚠️ Only a Goalkeeper can play in the starting GK slot.');
                return;
            }
            if (benchIdx === 0 && existingPitchPlayer && existingPitchPlayer.pos !== 'GK') {
                alert('⚠️ Bench Slot 1 is reserved for the backup Goalkeeper.');
                return;
            }

            // Club split validation on swap
            if (existingPitchPlayer && existingPitchPlayer.club !== player.club) {
                const simPitchCount = this.selectedPlayers.filter((p, i) => i !== targetSlotIdx && p && p.club === player.club).length + 1;
                const simBenchCount = this.benchPlayers.filter((p, i) => i !== benchIdx && p && p.club === existingPitchPlayer.club).length + 1;
                if (simPitchCount > 6) {
                    alert(`⚠️ Starting 11 Club Limit Exceeded!\n\nMoving ${player.name} (${player.club}) to Starting 11 would exceed the maximum of 6 players from ${player.club} (First XI 6:5 rule).`);
                    return;
                }
                if (simBenchCount > 2) {
                    alert(`⚠️ Substitutes Bench Club Limit Exceeded!\n\nMoving ${existingPitchPlayer.name} (${existingPitchPlayer.club}) to Bench would exceed the maximum of 2 players from ${existingPitchPlayer.club} (Bench 2:2 rule).`);
                    return;
                }
            } else if (!existingPitchPlayer) {
                const simPitchCount = this.selectedPlayers.filter((p, i) => i !== targetSlotIdx && p && p.club === player.club).length + 1;
                if (simPitchCount > 6) {
                    alert(`⚠️ Starting 11 Club Limit Exceeded!\n\nA maximum of 6 players from ${player.club} can be in your Starting 11 (First XI 6:5 rule).`);
                    return;
                }
            }

            this.selectedPlayers[targetSlotIdx] = player;
            this.benchPlayers[benchIdx] = existingPitchPlayer || null;
        } 
        // 2. From another Pitch Slot (Swapping two pitch slots)
        else if (this.draggedSourceType === 'PITCH' && this.draggedSourceIdx !== null) {
            const oldIdx = this.draggedSourceIdx;
            const slotPositions = this.getSlotPositionsArray();
            const sourceSlotPos = slotPositions[oldIdx];
            const existingTargetPlayer = this.selectedPlayers[targetSlotIdx];

            if (existingTargetPlayer && existingTargetPlayer.pos !== sourceSlotPos) {
                alert(`⚠️ Cannot swap: ${existingTargetPlayer.name} (${existingTargetPlayer.pos}) cannot play in a ${sourceSlotPos} slot.`);
                return;
            }

            this.selectedPlayers[targetSlotIdx] = player;
            this.selectedPlayers[oldIdx] = existingTargetPlayer || null;
        } 
        // 3. From Dock / New Player
        else {
            const simPitch = [...this.selectedPlayers];
            const pIdx = simPitch.findIndex(p => p && p.id === player.id);
            if (pIdx !== -1) simPitch[pIdx] = null;
            simPitch[targetSlotIdx] = player;

            const clubCount = simPitch.filter(p => p && p.club === player.club).length;
            if (clubCount > 6) {
                alert(`⚠️ Starting 11 Club Limit Exceeded!\n\nA maximum of 6 players from ${player.club} can be in your Starting 11 (First XI 6:5 rule).`);
                return;
            }

            const bIdx = this.benchPlayers.findIndex(p => p && p.id === player.id);
            if (bIdx !== -1) this.benchPlayers[bIdx] = null;
            if (pIdx !== -1) this.selectedPlayers[pIdx] = null;

            this.selectedPlayers[targetSlotIdx] = player;
        }

        this.highlightedSlotIdx = null;
        this.highlightedBenchIdx = null;
        this.draggedPlayer = null;
        this.draggedSourceType = null;
        this.draggedSourceIdx = null;

        if (!this.captainId) this.captainId = player.id;
        else if (!this.viceCaptainId && this.captainId !== player.id) this.viceCaptainId = player.id;

        this.renderPitch();
        this.renderBench();
        this.renderBottomDock();
        this.updateStatsBar();
    }

    handleDropOnBench(player, benchIdx) {
        if (this.isLocked) return;

        // Bench Slot 0 must be Goalkeeper
        if (benchIdx === 0 && player.pos !== 'GK') {
            alert(`⚠️ Bench Slot 1 is reserved for a backup Goalkeeper (GK).\n\n${player.name} is a ${player.pos}.`);
            return;
        }
        // Bench Slots 1-3 are Outfield Subs
        if (benchIdx > 0 && player.pos === 'GK') {
            alert(`⚠️ Goalkeepers must be placed in the GK Sub slot (Bench Slot 1).\n\nBench Slots 2, 3, 4 are reserved for outfield substitutes.`);
            return;
        }

        // 1. From Pitch to Bench
        if (this.draggedSourceType === 'PITCH' && this.draggedSourceIdx !== null) {
            const pitchIdx = this.draggedSourceIdx;
            const slotPositions = this.getSlotPositionsArray();
            const pitchPos = slotPositions[pitchIdx];
            const existingBenchPlayer = this.benchPlayers[benchIdx];

            if (existingBenchPlayer && existingBenchPlayer.pos !== pitchPos) {
                alert(`⚠️ Cannot swap: ${existingBenchPlayer.name} (${existingBenchPlayer.pos}) cannot play in a starting ${pitchPos} slot on the pitch.`);
                return;
            }

            // Club split validation on swap
            if (existingBenchPlayer && existingBenchPlayer.club !== player.club) {
                const simBenchCount = this.benchPlayers.filter((p, i) => i !== benchIdx && p && p.club === player.club).length + 1;
                const simPitchCount = this.selectedPlayers.filter((p, i) => i !== pitchIdx && p && p.club === existingBenchPlayer.club).length + 1;
                if (simBenchCount > 2) {
                    alert(`⚠️ Substitutes Bench Club Limit Exceeded!\n\nMoving ${player.name} (${player.club}) to Bench would exceed the maximum of 2 players from ${player.club} (Bench 2:2 rule).`);
                    return;
                }
                if (simPitchCount > 6) {
                    alert(`⚠️ Starting 11 Club Limit Exceeded!\n\nMoving ${existingBenchPlayer.name} (${existingBenchPlayer.club}) to Starting 11 would exceed the maximum of 6 players from ${existingBenchPlayer.club} (First XI 6:5 rule).`);
                    return;
                }
            } else if (!existingBenchPlayer) {
                const simBenchCount = this.benchPlayers.filter((p, i) => i !== benchIdx && p && p.club === player.club).length + 1;
                if (simBenchCount > 2) {
                    alert(`⚠️ Substitutes Bench Club Limit Exceeded!\n\nA maximum of 2 players from ${player.club} can be on the Bench (Bench 2:2 rule).`);
                    return;
                }
            }

            this.benchPlayers[benchIdx] = player;
            this.selectedPlayers[pitchIdx] = existingBenchPlayer || null;
        }
        // 2. From another Bench slot
        else if (this.draggedSourceType === 'BENCH' && this.draggedSourceIdx !== null) {
            const oldBenchIdx = this.draggedSourceIdx;
            const existingTarget = this.benchPlayers[benchIdx];

            if (oldBenchIdx === 0 && existingTarget && existingTarget.pos !== 'GK') {
                alert('⚠️ Bench Slot 1 must remain a Goalkeeper.');
                return;
            }

            this.benchPlayers[benchIdx] = player;
            this.benchPlayers[oldBenchIdx] = existingTarget || null;
        }
        // 3. From Dock / New Player
        else {
            const simBench = [...this.benchPlayers];
            const bIdx = simBench.findIndex(p => p && p.id === player.id);
            if (bIdx !== -1) simBench[bIdx] = null;
            simBench[benchIdx] = player;

            const clubCount = simBench.filter(p => p && p.club === player.club).length;
            if (clubCount > 2) {
                alert(`⚠️ Substitutes Bench Club Limit Exceeded!\n\nA maximum of 2 players from ${player.club} can be placed on the Bench (Bench 2:2 rule).`);
                return;
            }

            const pIdx = this.selectedPlayers.findIndex(p => p && p.id === player.id);
            if (pIdx !== -1) this.selectedPlayers[pIdx] = null;
            if (bIdx !== -1) this.benchPlayers[bIdx] = null;

            this.benchPlayers[benchIdx] = player;
        }

        this.highlightedSlotIdx = null;
        this.highlightedBenchIdx = null;
        this.draggedPlayer = null;
        this.draggedSourceType = null;
        this.draggedSourceIdx = null;

        this.renderPitch();
        this.renderBench();
        this.renderBottomDock();
        this.updateStatsBar();
    }

    autoAssignPlayer(player) {
        const slotPositions = this.getSlotPositionsArray();
        const curPitchClubCount = this.selectedPlayers.filter(p => p && p.club === player.club).length;
        const curBenchClubCount = this.benchPlayers.filter(p => p && p.club === player.club).length;

        // 1. If user previously tapped on a specific Pitch slot
        if (this.highlightedSlotIdx !== null) {
            const targetPos = slotPositions[this.highlightedSlotIdx];
            if (targetPos === player.pos) {
                this.handleDropOnSlot(player, this.highlightedSlotIdx, targetPos);
                return;
            }
        }

        // 2. If user previously tapped on a specific Bench slot
        if (this.highlightedBenchIdx !== null) {
            if (this.highlightedBenchIdx === 0 && player.pos === 'GK') {
                this.handleDropOnBench(player, 0);
                return;
            } else if (this.highlightedBenchIdx > 0 && player.pos !== 'GK') {
                this.handleDropOnBench(player, this.highlightedBenchIdx);
                return;
            }
        }

        // 3. Find first open Starting 11 slot matching exact position (only if club limit < 6)
        if (curPitchClubCount < 6) {
            const matchingPitchIdx = slotPositions.findIndex((pos, idx) => pos === player.pos && !this.selectedPlayers[idx]);
            if (matchingPitchIdx !== -1) {
                this.handleDropOnSlot(player, matchingPitchIdx, player.pos);
                return;
            }
        }

        // 4. If pitch slots are full for this pos, try finding an open Bench slot (only if club limit < 2)
        if (curBenchClubCount < 2) {
            if (player.pos === 'GK' && !this.benchPlayers[0]) {
                this.handleDropOnBench(player, 0);
                return;
            } else if (player.pos !== 'GK') {
                for (let i = 1; i <= 3; i++) {
                    if (!this.benchPlayers[i]) {
                        this.handleDropOnBench(player, i);
                        return;
                    }
                }
            }
        }

        // 5. If all slots for this position are full, open Replacement Modal
        const currentPosStarters = [];
        slotPositions.forEach((pos, idx) => {
            if (pos === player.pos && this.selectedPlayers[idx]) {
                const candidate = this.selectedPlayers[idx];
                const canReplacePitch = candidate.club === player.club || curPitchClubCount < 6;
                if (canReplacePitch) {
                    currentPosStarters.push({ type: 'PITCH', idx, player: candidate });
                }
            }
        });

        const currentPosBench = [];
        this.benchPlayers.forEach((p, idx) => {
            if (p && ((idx === 0 && player.pos === 'GK') || (idx > 0 && player.pos !== 'GK'))) {
                const canReplaceBench = p.club === player.club || curBenchClubCount < 2;
                if (canReplaceBench) {
                    currentPosBench.push({ type: 'BENCH', idx, player: p });
                }
            }
        });

        const allCandidates = [...currentPosStarters, ...currentPosBench];
        if (allCandidates.length > 0) {
            this.showReplacementModal(player, allCandidates);
        } else {
            if (curPitchClubCount >= 6 && curBenchClubCount >= 2) {
                alert(`⚠️ Club Limit Reached!\n\nYou have reached the maximum allowed players from ${player.club} (6 in Starting 11 and 2 on Bench).`);
            } else {
                alert(`No available slot or eligible player of position ${player.pos} to replace with ${player.name}.`);
            }
        }
    }

    /**
     * Mobile-Friendly Modal: Interactive Player Action Menu
     */
    showPlayerActionModal(info) {
        const { type, idx, player } = info;
        const isPitch = type === 'PITCH';
        const team = TEAMS_DATA[player.club] || { name: player.club, badge: '' };
        const isCap = player.id === this.captainId;
        const isVC = player.id === this.viceCaptainId;

        const modal = document.createElement('div');
        modal.className = 'pitch-action-modal-overlay';
        modal.innerHTML = `
            <div class="pitch-action-modal-box">
                <div class="modal-header-row">
                    <div class="modal-header-title">
                        <span>⚙️ Player Actions</span>
                    </div>
                    <button type="button" class="modal-close-icon-btn" id="modalCloseAction">&times;</button>
                </div>

                <div class="modal-player-preview-card">
                    <img src="${player.photo || ''}" alt="${player.name}" class="modal-preview-img" onerror="this.style.display='none'">
                    <div class="modal-preview-info">
                        <div class="modal-preview-name">${player.name}</div>
                        <div class="modal-preview-meta">
                            <span>${team.name}</span>
                            <span>•</span>
                            <span>${player.pos}</span>
                            <span>•</span>
                            <span style="color:var(--primary-green)">£${player.price}m</span>
                            <span>•</span>
                            <span>⭐ ${player.form.toFixed(1)}</span>
                        </div>
                    </div>
                </div>

                <div class="modal-action-buttons-list">
                    ${isPitch ? `
                        <button type="button" class="modal-action-row-btn cap" id="btnModalCap">
                            <span>👑 ${isCap ? 'Current Captain (2x Points)' : 'Make Captain (2x Points)'}</span>
                            <span>${isCap ? '✅' : '👑'}</span>
                        </button>
                        <button type="button" class="modal-action-row-btn vc" id="btnModalVC">
                            <span>🎖️ ${isVC ? 'Current Vice-Captain' : 'Make Vice-Captain (Backup 2x)'}</span>
                            <span>${isVC ? '✅' : '🎖️'}</span>
                        </button>
                        <button type="button" class="modal-action-row-btn swap" id="btnModalSwap">
                            <span>⇄ Swap with Bench Substitute</span>
                            <span>⇄</span>
                        </button>
                    ` : `
                        <button type="button" class="modal-action-row-btn swap" id="btnModalPromote">
                            <span>⇄ Promote to Starting 11</span>
                            <span>⭐</span>
                        </button>
                    `}
                    <button type="button" class="modal-action-row-btn" id="btnModalPickReplace">
                        <span>🔄 Replace with Another Player</span>
                        <span>👥</span>
                    </button>
                    <button type="button" class="modal-action-row-btn remove" id="btnModalRemove">
                        <span>🗑️ Remove from Squad</span>
                        <span>✕</span>
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const closeModal = () => modal.remove();
        modal.querySelector('#modalCloseAction')?.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // Captain
        modal.querySelector('#btnModalCap')?.addEventListener('click', () => {
            this.captainId = player.id;
            if (this.viceCaptainId === player.id) this.viceCaptainId = null;
            this.renderPitch();
            this.updateStatsBar();
            closeModal();
        });

        // Vice-Captain
        modal.querySelector('#btnModalVC')?.addEventListener('click', () => {
            this.viceCaptainId = player.id;
            if (this.captainId === player.id) this.captainId = null;
            this.renderPitch();
            this.updateStatsBar();
            closeModal();
        });

        // Swap Pitch Player
        modal.querySelector('#btnModalSwap')?.addEventListener('click', () => {
            closeModal();
            this.promptSwapPitchPlayer(idx);
        });

        // Promote Bench Player
        modal.querySelector('#btnModalPromote')?.addEventListener('click', () => {
            closeModal();
            this.promptSwapBenchPlayer(idx);
        });

        // Replace Player from Dock
        modal.querySelector('#btnModalPickReplace')?.addEventListener('click', () => {
            closeModal();
            if (isPitch) {
                this.highlightedSlotIdx = idx;
                this.highlightedBenchIdx = null;
            } else {
                this.highlightedBenchIdx = idx;
                this.highlightedSlotIdx = null;
            }
            this.selectedFilterPos = player.pos;
            document.querySelectorAll('.dock-filter-btn[data-dock-pos]').forEach(b => {
                b.classList.toggle('active', b.getAttribute('data-dock-pos') === player.pos);
            });
            this.renderPitch();
            this.renderBench();
            this.renderBottomDock();
            document.getElementById('bottomPlayerDock')?.scrollIntoView({ behavior: 'smooth' });
        });

        // Remove Player
        modal.querySelector('#btnModalRemove')?.addEventListener('click', () => {
            closeModal();
            if (isPitch) {
                this.removePitchPlayer(idx);
            } else {
                this.removeBenchPlayer(idx);
            }
        });
    }

    /**
     * Mobile-Friendly Modal: Replacement Picker
     */
    showReplacementModal(newPlayer, candidates) {
        const modal = document.createElement('div');
        modal.className = 'pitch-action-modal-overlay';
        modal.innerHTML = `
            <div class="pitch-action-modal-box">
                <div class="modal-header-row">
                    <div class="modal-header-title">
                        <span>🔄 Replace ${newPlayer.pos}</span>
                    </div>
                    <button type="button" class="modal-close-icon-btn" id="modalCloseReplace">&times;</button>
                </div>

                <div style="font-size: 0.85rem; color: var(--text-muted);">
                    All <strong style="color:#fff">${newPlayer.pos}</strong> slots are filled. Tap a player below to replace with <strong style="color:var(--primary-green)">${newPlayer.name} (£${newPlayer.price}m)</strong>:
                </div>

                <div class="modal-candidates-list">
                    ${candidates.map((c, i) => `
                        <button type="button" class="candidate-item-btn" data-cand-idx="${i}">
                            <img src="${c.player.photo || ''}" alt="${c.player.name}" class="candidate-img" onerror="this.style.display='none'">
                            <div class="candidate-details">
                                <span class="candidate-name">${c.player.name}</span>
                                <span class="candidate-meta">${c.type === 'PITCH' ? '⭐ Starting 11' : '🪑 Bench Sub'} • £${c.player.price}m • ${c.player.club}</span>
                            </div>
                            <span style="font-size: 0.8rem; color: var(--primary-green); font-weight: 800;">REPLACE ➔</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const closeModal = () => modal.remove();
        modal.querySelector('#modalCloseReplace')?.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        modal.querySelectorAll('[data-cand-idx]').forEach(btn => {
            btn.addEventListener('click', () => {
                const i = parseInt(btn.getAttribute('data-cand-idx'), 10);
                const chosen = candidates[i];
                if (chosen) {
                    if (chosen.type === 'PITCH') {
                        this.handleDropOnSlot(newPlayer, chosen.idx, newPlayer.pos);
                    } else {
                        this.handleDropOnBench(newPlayer, chosen.idx);
                    }
                }
                closeModal();
            });
        });
    }

    /**
     * Mobile-Friendly Modal: Swap Picker
     */
    promptSwapPitchPlayer(pitchIdx) {
        const pitchPlayer = this.selectedPlayers[pitchIdx];
        if (!pitchPlayer) return;

        const slotPositions = this.getSlotPositionsArray();
        const reqPos = slotPositions[pitchIdx];

        const eligibleBench = [];
        this.benchPlayers.forEach((bp, bIdx) => {
            if (bp) {
                // Position check
                const isPosMatch = (reqPos === 'GK' && bp.pos === 'GK' && bIdx === 0) || (reqPos !== 'GK' && bp.pos !== 'GK' && bIdx > 0);
                if (!isPosMatch) return;

                // Club split check on swap
                if (bp.club !== pitchPlayer.club) {
                    const simPitchCount = this.selectedPlayers.filter((p, i) => i !== pitchIdx && p && p.club === bp.club).length + 1;
                    const simBenchCount = this.benchPlayers.filter((p, i) => i !== bIdx && p && p.club === pitchPlayer.club).length + 1;
                    if (simPitchCount > 6 || simBenchCount > 2) return;
                }

                eligibleBench.push({ bIdx, player: bp, label: bIdx === 0 ? 'GK Sub' : `Sub ${bIdx}` });
            }
        });

        if (eligibleBench.length === 0) {
            alert(`No eligible substitute on the bench can swap with ${pitchPlayer.name} (${reqPos}) without violating position or club split rules (First XI 6:5, Bench 2:2).`);
            return;
        }

        const modal = document.createElement('div');
        modal.className = 'pitch-action-modal-overlay';
        modal.innerHTML = `
            <div class="pitch-action-modal-box">
                <div class="modal-header-row">
                    <div class="modal-header-title">
                        <span>⇄ Swap Starting Player</span>
                    </div>
                    <button type="button" class="modal-close-icon-btn" id="modalCloseSwap">&times;</button>
                </div>

                <div style="font-size: 0.85rem; color: var(--text-muted);">
                    Select a bench substitute to swap into Starting 11 for <strong style="color:#fff">${pitchPlayer.name}</strong>:
                </div>

                <div class="modal-candidates-list">
                    ${eligibleBench.map((item, i) => `
                        <button type="button" class="candidate-item-btn" data-swap-idx="${i}">
                            <img src="${item.player.photo || ''}" alt="${item.player.name}" class="candidate-img" onerror="this.style.display='none'">
                            <div class="candidate-details">
                                <span class="candidate-name">${item.player.name}</span>
                                <span class="candidate-meta">[${item.label}] • ${item.player.pos} • £${item.player.price}m • ${item.player.club}</span>
                            </div>
                            <span style="font-size: 0.8rem; color: var(--primary-green); font-weight: 800;">SWAP ⇄</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const closeModal = () => modal.remove();
        modal.querySelector('#modalCloseSwap')?.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        modal.querySelectorAll('[data-swap-idx]').forEach(btn => {
            btn.addEventListener('click', () => {
                const i = parseInt(btn.getAttribute('data-swap-idx'), 10);
                const targetBench = eligibleBench[i];
                if (targetBench) {
                    this.selectedPlayers[pitchIdx] = targetBench.player;
                    this.benchPlayers[targetBench.bIdx] = pitchPlayer;

                    if (this.captainId === pitchPlayer.id) this.captainId = targetBench.player.id;

                    this.renderPitch();
                    this.renderBench();
                    this.renderBottomDock();
                    this.updateStatsBar();
                }
                closeModal();
            });
        });
    }

    /**
     * Mobile-Friendly Modal: Promote Bench Player
     */
    promptSwapBenchPlayer(benchIdx) {
        const benchPlayer = this.benchPlayers[benchIdx];
        if (!benchPlayer) return;

        const slotPositions = this.getSlotPositionsArray();
        const eligiblePitch = [];

        this.selectedPlayers.forEach((sp, pIdx) => {
            if (sp) {
                const pos = slotPositions[pIdx];
                const isPosMatch = (benchIdx === 0 && sp.pos === 'GK' && pos === 'GK') || (benchIdx > 0 && sp.pos !== 'GK' && sp.pos === benchPlayer.pos);
                if (!isPosMatch) return;

                // Club split check on swap
                if (sp.club !== benchPlayer.club) {
                    const simPitchCount = this.selectedPlayers.filter((p, i) => i !== pIdx && p && p.club === benchPlayer.club).length + 1;
                    const simBenchCount = this.benchPlayers.filter((p, i) => i !== benchIdx && p && p.club === sp.club).length + 1;
                    if (simPitchCount > 6 || simBenchCount > 2) return;
                }

                eligiblePitch.push({ pIdx, player: sp, pos });
            }
        });

        if (eligiblePitch.length === 0) {
            alert(`No matching starting player on pitch can swap with ${benchPlayer.name} (${benchPlayer.pos}) without violating club split rules (First XI 6:5, Bench 2:2).`);
            return;
        }

        const modal = document.createElement('div');
        modal.className = 'pitch-action-modal-overlay';
        modal.innerHTML = `
            <div class="pitch-action-modal-box">
                <div class="modal-header-row">
                    <div class="modal-header-title">
                        <span>⇄ Promote to Starting 11</span>
                    </div>
                    <button type="button" class="modal-close-icon-btn" id="modalClosePromote">&times;</button>
                </div>

                <div style="font-size: 0.85rem; color: var(--text-muted);">
                    Select a starter to move to the bench for <strong style="color:#fff">${benchPlayer.name}</strong>:
                </div>

                <div class="modal-candidates-list">
                    ${eligiblePitch.map((item, i) => `
                        <button type="button" class="candidate-item-btn" data-promote-idx="${i}">
                            <img src="${item.player.photo || ''}" alt="${item.player.name}" class="candidate-img" onerror="this.style.display='none'">
                            <div class="candidate-details">
                                <span class="candidate-name">${item.player.name}</span>
                                <span class="candidate-meta">[${item.pos}] • £${item.player.price}m • ${item.player.club}</span>
                            </div>
                            <span style="font-size: 0.8rem; color: var(--primary-green); font-weight: 800;">PROMOTE ⭐</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const closeModal = () => modal.remove();
        modal.querySelector('#modalClosePromote')?.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        modal.querySelectorAll('[data-promote-idx]').forEach(btn => {
            btn.addEventListener('click', () => {
                const i = parseInt(btn.getAttribute('data-promote-idx'), 10);
                const targetPitch = eligiblePitch[i];
                if (targetPitch) {
                    this.selectedPlayers[targetPitch.pIdx] = benchPlayer;
                    this.benchPlayers[benchIdx] = targetPitch.player;

                    if (this.captainId === targetPitch.player.id) this.captainId = benchPlayer.id;

                    this.renderPitch();
                    this.renderBench();
                    this.renderBottomDock();
                    this.updateStatsBar();
                }
                closeModal();
            });
        });
    }

    removePitchPlayer(slotIdx) {
        const removed = this.selectedPlayers[slotIdx];
        if (!removed) return;

        if (this.captainId === removed.id) this.captainId = null;
        if (this.viceCaptainId === removed.id) this.viceCaptainId = null;

        this.selectedPlayers[slotIdx] = null;
        this.renderPitch();
        this.renderBottomDock();
        this.updateStatsBar();
    }

    removeBenchPlayer(benchIdx) {
        this.benchPlayers[benchIdx] = null;
        this.renderBench();
        this.renderBottomDock();
        this.updateStatsBar();
    }

    clearSquad() {
        if (confirm('Clear entire 15-player squad (Starting 11 + Bench)?')) {
            this.selectedPlayers = new Array(11).fill(null);
            this.benchPlayers = new Array(4).fill(null);
            this.captainId = null;
            this.viceCaptainId = null;
            this.renderPitch();
            this.renderBench();
            this.renderBottomDock();
            this.updateStatsBar();
        }
    }

    autoPickBest15() {
        const allPlayers = getMatchPlayers(this.activeFixture.homeClub, this.activeFixture.awayClub);
        const config = this.formations[this.currentFormation] || this.formations['4-3-3'];
        const fitPlayers = allPlayers.filter(p => p.status !== 'i' && p.status !== 's');
        const pool = fitPlayers.length >= 15 ? fitPlayers : allPlayers;

        const homeCode = this.activeFixture.homeClub;
        const awayCode = this.activeFixture.awayClub;
        const MAX_BUDGET = 100.0;

        const fullHome = allPlayers.filter(p => p.club === homeCode);
        const fullAway = allPlayers.filter(p => p.club === awayCode);

        const getClubPool = (code) => {
            const fit = pool.filter(p => p.club === code);
            return fit.length >= 8 ? fit : (code === homeCode ? fullHome : fullAway);
        };

        const hPool = getClubPool(homeCode);
        const aPool = getClubPool(awayCode);

        let bestSquad = null;
        let bestScore = -Infinity;

        const strategies = [
            { starterH: 6, starterA: 5, starterGkClub: homeCode, benchGkClub: awayCode },
            { starterH: 5, starterA: 6, starterGkClub: homeCode, benchGkClub: awayCode },
            { starterH: 6, starterA: 5, starterGkClub: awayCode, benchGkClub: homeCode },
            { starterH: 5, starterA: 6, starterGkClub: awayCode, benchGkClub: homeCode },
            { starterH: 6, starterA: 5, starterGkClub: homeCode, benchGkClub: homeCode },
            { starterH: 5, starterA: 6, starterGkClub: homeCode, benchGkClub: homeCode },
            { starterH: 6, starterA: 5, starterGkClub: awayCode, benchGkClub: awayCode },
            { starterH: 5, starterA: 6, starterGkClub: awayCode, benchGkClub: awayCode }
        ];

        for (const strat of strategies) {
            const hGks = hPool.filter(p => p.pos === 'GK').sort((a, b) => b.form - a.form);
            const aGks = aPool.filter(p => p.pos === 'GK').sort((a, b) => b.form - a.form);

            let starterGk = null;
            let benchGk = null;

            if (strat.starterGkClub === homeCode && strat.benchGkClub === awayCode) {
                starterGk = hGks[0] || fullHome.find(p => p.pos === 'GK');
                benchGk = aGks[0] || fullAway.find(p => p.pos === 'GK');
            } else if (strat.starterGkClub === awayCode && strat.benchGkClub === homeCode) {
                starterGk = aGks[0] || fullAway.find(p => p.pos === 'GK');
                benchGk = hGks[0] || fullHome.find(p => p.pos === 'GK');
            } else if (strat.starterGkClub === homeCode && strat.benchGkClub === homeCode) {
                starterGk = hGks[0] || fullHome.find(p => p.pos === 'GK');
                benchGk = hGks[1] || fullHome.filter(p => p.pos === 'GK')[1] || fullHome.find(p => p.pos === 'GK');
            } else {
                starterGk = aGks[0] || fullAway.find(p => p.pos === 'GK');
                benchGk = aGks[1] || fullAway.filter(p => p.pos === 'GK')[1] || fullAway.find(p => p.pos === 'GK');
            }

            if (!starterGk || !benchGk || starterGk.id === benchGk.id) continue;

            const hStarterOutfieldReq = strat.starterH - (starterGk.club === homeCode ? 1 : 0);
            const aStarterOutfieldReq = strat.starterA - (starterGk.club === awayCode ? 1 : 0);

            const hBenchOutfieldReq = 2 - (benchGk.club === homeCode ? 1 : 0);
            const aBenchOutfieldReq = 2 - (benchGk.club === awayCode ? 1 : 0);

            if (hStarterOutfieldReq + aStarterOutfieldReq !== 10) continue;
            if (hBenchOutfieldReq + aBenchOutfieldReq !== 3) continue;

            let hDefs = hPool.filter(p => p.pos === 'DEF' && p.id !== starterGk.id && p.id !== benchGk.id).sort((a, b) => b.form - a.form);
            let hMids = hPool.filter(p => p.pos === 'MID' && p.id !== starterGk.id && p.id !== benchGk.id).sort((a, b) => b.form - a.form);
            let hFwds = hPool.filter(p => p.pos === 'FWD' && p.id !== starterGk.id && p.id !== benchGk.id).sort((a, b) => b.form - a.form);

            let aDefs = aPool.filter(p => p.pos === 'DEF' && p.id !== starterGk.id && p.id !== benchGk.id).sort((a, b) => b.form - a.form);
            let aMids = aPool.filter(p => p.pos === 'MID' && p.id !== starterGk.id && p.id !== benchGk.id).sort((a, b) => b.form - a.form);
            let aFwds = aPool.filter(p => p.pos === 'FWD' && p.id !== starterGk.id && p.id !== benchGk.id).sort((a, b) => b.form - a.form);

            // Fallbacks for FWDs from full club rosters if fit pool is low
            if (hFwds.length + aFwds.length < config.FWD) {
                const extraHFwds = fullHome.filter(p => p.pos === 'FWD' && !hFwds.some(x => x.id === p.id) && p.id !== starterGk.id && p.id !== benchGk.id);
                const extraAFwds = fullAway.filter(p => p.pos === 'FWD' && !aFwds.some(x => x.id === p.id) && p.id !== starterGk.id && p.id !== benchGk.id);
                hFwds = [...hFwds, ...extraHFwds];
                aFwds = [...aFwds, ...extraAFwds];
            }

            let hFwdPool = [...hFwds];
            let aFwdPool = [...aFwds];
            if (hFwdPool.length + aFwdPool.length < config.FWD) {
                const hMidFallbacks = hMids.filter(p => !hFwdPool.some(x => x.id === p.id));
                const aMidFallbacks = aMids.filter(p => !aFwdPool.some(x => x.id === p.id));
                hFwdPool.push(...hMidFallbacks);
                aFwdPool.push(...aMidFallbacks);
            }

            // Find valid (hD, hM, hF) and (aD, aM, aF)
            for (let hD = 0; hD <= Math.min(config.DEF, hDefs.length); hD++) {
                const aD = config.DEF - hD;
                if (aD < 0 || aD > aDefs.length) continue;

                for (let hM = 0; hM <= Math.min(config.MID, hMids.length); hM++) {
                    const aM = config.MID - hM;
                    if (aM < 0 || aM > aMids.length) continue;

                    const hF = hStarterOutfieldReq - hD - hM;
                    const aF = aStarterOutfieldReq - aD - aM;

                    if (hF < 0 || hF > hFwdPool.length || hF > config.FWD) continue;
                    if (aF < 0 || aF > aFwdPool.length || (hF + aF !== config.FWD)) continue;

                    const pickedStarters = [
                        ...hDefs.slice(0, hD),
                        ...aDefs.slice(0, aD),
                        ...hMids.slice(0, hM),
                        ...aMids.slice(0, aM)
                    ];

                    const pickedIds = new Set([starterGk.id, benchGk.id, ...pickedStarters.map(p => p.id)]);
                    const availHFwd = hFwdPool.filter(p => !pickedIds.has(p.id));
                    const availAFwd = aFwdPool.filter(p => !pickedIds.has(p.id));

                    if (availHFwd.length < hF || availAFwd.length < aF) continue;

                    const chosenHFwd = availHFwd.slice(0, hF);
                    const chosenAFwd = availAFwd.slice(0, aF);
                    pickedStarters.push(...chosenHFwd, ...chosenAFwd);

                    const usedIds = new Set([starterGk.id, benchGk.id, ...pickedStarters.map(p => p.id)]);

                    // Pick Bench outfield (hBenchOutfieldReq from Home, aBenchOutfieldReq from Away)
                    const remainingH = [...hDefs, ...hMids, ...hFwds, ...fullHome].filter(p => p.pos !== 'GK' && !usedIds.has(p.id)).sort((a, b) => b.form - a.form);
                    const remainingA = [...aDefs, ...aMids, ...aFwds, ...fullAway].filter(p => p.pos !== 'GK' && !usedIds.has(p.id)).sort((a, b) => b.form - a.form);

                    if (remainingH.length < hBenchOutfieldReq || remainingA.length < aBenchOutfieldReq) continue;

                    const benchOutfield = [
                        ...remainingH.slice(0, hBenchOutfieldReq),
                        ...remainingA.slice(0, aBenchOutfieldReq)
                    ];

                    benchOutfield.forEach(p => usedIds.add(p.id));

                    // Budget adjustment if squad exceeds £100.0m
                    let totalCost = [starterGk, ...pickedStarters, benchGk, ...benchOutfield].reduce((sum, p) => sum + p.price, 0);
                    if (totalCost > MAX_BUDGET) {
                        for (let bIdx = 0; bIdx < benchOutfield.length && totalCost > MAX_BUDGET; bIdx++) {
                            const current = benchOutfield[bIdx];
                            const alternatives = (current.club === homeCode ? fullHome : fullAway)
                                .filter(p => p.pos !== 'GK' && !usedIds.has(p.id) && p.price < current.price)
                                .sort((a, b) => a.price - b.price);
                            if (alternatives.length > 0) {
                                usedIds.delete(current.id);
                                benchOutfield[bIdx] = alternatives[0];
                                usedIds.add(alternatives[0].id);
                                totalCost = [starterGk, ...pickedStarters, benchGk, ...benchOutfield].reduce((sum, p) => sum + p.price, 0);
                            }
                        }

                        for (let sIdx = pickedStarters.length - 1; sIdx >= 0 && totalCost > MAX_BUDGET; sIdx--) {
                            const current = pickedStarters[sIdx];
                            const alternatives = (current.club === homeCode ? fullHome : fullAway)
                                .filter(p => p.pos === current.pos && !usedIds.has(p.id) && p.price < current.price)
                                .sort((a, b) => a.price - b.price);
                            if (alternatives.length > 0) {
                                usedIds.delete(current.id);
                                pickedStarters[sIdx] = alternatives[0];
                                usedIds.add(alternatives[0].id);
                                totalCost = [starterGk, ...pickedStarters, benchGk, ...benchOutfield].reduce((sum, p) => sum + p.price, 0);
                            }
                        }
                    }

                    const finalStarters = [starterGk, ...pickedStarters];
                    const finalBench = [benchGk, ...benchOutfield];
                    const finalCost = [...finalStarters, ...finalBench].reduce((sum, p) => sum + p.price, 0);

                    if (finalCost <= MAX_BUDGET) {
                        const score = [...finalStarters, ...finalBench].reduce((sum, p) => sum + p.form, 0);
                        if (score > bestScore) {
                            bestScore = score;
                            bestSquad = { starters: finalStarters, bench: finalBench, cost: finalCost };
                        }
                    }
                }
            }
        }

        if (bestSquad) {
            // Place starters on pitch matching formation order (GK, DEF, MID, FWD)
            const startersGk = bestSquad.starters.find(p => p.pos === 'GK');
            const startersDefs = bestSquad.starters.filter(p => p.pos === 'DEF');
            const startersMids = bestSquad.starters.filter(p => p.pos === 'MID');
            const startersFwds = bestSquad.starters.filter(p => p.pos === 'FWD');

            this.selectedPlayers = [
                startersGk,
                ...startersDefs.slice(0, config.DEF),
                ...startersMids.slice(0, config.MID),
                ...startersFwds.slice(0, config.FWD)
            ];

            // If any position had to use fallbacks, make sure array has all 11 starters
            if (this.selectedPlayers.length < 11) {
                const assignedIds = new Set(this.selectedPlayers.filter(Boolean).map(p => p.id));
                for (const p of bestSquad.starters) {
                    if (!assignedIds.has(p.id)) {
                        this.selectedPlayers.push(p);
                        assignedIds.add(p.id);
                    }
                    if (this.selectedPlayers.length === 11) break;
                }
            }

            this.benchPlayers = bestSquad.bench;

            // Captain Selection
            const validStarters = this.selectedPlayers.filter(Boolean);
            if (validStarters.length > 0) {
                const sortedByForm = [...validStarters].sort((a, b) => (b.form * 10 + b.price) - (a.form * 10 + a.price));
                this.captainId = sortedByForm[0].id;
                this.viceCaptainId = sortedByForm[1]?.id || sortedByForm[0].id;
            }

            this.renderPitch();
            this.renderBench();
            this.renderBottomDock();
            this.updateStatsBar();
        }
    }

    clearDragOverStates() {
        document.querySelectorAll('.pitch-player-slot, .bench-player-slot, .dock-player-card').forEach(s => s.classList.remove('drag-hover', 'is-dragging'));
    }

    updateStatsBar() {
        const bar = document.getElementById('squadStatsBar');
        if (!bar) return;

        const MAX_BUDGET = 100.0;
        const validStarters = this.selectedPlayers.filter(Boolean);
        const validBench = this.benchPlayers.filter(Boolean);
        const startersCount = validStarters.length;
        const benchCount = validBench.length;
        const totalCount = startersCount + benchCount;

        const allSquadPlayers = [...validStarters, ...validBench];
        const totalPrice = allSquadPlayers.reduce((sum, p) => sum + p.price, 0);
        const remainingBudget = MAX_BUDGET - totalPrice;
        const isOverBudget = totalPrice > MAX_BUDGET;

        // First XI Split (6:5 or 5:6)
        const startersHome = validStarters.filter(p => p.club === this.activeFixture.homeClub).length;
        const startersAway = validStarters.filter(p => p.club === this.activeFixture.awayClub).length;
        const isStartersSplitValid = (startersHome === 6 && startersAway === 5) || (startersHome === 5 && startersAway === 6);
        const isStartersExcess = startersHome > 6 || startersAway > 6;

        // Bench Split (2:2)
        const benchHome = validBench.filter(p => p.club === this.activeFixture.homeClub).length;
        const benchAway = validBench.filter(p => p.club === this.activeFixture.awayClub).length;
        const isBenchSplitValid = benchHome === 2 && benchAway === 2;
        const isBenchExcess = benchHome > 2 || benchAway > 2;

        bar.innerHTML = `
            <div class="stat-pill">
                <span class="pill-label">Starters</span>
                <span class="pill-val ${startersCount === 11 ? 'valid' : 'pending'}">${startersCount} / 11</span>
            </div>
            <div class="stat-pill">
                <span class="pill-label">First XI Split (6:5)</span>
                <span class="pill-val ${isStartersExcess ? 'over-budget' : (isStartersSplitValid ? 'valid' : 'pending')}">${this.activeFixture.homeClub} (${startersHome}) : ${this.activeFixture.awayClub} (${startersAway})</span>
            </div>
            <div class="stat-pill">
                <span class="pill-label">Bench Subs</span>
                <span class="pill-val ${benchCount === 4 ? 'valid' : 'pending'}">${benchCount} / 4</span>
            </div>
            <div class="stat-pill">
                <span class="pill-label">Bench Split (2:2)</span>
                <span class="pill-val ${isBenchExcess ? 'over-budget' : (isBenchSplitValid ? 'valid' : 'pending')}">${this.activeFixture.homeClub} (${benchHome}) : ${this.activeFixture.awayClub} (${benchAway})</span>
            </div>
            <div class="stat-pill">
                <span class="pill-label">Squad Cost / Max</span>
                <span class="pill-val ${isOverBudget ? 'over-budget' : ''}">£${totalPrice.toFixed(1)}m / £100.0m</span>
            </div>
            <div class="stat-pill">
                <span class="pill-label">Bank Left</span>
                <span class="pill-val ${remainingBudget < 0 ? 'over-budget' : 'highlight-green'}">£${remainingBudget.toFixed(1)}m</span>
            </div>
            <div class="stat-pill">
                <span class="pill-label">Captain (2x)</span>
                <span class="pill-val highlight">${this.captainId ? (getPlayerById(this.captainId)?.webName || getPlayerById(this.captainId)?.name || 'None') : 'None'}</span>
            </div>
        `;

        // Update Save Squad Button Text & Indicator
        const saveBtn = document.getElementById('btnSaveSquad');
        if (saveBtn) {
            const isSquadReady = totalCount === 15 && isStartersSplitValid && isBenchSplitValid && !isOverBudget;
            if (isSquadReady) {
                saveBtn.innerHTML = '💾 Save Squad (15/15) ✅';
                saveBtn.style.background = 'linear-gradient(135deg, #10B981, #059669)';
                saveBtn.style.borderColor = '#10B981';
            } else {
                saveBtn.innerHTML = `💾 Save Squad (${totalCount}/15)`;
                saveBtn.style.background = '';
                saveBtn.style.borderColor = '';
            }
        }

        this.autoSaveDraft();
    }

    /**
     * Mandatory 15-Player Squad Validation
     */
    saveSquadToRoom() {
        const validStarters = this.selectedPlayers.filter(Boolean);
        const validBench = this.benchPlayers.filter(Boolean);
        const totalCount = validStarters.length + validBench.length;

        const startersHome = validStarters.filter(p => p.club === this.activeFixture.homeClub).length;
        const startersAway = validStarters.filter(p => p.club === this.activeFixture.awayClub).length;
        const isStartersSplitValid = (startersHome === 6 && startersAway === 5) || (startersHome === 5 && startersAway === 6);

        const benchHome = validBench.filter(p => p.club === this.activeFixture.homeClub).length;
        const benchAway = validBench.filter(p => p.club === this.activeFixture.awayClub).length;
        const isBenchSplitValid = benchHome === 2 && benchAway === 2;

        // Mandatory check for all 15 players
        if (totalCount < 15 || validStarters.length < 11 || validBench.length < 4) {
            const missingStarters = 11 - validStarters.length;
            const missingBench = 4 - validBench.length;

            const modal = document.createElement('div');
            modal.className = 'pitch-action-modal-overlay';
            modal.innerHTML = `
                <div class="pitch-action-modal-box">
                    <div class="modal-header-row">
                        <div class="modal-header-title">
                            <span>⚠️ Complete 15-Player Squad Required</span>
                        </div>
                        <button type="button" class="modal-close-icon-btn" id="modalCloseIncomplete">&times;</button>
                    </div>

                    <div style="display:flex; flex-direction:column; gap:0.6rem; font-size:0.9rem; line-height:1.5;">
                        <p style="color:#F87171; font-weight:800; margin:0;">
                            You must pick all 15 players (11 Starters + 4 Bench Substitutes) conforming to the 6:5 First XI and 2:2 Bench split rules.
                        </p>
                        <div style="background:rgba(255,255,255,0.05); padding:0.75rem; border-radius:8px; border:1px solid rgba(255,255,255,0.1); display:flex; flex-direction:column; gap:0.4rem;">
                            <div style="display:flex; justify-content:space-between;">
                                <span>⭐ Starting 11:</span>
                                <strong style="color:${validStarters.length === 11 ? '#10B981' : '#F59E0B'}">${validStarters.length}/11 ${missingStarters > 0 ? `(${missingStarters} missing)` : '✅'}</strong>
                            </div>
                            <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--text-dim);">
                                <span>↳ First XI Split (Target 6:5):</span>
                                <span style="color:${isStartersSplitValid ? '#10B981' : '#F59E0B'}">${this.activeFixture.homeClub} (${startersHome}) : ${this.activeFixture.awayClub} (${startersAway})</span>
                            </div>
                            <div style="display:flex; justify-content:space-between; margin-top:0.2rem;">
                                <span>🪑 Substitutes Bench:</span>
                                <strong style="color:${validBench.length === 4 ? '#10B981' : '#F59E0B'}">${validBench.length}/4 ${missingBench > 0 ? `(${missingBench} missing)` : '✅'}</strong>
                            </div>
                            <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--text-dim);">
                                <span>↳ Bench Split (Target 2:2):</span>
                                <span style="color:${isBenchSplitValid ? '#10B981' : '#F59E0B'}">${this.activeFixture.homeClub} (${benchHome}) : ${this.activeFixture.awayClub} (${benchAway})</span>
                            </div>
                            <div style="display:flex; justify-content:space-between; margin-top:0.2rem; border-top:1px solid rgba(255,255,255,0.1); padding-top:0.3rem;">
                                <span>👥 Total Squad:</span>
                                <strong style="color:${totalCount === 15 ? '#10B981' : '#F87171'}">${totalCount}/15 (${15 - totalCount} missing)</strong>
                            </div>
                        </div>
                    </div>

                    <div style="display:flex; flex-direction:column; gap:0.6rem;">
                        <button type="button" class="btn btn-primary" id="btnModalAutoPickNow" style="padding:0.75rem; font-weight:800;">
                            ⚡ Auto-Fill Missing Players to Best 15 (6:5 & 2:2)
                        </button>
                        <button type="button" class="btn btn-secondary" id="btnModalDismissIncomplete" style="padding:0.6rem;">
                            Continue Picking Manually
                        </button>
                    </div>
                </div>
            `;

            document.body.appendChild(modal);

            const closeModal = () => modal.remove();
            modal.querySelector('#modalCloseIncomplete')?.addEventListener('click', closeModal);
            modal.querySelector('#btnModalDismissIncomplete')?.addEventListener('click', closeModal);
            modal.querySelector('#btnModalAutoPickNow')?.addEventListener('click', () => {
                closeModal();
                this.autoPickBest15();
            });
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });
            return;
        }

        if (!this.captainId) {
            alert('👑 Captain Required!\n\nPlease select a Captain (C) by tapping a starting player on the pitch.');
            return;
        }

        const allSquad = [...validStarters, ...validBench];
        const totalPrice = allSquad.reduce((sum, p) => sum + p.price, 0);

        if (totalPrice > 100.0) {
            alert(`⚠️ Budget Limit Exceeded!\n\nYour 15-player squad total cost is £${totalPrice.toFixed(1)}m, which exceeds the £100.0m FPL budget by £${(totalPrice - 100.0).toFixed(1)}m.\n\nPlease adjust your squad to keep total value within £100.0m.`);
            return;
        }

        // Enforce First XI 6:5 club split
        if (!isStartersSplitValid) {
            alert(`⚠️ Starting 11 Club Split Invalid!\n\nYour First XI must have a 6:5 club split (6 players from one club and 5 from the other).\n\nCurrent Starting 11 Split:\n${this.activeFixture.homeClub}: ${startersHome}\n${this.activeFixture.awayClub}: ${startersAway}\n\nPlease adjust your starting lineup.`);
            return;
        }

        // Enforce Bench 2:2 club split
        if (!isBenchSplitValid) {
            alert(`⚠️ Substitutes Bench Club Split Invalid!\n\nYour Bench must have an exact 2:2 club split (2 players from ${this.activeFixture.homeClub} and 2 players from ${this.activeFixture.awayClub}).\n\nCurrent Bench Split:\n${this.activeFixture.homeClub}: ${benchHome}\n${this.activeFixture.awayClub}: ${benchAway}\n\nPlease adjust your bench substitutes.`);
            return;
        }

        const squadData = {
            playerIds: validStarters.map(p => p.id),
            benchIds: validBench.map(p => p.id),
            captainId: this.captainId,
            viceCaptainId: this.viceCaptainId,
            formation: this.currentFormation,
            totalPrice: parseFloat(totalPrice.toFixed(1)),
            updatedAt: Date.now()
        };

        this.saveMasterSquad(this.activeFixture.id, squadData);

        if (window.roomManager && window.roomManager.currentRoom) {
            window.roomManager.submitSquad(window.roomManager.currentRoom.code, squadData);
            alert('🎉 15-Player Squad (First XI 6:5 Split + Bench 2:2 Split within £100.0m budget) saved & locked to room successfully!');
        } else {
            alert('🎉 15-Player Squad saved locally! Join or create a room to challenge friends.');
        }

        this.autoSaveDraft();

        // Trigger background Git sync if configured
        if (window.gitSyncService && window.gitSyncService.isConfigured() && window.gitSyncService.config.autoPush) {
            window.gitSyncService.pushToGitHub().catch(e => console.warn('Auto git sync:', e));
        }
    }
}

window.pitchBuilder = new PitchBuilderUI();
