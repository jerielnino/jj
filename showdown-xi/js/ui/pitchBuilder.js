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

    loadSavedSquad() {
        const currentUserId = window.authManager?.currentUser?.username || window.roomManager?.userProfile?.id || 'jj7758';
        const draftKey = `showdown_xi_draft_${this.activeFixture.id}_${currentUserId}`;

        // 1. Try restoring auto-saved local draft
        try {
            const savedDraft = localStorage.getItem(draftKey);
            if (savedDraft) {
                const draft = JSON.parse(savedDraft);
                this.currentFormation = draft.formation || '4-3-3';
                this.captainId = draft.captainId || null;
                this.viceCaptainId = draft.viceCaptainId || null;
                this.selectedPlayers = new Array(11).fill(null);
                this.benchPlayers = new Array(4).fill(null);

                if (Array.isArray(draft.playerIds)) {
                    for (let i = 0; i < 11; i++) {
                        if (draft.playerIds[i]) {
                            this.selectedPlayers[i] = getPlayerById(draft.playerIds[i]);
                        }
                    }
                }
                if (Array.isArray(draft.benchIds)) {
                    for (let i = 0; i < 4; i++) {
                        if (draft.benchIds[i]) {
                            this.benchPlayers[i] = getPlayerById(draft.benchIds[i]);
                        }
                    }
                }
                return;
            }
        } catch (e) {}

        // 2. Try restoring from active room
        const currentRoom = window.roomManager ? window.roomManager.currentRoom : null;
        if (currentRoom) {
            const userPart = currentRoom.participants.find(p => p.userId === currentUserId);
            const squad = userPart?.squads?.[this.activeFixture.id] || userPart?.squad;
            if (squad && squad.playerIds) {
                this.currentFormation = squad.formation || '4-3-3';
                this.captainId = squad.captainId || null;
                this.viceCaptainId = squad.viceCaptainId || null;
                this.selectedPlayers = new Array(11).fill(null);
                this.benchPlayers = new Array(4).fill(null);

                for (let i = 0; i < 11; i++) {
                    if (squad.playerIds[i]) this.selectedPlayers[i] = getPlayerById(squad.playerIds[i]);
                }
                if (Array.isArray(squad.benchIds)) {
                    for (let i = 0; i < 4; i++) {
                        if (squad.benchIds[i]) this.benchPlayers[i] = getPlayerById(squad.benchIds[i]);
                    }
                }
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

                    // Click / Tap on slot
                    slotCard.addEventListener('click', (e) => {
                        // Prevent triggering if clicked directly on a button inside
                        if (e.target.closest('.slot-remove-badge') || e.target.closest('.btn-slot-action')) {
                            return;
                        }
                        this.selectPitchSlot(slotIdx, row.pos);
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

                slotCard.addEventListener('click', (e) => {
                    if (e.target.closest('.slot-remove-badge') || e.target.closest('.btn-slot-action')) {
                        return;
                    }
                    this.selectBenchSlot(benchIdx);
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

        // From another Pitch Slot (Swapping two pitch slots)
        if (this.draggedSourceType === 'PITCH' && this.draggedSourceIdx !== null) {
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
        // From Bench to Pitch (Swapping Pitch and Bench)
        else if (this.draggedSourceType === 'BENCH' && this.draggedSourceIdx !== null) {
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

            this.selectedPlayers[targetSlotIdx] = player;
            this.benchPlayers[benchIdx] = existingPitchPlayer || null;
        } 
        // From Dock / New Player
        else {
            const bIdx = this.benchPlayers.findIndex(p => p && p.id === player.id);
            if (bIdx !== -1) this.benchPlayers[bIdx] = null;

            const pIdx = this.selectedPlayers.findIndex(p => p && p.id === player.id);
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

        // From Pitch to Bench
        if (this.draggedSourceType === 'PITCH' && this.draggedSourceIdx !== null) {
            const pitchIdx = this.draggedSourceIdx;
            const slotPositions = this.getSlotPositionsArray();
            const pitchPos = slotPositions[pitchIdx];
            const existingBenchPlayer = this.benchPlayers[benchIdx];

            if (existingBenchPlayer && existingBenchPlayer.pos !== pitchPos) {
                alert(`⚠️ Cannot swap: ${existingBenchPlayer.name} (${existingBenchPlayer.pos}) cannot play in a starting ${pitchPos} slot on the pitch.`);
                return;
            }

            this.benchPlayers[benchIdx] = player;
            this.selectedPlayers[pitchIdx] = existingBenchPlayer || null;
        }
        // From another Bench slot
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
        // From Dock / New
        else {
            const pIdx = this.selectedPlayers.findIndex(p => p && p.id === player.id);
            if (pIdx !== -1) this.selectedPlayers[pIdx] = null;

            const bIdx = this.benchPlayers.findIndex(p => p && p.id === player.id);
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
        // 1. If user previously tapped on a specific Pitch slot
        if (this.highlightedSlotIdx !== null) {
            const slotPositions = this.getSlotPositionsArray();
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

        // 3. Find first open Starting 11 slot matching exact position
        const slotPositions = this.getSlotPositionsArray();
        const matchingPitchIdx = slotPositions.findIndex((pos, idx) => pos === player.pos && !this.selectedPlayers[idx]);
        if (matchingPitchIdx !== -1) {
            this.handleDropOnSlot(player, matchingPitchIdx, player.pos);
            return;
        }

        // 4. If pitch slots are full for this pos, try finding an open Bench slot
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

        // 5. If all slots for this position are full, open Replacement Modal
        const currentPosStarters = [];
        slotPositions.forEach((pos, idx) => {
            if (pos === player.pos && this.selectedPlayers[idx]) {
                currentPosStarters.push({ type: 'PITCH', idx, player: this.selectedPlayers[idx] });
            }
        });
        const currentPosBench = [];
        this.benchPlayers.forEach((p, idx) => {
            if (p && ((idx === 0 && player.pos === 'GK') || (idx > 0 && player.pos !== 'GK'))) {
                currentPosBench.push({ type: 'BENCH', idx, player: p });
            }
        });

        const allCandidates = [...currentPosStarters, ...currentPosBench];
        if (allCandidates.length > 0) {
            this.showReplacementModal(player, allCandidates);
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
                if (reqPos === 'GK' && bp.pos === 'GK' && bIdx === 0) {
                    eligibleBench.push({ bIdx, player: bp, label: 'GK Sub' });
                } else if (reqPos !== 'GK' && bp.pos !== 'GK' && bIdx > 0) {
                    eligibleBench.push({ bIdx, player: bp, label: `Sub ${bIdx}` });
                }
            }
        });

        if (eligibleBench.length === 0) {
            alert(`No eligible substitute on the bench to swap with ${pitchPlayer.name} (${reqPos}).`);
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
                if (benchIdx === 0 && sp.pos === 'GK' && pos === 'GK') {
                    eligiblePitch.push({ pIdx, player: sp, pos });
                } else if (benchIdx > 0 && sp.pos !== 'GK' && sp.pos === benchPlayer.pos) {
                    eligiblePitch.push({ pIdx, player: sp, pos });
                }
            }
        });

        if (eligiblePitch.length === 0) {
            alert(`No matching starting player on pitch to swap with ${benchPlayer.name} (${benchPlayer.pos}).`);
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
        const MAX_PER_CLUB = 8;

        const gks = [...pool.filter(p => p.pos === 'GK')].sort((a, b) => b.form - a.form);
        const defs = [...pool.filter(p => p.pos === 'DEF')].sort((a, b) => b.form - a.form);
        const mids = [...pool.filter(p => p.pos === 'MID')].sort((a, b) => b.form - a.form);
        const fwds = [...pool.filter(p => p.pos === 'FWD')].sort((a, b) => b.form - a.form);

        const canPick = (p, selectedList) => {
            if (selectedList.some(s => s.id === p.id)) return false;
            let hc = selectedList.filter(s => s.club === homeCode).length;
            let ac = selectedList.filter(s => s.club === awayCode).length;
            if (p.club === homeCode && hc >= MAX_PER_CLUB) return false;
            if (p.club === awayCode && ac >= MAX_PER_CLUB) return false;
            return true;
        };

        const selected = [];

        const pickCategory = (list, count, fallbackList = []) => {
            const picked = [];
            for (const p of list) {
                if (picked.length >= count) break;
                if (canPick(p, [...selected, ...picked])) {
                    picked.push(p);
                }
            }
            if (picked.length < count) {
                for (const p of fallbackList) {
                    if (picked.length >= count) break;
                    if (canPick(p, [...selected, ...picked])) {
                        picked.push(p);
                    }
                }
            }
            if (picked.length < count) {
                for (const p of [...list, ...fallbackList]) {
                    if (picked.length >= count) break;
                    if (!selected.some(s => s.id === p.id) && !picked.some(s => s.id === p.id)) {
                        picked.push(p);
                    }
                }
            }
            return picked;
        };

        const chosenGk = pickCategory(gks, 2);
        selected.push(...chosenGk);
        const chosenDef = pickCategory(defs, 5);
        selected.push(...chosenDef);
        const chosenMid = pickCategory(mids, 5);
        selected.push(...chosenMid);
        const chosenFwd = pickCategory(fwds, 3, mids);
        selected.push(...chosenFwd);

        // Budget Optimization: If total exceeds £100.0m, downsize bench/players to cheaper alternatives
        let totalCost = selected.reduce((sum, p) => sum + p.price, 0);

        if (totalCost > MAX_BUDGET) {
            const budgetCheapest = (pos) => pool.filter(p => p.pos === pos).sort((a, b) => a.price - b.price);

            for (let i = selected.length - 1; i >= 0 && totalCost > MAX_BUDGET; i--) {
                const current = selected[i];
                const cheapAlternatives = budgetCheapest(current.pos);
                for (const cheap of cheapAlternatives) {
                    if (cheap.id !== current.id && canPick(cheap, selected.filter(s => s.id !== current.id))) {
                        if (cheap.price < current.price) {
                            selected[i] = cheap;
                            totalCost = selected.reduce((sum, p) => sum + p.price, 0);
                            break;
                        }
                    }
                }
            }
        }

        // Split into Starting 11 and 4 Bench
        const sGks = selected.filter(p => p.pos === 'GK').sort((a, b) => b.form - a.form);
        const sDefs = selected.filter(p => p.pos === 'DEF').sort((a, b) => b.form - a.form);
        const sMids = selected.filter(p => p.pos === 'MID').sort((a, b) => b.form - a.form);
        const sFwds = selected.filter(p => p.pos === 'FWD').sort((a, b) => b.form - a.form);

        const starters = [
            sGks[0],
            ...sDefs.slice(0, config.DEF),
            ...sMids.slice(0, config.MID),
            ...sFwds.slice(0, config.FWD)
        ];

        const assignedIds = new Set(starters.filter(Boolean).map(p => p.id));
        while (starters.length < 11) {
            const remainingCandidate = selected.find(p => !assignedIds.has(p.id));
            if (remainingCandidate) {
                starters.push(remainingCandidate);
                assignedIds.add(remainingCandidate.id);
            } else {
                break;
            }
        }

        const benchGk = sGks[1] || selected.find(p => p.pos === 'GK' && !assignedIds.has(p.id));
        if (benchGk) assignedIds.add(benchGk.id);

        const benchOutfield = selected.filter(p => !assignedIds.has(p.id)).sort((a, b) => b.form - a.form);
        const bench = [
            benchGk,
            benchOutfield[0] || null,
            benchOutfield[1] || null,
            benchOutfield[2] || null
        ];

        this.selectedPlayers = starters;
        this.benchPlayers = bench;

        // Captain Selection
        const validStarters = this.selectedPlayers.filter(Boolean);
        if (validStarters.length > 0) {
            const sortedByPrice = [...validStarters].sort((a, b) => b.price - a.price);
            this.captainId = sortedByPrice[0].id;
            this.viceCaptainId = sortedByPrice[1]?.id || sortedByPrice[0].id;
        }

        this.renderPitch();
        this.renderBench();
        this.renderBottomDock();
        this.updateStatsBar();
    }

    clearDragOverStates() {
        document.querySelectorAll('.pitch-player-slot, .bench-player-slot, .dock-player-card').forEach(s => s.classList.remove('drag-hover', 'is-dragging'));
    }

    updateStatsBar() {
        const bar = document.getElementById('squadStatsBar');
        if (!bar) return;

        const MAX_BUDGET = 100.0;
        const startersCount = this.selectedPlayers.filter(Boolean).length;
        const benchCount = this.benchPlayers.filter(Boolean).length;
        const totalCount = startersCount + benchCount;

        const allSquadPlayers = [...this.selectedPlayers.filter(Boolean), ...this.benchPlayers.filter(Boolean)];
        const totalPrice = allSquadPlayers.reduce((sum, p) => sum + p.price, 0);
        const remainingBudget = MAX_BUDGET - totalPrice;
        const isOverBudget = totalPrice > MAX_BUDGET;

        const homeCount = allSquadPlayers.filter(p => p.club === this.activeFixture.homeClub).length;
        const awayCount = allSquadPlayers.filter(p => p.club === this.activeFixture.awayClub).length;
        const isClubLimitExceeded = homeCount > 8 || awayCount > 8;

        bar.innerHTML = `
            <div class="stat-pill">
                <span class="pill-label">Starters</span>
                <span class="pill-val ${startersCount === 11 ? 'valid' : 'pending'}">${startersCount} / 11</span>
            </div>
            <div class="stat-pill">
                <span class="pill-label">Bench Subs</span>
                <span class="pill-val ${benchCount === 4 ? 'valid' : 'pending'}">${benchCount} / 4</span>
            </div>
            <div class="stat-pill">
                <span class="pill-label">Full Squad</span>
                <span class="pill-val ${totalCount === 15 ? 'valid' : 'pending'}">${totalCount} / 15</span>
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
                <span class="pill-label">Club Split (Max 8)</span>
                <span class="pill-val ${isClubLimitExceeded ? 'over-budget' : ''}">${this.activeFixture.homeClub} (${homeCount}) : ${this.activeFixture.awayClub} (${awayCount})</span>
            </div>
            <div class="stat-pill">
                <span class="pill-label">Captain (2x)</span>
                <span class="pill-val highlight">${this.captainId ? (getPlayerById(this.captainId)?.webName || getPlayerById(this.captainId)?.name || 'None') : 'None'}</span>
            </div>
        `;

        // Update Save Squad Button Text & Indicator
        const saveBtn = document.getElementById('btnSaveSquad');
        if (saveBtn) {
            if (totalCount === 15) {
                saveBtn.innerHTML = '💾 Save Squad (15/15)';
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
                            You must pick all 15 players (11 Starters + 4 Bench Substitutes) before saving your squad.
                        </p>
                        <div style="background:rgba(255,255,255,0.05); padding:0.75rem; border-radius:8px; border:1px solid rgba(255,255,255,0.1);">
                            <div style="display:flex; justify-content:space-between; margin-bottom:0.3rem;">
                                <span>⭐ Starting 11:</span>
                                <strong style="color:${validStarters.length === 11 ? '#10B981' : '#F59E0B'}">${validStarters.length}/11 ${missingStarters > 0 ? `(${missingStarters} missing)` : '✅'}</strong>
                            </div>
                            <div style="display:flex; justify-content:space-between; margin-bottom:0.3rem;">
                                <span>🪑 Substitutes Bench:</span>
                                <strong style="color:${validBench.length === 4 ? '#10B981' : '#F59E0B'}">${validBench.length}/4 ${missingBench > 0 ? `(${missingBench} missing)` : '✅'}</strong>
                            </div>
                            <div style="display:flex; justify-content:space-between;">
                                <span>👥 Total Squad:</span>
                                <strong style="color:${totalCount === 15 ? '#10B981' : '#F87171'}">${totalCount}/15 (${15 - totalCount} missing)</strong>
                            </div>
                        </div>
                    </div>

                    <div style="display:flex; flex-direction:column; gap:0.6rem;">
                        <button type="button" class="btn btn-primary" id="btnModalAutoPickNow" style="padding:0.75rem; font-weight:800;">
                            ⚡ Auto-Fill Missing Players to Best 15
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

        const homeCount = allSquad.filter(p => p.club === this.activeFixture.homeClub).length;
        const awayCount = allSquad.filter(p => p.club === this.activeFixture.awayClub).length;
        if (homeCount > 8 || awayCount > 8) {
            alert(`⚠️ Club Limit Exceeded!\n\nA maximum of 8 players from one club can be selected in your 15-player squad.\n\nCurrent Split: ${this.activeFixture.homeClub} (${homeCount}) : ${this.activeFixture.awayClub} (${awayCount}).`);
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

        if (window.roomManager && window.roomManager.currentRoom) {
            window.roomManager.submitSquad(window.roomManager.currentRoom.code, squadData);
            alert('🎉 15-Player Squad (11 Starters + 4 Bench Substitutes within £100.0m budget) saved & locked to room successfully!');
        } else {
            alert('🎉 15-Player Squad saved locally! Join or create a room to challenge friends.');
        }

        this.autoSaveDraft();
    }
}

window.pitchBuilder = new PitchBuilderUI();
