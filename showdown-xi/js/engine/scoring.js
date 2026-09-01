/**
 * Showdown XI - Official FPL Point Calculation Engine
 * Accurately implements all Fantasy Premier League & standard fantasy scoring rules.
 */

const FPL_RULES = {
    MINUTES: {
        PARTIAL: 1, // 1 to 59 mins
        FULL: 2     // 60+ mins
    },
    GOALS: {
        GK: 6,
        DEF: 6,
        MID: 5,
        FWD: 4
    },
    ASSIST: 3,
    CLEAN_SHEET: {
        GK: 4,
        DEF: 4,
        MID: 1,
        FWD: 0
    },
    GOALS_CONCEDED: {
        THRESHOLD: 2, // -1 pt for every 2 goals conceded (GK & DEF)
        PENALTY: -1
    },
    SAVES: {
        THRESHOLD: 3, // +1 pt for every 3 saves (GK)
        POINTS: 1
    },
    PENALTY_SAVE: 5,
    PENALTY_MISS: -2,
    OWN_GOAL: -2,
    YELLOW_CARD: -1,
    RED_CARD: -3
};

/**
 * Calculates detailed FPL points and step-by-step breakdown for a player in a match.
 * @param {Object} player - Player object with pos, club, etc.
 * @param {Object} matchStats - Stats achieved in this match { minutes, goals, assists, cleanSheet, goalsConceded, saves, penSaves, penMisses, yellowCards, redCards, ownGoals, bonus }
 * @param {Boolean} isCaptain - Whether player is selected as Captain (2x)
 * @param {Boolean} isViceCaptain - Whether player is Vice Captain
 * @returns {Object} { totalPoints, basePoints, multiplier, breakdown: Array<{ rule, pts, desc }> }
 */
function calculatePlayerFPLPoints(player, matchStats = {}, isCaptain = false, isViceCaptain = false) {
    if (!player) return { totalPoints: 0, basePoints: 0, multiplier: 1, breakdown: [] };

    const pos = player.pos || 'MID';
    const stats = {
        minutes: matchStats.minutes ?? 90,
        goals: matchStats.goals ?? 0,
        assists: matchStats.assists ?? 0,
        cleanSheet: matchStats.cleanSheet ?? false,
        goalsConceded: matchStats.goalsConceded ?? 0,
        saves: matchStats.saves ?? 0,
        penSaves: matchStats.penSaves ?? 0,
        penMisses: matchStats.penMisses ?? 0,
        yellowCards: matchStats.yellowCards ?? 0,
        redCards: matchStats.redCards ?? 0,
        ownGoals: matchStats.ownGoals ?? 0,
        bonus: matchStats.bonus ?? 0
    };

    const breakdown = [];
    let basePoints = 0;

    // 1. Minutes Played
    if (stats.minutes > 0) {
        if (stats.minutes >= 60) {
            basePoints += FPL_RULES.MINUTES.FULL;
            breakdown.push({ rule: 'Minutes (60+)', pts: FPL_RULES.MINUTES.FULL, desc: `Played ${stats.minutes} mins` });
        } else {
            basePoints += FPL_RULES.MINUTES.PARTIAL;
            breakdown.push({ rule: 'Minutes (1-59)', pts: FPL_RULES.MINUTES.PARTIAL, desc: `Played ${stats.minutes} mins` });
        }
    } else {
        breakdown.push({ rule: 'Did not play', pts: 0, desc: '0 minutes played' });
        return { totalPoints: 0, basePoints: 0, multiplier: isCaptain ? 2 : 1, breakdown };
    }

    // 2. Goals Scored
    if (stats.goals > 0) {
        const ptsPerGoal = FPL_RULES.GOALS[pos] || 4;
        const totalGoalPts = stats.goals * ptsPerGoal;
        basePoints += totalGoalPts;
        breakdown.push({ rule: `Goals (${pos})`, pts: totalGoalPts, desc: `${stats.goals} goal(s) @ ${ptsPerGoal} pts` });
    }

    // 3. Assists
    if (stats.assists > 0) {
        const totalAssistPts = stats.assists * FPL_RULES.ASSIST;
        basePoints += totalAssistPts;
        breakdown.push({ rule: 'Assists', pts: totalAssistPts, desc: `${stats.assists} assist(s) @ ${FPL_RULES.ASSIST} pts` });
    }

    // 4. Clean Sheet (Only if played 60+ mins)
    if (stats.cleanSheet && stats.minutes >= 60) {
        const csPts = FPL_RULES.CLEAN_SHEET[pos] || 0;
        if (csPts > 0) {
            basePoints += csPts;
            breakdown.push({ rule: 'Clean Sheet', pts: csPts, desc: `No goals conceded while on pitch (${pos})` });
        }
    }

    // 5. Goals Conceded (GK and DEF only: -1 for every 2 goals conceded)
    if ((pos === 'GK' || pos === 'DEF') && stats.goalsConceded >= 2) {
        const penaltyDeduction = Math.floor(stats.goalsConceded / FPL_RULES.GOALS_CONCEDED.THRESHOLD) * FPL_RULES.GOALS_CONCEDED.PENALTY;
        basePoints += penaltyDeduction;
        breakdown.push({ rule: 'Goals Conceded', pts: penaltyDeduction, desc: `${stats.goalsConceded} goals conceded (-1 per 2 goals)` });
    }

    // 6. Saves (GK only: +1 for every 3 saves)
    if (pos === 'GK' && stats.saves >= 3) {
        const savePts = Math.floor(stats.saves / FPL_RULES.SAVES.THRESHOLD) * FPL_RULES.SAVES.POINTS;
        basePoints += savePts;
        breakdown.push({ rule: 'Saves', pts: savePts, desc: `${stats.saves} saves (+1 per 3 saves)` });
    }

    // 7. Penalty Saves
    if (stats.penSaves > 0) {
        const penPts = stats.penSaves * FPL_RULES.PENALTY_SAVE;
        basePoints += penPts;
        breakdown.push({ rule: 'Penalty Saved', pts: penPts, desc: `${stats.penSaves} penalty save(s) @ +5 pts` });
    }

    // 8. Penalty Misses
    if (stats.penMisses > 0) {
        const penMissPts = stats.penMisses * FPL_RULES.PENALTY_MISS;
        basePoints += penMissPts;
        breakdown.push({ rule: 'Penalty Miss', pts: penMissPts, desc: `${stats.penMisses} missed penalty @ -2 pts` });
    }

    // 9. Own Goals
    if (stats.ownGoals > 0) {
        const ogPts = stats.ownGoals * FPL_RULES.OWN_GOAL;
        basePoints += ogPts;
        breakdown.push({ rule: 'Own Goal', pts: ogPts, desc: `${stats.ownGoals} own goal(s) @ -2 pts` });
    }

    // 10. Yellow Cards
    if (stats.yellowCards > 0) {
        const ycPts = stats.yellowCards * FPL_RULES.YELLOW_CARD;
        basePoints += ycPts;
        breakdown.push({ rule: 'Yellow Card', pts: ycPts, desc: `${stats.yellowCards} yellow card(s) @ -1 pt` });
    }

    // 11. Red Cards
    if (stats.redCards > 0) {
        const rcPts = stats.redCards * FPL_RULES.RED_CARD;
        basePoints += rcPts;
        breakdown.push({ rule: 'Red Card', pts: rcPts, desc: `${stats.redCards} red card @ -3 pts` });
    }

    // 12. Bonus Points (BPS)
    if (stats.bonus > 0) {
        basePoints += stats.bonus;
        breakdown.push({ rule: 'Bonus Points (BPS)', pts: stats.bonus, desc: `Awarded ${stats.bonus} BPS bonus` });
    }

    // Captain Multiplier
    const multiplier = isCaptain ? 2 : 1;
    const totalPoints = basePoints * multiplier;

    if (isCaptain) {
        breakdown.push({ rule: 'Captain (C) 2x Multiplier', pts: totalPoints - basePoints, desc: `Doubled base score: ${basePoints} x 2 = ${totalPoints}` });
    }

    return {
        playerId: player.id,
        playerName: player.name,
        pos: player.pos,
        club: player.club,
        basePoints,
        multiplier,
        isCaptain,
        isViceCaptain,
        totalPoints,
        breakdown
    };
}

/**
 * Computes the total squad score and individual breakdowns for a 15-player squad (11 Starters + 4 Bench Substitutes).
 * Implements official FPL Auto-Substitution:
 * - If starting GK played 0 mins, Bench GK replaces them.
 * - If starting outfield played 0 mins, Bench outfield subs (Sub 1 -> Sub 2 -> Sub 3) sub in if formation remains legal (>=3 DEF, >=2 MID, >=1 FWD).
 * 
 * @param {Array<string>} squadPlayerIds - Array of 11 starter player IDs
 * @param {Array<string>} benchPlayerIds - Array of 4 bench player IDs [gkSub, sub1, sub2, sub3]
 * @param {string} captainId - Selected Captain ID
 * @param {string} viceCaptainId - Selected Vice Captain ID
 * @param {Object} matchLiveStatsMap - Map of { [playerId]: matchStats }
 */
function calculateSquadTotalPoints(squadPlayerIds = [], benchPlayerIds = [], captainId = null, viceCaptainId = null, matchLiveStatsMap = {}) {
    let totalScore = 0;
    const starterBreakdowns = [];
    const benchBreakdowns = [];

    // Helper to get stats
    const getStats = (pId) => matchLiveStatsMap[pId] || { minutes: 90 };
    const didPlay = (pId) => {
        if (!pId) return false;
        const stats = getStats(pId);
        return (stats.minutes ?? 90) > 0;
    };

    // Check Captaincy: if Captain played 0 mins, Vice Captain receives 2x multiplier
    const captainPlayed = didPlay(captainId);
    const effectiveCaptainId = captainPlayed ? captainId : (didPlay(viceCaptainId) ? viceCaptainId : captainId);

    // Analyze Starting 11 players
    const starterPlayers = squadPlayerIds.map(id => getPlayerById(id)).filter(Boolean);
    const benchPlayers = (benchPlayerIds || []).map(id => getPlayerById(id)).filter(Boolean);

    // Track active formation on pitch
    const activeCounts = { GK: 0, DEF: 0, MID: 0, FWD: 0 };
    starterPlayers.forEach(p => {
        if (activeCounts[p.pos] !== undefined) activeCounts[p.pos]++;
    });

    // Identify starters who did not play (0 mins)
    const starterStatusMap = {}; // { [playerId]: { autoSubOut: boolean, replacedBy: string|null } }
    starterPlayers.forEach(p => {
        starterStatusMap[p.id] = { autoSubOut: false, replacedBy: null };
    });

    const benchStatusMap = {}; // { [playerId]: { autoSubIn: boolean, replacing: string|null, order: number, role: string } }
    benchPlayers.forEach((p, idx) => {
        benchStatusMap[p.id] = {
            autoSubIn: false,
            replacing: null,
            order: idx === 0 ? 0 : idx,
            role: idx === 0 ? 'GK SUB' : `SUB ${idx}`
        };
    });

    // 1. Goalkeeper Auto-Sub
    const startingGk = starterPlayers.find(p => p.pos === 'GK');
    const benchGk = benchPlayers.find(p => p.pos === 'GK');
    if (startingGk && !didPlay(startingGk.id) && benchGk && didPlay(benchGk.id)) {
        starterStatusMap[startingGk.id].autoSubOut = true;
        starterStatusMap[startingGk.id].replacedBy = benchGk.name;
        benchStatusMap[benchGk.id].autoSubIn = true;
        benchStatusMap[benchGk.id].replacing = startingGk.name;
    }

    // 2. Outfield Auto-Subs (Sub 1 -> Sub 2 -> Sub 3)
    const outfieldStartersDNP = starterPlayers.filter(p => p.pos !== 'GK' && !didPlay(p.id));
    const outfieldBench = benchPlayers.filter(p => p.pos !== 'GK');

    outfieldStartersDNP.forEach(dnpStarter => {
        // Find first eligible bench sub in priority order
        for (const benchSub of outfieldBench) {
            if (benchStatusMap[benchSub.id].autoSubIn) continue; // already used
            if (!didPlay(benchSub.id)) continue; // didn't play either

            // Check if substituting maintains a legal formation: min 3 DEF, min 2 MID, min 1 FWD
            const testCounts = { ...activeCounts };
            testCounts[dnpStarter.pos]--;
            testCounts[benchSub.pos]++;

            if (testCounts.DEF >= 3 && testCounts.MID >= 2 && testCounts.FWD >= 1) {
                // Valid substitution!
                activeCounts[dnpStarter.pos]--;
                activeCounts[benchSub.pos]++;
                starterStatusMap[dnpStarter.id].autoSubOut = true;
                starterStatusMap[dnpStarter.id].replacedBy = benchSub.name;
                benchStatusMap[benchSub.id].autoSubIn = true;
                benchStatusMap[benchSub.id].replacing = dnpStarter.name;
                break;
            }
        }
    });

    // Calculate Points for Starters
    starterPlayers.forEach(p => {
        const isEffectiveCap = p.id === effectiveCaptainId;
        const isVC = p.id === viceCaptainId;
        const pStats = getStats(p.id);
        const subInfo = starterStatusMap[p.id];

        const result = calculatePlayerFPLPoints(p, pStats, isEffectiveCap, isVC);
        result.isStarter = true;
        result.isBench = false;
        result.autoSubOut = subInfo.autoSubOut;
        result.replacedBy = subInfo.replacedBy;

        // Points count towards total score if starter did NOT get auto-subbed out
        if (!subInfo.autoSubOut) {
            totalScore += result.totalPoints;
        } else {
            result.breakdown.push({ rule: 'Auto-Subbed Out', pts: 0, desc: `Replaced by ${subInfo.replacedBy} (0 pts from starter)` });
        }

        starterBreakdowns.push(result);
    });

    // Calculate Points for Bench Substitutes
    benchPlayers.forEach((p, idx) => {
        const isEffectiveCap = p.id === effectiveCaptainId;
        const isVC = p.id === viceCaptainId;
        const pStats = getStats(p.id);
        const subInfo = benchStatusMap[p.id] || { autoSubIn: false, replacing: null, role: idx === 0 ? 'GK SUB' : `SUB ${idx}` };

        const result = calculatePlayerFPLPoints(p, pStats, isEffectiveCap, isVC);
        result.isStarter = false;
        result.isBench = true;
        result.benchRole = subInfo.role;
        result.autoSubIn = subInfo.autoSubIn;
        result.replacing = subInfo.replacing;

        if (subInfo.autoSubIn) {
            totalScore += result.totalPoints;
            result.breakdown.push({ rule: 'Auto-Subbed In', pts: 0, desc: `Replaced ${subInfo.replacing} in Starting 11 (Points count!)` });
        }

        benchBreakdowns.push(result);
    });

    return {
        totalScore,
        captainPlayed,
        effectiveCaptainId,
        starterBreakdowns,
        benchBreakdowns,
        playerBreakdowns: [...starterBreakdowns, ...benchBreakdowns] // unified list
    };
}

