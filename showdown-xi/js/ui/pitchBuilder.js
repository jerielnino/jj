/**
 * Showdown XI - Tactical Pitch & Squad Builder UI
 * Strict position validation, Injury & Suspension tracking, Drag & Drop, and responsive bottom dock.
 */

class PitchBuilderUI {
    constructor() {
        this.currentFormation = '4-3-3';
        this.selectedPlayers = new Array(11).fill(null); // 11 slots
        this.captainId = null;
        this.viceCaptainId = null;
        this.activeFixture = null;
        this.isLocked = false;
        this.selectedFilterPos = 'ALL';
        this.selectedFilterClub = 'ALL';
        this.highlightedSlotIdx = null;
        this.draggedPlayer = null;
        this.draggedSourceSlotIdx = null;

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
                if (Array.isArray(draft.playerIds)) {
                    for (let i = 0; i < 11; i++) {
                        if (draft.playerIds[i]) {
                            this.selectedPlayers[i] = getPlayerById(draft.playerIds[i]);
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
                for (let i = 0; i < 11; i++) {
                    if (squad.playerIds[i]) this.selectedPlayers[i] = getPlayerById(squad.playerIds[i]);
                }
                return;
            }
        }

        this.selectedPlayers = new Array(11).fill(null);
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
        const oldPlayers = this.selectedPlayers.filter(Boolean);
        this.selectedPlayers = new Array(11).fill(null);
        const newSlotPositions = this.getSlotPositionsArray();

        oldPlayers.forEach(p => {
            const emptyIdx = newSlotPositions.findIndex((pos, idx) => pos === p.pos && !this.selectedPlayers[idx]);
            if (emptyIdx !== -1) {
                this.selectedPlayers[emptyIdx] = p;
            }
        });

        this.highlightedSlotIdx = null;
        this.renderPitch();
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
                            ⚡ Auto Best 11
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

                <!-- 2D Tactical Football Pitch (Drop Zone) -->
                <div class="pitch-container">
                    <div class="pitch-field" id="pitchField">
                        <!-- Slots dynamically rendered -->
                    </div>
                </div>

                <!-- Persistent Bottom Player Dock (Drag Source & Mobile Tap Dock) -->
                <div class="bottom-player-dock" id="bottomPlayerDock">
                    <div class="dock-header">
                        <div class="dock-title-group">
                            <span class="dock-main-title">👥 Match Players</span>
                            <span class="dock-hint">Drag player to matching slot or tap slot & player</span>
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

        const btnAutoPick = document.getElementById('btnAutoPick');
        if (btnAutoPick) {
            btnAutoPick.addEventListener('click', () => this.autoPickBest11());
        }

        const btnClearSquad = document.getElementById('btnClearSquad');
        if (btnClearSquad) {
            btnClearSquad.addEventListener('click', () => this.clearSquad());
        }

        const btnSaveSquad = document.getElementById('btnSaveSquad');
        if (btnSaveSquad) {
            btnSaveSquad.addEventListener('click', () => this.saveSquadToRoom());
        }

        // Position filter buttons in dock
        document.querySelectorAll('[data-dock-pos]').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('[data-dock-pos]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.selectedFilterPos = btn.getAttribute('data-dock-pos');
                this.renderBottomDock();
            });
        });

        // Club filter buttons in dock
        document.querySelectorAll('[data-dock-club]').forEach(btn => {
            btn.addEventListener('click', () => {
                const club = btn.getAttribute('data-dock-club');
                if (this.selectedFilterClub === club) {
                    this.selectedFilterClub = 'ALL';
                    btn.classList.remove('active');
                } else {
                    document.querySelectorAll('[data-dock-club]').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    this.selectedFilterClub = club;
                }
                this.renderBottomDock();
            });
        });
    }

    renderPitch() {
        const field = document.getElementById('pitchField');
        if (!field) return;

        const config = this.formations[this.currentFormation] || this.formations['4-3-3'];
        field.innerHTML = '';

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

                // Setup Drag & Drop (Desktop + Mobile Touch)
                if (!this.isLocked) {
                    if (assignedPlayer) {
                        slotCard.setAttribute('draggable', 'true');
                        slotCard.addEventListener('dragstart', (e) => {
                            this.draggedPlayer = assignedPlayer;
                            this.draggedSourceSlotIdx = slotIdx;
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

                    // Click / Tap to Highlight
                    slotCard.addEventListener('click', () => {
                        this.selectSlot(slotIdx, row.pos);
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
                            <img src="${assignedPlayer.photo || ''}" alt="${assignedPlayer.name}" class="player-pitch-photo" draggable="false" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                            <div class="player-fallback-kit" style="display:none; background: linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor || team.primaryColor})">
                                <span>${assignedPlayer.number || assignedPlayer.pos}</span>
                            </div>
                            <img src="${team.badge}" class="player-club-mini-crest" alt="${team.name}" draggable="false">
                            ${isCap ? '<span class="captain-badge">C</span>' : ''}
                            ${isVC ? '<span class="vc-badge">V</span>' : ''}
                            ${isInjured ? '<span class="injury-slot-badge" title="Injured: ' + (assignedPlayer.news || '') + '">🚑</span>' : ''}
                            ${isSuspended ? '<span class="suspended-slot-badge" title="Suspended: ' + (assignedPlayer.news || '') + '">🚫</span>' : ''}
                            ${isDoubtful ? '<span class="doubtful-slot-badge" title="Doubtful (' + assignedPlayer.chance + '%): ' + (assignedPlayer.news || '') + '">⚠️</span>' : ''}
                        </div>
                        <div class="player-slot-meta">
                            <div class="slot-player-name">${assignedPlayer.webName || assignedPlayer.name.split(' ').pop()}</div>
                            <div class="slot-player-price">£${assignedPlayer.price}m</div>
                        </div>
                        ${!this.isLocked ? `
                            <div class="slot-actions-overlay">
                                <button class="btn-slot-action cap ${isCap ? 'active' : ''}" title="Captain (2x)" data-cap-id="${assignedPlayer.id}">C</button>
                                <button class="btn-slot-action vc ${isVC ? 'active' : ''}" title="Vice-Captain" data-vc-id="${assignedPlayer.id}">V</button>
                                <button class="btn-slot-action remove" title="Remove" data-remove-idx="${slotIdx}">&times;</button>
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

        // Captain / VC / Remove action handlers
        field.querySelectorAll('[data-cap-id]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const pId = btn.getAttribute('data-cap-id');
                this.captainId = pId;
                if (this.viceCaptainId === pId) this.viceCaptainId = null;
                this.renderPitch();
                this.updateStatsBar();
            });
        });

        field.querySelectorAll('[data-vc-id]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const pId = btn.getAttribute('data-vc-id');
                this.viceCaptainId = pId;
                if (this.captainId === pId) this.captainId = null;
                this.renderPitch();
                this.updateStatsBar();
            });
        });

        field.querySelectorAll('[data-remove-idx]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const idx = parseInt(btn.getAttribute('data-remove-idx'), 10);
                this.removePlayer(idx);
            });
        });
    }

    renderBottomDock() {
        const track = document.getElementById('dockPlayersTrack');
        if (!track) return;

        const allPlayers = getMatchPlayers(this.activeFixture.homeClub, this.activeFixture.awayClub);
        const selectedIds = new Set(this.selectedPlayers.filter(Boolean).map(p => p.id));

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
            const isPicked = selectedIds.has(player.id);
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

            return `
                <div class="dock-player-card ${isPicked ? 'is-picked' : ''} ${isInjured ? 'card-injured' : ''} ${isSuspended ? 'card-suspended' : ''}" draggable="${!isPicked && !this.isLocked ? 'true' : 'false'}" data-dock-player-id="${player.id}">
                    <div class="dock-card-top">
                        <img src="${player.photo || ''}" alt="${player.name}" class="dock-player-img" draggable="false" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="dock-fallback-kit" style="display:none; background: linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor || team.primaryColor})">
                            <span>${player.number || player.pos}</span>
                        </div>
                        <img src="${team.badge}" class="dock-club-crest" alt="${team.name}" draggable="false">
                        <span class="dock-pos-badge ${player.pos.toLowerCase()}">${player.pos}</span>
                    </div>
                    <div class="dock-player-info">
                        <span class="dock-pname">${player.webName || player.name}</span>
                        ${statusBadge}
                        <div class="dock-pstats">
                            <span>⭐ ${player.form.toFixed(1)}</span>
                            <span>£${player.price}m</span>
                        </div>
                    </div>
                    <div class="dock-card-action">
                        ${isPicked ? '<span class="dock-badge-picked">IN 11</span>' : `<button class="btn-dock-add" data-add-player-id="${player.id}">+ ADD</button>`}
                    </div>
                </div>
            `;
        }).join('');

        // Bind drag listeners to dock cards (Desktop Mouse Drag only)
        track.querySelectorAll('.dock-player-card').forEach(card => {
            const pId = card.getAttribute('data-dock-player-id');
            const player = getPlayerById(pId);
            if (!player) return;

            // HTML5 Drag (Desktop)
            card.addEventListener('dragstart', (e) => {
                this.draggedPlayer = player;
                this.draggedSourceSlotIdx = null;
                e.dataTransfer.setData('text/plain', pId);
                e.dataTransfer.effectAllowed = 'move';
                card.classList.add('is-dragging');
            });

            card.addEventListener('dragend', () => {
                card.classList.remove('is-dragging');
                this.clearDragOverStates();
            });
        });

        // Bind Click / Tap on player card
        track.querySelectorAll('.dock-player-card').forEach(card => {
            const pId = card.getAttribute('data-dock-player-id');
            const player = getPlayerById(pId);
            if (!player) return;

            card.addEventListener('click', () => {
                if (this.isLocked) return;
                const isPicked = this.selectedPlayers.some(p => p && p.id === player.id);
                if (isPicked) {
                    // Highlight their slot on the pitch
                    const slotIdx = this.selectedPlayers.findIndex(p => p && p.id === player.id);
                    if (slotIdx !== -1) {
                        this.selectSlot(slotIdx, player.pos);
                    }
                    return;
                }
                this.autoAssignPlayer(player);
            });
        });
    }

    selectSlot(slotIdx, pos) {
        this.highlightedSlotIdx = slotIdx;
        this.selectedFilterPos = pos;
        
        document.querySelectorAll('[data-dock-pos]').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-dock-pos') === pos);
        });

        this.renderPitch();
        this.renderBottomDock();

        const dock = document.getElementById('bottomPlayerDock');
        if (dock) {
            dock.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }

    handleDropOnSlot(player, targetSlotIdx, targetSlotPos) {
        // STRICT POSITION VALIDATION
        if (player.pos !== targetSlotPos) {
            alert(`⚠️ Position Mismatch!\n\n${player.name} is a ${player.pos} and can ONLY be placed in a ${player.pos} slot.`);
            return;
        }

        // MAXIMUM 6 PLAYERS FROM A TEAM LIMIT
        const targetExistingPlayer = this.selectedPlayers[targetSlotIdx];
        const isSameClubReplacement = targetExistingPlayer && targetExistingPlayer.club === player.club;
        const currentClubPicks = this.selectedPlayers.filter(p => p && p.club === player.club && p.id !== player.id).length;

        if (currentClubPicks >= 6 && !isSameClubReplacement) {
            const clubName = TEAMS_DATA[player.club]?.name || player.club;
            alert(`⚠️ Club Limit Exceeded!\n\nA maximum of 6 players from ${clubName} can be selected.\n\nYou already have ${currentClubPicks} ${clubName} players in your Best 11.`);
            return;
        }

        // Warn if player is injured or suspended
        if (player.status === 'i') {
            if (!confirm(`🚑 Injury Warning:\n\n${player.name} is currently INJURED (${player.news || '0% chance of playing'}).\n\nDo you still want to include them in your Best 11?`)) {
                return;
            }
        } else if (player.status === 's') {
            if (!confirm(`🚫 Suspension Warning:\n\n${player.name} is currently SUSPENDED (${player.news || 'Suspended'}).\n\nDo you still want to include them in your Best 11?`)) {
                return;
            }
        }

        if (this.draggedSourceSlotIdx !== null) {
            const oldIdx = this.draggedSourceSlotIdx;
            const slotPositions = this.getSlotPositionsArray();
            const sourceSlotPos = slotPositions[oldIdx];
            const existingTargetPlayer = this.selectedPlayers[targetSlotIdx];

            if (existingTargetPlayer && existingTargetPlayer.pos !== sourceSlotPos) {
                alert(`⚠️ Cannot swap: ${existingTargetPlayer.name} (${existingTargetPlayer.pos}) cannot play in a ${sourceSlotPos} slot.`);
                return;
            }

            this.selectedPlayers[targetSlotIdx] = player;
            this.selectedPlayers[oldIdx] = existingTargetPlayer || null;
        } else {
            const priorIdx = this.selectedPlayers.findIndex(p => p && p.id === player.id);
            if (priorIdx !== -1) {
                this.selectedPlayers[priorIdx] = null;
            }
            this.selectedPlayers[targetSlotIdx] = player;
        }

        this.highlightedSlotIdx = null;
        this.draggedPlayer = null;
        this.draggedSourceSlotIdx = null;

        if (!this.captainId) this.captainId = player.id;
        else if (!this.viceCaptainId && this.captainId !== player.id) this.viceCaptainId = player.id;

        this.renderPitch();
        this.renderBottomDock();
        this.updateStatsBar();
    }

    autoAssignPlayer(player) {
        const slotPositions = this.getSlotPositionsArray();

        // 1. If user previously tapped on a specific slot on the pitch
        if (this.highlightedSlotIdx !== null) {
            const targetPos = slotPositions[this.highlightedSlotIdx];
            if (targetPos === player.pos) {
                this.handleDropOnSlot(player, this.highlightedSlotIdx, targetPos);
                return;
            }
        }

        // 2. Find first empty slot matching exact position
        const matchingEmptyIdx = slotPositions.findIndex((pos, idx) => pos === player.pos && !this.selectedPlayers[idx]);
        if (matchingEmptyIdx !== -1) {
            this.handleDropOnSlot(player, matchingEmptyIdx, player.pos);
            return;
        }

        // 3. If all slots for this position are full, allow 1-click replacement
        const currentPosPlayers = [];
        slotPositions.forEach((pos, idx) => {
            if (pos === player.pos && this.selectedPlayers[idx]) {
                currentPosPlayers.push({ idx, player: this.selectedPlayers[idx] });
            }
        });

        if (currentPosPlayers.length > 0) {
            const optionsStr = currentPosPlayers.map((item, i) => `${i + 1}. Replace ${item.player.webName || item.player.name} (£${item.player.price}m, ${item.player.club})`).join('\n');
            const choice = prompt(`⚠️ All ${player.pos} slots are full in your Best 11.\n\nWho would you like to replace with ${player.name} (£${player.price}m)?\n\n${optionsStr}\n\nEnter number (1-${currentPosPlayers.length}) or click Cancel:`);
            if (choice) {
                const choiceNum = parseInt(choice.trim(), 10);
                if (!isNaN(choiceNum) && choiceNum >= 1 && choiceNum <= currentPosPlayers.length) {
                    const chosenSlot = currentPosPlayers[choiceNum - 1];
                    this.handleDropOnSlot(player, chosenSlot.idx, player.pos);
                    return;
                }
            }
        }
    }

    removePlayer(slotIdx) {
        const removed = this.selectedPlayers[slotIdx];
        if (!removed) return;

        if (this.captainId === removed.id) this.captainId = null;
        if (this.viceCaptainId === removed.id) this.viceCaptainId = null;

        this.selectedPlayers[slotIdx] = null;
        this.renderPitch();
        this.renderBottomDock();
        this.updateStatsBar();
    }

    clearSquad() {
        if (confirm('Clear entire Best 11 lineup?')) {
            this.selectedPlayers = new Array(11).fill(null);
            this.captainId = null;
            this.viceCaptainId = null;
            this.renderPitch();
            this.renderBottomDock();
            this.updateStatsBar();
        }
    }

    autoPickBest11() {
        const allPlayers = getMatchPlayers(this.activeFixture.homeClub, this.activeFixture.awayClub);
        const config = this.formations[this.currentFormation];

        // Filter out injured & suspended players for auto-pick!
        const fitPlayers = allPlayers.filter(p => p.status !== 'i' && p.status !== 's');
        const pool = fitPlayers.length >= 11 ? fitPlayers : allPlayers;

        const homeCode = this.activeFixture.homeClub;
        const awayCode = this.activeFixture.awayClub;

        let homeCount = 0;
        let awayCount = 0;
        const picked = [];

        const tryPick = (posGroup, maxCount) => {
            const sorted = [...posGroup].sort((a, b) => b.form - a.form);
            const selected = [];
            for (const p of sorted) {
                if (selected.length >= maxCount) break;
                if (p.club === homeCode && homeCount >= 6) continue;
                if (p.club === awayCode && awayCount >= 6) continue;

                selected.push(p);
                if (p.club === homeCode) homeCount++;
                if (p.club === awayCode) awayCount++;
            }
            // If still unfilled, pick remaining available
            for (const p of sorted) {
                if (selected.length >= maxCount) break;
                if (!selected.some(s => s.id === p.id)) {
                    selected.push(p);
                    if (p.club === homeCode) homeCount++;
                    if (p.club === awayCode) awayCount++;
                }
            }
            return selected;
        };

        const gks = pool.filter(p => p.pos === 'GK');
        const defs = pool.filter(p => p.pos === 'DEF');
        const mids = pool.filter(p => p.pos === 'MID');
        const fwds = pool.filter(p => p.pos === 'FWD');

        this.selectedPlayers = [
            ...tryPick(gks, config.GK),
            ...tryPick(defs, config.DEF),
            ...tryPick(mids, config.MID),
            ...tryPick(fwds, config.FWD)
        ];

        while (this.selectedPlayers.length < 11) {
            this.selectedPlayers.push(null);
        }

        const valid = this.selectedPlayers.filter(Boolean);
        if (valid.length > 0) {
            const sortedByPrice = [...valid].sort((a, b) => b.price - a.price);
            this.captainId = sortedByPrice[0].id;
            this.viceCaptainId = sortedByPrice[1]?.id || sortedByPrice[0].id;
        }

        this.renderPitch();
        this.renderBottomDock();
        this.updateStatsBar();
    }

    clearDragOverStates() {
        document.querySelectorAll('.pitch-player-slot, .dock-player-card').forEach(s => s.classList.remove('drag-hover', 'is-dragging'));
    }

    updateStatsBar() {
        const bar = document.getElementById('squadStatsBar');
        if (!bar) return;

        const MAX_BUDGET = 100.0;
        const count = this.selectedPlayers.filter(Boolean).length;
        const totalPrice = this.selectedPlayers.filter(Boolean).reduce((sum, p) => sum + p.price, 0);
        const remainingBudget = MAX_BUDGET - totalPrice;
        const isOverBudget = totalPrice > MAX_BUDGET;

        const homeCount = this.selectedPlayers.filter(p => p && p.club === this.activeFixture.homeClub).length;
        const awayCount = this.selectedPlayers.filter(p => p && p.club === this.activeFixture.awayClub).length;
        const isClubLimitExceeded = homeCount > 6 || awayCount > 6;

        bar.innerHTML = `
            <div class="stat-pill">
                <span class="pill-label">Squad Size</span>
                <span class="pill-val ${count === 11 ? 'valid' : 'pending'}">${count} / 11</span>
            </div>
            <div class="stat-pill">
                <span class="pill-label">Total Value / Max</span>
                <span class="pill-val ${isOverBudget ? 'over-budget' : ''}">£${totalPrice.toFixed(1)}m / £100.0m</span>
            </div>
            <div class="stat-pill">
                <span class="pill-label">Remaining Bank</span>
                <span class="pill-val ${remainingBudget < 0 ? 'over-budget' : 'highlight-green'}">£${remainingBudget.toFixed(1)}m</span>
            </div>
            <div class="stat-pill">
                <span class="pill-label">Club Split (Max 6)</span>
                <span class="pill-val ${isClubLimitExceeded ? 'over-budget' : ''}">${this.activeFixture.homeClub} (${homeCount}/6) : ${this.activeFixture.awayClub} (${awayCount}/6)</span>
            </div>
            <div class="stat-pill">
                <span class="pill-label">Captain (2x)</span>
                <span class="pill-val highlight">${this.captainId ? (getPlayerById(this.captainId)?.webName || getPlayerById(this.captainId)?.name || 'None') : 'None'}</span>
            </div>
        `;

        this.autoSaveDraft();
    }

    saveSquadToRoom() {
        const validPlayers = this.selectedPlayers.filter(Boolean);
        if (validPlayers.length < 11) {
            alert(`Incomplete squad! You have picked ${validPlayers.length}/11 players. Please fill all 11 slots.`);
            return;
        }
        if (!this.captainId) {
            alert('Please select a Captain (C) by clicking the C button on one of your players.');
            return;
        }

        const homeCount = validPlayers.filter(p => p.club === this.activeFixture.homeClub).length;
        const awayCount = validPlayers.filter(p => p.club === this.activeFixture.awayClub).length;
        if (homeCount > 6 || awayCount > 6) {
            alert(`⚠️ Club Limit Exceeded!\n\nA maximum of 6 players from either team can be selected.\n\nCurrent Split: ${this.activeFixture.homeClub} (${homeCount}) : ${this.activeFixture.awayClub} (${awayCount}).\n\nPlease adjust your picks so no club exceeds 6 players.`);
            return;
        }

        const totalPrice = validPlayers.reduce((sum, p) => sum + p.price, 0);
        if (totalPrice > 100.0) {
            alert(`⚠️ Budget Limit Exceeded!\n\nYour squad total value is £${totalPrice.toFixed(1)}m, which exceeds the £100.0m maximum budget limit by £${(totalPrice - 100.0).toFixed(1)}m.\n\nPlease replace higher-priced players to keep your squad under £100.0m.`);
            return;
        }

        const squadData = {
            playerIds: validPlayers.map(p => p.id),
            captainId: this.captainId,
            viceCaptainId: this.viceCaptainId,
            formation: this.currentFormation,
            totalPrice: parseFloat(totalPrice.toFixed(1)),
            updatedAt: Date.now()
        };

        if (window.roomManager && window.roomManager.currentRoom) {
            window.roomManager.submitSquad(window.roomManager.currentRoom.code, squadData);
            alert('🎉 Best 11 Squad (Within £100.0m budget & max 6/team) saved and locked to room successfully!');
        } else {
            alert('Squad saved locally! Join or create a room to challenge friends.');
        }

        this.autoSaveDraft();
    }
}

window.pitchBuilder = new PitchBuilderUI();
