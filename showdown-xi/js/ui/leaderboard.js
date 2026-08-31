/**
 * Showdown XI - Leaderboard & Standings UI
 * Live room standings with Match Score, Cumulative Total Score, and Squad Comparison.
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

        if (!room) {
            container.innerHTML = `
                <div class="leaderboard-empty-state">
                    <span class="empty-icon">🏆</span>
                    <h3>No Active Showdown Room</h3>
                    <p>Create or join a room code to battle real friends in real-time.</p>
                </div>
            `;
            return;
        }

        const activeFixture = FIXTURES_DATA.find(f => f.id === room.fixtureId) || FIXTURES_DATA[0];
        const deadlineInfo = getMatchDeadlineInfo(activeFixture.kickoffTime);
        const isLocked = deadlineInfo.isLocked;

        // Clean any legacy bots
        const realParticipants = (room.participants || []).filter(p => !p.isBot && !p.userId?.startsWith('bot_'));

        const calculated = realParticipants.map(p => {
            const squad = p.squads ? p.squads[room.fixtureId] || p.squad : p.squad;
            let matchScore = 0;
            let breakdown = null;

            if (squad && squad.playerIds && squad.playerIds.length === 11) {
                const res = calculateSquadTotalPoints(squad.playerIds, squad.captainId, squad.viceCaptainId, liveStatsMap);
                matchScore = res.totalScore;
                breakdown = res;
            }

            // Calculate cumulative total score across all fixture squads saved by this manager
            let cumulativeTotal = 0;
            if (p.squads) {
                for (const fId in p.squads) {
                    if (fId === room.fixtureId) {
                        cumulativeTotal += matchScore;
                    } else {
                        const s = p.squads[fId];
                        if (s && s.playerIds && s.playerIds.length === 11) {
                            const pastRes = calculateSquadTotalPoints(s.playerIds, s.captainId, s.viceCaptainId, {});
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
            calculated.sort((a, b) => b.matchScore - a.matchScore);
        } else {
            calculated.sort((a, b) => b.totalScore - a.totalScore);
        }

        const topTotal = calculated[0]?.totalScore || 0;
        const topMatch = Math.max(0, ...calculated.map(p => p.matchScore));

        container.innerHTML = `
            <div class="leaderboard-card">
                <!-- Room Header -->
                <div class="leaderboard-header">
                    <div class="header-titles">
                        <h3>🏆 Room Standings: ${room.name}</h3>
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
                            <span class="stat-label">Leader Total Score</span>
                            <span class="stat-num">${topTotal} pts</span>
                        </div>
                    </div>
                    <div class="room-stat-card highlight-green">
                        <span class="stat-icon">⚡</span>
                        <div class="stat-info">
                            <span class="stat-label">Top Match Score</span>
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
                        ⭐ Overall Total Score
                    </button>
                    <button class="btn-sort-toggle ${this.sortBy === 'match' ? 'active' : ''}" id="btnSortMatch">
                        ⚡ Active Match Score
                    </button>
                </div>

                <!-- Standings Table -->
                <div class="standings-table-wrapper">
                    <table class="standings-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Manager</th>
                                <th>Formation</th>
                                <th>Captain</th>
                                <th>⚡ Match Score</th>
                                <th>⭐ Total Score</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${calculated.length === 0 ? `
                                <tr>
                                    <td colspan="7" style="text-align: center; padding: 2rem; color: var(--text-muted);">
                                        No participants yet. Share the room code <strong>${room.code}</strong> with your friends to start!
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
                                            ${hasSquad ? (isLocked || isUser ? part.squad.formation : '🔒 Hidden') : '<span class="text-muted">Drafting...</span>'}
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

    bindEvents(room, rankedParticipants) {
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
                this.render(this.activeRoom);
            });
        }

        const btnSortMatch = document.getElementById('btnSortMatch');
        if (btnSortMatch) {
            btnSortMatch.addEventListener('click', () => {
                this.sortBy = 'match';
                this.render(this.activeRoom);
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

        const myProfile = window.roomManager.userProfile;
        const myParticipant = this.activeRoom.participants.find(p => p.userId === myProfile.id);

        const targetSquad = targetParticipant.squad;
        const mySquad = myParticipant?.squad;

        content.innerHTML = `
            <div class="comp-modal-header">
                <div class="comp-title">
                    <h3>Tactical Breakdown: ${targetParticipant.name} (@${targetParticipant.userId})</h3>
                    <p>Formation: <strong>${targetSquad?.formation || '4-3-3'}</strong> • Match Score: <strong>${targetParticipant.matchScore} pts</strong> • Total Score: <strong>${targetParticipant.totalScore} pts</strong></p>
                </div>
                <button class="drawer-close-btn" id="compCloseBtn">&times;</button>
            </div>

            <div class="comp-player-grid">
                ${(targetSquad?.playerIds || []).map(pId => {
                    const player = getPlayerById(pId);
                    if (!player) return '';

                    const isCap = pId === targetSquad.captainId;
                    const isVC = pId === targetSquad.viceCaptainId;
                    const team = TEAMS_DATA[player.club] || { name: player.club, badge: '', primaryColor: '#333' };
                    const isCommonPick = mySquad?.playerIds?.includes(pId);

                    const pStats = window.matchSimulator?.livePlayerStats[pId] || { minutes: 90 };
                    const fplBreakdown = calculatePlayerFPLPoints(player, pStats, isCap, isVC);

                    return `
                        <div class="comp-player-card ${isCommonPick ? 'shared-pick' : 'differential-pick'}">
                            <div class="comp-card-top">
                                <img src="${team.badge}" class="comp-crest-mini" alt="${team.name}">
                                <span class="comp-badge">${team.shortName || team.name}</span>
                                <span class="comp-pos-tag">${player.pos}</span>
                                ${isCap ? '<span class="captain-badge">C (2x)</span>' : ''}
                                ${isVC ? '<span class="vc-badge">V</span>' : ''}
                                ${isCommonPick ? '<span class="common-tag">Shared</span>' : '<span class="diff-tag">Differential ⭐</span>'}
                            </div>
                            <div class="comp-player-identity">
                                <img src="${player.photo || ''}" alt="${player.name}" class="comp-player-photo-thumb" onerror="this.style.display='none'">
                                <div class="comp-player-name-box">
                                    <div class="comp-player-name">${player.name}</div>
                                    <div class="comp-price">£${player.price}m • #${player.number || player.pos}</div>
                                </div>
                            </div>
                            <div class="comp-player-score">
                                <span class="comp-points">${fplBreakdown.totalPoints} pts</span>
                            </div>
                            <div class="comp-breakdown-chips">
                                ${fplBreakdown.breakdown.map(b => `<span class="breakdown-chip ${b.pts >= 0 ? 'pos' : 'neg'}">${b.rule}: ${b.pts >= 0 ? '+' : ''}${b.pts}</span>`).join('')}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
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
