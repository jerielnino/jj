/**
 * Showdown XI - Leaderboard & Standings UI
 * Overarching multi-match league standings with Active Match Score, Cumulative Total Score, and 15-player Squad Comparison.
 * 100% Real Registered Human Managers only.
 */

class LeaderboardUI {
    constructor() {
        this.activeRoom = null;
        this.selectedCompareParticipant = null;
        this.sortBy = 'total'; // 'total' (Cumulative Total Score), 'match' (Active Match Score)
    }

    render(room, liveStatsMap = {}) {
        this.activeRoom = room;
        const container = document.getElementById('leaderboardSection');
        if (!container) return;

        if (!room || !room.code) {
            container.innerHTML = `
                <div class="leaderboard-card">
                    <div class="leaderboard-empty-state-card">
                        <div class="empty-icon-bubble">🏆</div>
                        <h3>No Active Showdown League</h3>
                        <p>Showdown leagues track your overall score across all Premier League & La Liga matches. Create a room for your friends or join an existing league with a room code!</p>
                        <div class="empty-state-actions">
                            <button class="btn btn-primary" id="btnEmptyCreateRoom">➕ Create New League Room</button>
                            <button class="btn btn-secondary" id="btnEmptyJoinRoom">🔑 Join with Room Code</button>
                        </div>
                    </div>
                </div>
            `;
            this.bindEmptyStateEvents();
            return;
        }

        const activeFixture = window.app?.selectedFixture || FIXTURES_DATA[0];
        const deadlineInfo = getMatchDeadlineInfo(activeFixture.kickoffTime);
        const isLocked = deadlineInfo.isLocked;

        // Filter out legacy bots
        const realParticipants = (room.participants || []).filter(p => !p.isBot && !p.userId?.startsWith('bot_'));

        const calculated = realParticipants.map(p => {
            const squad = p.squads ? p.squads[activeFixture.id] || null : null;
            let matchScore = 0;
            let breakdown = null;

            if (squad && squad.playerIds && squad.playerIds.length === 11) {
                const res = calculateSquadTotalPoints(squad.playerIds, squad.benchIds || [], squad.captainId, squad.viceCaptainId, liveStatsMap);
                matchScore = res.totalScore;
                breakdown = res;
            }

            // Calculate cumulative total score across all fixture squads saved by this manager in this room
            let cumulativeTotal = 0;
            if (p.squads) {
                for (const fId in p.squads) {
                    if (fId === activeFixture.id) {
                        cumulativeTotal += matchScore;
                    } else {
                        const s = p.squads[fId];
                        if (s && s.playerIds && s.playerIds.length === 11) {
                            const pastRes = calculateSquadTotalPoints(s.playerIds, s.benchIds || [], s.captainId, s.viceCaptainId, {});
                            cumulativeTotal += pastRes.totalScore;
                        }
                    }
                }
            } else {
                cumulativeTotal = matchScore;
            }

            return {
                ...p,
                squad,
                matchScore,
                totalScore: cumulativeTotal,
                scoreBreakdown: breakdown
            };
        });

        // Sort based on selected sort criteria
        if (this.sortBy === 'match') {
            calculated.sort((a, b) => b.matchScore - a.matchScore || b.totalScore - a.totalScore);
        } else {
            calculated.sort((a, b) => b.totalScore - a.totalScore || b.matchScore - a.matchScore);
        }

        const topTotal = calculated[0]?.totalScore || 0;
        const topMatch = Math.max(0, ...calculated.map(p => p.matchScore));

        const allRooms = window.roomManager ? window.roomManager.getMyRooms() : [room];
        if (!allRooms.some(r => r.code === room.code)) {
            allRooms.unshift(room);
        }

        container.innerHTML = `
            <div class="leaderboard-card">
                <!-- Room Switcher Strip -->
                <div class="leaderboard-room-bar">
                    <div class="room-selector-group">
                        <span class="room-selector-label">🏟️ Active League Room:</span>
                        <select id="roomSelectDropdown" class="room-select-dropdown">
                            ${allRooms.map(r => `
                                <option value="${r.code}" ${r.code === room.code ? 'selected' : ''}>
                                    ${r.name} (${r.code}) • ${(r.participants || []).length} manager(s)
                                </option>
                            `).join('')}
                        </select>
                    </div>
                    <div class="room-quick-actions">
                        <button class="btn btn-xs btn-primary" id="btnQuickCreateRoom">➕ New Room</button>
                        <button class="btn btn-xs btn-secondary" id="btnQuickJoinRoom">🔑 Join Room</button>
                    </div>
                </div>

                <!-- Room Header -->
                <div class="leaderboard-header">
                    <div class="header-titles">
                        <h3>🏆 ${room.name}</h3>
                        <span class="room-code-tag" id="roomCodeCopyTag" title="Click to copy invite code">🔑 Code: <strong>${room.code}</strong> (Click to Copy)</span>
                    </div>
                    <div class="room-actions-bar">
                        <button class="btn btn-secondary btn-sm" id="btnShareRoomLink">🔗 Share Invite Link</button>
                    </div>
                </div>

                <!-- Room Score Summary Cards -->
                <div class="room-summary-stats-grid">
                    <div class="room-stat-card highlight-gold">
                        <span class="stat-icon">👑</span>
                        <div class="stat-info">
                            <span class="stat-label">League Leader (Total)</span>
                            <span class="stat-num">${topTotal} pts</span>
                        </div>
                    </div>
                    <div class="room-stat-card highlight-green">
                        <span class="stat-icon">⚡</span>
                        <div class="stat-info">
                            <span class="stat-label">Active Match Leader</span>
                            <span class="stat-num">${topMatch} pts</span>
                        </div>
                    </div>
                    <div class="room-stat-card">
                        <span class="stat-icon">👥</span>
                        <div class="stat-info">
                            <span class="stat-label">Real Managers</span>
                            <span class="stat-num">${calculated.length} Active</span>
                        </div>
                    </div>
                    <div class="room-stat-card">
                        <span class="stat-icon">🏟️</span>
                        <div class="stat-info">
                            <span class="stat-label">Current Fixture</span>
                            <span class="stat-num">${activeFixture.homeClub} vs ${activeFixture.awayClub}</span>
                        </div>
                    </div>
                </div>

                <!-- Sort Filter Bar -->
                <div class="leaderboard-filter-strip">
                    <span class="filter-label">Sort Standings by:</span>
                    <button class="btn-sort-toggle ${this.sortBy === 'total' ? 'active' : ''}" id="btnSortTotal">
                        ⭐ Overall Total Score (All Matches)
                    </button>
                    <button class="btn-sort-toggle ${this.sortBy === 'match' ? 'active' : ''}" id="btnSortMatch">
                        ⚡ Active Match Score (${activeFixture.homeClub} vs ${activeFixture.awayClub})
                    </button>
                </div>

                <!-- Standings Table -->
                <div class="standings-table-wrapper">
                    <table class="standings-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Manager</th>
                                <th>Active Formation</th>
                                <th>Active Captain</th>
                                <th>⚡ Match Score</th>
                                <th>⭐ Total Score</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${calculated.length === 0 ? `
                                <tr>
                                    <td colspan="7" style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
                                        No participants in this room yet. Share code <strong>${room.code}</strong> with friends to join!
                                    </td>
                                </tr>
                            ` : calculated.map((part, idx) => {
                                const currentU = window.authManager?.currentUser?.username || window.roomManager.userProfile.id;
                                const isUser = part.userId === currentU || part.userId === window.roomManager.userProfile.id;
                                const capPlayer = part.squad?.captainId ? getPlayerById(part.squad.captainId) : null;
                                const hasSquad = part.squad && part.squad.playerIds?.length === 11;

                                return `
                                    <tr class="${isUser ? 'current-user-row' : ''}">
                                        <td class="rank-cell">
                                            <span class="rank-badge rank-${idx + 1}">${idx + 1}</span>
                                        </td>
                                        <td class="manager-cell">
                                            <span class="manager-avatar">${part.avatar || '⚽'}</span>
                                            <div class="manager-name-col">
                                                <strong>${part.name} ${isUser ? '<span class="you-tag">(You)</span>' : ''}</strong>
                                                <span class="manager-username-tag">@${part.userId}</span>
                                            </div>
                                        </td>
                                        <td class="formation-cell">
                                            ${hasSquad ? (isLocked || isUser ? part.squad.formation : '🔒 Hidden') : '<span class="text-muted">No squad yet</span>'}
                                        </td>
                                        <td class="captain-cell">
                                            ${hasSquad && capPlayer ? (isLocked || isUser ? `
                                                <div class="table-cap-chip">
                                                    <img src="${capPlayer.photo || ''}" class="table-cap-photo" onerror="this.style.display='none'">
                                                    <span>👑 ${capPlayer.webName || capPlayer.name.split(' ').pop()}</span>
                                                </div>
                                            ` : '🔒 Hidden') : '-'}
                                        </td>
                                        <td class="points-cell match-points-col">
                                            <span class="badge-match-score">${part.matchScore} pts</span>
                                        </td>
                                        <td class="points-cell total-points-col">
                                            <strong class="badge-total-score">${part.totalScore} pts</strong>
                                        </td>
                                        <td class="action-cell">
                                            ${hasSquad && (isLocked || isUser) ? `
                                                <button class="btn btn-secondary btn-xs btn-compare-squad" data-user-id="${part.userId}">
                                                    👁️ View 11
                                                </button>
                                            ` : '<span class="text-muted">Locked</span>'}
                                        </td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Squad Comparison & Breakdown Modal -->
            <div class="comparison-modal-overlay" id="comparisonModalOverlay">
                <div class="comparison-modal-sheet" id="comparisonModalContent">
                    <!-- Injected dynamically -->
                </div>
            </div>
        `;

        this.bindEvents(room, calculated);
    }

    bindEmptyStateEvents() {
        const btnCreate = document.getElementById('btnEmptyCreateRoom');
        if (btnCreate) {
            btnCreate.addEventListener('click', () => {
                if (window.app) window.app.openModal('createRoomModal');
            });
        }

        const btnJoin = document.getElementById('btnEmptyJoinRoom');
        if (btnJoin) {
            btnJoin.addEventListener('click', () => {
                if (window.app) window.app.openModal('joinRoomModal');
            });
        }
    }

    bindEvents(room, rankedParticipants) {
        const roomDropdown = document.getElementById('roomSelectDropdown');
        if (roomDropdown) {
            roomDropdown.addEventListener('change', (e) => {
                const selectedCode = e.target.value;
                const targetRoom = window.roomManager.getRoom(selectedCode);
                if (targetRoom) {
                    window.roomManager.currentRoom = targetRoom;
                    try {
                        localStorage.setItem(window.roomManager.activeRoomCodeKey, targetRoom.code);
                    } catch (err) {}
                    this.render(targetRoom, window.matchSimulator?.livePlayerStats);
                }
            });
        }

        const btnQuickCreate = document.getElementById('btnQuickCreateRoom');
        if (btnQuickCreate) {
            btnQuickCreate.addEventListener('click', () => {
                if (window.app) window.app.openModal('createRoomModal');
            });
        }

        const btnQuickJoin = document.getElementById('btnQuickJoinRoom');
        if (btnQuickJoin) {
            btnQuickJoin.addEventListener('click', () => {
                if (window.app) window.app.openModal('joinRoomModal');
            });
        }

        const copyCode = document.getElementById('roomCodeCopyTag');
        if (copyCode) {
            copyCode.addEventListener('click', () => {
                navigator.clipboard?.writeText(room.code);
                alert(`Room code ${room.code} copied to clipboard! Share this with your friends to join.`);
            });
        }

        const shareBtn = document.getElementById('btnShareRoomLink');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                const link = window.roomManager.generateShareableLink(room.code);
                navigator.clipboard?.writeText(link);
                alert(`Invite link copied to clipboard!\n${link}`);
            });
        }

        const btnSortTotal = document.getElementById('btnSortTotal');
        if (btnSortTotal) {
            btnSortTotal.addEventListener('click', () => {
                this.sortBy = 'total';
                this.render(this.activeRoom, window.matchSimulator?.livePlayerStats);
            });
        }

        const btnSortMatch = document.getElementById('btnSortMatch');
        if (btnSortMatch) {
            btnSortMatch.addEventListener('click', () => {
                this.sortBy = 'match';
                this.render(this.activeRoom, window.matchSimulator?.livePlayerStats);
            });
        }

        document.querySelectorAll('.btn-compare-squad').forEach(btn => {
            btn.addEventListener('click', () => {
                const uId = btn.getAttribute('data-user-id');
                const target = rankedParticipants.find(p => p.userId === uId);
                if (target) {
                    this.openSquadComparisonModal(target);
                }
            });
        });
    }

    openSquadComparisonModal(targetParticipant) {
        const modal = document.getElementById('comparisonModalOverlay');
        const content = document.getElementById('comparisonModalContent');
        if (!modal || !content) return;

        const activeFixture = window.app?.selectedFixture || FIXTURES_DATA[0];
        const myProfile = window.roomManager.userProfile;
        const myParticipant = this.activeRoom.participants.find(p => p.userId === myProfile.id);

        const targetSquad = targetParticipant.squads ? targetParticipant.squads[activeFixture.id] || targetParticipant.squad : targetParticipant.squad;
        const mySquad = myParticipant?.squads ? myParticipant.squads[activeFixture.id] || myParticipant.squad : myParticipant?.squad;

        const liveStatsMap = window.matchSimulator?.livePlayerStats || {};
        const squadBreakdown = calculateSquadTotalPoints(targetSquad?.playerIds || [], targetSquad?.benchIds || [], targetSquad?.captainId, targetSquad?.viceCaptainId, liveStatsMap);

        const renderCard = (pBreakdown, isBench = false, roleLabel = '') => {
            const pId = pBreakdown.playerId || pBreakdown.player?.id;
            const player = pBreakdown.player || getPlayerById(pId);
            if (!player) return '';

            const isCap = pId === targetSquad.captainId;
            const isVC = pId === targetSquad.viceCaptainId;
            const team = TEAMS_DATA[player.club] || { name: player.club, badge: '', primaryColor: '#333' };
            const isCommonPick = mySquad?.playerIds?.includes(pId) || mySquad?.benchIds?.includes(pId);

            let statusBadge = '';
            if (pBreakdown.autoSubIn) {
                statusBadge = '<span class="common-tag" style="background:#10B981; color:#000;">⚡ AUTO-SUB IN</span>';
            } else if (pBreakdown.autoSubOut) {
                statusBadge = '<span class="diff-tag" style="background:#EF4444; color:#fff;">⚠️ SUBBED OUT</span>';
            } else if (isBench) {
                statusBadge = `<span class="bench-p-pill" style="color:#C084FC;">${roleLabel || 'BENCH'}</span>`;
            }

            return `
                <div class="comp-player-card ${isCommonPick ? 'shared-pick' : 'differential-pick'} ${pBreakdown.autoSubOut ? 'card-injured' : ''}">
                    <div class="comp-card-top">
                        <img src="${team.badge}" class="comp-crest-mini" alt="${team.name}">
                        <span class="comp-badge">${team.shortName || team.name}</span>
                        <span class="comp-pos-tag">${player.pos}</span>
                        ${isCap ? '<span class="captain-badge">C (2x)</span>' : ''}
                        ${isVC ? '<span class="vc-badge">V</span>' : ''}
                        ${statusBadge}
                        ${isCommonPick ? '<span class="common-tag">Shared</span>' : '<span class="diff-tag">Diff ⭐</span>'}
                    </div>
                    <div class="comp-player-identity">
                        <img src="${player.photo || ''}" alt="${player.name}" class="comp-player-photo-thumb" onerror="this.style.display='none'">
                        <div class="comp-player-name-box">
                            <div class="comp-player-name">${player.name}</div>
                            <div class="comp-price">£${player.price}m • #${player.number || player.pos}</div>
                        </div>
                    </div>
                    <div class="comp-player-score">
                        <span class="comp-points">${pBreakdown.totalPoints} pts</span>
                    </div>
                    <div class="comp-breakdown-chips">
                        ${pBreakdown.breakdown.map(b => `<span class="breakdown-chip ${b.pts >= 0 ? 'pos' : 'neg'}">${b.rule}: ${b.pts >= 0 ? '+' : ''}${b.pts}</span>`).join('')}
                    </div>
                </div>
            `;
        };

        content.innerHTML = `
            <div class="comp-modal-header">
                <div class="comp-title">
                    <h3>Tactical Breakdown: ${targetParticipant.name} (@${targetParticipant.userId})</h3>
                    <p>Fixture: <strong>${activeFixture.homeClub} vs ${activeFixture.awayClub}</strong> • Formation: <strong>${targetSquad?.formation || '4-3-3'}</strong> • Match Score: <strong>${targetParticipant.matchScore} pts</strong> • League Total: <strong>${targetParticipant.totalScore} pts</strong></p>
                </div>
                <button class="drawer-close-btn" id="compCloseBtn">&times;</button>
            </div>

            <div class="comp-section-title" style="font-weight:900; font-size:0.95rem; margin:1rem 0 0.5rem; color:var(--text-main); display:flex; align-items:center; gap:0.5rem;">
                <span>⭐ STARTING 11 (ON PITCH)</span>
            </div>
            <div class="comp-player-grid">
                ${squadBreakdown.starterBreakdowns.map(sb => renderCard(sb, false)).join('')}
            </div>

            ${squadBreakdown.benchBreakdowns.length > 0 ? `
                <div class="comp-section-title" style="font-weight:900; font-size:0.95rem; margin:1.5rem 0 0.5rem; color:var(--text-main); display:flex; align-items:center; gap:0.5rem;">
                    <span>🪑 SUBSTITUTES BENCH (4 PLAYERS)</span>
                    <span style="font-size:0.75rem; color:var(--text-dim); font-weight:600;">• Auto-sub priority order</span>
                </div>
                <div class="comp-player-grid">
                    ${squadBreakdown.benchBreakdowns.map((bb, i) => renderCard(bb, true, bb.benchRole || (i === 0 ? 'GK SUB' : `SUB ${i}`))).join('')}
                </div>
            ` : ''}
        `;

        modal.classList.add('open');

        const closeBtn = document.getElementById('compCloseBtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.classList.remove('open');
            });
        }
    }
}

window.leaderboardUI = new LeaderboardUI();
