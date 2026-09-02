/**
 * Showdown XI - Permanent Git-Backed Rooms & Squads Database
 * This file is tracked in Git to provide permanent multiplayer rooms, user profiles, and squad rosters across all devices.
 */

// 1. Permanent Showdown League Rooms (Multi-Match Overarching Leagues)
const SAVED_ROOMS_DATA = {
    "XI-VN3ZY": {
        "code": "XI-VN3ZY",
        "name": "CFL",
        "createdAt": 1788326656940,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
                    "PL_GW1_ARS_COV": {
                        "fixtureId": "PL_GW1_ARS_COV",
                        "matchTitle": "ARS vs COV",
                        "formation": "4-3-3",
                        "captainId": "ars_9",
                        "viceCaptainId": "ars_4",
                        "playerIds": [
                            "cov_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "ars_9",
                            "cov_12",
                            "cov_13",
                            "ars_16",
                            "cov_15",
                            "cov_17"
                        ],
                        "benchIds": [
                            "ars_1",
                            "ars_11",
                            "cov_4",
                            "cov_4"
                        ],
                        "totalPrice": 87.2,
                        "updatedAt": 1788254323489,
                        "matchPoints": 0
                    },
                    "PL_GW1_HUL_MUN": {
                        "fixtureId": "PL_GW1_HUL_MUN",
                        "matchTitle": "HUL vs MUN",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "hul_3",
                        "playerIds": [
                            "mun_1",
                            "hul_3",
                            "hul_4",
                            "hul_5",
                            "hul_6",
                            "hul_10",
                            "mun_9",
                            "mun_10",
                            "hul_18",
                            "mun_16",
                            "mun_17"
                        ],
                        "benchIds": [
                            "hul_1",
                            "hul_16",
                            "mun_11",
                            "mun_11"
                        ],
                        "totalPrice": 89,
                        "updatedAt": 1788254323491,
                        "matchPoints": 0
                    },
                    "PL_GW1_BRE_TOT": {
                        "fixtureId": "PL_GW1_BRE_TOT",
                        "matchTitle": "BRE vs TOT",
                        "formation": "4-3-3",
                        "captainId": "bre_11",
                        "viceCaptainId": "bre_12",
                        "playerIds": [
                            "bre_1",
                            "bre_5",
                            "bre_6",
                            "bre_3",
                            "tot_7",
                            "bre_11",
                            "bre_12",
                            "tot_9",
                            "tot_15",
                            "tot_16",
                            "tot_17"
                        ],
                        "benchIds": [
                            "tot_1",
                            "bre_10",
                            "bre_10",
                            "tot_12"
                        ],
                        "totalPrice": 81.8,
                        "updatedAt": 1788254323495,
                        "matchPoints": 0
                    },
                    "PL_GW1_MCI_BOU": {
                        "fixtureId": "PL_GW1_MCI_BOU",
                        "matchTitle": "MCI vs BOU",
                        "formation": "4-3-3",
                        "captainId": "mci_18",
                        "viceCaptainId": "bou_10",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "bou_5",
                            "bou_10",
                            "bou_11",
                            "bou_12",
                            "mci_18",
                            "bou_16",
                            "bou_17"
                        ],
                        "benchIds": [
                            "bou_1",
                            "mci_11",
                            "mci_11",
                            "bou_13"
                        ],
                        "totalPrice": 99,
                        "updatedAt": 1788254323497,
                        "matchPoints": 0
                    },
                    "PL_GW1_NEW_LIV": {
                        "fixtureId": "PL_GW1_NEW_LIV",
                        "matchTitle": "NEW vs LIV",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "new_3",
                        "playerIds": [
                            "new_1",
                            "new_3",
                            "new_8",
                            "new_4",
                            "liv_7",
                            "liv_10",
                            "liv_11",
                            "liv_12",
                            "new_15",
                            "new_17",
                            "liv_16"
                        ],
                        "benchIds": [
                            "liv_1",
                            "new_9",
                            "new_9",
                            "liv_9"
                        ],
                        "totalPrice": 91.2,
                        "updatedAt": 1788254323499,
                        "matchPoints": 0
                    },
                    "LALIGA_MW1_FCB_ATH": {
                        "fixtureId": "LALIGA_MW1_FCB_ATH",
                        "matchTitle": "FCB vs ATH",
                        "formation": "4-3-3",
                        "captainId": "fcb_17",
                        "viceCaptainId": "fcb_18",
                        "playerIds": [
                            "ath_1",
                            "fcb_4",
                            "fcb_5",
                            "fcb_6",
                            "ath_3",
                            "fcb_17",
                            "fcb_18",
                            "ath_11",
                            "ath_18",
                            "ath_19",
                            "ath_17"
                        ],
                        "benchIds": [
                            "fcb_2",
                            "fcb_10",
                            "ath_10",
                            "ath_10"
                        ],
                        "totalPrice": 99.8,
                        "updatedAt": 1788254323506,
                        "matchPoints": 0
                    },
                    "PL_GW1_FUL_CHE": {
                        "fixtureId": "PL_GW1_FUL_CHE",
                        "matchTitle": "FUL vs CHE",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_10",
                        "playerIds": [
                            "che_1",
                            "ful_4",
                            "ful_5",
                            "che_3",
                            "che_7",
                            "che_9",
                            "che_10",
                            "che_12",
                            "ful_16",
                            "ful_17",
                            "ful_18"
                        ],
                        "benchIds": [
                            "ful_1",
                            "ful_9",
                            "che_15",
                            "che_15"
                        ],
                        "totalPrice": 89.3,
                        "updatedAt": 1788254323509,
                        "matchPoints": 0
                    },
                    "LALIGA_MW1_SEV_ATM": {
                        "fixtureId": "LALIGA_MW1_SEV_ATM",
                        "matchTitle": "SEV vs ATM",
                        "formation": "4-3-3",
                        "captainId": "atm_18",
                        "viceCaptainId": "sev_15",
                        "playerIds": [
                            "atm_1",
                            "sev_3",
                            "sev_8",
                            "sev_6",
                            "atm_3",
                            "atm_10",
                            "atm_12",
                            "atm_11",
                            "sev_15",
                            "sev_16",
                            "atm_18"
                        ],
                        "benchIds": [
                            "sev_1",
                            "sev_18",
                            "atm_17",
                            "atm_17"
                        ],
                        "totalPrice": 94.3,
                        "updatedAt": 1788254323513,
                        "matchPoints": 0
                    },
                    "PL_GW2_CRY_MCI": {
                        "fixtureId": "PL_GW2_CRY_MCI",
                        "matchTitle": "CRY vs MCI",
                        "formation": "4-3-3",
                        "captainId": "mci_18",
                        "viceCaptainId": "mci_6",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "mci_7",
                            "cry_10",
                            "cry_11",
                            "cry_14",
                            "cry_17",
                            "cry_18",
                            "mci_18"
                        ],
                        "benchIds": [
                            "cry_1",
                            "cry_3",
                            "mci_11",
                            "mci_11"
                        ],
                        "totalPrice": 97.5,
                        "updatedAt": 1788254323515,
                        "matchPoints": 0
                    },
                    "LALIGA_MW2_RMA_ATH": {
                        "fixtureId": "LALIGA_MW2_RMA_ATH",
                        "matchTitle": "RMA vs ATH",
                        "formation": "4-3-3",
                        "captainId": "rma_10",
                        "viceCaptainId": "ath_11",
                        "playerIds": [
                            "ath_1",
                            "rma_3",
                            "rma_6",
                            "rma_7",
                            "ath_3",
                            "rma_10",
                            "rma_11",
                            "ath_11",
                            "ath_18",
                            "ath_19",
                            "ath_17"
                        ],
                        "benchIds": [
                            "rma_1",
                            "rma_9",
                            "ath_10",
                            "ath_10"
                        ],
                        "totalPrice": 99.9,
                        "updatedAt": 1788254323521,
                        "matchPoints": 0
                    },
                    "PL_GW2_LIV_NFO": {
                        "fixtureId": "PL_GW2_LIV_NFO",
                        "matchTitle": "LIV vs NFO",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "nfo_9",
                        "playerIds": [
                            "liv_1",
                            "liv_7",
                            "nfo_5",
                            "nfo_3",
                            "nfo_4",
                            "liv_10",
                            "liv_11",
                            "nfo_9",
                            "liv_16",
                            "nfo_15",
                            "nfo_16"
                        ],
                        "benchIds": [
                            "nfo_1",
                            "liv_12",
                            "liv_12",
                            "nfo_11"
                        ],
                        "totalPrice": 92.8,
                        "updatedAt": 1788254323523,
                        "matchPoints": 0
                    },
                    "PL_GW2_TOT_NEW": {
                        "fixtureId": "PL_GW2_TOT_NEW",
                        "matchTitle": "TOT vs NEW",
                        "formation": "4-3-3",
                        "captainId": "new_3",
                        "viceCaptainId": "new_15",
                        "playerIds": [
                            "new_1",
                            "new_3",
                            "new_8",
                            "new_4",
                            "new_5",
                            "tot_9",
                            "tot_12",
                            "tot_13",
                            "tot_15",
                            "tot_16",
                            "new_15"
                        ],
                        "benchIds": [
                            "tot_1",
                            "tot_7",
                            "new_9",
                            "new_9"
                        ],
                        "totalPrice": 81,
                        "updatedAt": 1788254323525,
                        "matchPoints": 0
                    },
                    "PL_GW2_CHE_BHA": {
                        "fixtureId": "PL_GW2_CHE_BHA",
                        "matchTitle": "CHE vs BHA",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_15",
                        "playerIds": [
                            "che_1",
                            "che_3",
                            "che_7",
                            "bha_5",
                            "bha_3",
                            "che_9",
                            "bha_9",
                            "bha_10",
                            "che_15",
                            "bha_16",
                            "bha_17"
                        ],
                        "benchIds": [
                            "bha_1",
                            "che_10",
                            "che_10",
                            "bha_12"
                        ],
                        "totalPrice": 89.4,
                        "updatedAt": 1788254323527,
                        "matchPoints": 0
                    },
                    "PL_GW2_MUN_IPS": {
                        "fixtureId": "PL_GW2_MUN_IPS",
                        "matchTitle": "MUN vs IPS",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "mun_10",
                        "playerIds": [
                            "mun_1",
                            "mun_3",
                            "ips_3",
                            "ips_4",
                            "ips_5",
                            "mun_9",
                            "mun_10",
                            "ips_9",
                            "mun_16",
                            "ips_16",
                            "ips_17"
                        ],
                        "benchIds": [
                            "ips_1",
                            "mun_11",
                            "mun_11",
                            "ips_10"
                        ],
                        "totalPrice": 91,
                        "updatedAt": 1788254323530,
                        "matchPoints": 0
                    },
                    "PL_GW2_AVL_ARS": {
                        "fixtureId": "PL_GW2_AVL_ARS",
                        "formation": "4-3-3",
                        "captainId": "ars_4",
                        "viceCaptainId": "ars_5",
                        "playerIds": [
                            "ars_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "avl_9",
                            "avl_12",
                            "avl_13",
                            "avl_16",
                            "avl_17",
                            "ars_16"
                        ],
                        "benchIds": [
                            "avl_1",
                            "avl_14",
                            "ars_9",
                            "ars_9"
                        ],
                        "updatedAt": 1788326619899,
                        "matchPoints": 0
                    },
                    "LALIGA_MW4_RMA_SEV": {
                        "fixtureId": "LALIGA_MW4_RMA_SEV",
                        "formation": "3-5-2",
                        "captainId": "rma_17",
                        "viceCaptainId": "rma_16",
                        "playerIds": [
                            "sev_1",
                            "rma_3",
                            "sev_3",
                            "sev_8",
                            "rma_10",
                            "rma_11",
                            "sev_10",
                            "rma_14",
                            "sev_14",
                            "rma_17",
                            "rma_16"
                        ],
                        "benchIds": [
                            "rma_1",
                            "sev_6",
                            "rma_9",
                            "sev_15"
                        ],
                        "updatedAt": 1788326620736,
                        "matchPoints": 0
                    },
                    "PL_GW3_IPS_LIV": {
                        "fixtureId": "PL_GW3_IPS_LIV",
                        "matchTitle": "IPS vs LIV",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "liv_11",
                        "playerIds": [
                            "liv_1",
                            "ips_3",
                            "ips_4",
                            "ips_5",
                            "liv_7",
                            "ips_9",
                            "liv_10",
                            "liv_11",
                            "ips_16",
                            "ips_17",
                            "liv_16"
                        ],
                        "benchIds": [
                            "ips_1",
                            "ips_10",
                            "liv_12",
                            "liv_12"
                        ],
                        "totalPrice": 84.5,
                        "updatedAt": 1788254323537,
                        "matchPoints": 0
                    },
                    "PL_GW3_MCI_COV": {
                        "fixtureId": "PL_GW3_MCI_COV",
                        "matchTitle": "MCI vs COV",
                        "formation": "4-3-3",
                        "captainId": "mci_18",
                        "viceCaptainId": "mci_6",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "mci_7",
                            "cov_12",
                            "cov_13",
                            "cov_14",
                            "mci_18",
                            "cov_15",
                            "cov_17"
                        ],
                        "benchIds": [
                            "cov_1",
                            "mci_11",
                            "mci_11",
                            "cov_4"
                        ],
                        "totalPrice": 94,
                        "updatedAt": 1788254323538,
                        "matchPoints": 0
                    },
                    "PL_GW3_NFO_TOT": {
                        "fixtureId": "PL_GW3_NFO_TOT",
                        "matchTitle": "NFO vs TOT",
                        "formation": "4-3-3",
                        "captainId": "nfo_9",
                        "viceCaptainId": "nfo_5",
                        "playerIds": [
                            "nfo_1",
                            "nfo_5",
                            "nfo_3",
                            "nfo_4",
                            "tot_7",
                            "nfo_9",
                            "tot_9",
                            "tot_12",
                            "nfo_15",
                            "tot_15",
                            "tot_16"
                        ],
                        "benchIds": [
                            "tot_1",
                            "nfo_11",
                            "nfo_11",
                            "tot_13"
                        ],
                        "totalPrice": 84.1,
                        "updatedAt": 1788254323542,
                        "matchPoints": 0
                    },
                    "PL_GW3_EVE_MUN": {
                        "fixtureId": "PL_GW3_EVE_MUN",
                        "matchTitle": "EVE vs MUN",
                        "formation": "4-3-3",
                        "captainId": "eve_3",
                        "viceCaptainId": "eve_9",
                        "playerIds": [
                            "mun_1",
                            "eve_3",
                            "eve_4",
                            "mun_3",
                            "mun_4",
                            "eve_9",
                            "eve_10",
                            "eve_15",
                            "eve_17",
                            "mun_16",
                            "mun_17"
                        ],
                        "benchIds": [
                            "eve_1",
                            "eve_7",
                            "mun_9",
                            "mun_9"
                        ],
                        "totalPrice": 95.9,
                        "updatedAt": 1788254323546,
                        "matchPoints": 0
                    },
                    "PL_GW3_ARS_CHE": {
                        "fixtureId": "PL_GW3_ARS_CHE",
                        "matchTitle": "ARS vs CHE",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "ars_9",
                        "playerIds": [
                            "ars_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "che_3",
                            "ars_9",
                            "ars_11",
                            "che_9",
                            "che_15",
                            "che_16",
                            "che_17"
                        ],
                        "benchIds": [
                            "che_1",
                            "ars_6",
                            "ars_6",
                            "che_10"
                        ],
                        "totalPrice": 98.8,
                        "updatedAt": 1788254323550,
                        "matchPoints": 0
                    },
                    "PL_GW4_CHE_HUL": {
                        "fixtureId": "PL_GW4_CHE_HUL",
                        "matchTitle": "CHE vs HUL",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_15",
                        "playerIds": [
                            "che_1",
                            "che_3",
                            "hul_3",
                            "hul_4",
                            "hul_5",
                            "che_9",
                            "hul_10",
                            "hul_16",
                            "che_15",
                            "che_16",
                            "hul_18"
                        ],
                        "benchIds": [
                            "hul_1",
                            "che_10",
                            "che_10",
                            "hul_6"
                        ],
                        "totalPrice": 84.7,
                        "updatedAt": 1788254323552,
                        "matchPoints": 0
                    },
                    "PL_GW4_LIV_FUL": {
                        "fixtureId": "PL_GW4_LIV_FUL",
                        "matchTitle": "LIV vs FUL",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "liv_11",
                        "playerIds": [
                            "liv_1",
                            "liv_7",
                            "liv_3",
                            "ful_4",
                            "ful_5",
                            "liv_10",
                            "liv_11",
                            "ful_9",
                            "liv_16",
                            "ful_16",
                            "ful_17"
                        ],
                        "benchIds": [
                            "ful_1",
                            "liv_12",
                            "liv_12",
                            "ful_10"
                        ],
                        "totalPrice": 89,
                        "updatedAt": 1788254323555,
                        "matchPoints": 0
                    },
                    "PL_GW4_TOT_EVE": {
                        "fixtureId": "PL_GW4_TOT_EVE",
                        "matchTitle": "TOT vs EVE",
                        "formation": "4-3-3",
                        "captainId": "eve_3",
                        "viceCaptainId": "eve_9",
                        "playerIds": [
                            "eve_1",
                            "tot_7",
                            "eve_3",
                            "eve_4",
                            "eve_7",
                            "tot_9",
                            "tot_12",
                            "eve_9",
                            "tot_15",
                            "tot_16",
                            "eve_17"
                        ],
                        "benchIds": [
                            "tot_1",
                            "tot_13",
                            "eve_10",
                            "eve_10"
                        ],
                        "totalPrice": 83.7,
                        "updatedAt": 1788254323558,
                        "matchPoints": 0
                    },
                    "PL_GW4_SUN_ARS": {
                        "fixtureId": "PL_GW4_SUN_ARS",
                        "matchTitle": "SUN vs ARS",
                        "formation": "4-3-3",
                        "captainId": "ars_9",
                        "viceCaptainId": "ars_4",
                        "playerIds": [
                            "sun_1",
                            "sun_3",
                            "sun_4",
                            "ars_4",
                            "ars_5",
                            "ars_9",
                            "ars_11",
                            "ars_10",
                            "sun_18",
                            "sun_17",
                            "ars_16"
                        ],
                        "benchIds": [
                            "ars_1",
                            "sun_10",
                            "sun_10",
                            "ars_3"
                        ],
                        "totalPrice": 94.2,
                        "updatedAt": 1788254323560,
                        "matchPoints": 0
                    },
                    "PL_GW4_MUN_MCI": {
                        "fixtureId": "PL_GW4_MUN_MCI",
                        "matchTitle": "MUN vs MCI",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "mci_6",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "mci_7",
                            "mun_9",
                            "mun_10",
                            "mun_11",
                            "mun_16",
                            "mun_17",
                            "mun_18"
                        ],
                        "benchIds": [
                            "mun_1",
                            "mun_7",
                            "mci_11",
                            "mci_11"
                        ],
                        "totalPrice": 98.9,
                        "updatedAt": 1788254323564,
                        "matchPoints": 0
                    },
                    "LALIGA_MW5_FCB_SEV": {
                        "fixtureId": "LALIGA_MW5_FCB_SEV",
                        "matchTitle": "FCB vs SEV",
                        "formation": "4-3-3",
                        "captainId": "fcb_19",
                        "viceCaptainId": "fcb_17",
                        "playerIds": [
                            "sev_1",
                            "sev_3",
                            "sev_8",
                            "sev_6",
                            "sev_4",
                            "fcb_17",
                            "fcb_18",
                            "fcb_11",
                            "fcb_19",
                            "fcb_20",
                            "fcb_21"
                        ],
                        "benchIds": [
                            "fcb_2",
                            "fcb_13",
                            "sev_15",
                            "sev_15"
                        ],
                        "totalPrice": 99.9,
                        "updatedAt": 1788254323569,
                        "matchPoints": 0
                    },
                    "LALIGA_MW5_ATH_ATM": {
                        "fixtureId": "LALIGA_MW5_ATH_ATM",
                        "matchTitle": "ATH vs ATM",
                        "formation": "4-3-3",
                        "captainId": "atm_18",
                        "viceCaptainId": "ath_11",
                        "playerIds": [
                            "ath_1",
                            "ath_3",
                            "ath_4",
                            "atm_3",
                            "atm_4",
                            "ath_11",
                            "atm_10",
                            "atm_12",
                            "ath_18",
                            "ath_19",
                            "atm_18"
                        ],
                        "benchIds": [
                            "atm_1",
                            "ath_10",
                            "ath_10",
                            "atm_17"
                        ],
                        "totalPrice": 99.9,
                        "updatedAt": 1788254323573,
                        "matchPoints": 0
                    },
                    "PL_GW5_BRE_CHE": {
                        "fixtureId": "PL_GW5_BRE_CHE",
                        "matchTitle": "BRE vs CHE",
                        "formation": "4-3-3",
                        "captainId": "che_15",
                        "viceCaptainId": "bre_11",
                        "playerIds": [
                            "che_1",
                            "bre_5",
                            "bre_6",
                            "bre_3",
                            "che_3",
                            "bre_11",
                            "bre_12",
                            "bre_10",
                            "che_15",
                            "che_16",
                            "che_17"
                        ],
                        "benchIds": [
                            "bre_1",
                            "bre_15",
                            "che_9",
                            "che_9"
                        ],
                        "totalPrice": 90.4,
                        "updatedAt": 1788254323575,
                        "matchPoints": 0
                    },
                    "PL_GW5_TOT_AVL": {
                        "fixtureId": "PL_GW5_TOT_AVL",
                        "matchTitle": "TOT vs AVL",
                        "formation": "4-3-3",
                        "captainId": "tot_7",
                        "viceCaptainId": "avl_9",
                        "playerIds": [
                            "tot_1",
                            "tot_7",
                            "tot_3",
                            "avl_3",
                            "avl_4",
                            "avl_9",
                            "avl_12",
                            "avl_13",
                            "tot_15",
                            "tot_16",
                            "tot_17"
                        ],
                        "benchIds": [
                            "avl_1",
                            "tot_9",
                            "tot_12",
                            "avl_14"
                        ],
                        "totalPrice": 79.6,
                        "updatedAt": 1788254323578,
                        "matchPoints": 0
                    },
                    "PL_GW5_BHA_ARS": {
                        "fixtureId": "PL_GW5_BHA_ARS",
                        "matchTitle": "BHA vs ARS",
                        "formation": "4-3-3",
                        "captainId": "ars_9",
                        "viceCaptainId": "ars_4",
                        "playerIds": [
                            "bha_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "bha_9",
                            "bha_10",
                            "ars_9",
                            "bha_16",
                            "bha_17",
                            "ars_16"
                        ],
                        "benchIds": [
                            "ars_1",
                            "bha_5",
                            "bha_5",
                            "ars_11"
                        ],
                        "totalPrice": 90.6,
                        "updatedAt": 1788254323581,
                        "matchPoints": 0
                    },
                    "PL_GW5_BOU_LIV": {
                        "fixtureId": "PL_GW5_BOU_LIV",
                        "matchTitle": "BOU vs LIV",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "bou_10",
                        "playerIds": [
                            "liv_1",
                            "bou_5",
                            "bou_3",
                            "bou_4",
                            "liv_7",
                            "bou_10",
                            "liv_10",
                            "liv_11",
                            "bou_16",
                            "bou_17",
                            "liv_16"
                        ],
                        "benchIds": [
                            "bou_1",
                            "bou_11",
                            "liv_12",
                            "liv_12"
                        ],
                        "totalPrice": 91,
                        "updatedAt": 1788254323583,
                        "matchPoints": 0
                    },
                    "PL_GW5_MCI_SUN": {
                        "fixtureId": "PL_GW5_MCI_SUN",
                        "matchTitle": "MCI vs SUN",
                        "formation": "4-3-3",
                        "captainId": "mci_11",
                        "viceCaptainId": "mci_18",
                        "playerIds": [
                            "sun_1",
                            "mci_6",
                            "sun_3",
                            "sun_4",
                            "sun_6",
                            "mci_11",
                            "mci_12",
                            "mci_10",
                            "mci_18",
                            "sun_18",
                            "sun_17"
                        ],
                        "benchIds": [
                            "mci_1",
                            "mci_4",
                            "sun_10",
                            "sun_10"
                        ],
                        "totalPrice": 98.3,
                        "updatedAt": 1788254323584,
                        "matchPoints": 0
                    },
                    "PL_GW5_FUL_MUN": {
                        "fixtureId": "PL_GW5_FUL_MUN",
                        "matchTitle": "FUL vs MUN",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "mun_10",
                        "playerIds": [
                            "mun_1",
                            "ful_4",
                            "ful_5",
                            "ful_6",
                            "mun_3",
                            "ful_9",
                            "mun_9",
                            "mun_10",
                            "ful_16",
                            "ful_17",
                            "mun_16"
                        ],
                        "benchIds": [
                            "ful_1",
                            "ful_10",
                            "mun_11",
                            "mun_11"
                        ],
                        "totalPrice": 93.5,
                        "updatedAt": 1788254323587,
                        "matchPoints": 0
                    },
                    "LALIGA_MW8_ATM_RMA": {
                        "fixtureId": "LALIGA_MW8_ATM_RMA",
                        "matchTitle": "ATM vs RMA",
                        "formation": "4-3-3",
                        "captainId": "rma_17",
                        "viceCaptainId": "rma_10",
                        "playerIds": [
                            "atm_1",
                            "atm_3",
                            "atm_4",
                            "rma_3",
                            "rma_6",
                            "atm_10",
                            "rma_10",
                            "rma_11",
                            "atm_18",
                            "rma_17",
                            "rma_19"
                        ],
                        "benchIds": [
                            "rma_1",
                            "atm_9",
                            "atm_8",
                            "rma_9"
                        ],
                        "totalPrice": 99.6,
                        "updatedAt": 1788254323592,
                        "matchPoints": 0
                    },
                    "LALIGA_MW8_ATH_SEV": {
                        "fixtureId": "LALIGA_MW8_ATH_SEV",
                        "matchTitle": "ATH vs SEV",
                        "formation": "4-3-3",
                        "captainId": "ath_11",
                        "viceCaptainId": "ath_18",
                        "playerIds": [
                            "sev_1",
                            "ath_3",
                            "sev_3",
                            "sev_8",
                            "sev_6",
                            "ath_11",
                            "ath_10",
                            "sev_10",
                            "ath_18",
                            "ath_19",
                            "ath_17"
                        ],
                        "benchIds": [
                            "ath_1",
                            "ath_12",
                            "sev_15",
                            "sev_15"
                        ],
                        "totalPrice": 90.8,
                        "updatedAt": 1788254323595,
                        "matchPoints": 0
                    },
                    "PL_GW6_ARS_LEE": {
                        "fixtureId": "PL_GW6_ARS_LEE",
                        "matchTitle": "ARS vs LEE",
                        "formation": "4-3-3",
                        "captainId": "ars_9",
                        "viceCaptainId": "ars_4",
                        "playerIds": [
                            "lee_1",
                            "ars_4",
                            "ars_5",
                            "lee_5",
                            "lee_3",
                            "ars_9",
                            "ars_11",
                            "ars_10",
                            "ars_16",
                            "lee_16",
                            "lee_17"
                        ],
                        "benchIds": [
                            "ars_1",
                            "ars_3",
                            "lee_10",
                            "lee_10"
                        ],
                        "totalPrice": 94.2,
                        "updatedAt": 1788254323598,
                        "matchPoints": 0
                    },
                    "PL_GW6_CHE_BOU": {
                        "fixtureId": "PL_GW6_CHE_BOU",
                        "matchTitle": "CHE vs BOU",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "bou_10",
                        "playerIds": [
                            "che_1",
                            "che_3",
                            "che_7",
                            "bou_5",
                            "bou_3",
                            "che_9",
                            "che_10",
                            "bou_10",
                            "bou_16",
                            "bou_17",
                            "bou_18"
                        ],
                        "benchIds": [
                            "bou_1",
                            "che_15",
                            "che_15",
                            "bou_11"
                        ],
                        "totalPrice": 91.8,
                        "updatedAt": 1788254323600,
                        "matchPoints": 0
                    },
                    "PL_GW6_MUN_TOT": {
                        "fixtureId": "PL_GW6_MUN_TOT",
                        "matchTitle": "MUN vs TOT",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "mun_10",
                        "playerIds": [
                            "mun_1",
                            "mun_3",
                            "mun_4",
                            "tot_7",
                            "tot_3",
                            "mun_9",
                            "mun_10",
                            "tot_9",
                            "mun_16",
                            "tot_15",
                            "tot_16"
                        ],
                        "benchIds": [
                            "tot_1",
                            "mun_11",
                            "mun_11",
                            "tot_12"
                        ],
                        "totalPrice": 97.2,
                        "updatedAt": 1788254323604,
                        "matchPoints": 0
                    },
                    "PL_GW6_LIV_MCI": {
                        "fixtureId": "PL_GW6_LIV_MCI",
                        "matchTitle": "LIV vs MCI",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "mci_6",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "mci_7",
                            "liv_10",
                            "liv_11",
                            "liv_12",
                            "liv_16",
                            "liv_17",
                            "liv_18"
                        ],
                        "benchIds": [
                            "liv_1",
                            "liv_9",
                            "mci_11",
                            "mci_11"
                        ],
                        "totalPrice": 99,
                        "updatedAt": 1788254323607,
                        "matchPoints": 0
                    },
                    "PL_GW7_EVE_CHE": {
                        "fixtureId": "PL_GW7_EVE_CHE",
                        "matchTitle": "EVE vs CHE",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_15",
                        "playerIds": [
                            "che_1",
                            "eve_3",
                            "eve_4",
                            "eve_7",
                            "che_3",
                            "eve_9",
                            "eve_10",
                            "che_9",
                            "eve_17",
                            "che_15",
                            "che_16"
                        ],
                        "benchIds": [
                            "eve_1",
                            "eve_15",
                            "che_10",
                            "che_10"
                        ],
                        "totalPrice": 93.6,
                        "updatedAt": 1788254323609,
                        "matchPoints": 0
                    },
                    "PL_GW7_BRE_LIV": {
                        "fixtureId": "PL_GW7_BRE_LIV",
                        "matchTitle": "BRE vs LIV",
                        "formation": "4-3-3",
                        "captainId": "bre_11",
                        "viceCaptainId": "liv_10",
                        "playerIds": [
                            "bre_1",
                            "bre_5",
                            "bre_6",
                            "liv_7",
                            "liv_3",
                            "bre_11",
                            "liv_10",
                            "liv_11",
                            "bre_16",
                            "bre_17",
                            "liv_16"
                        ],
                        "benchIds": [
                            "liv_1",
                            "bre_12",
                            "bre_12",
                            "liv_12"
                        ],
                        "totalPrice": 90.7,
                        "updatedAt": 1788254323610,
                        "matchPoints": 0
                    },
                    "PL_GW7_MCI_IPS": {
                        "fixtureId": "PL_GW7_MCI_IPS",
                        "matchTitle": "MCI vs IPS",
                        "formation": "4-3-3",
                        "captainId": "mci_18",
                        "viceCaptainId": "mci_6",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "ips_3",
                            "ips_9",
                            "ips_10",
                            "ips_11",
                            "mci_18",
                            "ips_16",
                            "ips_17"
                        ],
                        "benchIds": [
                            "ips_1",
                            "mci_11",
                            "mci_11",
                            "ips_13"
                        ],
                        "totalPrice": 95,
                        "updatedAt": 1788254323612,
                        "matchPoints": 0
                    },
                    "PL_GW7_LEE_MUN": {
                        "fixtureId": "PL_GW7_LEE_MUN",
                        "matchTitle": "LEE vs MUN",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "mun_10",
                        "playerIds": [
                            "lee_1",
                            "lee_5",
                            "lee_3",
                            "lee_4",
                            "mun_3",
                            "mun_9",
                            "mun_10",
                            "mun_11",
                            "lee_16",
                            "lee_17",
                            "mun_16"
                        ],
                        "benchIds": [
                            "mun_1",
                            "lee_10",
                            "lee_10",
                            "mun_13"
                        ],
                        "totalPrice": 94,
                        "updatedAt": 1788254323614,
                        "matchPoints": 0
                    },
                    "PL_GW7_NFO_ARS": {
                        "fixtureId": "PL_GW7_NFO_ARS",
                        "matchTitle": "NFO vs ARS",
                        "formation": "4-3-3",
                        "captainId": "ars_9",
                        "viceCaptainId": "ars_4",
                        "playerIds": [
                            "nfo_1",
                            "nfo_5",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "nfo_9",
                            "ars_9",
                            "ars_11",
                            "nfo_15",
                            "nfo_16",
                            "ars_16"
                        ],
                        "benchIds": [
                            "ars_1",
                            "nfo_11",
                            "nfo_11",
                            "ars_6"
                        ],
                        "totalPrice": 95,
                        "updatedAt": 1788254323617,
                        "matchPoints": 0
                    },
                    "LALIGA_MW10_SEV_FCB": {
                        "fixtureId": "LALIGA_MW10_SEV_FCB",
                        "matchTitle": "SEV vs FCB",
                        "formation": "4-3-3",
                        "captainId": "fcb_19",
                        "viceCaptainId": "fcb_17",
                        "playerIds": [
                            "sev_1",
                            "sev_3",
                            "sev_8",
                            "fcb_4",
                            "fcb_5",
                            "fcb_17",
                            "fcb_18",
                            "fcb_11",
                            "sev_15",
                            "sev_16",
                            "fcb_19"
                        ],
                        "benchIds": [
                            "fcb_2",
                            "sev_7",
                            "sev_18",
                            "fcb_13"
                        ],
                        "totalPrice": 99.9,
                        "updatedAt": 1788254323621,
                        "matchPoints": 0
                    },
                    "PL_GW7_TOT_COV": {
                        "fixtureId": "PL_GW7_TOT_COV",
                        "matchTitle": "TOT vs COV",
                        "formation": "4-3-3",
                        "captainId": "tot_7",
                        "viceCaptainId": "tot_9",
                        "playerIds": [
                            "cov_1",
                            "tot_7",
                            "tot_3",
                            "tot_5",
                            "tot_8",
                            "tot_9",
                            "cov_12",
                            "cov_13",
                            "tot_15",
                            "cov_15",
                            "cov_17"
                        ],
                        "benchIds": [
                            "tot_1",
                            "tot_12",
                            "cov_4",
                            "cov_4"
                        ],
                        "totalPrice": 75.8,
                        "updatedAt": 1788254323623,
                        "matchPoints": 0
                    },
                    "PL_GW8_AVL_MCI": {
                        "fixtureId": "PL_GW8_AVL_MCI",
                        "matchTitle": "AVL vs MCI",
                        "formation": "4-3-3",
                        "captainId": "mci_18",
                        "viceCaptainId": "mci_6",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "mci_7",
                            "avl_9",
                            "avl_12",
                            "avl_13",
                            "avl_16",
                            "avl_17",
                            "mci_18"
                        ],
                        "benchIds": [
                            "avl_1",
                            "avl_14",
                            "mci_11",
                            "mci_11"
                        ],
                        "totalPrice": 97.5,
                        "updatedAt": 1788254323625,
                        "matchPoints": 0
                    },
                    "PL_GW8_ARS_EVE": {
                        "fixtureId": "PL_GW8_ARS_EVE",
                        "matchTitle": "ARS vs EVE",
                        "formation": "4-3-3",
                        "captainId": "ars_9",
                        "viceCaptainId": "ars_4",
                        "playerIds": [
                            "eve_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "ars_9",
                            "eve_9",
                            "eve_10",
                            "ars_16",
                            "eve_17",
                            "eve_18"
                        ],
                        "benchIds": [
                            "ars_1",
                            "ars_11",
                            "eve_3",
                            "eve_3"
                        ],
                        "totalPrice": 95.1,
                        "updatedAt": 1788254323627,
                        "matchPoints": 0
                    },
                    "PL_GW8_LIV_BHA": {
                        "fixtureId": "PL_GW8_LIV_BHA",
                        "matchTitle": "LIV vs BHA",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "bha_5",
                        "playerIds": [
                            "bha_1",
                            "liv_7",
                            "liv_3",
                            "bha_5",
                            "bha_3",
                            "liv_10",
                            "liv_11",
                            "bha_9",
                            "liv_16",
                            "bha_16",
                            "bha_17"
                        ],
                        "benchIds": [
                            "liv_1",
                            "liv_12",
                            "bha_10",
                            "bha_10"
                        ],
                        "totalPrice": 88.7,
                        "updatedAt": 1788254323628,
                        "matchPoints": 0
                    },
                    "PL_GW8_CHE_TOT": {
                        "fixtureId": "PL_GW8_CHE_TOT",
                        "matchTitle": "CHE vs TOT",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_10",
                        "playerIds": [
                            "che_1",
                            "che_3",
                            "che_7",
                            "tot_7",
                            "tot_3",
                            "che_9",
                            "che_10",
                            "che_12",
                            "tot_15",
                            "tot_16",
                            "tot_17"
                        ],
                        "benchIds": [
                            "tot_1",
                            "che_15",
                            "che_15",
                            "tot_9"
                        ],
                        "totalPrice": 94,
                        "updatedAt": 1788254323632,
                        "matchPoints": 0
                    },
                    "PL_GW8_MUN_BOU": {
                        "fixtureId": "PL_GW8_MUN_BOU",
                        "matchTitle": "MUN vs BOU",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "bou_10",
                        "playerIds": [
                            "mun_1",
                            "mun_3",
                            "bou_5",
                            "bou_3",
                            "bou_4",
                            "mun_9",
                            "mun_10",
                            "bou_10",
                            "mun_16",
                            "bou_16",
                            "bou_17"
                        ],
                        "benchIds": [
                            "bou_1",
                            "mun_11",
                            "mun_11",
                            "bou_11"
                        ],
                        "totalPrice": 97.5,
                        "updatedAt": 1788254323635,
                        "matchPoints": 0
                    },
                    "LALIGA_MW11_RMA_FCB": {
                        "fixtureId": "LALIGA_MW11_RMA_FCB",
                        "matchTitle": "RMA vs FCB",
                        "formation": "4-3-3",
                        "captainId": "rma_17",
                        "viceCaptainId": "fcb_17",
                        "playerIds": [
                            "rma_1",
                            "rma_3",
                            "fcb_4",
                            "fcb_5",
                            "fcb_6",
                            "fcb_17",
                            "fcb_18",
                            "fcb_11",
                            "rma_17",
                            "rma_20",
                            "rma_19"
                        ],
                        "benchIds": [
                            "rma_2",
                            "rma_9",
                            "fcb_10",
                            "fcb_8"
                        ],
                        "totalPrice": 99.9,
                        "updatedAt": 1788254323638,
                        "matchPoints": 0
                    },
                    "PL_GW9_CHE_MUN": {
                        "fixtureId": "PL_GW9_CHE_MUN",
                        "matchTitle": "CHE vs MUN",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "che_9",
                        "playerIds": [
                            "che_1",
                            "che_3",
                            "che_7",
                            "che_8",
                            "mun_3",
                            "che_9",
                            "che_10",
                            "mun_9",
                            "mun_16",
                            "mun_17",
                            "mun_18"
                        ],
                        "benchIds": [
                            "mun_1",
                            "che_15",
                            "che_15",
                            "mun_10"
                        ],
                        "totalPrice": 99.2,
                        "updatedAt": 1788254323641,
                        "matchPoints": 0
                    },
                    "PL_GW9_MCI_BHA": {
                        "fixtureId": "PL_GW9_MCI_BHA",
                        "matchTitle": "MCI vs BHA",
                        "formation": "4-3-3",
                        "captainId": "mci_18",
                        "viceCaptainId": "bha_5",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "bha_5",
                            "bha_9",
                            "bha_10",
                            "bha_12",
                            "mci_18",
                            "bha_16",
                            "bha_17"
                        ],
                        "benchIds": [
                            "bha_1",
                            "mci_11",
                            "mci_11",
                            "bha_14"
                        ],
                        "totalPrice": 95.7,
                        "updatedAt": 1788254323642,
                        "matchPoints": 0
                    },
                    "PL_GW9_TOT_CRY": {
                        "fixtureId": "PL_GW9_TOT_CRY",
                        "matchTitle": "TOT vs CRY",
                        "formation": "4-3-3",
                        "captainId": "cry_10",
                        "viceCaptainId": "tot_7",
                        "playerIds": [
                            "cry_1",
                            "tot_7",
                            "tot_3",
                            "cry_3",
                            "cry_4",
                            "tot_9",
                            "tot_12",
                            "cry_10",
                            "tot_15",
                            "cry_17",
                            "cry_18"
                        ],
                        "benchIds": [
                            "tot_1",
                            "tot_13",
                            "cry_11",
                            "cry_11"
                        ],
                        "totalPrice": 81.3,
                        "updatedAt": 1788254323643,
                        "matchPoints": 0
                    },
                    "PL_GW9_LIV_ARS": {
                        "fixtureId": "PL_GW9_LIV_ARS",
                        "matchTitle": "LIV vs ARS",
                        "formation": "4-3-3",
                        "captainId": "ars_9",
                        "viceCaptainId": "ars_4",
                        "playerIds": [
                            "ars_1",
                            "liv_7",
                            "liv_3",
                            "liv_4",
                            "ars_4",
                            "liv_10",
                            "ars_9",
                            "ars_11",
                            "liv_16",
                            "ars_16",
                            "ars_17"
                        ],
                        "benchIds": [
                            "liv_1",
                            "liv_11",
                            "ars_5",
                            "ars_5"
                        ],
                        "totalPrice": 99.1,
                        "updatedAt": 1788254323644,
                        "matchPoints": 0
                    },
                    "PL_GW10_ARS_HUL": {
                        "fixtureId": "PL_GW10_ARS_HUL",
                        "matchTitle": "ARS vs HUL",
                        "formation": "4-3-3",
                        "captainId": "ars_9",
                        "viceCaptainId": "ars_4",
                        "playerIds": [
                            "ars_1",
                            "ars_4",
                            "hul_3",
                            "hul_4",
                            "hul_5",
                            "ars_9",
                            "ars_11",
                            "hul_10",
                            "ars_16",
                            "ars_17",
                            "hul_18"
                        ],
                        "benchIds": [
                            "hul_1",
                            "ars_5",
                            "ars_5",
                            "hul_6"
                        ],
                        "totalPrice": 84.7,
                        "updatedAt": 1788254323645,
                        "matchPoints": 0
                    },
                    "PL_GW10_CRY_LIV": {
                        "fixtureId": "PL_GW10_CRY_LIV",
                        "matchTitle": "CRY vs LIV",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "liv_11",
                        "playerIds": [
                            "liv_1",
                            "cry_3",
                            "cry_4",
                            "liv_7",
                            "liv_3",
                            "cry_10",
                            "liv_10",
                            "liv_11",
                            "cry_17",
                            "cry_18",
                            "liv_16"
                        ],
                        "benchIds": [
                            "cry_1",
                            "cry_11",
                            "liv_12",
                            "liv_12"
                        ],
                        "totalPrice": 90.5,
                        "updatedAt": 1788254323646,
                        "matchPoints": 0
                    },
                    "PL_GW10_LEE_TOT": {
                        "fixtureId": "PL_GW10_LEE_TOT",
                        "matchTitle": "LEE vs TOT",
                        "formation": "4-3-3",
                        "captainId": "lee_1",
                        "viceCaptainId": "lee_5",
                        "playerIds": [
                            "lee_1",
                            "lee_5",
                            "lee_3",
                            "lee_4",
                            "lee_6",
                            "tot_9",
                            "tot_12",
                            "tot_13",
                            "lee_16",
                            "tot_15",
                            "tot_16"
                        ],
                        "benchIds": [
                            "tot_1",
                            "lee_10",
                            "lee_10",
                            "tot_7"
                        ],
                        "totalPrice": 80.2,
                        "updatedAt": 1788254323647,
                        "matchPoints": 0
                    },
                    "PL_GW10_MUN_AVL": {
                        "fixtureId": "PL_GW10_MUN_AVL",
                        "matchTitle": "MUN vs AVL",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "mun_10",
                        "playerIds": [
                            "mun_1",
                            "mun_3",
                            "mun_4",
                            "avl_3",
                            "avl_4",
                            "mun_9",
                            "mun_10",
                            "avl_9",
                            "mun_16",
                            "avl_16",
                            "avl_17"
                        ],
                        "benchIds": [
                            "avl_1",
                            "mun_11",
                            "mun_11",
                            "avl_12"
                        ],
                        "totalPrice": 95,
                        "updatedAt": 1788254323649,
                        "matchPoints": 0
                    },
                    "PL_GW10_NFO_MCI": {
                        "fixtureId": "PL_GW10_NFO_MCI",
                        "matchTitle": "NFO vs MCI",
                        "formation": "4-3-3",
                        "captainId": "mci_18",
                        "viceCaptainId": "nfo_9",
                        "playerIds": [
                            "mci_1",
                            "nfo_5",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "nfo_9",
                            "nfo_11",
                            "nfo_12",
                            "nfo_15",
                            "nfo_16",
                            "mci_18"
                        ],
                        "benchIds": [
                            "nfo_1",
                            "nfo_6",
                            "mci_11",
                            "mci_11"
                        ],
                        "totalPrice": 99.8,
                        "updatedAt": 1788254323650,
                        "matchPoints": 0
                    },
                    "PL_GW10_SUN_CHE": {
                        "fixtureId": "PL_GW10_SUN_CHE",
                        "matchTitle": "SUN vs CHE",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_15",
                        "playerIds": [
                            "sun_1",
                            "sun_3",
                            "sun_4",
                            "sun_6",
                            "che_3",
                            "che_9",
                            "che_10",
                            "che_12",
                            "sun_18",
                            "sun_17",
                            "che_15"
                        ],
                        "benchIds": [
                            "che_1",
                            "sun_10",
                            "sun_10",
                            "che_14"
                        ],
                        "totalPrice": 89.7,
                        "updatedAt": 1788254323652,
                        "matchPoints": 0
                    },
                    "LALIGA_MW13_ATM_SEV": {
                        "fixtureId": "LALIGA_MW13_ATM_SEV",
                        "matchTitle": "ATM vs SEV",
                        "formation": "4-3-3",
                        "captainId": "atm_18",
                        "viceCaptainId": "sev_15",
                        "playerIds": [
                            "atm_1",
                            "atm_3",
                            "sev_3",
                            "sev_8",
                            "sev_6",
                            "atm_10",
                            "atm_12",
                            "atm_11",
                            "atm_18",
                            "sev_15",
                            "sev_16"
                        ],
                        "benchIds": [
                            "sev_1",
                            "atm_17",
                            "atm_17",
                            "sev_18"
                        ],
                        "totalPrice": 94.3,
                        "updatedAt": 1788254323654,
                        "matchPoints": 0
                    },
                    "LALIGA_MW13_ATH_FCB": {
                        "fixtureId": "LALIGA_MW13_ATH_FCB",
                        "matchTitle": "ATH vs FCB",
                        "formation": "4-3-3",
                        "captainId": "fcb_17",
                        "viceCaptainId": "ath_11",
                        "playerIds": [
                            "fcb_2",
                            "ath_3",
                            "fcb_4",
                            "fcb_5",
                            "fcb_6",
                            "ath_11",
                            "ath_10",
                            "fcb_17",
                            "ath_18",
                            "ath_19",
                            "ath_17"
                        ],
                        "benchIds": [
                            "fcb_3",
                            "ath_8",
                            "ath_12",
                            "fcb_19"
                        ],
                        "totalPrice": 99.5,
                        "updatedAt": 1788254323657,
                        "matchPoints": 0
                    },
                    "PL_GW11_CHE_LEE": {
                        "fixtureId": "PL_GW11_CHE_LEE",
                        "matchTitle": "CHE vs LEE",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_15",
                        "playerIds": [
                            "lee_1",
                            "che_3",
                            "lee_5",
                            "lee_3",
                            "lee_4",
                            "che_9",
                            "che_10",
                            "che_12",
                            "che_15",
                            "lee_16",
                            "lee_17"
                        ],
                        "benchIds": [
                            "che_1",
                            "che_14",
                            "lee_10",
                            "lee_10"
                        ],
                        "totalPrice": 90.2,
                        "updatedAt": 1788254323658,
                        "matchPoints": 0
                    },
                    "PL_GW11_LIV_MUN": {
                        "fixtureId": "PL_GW11_LIV_MUN",
                        "matchTitle": "LIV vs MUN",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "liv_10",
                        "playerIds": [
                            "liv_1",
                            "liv_7",
                            "mun_3",
                            "mun_4",
                            "mun_7",
                            "liv_10",
                            "liv_11",
                            "mun_9",
                            "liv_16",
                            "mun_16",
                            "mun_17"
                        ],
                        "benchIds": [
                            "mun_1",
                            "liv_12",
                            "liv_12",
                            "mun_10"
                        ],
                        "totalPrice": 98.4,
                        "updatedAt": 1788254323659,
                        "matchPoints": 0
                    },
                    "PL_GW11_MCI_FUL": {
                        "fixtureId": "PL_GW11_MCI_FUL",
                        "matchTitle": "MCI vs FUL",
                        "formation": "4-3-3",
                        "captainId": "mci_18",
                        "viceCaptainId": "mci_6",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "mci_7",
                            "ful_9",
                            "ful_10",
                            "ful_11",
                            "mci_18",
                            "ful_16",
                            "ful_17"
                        ],
                        "benchIds": [
                            "ful_1",
                            "mci_11",
                            "mci_11",
                            "ful_4"
                        ],
                        "totalPrice": 97,
                        "updatedAt": 1788254323660,
                        "matchPoints": 0
                    },
                    "PL_GW11_NEW_ARS": {
                        "fixtureId": "PL_GW11_NEW_ARS",
                        "matchTitle": "NEW vs ARS",
                        "formation": "4-3-3",
                        "captainId": "ars_9",
                        "viceCaptainId": "ars_4",
                        "playerIds": [
                            "new_1",
                            "new_3",
                            "new_8",
                            "ars_4",
                            "ars_5",
                            "ars_9",
                            "ars_11",
                            "ars_10",
                            "new_15",
                            "new_17",
                            "ars_16"
                        ],
                        "benchIds": [
                            "ars_1",
                            "new_9",
                            "new_9",
                            "ars_3"
                        ],
                        "totalPrice": 94.9,
                        "updatedAt": 1788254323662,
                        "matchPoints": 0
                    },
                    "PL_GW11_TOT_IPS": {
                        "fixtureId": "PL_GW11_TOT_IPS",
                        "matchTitle": "TOT vs IPS",
                        "formation": "4-3-3",
                        "captainId": "ips_16",
                        "viceCaptainId": "ips_3",
                        "playerIds": [
                            "ips_1",
                            "tot_7",
                            "ips_3",
                            "ips_4",
                            "ips_5",
                            "tot_9",
                            "tot_12",
                            "tot_13",
                            "tot_15",
                            "ips_16",
                            "ips_17"
                        ],
                        "benchIds": [
                            "tot_1",
                            "tot_3",
                            "ips_9",
                            "ips_9"
                        ],
                        "totalPrice": 76.3,
                        "updatedAt": 1788254323664,
                        "matchPoints": 0
                    },
                    "PL_GW12_ARS_MCI": {
                        "fixtureId": "PL_GW12_ARS_MCI",
                        "matchTitle": "ARS vs MCI",
                        "formation": "4-3-3",
                        "captainId": "mci_11",
                        "viceCaptainId": "ars_9",
                        "playerIds": [
                            "mci_1",
                            "ars_4",
                            "ars_5",
                            "mci_6",
                            "mci_4",
                            "ars_9",
                            "ars_11",
                            "mci_11",
                            "ars_16",
                            "ars_18",
                            "mci_18"
                        ],
                        "benchIds": [
                            "ars_1",
                            "ars_8",
                            "mci_9",
                            "mci_17"
                        ],
                        "totalPrice": 99.8,
                        "updatedAt": 1788254323665,
                        "matchPoints": 0
                    },
                    "PL_GW12_EVE_LIV": {
                        "fixtureId": "PL_GW12_EVE_LIV",
                        "matchTitle": "EVE vs LIV",
                        "formation": "4-3-3",
                        "captainId": "eve_3",
                        "viceCaptainId": "liv_10",
                        "playerIds": [
                            "liv_1",
                            "eve_3",
                            "eve_4",
                            "eve_7",
                            "liv_7",
                            "eve_9",
                            "liv_10",
                            "liv_11",
                            "eve_17",
                            "eve_18",
                            "liv_16"
                        ],
                        "benchIds": [
                            "eve_1",
                            "eve_10",
                            "liv_12",
                            "liv_12"
                        ],
                        "totalPrice": 91.4,
                        "updatedAt": 1788254323666,
                        "matchPoints": 0
                    },
                    "PL_GW12_MUN_BRE": {
                        "fixtureId": "PL_GW12_MUN_BRE",
                        "matchTitle": "MUN vs BRE",
                        "formation": "4-3-3",
                        "captainId": "bre_11",
                        "viceCaptainId": "bre_12",
                        "playerIds": [
                            "mun_1",
                            "mun_3",
                            "bre_5",
                            "bre_6",
                            "bre_3",
                            "bre_11",
                            "bre_12",
                            "bre_10",
                            "mun_16",
                            "mun_17",
                            "mun_18"
                        ],
                        "benchIds": [
                            "bre_1",
                            "mun_9",
                            "mun_9",
                            "bre_15"
                        ],
                        "totalPrice": 92.6,
                        "updatedAt": 1788254323668,
                        "matchPoints": 0
                    },
                    "PL_GW12_NFO_CHE": {
                        "fixtureId": "PL_GW12_NFO_CHE",
                        "matchTitle": "NFO vs CHE",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "nfo_9",
                        "playerIds": [
                            "che_1",
                            "nfo_5",
                            "nfo_3",
                            "che_3",
                            "che_7",
                            "nfo_9",
                            "che_9",
                            "che_10",
                            "nfo_15",
                            "nfo_16",
                            "nfo_17"
                        ],
                        "benchIds": [
                            "nfo_1",
                            "nfo_11",
                            "che_15",
                            "che_15"
                        ],
                        "totalPrice": 94.1,
                        "updatedAt": 1788254323670,
                        "matchPoints": 0
                    },
                    "PL_GW12_SUN_TOT": {
                        "fixtureId": "PL_GW12_SUN_TOT",
                        "matchTitle": "SUN vs TOT",
                        "formation": "4-3-3",
                        "captainId": "sun_3",
                        "viceCaptainId": "sun_18",
                        "playerIds": [
                            "sun_1",
                            "sun_3",
                            "sun_4",
                            "sun_6",
                            "sun_7",
                            "tot_9",
                            "tot_12",
                            "tot_13",
                            "sun_18",
                            "tot_15",
                            "tot_16"
                        ],
                        "benchIds": [
                            "tot_1",
                            "sun_10",
                            "sun_10",
                            "tot_7"
                        ],
                        "totalPrice": 79.2,
                        "updatedAt": 1788254323671,
                        "matchPoints": 0
                    },
                    "PL_GW13_BRE_ARS": {
                        "fixtureId": "PL_GW13_BRE_ARS",
                        "matchTitle": "BRE vs ARS",
                        "formation": "4-3-3",
                        "captainId": "ars_4",
                        "viceCaptainId": "bre_11",
                        "playerIds": [
                            "ars_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "bre_11",
                            "bre_12",
                            "bre_10",
                            "bre_16",
                            "bre_17",
                            "ars_16"
                        ],
                        "benchIds": [
                            "bre_1",
                            "bre_5",
                            "ars_9",
                            "ars_9"
                        ],
                        "totalPrice": 97.3,
                        "updatedAt": 1788254323673,
                        "matchPoints": 0
                    },
                    "PL_GW13_CHE_CRY": {
                        "fixtureId": "PL_GW13_CHE_CRY",
                        "matchTitle": "CHE vs CRY",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_15",
                        "playerIds": [
                            "che_1",
                            "che_3",
                            "che_7",
                            "che_8",
                            "cry_3",
                            "che_9",
                            "cry_10",
                            "cry_11",
                            "che_15",
                            "cry_17",
                            "cry_18"
                        ],
                        "benchIds": [
                            "cry_1",
                            "che_10",
                            "che_10",
                            "cry_14"
                        ],
                        "totalPrice": 89.7,
                        "updatedAt": 1788254323674,
                        "matchPoints": 0
                    },
                    "PL_GW13_LIV_SUN": {
                        "fixtureId": "PL_GW13_LIV_SUN",
                        "matchTitle": "LIV vs SUN",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "liv_11",
                        "playerIds": [
                            "sun_1",
                            "liv_7",
                            "sun_3",
                            "sun_4",
                            "sun_6",
                            "liv_10",
                            "liv_11",
                            "liv_12",
                            "liv_16",
                            "sun_18",
                            "sun_17"
                        ],
                        "benchIds": [
                            "liv_1",
                            "liv_9",
                            "sun_10",
                            "sun_10"
                        ],
                        "totalPrice": 90,
                        "updatedAt": 1788254323675,
                        "matchPoints": 0
                    },
                    "PL_GW13_MCI_LEE": {
                        "fixtureId": "PL_GW13_MCI_LEE",
                        "matchTitle": "MCI vs LEE",
                        "formation": "4-3-3",
                        "captainId": "mci_11",
                        "viceCaptainId": "mci_18",
                        "playerIds": [
                            "lee_1",
                            "mci_6",
                            "lee_5",
                            "lee_3",
                            "lee_4",
                            "mci_11",
                            "mci_12",
                            "mci_10",
                            "mci_18",
                            "lee_16",
                            "lee_17"
                        ],
                        "benchIds": [
                            "mci_1",
                            "mci_4",
                            "lee_10",
                            "lee_10"
                        ],
                        "totalPrice": 98.8,
                        "updatedAt": 1788254323676,
                        "matchPoints": 0
                    },
                    "PL_GW13_NEW_MUN": {
                        "fixtureId": "PL_GW13_NEW_MUN",
                        "matchTitle": "NEW vs MUN",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "new_3",
                        "playerIds": [
                            "new_1",
                            "new_3",
                            "new_8",
                            "new_4",
                            "mun_3",
                            "mun_9",
                            "mun_10",
                            "mun_11",
                            "new_15",
                            "new_17",
                            "mun_16"
                        ],
                        "benchIds": [
                            "mun_1",
                            "new_9",
                            "new_9",
                            "mun_13"
                        ],
                        "totalPrice": 94.7,
                        "updatedAt": 1788254323678,
                        "matchPoints": 0
                    },
                    "PL_GW13_TOT_FUL": {
                        "fixtureId": "PL_GW13_TOT_FUL",
                        "matchTitle": "TOT vs FUL",
                        "formation": "4-3-3",
                        "captainId": "ful_9",
                        "viceCaptainId": "ful_16",
                        "playerIds": [
                            "ful_1",
                            "tot_7",
                            "tot_3",
                            "tot_5",
                            "tot_8",
                            "ful_9",
                            "ful_10",
                            "ful_11",
                            "tot_15",
                            "tot_16",
                            "ful_16"
                        ],
                        "benchIds": [
                            "tot_1",
                            "tot_9",
                            "ful_4",
                            "ful_4"
                        ],
                        "totalPrice": 79.3,
                        "updatedAt": 1788254323680,
                        "matchPoints": 0
                    },
                    "LALIGA_MW15_ATH_RMA": {
                        "fixtureId": "LALIGA_MW15_ATH_RMA",
                        "matchTitle": "ATH vs RMA",
                        "formation": "4-3-3",
                        "captainId": "rma_17",
                        "viceCaptainId": "rma_16",
                        "playerIds": [
                            "rma_1",
                            "ath_3",
                            "ath_4",
                            "rma_3",
                            "rma_6",
                            "ath_11",
                            "ath_10",
                            "ath_12",
                            "ath_18",
                            "rma_17",
                            "rma_16"
                        ],
                        "benchIds": [
                            "ath_1",
                            "ath_8",
                            "rma_9",
                            "rma_8"
                        ],
                        "totalPrice": 99.8,
                        "updatedAt": 1788254323683,
                        "matchPoints": 0
                    },
                    "PL_GW14_BRE_MCI": {
                        "fixtureId": "PL_GW14_BRE_MCI",
                        "matchTitle": "BRE vs MCI",
                        "formation": "4-3-3",
                        "captainId": "bre_11",
                        "viceCaptainId": "mci_18",
                        "playerIds": [
                            "mci_1",
                            "bre_5",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "bre_11",
                            "bre_12",
                            "bre_10",
                            "bre_16",
                            "bre_17",
                            "mci_18"
                        ],
                        "benchIds": [
                            "bre_1",
                            "bre_6",
                            "mci_11",
                            "mci_11"
                        ],
                        "totalPrice": 99.2,
                        "updatedAt": 1788254323684,
                        "matchPoints": 0
                    },
                    "PL_GW14_CHE_LIV": {
                        "fixtureId": "PL_GW14_CHE_LIV",
                        "matchTitle": "CHE vs LIV",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_15",
                        "playerIds": [
                            "liv_1",
                            "che_3",
                            "che_7",
                            "che_8",
                            "liv_7",
                            "che_9",
                            "liv_10",
                            "liv_11",
                            "che_15",
                            "che_16",
                            "liv_16"
                        ],
                        "benchIds": [
                            "liv_2",
                            "che_10",
                            "che_10",
                            "liv_12"
                        ],
                        "totalPrice": 98.1,
                        "updatedAt": 1788254323685,
                        "matchPoints": 0
                    },
                    "PL_GW14_MUN_COV": {
                        "fixtureId": "PL_GW14_MUN_COV",
                        "matchTitle": "MUN vs COV",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "mun_10",
                        "playerIds": [
                            "mun_1",
                            "mun_3",
                            "mun_4",
                            "cov_4",
                            "cov_5",
                            "mun_9",
                            "mun_10",
                            "cov_12",
                            "mun_16",
                            "cov_15",
                            "cov_17"
                        ],
                        "benchIds": [
                            "cov_1",
                            "mun_11",
                            "mun_11",
                            "cov_13"
                        ],
                        "totalPrice": 91,
                        "updatedAt": 1788254323688,
                        "matchPoints": 0
                    },
                    "PL_GW14_TOT_ARS": {
                        "fixtureId": "PL_GW14_TOT_ARS",
                        "matchTitle": "TOT vs ARS",
                        "formation": "4-3-3",
                        "captainId": "ars_4",
                        "viceCaptainId": "ars_5",
                        "playerIds": [
                            "ars_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "tot_9",
                            "tot_12",
                            "tot_13",
                            "tot_15",
                            "tot_16",
                            "ars_16"
                        ],
                        "benchIds": [
                            "tot_1",
                            "tot_7",
                            "ars_9",
                            "ars_9"
                        ],
                        "totalPrice": 95.3,
                        "updatedAt": 1788254323690,
                        "matchPoints": 0
                    },
                    "LALIGA_MW16_ATM_ATH": {
                        "fixtureId": "LALIGA_MW16_ATM_ATH",
                        "matchTitle": "ATM vs ATH",
                        "formation": "4-3-3",
                        "captainId": "atm_18",
                        "viceCaptainId": "ath_11",
                        "playerIds": [
                            "ath_1",
                            "atm_3",
                            "atm_4",
                            "ath_3",
                            "ath_4",
                            "atm_10",
                            "atm_12",
                            "ath_11",
                            "atm_18",
                            "ath_18",
                            "ath_19"
                        ],
                        "benchIds": [
                            "atm_1",
                            "atm_17",
                            "ath_10",
                            "ath_10"
                        ],
                        "totalPrice": 99.9,
                        "updatedAt": 1788254323693,
                        "matchPoints": 0
                    },
                    "PL_GW15_ARS_BOU": {
                        "fixtureId": "PL_GW15_ARS_BOU",
                        "matchTitle": "ARS vs BOU",
                        "formation": "4-3-3",
                        "captainId": "ars_4",
                        "viceCaptainId": "ars_5",
                        "playerIds": [
                            "ars_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "bou_10",
                            "bou_11",
                            "bou_12",
                            "ars_16",
                            "bou_16",
                            "bou_17"
                        ],
                        "benchIds": [
                            "bou_1",
                            "ars_9",
                            "ars_9",
                            "bou_5"
                        ],
                        "totalPrice": 96.6,
                        "updatedAt": 1788254323694,
                        "matchPoints": 0
                    },
                    "PL_GW15_CRY_MUN": {
                        "fixtureId": "PL_GW15_CRY_MUN",
                        "matchTitle": "CRY vs MUN",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "mun_10",
                        "playerIds": [
                            "mun_1",
                            "cry_3",
                            "cry_4",
                            "mun_3",
                            "mun_4",
                            "cry_10",
                            "mun_9",
                            "mun_10",
                            "cry_17",
                            "cry_18",
                            "mun_16"
                        ],
                        "benchIds": [
                            "cry_1",
                            "cry_11",
                            "mun_11",
                            "mun_11"
                        ],
                        "totalPrice": 95.5,
                        "updatedAt": 1788254323696,
                        "matchPoints": 0
                    },
                    "PL_GW15_HUL_TOT": {
                        "fixtureId": "PL_GW15_HUL_TOT",
                        "matchTitle": "HUL vs TOT",
                        "formation": "4-3-3",
                        "captainId": "hul_1",
                        "viceCaptainId": "hul_3",
                        "playerIds": [
                            "hul_1",
                            "hul_3",
                            "hul_4",
                            "hul_5",
                            "tot_7",
                            "hul_10",
                            "tot_9",
                            "tot_12",
                            "hul_18",
                            "tot_15",
                            "tot_16"
                        ],
                        "benchIds": [
                            "tot_1",
                            "hul_6",
                            "hul_6",
                            "tot_13"
                        ],
                        "totalPrice": 73.3,
                        "updatedAt": 1788254323697,
                        "matchPoints": 0
                    },
                    "PL_GW15_LIV_LEE": {
                        "fixtureId": "PL_GW15_LIV_LEE",
                        "matchTitle": "LIV vs LEE",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "liv_11",
                        "playerIds": [
                            "lee_1",
                            "liv_7",
                            "lee_5",
                            "lee_3",
                            "lee_4",
                            "liv_10",
                            "liv_11",
                            "liv_12",
                            "liv_16",
                            "lee_16",
                            "lee_17"
                        ],
                        "benchIds": [
                            "liv_1",
                            "liv_9",
                            "lee_10",
                            "lee_10"
                        ],
                        "totalPrice": 90.5,
                        "updatedAt": 1788254323698,
                        "matchPoints": 0
                    },
                    "PL_GW15_MCI_CHE": {
                        "fixtureId": "PL_GW15_MCI_CHE",
                        "matchTitle": "MCI vs CHE",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_15",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "mci_7",
                            "che_9",
                            "che_10",
                            "che_12",
                            "che_15",
                            "che_16",
                            "che_17"
                        ],
                        "benchIds": [
                            "che_1",
                            "mci_11",
                            "mci_11",
                            "che_14"
                        ],
                        "totalPrice": 96.6,
                        "updatedAt": 1788254323700,
                        "matchPoints": 0
                    },
                    "PL_GW16_ARS_MUN": {
                        "fixtureId": "PL_GW16_ARS_MUN",
                        "matchTitle": "ARS vs MUN",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "ars_9",
                        "playerIds": [
                            "ars_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "mun_3",
                            "ars_9",
                            "ars_11",
                            "mun_9",
                            "mun_16",
                            "mun_17",
                            "mun_18"
                        ],
                        "benchIds": [
                            "mun_1",
                            "ars_6",
                            "ars_6",
                            "mun_10"
                        ],
                        "totalPrice": 99.1,
                        "updatedAt": 1788254323702,
                        "matchPoints": 0
                    },
                    "PL_GW16_CHE_AVL": {
                        "fixtureId": "PL_GW16_CHE_AVL",
                        "matchTitle": "CHE vs AVL",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_10",
                        "playerIds": [
                            "avl_1",
                            "che_3",
                            "che_7",
                            "che_8",
                            "avl_3",
                            "che_9",
                            "che_10",
                            "che_12",
                            "avl_16",
                            "avl_17",
                            "avl_15"
                        ],
                        "benchIds": [
                            "avl_2",
                            "che_15",
                            "che_15",
                            "avl_9"
                        ],
                        "totalPrice": 93.6,
                        "updatedAt": 1788254323705,
                        "matchPoints": 0
                    },
                    "PL_GW16_LIV_TOT": {
                        "fixtureId": "PL_GW16_LIV_TOT",
                        "matchTitle": "LIV vs TOT",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "liv_11",
                        "playerIds": [
                            "liv_1",
                            "liv_7",
                            "liv_3",
                            "tot_7",
                            "tot_3",
                            "liv_10",
                            "liv_11",
                            "tot_9",
                            "liv_16",
                            "tot_15",
                            "tot_16"
                        ],
                        "benchIds": [
                            "tot_1",
                            "liv_12",
                            "liv_12",
                            "tot_12"
                        ],
                        "totalPrice": 92.2,
                        "updatedAt": 1788254323706,
                        "matchPoints": 0
                    },
                    "PL_GW16_MCI_HUL": {
                        "fixtureId": "PL_GW16_MCI_HUL",
                        "matchTitle": "MCI vs HUL",
                        "formation": "4-3-3",
                        "captainId": "mci_11",
                        "viceCaptainId": "hul_3",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "hul_3",
                            "hul_4",
                            "hul_5",
                            "mci_11",
                            "hul_10",
                            "hul_16",
                            "mci_18",
                            "mci_12",
                            "mci_10"
                        ],
                        "benchIds": [
                            "hul_1",
                            "mci_4",
                            "mci_4",
                            "hul_6"
                        ],
                        "totalPrice": 91.9,
                        "updatedAt": 1788254323709,
                        "matchPoints": 0
                    },
                    "LALIGA_MW18_FCB_ATM": {
                        "fixtureId": "LALIGA_MW18_FCB_ATM",
                        "matchTitle": "FCB vs ATM",
                        "formation": "4-3-3",
                        "captainId": "fcb_17",
                        "viceCaptainId": "fcb_18",
                        "playerIds": [
                            "fcb_2",
                            "fcb_4",
                            "fcb_5",
                            "fcb_6",
                            "atm_3",
                            "fcb_17",
                            "fcb_18",
                            "atm_10",
                            "atm_18",
                            "atm_17",
                            "atm_19"
                        ],
                        "benchIds": [
                            "fcb_3",
                            "fcb_10",
                            "atm_12",
                            "atm_12"
                        ],
                        "totalPrice": 99.7,
                        "updatedAt": 1788254323713,
                        "matchPoints": 0
                    },
                    "LALIGA_MW18_SEV_ATH": {
                        "fixtureId": "LALIGA_MW18_SEV_ATH",
                        "matchTitle": "SEV vs ATH",
                        "formation": "4-3-3",
                        "captainId": "ath_11",
                        "viceCaptainId": "ath_18",
                        "playerIds": [
                            "sev_1",
                            "sev_3",
                            "sev_8",
                            "sev_6",
                            "ath_3",
                            "sev_10",
                            "ath_11",
                            "ath_10",
                            "ath_18",
                            "ath_19",
                            "ath_17"
                        ],
                        "benchIds": [
                            "ath_1",
                            "sev_15",
                            "sev_15",
                            "ath_12"
                        ],
                        "totalPrice": 90.8,
                        "updatedAt": 1788254323716,
                        "matchPoints": 0
                    },
                    "PL_GW17_COV_CHE": {
                        "fixtureId": "PL_GW17_COV_CHE",
                        "matchTitle": "COV vs CHE",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_10",
                        "playerIds": [
                            "che_1",
                            "cov_4",
                            "cov_5",
                            "che_3",
                            "che_7",
                            "che_9",
                            "che_10",
                            "che_12",
                            "cov_15",
                            "cov_17",
                            "cov_18"
                        ],
                        "benchIds": [
                            "cov_1",
                            "cov_12",
                            "che_15",
                            "che_15"
                        ],
                        "totalPrice": 87.3,
                        "updatedAt": 1788254323719,
                        "matchPoints": 0
                    },
                    "PL_GW17_CRY_ARS": {
                        "fixtureId": "PL_GW17_CRY_ARS",
                        "matchTitle": "CRY vs ARS",
                        "formation": "4-3-3",
                        "captainId": "ars_4",
                        "viceCaptainId": "ars_5",
                        "playerIds": [
                            "ars_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "cry_10",
                            "cry_11",
                            "cry_14",
                            "cry_17",
                            "cry_18",
                            "ars_16"
                        ],
                        "benchIds": [
                            "cry_1",
                            "cry_3",
                            "ars_9",
                            "ars_9"
                        ],
                        "totalPrice": 94.6,
                        "updatedAt": 1788254323721,
                        "matchPoints": 0
                    },
                    "PL_GW17_HUL_LIV": {
                        "fixtureId": "PL_GW17_HUL_LIV",
                        "matchTitle": "HUL vs LIV",
                        "formation": "4-3-3",
                        "captainId": "hul_3",
                        "viceCaptainId": "liv_10",
                        "playerIds": [
                            "liv_1",
                            "hul_3",
                            "hul_4",
                            "hul_5",
                            "hul_6",
                            "hul_10",
                            "liv_10",
                            "liv_11",
                            "hul_18",
                            "liv_16",
                            "liv_17"
                        ],
                        "benchIds": [
                            "hul_1",
                            "hul_16",
                            "liv_12",
                            "liv_12"
                        ],
                        "totalPrice": 84.6,
                        "updatedAt": 1788254323723,
                        "matchPoints": 0
                    },
                    "PL_GW17_MUN_NFO": {
                        "fixtureId": "PL_GW17_MUN_NFO",
                        "matchTitle": "MUN vs NFO",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "nfo_9",
                        "playerIds": [
                            "mun_1",
                            "mun_3",
                            "nfo_5",
                            "nfo_3",
                            "nfo_4",
                            "mun_9",
                            "mun_10",
                            "nfo_9",
                            "mun_16",
                            "nfo_15",
                            "nfo_16"
                        ],
                        "benchIds": [
                            "nfo_1",
                            "mun_11",
                            "mun_11",
                            "nfo_11"
                        ],
                        "totalPrice": 99.3,
                        "updatedAt": 1788254323726,
                        "matchPoints": 0
                    },
                    "PL_GW17_NEW_MCI": {
                        "fixtureId": "PL_GW17_NEW_MCI",
                        "matchTitle": "NEW vs MCI",
                        "formation": "4-3-3",
                        "captainId": "mci_11",
                        "viceCaptainId": "mci_18",
                        "playerIds": [
                            "new_1",
                            "new_3",
                            "new_8",
                            "new_4",
                            "mci_6",
                            "mci_11",
                            "mci_12",
                            "mci_10",
                            "new_15",
                            "new_17",
                            "mci_18"
                        ],
                        "benchIds": [
                            "mci_1",
                            "new_9",
                            "new_9",
                            "mci_4"
                        ],
                        "totalPrice": 99.5,
                        "updatedAt": 1788254323728,
                        "matchPoints": 0
                    },
                    "PL_GW17_TOT_BOU": {
                        "fixtureId": "PL_GW17_TOT_BOU",
                        "matchTitle": "TOT vs BOU",
                        "formation": "4-3-3",
                        "captainId": "bou_10",
                        "viceCaptainId": "bou_16",
                        "playerIds": [
                            "bou_1",
                            "tot_7",
                            "bou_5",
                            "bou_3",
                            "bou_4",
                            "tot_9",
                            "tot_12",
                            "bou_10",
                            "tot_15",
                            "tot_16",
                            "bou_16"
                        ],
                        "benchIds": [
                            "tot_1",
                            "tot_13",
                            "bou_11",
                            "bou_11"
                        ],
                        "totalPrice": 82.7,
                        "updatedAt": 1788254323731,
                        "matchPoints": 0
                    },
                    "PL_GW18_AVL_LIV": {
                        "fixtureId": "PL_GW18_AVL_LIV",
                        "matchTitle": "AVL vs LIV",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "liv_11",
                        "playerIds": [
                            "liv_1",
                            "avl_3",
                            "avl_4",
                            "liv_7",
                            "liv_3",
                            "avl_9",
                            "liv_10",
                            "liv_11",
                            "avl_16",
                            "avl_17",
                            "liv_16"
                        ],
                        "benchIds": [
                            "avl_1",
                            "avl_12",
                            "liv_12",
                            "liv_12"
                        ],
                        "totalPrice": 90,
                        "updatedAt": 1788254323733,
                        "matchPoints": 0
                    },
                    "PL_GW18_EVE_MCI": {
                        "fixtureId": "PL_GW18_EVE_MCI",
                        "matchTitle": "EVE vs MCI",
                        "formation": "4-3-3",
                        "captainId": "eve_3",
                        "viceCaptainId": "mci_18",
                        "playerIds": [
                            "mci_1",
                            "eve_3",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "eve_9",
                            "eve_10",
                            "eve_15",
                            "eve_17",
                            "eve_18",
                            "mci_18"
                        ],
                        "benchIds": [
                            "eve_1",
                            "eve_4",
                            "mci_11",
                            "mci_11"
                        ],
                        "totalPrice": 99.9,
                        "updatedAt": 1788254323734,
                        "matchPoints": 0
                    },
                    "PL_GW18_FUL_ARS": {
                        "fixtureId": "PL_GW18_FUL_ARS",
                        "matchTitle": "FUL vs ARS",
                        "formation": "4-3-3",
                        "captainId": "ars_9",
                        "viceCaptainId": "ars_4",
                        "playerIds": [
                            "ful_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "ful_9",
                            "ful_10",
                            "ars_9",
                            "ful_16",
                            "ful_17",
                            "ars_16"
                        ],
                        "benchIds": [
                            "ars_1",
                            "ful_4",
                            "ful_4",
                            "ars_11"
                        ],
                        "totalPrice": 90.2,
                        "updatedAt": 1788254323738,
                        "matchPoints": 0
                    },
                    "PL_GW18_IPS_CHE": {
                        "fixtureId": "PL_GW18_IPS_CHE",
                        "matchTitle": "IPS vs CHE",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_10",
                        "playerIds": [
                            "che_1",
                            "ips_3",
                            "ips_4",
                            "che_3",
                            "che_7",
                            "che_9",
                            "che_10",
                            "che_12",
                            "ips_16",
                            "ips_17",
                            "ips_18"
                        ],
                        "benchIds": [
                            "ips_1",
                            "ips_9",
                            "che_15",
                            "che_15"
                        ],
                        "totalPrice": 87.3,
                        "updatedAt": 1788254323741,
                        "matchPoints": 0
                    },
                    "PL_GW18_MUN_SUN": {
                        "fixtureId": "PL_GW18_MUN_SUN",
                        "matchTitle": "MUN vs SUN",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "mun_10",
                        "playerIds": [
                            "sun_1",
                            "mun_3",
                            "sun_3",
                            "sun_4",
                            "sun_6",
                            "mun_9",
                            "mun_10",
                            "mun_11",
                            "mun_16",
                            "sun_18",
                            "sun_17"
                        ],
                        "benchIds": [
                            "mun_1",
                            "mun_13",
                            "sun_10",
                            "sun_10"
                        ],
                        "totalPrice": 93.5,
                        "updatedAt": 1788254323744,
                        "matchPoints": 0
                    },
                    "PL_GW18_TOT_BHA": {
                        "fixtureId": "PL_GW18_TOT_BHA",
                        "matchTitle": "TOT vs BHA",
                        "formation": "4-3-3",
                        "captainId": "bha_9",
                        "viceCaptainId": "bha_10",
                        "playerIds": [
                            "bha_1",
                            "tot_7",
                            "tot_3",
                            "tot_5",
                            "tot_8",
                            "bha_9",
                            "bha_10",
                            "bha_12",
                            "tot_15",
                            "bha_16",
                            "bha_17"
                        ],
                        "benchIds": [
                            "tot_1",
                            "tot_9",
                            "bha_5",
                            "bha_5"
                        ],
                        "totalPrice": 78.8,
                        "updatedAt": 1788254323747,
                        "matchPoints": 0
                    },
                    "PL_GW19_ARS_IPS": {
                        "fixtureId": "PL_GW19_ARS_IPS",
                        "matchTitle": "ARS vs IPS",
                        "formation": "4-3-3",
                        "captainId": "ars_4",
                        "viceCaptainId": "ars_5",
                        "playerIds": [
                            "ars_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "ips_9",
                            "ips_10",
                            "ips_11",
                            "ars_16",
                            "ips_16",
                            "ips_17"
                        ],
                        "benchIds": [
                            "ips_1",
                            "ars_9",
                            "ars_9",
                            "ips_3"
                        ],
                        "totalPrice": 92.6,
                        "updatedAt": 1788254323751,
                        "matchPoints": 0
                    },
                    "PL_GW19_BHA_MUN": {
                        "fixtureId": "PL_GW19_BHA_MUN",
                        "matchTitle": "BHA vs MUN",
                        "formation": "4-3-3",
                        "captainId": "bha_5",
                        "viceCaptainId": "bha_9",
                        "playerIds": [
                            "mun_1",
                            "bha_5",
                            "mun_3",
                            "mun_4",
                            "mun_7",
                            "bha_9",
                            "bha_10",
                            "bha_12",
                            "bha_16",
                            "bha_17",
                            "mun_16"
                        ],
                        "benchIds": [
                            "bha_1",
                            "bha_14",
                            "mun_9",
                            "mun_9"
                        ],
                        "totalPrice": 91.7,
                        "updatedAt": 1788254323754,
                        "matchPoints": 0
                    },
                    "PL_GW19_CHE_NEW": {
                        "fixtureId": "PL_GW19_CHE_NEW",
                        "matchTitle": "CHE vs NEW",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_15",
                        "playerIds": [
                            "new_1",
                            "che_3",
                            "new_3",
                            "new_8",
                            "new_4",
                            "che_9",
                            "che_10",
                            "che_12",
                            "che_15",
                            "new_15",
                            "new_17"
                        ],
                        "benchIds": [
                            "che_1",
                            "che_14",
                            "new_9",
                            "new_9"
                        ],
                        "totalPrice": 90.9,
                        "updatedAt": 1788254323756,
                        "matchPoints": 0
                    },
                    "PL_GW19_LIV_COV": {
                        "fixtureId": "PL_GW19_LIV_COV",
                        "matchTitle": "LIV vs COV",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "liv_11",
                        "playerIds": [
                            "liv_1",
                            "liv_7",
                            "liv_3",
                            "cov_4",
                            "cov_5",
                            "liv_10",
                            "liv_11",
                            "cov_12",
                            "liv_16",
                            "cov_15",
                            "cov_17"
                        ],
                        "benchIds": [
                            "cov_1",
                            "liv_12",
                            "liv_12",
                            "cov_13"
                        ],
                        "totalPrice": 86,
                        "updatedAt": 1788254323757,
                        "matchPoints": 0
                    },
                    "PL_GW19_MCI_TOT": {
                        "fixtureId": "PL_GW19_MCI_TOT",
                        "matchTitle": "MCI vs TOT",
                        "formation": "4-3-3",
                        "captainId": "mci_18",
                        "viceCaptainId": "mci_6",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "mci_7",
                            "tot_9",
                            "tot_12",
                            "tot_13",
                            "mci_18",
                            "tot_15",
                            "tot_16"
                        ],
                        "benchIds": [
                            "tot_1",
                            "mci_11",
                            "mci_11",
                            "tot_7"
                        ],
                        "totalPrice": 98.2,
                        "updatedAt": 1788254323758,
                        "matchPoints": 0
                    },
                    "PL_GW20_ARS_BRE": {
                        "fixtureId": "PL_GW20_ARS_BRE",
                        "matchTitle": "ARS vs BRE",
                        "formation": "4-3-3",
                        "captainId": "ars_4",
                        "viceCaptainId": "bre_11",
                        "playerIds": [
                            "ars_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "bre_11",
                            "bre_12",
                            "bre_10",
                            "ars_16",
                            "bre_16",
                            "bre_17"
                        ],
                        "benchIds": [
                            "bre_1",
                            "ars_9",
                            "ars_9",
                            "bre_5"
                        ],
                        "totalPrice": 97.3,
                        "updatedAt": 1788254323760,
                        "matchPoints": 0
                    },
                    "PL_GW20_CRY_CHE": {
                        "fixtureId": "PL_GW20_CRY_CHE",
                        "matchTitle": "CRY vs CHE",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_15",
                        "playerIds": [
                            "che_1",
                            "cry_3",
                            "che_3",
                            "che_7",
                            "che_8",
                            "cry_10",
                            "cry_11",
                            "che_9",
                            "cry_17",
                            "cry_18",
                            "che_15"
                        ],
                        "benchIds": [
                            "cry_1",
                            "cry_14",
                            "che_10",
                            "che_10"
                        ],
                        "totalPrice": 89.7,
                        "updatedAt": 1788254323763,
                        "matchPoints": 0
                    },
                    "PL_GW20_FUL_TOT": {
                        "fixtureId": "PL_GW20_FUL_TOT",
                        "matchTitle": "FUL vs TOT",
                        "formation": "4-3-3",
                        "captainId": "ful_9",
                        "viceCaptainId": "ful_16",
                        "playerIds": [
                            "ful_1",
                            "tot_7",
                            "tot_3",
                            "tot_5",
                            "tot_8",
                            "ful_9",
                            "ful_10",
                            "ful_11",
                            "ful_16",
                            "tot_15",
                            "tot_16"
                        ],
                        "benchIds": [
                            "tot_1",
                            "ful_4",
                            "ful_4",
                            "tot_9"
                        ],
                        "totalPrice": 79.3,
                        "updatedAt": 1788254323765,
                        "matchPoints": 0
                    },
                    "PL_GW20_LEE_MCI": {
                        "fixtureId": "PL_GW20_LEE_MCI",
                        "matchTitle": "LEE vs MCI",
                        "formation": "4-3-3",
                        "captainId": "mci_11",
                        "viceCaptainId": "mci_18",
                        "playerIds": [
                            "lee_1",
                            "lee_5",
                            "lee_3",
                            "lee_4",
                            "mci_6",
                            "mci_11",
                            "mci_12",
                            "mci_10",
                            "lee_16",
                            "lee_17",
                            "mci_18"
                        ],
                        "benchIds": [
                            "mci_1",
                            "lee_10",
                            "lee_10",
                            "mci_4"
                        ],
                        "totalPrice": 98.8,
                        "updatedAt": 1788254323765,
                        "matchPoints": 0
                    },
                    "PL_GW20_MUN_NEW": {
                        "fixtureId": "PL_GW20_MUN_NEW",
                        "matchTitle": "MUN vs NEW",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "new_3",
                        "playerIds": [
                            "new_1",
                            "mun_3",
                            "new_3",
                            "new_8",
                            "new_4",
                            "mun_9",
                            "mun_10",
                            "mun_11",
                            "mun_16",
                            "new_15",
                            "new_17"
                        ],
                        "benchIds": [
                            "mun_1",
                            "mun_13",
                            "new_9",
                            "new_9"
                        ],
                        "totalPrice": 94.7,
                        "updatedAt": 1788254323768,
                        "matchPoints": 0
                    },
                    "PL_GW20_SUN_LIV": {
                        "fixtureId": "PL_GW20_SUN_LIV",
                        "matchTitle": "SUN vs LIV",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "liv_11",
                        "playerIds": [
                            "sun_1",
                            "sun_3",
                            "sun_4",
                            "sun_6",
                            "liv_7",
                            "liv_10",
                            "liv_11",
                            "liv_12",
                            "sun_18",
                            "sun_17",
                            "liv_16"
                        ],
                        "benchIds": [
                            "liv_1",
                            "sun_10",
                            "sun_10",
                            "liv_9"
                        ],
                        "totalPrice": 90,
                        "updatedAt": 1788254323768,
                        "matchPoints": 0
                    },
                    "PL_GW21_AVL_MUN": {
                        "fixtureId": "PL_GW21_AVL_MUN",
                        "matchTitle": "AVL vs MUN",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "mun_10",
                        "playerIds": [
                            "mun_1",
                            "avl_3",
                            "avl_4",
                            "mun_3",
                            "mun_4",
                            "avl_9",
                            "mun_9",
                            "mun_10",
                            "avl_16",
                            "avl_17",
                            "mun_16"
                        ],
                        "benchIds": [
                            "avl_1",
                            "avl_12",
                            "mun_11",
                            "mun_11"
                        ],
                        "totalPrice": 95,
                        "updatedAt": 1788254323770,
                        "matchPoints": 0
                    },
                    "PL_GW21_CHE_SUN": {
                        "fixtureId": "PL_GW21_CHE_SUN",
                        "matchTitle": "CHE vs SUN",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_15",
                        "playerIds": [
                            "sun_1",
                            "che_3",
                            "sun_3",
                            "sun_4",
                            "sun_6",
                            "che_9",
                            "che_10",
                            "che_12",
                            "che_15",
                            "sun_18",
                            "sun_17"
                        ],
                        "benchIds": [
                            "che_1",
                            "che_14",
                            "sun_10",
                            "sun_10"
                        ],
                        "totalPrice": 89.7,
                        "updatedAt": 1788254323772,
                        "matchPoints": 0
                    },
                    "PL_GW21_HUL_ARS": {
                        "fixtureId": "PL_GW21_HUL_ARS",
                        "matchTitle": "HUL vs ARS",
                        "formation": "4-3-3",
                        "captainId": "ars_9",
                        "viceCaptainId": "ars_4",
                        "playerIds": [
                            "ars_1",
                            "hul_3",
                            "hul_4",
                            "hul_5",
                            "ars_4",
                            "hul_10",
                            "ars_9",
                            "ars_11",
                            "hul_18",
                            "ars_16",
                            "ars_17"
                        ],
                        "benchIds": [
                            "hul_1",
                            "hul_6",
                            "ars_5",
                            "ars_5"
                        ],
                        "totalPrice": 84.7,
                        "updatedAt": 1788254323773,
                        "matchPoints": 0
                    },
                    "PL_GW21_LIV_CRY": {
                        "fixtureId": "PL_GW21_LIV_CRY",
                        "matchTitle": "LIV vs CRY",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "liv_11",
                        "playerIds": [
                            "liv_1",
                            "liv_7",
                            "liv_3",
                            "cry_3",
                            "cry_4",
                            "liv_10",
                            "liv_11",
                            "cry_10",
                            "liv_16",
                            "cry_17",
                            "cry_18"
                        ],
                        "benchIds": [
                            "cry_1",
                            "liv_12",
                            "liv_12",
                            "cry_11"
                        ],
                        "totalPrice": 90.5,
                        "updatedAt": 1788254323774,
                        "matchPoints": 0
                    },
                    "PL_GW21_MCI_NFO": {
                        "fixtureId": "PL_GW21_MCI_NFO",
                        "matchTitle": "MCI vs NFO",
                        "formation": "4-3-3",
                        "captainId": "mci_11",
                        "viceCaptainId": "mci_18",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "nfo_5",
                            "nfo_3",
                            "nfo_4",
                            "mci_11",
                            "mci_12",
                            "nfo_9",
                            "mci_18",
                            "nfo_15",
                            "nfo_16"
                        ],
                        "benchIds": [
                            "nfo_1",
                            "mci_4",
                            "mci_4",
                            "nfo_11"
                        ],
                        "totalPrice": 99.6,
                        "updatedAt": 1788254323775,
                        "matchPoints": 0
                    },
                    "PL_GW21_TOT_LEE": {
                        "fixtureId": "PL_GW21_TOT_LEE",
                        "matchTitle": "TOT vs LEE",
                        "formation": "4-3-3",
                        "captainId": "lee_1",
                        "viceCaptainId": "lee_5",
                        "playerIds": [
                            "lee_1",
                            "lee_5",
                            "lee_3",
                            "lee_4",
                            "lee_6",
                            "tot_9",
                            "tot_12",
                            "tot_13",
                            "tot_15",
                            "tot_16",
                            "lee_16"
                        ],
                        "benchIds": [
                            "tot_1",
                            "tot_7",
                            "lee_10",
                            "lee_10"
                        ],
                        "totalPrice": 80.2,
                        "updatedAt": 1788254323777,
                        "matchPoints": 0
                    },
                    "LALIGA_MW20_SEV_RMA": {
                        "fixtureId": "LALIGA_MW20_SEV_RMA",
                        "matchTitle": "SEV vs RMA",
                        "formation": "4-3-3",
                        "captainId": "rma_17",
                        "viceCaptainId": "rma_10",
                        "playerIds": [
                            "rma_1",
                            "sev_3",
                            "sev_8",
                            "sev_6",
                            "rma_3",
                            "sev_10",
                            "rma_10",
                            "rma_11",
                            "sev_15",
                            "sev_16",
                            "rma_17"
                        ],
                        "benchIds": [
                            "sev_1",
                            "sev_7",
                            "rma_9",
                            "rma_16"
                        ],
                        "totalPrice": 100,
                        "updatedAt": 1788254323780,
                        "matchPoints": 0
                    },
                    "PL_GW22_ARS_NEW": {
                        "fixtureId": "PL_GW22_ARS_NEW",
                        "matchTitle": "ARS vs NEW",
                        "formation": "4-3-3",
                        "captainId": "ars_9",
                        "viceCaptainId": "ars_4",
                        "playerIds": [
                            "new_1",
                            "ars_4",
                            "ars_5",
                            "new_3",
                            "new_8",
                            "ars_9",
                            "ars_11",
                            "ars_10",
                            "ars_16",
                            "new_15",
                            "new_17"
                        ],
                        "benchIds": [
                            "ars_1",
                            "ars_3",
                            "new_9",
                            "new_9"
                        ],
                        "totalPrice": 94.9,
                        "updatedAt": 1788254323783,
                        "matchPoints": 0
                    },
                    "PL_GW22_BHA_MCI": {
                        "fixtureId": "PL_GW22_BHA_MCI",
                        "matchTitle": "BHA vs MCI",
                        "formation": "4-3-3",
                        "captainId": "mci_18",
                        "viceCaptainId": "bha_5",
                        "playerIds": [
                            "mci_1",
                            "bha_5",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "bha_9",
                            "bha_10",
                            "bha_12",
                            "bha_16",
                            "bha_17",
                            "mci_18"
                        ],
                        "benchIds": [
                            "bha_1",
                            "bha_14",
                            "mci_11",
                            "mci_11"
                        ],
                        "totalPrice": 95.7,
                        "updatedAt": 1788254323784,
                        "matchPoints": 0
                    },
                    "PL_GW22_CRY_TOT": {
                        "fixtureId": "PL_GW22_CRY_TOT",
                        "matchTitle": "CRY vs TOT",
                        "formation": "4-3-3",
                        "captainId": "cry_10",
                        "viceCaptainId": "tot_7",
                        "playerIds": [
                            "cry_1",
                            "cry_3",
                            "cry_4",
                            "tot_7",
                            "tot_3",
                            "cry_10",
                            "tot_9",
                            "tot_12",
                            "cry_17",
                            "cry_18",
                            "tot_15"
                        ],
                        "benchIds": [
                            "tot_1",
                            "cry_11",
                            "cry_11",
                            "tot_13"
                        ],
                        "totalPrice": 81.3,
                        "updatedAt": 1788254323786,
                        "matchPoints": 0
                    },
                    "PL_GW22_LEE_CHE": {
                        "fixtureId": "PL_GW22_LEE_CHE",
                        "matchTitle": "LEE vs CHE",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_15",
                        "playerIds": [
                            "lee_1",
                            "lee_5",
                            "lee_3",
                            "lee_4",
                            "che_3",
                            "che_9",
                            "che_10",
                            "che_12",
                            "lee_16",
                            "lee_17",
                            "che_15"
                        ],
                        "benchIds": [
                            "che_1",
                            "lee_10",
                            "lee_10",
                            "che_14"
                        ],
                        "totalPrice": 90.2,
                        "updatedAt": 1788254323787,
                        "matchPoints": 0
                    },
                    "PL_GW22_MUN_LIV": {
                        "fixtureId": "PL_GW22_MUN_LIV",
                        "matchTitle": "MUN vs LIV",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "liv_10",
                        "playerIds": [
                            "liv_1",
                            "mun_3",
                            "mun_4",
                            "mun_7",
                            "liv_7",
                            "mun_9",
                            "liv_10",
                            "liv_11",
                            "mun_16",
                            "mun_17",
                            "liv_16"
                        ],
                        "benchIds": [
                            "mun_1",
                            "mun_10",
                            "liv_12",
                            "liv_12"
                        ],
                        "totalPrice": 98.4,
                        "updatedAt": 1788254323789,
                        "matchPoints": 0
                    },
                    "PL_GW23_BRE_MUN": {
                        "fixtureId": "PL_GW23_BRE_MUN",
                        "matchTitle": "BRE vs MUN",
                        "formation": "4-3-3",
                        "captainId": "bre_11",
                        "viceCaptainId": "bre_12",
                        "playerIds": [
                            "mun_1",
                            "bre_5",
                            "bre_6",
                            "bre_3",
                            "mun_3",
                            "bre_11",
                            "bre_12",
                            "bre_10",
                            "mun_16",
                            "mun_17",
                            "mun_18"
                        ],
                        "benchIds": [
                            "bre_1",
                            "bre_15",
                            "mun_9",
                            "mun_9"
                        ],
                        "totalPrice": 92.6,
                        "updatedAt": 1788254323791,
                        "matchPoints": 0
                    },
                    "PL_GW23_CHE_NFO": {
                        "fixtureId": "PL_GW23_CHE_NFO",
                        "matchTitle": "CHE vs NFO",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "nfo_9",
                        "playerIds": [
                            "che_1",
                            "che_3",
                            "che_7",
                            "nfo_5",
                            "nfo_3",
                            "che_9",
                            "che_10",
                            "nfo_9",
                            "nfo_15",
                            "nfo_16",
                            "nfo_17"
                        ],
                        "benchIds": [
                            "nfo_1",
                            "che_15",
                            "che_15",
                            "nfo_11"
                        ],
                        "totalPrice": 94.1,
                        "updatedAt": 1788254323793,
                        "matchPoints": 0
                    },
                    "PL_GW23_LIV_EVE": {
                        "fixtureId": "PL_GW23_LIV_EVE",
                        "matchTitle": "LIV vs EVE",
                        "formation": "4-3-3",
                        "captainId": "eve_3",
                        "viceCaptainId": "liv_10",
                        "playerIds": [
                            "liv_1",
                            "liv_7",
                            "eve_3",
                            "eve_4",
                            "eve_7",
                            "liv_10",
                            "liv_11",
                            "eve_9",
                            "liv_16",
                            "eve_17",
                            "eve_18"
                        ],
                        "benchIds": [
                            "eve_1",
                            "liv_12",
                            "liv_12",
                            "eve_10"
                        ],
                        "totalPrice": 91.4,
                        "updatedAt": 1788254323794,
                        "matchPoints": 0
                    },
                    "PL_GW23_MCI_ARS": {
                        "fixtureId": "PL_GW23_MCI_ARS",
                        "matchTitle": "MCI vs ARS",
                        "formation": "4-3-3",
                        "captainId": "mci_11",
                        "viceCaptainId": "ars_9",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "mci_4",
                            "ars_4",
                            "ars_5",
                            "mci_11",
                            "ars_9",
                            "ars_11",
                            "mci_18",
                            "ars_16",
                            "ars_18"
                        ],
                        "benchIds": [
                            "ars_1",
                            "mci_9",
                            "mci_17",
                            "ars_8"
                        ],
                        "totalPrice": 99.8,
                        "updatedAt": 1788254323795,
                        "matchPoints": 0
                    },
                    "PL_GW23_TOT_SUN": {
                        "fixtureId": "PL_GW23_TOT_SUN",
                        "matchTitle": "TOT vs SUN",
                        "formation": "4-3-3",
                        "captainId": "sun_3",
                        "viceCaptainId": "sun_18",
                        "playerIds": [
                            "sun_1",
                            "sun_3",
                            "sun_4",
                            "sun_6",
                            "sun_7",
                            "tot_9",
                            "tot_12",
                            "tot_13",
                            "tot_15",
                            "tot_16",
                            "sun_18"
                        ],
                        "benchIds": [
                            "tot_1",
                            "tot_7",
                            "sun_10",
                            "sun_10"
                        ],
                        "totalPrice": 79.2,
                        "updatedAt": 1788254323797,
                        "matchPoints": 0
                    },
                    "PL_GW24_ARS_LIV": {
                        "fixtureId": "PL_GW24_ARS_LIV",
                        "matchTitle": "ARS vs LIV",
                        "formation": "4-3-3",
                        "captainId": "ars_9",
                        "viceCaptainId": "ars_4",
                        "playerIds": [
                            "ars_1",
                            "ars_4",
                            "liv_7",
                            "liv_3",
                            "liv_4",
                            "ars_9",
                            "ars_11",
                            "liv_10",
                            "ars_16",
                            "ars_17",
                            "liv_16"
                        ],
                        "benchIds": [
                            "liv_1",
                            "ars_5",
                            "ars_5",
                            "liv_11"
                        ],
                        "totalPrice": 99.1,
                        "updatedAt": 1788254323798,
                        "matchPoints": 0
                    },
                    "PL_GW24_FUL_MCI": {
                        "fixtureId": "PL_GW24_FUL_MCI",
                        "matchTitle": "FUL vs MCI",
                        "formation": "4-3-3",
                        "captainId": "mci_18",
                        "viceCaptainId": "mci_6",
                        "playerIds": [
                            "mci_1",
                            "ful_4",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "ful_9",
                            "ful_10",
                            "ful_11",
                            "ful_16",
                            "ful_17",
                            "mci_18"
                        ],
                        "benchIds": [
                            "ful_1",
                            "ful_14",
                            "mci_11",
                            "mci_11"
                        ],
                        "totalPrice": 96.5,
                        "updatedAt": 1788254323799,
                        "matchPoints": 0
                    },
                    "PL_GW24_IPS_TOT": {
                        "fixtureId": "PL_GW24_IPS_TOT",
                        "matchTitle": "IPS vs TOT",
                        "formation": "4-3-3",
                        "captainId": "ips_9",
                        "viceCaptainId": "ips_16",
                        "playerIds": [
                            "ips_1",
                            "ips_3",
                            "ips_4",
                            "tot_7",
                            "tot_3",
                            "ips_9",
                            "tot_9",
                            "tot_12",
                            "ips_16",
                            "ips_17",
                            "tot_15"
                        ],
                        "benchIds": [
                            "tot_1",
                            "ips_10",
                            "ips_10",
                            "tot_13"
                        ],
                        "totalPrice": 77.8,
                        "updatedAt": 1788254323802,
                        "matchPoints": 0
                    },
                    "PL_GW24_MUN_CHE": {
                        "fixtureId": "PL_GW24_MUN_CHE",
                        "matchTitle": "MUN vs CHE",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "che_9",
                        "playerIds": [
                            "che_1",
                            "mun_3",
                            "che_3",
                            "che_7",
                            "che_8",
                            "mun_9",
                            "che_9",
                            "che_10",
                            "mun_16",
                            "mun_17",
                            "mun_18"
                        ],
                        "benchIds": [
                            "mun_1",
                            "mun_10",
                            "che_15",
                            "che_15"
                        ],
                        "totalPrice": 99.2,
                        "updatedAt": 1788254323804,
                        "matchPoints": 0
                    },
                    "LALIGA_MW23_RMA_ATM": {
                        "fixtureId": "LALIGA_MW23_RMA_ATM",
                        "matchTitle": "RMA vs ATM",
                        "formation": "4-3-3",
                        "captainId": "rma_10",
                        "viceCaptainId": "atm_18",
                        "playerIds": [
                            "rma_1",
                            "rma_3",
                            "rma_6",
                            "atm_3",
                            "atm_4",
                            "rma_10",
                            "rma_11",
                            "atm_10",
                            "atm_18",
                            "atm_17",
                            "atm_19"
                        ],
                        "benchIds": [
                            "rma_2",
                            "rma_9",
                            "atm_12",
                            "atm_12"
                        ],
                        "totalPrice": 99.7,
                        "updatedAt": 1788254323807,
                        "matchPoints": 0
                    },
                    "PL_GW25_COV_LIV": {
                        "fixtureId": "PL_GW25_COV_LIV",
                        "matchTitle": "COV vs LIV",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "liv_11",
                        "playerIds": [
                            "liv_1",
                            "cov_4",
                            "cov_5",
                            "cov_6",
                            "liv_7",
                            "cov_12",
                            "liv_10",
                            "liv_11",
                            "cov_15",
                            "cov_17",
                            "liv_16"
                        ],
                        "benchIds": [
                            "cov_1",
                            "cov_13",
                            "liv_12",
                            "liv_12"
                        ],
                        "totalPrice": 83.5,
                        "updatedAt": 1788254323808,
                        "matchPoints": 0
                    },
                    "PL_GW25_IPS_ARS": {
                        "fixtureId": "PL_GW25_IPS_ARS",
                        "matchTitle": "IPS vs ARS",
                        "formation": "4-3-3",
                        "captainId": "ars_4",
                        "viceCaptainId": "ars_5",
                        "playerIds": [
                            "ars_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "ips_9",
                            "ips_10",
                            "ips_11",
                            "ips_16",
                            "ips_17",
                            "ars_16"
                        ],
                        "benchIds": [
                            "ips_1",
                            "ips_3",
                            "ars_9",
                            "ars_9"
                        ],
                        "totalPrice": 92.6,
                        "updatedAt": 1788254323810,
                        "matchPoints": 0
                    },
                    "PL_GW25_MUN_BHA": {
                        "fixtureId": "PL_GW25_MUN_BHA",
                        "matchTitle": "MUN vs BHA",
                        "formation": "4-3-3",
                        "captainId": "bha_5",
                        "viceCaptainId": "bha_9",
                        "playerIds": [
                            "mun_1",
                            "mun_3",
                            "mun_4",
                            "mun_7",
                            "bha_5",
                            "bha_9",
                            "bha_10",
                            "bha_12",
                            "mun_16",
                            "bha_16",
                            "bha_17"
                        ],
                        "benchIds": [
                            "bha_1",
                            "mun_9",
                            "mun_9",
                            "bha_14"
                        ],
                        "totalPrice": 91.7,
                        "updatedAt": 1788254323812,
                        "matchPoints": 0
                    },
                    "PL_GW25_NEW_CHE": {
                        "fixtureId": "PL_GW25_NEW_CHE",
                        "matchTitle": "NEW vs CHE",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_15",
                        "playerIds": [
                            "new_1",
                            "new_3",
                            "new_8",
                            "new_4",
                            "che_3",
                            "che_9",
                            "che_10",
                            "che_12",
                            "new_15",
                            "new_17",
                            "che_15"
                        ],
                        "benchIds": [
                            "che_1",
                            "new_9",
                            "new_9",
                            "che_14"
                        ],
                        "totalPrice": 90.9,
                        "updatedAt": 1788254323814,
                        "matchPoints": 0
                    },
                    "PL_GW25_TOT_MCI": {
                        "fixtureId": "PL_GW25_TOT_MCI",
                        "matchTitle": "TOT vs MCI",
                        "formation": "4-3-3",
                        "captainId": "mci_18",
                        "viceCaptainId": "mci_6",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "mci_7",
                            "tot_9",
                            "tot_12",
                            "tot_13",
                            "tot_15",
                            "tot_16",
                            "mci_18"
                        ],
                        "benchIds": [
                            "tot_1",
                            "tot_7",
                            "mci_11",
                            "mci_11"
                        ],
                        "totalPrice": 98.2,
                        "updatedAt": 1788254323815,
                        "matchPoints": 0
                    },
                    "PL_GW26_ARS_FUL": {
                        "fixtureId": "PL_GW26_ARS_FUL",
                        "matchTitle": "ARS vs FUL",
                        "formation": "4-3-3",
                        "captainId": "ars_9",
                        "viceCaptainId": "ars_4",
                        "playerIds": [
                            "ful_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "ars_9",
                            "ful_9",
                            "ful_10",
                            "ars_16",
                            "ful_16",
                            "ful_17"
                        ],
                        "benchIds": [
                            "ars_1",
                            "ars_11",
                            "ful_4",
                            "ful_4"
                        ],
                        "totalPrice": 90.2,
                        "updatedAt": 1788254323817,
                        "matchPoints": 0
                    },
                    "PL_GW26_BHA_TOT": {
                        "fixtureId": "PL_GW26_BHA_TOT",
                        "matchTitle": "BHA vs TOT",
                        "formation": "4-3-3",
                        "captainId": "bha_9",
                        "viceCaptainId": "bha_10",
                        "playerIds": [
                            "bha_1",
                            "tot_7",
                            "tot_3",
                            "tot_5",
                            "tot_8",
                            "bha_9",
                            "bha_10",
                            "bha_12",
                            "bha_16",
                            "bha_17",
                            "tot_15"
                        ],
                        "benchIds": [
                            "tot_1",
                            "bha_5",
                            "bha_5",
                            "tot_9"
                        ],
                        "totalPrice": 78.8,
                        "updatedAt": 1788254323820,
                        "matchPoints": 0
                    },
                    "PL_GW26_CHE_IPS": {
                        "fixtureId": "PL_GW26_CHE_IPS",
                        "matchTitle": "CHE vs IPS",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_10",
                        "playerIds": [
                            "che_1",
                            "che_3",
                            "che_7",
                            "ips_3",
                            "ips_4",
                            "che_9",
                            "che_10",
                            "che_12",
                            "ips_16",
                            "ips_17",
                            "ips_18"
                        ],
                        "benchIds": [
                            "ips_1",
                            "che_15",
                            "che_15",
                            "ips_9"
                        ],
                        "totalPrice": 87.3,
                        "updatedAt": 1788254323822,
                        "matchPoints": 0
                    },
                    "PL_GW26_LIV_HUL": {
                        "fixtureId": "PL_GW26_LIV_HUL",
                        "matchTitle": "LIV vs HUL",
                        "formation": "4-3-3",
                        "captainId": "hul_3",
                        "viceCaptainId": "liv_10",
                        "playerIds": [
                            "liv_1",
                            "hul_3",
                            "hul_4",
                            "hul_5",
                            "hul_6",
                            "liv_10",
                            "liv_11",
                            "hul_10",
                            "liv_16",
                            "liv_17",
                            "hul_18"
                        ],
                        "benchIds": [
                            "hul_1",
                            "liv_12",
                            "liv_12",
                            "hul_16"
                        ],
                        "totalPrice": 84.6,
                        "updatedAt": 1788254323823,
                        "matchPoints": 0
                    },
                    "PL_GW26_MCI_NEW": {
                        "fixtureId": "PL_GW26_MCI_NEW",
                        "matchTitle": "MCI vs NEW",
                        "formation": "4-3-3",
                        "captainId": "mci_11",
                        "viceCaptainId": "mci_18",
                        "playerIds": [
                            "new_1",
                            "mci_6",
                            "new_3",
                            "new_8",
                            "new_4",
                            "mci_11",
                            "mci_12",
                            "mci_10",
                            "mci_18",
                            "new_15",
                            "new_17"
                        ],
                        "benchIds": [
                            "mci_1",
                            "mci_4",
                            "new_9",
                            "new_9"
                        ],
                        "totalPrice": 99.5,
                        "updatedAt": 1788254323825,
                        "matchPoints": 0
                    },
                    "PL_GW26_NFO_MUN": {
                        "fixtureId": "PL_GW26_NFO_MUN",
                        "matchTitle": "NFO vs MUN",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "nfo_9",
                        "playerIds": [
                            "nfo_1",
                            "nfo_5",
                            "nfo_3",
                            "nfo_4",
                            "mun_3",
                            "nfo_9",
                            "mun_9",
                            "mun_10",
                            "nfo_15",
                            "mun_16",
                            "mun_17"
                        ],
                        "benchIds": [
                            "mun_1",
                            "nfo_11",
                            "nfo_11",
                            "mun_11"
                        ],
                        "totalPrice": 96.3,
                        "updatedAt": 1788254323827,
                        "matchPoints": 0
                    },
                    "PL_GW27_AVL_CHE": {
                        "fixtureId": "PL_GW27_AVL_CHE",
                        "matchTitle": "AVL vs CHE",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_10",
                        "playerIds": [
                            "avl_1",
                            "avl_3",
                            "che_3",
                            "che_7",
                            "che_8",
                            "che_9",
                            "che_10",
                            "che_12",
                            "avl_16",
                            "avl_17",
                            "avl_15"
                        ],
                        "benchIds": [
                            "avl_2",
                            "avl_9",
                            "che_15",
                            "che_15"
                        ],
                        "totalPrice": 93.6,
                        "updatedAt": 1788254323829,
                        "matchPoints": 0
                    },
                    "PL_GW27_HUL_MCI": {
                        "fixtureId": "PL_GW27_HUL_MCI",
                        "matchTitle": "HUL vs MCI",
                        "formation": "4-3-3",
                        "captainId": "mci_11",
                        "viceCaptainId": "hul_1",
                        "playerIds": [
                            "hul_1",
                            "hul_3",
                            "hul_4",
                            "hul_5",
                            "mci_6",
                            "hul_10",
                            "hul_16",
                            "mci_11",
                            "mci_18",
                            "mci_12",
                            "mci_10"
                        ],
                        "benchIds": [
                            "mci_1",
                            "hul_6",
                            "hul_6",
                            "mci_4"
                        ],
                        "totalPrice": 89.9,
                        "updatedAt": 1788254323832,
                        "matchPoints": 0
                    },
                    "PL_GW27_MUN_ARS": {
                        "fixtureId": "PL_GW27_MUN_ARS",
                        "matchTitle": "MUN vs ARS",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "ars_9",
                        "playerIds": [
                            "ars_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "mun_9",
                            "mun_10",
                            "ars_9",
                            "mun_16",
                            "mun_17",
                            "mun_18"
                        ],
                        "benchIds": [
                            "mun_1",
                            "mun_7",
                            "ars_11",
                            "ars_11"
                        ],
                        "totalPrice": 99.7,
                        "updatedAt": 1788254323834,
                        "matchPoints": 0
                    },
                    "PL_GW27_TOT_LIV": {
                        "fixtureId": "PL_GW27_TOT_LIV",
                        "matchTitle": "TOT vs LIV",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "liv_11",
                        "playerIds": [
                            "liv_1",
                            "tot_7",
                            "tot_3",
                            "liv_7",
                            "liv_3",
                            "tot_9",
                            "liv_10",
                            "liv_11",
                            "tot_15",
                            "tot_16",
                            "liv_16"
                        ],
                        "benchIds": [
                            "tot_1",
                            "tot_12",
                            "liv_12",
                            "liv_12"
                        ],
                        "totalPrice": 92.2,
                        "updatedAt": 1788254323835,
                        "matchPoints": 0
                    },
                    "PL_GW28_ARS_CRY": {
                        "fixtureId": "PL_GW28_ARS_CRY",
                        "matchTitle": "ARS vs CRY",
                        "formation": "4-3-3",
                        "captainId": "ars_4",
                        "viceCaptainId": "ars_5",
                        "playerIds": [
                            "ars_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "cry_10",
                            "cry_11",
                            "cry_14",
                            "ars_16",
                            "cry_17",
                            "cry_18"
                        ],
                        "benchIds": [
                            "cry_1",
                            "ars_9",
                            "ars_9",
                            "cry_3"
                        ],
                        "totalPrice": 94.6,
                        "updatedAt": 1788254323837,
                        "matchPoints": 0
                    },
                    "PL_GW28_BOU_TOT": {
                        "fixtureId": "PL_GW28_BOU_TOT",
                        "matchTitle": "BOU vs TOT",
                        "formation": "4-3-3",
                        "captainId": "bou_10",
                        "viceCaptainId": "bou_16",
                        "playerIds": [
                            "bou_1",
                            "bou_5",
                            "bou_3",
                            "bou_4",
                            "tot_7",
                            "bou_10",
                            "tot_9",
                            "tot_12",
                            "bou_16",
                            "tot_15",
                            "tot_16"
                        ],
                        "benchIds": [
                            "tot_1",
                            "bou_11",
                            "bou_11",
                            "tot_13"
                        ],
                        "totalPrice": 82.7,
                        "updatedAt": 1788254323839,
                        "matchPoints": 0
                    },
                    "PL_GW28_CHE_COV": {
                        "fixtureId": "PL_GW28_CHE_COV",
                        "matchTitle": "CHE vs COV",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_10",
                        "playerIds": [
                            "che_1",
                            "che_3",
                            "che_7",
                            "cov_4",
                            "cov_5",
                            "che_9",
                            "che_10",
                            "che_12",
                            "cov_15",
                            "cov_17",
                            "cov_18"
                        ],
                        "benchIds": [
                            "cov_1",
                            "che_15",
                            "che_15",
                            "cov_12"
                        ],
                        "totalPrice": 87.3,
                        "updatedAt": 1788254323841,
                        "matchPoints": 0
                    },
                    "PL_GW28_LIV_AVL": {
                        "fixtureId": "PL_GW28_LIV_AVL",
                        "matchTitle": "LIV vs AVL",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "liv_11",
                        "playerIds": [
                            "liv_1",
                            "liv_7",
                            "liv_3",
                            "avl_3",
                            "avl_4",
                            "liv_10",
                            "liv_11",
                            "avl_9",
                            "liv_16",
                            "avl_16",
                            "avl_17"
                        ],
                        "benchIds": [
                            "avl_1",
                            "liv_12",
                            "liv_12",
                            "avl_12"
                        ],
                        "totalPrice": 90,
                        "updatedAt": 1788254323843,
                        "matchPoints": 0
                    },
                    "PL_GW28_MCI_EVE": {
                        "fixtureId": "PL_GW28_MCI_EVE",
                        "matchTitle": "MCI vs EVE",
                        "formation": "4-3-3",
                        "captainId": "eve_3",
                        "viceCaptainId": "mci_18",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "eve_3",
                            "eve_9",
                            "eve_10",
                            "eve_15",
                            "mci_18",
                            "eve_17",
                            "eve_18"
                        ],
                        "benchIds": [
                            "eve_1",
                            "mci_11",
                            "mci_11",
                            "eve_4"
                        ],
                        "totalPrice": 99.9,
                        "updatedAt": 1788254323843,
                        "matchPoints": 0
                    },
                    "PL_GW28_SUN_MUN": {
                        "fixtureId": "PL_GW28_SUN_MUN",
                        "matchTitle": "SUN vs MUN",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "mun_10",
                        "playerIds": [
                            "sun_1",
                            "sun_3",
                            "sun_4",
                            "sun_6",
                            "mun_3",
                            "mun_9",
                            "mun_10",
                            "mun_11",
                            "sun_18",
                            "sun_17",
                            "mun_16"
                        ],
                        "benchIds": [
                            "mun_1",
                            "sun_10",
                            "sun_10",
                            "mun_13"
                        ],
                        "totalPrice": 93.5,
                        "updatedAt": 1788254323846,
                        "matchPoints": 0
                    },
                    "PL_GW29_CHE_ARS": {
                        "fixtureId": "PL_GW29_CHE_ARS",
                        "matchTitle": "CHE vs ARS",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "ars_9",
                        "playerIds": [
                            "che_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "che_9",
                            "che_10",
                            "ars_9",
                            "che_15",
                            "che_16",
                            "ars_16"
                        ],
                        "benchIds": [
                            "ars_1",
                            "che_7",
                            "che_14",
                            "ars_11"
                        ],
                        "totalPrice": 99.3,
                        "updatedAt": 1788254323848,
                        "matchPoints": 0
                    },
                    "PL_GW29_COV_MCI": {
                        "fixtureId": "PL_GW29_COV_MCI",
                        "matchTitle": "COV vs MCI",
                        "formation": "4-3-3",
                        "captainId": "mci_18",
                        "viceCaptainId": "mci_6",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "mci_7",
                            "cov_12",
                            "cov_13",
                            "cov_14",
                            "cov_15",
                            "cov_17",
                            "mci_18"
                        ],
                        "benchIds": [
                            "cov_1",
                            "cov_4",
                            "mci_11",
                            "mci_11"
                        ],
                        "totalPrice": 94,
                        "updatedAt": 1788254323849,
                        "matchPoints": 0
                    },
                    "PL_GW29_LIV_IPS": {
                        "fixtureId": "PL_GW29_LIV_IPS",
                        "matchTitle": "LIV vs IPS",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "liv_11",
                        "playerIds": [
                            "liv_1",
                            "liv_7",
                            "ips_3",
                            "ips_4",
                            "ips_5",
                            "liv_10",
                            "liv_11",
                            "ips_9",
                            "liv_16",
                            "ips_16",
                            "ips_17"
                        ],
                        "benchIds": [
                            "ips_1",
                            "liv_12",
                            "liv_12",
                            "ips_10"
                        ],
                        "totalPrice": 84.5,
                        "updatedAt": 1788254323851,
                        "matchPoints": 0
                    },
                    "PL_GW29_MUN_EVE": {
                        "fixtureId": "PL_GW29_MUN_EVE",
                        "matchTitle": "MUN vs EVE",
                        "formation": "4-3-3",
                        "captainId": "eve_3",
                        "viceCaptainId": "eve_9",
                        "playerIds": [
                            "mun_1",
                            "mun_3",
                            "mun_4",
                            "eve_3",
                            "eve_4",
                            "eve_9",
                            "eve_10",
                            "eve_15",
                            "mun_16",
                            "mun_17",
                            "eve_17"
                        ],
                        "benchIds": [
                            "eve_1",
                            "mun_9",
                            "mun_9",
                            "eve_7"
                        ],
                        "totalPrice": 95.9,
                        "updatedAt": 1788254323852,
                        "matchPoints": 0
                    },
                    "PL_GW29_TOT_NFO": {
                        "fixtureId": "PL_GW29_TOT_NFO",
                        "matchTitle": "TOT vs NFO",
                        "formation": "4-3-3",
                        "captainId": "nfo_9",
                        "viceCaptainId": "nfo_5",
                        "playerIds": [
                            "nfo_1",
                            "nfo_5",
                            "nfo_3",
                            "nfo_4",
                            "nfo_6",
                            "tot_9",
                            "tot_12",
                            "nfo_9",
                            "tot_15",
                            "tot_16",
                            "tot_17"
                        ],
                        "benchIds": [
                            "tot_1",
                            "tot_7",
                            "nfo_11",
                            "nfo_11"
                        ],
                        "totalPrice": 83.5,
                        "updatedAt": 1788254323855,
                        "matchPoints": 0
                    },
                    "LALIGA_MW27_ATM_FCB": {
                        "fixtureId": "LALIGA_MW27_ATM_FCB",
                        "matchTitle": "ATM vs FCB",
                        "formation": "4-3-3",
                        "captainId": "fcb_17",
                        "viceCaptainId": "fcb_18",
                        "playerIds": [
                            "atm_1",
                            "atm_3",
                            "fcb_4",
                            "fcb_5",
                            "fcb_6",
                            "fcb_17",
                            "fcb_18",
                            "fcb_11",
                            "atm_18",
                            "atm_17",
                            "atm_19"
                        ],
                        "benchIds": [
                            "fcb_2",
                            "atm_9",
                            "atm_8",
                            "fcb_10"
                        ],
                        "totalPrice": 99.5,
                        "updatedAt": 1788254323859,
                        "matchPoints": 0
                    },
                    "PL_GW30_ARS_SUN": {
                        "fixtureId": "PL_GW30_ARS_SUN",
                        "matchTitle": "ARS vs SUN",
                        "formation": "4-3-3",
                        "captainId": "ars_4",
                        "viceCaptainId": "ars_5",
                        "playerIds": [
                            "ars_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "sun_10",
                            "sun_13",
                            "sun_9",
                            "ars_16",
                            "sun_18",
                            "sun_17"
                        ],
                        "benchIds": [
                            "sun_1",
                            "ars_9",
                            "ars_9",
                            "sun_3"
                        ],
                        "totalPrice": 95.5,
                        "updatedAt": 1788254323861,
                        "matchPoints": 0
                    },
                    "PL_GW30_EVE_TOT": {
                        "fixtureId": "PL_GW30_EVE_TOT",
                        "matchTitle": "EVE vs TOT",
                        "formation": "4-3-3",
                        "captainId": "eve_3",
                        "viceCaptainId": "eve_9",
                        "playerIds": [
                            "eve_1",
                            "eve_3",
                            "eve_4",
                            "eve_7",
                            "tot_7",
                            "eve_9",
                            "tot_9",
                            "tot_12",
                            "eve_17",
                            "tot_15",
                            "tot_16"
                        ],
                        "benchIds": [
                            "tot_1",
                            "eve_10",
                            "eve_10",
                            "tot_13"
                        ],
                        "totalPrice": 83.7,
                        "updatedAt": 1788254323863,
                        "matchPoints": 0
                    },
                    "PL_GW30_FUL_LIV": {
                        "fixtureId": "PL_GW30_FUL_LIV",
                        "matchTitle": "FUL vs LIV",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "liv_11",
                        "playerIds": [
                            "ful_1",
                            "ful_4",
                            "ful_5",
                            "ful_6",
                            "liv_7",
                            "liv_10",
                            "liv_11",
                            "liv_12",
                            "ful_16",
                            "ful_17",
                            "liv_16"
                        ],
                        "benchIds": [
                            "liv_1",
                            "ful_9",
                            "ful_9",
                            "liv_9"
                        ],
                        "totalPrice": 88,
                        "updatedAt": 1788254323864,
                        "matchPoints": 0
                    },
                    "PL_GW30_HUL_CHE": {
                        "fixtureId": "PL_GW30_HUL_CHE",
                        "matchTitle": "HUL vs CHE",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_15",
                        "playerIds": [
                            "che_1",
                            "hul_3",
                            "hul_4",
                            "hul_5",
                            "che_3",
                            "hul_10",
                            "hul_16",
                            "che_9",
                            "hul_18",
                            "che_15",
                            "che_16"
                        ],
                        "benchIds": [
                            "hul_1",
                            "hul_6",
                            "che_10",
                            "che_10"
                        ],
                        "totalPrice": 84.7,
                        "updatedAt": 1788254323865,
                        "matchPoints": 0
                    },
                    "PL_GW30_MCI_MUN": {
                        "fixtureId": "PL_GW30_MCI_MUN",
                        "matchTitle": "MCI vs MUN",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "mci_11",
                        "playerIds": [
                            "mun_1",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "mun_3",
                            "mci_11",
                            "mci_12",
                            "mun_9",
                            "mun_16",
                            "mun_17",
                            "mun_18"
                        ],
                        "benchIds": [
                            "mci_1",
                            "mci_9",
                            "mun_10",
                            "mun_10"
                        ],
                        "totalPrice": 97.2,
                        "updatedAt": 1788254323869,
                        "matchPoints": 0
                    },
                    "PL_GW31_BOU_MCI": {
                        "fixtureId": "PL_GW31_BOU_MCI",
                        "matchTitle": "BOU vs MCI",
                        "formation": "4-3-3",
                        "captainId": "mci_18",
                        "viceCaptainId": "bou_10",
                        "playerIds": [
                            "mci_1",
                            "bou_5",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "bou_10",
                            "bou_11",
                            "bou_12",
                            "bou_16",
                            "bou_17",
                            "mci_18"
                        ],
                        "benchIds": [
                            "bou_1",
                            "bou_13",
                            "mci_11",
                            "mci_11"
                        ],
                        "totalPrice": 99,
                        "updatedAt": 1788254323870,
                        "matchPoints": 0
                    },
                    "PL_GW31_CHE_FUL": {
                        "fixtureId": "PL_GW31_CHE_FUL",
                        "matchTitle": "CHE vs FUL",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_10",
                        "playerIds": [
                            "che_1",
                            "che_3",
                            "che_7",
                            "ful_4",
                            "ful_5",
                            "che_9",
                            "che_10",
                            "che_12",
                            "ful_16",
                            "ful_17",
                            "ful_18"
                        ],
                        "benchIds": [
                            "ful_1",
                            "che_15",
                            "che_15",
                            "ful_9"
                        ],
                        "totalPrice": 89.3,
                        "updatedAt": 1788254323874,
                        "matchPoints": 0
                    },
                    "PL_GW31_COV_ARS": {
                        "fixtureId": "PL_GW31_COV_ARS",
                        "matchTitle": "COV vs ARS",
                        "formation": "4-3-3",
                        "captainId": "ars_9",
                        "viceCaptainId": "ars_4",
                        "playerIds": [
                            "cov_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "cov_12",
                            "cov_13",
                            "ars_9",
                            "cov_15",
                            "cov_17",
                            "ars_16"
                        ],
                        "benchIds": [
                            "ars_1",
                            "cov_4",
                            "cov_4",
                            "ars_11"
                        ],
                        "totalPrice": 87.2,
                        "updatedAt": 1788254323876,
                        "matchPoints": 0
                    },
                    "PL_GW31_LIV_NEW": {
                        "fixtureId": "PL_GW31_LIV_NEW",
                        "matchTitle": "LIV vs NEW",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "new_3",
                        "playerIds": [
                            "new_1",
                            "liv_7",
                            "new_3",
                            "new_8",
                            "new_4",
                            "liv_10",
                            "liv_11",
                            "liv_12",
                            "liv_16",
                            "new_15",
                            "new_17"
                        ],
                        "benchIds": [
                            "liv_1",
                            "liv_9",
                            "new_9",
                            "new_9"
                        ],
                        "totalPrice": 91.2,
                        "updatedAt": 1788254323877,
                        "matchPoints": 0
                    },
                    "PL_GW31_MUN_HUL": {
                        "fixtureId": "PL_GW31_MUN_HUL",
                        "matchTitle": "MUN vs HUL",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "hul_3",
                        "playerIds": [
                            "mun_1",
                            "hul_3",
                            "hul_4",
                            "hul_5",
                            "hul_6",
                            "mun_9",
                            "mun_10",
                            "hul_10",
                            "mun_16",
                            "mun_17",
                            "hul_18"
                        ],
                        "benchIds": [
                            "hul_1",
                            "mun_11",
                            "mun_11",
                            "hul_16"
                        ],
                        "totalPrice": 89,
                        "updatedAt": 1788254323879,
                        "matchPoints": 0
                    },
                    "PL_GW31_TOT_BRE": {
                        "fixtureId": "PL_GW31_TOT_BRE",
                        "matchTitle": "TOT vs BRE",
                        "formation": "4-3-3",
                        "captainId": "bre_11",
                        "viceCaptainId": "bre_12",
                        "playerIds": [
                            "bre_1",
                            "tot_7",
                            "bre_5",
                            "bre_6",
                            "bre_3",
                            "tot_9",
                            "bre_11",
                            "bre_12",
                            "tot_15",
                            "tot_16",
                            "tot_17"
                        ],
                        "benchIds": [
                            "tot_1",
                            "tot_12",
                            "bre_10",
                            "bre_10"
                        ],
                        "totalPrice": 81.8,
                        "updatedAt": 1788254323881,
                        "matchPoints": 0
                    },
                    "PL_GW32_ARS_AVL": {
                        "fixtureId": "PL_GW32_ARS_AVL",
                        "matchTitle": "ARS vs AVL",
                        "formation": "4-3-3",
                        "captainId": "ars_4",
                        "viceCaptainId": "ars_5",
                        "playerIds": [
                            "ars_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "avl_9",
                            "avl_12",
                            "avl_13",
                            "ars_16",
                            "avl_16",
                            "avl_17"
                        ],
                        "benchIds": [
                            "avl_1",
                            "ars_9",
                            "ars_9",
                            "avl_14"
                        ],
                        "totalPrice": 94.6,
                        "updatedAt": 1788254323883,
                        "matchPoints": 0
                    },
                    "PL_GW32_BHA_CHE": {
                        "fixtureId": "PL_GW32_BHA_CHE",
                        "matchTitle": "BHA vs CHE",
                        "formation": "4-3-3",
                        "captainId": "che_15",
                        "viceCaptainId": "bha_5",
                        "playerIds": [
                            "che_1",
                            "bha_5",
                            "che_3",
                            "che_7",
                            "che_8",
                            "bha_9",
                            "bha_10",
                            "bha_12",
                            "bha_16",
                            "bha_17",
                            "che_15"
                        ],
                        "benchIds": [
                            "bha_1",
                            "bha_14",
                            "che_9",
                            "che_9"
                        ],
                        "totalPrice": 88,
                        "updatedAt": 1788254323885,
                        "matchPoints": 0
                    },
                    "PL_GW32_IPS_MUN": {
                        "fixtureId": "PL_GW32_IPS_MUN",
                        "matchTitle": "IPS vs MUN",
                        "formation": "4-3-3",
                        "captainId": "ips_9",
                        "viceCaptainId": "ips_16",
                        "playerIds": [
                            "mun_1",
                            "ips_3",
                            "mun_3",
                            "mun_4",
                            "mun_7",
                            "ips_9",
                            "ips_10",
                            "ips_11",
                            "ips_16",
                            "ips_17",
                            "mun_16"
                        ],
                        "benchIds": [
                            "ips_1",
                            "ips_13",
                            "mun_9",
                            "mun_9"
                        ],
                        "totalPrice": 91,
                        "updatedAt": 1788254323888,
                        "matchPoints": 0
                    },
                    "PL_GW32_MCI_CRY": {
                        "fixtureId": "PL_GW32_MCI_CRY",
                        "matchTitle": "MCI vs CRY",
                        "formation": "4-3-3",
                        "captainId": "mci_18",
                        "viceCaptainId": "mci_6",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "mci_7",
                            "cry_10",
                            "cry_11",
                            "cry_14",
                            "mci_18",
                            "cry_17",
                            "cry_18"
                        ],
                        "benchIds": [
                            "cry_1",
                            "mci_11",
                            "mci_11",
                            "cry_3"
                        ],
                        "totalPrice": 97.5,
                        "updatedAt": 1788254323888,
                        "matchPoints": 0
                    },
                    "PL_GW32_NEW_TOT": {
                        "fixtureId": "PL_GW32_NEW_TOT",
                        "matchTitle": "NEW vs TOT",
                        "formation": "4-3-3",
                        "captainId": "new_3",
                        "viceCaptainId": "new_15",
                        "playerIds": [
                            "new_1",
                            "new_3",
                            "new_8",
                            "new_4",
                            "new_5",
                            "tot_9",
                            "tot_12",
                            "tot_13",
                            "new_15",
                            "tot_15",
                            "tot_16"
                        ],
                        "benchIds": [
                            "tot_1",
                            "new_9",
                            "new_9",
                            "tot_7"
                        ],
                        "totalPrice": 81,
                        "updatedAt": 1788254323891,
                        "matchPoints": 0
                    },
                    "PL_GW32_NFO_LIV": {
                        "fixtureId": "PL_GW32_NFO_LIV",
                        "matchTitle": "NFO vs LIV",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "nfo_9",
                        "playerIds": [
                            "nfo_1",
                            "nfo_5",
                            "nfo_3",
                            "liv_7",
                            "liv_3",
                            "nfo_9",
                            "liv_10",
                            "liv_11",
                            "nfo_15",
                            "nfo_16",
                            "liv_16"
                        ],
                        "benchIds": [
                            "liv_1",
                            "nfo_11",
                            "nfo_11",
                            "liv_12"
                        ],
                        "totalPrice": 92.8,
                        "updatedAt": 1788254323892,
                        "matchPoints": 0
                    },
                    "PL_GW33_BOU_ARS": {
                        "fixtureId": "PL_GW33_BOU_ARS",
                        "matchTitle": "BOU vs ARS",
                        "formation": "4-3-3",
                        "captainId": "ars_4",
                        "viceCaptainId": "ars_5",
                        "playerIds": [
                            "ars_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "bou_10",
                            "bou_11",
                            "bou_12",
                            "bou_16",
                            "bou_17",
                            "ars_16"
                        ],
                        "benchIds": [
                            "bou_1",
                            "bou_5",
                            "ars_9",
                            "ars_9"
                        ],
                        "totalPrice": 96.6,
                        "updatedAt": 1788254323894,
                        "matchPoints": 0
                    },
                    "PL_GW33_CHE_MCI": {
                        "fixtureId": "PL_GW33_CHE_MCI",
                        "matchTitle": "CHE vs MCI",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_15",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "mci_7",
                            "che_9",
                            "che_10",
                            "che_12",
                            "che_15",
                            "che_16",
                            "che_17"
                        ],
                        "benchIds": [
                            "che_1",
                            "che_14",
                            "mci_11",
                            "mci_11"
                        ],
                        "totalPrice": 96.6,
                        "updatedAt": 1788254323896,
                        "matchPoints": 0
                    },
                    "PL_GW33_LEE_LIV": {
                        "fixtureId": "PL_GW33_LEE_LIV",
                        "matchTitle": "LEE vs LIV",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "liv_11",
                        "playerIds": [
                            "lee_1",
                            "lee_5",
                            "lee_3",
                            "lee_4",
                            "liv_7",
                            "liv_10",
                            "liv_11",
                            "liv_12",
                            "lee_16",
                            "lee_17",
                            "liv_16"
                        ],
                        "benchIds": [
                            "liv_1",
                            "lee_10",
                            "lee_10",
                            "liv_9"
                        ],
                        "totalPrice": 90.5,
                        "updatedAt": 1788254323896,
                        "matchPoints": 0
                    },
                    "PL_GW33_MUN_CRY": {
                        "fixtureId": "PL_GW33_MUN_CRY",
                        "matchTitle": "MUN vs CRY",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "mun_10",
                        "playerIds": [
                            "mun_1",
                            "mun_3",
                            "mun_4",
                            "cry_3",
                            "cry_4",
                            "mun_9",
                            "mun_10",
                            "cry_10",
                            "mun_16",
                            "cry_17",
                            "cry_18"
                        ],
                        "benchIds": [
                            "cry_1",
                            "mun_11",
                            "mun_11",
                            "cry_11"
                        ],
                        "totalPrice": 95.5,
                        "updatedAt": 1788254323898,
                        "matchPoints": 0
                    },
                    "PL_GW33_TOT_HUL": {
                        "fixtureId": "PL_GW33_TOT_HUL",
                        "matchTitle": "TOT vs HUL",
                        "formation": "4-3-3",
                        "captainId": "hul_1",
                        "viceCaptainId": "hul_3",
                        "playerIds": [
                            "hul_1",
                            "tot_7",
                            "hul_3",
                            "hul_4",
                            "hul_5",
                            "tot_9",
                            "hul_10",
                            "hul_16",
                            "tot_15",
                            "tot_16",
                            "tot_17"
                        ],
                        "benchIds": [
                            "tot_1",
                            "tot_12",
                            "hul_6",
                            "hul_6"
                        ],
                        "totalPrice": 73.2,
                        "updatedAt": 1788254323899,
                        "matchPoints": 0
                    },
                    "PL_GW34_ARS_TOT": {
                        "fixtureId": "PL_GW34_ARS_TOT",
                        "matchTitle": "ARS vs TOT",
                        "formation": "4-3-3",
                        "captainId": "ars_4",
                        "viceCaptainId": "ars_5",
                        "playerIds": [
                            "ars_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "tot_9",
                            "tot_12",
                            "tot_13",
                            "ars_16",
                            "tot_15",
                            "tot_16"
                        ],
                        "benchIds": [
                            "tot_1",
                            "ars_9",
                            "ars_9",
                            "tot_7"
                        ],
                        "totalPrice": 95.3,
                        "updatedAt": 1788254323901,
                        "matchPoints": 0
                    },
                    "PL_GW34_COV_MUN": {
                        "fixtureId": "PL_GW34_COV_MUN",
                        "matchTitle": "COV vs MUN",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "mun_10",
                        "playerIds": [
                            "mun_1",
                            "cov_4",
                            "cov_5",
                            "mun_3",
                            "mun_4",
                            "cov_12",
                            "mun_9",
                            "mun_10",
                            "cov_15",
                            "cov_17",
                            "cov_18"
                        ],
                        "benchIds": [
                            "cov_1",
                            "cov_13",
                            "mun_11",
                            "mun_11"
                        ],
                        "totalPrice": 89,
                        "updatedAt": 1788254323904,
                        "matchPoints": 0
                    },
                    "PL_GW34_LIV_CHE": {
                        "fixtureId": "PL_GW34_LIV_CHE",
                        "matchTitle": "LIV vs CHE",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_15",
                        "playerIds": [
                            "liv_1",
                            "liv_7",
                            "che_3",
                            "che_7",
                            "che_8",
                            "liv_10",
                            "liv_11",
                            "che_9",
                            "liv_16",
                            "che_15",
                            "che_16"
                        ],
                        "benchIds": [
                            "liv_2",
                            "liv_12",
                            "che_10",
                            "che_10"
                        ],
                        "totalPrice": 98.1,
                        "updatedAt": 1788254323905,
                        "matchPoints": 0
                    },
                    "PL_GW34_MCI_BRE": {
                        "fixtureId": "PL_GW34_MCI_BRE",
                        "matchTitle": "MCI vs BRE",
                        "formation": "4-3-3",
                        "captainId": "bre_11",
                        "viceCaptainId": "mci_18",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "bre_5",
                            "bre_11",
                            "bre_12",
                            "bre_10",
                            "mci_18",
                            "bre_16",
                            "bre_17"
                        ],
                        "benchIds": [
                            "bre_1",
                            "mci_11",
                            "mci_11",
                            "bre_6"
                        ],
                        "totalPrice": 99.2,
                        "updatedAt": 1788254323906,
                        "matchPoints": 0
                    },
                    "PL_GW35_BOU_MUN": {
                        "fixtureId": "PL_GW35_BOU_MUN",
                        "matchTitle": "BOU vs MUN",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "bou_10",
                        "playerIds": [
                            "mun_1",
                            "bou_5",
                            "bou_3",
                            "bou_4",
                            "mun_3",
                            "bou_10",
                            "mun_9",
                            "mun_10",
                            "bou_16",
                            "bou_17",
                            "mun_16"
                        ],
                        "benchIds": [
                            "bou_1",
                            "bou_11",
                            "mun_11",
                            "mun_11"
                        ],
                        "totalPrice": 97.5,
                        "updatedAt": 1788254323908,
                        "matchPoints": 0
                    },
                    "PL_GW35_LEE_ARS": {
                        "fixtureId": "PL_GW35_LEE_ARS",
                        "matchTitle": "LEE vs ARS",
                        "formation": "4-3-3",
                        "captainId": "ars_9",
                        "viceCaptainId": "ars_4",
                        "playerIds": [
                            "lee_1",
                            "lee_5",
                            "lee_3",
                            "ars_4",
                            "ars_5",
                            "ars_9",
                            "ars_11",
                            "ars_10",
                            "lee_16",
                            "lee_17",
                            "ars_16"
                        ],
                        "benchIds": [
                            "ars_1",
                            "lee_10",
                            "lee_10",
                            "ars_3"
                        ],
                        "totalPrice": 94.2,
                        "updatedAt": 1788254323910,
                        "matchPoints": 0
                    },
                    "PL_GW35_MCI_LIV": {
                        "fixtureId": "PL_GW35_MCI_LIV",
                        "matchTitle": "MCI vs LIV",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "mci_6",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "mci_7",
                            "liv_10",
                            "liv_11",
                            "liv_12",
                            "liv_16",
                            "liv_17",
                            "liv_18"
                        ],
                        "benchIds": [
                            "liv_1",
                            "mci_11",
                            "mci_11",
                            "liv_9"
                        ],
                        "totalPrice": 99,
                        "updatedAt": 1788254323912,
                        "matchPoints": 0
                    },
                    "PL_GW35_TOT_CHE": {
                        "fixtureId": "PL_GW35_TOT_CHE",
                        "matchTitle": "TOT vs CHE",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_10",
                        "playerIds": [
                            "che_1",
                            "tot_7",
                            "tot_3",
                            "che_3",
                            "che_7",
                            "che_9",
                            "che_10",
                            "che_12",
                            "tot_15",
                            "tot_16",
                            "tot_17"
                        ],
                        "benchIds": [
                            "tot_1",
                            "tot_9",
                            "che_15",
                            "che_15"
                        ],
                        "totalPrice": 94,
                        "updatedAt": 1788254323914,
                        "matchPoints": 0
                    },
                    "LALIGA_MW35_FCB_RMA": {
                        "fixtureId": "LALIGA_MW35_FCB_RMA",
                        "matchTitle": "FCB vs RMA",
                        "formation": "4-3-3",
                        "captainId": "fcb_19",
                        "viceCaptainId": "fcb_17",
                        "playerIds": [
                            "rma_1",
                            "fcb_4",
                            "fcb_5",
                            "rma_3",
                            "rma_6",
                            "fcb_17",
                            "fcb_18",
                            "fcb_11",
                            "fcb_19",
                            "rma_20",
                            "rma_19"
                        ],
                        "benchIds": [
                            "fcb_2",
                            "fcb_10",
                            "rma_9",
                            "rma_8"
                        ],
                        "totalPrice": 99.3,
                        "updatedAt": 1788254323918,
                        "matchPoints": 0
                    },
                    "PL_GW36_ARS_NFO": {
                        "fixtureId": "PL_GW36_ARS_NFO",
                        "matchTitle": "ARS vs NFO",
                        "formation": "4-3-3",
                        "captainId": "ars_9",
                        "viceCaptainId": "ars_4",
                        "playerIds": [
                            "nfo_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "nfo_5",
                            "ars_9",
                            "ars_11",
                            "nfo_9",
                            "ars_16",
                            "nfo_15",
                            "nfo_16"
                        ],
                        "benchIds": [
                            "ars_1",
                            "ars_6",
                            "nfo_11",
                            "nfo_11"
                        ],
                        "totalPrice": 95,
                        "updatedAt": 1788254323920,
                        "matchPoints": 0
                    },
                    "PL_GW36_CHE_EVE": {
                        "fixtureId": "PL_GW36_CHE_EVE",
                        "matchTitle": "CHE vs EVE",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "che_15",
                        "playerIds": [
                            "che_1",
                            "che_3",
                            "eve_3",
                            "eve_4",
                            "eve_7",
                            "che_9",
                            "eve_9",
                            "eve_10",
                            "che_15",
                            "che_16",
                            "eve_17"
                        ],
                        "benchIds": [
                            "eve_1",
                            "che_10",
                            "che_10",
                            "eve_15"
                        ],
                        "totalPrice": 93.6,
                        "updatedAt": 1788254323922,
                        "matchPoints": 0
                    },
                    "PL_GW36_COV_TOT": {
                        "fixtureId": "PL_GW36_COV_TOT",
                        "matchTitle": "COV vs TOT",
                        "formation": "4-3-3",
                        "captainId": "tot_7",
                        "viceCaptainId": "tot_9",
                        "playerIds": [
                            "cov_1",
                            "tot_7",
                            "tot_3",
                            "tot_5",
                            "tot_8",
                            "cov_12",
                            "cov_13",
                            "tot_9",
                            "cov_15",
                            "cov_17",
                            "cov_18"
                        ],
                        "benchIds": [
                            "tot_1",
                            "cov_4",
                            "cov_4",
                            "tot_12"
                        ],
                        "totalPrice": 73.8,
                        "updatedAt": 1788254323924,
                        "matchPoints": 0
                    },
                    "PL_GW36_IPS_MCI": {
                        "fixtureId": "PL_GW36_IPS_MCI",
                        "matchTitle": "IPS vs MCI",
                        "formation": "4-3-3",
                        "captainId": "mci_18",
                        "viceCaptainId": "mci_6",
                        "playerIds": [
                            "mci_1",
                            "ips_3",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "ips_9",
                            "ips_10",
                            "ips_11",
                            "ips_16",
                            "ips_17",
                            "mci_18"
                        ],
                        "benchIds": [
                            "ips_1",
                            "ips_13",
                            "mci_11",
                            "mci_11"
                        ],
                        "totalPrice": 95,
                        "updatedAt": 1788254323925,
                        "matchPoints": 0
                    },
                    "PL_GW36_LIV_BRE": {
                        "fixtureId": "PL_GW36_LIV_BRE",
                        "matchTitle": "LIV vs BRE",
                        "formation": "4-3-3",
                        "captainId": "bre_11",
                        "viceCaptainId": "liv_10",
                        "playerIds": [
                            "liv_1",
                            "liv_7",
                            "bre_5",
                            "bre_6",
                            "bre_3",
                            "liv_10",
                            "liv_11",
                            "bre_11",
                            "liv_16",
                            "bre_16",
                            "bre_17"
                        ],
                        "benchIds": [
                            "bre_1",
                            "liv_12",
                            "liv_12",
                            "bre_12"
                        ],
                        "totalPrice": 90.7,
                        "updatedAt": 1788254323927,
                        "matchPoints": 0
                    },
                    "PL_GW36_MUN_LEE": {
                        "fixtureId": "PL_GW36_MUN_LEE",
                        "matchTitle": "MUN vs LEE",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "mun_10",
                        "playerIds": [
                            "lee_1",
                            "mun_3",
                            "lee_5",
                            "lee_3",
                            "lee_4",
                            "mun_9",
                            "mun_10",
                            "mun_11",
                            "mun_16",
                            "lee_16",
                            "lee_17"
                        ],
                        "benchIds": [
                            "mun_1",
                            "mun_13",
                            "lee_10",
                            "lee_10"
                        ],
                        "totalPrice": 94,
                        "updatedAt": 1788254323928,
                        "matchPoints": 0
                    },
                    "PL_GW37_BOU_CHE": {
                        "fixtureId": "PL_GW37_BOU_CHE",
                        "matchTitle": "BOU vs CHE",
                        "formation": "4-3-3",
                        "captainId": "che_9",
                        "viceCaptainId": "bou_10",
                        "playerIds": [
                            "che_1",
                            "bou_5",
                            "bou_3",
                            "che_3",
                            "che_7",
                            "bou_10",
                            "che_9",
                            "che_10",
                            "bou_16",
                            "bou_17",
                            "bou_18"
                        ],
                        "benchIds": [
                            "bou_1",
                            "bou_11",
                            "che_15",
                            "che_15"
                        ],
                        "totalPrice": 91.8,
                        "updatedAt": 1788254323931,
                        "matchPoints": 0
                    },
                    "PL_GW37_BHA_LIV": {
                        "fixtureId": "PL_GW37_BHA_LIV",
                        "matchTitle": "BHA vs LIV",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "bha_5",
                        "playerIds": [
                            "bha_1",
                            "bha_5",
                            "bha_3",
                            "liv_7",
                            "liv_3",
                            "bha_9",
                            "liv_10",
                            "liv_11",
                            "bha_16",
                            "bha_17",
                            "liv_16"
                        ],
                        "benchIds": [
                            "liv_1",
                            "bha_10",
                            "bha_10",
                            "liv_12"
                        ],
                        "totalPrice": 88.7,
                        "updatedAt": 1788254323932,
                        "matchPoints": 0
                    },
                    "PL_GW37_EVE_ARS": {
                        "fixtureId": "PL_GW37_EVE_ARS",
                        "matchTitle": "EVE vs ARS",
                        "formation": "4-3-3",
                        "captainId": "ars_9",
                        "viceCaptainId": "ars_4",
                        "playerIds": [
                            "eve_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "eve_9",
                            "eve_10",
                            "ars_9",
                            "eve_17",
                            "eve_18",
                            "ars_16"
                        ],
                        "benchIds": [
                            "ars_1",
                            "eve_3",
                            "eve_3",
                            "ars_11"
                        ],
                        "totalPrice": 95.1,
                        "updatedAt": 1788254323934,
                        "matchPoints": 0
                    },
                    "PL_GW37_MCI_AVL": {
                        "fixtureId": "PL_GW37_MCI_AVL",
                        "matchTitle": "MCI vs AVL",
                        "formation": "4-3-3",
                        "captainId": "mci_18",
                        "viceCaptainId": "mci_6",
                        "playerIds": [
                            "mci_1",
                            "mci_6",
                            "mci_4",
                            "mci_3",
                            "mci_7",
                            "avl_9",
                            "avl_12",
                            "avl_13",
                            "mci_18",
                            "avl_16",
                            "avl_17"
                        ],
                        "benchIds": [
                            "avl_1",
                            "mci_11",
                            "mci_11",
                            "avl_14"
                        ],
                        "totalPrice": 97.5,
                        "updatedAt": 1788254323935,
                        "matchPoints": 0
                    },
                    "PL_GW37_TOT_MUN": {
                        "fixtureId": "PL_GW37_TOT_MUN",
                        "matchTitle": "TOT vs MUN",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "mun_10",
                        "playerIds": [
                            "mun_1",
                            "tot_7",
                            "tot_3",
                            "mun_3",
                            "mun_4",
                            "tot_9",
                            "mun_9",
                            "mun_10",
                            "tot_15",
                            "tot_16",
                            "tot_17"
                        ],
                        "benchIds": [
                            "tot_1",
                            "tot_12",
                            "mun_11",
                            "mun_11"
                        ],
                        "totalPrice": 96.1,
                        "updatedAt": 1788254323937,
                        "matchPoints": 0
                    },
                    "PL_GW38_ARS_BHA": {
                        "fixtureId": "PL_GW38_ARS_BHA",
                        "matchTitle": "ARS vs BHA",
                        "formation": "4-3-3",
                        "captainId": "ars_4",
                        "viceCaptainId": "ars_5",
                        "playerIds": [
                            "ars_1",
                            "ars_4",
                            "ars_5",
                            "ars_3",
                            "ars_6",
                            "bha_9",
                            "bha_10",
                            "bha_12",
                            "ars_16",
                            "bha_16",
                            "bha_17"
                        ],
                        "benchIds": [
                            "bha_1",
                            "ars_9",
                            "ars_9",
                            "bha_5"
                        ],
                        "totalPrice": 93.8,
                        "updatedAt": 1788254323939,
                        "matchPoints": 0
                    },
                    "PL_GW38_AVL_TOT": {
                        "fixtureId": "PL_GW38_AVL_TOT",
                        "matchTitle": "AVL vs TOT",
                        "formation": "4-3-3",
                        "captainId": "tot_7",
                        "viceCaptainId": "avl_9",
                        "playerIds": [
                            "avl_1",
                            "avl_3",
                            "tot_7",
                            "tot_3",
                            "tot_5",
                            "avl_9",
                            "avl_12",
                            "avl_13",
                            "avl_16",
                            "tot_15",
                            "tot_16"
                        ],
                        "benchIds": [
                            "tot_1",
                            "avl_14",
                            "avl_14",
                            "tot_9"
                        ],
                        "totalPrice": 79.8,
                        "updatedAt": 1788254323941,
                        "matchPoints": 0
                    },
                    "PL_GW38_CHE_BRE": {
                        "fixtureId": "PL_GW38_CHE_BRE",
                        "matchTitle": "CHE vs BRE",
                        "formation": "4-3-3",
                        "captainId": "che_15",
                        "viceCaptainId": "bre_11",
                        "playerIds": [
                            "che_1",
                            "che_3",
                            "bre_5",
                            "bre_6",
                            "bre_3",
                            "bre_11",
                            "bre_12",
                            "bre_10",
                            "che_15",
                            "che_16",
                            "che_17"
                        ],
                        "benchIds": [
                            "bre_1",
                            "che_9",
                            "che_9",
                            "bre_15"
                        ],
                        "totalPrice": 90.4,
                        "updatedAt": 1788254323943,
                        "matchPoints": 0
                    },
                    "PL_GW38_LIV_BOU": {
                        "fixtureId": "PL_GW38_LIV_BOU",
                        "matchTitle": "LIV vs BOU",
                        "formation": "4-3-3",
                        "captainId": "liv_10",
                        "viceCaptainId": "bou_10",
                        "playerIds": [
                            "liv_1",
                            "liv_7",
                            "bou_5",
                            "bou_3",
                            "bou_4",
                            "liv_10",
                            "liv_11",
                            "bou_10",
                            "liv_16",
                            "bou_16",
                            "bou_17"
                        ],
                        "benchIds": [
                            "bou_1",
                            "liv_12",
                            "liv_12",
                            "bou_11"
                        ],
                        "totalPrice": 91,
                        "updatedAt": 1788254323944,
                        "matchPoints": 0
                    },
                    "PL_GW38_MUN_FUL": {
                        "fixtureId": "PL_GW38_MUN_FUL",
                        "matchTitle": "MUN vs FUL",
                        "formation": "4-3-3",
                        "captainId": "mun_9",
                        "viceCaptainId": "mun_10",
                        "playerIds": [
                            "mun_1",
                            "mun_3",
                            "mun_4",
                            "ful_4",
                            "ful_5",
                            "mun_9",
                            "mun_10",
                            "ful_9",
                            "mun_16",
                            "ful_16",
                            "ful_17"
                        ],
                        "benchIds": [
                            "ful_1",
                            "mun_11",
                            "mun_11",
                            "ful_10"
                        ],
                        "totalPrice": 94,
                        "updatedAt": 1788254323947,
                        "matchPoints": 0
                    },
                    "PL_GW38_SUN_MCI": {
                        "fixtureId": "PL_GW38_SUN_MCI",
                        "matchTitle": "SUN vs MCI",
                        "formation": "4-3-3",
                        "captainId": "mci_11",
                        "viceCaptainId": "mci_18",
                        "playerIds": [
                            "sun_1",
                            "sun_3",
                            "sun_4",
                            "sun_6",
                            "mci_6",
                            "mci_11",
                            "mci_12",
                            "mci_10",
                            "sun_18",
                            "sun_17",
                            "mci_18"
                        ],
                        "benchIds": [
                            "mci_1",
                            "sun_10",
                            "sun_10",
                            "mci_4"
                        ],
                        "totalPrice": 98.3,
                        "updatedAt": 1788254323947,
                        "matchPoints": 0
                    }
                },
                "squad": {
                    "fixtureId": "LALIGA_MW4_RMA_SEV",
                    "formation": "3-5-2",
                    "captainId": "rma_17",
                    "viceCaptainId": "rma_16",
                    "playerIds": [
                        "sev_1",
                        "rma_3",
                        "sev_3",
                        "sev_8",
                        "rma_10",
                        "rma_11",
                        "sev_10",
                        "rma_14",
                        "sev_14",
                        "rma_17",
                        "rma_16"
                    ],
                    "benchIds": [
                        "rma_1",
                        "sev_6",
                        "rma_9",
                        "sev_15"
                    ],
                    "updatedAt": 1788326620736,
                    "matchPoints": 0
                },
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788326656940
            }
        ]
    }
};

// 2. Permanent User Squads (Separated by User ID -> Fixture ID -> Squad)
const SAVED_USER_SQUADS_DATA = {
    "jj7758": {
        "PL_GW1_ARS_COV": {
            "fixtureId": "PL_GW1_ARS_COV",
            "matchTitle": "ARS vs COV",
            "formation": "4-3-3",
            "captainId": "ars_9",
            "viceCaptainId": "ars_4",
            "playerIds": [
                "cov_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "ars_9",
                "cov_12",
                "cov_13",
                "ars_16",
                "cov_15",
                "cov_17"
            ],
            "benchIds": [
                "ars_1",
                "ars_11",
                "cov_4",
                "cov_4"
            ],
            "totalPrice": 87.2,
            "updatedAt": 1788254323489
        },
        "PL_GW1_HUL_MUN": {
            "fixtureId": "PL_GW1_HUL_MUN",
            "matchTitle": "HUL vs MUN",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "hul_3",
            "playerIds": [
                "mun_1",
                "hul_3",
                "hul_4",
                "hul_5",
                "hul_6",
                "hul_10",
                "mun_9",
                "mun_10",
                "hul_18",
                "mun_16",
                "mun_17"
            ],
            "benchIds": [
                "hul_1",
                "hul_16",
                "mun_11",
                "mun_11"
            ],
            "totalPrice": 89,
            "updatedAt": 1788254323491
        },
        "PL_GW1_BRE_TOT": {
            "fixtureId": "PL_GW1_BRE_TOT",
            "matchTitle": "BRE vs TOT",
            "formation": "4-3-3",
            "captainId": "bre_11",
            "viceCaptainId": "bre_12",
            "playerIds": [
                "bre_1",
                "bre_5",
                "bre_6",
                "bre_3",
                "tot_7",
                "bre_11",
                "bre_12",
                "tot_9",
                "tot_15",
                "tot_16",
                "tot_17"
            ],
            "benchIds": [
                "tot_1",
                "bre_10",
                "bre_10",
                "tot_12"
            ],
            "totalPrice": 81.8,
            "updatedAt": 1788254323495
        },
        "PL_GW1_MCI_BOU": {
            "fixtureId": "PL_GW1_MCI_BOU",
            "matchTitle": "MCI vs BOU",
            "formation": "4-3-3",
            "captainId": "mci_18",
            "viceCaptainId": "bou_10",
            "playerIds": [
                "mci_1",
                "mci_6",
                "mci_4",
                "mci_3",
                "bou_5",
                "bou_10",
                "bou_11",
                "bou_12",
                "mci_18",
                "bou_16",
                "bou_17"
            ],
            "benchIds": [
                "bou_1",
                "mci_11",
                "mci_11",
                "bou_13"
            ],
            "totalPrice": 99,
            "updatedAt": 1788254323497
        },
        "PL_GW1_NEW_LIV": {
            "fixtureId": "PL_GW1_NEW_LIV",
            "matchTitle": "NEW vs LIV",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "new_3",
            "playerIds": [
                "new_1",
                "new_3",
                "new_8",
                "new_4",
                "liv_7",
                "liv_10",
                "liv_11",
                "liv_12",
                "new_15",
                "new_17",
                "liv_16"
            ],
            "benchIds": [
                "liv_1",
                "new_9",
                "new_9",
                "liv_9"
            ],
            "totalPrice": 91.2,
            "updatedAt": 1788254323499
        },
        "LALIGA_MW1_FCB_ATH": {
            "fixtureId": "LALIGA_MW1_FCB_ATH",
            "matchTitle": "FCB vs ATH",
            "formation": "4-3-3",
            "captainId": "fcb_17",
            "viceCaptainId": "fcb_18",
            "playerIds": [
                "ath_1",
                "fcb_4",
                "fcb_5",
                "fcb_6",
                "ath_3",
                "fcb_17",
                "fcb_18",
                "ath_11",
                "ath_18",
                "ath_19",
                "ath_17"
            ],
            "benchIds": [
                "fcb_2",
                "fcb_10",
                "ath_10",
                "ath_10"
            ],
            "totalPrice": 99.8,
            "updatedAt": 1788254323506
        },
        "PL_GW1_FUL_CHE": {
            "fixtureId": "PL_GW1_FUL_CHE",
            "matchTitle": "FUL vs CHE",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_10",
            "playerIds": [
                "che_1",
                "ful_4",
                "ful_5",
                "che_3",
                "che_7",
                "che_9",
                "che_10",
                "che_12",
                "ful_16",
                "ful_17",
                "ful_18"
            ],
            "benchIds": [
                "ful_1",
                "ful_9",
                "che_15",
                "che_15"
            ],
            "totalPrice": 89.3,
            "updatedAt": 1788254323509
        },
        "LALIGA_MW1_SEV_ATM": {
            "fixtureId": "LALIGA_MW1_SEV_ATM",
            "matchTitle": "SEV vs ATM",
            "formation": "4-3-3",
            "captainId": "atm_18",
            "viceCaptainId": "sev_15",
            "playerIds": [
                "atm_1",
                "sev_3",
                "sev_8",
                "sev_6",
                "atm_3",
                "atm_10",
                "atm_12",
                "atm_11",
                "sev_15",
                "sev_16",
                "atm_18"
            ],
            "benchIds": [
                "sev_1",
                "sev_18",
                "atm_17",
                "atm_17"
            ],
            "totalPrice": 94.3,
            "updatedAt": 1788254323513
        },
        "PL_GW2_CRY_MCI": {
            "fixtureId": "PL_GW2_CRY_MCI",
            "matchTitle": "CRY vs MCI",
            "formation": "4-3-3",
            "captainId": "mci_18",
            "viceCaptainId": "mci_6",
            "playerIds": [
                "mci_1",
                "mci_6",
                "mci_4",
                "mci_3",
                "mci_7",
                "cry_10",
                "cry_11",
                "cry_14",
                "cry_17",
                "cry_18",
                "mci_18"
            ],
            "benchIds": [
                "cry_1",
                "cry_3",
                "mci_11",
                "mci_11"
            ],
            "totalPrice": 97.5,
            "updatedAt": 1788254323515
        },
        "LALIGA_MW2_RMA_ATH": {
            "fixtureId": "LALIGA_MW2_RMA_ATH",
            "matchTitle": "RMA vs ATH",
            "formation": "4-3-3",
            "captainId": "rma_10",
            "viceCaptainId": "ath_11",
            "playerIds": [
                "ath_1",
                "rma_3",
                "rma_6",
                "rma_7",
                "ath_3",
                "rma_10",
                "rma_11",
                "ath_11",
                "ath_18",
                "ath_19",
                "ath_17"
            ],
            "benchIds": [
                "rma_1",
                "rma_9",
                "ath_10",
                "ath_10"
            ],
            "totalPrice": 99.9,
            "updatedAt": 1788254323521
        },
        "PL_GW2_LIV_NFO": {
            "fixtureId": "PL_GW2_LIV_NFO",
            "matchTitle": "LIV vs NFO",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "nfo_9",
            "playerIds": [
                "liv_1",
                "liv_7",
                "nfo_5",
                "nfo_3",
                "nfo_4",
                "liv_10",
                "liv_11",
                "nfo_9",
                "liv_16",
                "nfo_15",
                "nfo_16"
            ],
            "benchIds": [
                "nfo_1",
                "liv_12",
                "liv_12",
                "nfo_11"
            ],
            "totalPrice": 92.8,
            "updatedAt": 1788254323523
        },
        "PL_GW2_TOT_NEW": {
            "fixtureId": "PL_GW2_TOT_NEW",
            "matchTitle": "TOT vs NEW",
            "formation": "4-3-3",
            "captainId": "new_3",
            "viceCaptainId": "new_15",
            "playerIds": [
                "new_1",
                "new_3",
                "new_8",
                "new_4",
                "new_5",
                "tot_9",
                "tot_12",
                "tot_13",
                "tot_15",
                "tot_16",
                "new_15"
            ],
            "benchIds": [
                "tot_1",
                "tot_7",
                "new_9",
                "new_9"
            ],
            "totalPrice": 81,
            "updatedAt": 1788254323525
        },
        "PL_GW2_CHE_BHA": {
            "fixtureId": "PL_GW2_CHE_BHA",
            "matchTitle": "CHE vs BHA",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_15",
            "playerIds": [
                "che_1",
                "che_3",
                "che_7",
                "bha_5",
                "bha_3",
                "che_9",
                "bha_9",
                "bha_10",
                "che_15",
                "bha_16",
                "bha_17"
            ],
            "benchIds": [
                "bha_1",
                "che_10",
                "che_10",
                "bha_12"
            ],
            "totalPrice": 89.4,
            "updatedAt": 1788254323527
        },
        "PL_GW2_MUN_IPS": {
            "fixtureId": "PL_GW2_MUN_IPS",
            "matchTitle": "MUN vs IPS",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "mun_10",
            "playerIds": [
                "mun_1",
                "mun_3",
                "ips_3",
                "ips_4",
                "ips_5",
                "mun_9",
                "mun_10",
                "ips_9",
                "mun_16",
                "ips_16",
                "ips_17"
            ],
            "benchIds": [
                "ips_1",
                "mun_11",
                "mun_11",
                "ips_10"
            ],
            "totalPrice": 91,
            "updatedAt": 1788254323530
        },
        "PL_GW2_AVL_ARS": {
            "fixtureId": "PL_GW2_AVL_ARS",
            "formation": "4-3-3",
            "captainId": "ars_4",
            "viceCaptainId": "ars_5",
            "playerIds": [
                "ars_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "avl_9",
                "avl_12",
                "avl_13",
                "avl_16",
                "avl_17",
                "ars_16"
            ],
            "benchIds": [
                "avl_1",
                "avl_14",
                "ars_9",
                "ars_9"
            ],
            "updatedAt": 1788326619899
        },
        "LALIGA_MW4_RMA_SEV": {
            "fixtureId": "LALIGA_MW4_RMA_SEV",
            "formation": "3-5-2",
            "captainId": "rma_17",
            "viceCaptainId": "rma_16",
            "playerIds": [
                "sev_1",
                "rma_3",
                "sev_3",
                "sev_8",
                "rma_10",
                "rma_11",
                "sev_10",
                "rma_14",
                "sev_14",
                "rma_17",
                "rma_16"
            ],
            "benchIds": [
                "rma_1",
                "sev_6",
                "rma_9",
                "sev_15"
            ],
            "updatedAt": 1788326620736
        },
        "PL_GW3_IPS_LIV": {
            "fixtureId": "PL_GW3_IPS_LIV",
            "matchTitle": "IPS vs LIV",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "liv_11",
            "playerIds": [
                "liv_1",
                "ips_3",
                "ips_4",
                "ips_5",
                "liv_7",
                "ips_9",
                "liv_10",
                "liv_11",
                "ips_16",
                "ips_17",
                "liv_16"
            ],
            "benchIds": [
                "ips_1",
                "ips_10",
                "liv_12",
                "liv_12"
            ],
            "totalPrice": 84.5,
            "updatedAt": 1788254323537
        },
        "PL_GW3_MCI_COV": {
            "fixtureId": "PL_GW3_MCI_COV",
            "matchTitle": "MCI vs COV",
            "formation": "4-3-3",
            "captainId": "mci_18",
            "viceCaptainId": "mci_6",
            "playerIds": [
                "mci_1",
                "mci_6",
                "mci_4",
                "mci_3",
                "mci_7",
                "cov_12",
                "cov_13",
                "cov_14",
                "mci_18",
                "cov_15",
                "cov_17"
            ],
            "benchIds": [
                "cov_1",
                "mci_11",
                "mci_11",
                "cov_4"
            ],
            "totalPrice": 94,
            "updatedAt": 1788254323538
        },
        "PL_GW3_NFO_TOT": {
            "fixtureId": "PL_GW3_NFO_TOT",
            "matchTitle": "NFO vs TOT",
            "formation": "4-3-3",
            "captainId": "nfo_9",
            "viceCaptainId": "nfo_5",
            "playerIds": [
                "nfo_1",
                "nfo_5",
                "nfo_3",
                "nfo_4",
                "tot_7",
                "nfo_9",
                "tot_9",
                "tot_12",
                "nfo_15",
                "tot_15",
                "tot_16"
            ],
            "benchIds": [
                "tot_1",
                "nfo_11",
                "nfo_11",
                "tot_13"
            ],
            "totalPrice": 84.1,
            "updatedAt": 1788254323542
        },
        "PL_GW3_EVE_MUN": {
            "fixtureId": "PL_GW3_EVE_MUN",
            "matchTitle": "EVE vs MUN",
            "formation": "4-3-3",
            "captainId": "eve_3",
            "viceCaptainId": "eve_9",
            "playerIds": [
                "mun_1",
                "eve_3",
                "eve_4",
                "mun_3",
                "mun_4",
                "eve_9",
                "eve_10",
                "eve_15",
                "eve_17",
                "mun_16",
                "mun_17"
            ],
            "benchIds": [
                "eve_1",
                "eve_7",
                "mun_9",
                "mun_9"
            ],
            "totalPrice": 95.9,
            "updatedAt": 1788254323546
        },
        "PL_GW3_ARS_CHE": {
            "fixtureId": "PL_GW3_ARS_CHE",
            "matchTitle": "ARS vs CHE",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "ars_9",
            "playerIds": [
                "ars_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "che_3",
                "ars_9",
                "ars_11",
                "che_9",
                "che_15",
                "che_16",
                "che_17"
            ],
            "benchIds": [
                "che_1",
                "ars_6",
                "ars_6",
                "che_10"
            ],
            "totalPrice": 98.8,
            "updatedAt": 1788254323550
        },
        "PL_GW4_CHE_HUL": {
            "fixtureId": "PL_GW4_CHE_HUL",
            "matchTitle": "CHE vs HUL",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_15",
            "playerIds": [
                "che_1",
                "che_3",
                "hul_3",
                "hul_4",
                "hul_5",
                "che_9",
                "hul_10",
                "hul_16",
                "che_15",
                "che_16",
                "hul_18"
            ],
            "benchIds": [
                "hul_1",
                "che_10",
                "che_10",
                "hul_6"
            ],
            "totalPrice": 84.7,
            "updatedAt": 1788254323552
        },
        "PL_GW4_LIV_FUL": {
            "fixtureId": "PL_GW4_LIV_FUL",
            "matchTitle": "LIV vs FUL",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "liv_11",
            "playerIds": [
                "liv_1",
                "liv_7",
                "liv_3",
                "ful_4",
                "ful_5",
                "liv_10",
                "liv_11",
                "ful_9",
                "liv_16",
                "ful_16",
                "ful_17"
            ],
            "benchIds": [
                "ful_1",
                "liv_12",
                "liv_12",
                "ful_10"
            ],
            "totalPrice": 89,
            "updatedAt": 1788254323555
        },
        "PL_GW4_TOT_EVE": {
            "fixtureId": "PL_GW4_TOT_EVE",
            "matchTitle": "TOT vs EVE",
            "formation": "4-3-3",
            "captainId": "eve_3",
            "viceCaptainId": "eve_9",
            "playerIds": [
                "eve_1",
                "tot_7",
                "eve_3",
                "eve_4",
                "eve_7",
                "tot_9",
                "tot_12",
                "eve_9",
                "tot_15",
                "tot_16",
                "eve_17"
            ],
            "benchIds": [
                "tot_1",
                "tot_13",
                "eve_10",
                "eve_10"
            ],
            "totalPrice": 83.7,
            "updatedAt": 1788254323558
        },
        "PL_GW4_SUN_ARS": {
            "fixtureId": "PL_GW4_SUN_ARS",
            "matchTitle": "SUN vs ARS",
            "formation": "4-3-3",
            "captainId": "ars_9",
            "viceCaptainId": "ars_4",
            "playerIds": [
                "sun_1",
                "sun_3",
                "sun_4",
                "ars_4",
                "ars_5",
                "ars_9",
                "ars_11",
                "ars_10",
                "sun_18",
                "sun_17",
                "ars_16"
            ],
            "benchIds": [
                "ars_1",
                "sun_10",
                "sun_10",
                "ars_3"
            ],
            "totalPrice": 94.2,
            "updatedAt": 1788254323560
        },
        "PL_GW4_MUN_MCI": {
            "fixtureId": "PL_GW4_MUN_MCI",
            "matchTitle": "MUN vs MCI",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "mci_6",
            "playerIds": [
                "mci_1",
                "mci_6",
                "mci_4",
                "mci_3",
                "mci_7",
                "mun_9",
                "mun_10",
                "mun_11",
                "mun_16",
                "mun_17",
                "mun_18"
            ],
            "benchIds": [
                "mun_1",
                "mun_7",
                "mci_11",
                "mci_11"
            ],
            "totalPrice": 98.9,
            "updatedAt": 1788254323564
        },
        "LALIGA_MW5_FCB_SEV": {
            "fixtureId": "LALIGA_MW5_FCB_SEV",
            "matchTitle": "FCB vs SEV",
            "formation": "4-3-3",
            "captainId": "fcb_19",
            "viceCaptainId": "fcb_17",
            "playerIds": [
                "sev_1",
                "sev_3",
                "sev_8",
                "sev_6",
                "sev_4",
                "fcb_17",
                "fcb_18",
                "fcb_11",
                "fcb_19",
                "fcb_20",
                "fcb_21"
            ],
            "benchIds": [
                "fcb_2",
                "fcb_13",
                "sev_15",
                "sev_15"
            ],
            "totalPrice": 99.9,
            "updatedAt": 1788254323569
        },
        "LALIGA_MW5_ATH_ATM": {
            "fixtureId": "LALIGA_MW5_ATH_ATM",
            "matchTitle": "ATH vs ATM",
            "formation": "4-3-3",
            "captainId": "atm_18",
            "viceCaptainId": "ath_11",
            "playerIds": [
                "ath_1",
                "ath_3",
                "ath_4",
                "atm_3",
                "atm_4",
                "ath_11",
                "atm_10",
                "atm_12",
                "ath_18",
                "ath_19",
                "atm_18"
            ],
            "benchIds": [
                "atm_1",
                "ath_10",
                "ath_10",
                "atm_17"
            ],
            "totalPrice": 99.9,
            "updatedAt": 1788254323573
        },
        "PL_GW5_BRE_CHE": {
            "fixtureId": "PL_GW5_BRE_CHE",
            "matchTitle": "BRE vs CHE",
            "formation": "4-3-3",
            "captainId": "che_15",
            "viceCaptainId": "bre_11",
            "playerIds": [
                "che_1",
                "bre_5",
                "bre_6",
                "bre_3",
                "che_3",
                "bre_11",
                "bre_12",
                "bre_10",
                "che_15",
                "che_16",
                "che_17"
            ],
            "benchIds": [
                "bre_1",
                "bre_15",
                "che_9",
                "che_9"
            ],
            "totalPrice": 90.4,
            "updatedAt": 1788254323575
        },
        "PL_GW5_TOT_AVL": {
            "fixtureId": "PL_GW5_TOT_AVL",
            "matchTitle": "TOT vs AVL",
            "formation": "4-3-3",
            "captainId": "tot_7",
            "viceCaptainId": "avl_9",
            "playerIds": [
                "tot_1",
                "tot_7",
                "tot_3",
                "avl_3",
                "avl_4",
                "avl_9",
                "avl_12",
                "avl_13",
                "tot_15",
                "tot_16",
                "tot_17"
            ],
            "benchIds": [
                "avl_1",
                "tot_9",
                "tot_12",
                "avl_14"
            ],
            "totalPrice": 79.6,
            "updatedAt": 1788254323578
        },
        "PL_GW5_BHA_ARS": {
            "fixtureId": "PL_GW5_BHA_ARS",
            "matchTitle": "BHA vs ARS",
            "formation": "4-3-3",
            "captainId": "ars_9",
            "viceCaptainId": "ars_4",
            "playerIds": [
                "bha_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "bha_9",
                "bha_10",
                "ars_9",
                "bha_16",
                "bha_17",
                "ars_16"
            ],
            "benchIds": [
                "ars_1",
                "bha_5",
                "bha_5",
                "ars_11"
            ],
            "totalPrice": 90.6,
            "updatedAt": 1788254323581
        },
        "PL_GW5_BOU_LIV": {
            "fixtureId": "PL_GW5_BOU_LIV",
            "matchTitle": "BOU vs LIV",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "bou_10",
            "playerIds": [
                "liv_1",
                "bou_5",
                "bou_3",
                "bou_4",
                "liv_7",
                "bou_10",
                "liv_10",
                "liv_11",
                "bou_16",
                "bou_17",
                "liv_16"
            ],
            "benchIds": [
                "bou_1",
                "bou_11",
                "liv_12",
                "liv_12"
            ],
            "totalPrice": 91,
            "updatedAt": 1788254323583
        },
        "PL_GW5_MCI_SUN": {
            "fixtureId": "PL_GW5_MCI_SUN",
            "matchTitle": "MCI vs SUN",
            "formation": "4-3-3",
            "captainId": "mci_11",
            "viceCaptainId": "mci_18",
            "playerIds": [
                "sun_1",
                "mci_6",
                "sun_3",
                "sun_4",
                "sun_6",
                "mci_11",
                "mci_12",
                "mci_10",
                "mci_18",
                "sun_18",
                "sun_17"
            ],
            "benchIds": [
                "mci_1",
                "mci_4",
                "sun_10",
                "sun_10"
            ],
            "totalPrice": 98.3,
            "updatedAt": 1788254323584
        },
        "PL_GW5_FUL_MUN": {
            "fixtureId": "PL_GW5_FUL_MUN",
            "matchTitle": "FUL vs MUN",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "mun_10",
            "playerIds": [
                "mun_1",
                "ful_4",
                "ful_5",
                "ful_6",
                "mun_3",
                "ful_9",
                "mun_9",
                "mun_10",
                "ful_16",
                "ful_17",
                "mun_16"
            ],
            "benchIds": [
                "ful_1",
                "ful_10",
                "mun_11",
                "mun_11"
            ],
            "totalPrice": 93.5,
            "updatedAt": 1788254323587
        },
        "LALIGA_MW8_ATM_RMA": {
            "fixtureId": "LALIGA_MW8_ATM_RMA",
            "matchTitle": "ATM vs RMA",
            "formation": "4-3-3",
            "captainId": "rma_17",
            "viceCaptainId": "rma_10",
            "playerIds": [
                "atm_1",
                "atm_3",
                "atm_4",
                "rma_3",
                "rma_6",
                "atm_10",
                "rma_10",
                "rma_11",
                "atm_18",
                "rma_17",
                "rma_19"
            ],
            "benchIds": [
                "rma_1",
                "atm_9",
                "atm_8",
                "rma_9"
            ],
            "totalPrice": 99.6,
            "updatedAt": 1788254323592
        },
        "LALIGA_MW8_ATH_SEV": {
            "fixtureId": "LALIGA_MW8_ATH_SEV",
            "matchTitle": "ATH vs SEV",
            "formation": "4-3-3",
            "captainId": "ath_11",
            "viceCaptainId": "ath_18",
            "playerIds": [
                "sev_1",
                "ath_3",
                "sev_3",
                "sev_8",
                "sev_6",
                "ath_11",
                "ath_10",
                "sev_10",
                "ath_18",
                "ath_19",
                "ath_17"
            ],
            "benchIds": [
                "ath_1",
                "ath_12",
                "sev_15",
                "sev_15"
            ],
            "totalPrice": 90.8,
            "updatedAt": 1788254323595
        },
        "PL_GW6_ARS_LEE": {
            "fixtureId": "PL_GW6_ARS_LEE",
            "matchTitle": "ARS vs LEE",
            "formation": "4-3-3",
            "captainId": "ars_9",
            "viceCaptainId": "ars_4",
            "playerIds": [
                "lee_1",
                "ars_4",
                "ars_5",
                "lee_5",
                "lee_3",
                "ars_9",
                "ars_11",
                "ars_10",
                "ars_16",
                "lee_16",
                "lee_17"
            ],
            "benchIds": [
                "ars_1",
                "ars_3",
                "lee_10",
                "lee_10"
            ],
            "totalPrice": 94.2,
            "updatedAt": 1788254323598
        },
        "PL_GW6_CHE_BOU": {
            "fixtureId": "PL_GW6_CHE_BOU",
            "matchTitle": "CHE vs BOU",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "bou_10",
            "playerIds": [
                "che_1",
                "che_3",
                "che_7",
                "bou_5",
                "bou_3",
                "che_9",
                "che_10",
                "bou_10",
                "bou_16",
                "bou_17",
                "bou_18"
            ],
            "benchIds": [
                "bou_1",
                "che_15",
                "che_15",
                "bou_11"
            ],
            "totalPrice": 91.8,
            "updatedAt": 1788254323600
        },
        "PL_GW6_MUN_TOT": {
            "fixtureId": "PL_GW6_MUN_TOT",
            "matchTitle": "MUN vs TOT",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "mun_10",
            "playerIds": [
                "mun_1",
                "mun_3",
                "mun_4",
                "tot_7",
                "tot_3",
                "mun_9",
                "mun_10",
                "tot_9",
                "mun_16",
                "tot_15",
                "tot_16"
            ],
            "benchIds": [
                "tot_1",
                "mun_11",
                "mun_11",
                "tot_12"
            ],
            "totalPrice": 97.2,
            "updatedAt": 1788254323604
        },
        "PL_GW6_LIV_MCI": {
            "fixtureId": "PL_GW6_LIV_MCI",
            "matchTitle": "LIV vs MCI",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "mci_6",
            "playerIds": [
                "mci_1",
                "mci_6",
                "mci_4",
                "mci_3",
                "mci_7",
                "liv_10",
                "liv_11",
                "liv_12",
                "liv_16",
                "liv_17",
                "liv_18"
            ],
            "benchIds": [
                "liv_1",
                "liv_9",
                "mci_11",
                "mci_11"
            ],
            "totalPrice": 99,
            "updatedAt": 1788254323607
        },
        "PL_GW7_EVE_CHE": {
            "fixtureId": "PL_GW7_EVE_CHE",
            "matchTitle": "EVE vs CHE",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_15",
            "playerIds": [
                "che_1",
                "eve_3",
                "eve_4",
                "eve_7",
                "che_3",
                "eve_9",
                "eve_10",
                "che_9",
                "eve_17",
                "che_15",
                "che_16"
            ],
            "benchIds": [
                "eve_1",
                "eve_15",
                "che_10",
                "che_10"
            ],
            "totalPrice": 93.6,
            "updatedAt": 1788254323609
        },
        "PL_GW7_BRE_LIV": {
            "fixtureId": "PL_GW7_BRE_LIV",
            "matchTitle": "BRE vs LIV",
            "formation": "4-3-3",
            "captainId": "bre_11",
            "viceCaptainId": "liv_10",
            "playerIds": [
                "bre_1",
                "bre_5",
                "bre_6",
                "liv_7",
                "liv_3",
                "bre_11",
                "liv_10",
                "liv_11",
                "bre_16",
                "bre_17",
                "liv_16"
            ],
            "benchIds": [
                "liv_1",
                "bre_12",
                "bre_12",
                "liv_12"
            ],
            "totalPrice": 90.7,
            "updatedAt": 1788254323610
        },
        "PL_GW7_MCI_IPS": {
            "fixtureId": "PL_GW7_MCI_IPS",
            "matchTitle": "MCI vs IPS",
            "formation": "4-3-3",
            "captainId": "mci_18",
            "viceCaptainId": "mci_6",
            "playerIds": [
                "mci_1",
                "mci_6",
                "mci_4",
                "mci_3",
                "ips_3",
                "ips_9",
                "ips_10",
                "ips_11",
                "mci_18",
                "ips_16",
                "ips_17"
            ],
            "benchIds": [
                "ips_1",
                "mci_11",
                "mci_11",
                "ips_13"
            ],
            "totalPrice": 95,
            "updatedAt": 1788254323612
        },
        "PL_GW7_LEE_MUN": {
            "fixtureId": "PL_GW7_LEE_MUN",
            "matchTitle": "LEE vs MUN",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "mun_10",
            "playerIds": [
                "lee_1",
                "lee_5",
                "lee_3",
                "lee_4",
                "mun_3",
                "mun_9",
                "mun_10",
                "mun_11",
                "lee_16",
                "lee_17",
                "mun_16"
            ],
            "benchIds": [
                "mun_1",
                "lee_10",
                "lee_10",
                "mun_13"
            ],
            "totalPrice": 94,
            "updatedAt": 1788254323614
        },
        "PL_GW7_NFO_ARS": {
            "fixtureId": "PL_GW7_NFO_ARS",
            "matchTitle": "NFO vs ARS",
            "formation": "4-3-3",
            "captainId": "ars_9",
            "viceCaptainId": "ars_4",
            "playerIds": [
                "nfo_1",
                "nfo_5",
                "ars_4",
                "ars_5",
                "ars_3",
                "nfo_9",
                "ars_9",
                "ars_11",
                "nfo_15",
                "nfo_16",
                "ars_16"
            ],
            "benchIds": [
                "ars_1",
                "nfo_11",
                "nfo_11",
                "ars_6"
            ],
            "totalPrice": 95,
            "updatedAt": 1788254323617
        },
        "LALIGA_MW10_SEV_FCB": {
            "fixtureId": "LALIGA_MW10_SEV_FCB",
            "matchTitle": "SEV vs FCB",
            "formation": "4-3-3",
            "captainId": "fcb_19",
            "viceCaptainId": "fcb_17",
            "playerIds": [
                "sev_1",
                "sev_3",
                "sev_8",
                "fcb_4",
                "fcb_5",
                "fcb_17",
                "fcb_18",
                "fcb_11",
                "sev_15",
                "sev_16",
                "fcb_19"
            ],
            "benchIds": [
                "fcb_2",
                "sev_7",
                "sev_18",
                "fcb_13"
            ],
            "totalPrice": 99.9,
            "updatedAt": 1788254323621
        },
        "PL_GW7_TOT_COV": {
            "fixtureId": "PL_GW7_TOT_COV",
            "matchTitle": "TOT vs COV",
            "formation": "4-3-3",
            "captainId": "tot_7",
            "viceCaptainId": "tot_9",
            "playerIds": [
                "cov_1",
                "tot_7",
                "tot_3",
                "tot_5",
                "tot_8",
                "tot_9",
                "cov_12",
                "cov_13",
                "tot_15",
                "cov_15",
                "cov_17"
            ],
            "benchIds": [
                "tot_1",
                "tot_12",
                "cov_4",
                "cov_4"
            ],
            "totalPrice": 75.8,
            "updatedAt": 1788254323623
        },
        "PL_GW8_AVL_MCI": {
            "fixtureId": "PL_GW8_AVL_MCI",
            "matchTitle": "AVL vs MCI",
            "formation": "4-3-3",
            "captainId": "mci_18",
            "viceCaptainId": "mci_6",
            "playerIds": [
                "mci_1",
                "mci_6",
                "mci_4",
                "mci_3",
                "mci_7",
                "avl_9",
                "avl_12",
                "avl_13",
                "avl_16",
                "avl_17",
                "mci_18"
            ],
            "benchIds": [
                "avl_1",
                "avl_14",
                "mci_11",
                "mci_11"
            ],
            "totalPrice": 97.5,
            "updatedAt": 1788254323625
        },
        "PL_GW8_ARS_EVE": {
            "fixtureId": "PL_GW8_ARS_EVE",
            "matchTitle": "ARS vs EVE",
            "formation": "4-3-3",
            "captainId": "ars_9",
            "viceCaptainId": "ars_4",
            "playerIds": [
                "eve_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "ars_9",
                "eve_9",
                "eve_10",
                "ars_16",
                "eve_17",
                "eve_18"
            ],
            "benchIds": [
                "ars_1",
                "ars_11",
                "eve_3",
                "eve_3"
            ],
            "totalPrice": 95.1,
            "updatedAt": 1788254323627
        },
        "PL_GW8_LIV_BHA": {
            "fixtureId": "PL_GW8_LIV_BHA",
            "matchTitle": "LIV vs BHA",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "bha_5",
            "playerIds": [
                "bha_1",
                "liv_7",
                "liv_3",
                "bha_5",
                "bha_3",
                "liv_10",
                "liv_11",
                "bha_9",
                "liv_16",
                "bha_16",
                "bha_17"
            ],
            "benchIds": [
                "liv_1",
                "liv_12",
                "bha_10",
                "bha_10"
            ],
            "totalPrice": 88.7,
            "updatedAt": 1788254323628
        },
        "PL_GW8_CHE_TOT": {
            "fixtureId": "PL_GW8_CHE_TOT",
            "matchTitle": "CHE vs TOT",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_10",
            "playerIds": [
                "che_1",
                "che_3",
                "che_7",
                "tot_7",
                "tot_3",
                "che_9",
                "che_10",
                "che_12",
                "tot_15",
                "tot_16",
                "tot_17"
            ],
            "benchIds": [
                "tot_1",
                "che_15",
                "che_15",
                "tot_9"
            ],
            "totalPrice": 94,
            "updatedAt": 1788254323632
        },
        "PL_GW8_MUN_BOU": {
            "fixtureId": "PL_GW8_MUN_BOU",
            "matchTitle": "MUN vs BOU",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "bou_10",
            "playerIds": [
                "mun_1",
                "mun_3",
                "bou_5",
                "bou_3",
                "bou_4",
                "mun_9",
                "mun_10",
                "bou_10",
                "mun_16",
                "bou_16",
                "bou_17"
            ],
            "benchIds": [
                "bou_1",
                "mun_11",
                "mun_11",
                "bou_11"
            ],
            "totalPrice": 97.5,
            "updatedAt": 1788254323635
        },
        "LALIGA_MW11_RMA_FCB": {
            "fixtureId": "LALIGA_MW11_RMA_FCB",
            "matchTitle": "RMA vs FCB",
            "formation": "4-3-3",
            "captainId": "rma_17",
            "viceCaptainId": "fcb_17",
            "playerIds": [
                "rma_1",
                "rma_3",
                "fcb_4",
                "fcb_5",
                "fcb_6",
                "fcb_17",
                "fcb_18",
                "fcb_11",
                "rma_17",
                "rma_20",
                "rma_19"
            ],
            "benchIds": [
                "rma_2",
                "rma_9",
                "fcb_10",
                "fcb_8"
            ],
            "totalPrice": 99.9,
            "updatedAt": 1788254323638
        },
        "PL_GW9_CHE_MUN": {
            "fixtureId": "PL_GW9_CHE_MUN",
            "matchTitle": "CHE vs MUN",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "che_9",
            "playerIds": [
                "che_1",
                "che_3",
                "che_7",
                "che_8",
                "mun_3",
                "che_9",
                "che_10",
                "mun_9",
                "mun_16",
                "mun_17",
                "mun_18"
            ],
            "benchIds": [
                "mun_1",
                "che_15",
                "che_15",
                "mun_10"
            ],
            "totalPrice": 99.2,
            "updatedAt": 1788254323641
        },
        "PL_GW9_MCI_BHA": {
            "fixtureId": "PL_GW9_MCI_BHA",
            "matchTitle": "MCI vs BHA",
            "formation": "4-3-3",
            "captainId": "mci_18",
            "viceCaptainId": "bha_5",
            "playerIds": [
                "mci_1",
                "mci_6",
                "mci_4",
                "mci_3",
                "bha_5",
                "bha_9",
                "bha_10",
                "bha_12",
                "mci_18",
                "bha_16",
                "bha_17"
            ],
            "benchIds": [
                "bha_1",
                "mci_11",
                "mci_11",
                "bha_14"
            ],
            "totalPrice": 95.7,
            "updatedAt": 1788254323642
        },
        "PL_GW9_TOT_CRY": {
            "fixtureId": "PL_GW9_TOT_CRY",
            "matchTitle": "TOT vs CRY",
            "formation": "4-3-3",
            "captainId": "cry_10",
            "viceCaptainId": "tot_7",
            "playerIds": [
                "cry_1",
                "tot_7",
                "tot_3",
                "cry_3",
                "cry_4",
                "tot_9",
                "tot_12",
                "cry_10",
                "tot_15",
                "cry_17",
                "cry_18"
            ],
            "benchIds": [
                "tot_1",
                "tot_13",
                "cry_11",
                "cry_11"
            ],
            "totalPrice": 81.3,
            "updatedAt": 1788254323643
        },
        "PL_GW9_LIV_ARS": {
            "fixtureId": "PL_GW9_LIV_ARS",
            "matchTitle": "LIV vs ARS",
            "formation": "4-3-3",
            "captainId": "ars_9",
            "viceCaptainId": "ars_4",
            "playerIds": [
                "ars_1",
                "liv_7",
                "liv_3",
                "liv_4",
                "ars_4",
                "liv_10",
                "ars_9",
                "ars_11",
                "liv_16",
                "ars_16",
                "ars_17"
            ],
            "benchIds": [
                "liv_1",
                "liv_11",
                "ars_5",
                "ars_5"
            ],
            "totalPrice": 99.1,
            "updatedAt": 1788254323644
        },
        "PL_GW10_ARS_HUL": {
            "fixtureId": "PL_GW10_ARS_HUL",
            "matchTitle": "ARS vs HUL",
            "formation": "4-3-3",
            "captainId": "ars_9",
            "viceCaptainId": "ars_4",
            "playerIds": [
                "ars_1",
                "ars_4",
                "hul_3",
                "hul_4",
                "hul_5",
                "ars_9",
                "ars_11",
                "hul_10",
                "ars_16",
                "ars_17",
                "hul_18"
            ],
            "benchIds": [
                "hul_1",
                "ars_5",
                "ars_5",
                "hul_6"
            ],
            "totalPrice": 84.7,
            "updatedAt": 1788254323645
        },
        "PL_GW10_CRY_LIV": {
            "fixtureId": "PL_GW10_CRY_LIV",
            "matchTitle": "CRY vs LIV",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "liv_11",
            "playerIds": [
                "liv_1",
                "cry_3",
                "cry_4",
                "liv_7",
                "liv_3",
                "cry_10",
                "liv_10",
                "liv_11",
                "cry_17",
                "cry_18",
                "liv_16"
            ],
            "benchIds": [
                "cry_1",
                "cry_11",
                "liv_12",
                "liv_12"
            ],
            "totalPrice": 90.5,
            "updatedAt": 1788254323646
        },
        "PL_GW10_LEE_TOT": {
            "fixtureId": "PL_GW10_LEE_TOT",
            "matchTitle": "LEE vs TOT",
            "formation": "4-3-3",
            "captainId": "lee_1",
            "viceCaptainId": "lee_5",
            "playerIds": [
                "lee_1",
                "lee_5",
                "lee_3",
                "lee_4",
                "lee_6",
                "tot_9",
                "tot_12",
                "tot_13",
                "lee_16",
                "tot_15",
                "tot_16"
            ],
            "benchIds": [
                "tot_1",
                "lee_10",
                "lee_10",
                "tot_7"
            ],
            "totalPrice": 80.2,
            "updatedAt": 1788254323647
        },
        "PL_GW10_MUN_AVL": {
            "fixtureId": "PL_GW10_MUN_AVL",
            "matchTitle": "MUN vs AVL",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "mun_10",
            "playerIds": [
                "mun_1",
                "mun_3",
                "mun_4",
                "avl_3",
                "avl_4",
                "mun_9",
                "mun_10",
                "avl_9",
                "mun_16",
                "avl_16",
                "avl_17"
            ],
            "benchIds": [
                "avl_1",
                "mun_11",
                "mun_11",
                "avl_12"
            ],
            "totalPrice": 95,
            "updatedAt": 1788254323649
        },
        "PL_GW10_NFO_MCI": {
            "fixtureId": "PL_GW10_NFO_MCI",
            "matchTitle": "NFO vs MCI",
            "formation": "4-3-3",
            "captainId": "mci_18",
            "viceCaptainId": "nfo_9",
            "playerIds": [
                "mci_1",
                "nfo_5",
                "mci_6",
                "mci_4",
                "mci_3",
                "nfo_9",
                "nfo_11",
                "nfo_12",
                "nfo_15",
                "nfo_16",
                "mci_18"
            ],
            "benchIds": [
                "nfo_1",
                "nfo_6",
                "mci_11",
                "mci_11"
            ],
            "totalPrice": 99.8,
            "updatedAt": 1788254323650
        },
        "PL_GW10_SUN_CHE": {
            "fixtureId": "PL_GW10_SUN_CHE",
            "matchTitle": "SUN vs CHE",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_15",
            "playerIds": [
                "sun_1",
                "sun_3",
                "sun_4",
                "sun_6",
                "che_3",
                "che_9",
                "che_10",
                "che_12",
                "sun_18",
                "sun_17",
                "che_15"
            ],
            "benchIds": [
                "che_1",
                "sun_10",
                "sun_10",
                "che_14"
            ],
            "totalPrice": 89.7,
            "updatedAt": 1788254323652
        },
        "LALIGA_MW13_ATM_SEV": {
            "fixtureId": "LALIGA_MW13_ATM_SEV",
            "matchTitle": "ATM vs SEV",
            "formation": "4-3-3",
            "captainId": "atm_18",
            "viceCaptainId": "sev_15",
            "playerIds": [
                "atm_1",
                "atm_3",
                "sev_3",
                "sev_8",
                "sev_6",
                "atm_10",
                "atm_12",
                "atm_11",
                "atm_18",
                "sev_15",
                "sev_16"
            ],
            "benchIds": [
                "sev_1",
                "atm_17",
                "atm_17",
                "sev_18"
            ],
            "totalPrice": 94.3,
            "updatedAt": 1788254323654
        },
        "LALIGA_MW13_ATH_FCB": {
            "fixtureId": "LALIGA_MW13_ATH_FCB",
            "matchTitle": "ATH vs FCB",
            "formation": "4-3-3",
            "captainId": "fcb_17",
            "viceCaptainId": "ath_11",
            "playerIds": [
                "fcb_2",
                "ath_3",
                "fcb_4",
                "fcb_5",
                "fcb_6",
                "ath_11",
                "ath_10",
                "fcb_17",
                "ath_18",
                "ath_19",
                "ath_17"
            ],
            "benchIds": [
                "fcb_3",
                "ath_8",
                "ath_12",
                "fcb_19"
            ],
            "totalPrice": 99.5,
            "updatedAt": 1788254323657
        },
        "PL_GW11_CHE_LEE": {
            "fixtureId": "PL_GW11_CHE_LEE",
            "matchTitle": "CHE vs LEE",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_15",
            "playerIds": [
                "lee_1",
                "che_3",
                "lee_5",
                "lee_3",
                "lee_4",
                "che_9",
                "che_10",
                "che_12",
                "che_15",
                "lee_16",
                "lee_17"
            ],
            "benchIds": [
                "che_1",
                "che_14",
                "lee_10",
                "lee_10"
            ],
            "totalPrice": 90.2,
            "updatedAt": 1788254323658
        },
        "PL_GW11_LIV_MUN": {
            "fixtureId": "PL_GW11_LIV_MUN",
            "matchTitle": "LIV vs MUN",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "liv_10",
            "playerIds": [
                "liv_1",
                "liv_7",
                "mun_3",
                "mun_4",
                "mun_7",
                "liv_10",
                "liv_11",
                "mun_9",
                "liv_16",
                "mun_16",
                "mun_17"
            ],
            "benchIds": [
                "mun_1",
                "liv_12",
                "liv_12",
                "mun_10"
            ],
            "totalPrice": 98.4,
            "updatedAt": 1788254323659
        },
        "PL_GW11_MCI_FUL": {
            "fixtureId": "PL_GW11_MCI_FUL",
            "matchTitle": "MCI vs FUL",
            "formation": "4-3-3",
            "captainId": "mci_18",
            "viceCaptainId": "mci_6",
            "playerIds": [
                "mci_1",
                "mci_6",
                "mci_4",
                "mci_3",
                "mci_7",
                "ful_9",
                "ful_10",
                "ful_11",
                "mci_18",
                "ful_16",
                "ful_17"
            ],
            "benchIds": [
                "ful_1",
                "mci_11",
                "mci_11",
                "ful_4"
            ],
            "totalPrice": 97,
            "updatedAt": 1788254323660
        },
        "PL_GW11_NEW_ARS": {
            "fixtureId": "PL_GW11_NEW_ARS",
            "matchTitle": "NEW vs ARS",
            "formation": "4-3-3",
            "captainId": "ars_9",
            "viceCaptainId": "ars_4",
            "playerIds": [
                "new_1",
                "new_3",
                "new_8",
                "ars_4",
                "ars_5",
                "ars_9",
                "ars_11",
                "ars_10",
                "new_15",
                "new_17",
                "ars_16"
            ],
            "benchIds": [
                "ars_1",
                "new_9",
                "new_9",
                "ars_3"
            ],
            "totalPrice": 94.9,
            "updatedAt": 1788254323662
        },
        "PL_GW11_TOT_IPS": {
            "fixtureId": "PL_GW11_TOT_IPS",
            "matchTitle": "TOT vs IPS",
            "formation": "4-3-3",
            "captainId": "ips_16",
            "viceCaptainId": "ips_3",
            "playerIds": [
                "ips_1",
                "tot_7",
                "ips_3",
                "ips_4",
                "ips_5",
                "tot_9",
                "tot_12",
                "tot_13",
                "tot_15",
                "ips_16",
                "ips_17"
            ],
            "benchIds": [
                "tot_1",
                "tot_3",
                "ips_9",
                "ips_9"
            ],
            "totalPrice": 76.3,
            "updatedAt": 1788254323664
        },
        "PL_GW12_ARS_MCI": {
            "fixtureId": "PL_GW12_ARS_MCI",
            "matchTitle": "ARS vs MCI",
            "formation": "4-3-3",
            "captainId": "mci_11",
            "viceCaptainId": "ars_9",
            "playerIds": [
                "mci_1",
                "ars_4",
                "ars_5",
                "mci_6",
                "mci_4",
                "ars_9",
                "ars_11",
                "mci_11",
                "ars_16",
                "ars_18",
                "mci_18"
            ],
            "benchIds": [
                "ars_1",
                "ars_8",
                "mci_9",
                "mci_17"
            ],
            "totalPrice": 99.8,
            "updatedAt": 1788254323665
        },
        "PL_GW12_EVE_LIV": {
            "fixtureId": "PL_GW12_EVE_LIV",
            "matchTitle": "EVE vs LIV",
            "formation": "4-3-3",
            "captainId": "eve_3",
            "viceCaptainId": "liv_10",
            "playerIds": [
                "liv_1",
                "eve_3",
                "eve_4",
                "eve_7",
                "liv_7",
                "eve_9",
                "liv_10",
                "liv_11",
                "eve_17",
                "eve_18",
                "liv_16"
            ],
            "benchIds": [
                "eve_1",
                "eve_10",
                "liv_12",
                "liv_12"
            ],
            "totalPrice": 91.4,
            "updatedAt": 1788254323666
        },
        "PL_GW12_MUN_BRE": {
            "fixtureId": "PL_GW12_MUN_BRE",
            "matchTitle": "MUN vs BRE",
            "formation": "4-3-3",
            "captainId": "bre_11",
            "viceCaptainId": "bre_12",
            "playerIds": [
                "mun_1",
                "mun_3",
                "bre_5",
                "bre_6",
                "bre_3",
                "bre_11",
                "bre_12",
                "bre_10",
                "mun_16",
                "mun_17",
                "mun_18"
            ],
            "benchIds": [
                "bre_1",
                "mun_9",
                "mun_9",
                "bre_15"
            ],
            "totalPrice": 92.6,
            "updatedAt": 1788254323668
        },
        "PL_GW12_NFO_CHE": {
            "fixtureId": "PL_GW12_NFO_CHE",
            "matchTitle": "NFO vs CHE",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "nfo_9",
            "playerIds": [
                "che_1",
                "nfo_5",
                "nfo_3",
                "che_3",
                "che_7",
                "nfo_9",
                "che_9",
                "che_10",
                "nfo_15",
                "nfo_16",
                "nfo_17"
            ],
            "benchIds": [
                "nfo_1",
                "nfo_11",
                "che_15",
                "che_15"
            ],
            "totalPrice": 94.1,
            "updatedAt": 1788254323670
        },
        "PL_GW12_SUN_TOT": {
            "fixtureId": "PL_GW12_SUN_TOT",
            "matchTitle": "SUN vs TOT",
            "formation": "4-3-3",
            "captainId": "sun_3",
            "viceCaptainId": "sun_18",
            "playerIds": [
                "sun_1",
                "sun_3",
                "sun_4",
                "sun_6",
                "sun_7",
                "tot_9",
                "tot_12",
                "tot_13",
                "sun_18",
                "tot_15",
                "tot_16"
            ],
            "benchIds": [
                "tot_1",
                "sun_10",
                "sun_10",
                "tot_7"
            ],
            "totalPrice": 79.2,
            "updatedAt": 1788254323671
        },
        "PL_GW13_BRE_ARS": {
            "fixtureId": "PL_GW13_BRE_ARS",
            "matchTitle": "BRE vs ARS",
            "formation": "4-3-3",
            "captainId": "ars_4",
            "viceCaptainId": "bre_11",
            "playerIds": [
                "ars_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "bre_11",
                "bre_12",
                "bre_10",
                "bre_16",
                "bre_17",
                "ars_16"
            ],
            "benchIds": [
                "bre_1",
                "bre_5",
                "ars_9",
                "ars_9"
            ],
            "totalPrice": 97.3,
            "updatedAt": 1788254323673
        },
        "PL_GW13_CHE_CRY": {
            "fixtureId": "PL_GW13_CHE_CRY",
            "matchTitle": "CHE vs CRY",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_15",
            "playerIds": [
                "che_1",
                "che_3",
                "che_7",
                "che_8",
                "cry_3",
                "che_9",
                "cry_10",
                "cry_11",
                "che_15",
                "cry_17",
                "cry_18"
            ],
            "benchIds": [
                "cry_1",
                "che_10",
                "che_10",
                "cry_14"
            ],
            "totalPrice": 89.7,
            "updatedAt": 1788254323674
        },
        "PL_GW13_LIV_SUN": {
            "fixtureId": "PL_GW13_LIV_SUN",
            "matchTitle": "LIV vs SUN",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "liv_11",
            "playerIds": [
                "sun_1",
                "liv_7",
                "sun_3",
                "sun_4",
                "sun_6",
                "liv_10",
                "liv_11",
                "liv_12",
                "liv_16",
                "sun_18",
                "sun_17"
            ],
            "benchIds": [
                "liv_1",
                "liv_9",
                "sun_10",
                "sun_10"
            ],
            "totalPrice": 90,
            "updatedAt": 1788254323675
        },
        "PL_GW13_MCI_LEE": {
            "fixtureId": "PL_GW13_MCI_LEE",
            "matchTitle": "MCI vs LEE",
            "formation": "4-3-3",
            "captainId": "mci_11",
            "viceCaptainId": "mci_18",
            "playerIds": [
                "lee_1",
                "mci_6",
                "lee_5",
                "lee_3",
                "lee_4",
                "mci_11",
                "mci_12",
                "mci_10",
                "mci_18",
                "lee_16",
                "lee_17"
            ],
            "benchIds": [
                "mci_1",
                "mci_4",
                "lee_10",
                "lee_10"
            ],
            "totalPrice": 98.8,
            "updatedAt": 1788254323676
        },
        "PL_GW13_NEW_MUN": {
            "fixtureId": "PL_GW13_NEW_MUN",
            "matchTitle": "NEW vs MUN",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "new_3",
            "playerIds": [
                "new_1",
                "new_3",
                "new_8",
                "new_4",
                "mun_3",
                "mun_9",
                "mun_10",
                "mun_11",
                "new_15",
                "new_17",
                "mun_16"
            ],
            "benchIds": [
                "mun_1",
                "new_9",
                "new_9",
                "mun_13"
            ],
            "totalPrice": 94.7,
            "updatedAt": 1788254323678
        },
        "PL_GW13_TOT_FUL": {
            "fixtureId": "PL_GW13_TOT_FUL",
            "matchTitle": "TOT vs FUL",
            "formation": "4-3-3",
            "captainId": "ful_9",
            "viceCaptainId": "ful_16",
            "playerIds": [
                "ful_1",
                "tot_7",
                "tot_3",
                "tot_5",
                "tot_8",
                "ful_9",
                "ful_10",
                "ful_11",
                "tot_15",
                "tot_16",
                "ful_16"
            ],
            "benchIds": [
                "tot_1",
                "tot_9",
                "ful_4",
                "ful_4"
            ],
            "totalPrice": 79.3,
            "updatedAt": 1788254323680
        },
        "LALIGA_MW15_ATH_RMA": {
            "fixtureId": "LALIGA_MW15_ATH_RMA",
            "matchTitle": "ATH vs RMA",
            "formation": "4-3-3",
            "captainId": "rma_17",
            "viceCaptainId": "rma_16",
            "playerIds": [
                "rma_1",
                "ath_3",
                "ath_4",
                "rma_3",
                "rma_6",
                "ath_11",
                "ath_10",
                "ath_12",
                "ath_18",
                "rma_17",
                "rma_16"
            ],
            "benchIds": [
                "ath_1",
                "ath_8",
                "rma_9",
                "rma_8"
            ],
            "totalPrice": 99.8,
            "updatedAt": 1788254323683
        },
        "PL_GW14_BRE_MCI": {
            "fixtureId": "PL_GW14_BRE_MCI",
            "matchTitle": "BRE vs MCI",
            "formation": "4-3-3",
            "captainId": "bre_11",
            "viceCaptainId": "mci_18",
            "playerIds": [
                "mci_1",
                "bre_5",
                "mci_6",
                "mci_4",
                "mci_3",
                "bre_11",
                "bre_12",
                "bre_10",
                "bre_16",
                "bre_17",
                "mci_18"
            ],
            "benchIds": [
                "bre_1",
                "bre_6",
                "mci_11",
                "mci_11"
            ],
            "totalPrice": 99.2,
            "updatedAt": 1788254323684
        },
        "PL_GW14_CHE_LIV": {
            "fixtureId": "PL_GW14_CHE_LIV",
            "matchTitle": "CHE vs LIV",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_15",
            "playerIds": [
                "liv_1",
                "che_3",
                "che_7",
                "che_8",
                "liv_7",
                "che_9",
                "liv_10",
                "liv_11",
                "che_15",
                "che_16",
                "liv_16"
            ],
            "benchIds": [
                "liv_2",
                "che_10",
                "che_10",
                "liv_12"
            ],
            "totalPrice": 98.1,
            "updatedAt": 1788254323685
        },
        "PL_GW14_MUN_COV": {
            "fixtureId": "PL_GW14_MUN_COV",
            "matchTitle": "MUN vs COV",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "mun_10",
            "playerIds": [
                "mun_1",
                "mun_3",
                "mun_4",
                "cov_4",
                "cov_5",
                "mun_9",
                "mun_10",
                "cov_12",
                "mun_16",
                "cov_15",
                "cov_17"
            ],
            "benchIds": [
                "cov_1",
                "mun_11",
                "mun_11",
                "cov_13"
            ],
            "totalPrice": 91,
            "updatedAt": 1788254323688
        },
        "PL_GW14_TOT_ARS": {
            "fixtureId": "PL_GW14_TOT_ARS",
            "matchTitle": "TOT vs ARS",
            "formation": "4-3-3",
            "captainId": "ars_4",
            "viceCaptainId": "ars_5",
            "playerIds": [
                "ars_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "tot_9",
                "tot_12",
                "tot_13",
                "tot_15",
                "tot_16",
                "ars_16"
            ],
            "benchIds": [
                "tot_1",
                "tot_7",
                "ars_9",
                "ars_9"
            ],
            "totalPrice": 95.3,
            "updatedAt": 1788254323690
        },
        "LALIGA_MW16_ATM_ATH": {
            "fixtureId": "LALIGA_MW16_ATM_ATH",
            "matchTitle": "ATM vs ATH",
            "formation": "4-3-3",
            "captainId": "atm_18",
            "viceCaptainId": "ath_11",
            "playerIds": [
                "ath_1",
                "atm_3",
                "atm_4",
                "ath_3",
                "ath_4",
                "atm_10",
                "atm_12",
                "ath_11",
                "atm_18",
                "ath_18",
                "ath_19"
            ],
            "benchIds": [
                "atm_1",
                "atm_17",
                "ath_10",
                "ath_10"
            ],
            "totalPrice": 99.9,
            "updatedAt": 1788254323693
        },
        "PL_GW15_ARS_BOU": {
            "fixtureId": "PL_GW15_ARS_BOU",
            "matchTitle": "ARS vs BOU",
            "formation": "4-3-3",
            "captainId": "ars_4",
            "viceCaptainId": "ars_5",
            "playerIds": [
                "ars_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "bou_10",
                "bou_11",
                "bou_12",
                "ars_16",
                "bou_16",
                "bou_17"
            ],
            "benchIds": [
                "bou_1",
                "ars_9",
                "ars_9",
                "bou_5"
            ],
            "totalPrice": 96.6,
            "updatedAt": 1788254323694
        },
        "PL_GW15_CRY_MUN": {
            "fixtureId": "PL_GW15_CRY_MUN",
            "matchTitle": "CRY vs MUN",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "mun_10",
            "playerIds": [
                "mun_1",
                "cry_3",
                "cry_4",
                "mun_3",
                "mun_4",
                "cry_10",
                "mun_9",
                "mun_10",
                "cry_17",
                "cry_18",
                "mun_16"
            ],
            "benchIds": [
                "cry_1",
                "cry_11",
                "mun_11",
                "mun_11"
            ],
            "totalPrice": 95.5,
            "updatedAt": 1788254323696
        },
        "PL_GW15_HUL_TOT": {
            "fixtureId": "PL_GW15_HUL_TOT",
            "matchTitle": "HUL vs TOT",
            "formation": "4-3-3",
            "captainId": "hul_1",
            "viceCaptainId": "hul_3",
            "playerIds": [
                "hul_1",
                "hul_3",
                "hul_4",
                "hul_5",
                "tot_7",
                "hul_10",
                "tot_9",
                "tot_12",
                "hul_18",
                "tot_15",
                "tot_16"
            ],
            "benchIds": [
                "tot_1",
                "hul_6",
                "hul_6",
                "tot_13"
            ],
            "totalPrice": 73.3,
            "updatedAt": 1788254323697
        },
        "PL_GW15_LIV_LEE": {
            "fixtureId": "PL_GW15_LIV_LEE",
            "matchTitle": "LIV vs LEE",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "liv_11",
            "playerIds": [
                "lee_1",
                "liv_7",
                "lee_5",
                "lee_3",
                "lee_4",
                "liv_10",
                "liv_11",
                "liv_12",
                "liv_16",
                "lee_16",
                "lee_17"
            ],
            "benchIds": [
                "liv_1",
                "liv_9",
                "lee_10",
                "lee_10"
            ],
            "totalPrice": 90.5,
            "updatedAt": 1788254323698
        },
        "PL_GW15_MCI_CHE": {
            "fixtureId": "PL_GW15_MCI_CHE",
            "matchTitle": "MCI vs CHE",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_15",
            "playerIds": [
                "mci_1",
                "mci_6",
                "mci_4",
                "mci_3",
                "mci_7",
                "che_9",
                "che_10",
                "che_12",
                "che_15",
                "che_16",
                "che_17"
            ],
            "benchIds": [
                "che_1",
                "mci_11",
                "mci_11",
                "che_14"
            ],
            "totalPrice": 96.6,
            "updatedAt": 1788254323700
        },
        "PL_GW16_ARS_MUN": {
            "fixtureId": "PL_GW16_ARS_MUN",
            "matchTitle": "ARS vs MUN",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "ars_9",
            "playerIds": [
                "ars_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "mun_3",
                "ars_9",
                "ars_11",
                "mun_9",
                "mun_16",
                "mun_17",
                "mun_18"
            ],
            "benchIds": [
                "mun_1",
                "ars_6",
                "ars_6",
                "mun_10"
            ],
            "totalPrice": 99.1,
            "updatedAt": 1788254323702
        },
        "PL_GW16_CHE_AVL": {
            "fixtureId": "PL_GW16_CHE_AVL",
            "matchTitle": "CHE vs AVL",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_10",
            "playerIds": [
                "avl_1",
                "che_3",
                "che_7",
                "che_8",
                "avl_3",
                "che_9",
                "che_10",
                "che_12",
                "avl_16",
                "avl_17",
                "avl_15"
            ],
            "benchIds": [
                "avl_2",
                "che_15",
                "che_15",
                "avl_9"
            ],
            "totalPrice": 93.6,
            "updatedAt": 1788254323705
        },
        "PL_GW16_LIV_TOT": {
            "fixtureId": "PL_GW16_LIV_TOT",
            "matchTitle": "LIV vs TOT",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "liv_11",
            "playerIds": [
                "liv_1",
                "liv_7",
                "liv_3",
                "tot_7",
                "tot_3",
                "liv_10",
                "liv_11",
                "tot_9",
                "liv_16",
                "tot_15",
                "tot_16"
            ],
            "benchIds": [
                "tot_1",
                "liv_12",
                "liv_12",
                "tot_12"
            ],
            "totalPrice": 92.2,
            "updatedAt": 1788254323706
        },
        "PL_GW16_MCI_HUL": {
            "fixtureId": "PL_GW16_MCI_HUL",
            "matchTitle": "MCI vs HUL",
            "formation": "4-3-3",
            "captainId": "mci_11",
            "viceCaptainId": "hul_3",
            "playerIds": [
                "mci_1",
                "mci_6",
                "hul_3",
                "hul_4",
                "hul_5",
                "mci_11",
                "hul_10",
                "hul_16",
                "mci_18",
                "mci_12",
                "mci_10"
            ],
            "benchIds": [
                "hul_1",
                "mci_4",
                "mci_4",
                "hul_6"
            ],
            "totalPrice": 91.9,
            "updatedAt": 1788254323709
        },
        "LALIGA_MW18_FCB_ATM": {
            "fixtureId": "LALIGA_MW18_FCB_ATM",
            "matchTitle": "FCB vs ATM",
            "formation": "4-3-3",
            "captainId": "fcb_17",
            "viceCaptainId": "fcb_18",
            "playerIds": [
                "fcb_2",
                "fcb_4",
                "fcb_5",
                "fcb_6",
                "atm_3",
                "fcb_17",
                "fcb_18",
                "atm_10",
                "atm_18",
                "atm_17",
                "atm_19"
            ],
            "benchIds": [
                "fcb_3",
                "fcb_10",
                "atm_12",
                "atm_12"
            ],
            "totalPrice": 99.7,
            "updatedAt": 1788254323713
        },
        "LALIGA_MW18_SEV_ATH": {
            "fixtureId": "LALIGA_MW18_SEV_ATH",
            "matchTitle": "SEV vs ATH",
            "formation": "4-3-3",
            "captainId": "ath_11",
            "viceCaptainId": "ath_18",
            "playerIds": [
                "sev_1",
                "sev_3",
                "sev_8",
                "sev_6",
                "ath_3",
                "sev_10",
                "ath_11",
                "ath_10",
                "ath_18",
                "ath_19",
                "ath_17"
            ],
            "benchIds": [
                "ath_1",
                "sev_15",
                "sev_15",
                "ath_12"
            ],
            "totalPrice": 90.8,
            "updatedAt": 1788254323716
        },
        "PL_GW17_COV_CHE": {
            "fixtureId": "PL_GW17_COV_CHE",
            "matchTitle": "COV vs CHE",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_10",
            "playerIds": [
                "che_1",
                "cov_4",
                "cov_5",
                "che_3",
                "che_7",
                "che_9",
                "che_10",
                "che_12",
                "cov_15",
                "cov_17",
                "cov_18"
            ],
            "benchIds": [
                "cov_1",
                "cov_12",
                "che_15",
                "che_15"
            ],
            "totalPrice": 87.3,
            "updatedAt": 1788254323719
        },
        "PL_GW17_CRY_ARS": {
            "fixtureId": "PL_GW17_CRY_ARS",
            "matchTitle": "CRY vs ARS",
            "formation": "4-3-3",
            "captainId": "ars_4",
            "viceCaptainId": "ars_5",
            "playerIds": [
                "ars_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "cry_10",
                "cry_11",
                "cry_14",
                "cry_17",
                "cry_18",
                "ars_16"
            ],
            "benchIds": [
                "cry_1",
                "cry_3",
                "ars_9",
                "ars_9"
            ],
            "totalPrice": 94.6,
            "updatedAt": 1788254323721
        },
        "PL_GW17_HUL_LIV": {
            "fixtureId": "PL_GW17_HUL_LIV",
            "matchTitle": "HUL vs LIV",
            "formation": "4-3-3",
            "captainId": "hul_3",
            "viceCaptainId": "liv_10",
            "playerIds": [
                "liv_1",
                "hul_3",
                "hul_4",
                "hul_5",
                "hul_6",
                "hul_10",
                "liv_10",
                "liv_11",
                "hul_18",
                "liv_16",
                "liv_17"
            ],
            "benchIds": [
                "hul_1",
                "hul_16",
                "liv_12",
                "liv_12"
            ],
            "totalPrice": 84.6,
            "updatedAt": 1788254323723
        },
        "PL_GW17_MUN_NFO": {
            "fixtureId": "PL_GW17_MUN_NFO",
            "matchTitle": "MUN vs NFO",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "nfo_9",
            "playerIds": [
                "mun_1",
                "mun_3",
                "nfo_5",
                "nfo_3",
                "nfo_4",
                "mun_9",
                "mun_10",
                "nfo_9",
                "mun_16",
                "nfo_15",
                "nfo_16"
            ],
            "benchIds": [
                "nfo_1",
                "mun_11",
                "mun_11",
                "nfo_11"
            ],
            "totalPrice": 99.3,
            "updatedAt": 1788254323726
        },
        "PL_GW17_NEW_MCI": {
            "fixtureId": "PL_GW17_NEW_MCI",
            "matchTitle": "NEW vs MCI",
            "formation": "4-3-3",
            "captainId": "mci_11",
            "viceCaptainId": "mci_18",
            "playerIds": [
                "new_1",
                "new_3",
                "new_8",
                "new_4",
                "mci_6",
                "mci_11",
                "mci_12",
                "mci_10",
                "new_15",
                "new_17",
                "mci_18"
            ],
            "benchIds": [
                "mci_1",
                "new_9",
                "new_9",
                "mci_4"
            ],
            "totalPrice": 99.5,
            "updatedAt": 1788254323728
        },
        "PL_GW17_TOT_BOU": {
            "fixtureId": "PL_GW17_TOT_BOU",
            "matchTitle": "TOT vs BOU",
            "formation": "4-3-3",
            "captainId": "bou_10",
            "viceCaptainId": "bou_16",
            "playerIds": [
                "bou_1",
                "tot_7",
                "bou_5",
                "bou_3",
                "bou_4",
                "tot_9",
                "tot_12",
                "bou_10",
                "tot_15",
                "tot_16",
                "bou_16"
            ],
            "benchIds": [
                "tot_1",
                "tot_13",
                "bou_11",
                "bou_11"
            ],
            "totalPrice": 82.7,
            "updatedAt": 1788254323731
        },
        "PL_GW18_AVL_LIV": {
            "fixtureId": "PL_GW18_AVL_LIV",
            "matchTitle": "AVL vs LIV",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "liv_11",
            "playerIds": [
                "liv_1",
                "avl_3",
                "avl_4",
                "liv_7",
                "liv_3",
                "avl_9",
                "liv_10",
                "liv_11",
                "avl_16",
                "avl_17",
                "liv_16"
            ],
            "benchIds": [
                "avl_1",
                "avl_12",
                "liv_12",
                "liv_12"
            ],
            "totalPrice": 90,
            "updatedAt": 1788254323733
        },
        "PL_GW18_EVE_MCI": {
            "fixtureId": "PL_GW18_EVE_MCI",
            "matchTitle": "EVE vs MCI",
            "formation": "4-3-3",
            "captainId": "eve_3",
            "viceCaptainId": "mci_18",
            "playerIds": [
                "mci_1",
                "eve_3",
                "mci_6",
                "mci_4",
                "mci_3",
                "eve_9",
                "eve_10",
                "eve_15",
                "eve_17",
                "eve_18",
                "mci_18"
            ],
            "benchIds": [
                "eve_1",
                "eve_4",
                "mci_11",
                "mci_11"
            ],
            "totalPrice": 99.9,
            "updatedAt": 1788254323734
        },
        "PL_GW18_FUL_ARS": {
            "fixtureId": "PL_GW18_FUL_ARS",
            "matchTitle": "FUL vs ARS",
            "formation": "4-3-3",
            "captainId": "ars_9",
            "viceCaptainId": "ars_4",
            "playerIds": [
                "ful_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "ful_9",
                "ful_10",
                "ars_9",
                "ful_16",
                "ful_17",
                "ars_16"
            ],
            "benchIds": [
                "ars_1",
                "ful_4",
                "ful_4",
                "ars_11"
            ],
            "totalPrice": 90.2,
            "updatedAt": 1788254323738
        },
        "PL_GW18_IPS_CHE": {
            "fixtureId": "PL_GW18_IPS_CHE",
            "matchTitle": "IPS vs CHE",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_10",
            "playerIds": [
                "che_1",
                "ips_3",
                "ips_4",
                "che_3",
                "che_7",
                "che_9",
                "che_10",
                "che_12",
                "ips_16",
                "ips_17",
                "ips_18"
            ],
            "benchIds": [
                "ips_1",
                "ips_9",
                "che_15",
                "che_15"
            ],
            "totalPrice": 87.3,
            "updatedAt": 1788254323741
        },
        "PL_GW18_MUN_SUN": {
            "fixtureId": "PL_GW18_MUN_SUN",
            "matchTitle": "MUN vs SUN",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "mun_10",
            "playerIds": [
                "sun_1",
                "mun_3",
                "sun_3",
                "sun_4",
                "sun_6",
                "mun_9",
                "mun_10",
                "mun_11",
                "mun_16",
                "sun_18",
                "sun_17"
            ],
            "benchIds": [
                "mun_1",
                "mun_13",
                "sun_10",
                "sun_10"
            ],
            "totalPrice": 93.5,
            "updatedAt": 1788254323744
        },
        "PL_GW18_TOT_BHA": {
            "fixtureId": "PL_GW18_TOT_BHA",
            "matchTitle": "TOT vs BHA",
            "formation": "4-3-3",
            "captainId": "bha_9",
            "viceCaptainId": "bha_10",
            "playerIds": [
                "bha_1",
                "tot_7",
                "tot_3",
                "tot_5",
                "tot_8",
                "bha_9",
                "bha_10",
                "bha_12",
                "tot_15",
                "bha_16",
                "bha_17"
            ],
            "benchIds": [
                "tot_1",
                "tot_9",
                "bha_5",
                "bha_5"
            ],
            "totalPrice": 78.8,
            "updatedAt": 1788254323747
        },
        "PL_GW19_ARS_IPS": {
            "fixtureId": "PL_GW19_ARS_IPS",
            "matchTitle": "ARS vs IPS",
            "formation": "4-3-3",
            "captainId": "ars_4",
            "viceCaptainId": "ars_5",
            "playerIds": [
                "ars_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "ips_9",
                "ips_10",
                "ips_11",
                "ars_16",
                "ips_16",
                "ips_17"
            ],
            "benchIds": [
                "ips_1",
                "ars_9",
                "ars_9",
                "ips_3"
            ],
            "totalPrice": 92.6,
            "updatedAt": 1788254323751
        },
        "PL_GW19_BHA_MUN": {
            "fixtureId": "PL_GW19_BHA_MUN",
            "matchTitle": "BHA vs MUN",
            "formation": "4-3-3",
            "captainId": "bha_5",
            "viceCaptainId": "bha_9",
            "playerIds": [
                "mun_1",
                "bha_5",
                "mun_3",
                "mun_4",
                "mun_7",
                "bha_9",
                "bha_10",
                "bha_12",
                "bha_16",
                "bha_17",
                "mun_16"
            ],
            "benchIds": [
                "bha_1",
                "bha_14",
                "mun_9",
                "mun_9"
            ],
            "totalPrice": 91.7,
            "updatedAt": 1788254323754
        },
        "PL_GW19_CHE_NEW": {
            "fixtureId": "PL_GW19_CHE_NEW",
            "matchTitle": "CHE vs NEW",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_15",
            "playerIds": [
                "new_1",
                "che_3",
                "new_3",
                "new_8",
                "new_4",
                "che_9",
                "che_10",
                "che_12",
                "che_15",
                "new_15",
                "new_17"
            ],
            "benchIds": [
                "che_1",
                "che_14",
                "new_9",
                "new_9"
            ],
            "totalPrice": 90.9,
            "updatedAt": 1788254323756
        },
        "PL_GW19_LIV_COV": {
            "fixtureId": "PL_GW19_LIV_COV",
            "matchTitle": "LIV vs COV",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "liv_11",
            "playerIds": [
                "liv_1",
                "liv_7",
                "liv_3",
                "cov_4",
                "cov_5",
                "liv_10",
                "liv_11",
                "cov_12",
                "liv_16",
                "cov_15",
                "cov_17"
            ],
            "benchIds": [
                "cov_1",
                "liv_12",
                "liv_12",
                "cov_13"
            ],
            "totalPrice": 86,
            "updatedAt": 1788254323757
        },
        "PL_GW19_MCI_TOT": {
            "fixtureId": "PL_GW19_MCI_TOT",
            "matchTitle": "MCI vs TOT",
            "formation": "4-3-3",
            "captainId": "mci_18",
            "viceCaptainId": "mci_6",
            "playerIds": [
                "mci_1",
                "mci_6",
                "mci_4",
                "mci_3",
                "mci_7",
                "tot_9",
                "tot_12",
                "tot_13",
                "mci_18",
                "tot_15",
                "tot_16"
            ],
            "benchIds": [
                "tot_1",
                "mci_11",
                "mci_11",
                "tot_7"
            ],
            "totalPrice": 98.2,
            "updatedAt": 1788254323758
        },
        "PL_GW20_ARS_BRE": {
            "fixtureId": "PL_GW20_ARS_BRE",
            "matchTitle": "ARS vs BRE",
            "formation": "4-3-3",
            "captainId": "ars_4",
            "viceCaptainId": "bre_11",
            "playerIds": [
                "ars_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "bre_11",
                "bre_12",
                "bre_10",
                "ars_16",
                "bre_16",
                "bre_17"
            ],
            "benchIds": [
                "bre_1",
                "ars_9",
                "ars_9",
                "bre_5"
            ],
            "totalPrice": 97.3,
            "updatedAt": 1788254323760
        },
        "PL_GW20_CRY_CHE": {
            "fixtureId": "PL_GW20_CRY_CHE",
            "matchTitle": "CRY vs CHE",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_15",
            "playerIds": [
                "che_1",
                "cry_3",
                "che_3",
                "che_7",
                "che_8",
                "cry_10",
                "cry_11",
                "che_9",
                "cry_17",
                "cry_18",
                "che_15"
            ],
            "benchIds": [
                "cry_1",
                "cry_14",
                "che_10",
                "che_10"
            ],
            "totalPrice": 89.7,
            "updatedAt": 1788254323763
        },
        "PL_GW20_FUL_TOT": {
            "fixtureId": "PL_GW20_FUL_TOT",
            "matchTitle": "FUL vs TOT",
            "formation": "4-3-3",
            "captainId": "ful_9",
            "viceCaptainId": "ful_16",
            "playerIds": [
                "ful_1",
                "tot_7",
                "tot_3",
                "tot_5",
                "tot_8",
                "ful_9",
                "ful_10",
                "ful_11",
                "ful_16",
                "tot_15",
                "tot_16"
            ],
            "benchIds": [
                "tot_1",
                "ful_4",
                "ful_4",
                "tot_9"
            ],
            "totalPrice": 79.3,
            "updatedAt": 1788254323765
        },
        "PL_GW20_LEE_MCI": {
            "fixtureId": "PL_GW20_LEE_MCI",
            "matchTitle": "LEE vs MCI",
            "formation": "4-3-3",
            "captainId": "mci_11",
            "viceCaptainId": "mci_18",
            "playerIds": [
                "lee_1",
                "lee_5",
                "lee_3",
                "lee_4",
                "mci_6",
                "mci_11",
                "mci_12",
                "mci_10",
                "lee_16",
                "lee_17",
                "mci_18"
            ],
            "benchIds": [
                "mci_1",
                "lee_10",
                "lee_10",
                "mci_4"
            ],
            "totalPrice": 98.8,
            "updatedAt": 1788254323765
        },
        "PL_GW20_MUN_NEW": {
            "fixtureId": "PL_GW20_MUN_NEW",
            "matchTitle": "MUN vs NEW",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "new_3",
            "playerIds": [
                "new_1",
                "mun_3",
                "new_3",
                "new_8",
                "new_4",
                "mun_9",
                "mun_10",
                "mun_11",
                "mun_16",
                "new_15",
                "new_17"
            ],
            "benchIds": [
                "mun_1",
                "mun_13",
                "new_9",
                "new_9"
            ],
            "totalPrice": 94.7,
            "updatedAt": 1788254323768
        },
        "PL_GW20_SUN_LIV": {
            "fixtureId": "PL_GW20_SUN_LIV",
            "matchTitle": "SUN vs LIV",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "liv_11",
            "playerIds": [
                "sun_1",
                "sun_3",
                "sun_4",
                "sun_6",
                "liv_7",
                "liv_10",
                "liv_11",
                "liv_12",
                "sun_18",
                "sun_17",
                "liv_16"
            ],
            "benchIds": [
                "liv_1",
                "sun_10",
                "sun_10",
                "liv_9"
            ],
            "totalPrice": 90,
            "updatedAt": 1788254323768
        },
        "PL_GW21_AVL_MUN": {
            "fixtureId": "PL_GW21_AVL_MUN",
            "matchTitle": "AVL vs MUN",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "mun_10",
            "playerIds": [
                "mun_1",
                "avl_3",
                "avl_4",
                "mun_3",
                "mun_4",
                "avl_9",
                "mun_9",
                "mun_10",
                "avl_16",
                "avl_17",
                "mun_16"
            ],
            "benchIds": [
                "avl_1",
                "avl_12",
                "mun_11",
                "mun_11"
            ],
            "totalPrice": 95,
            "updatedAt": 1788254323770
        },
        "PL_GW21_CHE_SUN": {
            "fixtureId": "PL_GW21_CHE_SUN",
            "matchTitle": "CHE vs SUN",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_15",
            "playerIds": [
                "sun_1",
                "che_3",
                "sun_3",
                "sun_4",
                "sun_6",
                "che_9",
                "che_10",
                "che_12",
                "che_15",
                "sun_18",
                "sun_17"
            ],
            "benchIds": [
                "che_1",
                "che_14",
                "sun_10",
                "sun_10"
            ],
            "totalPrice": 89.7,
            "updatedAt": 1788254323772
        },
        "PL_GW21_HUL_ARS": {
            "fixtureId": "PL_GW21_HUL_ARS",
            "matchTitle": "HUL vs ARS",
            "formation": "4-3-3",
            "captainId": "ars_9",
            "viceCaptainId": "ars_4",
            "playerIds": [
                "ars_1",
                "hul_3",
                "hul_4",
                "hul_5",
                "ars_4",
                "hul_10",
                "ars_9",
                "ars_11",
                "hul_18",
                "ars_16",
                "ars_17"
            ],
            "benchIds": [
                "hul_1",
                "hul_6",
                "ars_5",
                "ars_5"
            ],
            "totalPrice": 84.7,
            "updatedAt": 1788254323773
        },
        "PL_GW21_LIV_CRY": {
            "fixtureId": "PL_GW21_LIV_CRY",
            "matchTitle": "LIV vs CRY",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "liv_11",
            "playerIds": [
                "liv_1",
                "liv_7",
                "liv_3",
                "cry_3",
                "cry_4",
                "liv_10",
                "liv_11",
                "cry_10",
                "liv_16",
                "cry_17",
                "cry_18"
            ],
            "benchIds": [
                "cry_1",
                "liv_12",
                "liv_12",
                "cry_11"
            ],
            "totalPrice": 90.5,
            "updatedAt": 1788254323774
        },
        "PL_GW21_MCI_NFO": {
            "fixtureId": "PL_GW21_MCI_NFO",
            "matchTitle": "MCI vs NFO",
            "formation": "4-3-3",
            "captainId": "mci_11",
            "viceCaptainId": "mci_18",
            "playerIds": [
                "mci_1",
                "mci_6",
                "nfo_5",
                "nfo_3",
                "nfo_4",
                "mci_11",
                "mci_12",
                "nfo_9",
                "mci_18",
                "nfo_15",
                "nfo_16"
            ],
            "benchIds": [
                "nfo_1",
                "mci_4",
                "mci_4",
                "nfo_11"
            ],
            "totalPrice": 99.6,
            "updatedAt": 1788254323775
        },
        "PL_GW21_TOT_LEE": {
            "fixtureId": "PL_GW21_TOT_LEE",
            "matchTitle": "TOT vs LEE",
            "formation": "4-3-3",
            "captainId": "lee_1",
            "viceCaptainId": "lee_5",
            "playerIds": [
                "lee_1",
                "lee_5",
                "lee_3",
                "lee_4",
                "lee_6",
                "tot_9",
                "tot_12",
                "tot_13",
                "tot_15",
                "tot_16",
                "lee_16"
            ],
            "benchIds": [
                "tot_1",
                "tot_7",
                "lee_10",
                "lee_10"
            ],
            "totalPrice": 80.2,
            "updatedAt": 1788254323777
        },
        "LALIGA_MW20_SEV_RMA": {
            "fixtureId": "LALIGA_MW20_SEV_RMA",
            "matchTitle": "SEV vs RMA",
            "formation": "4-3-3",
            "captainId": "rma_17",
            "viceCaptainId": "rma_10",
            "playerIds": [
                "rma_1",
                "sev_3",
                "sev_8",
                "sev_6",
                "rma_3",
                "sev_10",
                "rma_10",
                "rma_11",
                "sev_15",
                "sev_16",
                "rma_17"
            ],
            "benchIds": [
                "sev_1",
                "sev_7",
                "rma_9",
                "rma_16"
            ],
            "totalPrice": 100,
            "updatedAt": 1788254323780
        },
        "PL_GW22_ARS_NEW": {
            "fixtureId": "PL_GW22_ARS_NEW",
            "matchTitle": "ARS vs NEW",
            "formation": "4-3-3",
            "captainId": "ars_9",
            "viceCaptainId": "ars_4",
            "playerIds": [
                "new_1",
                "ars_4",
                "ars_5",
                "new_3",
                "new_8",
                "ars_9",
                "ars_11",
                "ars_10",
                "ars_16",
                "new_15",
                "new_17"
            ],
            "benchIds": [
                "ars_1",
                "ars_3",
                "new_9",
                "new_9"
            ],
            "totalPrice": 94.9,
            "updatedAt": 1788254323783
        },
        "PL_GW22_BHA_MCI": {
            "fixtureId": "PL_GW22_BHA_MCI",
            "matchTitle": "BHA vs MCI",
            "formation": "4-3-3",
            "captainId": "mci_18",
            "viceCaptainId": "bha_5",
            "playerIds": [
                "mci_1",
                "bha_5",
                "mci_6",
                "mci_4",
                "mci_3",
                "bha_9",
                "bha_10",
                "bha_12",
                "bha_16",
                "bha_17",
                "mci_18"
            ],
            "benchIds": [
                "bha_1",
                "bha_14",
                "mci_11",
                "mci_11"
            ],
            "totalPrice": 95.7,
            "updatedAt": 1788254323784
        },
        "PL_GW22_CRY_TOT": {
            "fixtureId": "PL_GW22_CRY_TOT",
            "matchTitle": "CRY vs TOT",
            "formation": "4-3-3",
            "captainId": "cry_10",
            "viceCaptainId": "tot_7",
            "playerIds": [
                "cry_1",
                "cry_3",
                "cry_4",
                "tot_7",
                "tot_3",
                "cry_10",
                "tot_9",
                "tot_12",
                "cry_17",
                "cry_18",
                "tot_15"
            ],
            "benchIds": [
                "tot_1",
                "cry_11",
                "cry_11",
                "tot_13"
            ],
            "totalPrice": 81.3,
            "updatedAt": 1788254323786
        },
        "PL_GW22_LEE_CHE": {
            "fixtureId": "PL_GW22_LEE_CHE",
            "matchTitle": "LEE vs CHE",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_15",
            "playerIds": [
                "lee_1",
                "lee_5",
                "lee_3",
                "lee_4",
                "che_3",
                "che_9",
                "che_10",
                "che_12",
                "lee_16",
                "lee_17",
                "che_15"
            ],
            "benchIds": [
                "che_1",
                "lee_10",
                "lee_10",
                "che_14"
            ],
            "totalPrice": 90.2,
            "updatedAt": 1788254323787
        },
        "PL_GW22_MUN_LIV": {
            "fixtureId": "PL_GW22_MUN_LIV",
            "matchTitle": "MUN vs LIV",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "liv_10",
            "playerIds": [
                "liv_1",
                "mun_3",
                "mun_4",
                "mun_7",
                "liv_7",
                "mun_9",
                "liv_10",
                "liv_11",
                "mun_16",
                "mun_17",
                "liv_16"
            ],
            "benchIds": [
                "mun_1",
                "mun_10",
                "liv_12",
                "liv_12"
            ],
            "totalPrice": 98.4,
            "updatedAt": 1788254323789
        },
        "PL_GW23_BRE_MUN": {
            "fixtureId": "PL_GW23_BRE_MUN",
            "matchTitle": "BRE vs MUN",
            "formation": "4-3-3",
            "captainId": "bre_11",
            "viceCaptainId": "bre_12",
            "playerIds": [
                "mun_1",
                "bre_5",
                "bre_6",
                "bre_3",
                "mun_3",
                "bre_11",
                "bre_12",
                "bre_10",
                "mun_16",
                "mun_17",
                "mun_18"
            ],
            "benchIds": [
                "bre_1",
                "bre_15",
                "mun_9",
                "mun_9"
            ],
            "totalPrice": 92.6,
            "updatedAt": 1788254323791
        },
        "PL_GW23_CHE_NFO": {
            "fixtureId": "PL_GW23_CHE_NFO",
            "matchTitle": "CHE vs NFO",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "nfo_9",
            "playerIds": [
                "che_1",
                "che_3",
                "che_7",
                "nfo_5",
                "nfo_3",
                "che_9",
                "che_10",
                "nfo_9",
                "nfo_15",
                "nfo_16",
                "nfo_17"
            ],
            "benchIds": [
                "nfo_1",
                "che_15",
                "che_15",
                "nfo_11"
            ],
            "totalPrice": 94.1,
            "updatedAt": 1788254323793
        },
        "PL_GW23_LIV_EVE": {
            "fixtureId": "PL_GW23_LIV_EVE",
            "matchTitle": "LIV vs EVE",
            "formation": "4-3-3",
            "captainId": "eve_3",
            "viceCaptainId": "liv_10",
            "playerIds": [
                "liv_1",
                "liv_7",
                "eve_3",
                "eve_4",
                "eve_7",
                "liv_10",
                "liv_11",
                "eve_9",
                "liv_16",
                "eve_17",
                "eve_18"
            ],
            "benchIds": [
                "eve_1",
                "liv_12",
                "liv_12",
                "eve_10"
            ],
            "totalPrice": 91.4,
            "updatedAt": 1788254323794
        },
        "PL_GW23_MCI_ARS": {
            "fixtureId": "PL_GW23_MCI_ARS",
            "matchTitle": "MCI vs ARS",
            "formation": "4-3-3",
            "captainId": "mci_11",
            "viceCaptainId": "ars_9",
            "playerIds": [
                "mci_1",
                "mci_6",
                "mci_4",
                "ars_4",
                "ars_5",
                "mci_11",
                "ars_9",
                "ars_11",
                "mci_18",
                "ars_16",
                "ars_18"
            ],
            "benchIds": [
                "ars_1",
                "mci_9",
                "mci_17",
                "ars_8"
            ],
            "totalPrice": 99.8,
            "updatedAt": 1788254323795
        },
        "PL_GW23_TOT_SUN": {
            "fixtureId": "PL_GW23_TOT_SUN",
            "matchTitle": "TOT vs SUN",
            "formation": "4-3-3",
            "captainId": "sun_3",
            "viceCaptainId": "sun_18",
            "playerIds": [
                "sun_1",
                "sun_3",
                "sun_4",
                "sun_6",
                "sun_7",
                "tot_9",
                "tot_12",
                "tot_13",
                "tot_15",
                "tot_16",
                "sun_18"
            ],
            "benchIds": [
                "tot_1",
                "tot_7",
                "sun_10",
                "sun_10"
            ],
            "totalPrice": 79.2,
            "updatedAt": 1788254323797
        },
        "PL_GW24_ARS_LIV": {
            "fixtureId": "PL_GW24_ARS_LIV",
            "matchTitle": "ARS vs LIV",
            "formation": "4-3-3",
            "captainId": "ars_9",
            "viceCaptainId": "ars_4",
            "playerIds": [
                "ars_1",
                "ars_4",
                "liv_7",
                "liv_3",
                "liv_4",
                "ars_9",
                "ars_11",
                "liv_10",
                "ars_16",
                "ars_17",
                "liv_16"
            ],
            "benchIds": [
                "liv_1",
                "ars_5",
                "ars_5",
                "liv_11"
            ],
            "totalPrice": 99.1,
            "updatedAt": 1788254323798
        },
        "PL_GW24_FUL_MCI": {
            "fixtureId": "PL_GW24_FUL_MCI",
            "matchTitle": "FUL vs MCI",
            "formation": "4-3-3",
            "captainId": "mci_18",
            "viceCaptainId": "mci_6",
            "playerIds": [
                "mci_1",
                "ful_4",
                "mci_6",
                "mci_4",
                "mci_3",
                "ful_9",
                "ful_10",
                "ful_11",
                "ful_16",
                "ful_17",
                "mci_18"
            ],
            "benchIds": [
                "ful_1",
                "ful_14",
                "mci_11",
                "mci_11"
            ],
            "totalPrice": 96.5,
            "updatedAt": 1788254323799
        },
        "PL_GW24_IPS_TOT": {
            "fixtureId": "PL_GW24_IPS_TOT",
            "matchTitle": "IPS vs TOT",
            "formation": "4-3-3",
            "captainId": "ips_9",
            "viceCaptainId": "ips_16",
            "playerIds": [
                "ips_1",
                "ips_3",
                "ips_4",
                "tot_7",
                "tot_3",
                "ips_9",
                "tot_9",
                "tot_12",
                "ips_16",
                "ips_17",
                "tot_15"
            ],
            "benchIds": [
                "tot_1",
                "ips_10",
                "ips_10",
                "tot_13"
            ],
            "totalPrice": 77.8,
            "updatedAt": 1788254323802
        },
        "PL_GW24_MUN_CHE": {
            "fixtureId": "PL_GW24_MUN_CHE",
            "matchTitle": "MUN vs CHE",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "che_9",
            "playerIds": [
                "che_1",
                "mun_3",
                "che_3",
                "che_7",
                "che_8",
                "mun_9",
                "che_9",
                "che_10",
                "mun_16",
                "mun_17",
                "mun_18"
            ],
            "benchIds": [
                "mun_1",
                "mun_10",
                "che_15",
                "che_15"
            ],
            "totalPrice": 99.2,
            "updatedAt": 1788254323804
        },
        "LALIGA_MW23_RMA_ATM": {
            "fixtureId": "LALIGA_MW23_RMA_ATM",
            "matchTitle": "RMA vs ATM",
            "formation": "4-3-3",
            "captainId": "rma_10",
            "viceCaptainId": "atm_18",
            "playerIds": [
                "rma_1",
                "rma_3",
                "rma_6",
                "atm_3",
                "atm_4",
                "rma_10",
                "rma_11",
                "atm_10",
                "atm_18",
                "atm_17",
                "atm_19"
            ],
            "benchIds": [
                "rma_2",
                "rma_9",
                "atm_12",
                "atm_12"
            ],
            "totalPrice": 99.7,
            "updatedAt": 1788254323807
        },
        "PL_GW25_COV_LIV": {
            "fixtureId": "PL_GW25_COV_LIV",
            "matchTitle": "COV vs LIV",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "liv_11",
            "playerIds": [
                "liv_1",
                "cov_4",
                "cov_5",
                "cov_6",
                "liv_7",
                "cov_12",
                "liv_10",
                "liv_11",
                "cov_15",
                "cov_17",
                "liv_16"
            ],
            "benchIds": [
                "cov_1",
                "cov_13",
                "liv_12",
                "liv_12"
            ],
            "totalPrice": 83.5,
            "updatedAt": 1788254323808
        },
        "PL_GW25_IPS_ARS": {
            "fixtureId": "PL_GW25_IPS_ARS",
            "matchTitle": "IPS vs ARS",
            "formation": "4-3-3",
            "captainId": "ars_4",
            "viceCaptainId": "ars_5",
            "playerIds": [
                "ars_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "ips_9",
                "ips_10",
                "ips_11",
                "ips_16",
                "ips_17",
                "ars_16"
            ],
            "benchIds": [
                "ips_1",
                "ips_3",
                "ars_9",
                "ars_9"
            ],
            "totalPrice": 92.6,
            "updatedAt": 1788254323810
        },
        "PL_GW25_MUN_BHA": {
            "fixtureId": "PL_GW25_MUN_BHA",
            "matchTitle": "MUN vs BHA",
            "formation": "4-3-3",
            "captainId": "bha_5",
            "viceCaptainId": "bha_9",
            "playerIds": [
                "mun_1",
                "mun_3",
                "mun_4",
                "mun_7",
                "bha_5",
                "bha_9",
                "bha_10",
                "bha_12",
                "mun_16",
                "bha_16",
                "bha_17"
            ],
            "benchIds": [
                "bha_1",
                "mun_9",
                "mun_9",
                "bha_14"
            ],
            "totalPrice": 91.7,
            "updatedAt": 1788254323812
        },
        "PL_GW25_NEW_CHE": {
            "fixtureId": "PL_GW25_NEW_CHE",
            "matchTitle": "NEW vs CHE",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_15",
            "playerIds": [
                "new_1",
                "new_3",
                "new_8",
                "new_4",
                "che_3",
                "che_9",
                "che_10",
                "che_12",
                "new_15",
                "new_17",
                "che_15"
            ],
            "benchIds": [
                "che_1",
                "new_9",
                "new_9",
                "che_14"
            ],
            "totalPrice": 90.9,
            "updatedAt": 1788254323814
        },
        "PL_GW25_TOT_MCI": {
            "fixtureId": "PL_GW25_TOT_MCI",
            "matchTitle": "TOT vs MCI",
            "formation": "4-3-3",
            "captainId": "mci_18",
            "viceCaptainId": "mci_6",
            "playerIds": [
                "mci_1",
                "mci_6",
                "mci_4",
                "mci_3",
                "mci_7",
                "tot_9",
                "tot_12",
                "tot_13",
                "tot_15",
                "tot_16",
                "mci_18"
            ],
            "benchIds": [
                "tot_1",
                "tot_7",
                "mci_11",
                "mci_11"
            ],
            "totalPrice": 98.2,
            "updatedAt": 1788254323815
        },
        "PL_GW26_ARS_FUL": {
            "fixtureId": "PL_GW26_ARS_FUL",
            "matchTitle": "ARS vs FUL",
            "formation": "4-3-3",
            "captainId": "ars_9",
            "viceCaptainId": "ars_4",
            "playerIds": [
                "ful_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "ars_9",
                "ful_9",
                "ful_10",
                "ars_16",
                "ful_16",
                "ful_17"
            ],
            "benchIds": [
                "ars_1",
                "ars_11",
                "ful_4",
                "ful_4"
            ],
            "totalPrice": 90.2,
            "updatedAt": 1788254323817
        },
        "PL_GW26_BHA_TOT": {
            "fixtureId": "PL_GW26_BHA_TOT",
            "matchTitle": "BHA vs TOT",
            "formation": "4-3-3",
            "captainId": "bha_9",
            "viceCaptainId": "bha_10",
            "playerIds": [
                "bha_1",
                "tot_7",
                "tot_3",
                "tot_5",
                "tot_8",
                "bha_9",
                "bha_10",
                "bha_12",
                "bha_16",
                "bha_17",
                "tot_15"
            ],
            "benchIds": [
                "tot_1",
                "bha_5",
                "bha_5",
                "tot_9"
            ],
            "totalPrice": 78.8,
            "updatedAt": 1788254323820
        },
        "PL_GW26_CHE_IPS": {
            "fixtureId": "PL_GW26_CHE_IPS",
            "matchTitle": "CHE vs IPS",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_10",
            "playerIds": [
                "che_1",
                "che_3",
                "che_7",
                "ips_3",
                "ips_4",
                "che_9",
                "che_10",
                "che_12",
                "ips_16",
                "ips_17",
                "ips_18"
            ],
            "benchIds": [
                "ips_1",
                "che_15",
                "che_15",
                "ips_9"
            ],
            "totalPrice": 87.3,
            "updatedAt": 1788254323822
        },
        "PL_GW26_LIV_HUL": {
            "fixtureId": "PL_GW26_LIV_HUL",
            "matchTitle": "LIV vs HUL",
            "formation": "4-3-3",
            "captainId": "hul_3",
            "viceCaptainId": "liv_10",
            "playerIds": [
                "liv_1",
                "hul_3",
                "hul_4",
                "hul_5",
                "hul_6",
                "liv_10",
                "liv_11",
                "hul_10",
                "liv_16",
                "liv_17",
                "hul_18"
            ],
            "benchIds": [
                "hul_1",
                "liv_12",
                "liv_12",
                "hul_16"
            ],
            "totalPrice": 84.6,
            "updatedAt": 1788254323823
        },
        "PL_GW26_MCI_NEW": {
            "fixtureId": "PL_GW26_MCI_NEW",
            "matchTitle": "MCI vs NEW",
            "formation": "4-3-3",
            "captainId": "mci_11",
            "viceCaptainId": "mci_18",
            "playerIds": [
                "new_1",
                "mci_6",
                "new_3",
                "new_8",
                "new_4",
                "mci_11",
                "mci_12",
                "mci_10",
                "mci_18",
                "new_15",
                "new_17"
            ],
            "benchIds": [
                "mci_1",
                "mci_4",
                "new_9",
                "new_9"
            ],
            "totalPrice": 99.5,
            "updatedAt": 1788254323825
        },
        "PL_GW26_NFO_MUN": {
            "fixtureId": "PL_GW26_NFO_MUN",
            "matchTitle": "NFO vs MUN",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "nfo_9",
            "playerIds": [
                "nfo_1",
                "nfo_5",
                "nfo_3",
                "nfo_4",
                "mun_3",
                "nfo_9",
                "mun_9",
                "mun_10",
                "nfo_15",
                "mun_16",
                "mun_17"
            ],
            "benchIds": [
                "mun_1",
                "nfo_11",
                "nfo_11",
                "mun_11"
            ],
            "totalPrice": 96.3,
            "updatedAt": 1788254323827
        },
        "PL_GW27_AVL_CHE": {
            "fixtureId": "PL_GW27_AVL_CHE",
            "matchTitle": "AVL vs CHE",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_10",
            "playerIds": [
                "avl_1",
                "avl_3",
                "che_3",
                "che_7",
                "che_8",
                "che_9",
                "che_10",
                "che_12",
                "avl_16",
                "avl_17",
                "avl_15"
            ],
            "benchIds": [
                "avl_2",
                "avl_9",
                "che_15",
                "che_15"
            ],
            "totalPrice": 93.6,
            "updatedAt": 1788254323829
        },
        "PL_GW27_HUL_MCI": {
            "fixtureId": "PL_GW27_HUL_MCI",
            "matchTitle": "HUL vs MCI",
            "formation": "4-3-3",
            "captainId": "mci_11",
            "viceCaptainId": "hul_1",
            "playerIds": [
                "hul_1",
                "hul_3",
                "hul_4",
                "hul_5",
                "mci_6",
                "hul_10",
                "hul_16",
                "mci_11",
                "mci_18",
                "mci_12",
                "mci_10"
            ],
            "benchIds": [
                "mci_1",
                "hul_6",
                "hul_6",
                "mci_4"
            ],
            "totalPrice": 89.9,
            "updatedAt": 1788254323832
        },
        "PL_GW27_MUN_ARS": {
            "fixtureId": "PL_GW27_MUN_ARS",
            "matchTitle": "MUN vs ARS",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "ars_9",
            "playerIds": [
                "ars_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "mun_9",
                "mun_10",
                "ars_9",
                "mun_16",
                "mun_17",
                "mun_18"
            ],
            "benchIds": [
                "mun_1",
                "mun_7",
                "ars_11",
                "ars_11"
            ],
            "totalPrice": 99.7,
            "updatedAt": 1788254323834
        },
        "PL_GW27_TOT_LIV": {
            "fixtureId": "PL_GW27_TOT_LIV",
            "matchTitle": "TOT vs LIV",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "liv_11",
            "playerIds": [
                "liv_1",
                "tot_7",
                "tot_3",
                "liv_7",
                "liv_3",
                "tot_9",
                "liv_10",
                "liv_11",
                "tot_15",
                "tot_16",
                "liv_16"
            ],
            "benchIds": [
                "tot_1",
                "tot_12",
                "liv_12",
                "liv_12"
            ],
            "totalPrice": 92.2,
            "updatedAt": 1788254323835
        },
        "PL_GW28_ARS_CRY": {
            "fixtureId": "PL_GW28_ARS_CRY",
            "matchTitle": "ARS vs CRY",
            "formation": "4-3-3",
            "captainId": "ars_4",
            "viceCaptainId": "ars_5",
            "playerIds": [
                "ars_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "cry_10",
                "cry_11",
                "cry_14",
                "ars_16",
                "cry_17",
                "cry_18"
            ],
            "benchIds": [
                "cry_1",
                "ars_9",
                "ars_9",
                "cry_3"
            ],
            "totalPrice": 94.6,
            "updatedAt": 1788254323837
        },
        "PL_GW28_BOU_TOT": {
            "fixtureId": "PL_GW28_BOU_TOT",
            "matchTitle": "BOU vs TOT",
            "formation": "4-3-3",
            "captainId": "bou_10",
            "viceCaptainId": "bou_16",
            "playerIds": [
                "bou_1",
                "bou_5",
                "bou_3",
                "bou_4",
                "tot_7",
                "bou_10",
                "tot_9",
                "tot_12",
                "bou_16",
                "tot_15",
                "tot_16"
            ],
            "benchIds": [
                "tot_1",
                "bou_11",
                "bou_11",
                "tot_13"
            ],
            "totalPrice": 82.7,
            "updatedAt": 1788254323839
        },
        "PL_GW28_CHE_COV": {
            "fixtureId": "PL_GW28_CHE_COV",
            "matchTitle": "CHE vs COV",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_10",
            "playerIds": [
                "che_1",
                "che_3",
                "che_7",
                "cov_4",
                "cov_5",
                "che_9",
                "che_10",
                "che_12",
                "cov_15",
                "cov_17",
                "cov_18"
            ],
            "benchIds": [
                "cov_1",
                "che_15",
                "che_15",
                "cov_12"
            ],
            "totalPrice": 87.3,
            "updatedAt": 1788254323841
        },
        "PL_GW28_LIV_AVL": {
            "fixtureId": "PL_GW28_LIV_AVL",
            "matchTitle": "LIV vs AVL",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "liv_11",
            "playerIds": [
                "liv_1",
                "liv_7",
                "liv_3",
                "avl_3",
                "avl_4",
                "liv_10",
                "liv_11",
                "avl_9",
                "liv_16",
                "avl_16",
                "avl_17"
            ],
            "benchIds": [
                "avl_1",
                "liv_12",
                "liv_12",
                "avl_12"
            ],
            "totalPrice": 90,
            "updatedAt": 1788254323843
        },
        "PL_GW28_MCI_EVE": {
            "fixtureId": "PL_GW28_MCI_EVE",
            "matchTitle": "MCI vs EVE",
            "formation": "4-3-3",
            "captainId": "eve_3",
            "viceCaptainId": "mci_18",
            "playerIds": [
                "mci_1",
                "mci_6",
                "mci_4",
                "mci_3",
                "eve_3",
                "eve_9",
                "eve_10",
                "eve_15",
                "mci_18",
                "eve_17",
                "eve_18"
            ],
            "benchIds": [
                "eve_1",
                "mci_11",
                "mci_11",
                "eve_4"
            ],
            "totalPrice": 99.9,
            "updatedAt": 1788254323843
        },
        "PL_GW28_SUN_MUN": {
            "fixtureId": "PL_GW28_SUN_MUN",
            "matchTitle": "SUN vs MUN",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "mun_10",
            "playerIds": [
                "sun_1",
                "sun_3",
                "sun_4",
                "sun_6",
                "mun_3",
                "mun_9",
                "mun_10",
                "mun_11",
                "sun_18",
                "sun_17",
                "mun_16"
            ],
            "benchIds": [
                "mun_1",
                "sun_10",
                "sun_10",
                "mun_13"
            ],
            "totalPrice": 93.5,
            "updatedAt": 1788254323846
        },
        "PL_GW29_CHE_ARS": {
            "fixtureId": "PL_GW29_CHE_ARS",
            "matchTitle": "CHE vs ARS",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "ars_9",
            "playerIds": [
                "che_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "che_9",
                "che_10",
                "ars_9",
                "che_15",
                "che_16",
                "ars_16"
            ],
            "benchIds": [
                "ars_1",
                "che_7",
                "che_14",
                "ars_11"
            ],
            "totalPrice": 99.3,
            "updatedAt": 1788254323848
        },
        "PL_GW29_COV_MCI": {
            "fixtureId": "PL_GW29_COV_MCI",
            "matchTitle": "COV vs MCI",
            "formation": "4-3-3",
            "captainId": "mci_18",
            "viceCaptainId": "mci_6",
            "playerIds": [
                "mci_1",
                "mci_6",
                "mci_4",
                "mci_3",
                "mci_7",
                "cov_12",
                "cov_13",
                "cov_14",
                "cov_15",
                "cov_17",
                "mci_18"
            ],
            "benchIds": [
                "cov_1",
                "cov_4",
                "mci_11",
                "mci_11"
            ],
            "totalPrice": 94,
            "updatedAt": 1788254323849
        },
        "PL_GW29_LIV_IPS": {
            "fixtureId": "PL_GW29_LIV_IPS",
            "matchTitle": "LIV vs IPS",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "liv_11",
            "playerIds": [
                "liv_1",
                "liv_7",
                "ips_3",
                "ips_4",
                "ips_5",
                "liv_10",
                "liv_11",
                "ips_9",
                "liv_16",
                "ips_16",
                "ips_17"
            ],
            "benchIds": [
                "ips_1",
                "liv_12",
                "liv_12",
                "ips_10"
            ],
            "totalPrice": 84.5,
            "updatedAt": 1788254323851
        },
        "PL_GW29_MUN_EVE": {
            "fixtureId": "PL_GW29_MUN_EVE",
            "matchTitle": "MUN vs EVE",
            "formation": "4-3-3",
            "captainId": "eve_3",
            "viceCaptainId": "eve_9",
            "playerIds": [
                "mun_1",
                "mun_3",
                "mun_4",
                "eve_3",
                "eve_4",
                "eve_9",
                "eve_10",
                "eve_15",
                "mun_16",
                "mun_17",
                "eve_17"
            ],
            "benchIds": [
                "eve_1",
                "mun_9",
                "mun_9",
                "eve_7"
            ],
            "totalPrice": 95.9,
            "updatedAt": 1788254323852
        },
        "PL_GW29_TOT_NFO": {
            "fixtureId": "PL_GW29_TOT_NFO",
            "matchTitle": "TOT vs NFO",
            "formation": "4-3-3",
            "captainId": "nfo_9",
            "viceCaptainId": "nfo_5",
            "playerIds": [
                "nfo_1",
                "nfo_5",
                "nfo_3",
                "nfo_4",
                "nfo_6",
                "tot_9",
                "tot_12",
                "nfo_9",
                "tot_15",
                "tot_16",
                "tot_17"
            ],
            "benchIds": [
                "tot_1",
                "tot_7",
                "nfo_11",
                "nfo_11"
            ],
            "totalPrice": 83.5,
            "updatedAt": 1788254323855
        },
        "LALIGA_MW27_ATM_FCB": {
            "fixtureId": "LALIGA_MW27_ATM_FCB",
            "matchTitle": "ATM vs FCB",
            "formation": "4-3-3",
            "captainId": "fcb_17",
            "viceCaptainId": "fcb_18",
            "playerIds": [
                "atm_1",
                "atm_3",
                "fcb_4",
                "fcb_5",
                "fcb_6",
                "fcb_17",
                "fcb_18",
                "fcb_11",
                "atm_18",
                "atm_17",
                "atm_19"
            ],
            "benchIds": [
                "fcb_2",
                "atm_9",
                "atm_8",
                "fcb_10"
            ],
            "totalPrice": 99.5,
            "updatedAt": 1788254323859
        },
        "PL_GW30_ARS_SUN": {
            "fixtureId": "PL_GW30_ARS_SUN",
            "matchTitle": "ARS vs SUN",
            "formation": "4-3-3",
            "captainId": "ars_4",
            "viceCaptainId": "ars_5",
            "playerIds": [
                "ars_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "sun_10",
                "sun_13",
                "sun_9",
                "ars_16",
                "sun_18",
                "sun_17"
            ],
            "benchIds": [
                "sun_1",
                "ars_9",
                "ars_9",
                "sun_3"
            ],
            "totalPrice": 95.5,
            "updatedAt": 1788254323861
        },
        "PL_GW30_EVE_TOT": {
            "fixtureId": "PL_GW30_EVE_TOT",
            "matchTitle": "EVE vs TOT",
            "formation": "4-3-3",
            "captainId": "eve_3",
            "viceCaptainId": "eve_9",
            "playerIds": [
                "eve_1",
                "eve_3",
                "eve_4",
                "eve_7",
                "tot_7",
                "eve_9",
                "tot_9",
                "tot_12",
                "eve_17",
                "tot_15",
                "tot_16"
            ],
            "benchIds": [
                "tot_1",
                "eve_10",
                "eve_10",
                "tot_13"
            ],
            "totalPrice": 83.7,
            "updatedAt": 1788254323863
        },
        "PL_GW30_FUL_LIV": {
            "fixtureId": "PL_GW30_FUL_LIV",
            "matchTitle": "FUL vs LIV",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "liv_11",
            "playerIds": [
                "ful_1",
                "ful_4",
                "ful_5",
                "ful_6",
                "liv_7",
                "liv_10",
                "liv_11",
                "liv_12",
                "ful_16",
                "ful_17",
                "liv_16"
            ],
            "benchIds": [
                "liv_1",
                "ful_9",
                "ful_9",
                "liv_9"
            ],
            "totalPrice": 88,
            "updatedAt": 1788254323864
        },
        "PL_GW30_HUL_CHE": {
            "fixtureId": "PL_GW30_HUL_CHE",
            "matchTitle": "HUL vs CHE",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_15",
            "playerIds": [
                "che_1",
                "hul_3",
                "hul_4",
                "hul_5",
                "che_3",
                "hul_10",
                "hul_16",
                "che_9",
                "hul_18",
                "che_15",
                "che_16"
            ],
            "benchIds": [
                "hul_1",
                "hul_6",
                "che_10",
                "che_10"
            ],
            "totalPrice": 84.7,
            "updatedAt": 1788254323865
        },
        "PL_GW30_MCI_MUN": {
            "fixtureId": "PL_GW30_MCI_MUN",
            "matchTitle": "MCI vs MUN",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "mci_11",
            "playerIds": [
                "mun_1",
                "mci_6",
                "mci_4",
                "mci_3",
                "mun_3",
                "mci_11",
                "mci_12",
                "mun_9",
                "mun_16",
                "mun_17",
                "mun_18"
            ],
            "benchIds": [
                "mci_1",
                "mci_9",
                "mun_10",
                "mun_10"
            ],
            "totalPrice": 97.2,
            "updatedAt": 1788254323869
        },
        "PL_GW31_BOU_MCI": {
            "fixtureId": "PL_GW31_BOU_MCI",
            "matchTitle": "BOU vs MCI",
            "formation": "4-3-3",
            "captainId": "mci_18",
            "viceCaptainId": "bou_10",
            "playerIds": [
                "mci_1",
                "bou_5",
                "mci_6",
                "mci_4",
                "mci_3",
                "bou_10",
                "bou_11",
                "bou_12",
                "bou_16",
                "bou_17",
                "mci_18"
            ],
            "benchIds": [
                "bou_1",
                "bou_13",
                "mci_11",
                "mci_11"
            ],
            "totalPrice": 99,
            "updatedAt": 1788254323870
        },
        "PL_GW31_CHE_FUL": {
            "fixtureId": "PL_GW31_CHE_FUL",
            "matchTitle": "CHE vs FUL",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_10",
            "playerIds": [
                "che_1",
                "che_3",
                "che_7",
                "ful_4",
                "ful_5",
                "che_9",
                "che_10",
                "che_12",
                "ful_16",
                "ful_17",
                "ful_18"
            ],
            "benchIds": [
                "ful_1",
                "che_15",
                "che_15",
                "ful_9"
            ],
            "totalPrice": 89.3,
            "updatedAt": 1788254323874
        },
        "PL_GW31_COV_ARS": {
            "fixtureId": "PL_GW31_COV_ARS",
            "matchTitle": "COV vs ARS",
            "formation": "4-3-3",
            "captainId": "ars_9",
            "viceCaptainId": "ars_4",
            "playerIds": [
                "cov_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "cov_12",
                "cov_13",
                "ars_9",
                "cov_15",
                "cov_17",
                "ars_16"
            ],
            "benchIds": [
                "ars_1",
                "cov_4",
                "cov_4",
                "ars_11"
            ],
            "totalPrice": 87.2,
            "updatedAt": 1788254323876
        },
        "PL_GW31_LIV_NEW": {
            "fixtureId": "PL_GW31_LIV_NEW",
            "matchTitle": "LIV vs NEW",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "new_3",
            "playerIds": [
                "new_1",
                "liv_7",
                "new_3",
                "new_8",
                "new_4",
                "liv_10",
                "liv_11",
                "liv_12",
                "liv_16",
                "new_15",
                "new_17"
            ],
            "benchIds": [
                "liv_1",
                "liv_9",
                "new_9",
                "new_9"
            ],
            "totalPrice": 91.2,
            "updatedAt": 1788254323877
        },
        "PL_GW31_MUN_HUL": {
            "fixtureId": "PL_GW31_MUN_HUL",
            "matchTitle": "MUN vs HUL",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "hul_3",
            "playerIds": [
                "mun_1",
                "hul_3",
                "hul_4",
                "hul_5",
                "hul_6",
                "mun_9",
                "mun_10",
                "hul_10",
                "mun_16",
                "mun_17",
                "hul_18"
            ],
            "benchIds": [
                "hul_1",
                "mun_11",
                "mun_11",
                "hul_16"
            ],
            "totalPrice": 89,
            "updatedAt": 1788254323879
        },
        "PL_GW31_TOT_BRE": {
            "fixtureId": "PL_GW31_TOT_BRE",
            "matchTitle": "TOT vs BRE",
            "formation": "4-3-3",
            "captainId": "bre_11",
            "viceCaptainId": "bre_12",
            "playerIds": [
                "bre_1",
                "tot_7",
                "bre_5",
                "bre_6",
                "bre_3",
                "tot_9",
                "bre_11",
                "bre_12",
                "tot_15",
                "tot_16",
                "tot_17"
            ],
            "benchIds": [
                "tot_1",
                "tot_12",
                "bre_10",
                "bre_10"
            ],
            "totalPrice": 81.8,
            "updatedAt": 1788254323881
        },
        "PL_GW32_ARS_AVL": {
            "fixtureId": "PL_GW32_ARS_AVL",
            "matchTitle": "ARS vs AVL",
            "formation": "4-3-3",
            "captainId": "ars_4",
            "viceCaptainId": "ars_5",
            "playerIds": [
                "ars_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "avl_9",
                "avl_12",
                "avl_13",
                "ars_16",
                "avl_16",
                "avl_17"
            ],
            "benchIds": [
                "avl_1",
                "ars_9",
                "ars_9",
                "avl_14"
            ],
            "totalPrice": 94.6,
            "updatedAt": 1788254323883
        },
        "PL_GW32_BHA_CHE": {
            "fixtureId": "PL_GW32_BHA_CHE",
            "matchTitle": "BHA vs CHE",
            "formation": "4-3-3",
            "captainId": "che_15",
            "viceCaptainId": "bha_5",
            "playerIds": [
                "che_1",
                "bha_5",
                "che_3",
                "che_7",
                "che_8",
                "bha_9",
                "bha_10",
                "bha_12",
                "bha_16",
                "bha_17",
                "che_15"
            ],
            "benchIds": [
                "bha_1",
                "bha_14",
                "che_9",
                "che_9"
            ],
            "totalPrice": 88,
            "updatedAt": 1788254323885
        },
        "PL_GW32_IPS_MUN": {
            "fixtureId": "PL_GW32_IPS_MUN",
            "matchTitle": "IPS vs MUN",
            "formation": "4-3-3",
            "captainId": "ips_9",
            "viceCaptainId": "ips_16",
            "playerIds": [
                "mun_1",
                "ips_3",
                "mun_3",
                "mun_4",
                "mun_7",
                "ips_9",
                "ips_10",
                "ips_11",
                "ips_16",
                "ips_17",
                "mun_16"
            ],
            "benchIds": [
                "ips_1",
                "ips_13",
                "mun_9",
                "mun_9"
            ],
            "totalPrice": 91,
            "updatedAt": 1788254323888
        },
        "PL_GW32_MCI_CRY": {
            "fixtureId": "PL_GW32_MCI_CRY",
            "matchTitle": "MCI vs CRY",
            "formation": "4-3-3",
            "captainId": "mci_18",
            "viceCaptainId": "mci_6",
            "playerIds": [
                "mci_1",
                "mci_6",
                "mci_4",
                "mci_3",
                "mci_7",
                "cry_10",
                "cry_11",
                "cry_14",
                "mci_18",
                "cry_17",
                "cry_18"
            ],
            "benchIds": [
                "cry_1",
                "mci_11",
                "mci_11",
                "cry_3"
            ],
            "totalPrice": 97.5,
            "updatedAt": 1788254323888
        },
        "PL_GW32_NEW_TOT": {
            "fixtureId": "PL_GW32_NEW_TOT",
            "matchTitle": "NEW vs TOT",
            "formation": "4-3-3",
            "captainId": "new_3",
            "viceCaptainId": "new_15",
            "playerIds": [
                "new_1",
                "new_3",
                "new_8",
                "new_4",
                "new_5",
                "tot_9",
                "tot_12",
                "tot_13",
                "new_15",
                "tot_15",
                "tot_16"
            ],
            "benchIds": [
                "tot_1",
                "new_9",
                "new_9",
                "tot_7"
            ],
            "totalPrice": 81,
            "updatedAt": 1788254323891
        },
        "PL_GW32_NFO_LIV": {
            "fixtureId": "PL_GW32_NFO_LIV",
            "matchTitle": "NFO vs LIV",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "nfo_9",
            "playerIds": [
                "nfo_1",
                "nfo_5",
                "nfo_3",
                "liv_7",
                "liv_3",
                "nfo_9",
                "liv_10",
                "liv_11",
                "nfo_15",
                "nfo_16",
                "liv_16"
            ],
            "benchIds": [
                "liv_1",
                "nfo_11",
                "nfo_11",
                "liv_12"
            ],
            "totalPrice": 92.8,
            "updatedAt": 1788254323892
        },
        "PL_GW33_BOU_ARS": {
            "fixtureId": "PL_GW33_BOU_ARS",
            "matchTitle": "BOU vs ARS",
            "formation": "4-3-3",
            "captainId": "ars_4",
            "viceCaptainId": "ars_5",
            "playerIds": [
                "ars_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "bou_10",
                "bou_11",
                "bou_12",
                "bou_16",
                "bou_17",
                "ars_16"
            ],
            "benchIds": [
                "bou_1",
                "bou_5",
                "ars_9",
                "ars_9"
            ],
            "totalPrice": 96.6,
            "updatedAt": 1788254323894
        },
        "PL_GW33_CHE_MCI": {
            "fixtureId": "PL_GW33_CHE_MCI",
            "matchTitle": "CHE vs MCI",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_15",
            "playerIds": [
                "mci_1",
                "mci_6",
                "mci_4",
                "mci_3",
                "mci_7",
                "che_9",
                "che_10",
                "che_12",
                "che_15",
                "che_16",
                "che_17"
            ],
            "benchIds": [
                "che_1",
                "che_14",
                "mci_11",
                "mci_11"
            ],
            "totalPrice": 96.6,
            "updatedAt": 1788254323896
        },
        "PL_GW33_LEE_LIV": {
            "fixtureId": "PL_GW33_LEE_LIV",
            "matchTitle": "LEE vs LIV",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "liv_11",
            "playerIds": [
                "lee_1",
                "lee_5",
                "lee_3",
                "lee_4",
                "liv_7",
                "liv_10",
                "liv_11",
                "liv_12",
                "lee_16",
                "lee_17",
                "liv_16"
            ],
            "benchIds": [
                "liv_1",
                "lee_10",
                "lee_10",
                "liv_9"
            ],
            "totalPrice": 90.5,
            "updatedAt": 1788254323896
        },
        "PL_GW33_MUN_CRY": {
            "fixtureId": "PL_GW33_MUN_CRY",
            "matchTitle": "MUN vs CRY",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "mun_10",
            "playerIds": [
                "mun_1",
                "mun_3",
                "mun_4",
                "cry_3",
                "cry_4",
                "mun_9",
                "mun_10",
                "cry_10",
                "mun_16",
                "cry_17",
                "cry_18"
            ],
            "benchIds": [
                "cry_1",
                "mun_11",
                "mun_11",
                "cry_11"
            ],
            "totalPrice": 95.5,
            "updatedAt": 1788254323898
        },
        "PL_GW33_TOT_HUL": {
            "fixtureId": "PL_GW33_TOT_HUL",
            "matchTitle": "TOT vs HUL",
            "formation": "4-3-3",
            "captainId": "hul_1",
            "viceCaptainId": "hul_3",
            "playerIds": [
                "hul_1",
                "tot_7",
                "hul_3",
                "hul_4",
                "hul_5",
                "tot_9",
                "hul_10",
                "hul_16",
                "tot_15",
                "tot_16",
                "tot_17"
            ],
            "benchIds": [
                "tot_1",
                "tot_12",
                "hul_6",
                "hul_6"
            ],
            "totalPrice": 73.2,
            "updatedAt": 1788254323899
        },
        "PL_GW34_ARS_TOT": {
            "fixtureId": "PL_GW34_ARS_TOT",
            "matchTitle": "ARS vs TOT",
            "formation": "4-3-3",
            "captainId": "ars_4",
            "viceCaptainId": "ars_5",
            "playerIds": [
                "ars_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "tot_9",
                "tot_12",
                "tot_13",
                "ars_16",
                "tot_15",
                "tot_16"
            ],
            "benchIds": [
                "tot_1",
                "ars_9",
                "ars_9",
                "tot_7"
            ],
            "totalPrice": 95.3,
            "updatedAt": 1788254323901
        },
        "PL_GW34_COV_MUN": {
            "fixtureId": "PL_GW34_COV_MUN",
            "matchTitle": "COV vs MUN",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "mun_10",
            "playerIds": [
                "mun_1",
                "cov_4",
                "cov_5",
                "mun_3",
                "mun_4",
                "cov_12",
                "mun_9",
                "mun_10",
                "cov_15",
                "cov_17",
                "cov_18"
            ],
            "benchIds": [
                "cov_1",
                "cov_13",
                "mun_11",
                "mun_11"
            ],
            "totalPrice": 89,
            "updatedAt": 1788254323904
        },
        "PL_GW34_LIV_CHE": {
            "fixtureId": "PL_GW34_LIV_CHE",
            "matchTitle": "LIV vs CHE",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_15",
            "playerIds": [
                "liv_1",
                "liv_7",
                "che_3",
                "che_7",
                "che_8",
                "liv_10",
                "liv_11",
                "che_9",
                "liv_16",
                "che_15",
                "che_16"
            ],
            "benchIds": [
                "liv_2",
                "liv_12",
                "che_10",
                "che_10"
            ],
            "totalPrice": 98.1,
            "updatedAt": 1788254323905
        },
        "PL_GW34_MCI_BRE": {
            "fixtureId": "PL_GW34_MCI_BRE",
            "matchTitle": "MCI vs BRE",
            "formation": "4-3-3",
            "captainId": "bre_11",
            "viceCaptainId": "mci_18",
            "playerIds": [
                "mci_1",
                "mci_6",
                "mci_4",
                "mci_3",
                "bre_5",
                "bre_11",
                "bre_12",
                "bre_10",
                "mci_18",
                "bre_16",
                "bre_17"
            ],
            "benchIds": [
                "bre_1",
                "mci_11",
                "mci_11",
                "bre_6"
            ],
            "totalPrice": 99.2,
            "updatedAt": 1788254323906
        },
        "PL_GW35_BOU_MUN": {
            "fixtureId": "PL_GW35_BOU_MUN",
            "matchTitle": "BOU vs MUN",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "bou_10",
            "playerIds": [
                "mun_1",
                "bou_5",
                "bou_3",
                "bou_4",
                "mun_3",
                "bou_10",
                "mun_9",
                "mun_10",
                "bou_16",
                "bou_17",
                "mun_16"
            ],
            "benchIds": [
                "bou_1",
                "bou_11",
                "mun_11",
                "mun_11"
            ],
            "totalPrice": 97.5,
            "updatedAt": 1788254323908
        },
        "PL_GW35_LEE_ARS": {
            "fixtureId": "PL_GW35_LEE_ARS",
            "matchTitle": "LEE vs ARS",
            "formation": "4-3-3",
            "captainId": "ars_9",
            "viceCaptainId": "ars_4",
            "playerIds": [
                "lee_1",
                "lee_5",
                "lee_3",
                "ars_4",
                "ars_5",
                "ars_9",
                "ars_11",
                "ars_10",
                "lee_16",
                "lee_17",
                "ars_16"
            ],
            "benchIds": [
                "ars_1",
                "lee_10",
                "lee_10",
                "ars_3"
            ],
            "totalPrice": 94.2,
            "updatedAt": 1788254323910
        },
        "PL_GW35_MCI_LIV": {
            "fixtureId": "PL_GW35_MCI_LIV",
            "matchTitle": "MCI vs LIV",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "mci_6",
            "playerIds": [
                "mci_1",
                "mci_6",
                "mci_4",
                "mci_3",
                "mci_7",
                "liv_10",
                "liv_11",
                "liv_12",
                "liv_16",
                "liv_17",
                "liv_18"
            ],
            "benchIds": [
                "liv_1",
                "mci_11",
                "mci_11",
                "liv_9"
            ],
            "totalPrice": 99,
            "updatedAt": 1788254323912
        },
        "PL_GW35_TOT_CHE": {
            "fixtureId": "PL_GW35_TOT_CHE",
            "matchTitle": "TOT vs CHE",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_10",
            "playerIds": [
                "che_1",
                "tot_7",
                "tot_3",
                "che_3",
                "che_7",
                "che_9",
                "che_10",
                "che_12",
                "tot_15",
                "tot_16",
                "tot_17"
            ],
            "benchIds": [
                "tot_1",
                "tot_9",
                "che_15",
                "che_15"
            ],
            "totalPrice": 94,
            "updatedAt": 1788254323914
        },
        "LALIGA_MW35_FCB_RMA": {
            "fixtureId": "LALIGA_MW35_FCB_RMA",
            "matchTitle": "FCB vs RMA",
            "formation": "4-3-3",
            "captainId": "fcb_19",
            "viceCaptainId": "fcb_17",
            "playerIds": [
                "rma_1",
                "fcb_4",
                "fcb_5",
                "rma_3",
                "rma_6",
                "fcb_17",
                "fcb_18",
                "fcb_11",
                "fcb_19",
                "rma_20",
                "rma_19"
            ],
            "benchIds": [
                "fcb_2",
                "fcb_10",
                "rma_9",
                "rma_8"
            ],
            "totalPrice": 99.3,
            "updatedAt": 1788254323918
        },
        "PL_GW36_ARS_NFO": {
            "fixtureId": "PL_GW36_ARS_NFO",
            "matchTitle": "ARS vs NFO",
            "formation": "4-3-3",
            "captainId": "ars_9",
            "viceCaptainId": "ars_4",
            "playerIds": [
                "nfo_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "nfo_5",
                "ars_9",
                "ars_11",
                "nfo_9",
                "ars_16",
                "nfo_15",
                "nfo_16"
            ],
            "benchIds": [
                "ars_1",
                "ars_6",
                "nfo_11",
                "nfo_11"
            ],
            "totalPrice": 95,
            "updatedAt": 1788254323920
        },
        "PL_GW36_CHE_EVE": {
            "fixtureId": "PL_GW36_CHE_EVE",
            "matchTitle": "CHE vs EVE",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "che_15",
            "playerIds": [
                "che_1",
                "che_3",
                "eve_3",
                "eve_4",
                "eve_7",
                "che_9",
                "eve_9",
                "eve_10",
                "che_15",
                "che_16",
                "eve_17"
            ],
            "benchIds": [
                "eve_1",
                "che_10",
                "che_10",
                "eve_15"
            ],
            "totalPrice": 93.6,
            "updatedAt": 1788254323922
        },
        "PL_GW36_COV_TOT": {
            "fixtureId": "PL_GW36_COV_TOT",
            "matchTitle": "COV vs TOT",
            "formation": "4-3-3",
            "captainId": "tot_7",
            "viceCaptainId": "tot_9",
            "playerIds": [
                "cov_1",
                "tot_7",
                "tot_3",
                "tot_5",
                "tot_8",
                "cov_12",
                "cov_13",
                "tot_9",
                "cov_15",
                "cov_17",
                "cov_18"
            ],
            "benchIds": [
                "tot_1",
                "cov_4",
                "cov_4",
                "tot_12"
            ],
            "totalPrice": 73.8,
            "updatedAt": 1788254323924
        },
        "PL_GW36_IPS_MCI": {
            "fixtureId": "PL_GW36_IPS_MCI",
            "matchTitle": "IPS vs MCI",
            "formation": "4-3-3",
            "captainId": "mci_18",
            "viceCaptainId": "mci_6",
            "playerIds": [
                "mci_1",
                "ips_3",
                "mci_6",
                "mci_4",
                "mci_3",
                "ips_9",
                "ips_10",
                "ips_11",
                "ips_16",
                "ips_17",
                "mci_18"
            ],
            "benchIds": [
                "ips_1",
                "ips_13",
                "mci_11",
                "mci_11"
            ],
            "totalPrice": 95,
            "updatedAt": 1788254323925
        },
        "PL_GW36_LIV_BRE": {
            "fixtureId": "PL_GW36_LIV_BRE",
            "matchTitle": "LIV vs BRE",
            "formation": "4-3-3",
            "captainId": "bre_11",
            "viceCaptainId": "liv_10",
            "playerIds": [
                "liv_1",
                "liv_7",
                "bre_5",
                "bre_6",
                "bre_3",
                "liv_10",
                "liv_11",
                "bre_11",
                "liv_16",
                "bre_16",
                "bre_17"
            ],
            "benchIds": [
                "bre_1",
                "liv_12",
                "liv_12",
                "bre_12"
            ],
            "totalPrice": 90.7,
            "updatedAt": 1788254323927
        },
        "PL_GW36_MUN_LEE": {
            "fixtureId": "PL_GW36_MUN_LEE",
            "matchTitle": "MUN vs LEE",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "mun_10",
            "playerIds": [
                "lee_1",
                "mun_3",
                "lee_5",
                "lee_3",
                "lee_4",
                "mun_9",
                "mun_10",
                "mun_11",
                "mun_16",
                "lee_16",
                "lee_17"
            ],
            "benchIds": [
                "mun_1",
                "mun_13",
                "lee_10",
                "lee_10"
            ],
            "totalPrice": 94,
            "updatedAt": 1788254323928
        },
        "PL_GW37_BOU_CHE": {
            "fixtureId": "PL_GW37_BOU_CHE",
            "matchTitle": "BOU vs CHE",
            "formation": "4-3-3",
            "captainId": "che_9",
            "viceCaptainId": "bou_10",
            "playerIds": [
                "che_1",
                "bou_5",
                "bou_3",
                "che_3",
                "che_7",
                "bou_10",
                "che_9",
                "che_10",
                "bou_16",
                "bou_17",
                "bou_18"
            ],
            "benchIds": [
                "bou_1",
                "bou_11",
                "che_15",
                "che_15"
            ],
            "totalPrice": 91.8,
            "updatedAt": 1788254323931
        },
        "PL_GW37_BHA_LIV": {
            "fixtureId": "PL_GW37_BHA_LIV",
            "matchTitle": "BHA vs LIV",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "bha_5",
            "playerIds": [
                "bha_1",
                "bha_5",
                "bha_3",
                "liv_7",
                "liv_3",
                "bha_9",
                "liv_10",
                "liv_11",
                "bha_16",
                "bha_17",
                "liv_16"
            ],
            "benchIds": [
                "liv_1",
                "bha_10",
                "bha_10",
                "liv_12"
            ],
            "totalPrice": 88.7,
            "updatedAt": 1788254323932
        },
        "PL_GW37_EVE_ARS": {
            "fixtureId": "PL_GW37_EVE_ARS",
            "matchTitle": "EVE vs ARS",
            "formation": "4-3-3",
            "captainId": "ars_9",
            "viceCaptainId": "ars_4",
            "playerIds": [
                "eve_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "eve_9",
                "eve_10",
                "ars_9",
                "eve_17",
                "eve_18",
                "ars_16"
            ],
            "benchIds": [
                "ars_1",
                "eve_3",
                "eve_3",
                "ars_11"
            ],
            "totalPrice": 95.1,
            "updatedAt": 1788254323934
        },
        "PL_GW37_MCI_AVL": {
            "fixtureId": "PL_GW37_MCI_AVL",
            "matchTitle": "MCI vs AVL",
            "formation": "4-3-3",
            "captainId": "mci_18",
            "viceCaptainId": "mci_6",
            "playerIds": [
                "mci_1",
                "mci_6",
                "mci_4",
                "mci_3",
                "mci_7",
                "avl_9",
                "avl_12",
                "avl_13",
                "mci_18",
                "avl_16",
                "avl_17"
            ],
            "benchIds": [
                "avl_1",
                "mci_11",
                "mci_11",
                "avl_14"
            ],
            "totalPrice": 97.5,
            "updatedAt": 1788254323935
        },
        "PL_GW37_TOT_MUN": {
            "fixtureId": "PL_GW37_TOT_MUN",
            "matchTitle": "TOT vs MUN",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "mun_10",
            "playerIds": [
                "mun_1",
                "tot_7",
                "tot_3",
                "mun_3",
                "mun_4",
                "tot_9",
                "mun_9",
                "mun_10",
                "tot_15",
                "tot_16",
                "tot_17"
            ],
            "benchIds": [
                "tot_1",
                "tot_12",
                "mun_11",
                "mun_11"
            ],
            "totalPrice": 96.1,
            "updatedAt": 1788254323937
        },
        "PL_GW38_ARS_BHA": {
            "fixtureId": "PL_GW38_ARS_BHA",
            "matchTitle": "ARS vs BHA",
            "formation": "4-3-3",
            "captainId": "ars_4",
            "viceCaptainId": "ars_5",
            "playerIds": [
                "ars_1",
                "ars_4",
                "ars_5",
                "ars_3",
                "ars_6",
                "bha_9",
                "bha_10",
                "bha_12",
                "ars_16",
                "bha_16",
                "bha_17"
            ],
            "benchIds": [
                "bha_1",
                "ars_9",
                "ars_9",
                "bha_5"
            ],
            "totalPrice": 93.8,
            "updatedAt": 1788254323939
        },
        "PL_GW38_AVL_TOT": {
            "fixtureId": "PL_GW38_AVL_TOT",
            "matchTitle": "AVL vs TOT",
            "formation": "4-3-3",
            "captainId": "tot_7",
            "viceCaptainId": "avl_9",
            "playerIds": [
                "avl_1",
                "avl_3",
                "tot_7",
                "tot_3",
                "tot_5",
                "avl_9",
                "avl_12",
                "avl_13",
                "avl_16",
                "tot_15",
                "tot_16"
            ],
            "benchIds": [
                "tot_1",
                "avl_14",
                "avl_14",
                "tot_9"
            ],
            "totalPrice": 79.8,
            "updatedAt": 1788254323941
        },
        "PL_GW38_CHE_BRE": {
            "fixtureId": "PL_GW38_CHE_BRE",
            "matchTitle": "CHE vs BRE",
            "formation": "4-3-3",
            "captainId": "che_15",
            "viceCaptainId": "bre_11",
            "playerIds": [
                "che_1",
                "che_3",
                "bre_5",
                "bre_6",
                "bre_3",
                "bre_11",
                "bre_12",
                "bre_10",
                "che_15",
                "che_16",
                "che_17"
            ],
            "benchIds": [
                "bre_1",
                "che_9",
                "che_9",
                "bre_15"
            ],
            "totalPrice": 90.4,
            "updatedAt": 1788254323943
        },
        "PL_GW38_LIV_BOU": {
            "fixtureId": "PL_GW38_LIV_BOU",
            "matchTitle": "LIV vs BOU",
            "formation": "4-3-3",
            "captainId": "liv_10",
            "viceCaptainId": "bou_10",
            "playerIds": [
                "liv_1",
                "liv_7",
                "bou_5",
                "bou_3",
                "bou_4",
                "liv_10",
                "liv_11",
                "bou_10",
                "liv_16",
                "bou_16",
                "bou_17"
            ],
            "benchIds": [
                "bou_1",
                "liv_12",
                "liv_12",
                "bou_11"
            ],
            "totalPrice": 91,
            "updatedAt": 1788254323944
        },
        "PL_GW38_MUN_FUL": {
            "fixtureId": "PL_GW38_MUN_FUL",
            "matchTitle": "MUN vs FUL",
            "formation": "4-3-3",
            "captainId": "mun_9",
            "viceCaptainId": "mun_10",
            "playerIds": [
                "mun_1",
                "mun_3",
                "mun_4",
                "ful_4",
                "ful_5",
                "mun_9",
                "mun_10",
                "ful_9",
                "mun_16",
                "ful_16",
                "ful_17"
            ],
            "benchIds": [
                "ful_1",
                "mun_11",
                "mun_11",
                "ful_10"
            ],
            "totalPrice": 94,
            "updatedAt": 1788254323947
        },
        "PL_GW38_SUN_MCI": {
            "fixtureId": "PL_GW38_SUN_MCI",
            "matchTitle": "SUN vs MCI",
            "formation": "4-3-3",
            "captainId": "mci_11",
            "viceCaptainId": "mci_18",
            "playerIds": [
                "sun_1",
                "sun_3",
                "sun_4",
                "sun_6",
                "mci_6",
                "mci_11",
                "mci_12",
                "mci_10",
                "sun_18",
                "sun_17",
                "mci_18"
            ],
            "benchIds": [
                "mci_1",
                "sun_10",
                "sun_10",
                "mci_4"
            ],
            "totalPrice": 98.3,
            "updatedAt": 1788254323947
        }
    }
};

// 3. Baseline Fixture Squads Map
const SAVED_SQUADS_DATA = {
    "PL_GW1_ARS_COV": {
        "fixtureId": "PL_GW1_ARS_COV",
        "matchTitle": "ARS vs COV",
        "formation": "4-3-3",
        "captainId": "ars_9",
        "viceCaptainId": "ars_4",
        "playerIds": [
            "cov_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "ars_9",
            "cov_12",
            "cov_13",
            "ars_16",
            "cov_15",
            "cov_17"
        ],
        "benchIds": [
            "ars_1",
            "ars_11",
            "cov_4",
            "cov_4"
        ],
        "totalPrice": 87.2,
        "updatedAt": 1788254323489
    },
    "PL_GW1_HUL_MUN": {
        "fixtureId": "PL_GW1_HUL_MUN",
        "matchTitle": "HUL vs MUN",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "hul_3",
        "playerIds": [
            "mun_1",
            "hul_3",
            "hul_4",
            "hul_5",
            "hul_6",
            "hul_10",
            "mun_9",
            "mun_10",
            "hul_18",
            "mun_16",
            "mun_17"
        ],
        "benchIds": [
            "hul_1",
            "hul_16",
            "mun_11",
            "mun_11"
        ],
        "totalPrice": 89,
        "updatedAt": 1788254323491
    },
    "PL_GW1_BRE_TOT": {
        "fixtureId": "PL_GW1_BRE_TOT",
        "matchTitle": "BRE vs TOT",
        "formation": "4-3-3",
        "captainId": "bre_11",
        "viceCaptainId": "bre_12",
        "playerIds": [
            "bre_1",
            "bre_5",
            "bre_6",
            "bre_3",
            "tot_7",
            "bre_11",
            "bre_12",
            "tot_9",
            "tot_15",
            "tot_16",
            "tot_17"
        ],
        "benchIds": [
            "tot_1",
            "bre_10",
            "bre_10",
            "tot_12"
        ],
        "totalPrice": 81.8,
        "updatedAt": 1788254323495
    },
    "PL_GW1_MCI_BOU": {
        "fixtureId": "PL_GW1_MCI_BOU",
        "matchTitle": "MCI vs BOU",
        "formation": "4-3-3",
        "captainId": "mci_18",
        "viceCaptainId": "bou_10",
        "playerIds": [
            "mci_1",
            "mci_6",
            "mci_4",
            "mci_3",
            "bou_5",
            "bou_10",
            "bou_11",
            "bou_12",
            "mci_18",
            "bou_16",
            "bou_17"
        ],
        "benchIds": [
            "bou_1",
            "mci_11",
            "mci_11",
            "bou_13"
        ],
        "totalPrice": 99,
        "updatedAt": 1788254323497
    },
    "PL_GW1_NEW_LIV": {
        "fixtureId": "PL_GW1_NEW_LIV",
        "matchTitle": "NEW vs LIV",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "new_3",
        "playerIds": [
            "new_1",
            "new_3",
            "new_8",
            "new_4",
            "liv_7",
            "liv_10",
            "liv_11",
            "liv_12",
            "new_15",
            "new_17",
            "liv_16"
        ],
        "benchIds": [
            "liv_1",
            "new_9",
            "new_9",
            "liv_9"
        ],
        "totalPrice": 91.2,
        "updatedAt": 1788254323499
    },
    "LALIGA_MW1_FCB_ATH": {
        "fixtureId": "LALIGA_MW1_FCB_ATH",
        "matchTitle": "FCB vs ATH",
        "formation": "4-3-3",
        "captainId": "fcb_17",
        "viceCaptainId": "fcb_18",
        "playerIds": [
            "ath_1",
            "fcb_4",
            "fcb_5",
            "fcb_6",
            "ath_3",
            "fcb_17",
            "fcb_18",
            "ath_11",
            "ath_18",
            "ath_19",
            "ath_17"
        ],
        "benchIds": [
            "fcb_2",
            "fcb_10",
            "ath_10",
            "ath_10"
        ],
        "totalPrice": 99.8,
        "updatedAt": 1788254323506
    },
    "PL_GW1_FUL_CHE": {
        "fixtureId": "PL_GW1_FUL_CHE",
        "matchTitle": "FUL vs CHE",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_10",
        "playerIds": [
            "che_1",
            "ful_4",
            "ful_5",
            "che_3",
            "che_7",
            "che_9",
            "che_10",
            "che_12",
            "ful_16",
            "ful_17",
            "ful_18"
        ],
        "benchIds": [
            "ful_1",
            "ful_9",
            "che_15",
            "che_15"
        ],
        "totalPrice": 89.3,
        "updatedAt": 1788254323509
    },
    "LALIGA_MW1_SEV_ATM": {
        "fixtureId": "LALIGA_MW1_SEV_ATM",
        "matchTitle": "SEV vs ATM",
        "formation": "4-3-3",
        "captainId": "atm_18",
        "viceCaptainId": "sev_15",
        "playerIds": [
            "atm_1",
            "sev_3",
            "sev_8",
            "sev_6",
            "atm_3",
            "atm_10",
            "atm_12",
            "atm_11",
            "sev_15",
            "sev_16",
            "atm_18"
        ],
        "benchIds": [
            "sev_1",
            "sev_18",
            "atm_17",
            "atm_17"
        ],
        "totalPrice": 94.3,
        "updatedAt": 1788254323513
    },
    "PL_GW2_CRY_MCI": {
        "fixtureId": "PL_GW2_CRY_MCI",
        "matchTitle": "CRY vs MCI",
        "formation": "4-3-3",
        "captainId": "mci_18",
        "viceCaptainId": "mci_6",
        "playerIds": [
            "mci_1",
            "mci_6",
            "mci_4",
            "mci_3",
            "mci_7",
            "cry_10",
            "cry_11",
            "cry_14",
            "cry_17",
            "cry_18",
            "mci_18"
        ],
        "benchIds": [
            "cry_1",
            "cry_3",
            "mci_11",
            "mci_11"
        ],
        "totalPrice": 97.5,
        "updatedAt": 1788254323515
    },
    "LALIGA_MW2_RMA_ATH": {
        "fixtureId": "LALIGA_MW2_RMA_ATH",
        "matchTitle": "RMA vs ATH",
        "formation": "4-3-3",
        "captainId": "rma_10",
        "viceCaptainId": "ath_11",
        "playerIds": [
            "ath_1",
            "rma_3",
            "rma_6",
            "rma_7",
            "ath_3",
            "rma_10",
            "rma_11",
            "ath_11",
            "ath_18",
            "ath_19",
            "ath_17"
        ],
        "benchIds": [
            "rma_1",
            "rma_9",
            "ath_10",
            "ath_10"
        ],
        "totalPrice": 99.9,
        "updatedAt": 1788254323521
    },
    "PL_GW2_LIV_NFO": {
        "fixtureId": "PL_GW2_LIV_NFO",
        "matchTitle": "LIV vs NFO",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "nfo_9",
        "playerIds": [
            "liv_1",
            "liv_7",
            "nfo_5",
            "nfo_3",
            "nfo_4",
            "liv_10",
            "liv_11",
            "nfo_9",
            "liv_16",
            "nfo_15",
            "nfo_16"
        ],
        "benchIds": [
            "nfo_1",
            "liv_12",
            "liv_12",
            "nfo_11"
        ],
        "totalPrice": 92.8,
        "updatedAt": 1788254323523
    },
    "PL_GW2_TOT_NEW": {
        "fixtureId": "PL_GW2_TOT_NEW",
        "matchTitle": "TOT vs NEW",
        "formation": "4-3-3",
        "captainId": "new_3",
        "viceCaptainId": "new_15",
        "playerIds": [
            "new_1",
            "new_3",
            "new_8",
            "new_4",
            "new_5",
            "tot_9",
            "tot_12",
            "tot_13",
            "tot_15",
            "tot_16",
            "new_15"
        ],
        "benchIds": [
            "tot_1",
            "tot_7",
            "new_9",
            "new_9"
        ],
        "totalPrice": 81,
        "updatedAt": 1788254323525
    },
    "PL_GW2_CHE_BHA": {
        "fixtureId": "PL_GW2_CHE_BHA",
        "matchTitle": "CHE vs BHA",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_15",
        "playerIds": [
            "che_1",
            "che_3",
            "che_7",
            "bha_5",
            "bha_3",
            "che_9",
            "bha_9",
            "bha_10",
            "che_15",
            "bha_16",
            "bha_17"
        ],
        "benchIds": [
            "bha_1",
            "che_10",
            "che_10",
            "bha_12"
        ],
        "totalPrice": 89.4,
        "updatedAt": 1788254323527
    },
    "PL_GW2_MUN_IPS": {
        "fixtureId": "PL_GW2_MUN_IPS",
        "matchTitle": "MUN vs IPS",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "mun_10",
        "playerIds": [
            "mun_1",
            "mun_3",
            "ips_3",
            "ips_4",
            "ips_5",
            "mun_9",
            "mun_10",
            "ips_9",
            "mun_16",
            "ips_16",
            "ips_17"
        ],
        "benchIds": [
            "ips_1",
            "mun_11",
            "mun_11",
            "ips_10"
        ],
        "totalPrice": 91,
        "updatedAt": 1788254323530
    },
    "PL_GW2_AVL_ARS": {
        "fixtureId": "PL_GW2_AVL_ARS",
        "formation": "4-3-3",
        "captainId": "ars_4",
        "viceCaptainId": "ars_5",
        "playerIds": [
            "ars_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "avl_9",
            "avl_12",
            "avl_13",
            "avl_16",
            "avl_17",
            "ars_16"
        ],
        "benchIds": [
            "avl_1",
            "avl_14",
            "ars_9",
            "ars_9"
        ],
        "updatedAt": 1788326619899
    },
    "LALIGA_MW4_RMA_SEV": {
        "fixtureId": "LALIGA_MW4_RMA_SEV",
        "formation": "3-5-2",
        "captainId": "rma_17",
        "viceCaptainId": "rma_16",
        "playerIds": [
            "sev_1",
            "rma_3",
            "sev_3",
            "sev_8",
            "rma_10",
            "rma_11",
            "sev_10",
            "rma_14",
            "sev_14",
            "rma_17",
            "rma_16"
        ],
        "benchIds": [
            "rma_1",
            "sev_6",
            "rma_9",
            "sev_15"
        ],
        "updatedAt": 1788326620736
    },
    "PL_GW3_IPS_LIV": {
        "fixtureId": "PL_GW3_IPS_LIV",
        "matchTitle": "IPS vs LIV",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "liv_11",
        "playerIds": [
            "liv_1",
            "ips_3",
            "ips_4",
            "ips_5",
            "liv_7",
            "ips_9",
            "liv_10",
            "liv_11",
            "ips_16",
            "ips_17",
            "liv_16"
        ],
        "benchIds": [
            "ips_1",
            "ips_10",
            "liv_12",
            "liv_12"
        ],
        "totalPrice": 84.5,
        "updatedAt": 1788254323537
    },
    "PL_GW3_MCI_COV": {
        "fixtureId": "PL_GW3_MCI_COV",
        "matchTitle": "MCI vs COV",
        "formation": "4-3-3",
        "captainId": "mci_18",
        "viceCaptainId": "mci_6",
        "playerIds": [
            "mci_1",
            "mci_6",
            "mci_4",
            "mci_3",
            "mci_7",
            "cov_12",
            "cov_13",
            "cov_14",
            "mci_18",
            "cov_15",
            "cov_17"
        ],
        "benchIds": [
            "cov_1",
            "mci_11",
            "mci_11",
            "cov_4"
        ],
        "totalPrice": 94,
        "updatedAt": 1788254323538
    },
    "PL_GW3_NFO_TOT": {
        "fixtureId": "PL_GW3_NFO_TOT",
        "matchTitle": "NFO vs TOT",
        "formation": "4-3-3",
        "captainId": "nfo_9",
        "viceCaptainId": "nfo_5",
        "playerIds": [
            "nfo_1",
            "nfo_5",
            "nfo_3",
            "nfo_4",
            "tot_7",
            "nfo_9",
            "tot_9",
            "tot_12",
            "nfo_15",
            "tot_15",
            "tot_16"
        ],
        "benchIds": [
            "tot_1",
            "nfo_11",
            "nfo_11",
            "tot_13"
        ],
        "totalPrice": 84.1,
        "updatedAt": 1788254323542
    },
    "PL_GW3_EVE_MUN": {
        "fixtureId": "PL_GW3_EVE_MUN",
        "matchTitle": "EVE vs MUN",
        "formation": "4-3-3",
        "captainId": "eve_3",
        "viceCaptainId": "eve_9",
        "playerIds": [
            "mun_1",
            "eve_3",
            "eve_4",
            "mun_3",
            "mun_4",
            "eve_9",
            "eve_10",
            "eve_15",
            "eve_17",
            "mun_16",
            "mun_17"
        ],
        "benchIds": [
            "eve_1",
            "eve_7",
            "mun_9",
            "mun_9"
        ],
        "totalPrice": 95.9,
        "updatedAt": 1788254323546
    },
    "PL_GW3_ARS_CHE": {
        "fixtureId": "PL_GW3_ARS_CHE",
        "matchTitle": "ARS vs CHE",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "ars_9",
        "playerIds": [
            "ars_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "che_3",
            "ars_9",
            "ars_11",
            "che_9",
            "che_15",
            "che_16",
            "che_17"
        ],
        "benchIds": [
            "che_1",
            "ars_6",
            "ars_6",
            "che_10"
        ],
        "totalPrice": 98.8,
        "updatedAt": 1788254323550
    },
    "PL_GW4_CHE_HUL": {
        "fixtureId": "PL_GW4_CHE_HUL",
        "matchTitle": "CHE vs HUL",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_15",
        "playerIds": [
            "che_1",
            "che_3",
            "hul_3",
            "hul_4",
            "hul_5",
            "che_9",
            "hul_10",
            "hul_16",
            "che_15",
            "che_16",
            "hul_18"
        ],
        "benchIds": [
            "hul_1",
            "che_10",
            "che_10",
            "hul_6"
        ],
        "totalPrice": 84.7,
        "updatedAt": 1788254323552
    },
    "PL_GW4_LIV_FUL": {
        "fixtureId": "PL_GW4_LIV_FUL",
        "matchTitle": "LIV vs FUL",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "liv_11",
        "playerIds": [
            "liv_1",
            "liv_7",
            "liv_3",
            "ful_4",
            "ful_5",
            "liv_10",
            "liv_11",
            "ful_9",
            "liv_16",
            "ful_16",
            "ful_17"
        ],
        "benchIds": [
            "ful_1",
            "liv_12",
            "liv_12",
            "ful_10"
        ],
        "totalPrice": 89,
        "updatedAt": 1788254323555
    },
    "PL_GW4_TOT_EVE": {
        "fixtureId": "PL_GW4_TOT_EVE",
        "matchTitle": "TOT vs EVE",
        "formation": "4-3-3",
        "captainId": "eve_3",
        "viceCaptainId": "eve_9",
        "playerIds": [
            "eve_1",
            "tot_7",
            "eve_3",
            "eve_4",
            "eve_7",
            "tot_9",
            "tot_12",
            "eve_9",
            "tot_15",
            "tot_16",
            "eve_17"
        ],
        "benchIds": [
            "tot_1",
            "tot_13",
            "eve_10",
            "eve_10"
        ],
        "totalPrice": 83.7,
        "updatedAt": 1788254323558
    },
    "PL_GW4_SUN_ARS": {
        "fixtureId": "PL_GW4_SUN_ARS",
        "matchTitle": "SUN vs ARS",
        "formation": "4-3-3",
        "captainId": "ars_9",
        "viceCaptainId": "ars_4",
        "playerIds": [
            "sun_1",
            "sun_3",
            "sun_4",
            "ars_4",
            "ars_5",
            "ars_9",
            "ars_11",
            "ars_10",
            "sun_18",
            "sun_17",
            "ars_16"
        ],
        "benchIds": [
            "ars_1",
            "sun_10",
            "sun_10",
            "ars_3"
        ],
        "totalPrice": 94.2,
        "updatedAt": 1788254323560
    },
    "PL_GW4_MUN_MCI": {
        "fixtureId": "PL_GW4_MUN_MCI",
        "matchTitle": "MUN vs MCI",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "mci_6",
        "playerIds": [
            "mci_1",
            "mci_6",
            "mci_4",
            "mci_3",
            "mci_7",
            "mun_9",
            "mun_10",
            "mun_11",
            "mun_16",
            "mun_17",
            "mun_18"
        ],
        "benchIds": [
            "mun_1",
            "mun_7",
            "mci_11",
            "mci_11"
        ],
        "totalPrice": 98.9,
        "updatedAt": 1788254323564
    },
    "LALIGA_MW5_FCB_SEV": {
        "fixtureId": "LALIGA_MW5_FCB_SEV",
        "matchTitle": "FCB vs SEV",
        "formation": "4-3-3",
        "captainId": "fcb_19",
        "viceCaptainId": "fcb_17",
        "playerIds": [
            "sev_1",
            "sev_3",
            "sev_8",
            "sev_6",
            "sev_4",
            "fcb_17",
            "fcb_18",
            "fcb_11",
            "fcb_19",
            "fcb_20",
            "fcb_21"
        ],
        "benchIds": [
            "fcb_2",
            "fcb_13",
            "sev_15",
            "sev_15"
        ],
        "totalPrice": 99.9,
        "updatedAt": 1788254323569
    },
    "LALIGA_MW5_ATH_ATM": {
        "fixtureId": "LALIGA_MW5_ATH_ATM",
        "matchTitle": "ATH vs ATM",
        "formation": "4-3-3",
        "captainId": "atm_18",
        "viceCaptainId": "ath_11",
        "playerIds": [
            "ath_1",
            "ath_3",
            "ath_4",
            "atm_3",
            "atm_4",
            "ath_11",
            "atm_10",
            "atm_12",
            "ath_18",
            "ath_19",
            "atm_18"
        ],
        "benchIds": [
            "atm_1",
            "ath_10",
            "ath_10",
            "atm_17"
        ],
        "totalPrice": 99.9,
        "updatedAt": 1788254323573
    },
    "PL_GW5_BRE_CHE": {
        "fixtureId": "PL_GW5_BRE_CHE",
        "matchTitle": "BRE vs CHE",
        "formation": "4-3-3",
        "captainId": "che_15",
        "viceCaptainId": "bre_11",
        "playerIds": [
            "che_1",
            "bre_5",
            "bre_6",
            "bre_3",
            "che_3",
            "bre_11",
            "bre_12",
            "bre_10",
            "che_15",
            "che_16",
            "che_17"
        ],
        "benchIds": [
            "bre_1",
            "bre_15",
            "che_9",
            "che_9"
        ],
        "totalPrice": 90.4,
        "updatedAt": 1788254323575
    },
    "PL_GW5_TOT_AVL": {
        "fixtureId": "PL_GW5_TOT_AVL",
        "matchTitle": "TOT vs AVL",
        "formation": "4-3-3",
        "captainId": "tot_7",
        "viceCaptainId": "avl_9",
        "playerIds": [
            "tot_1",
            "tot_7",
            "tot_3",
            "avl_3",
            "avl_4",
            "avl_9",
            "avl_12",
            "avl_13",
            "tot_15",
            "tot_16",
            "tot_17"
        ],
        "benchIds": [
            "avl_1",
            "tot_9",
            "tot_12",
            "avl_14"
        ],
        "totalPrice": 79.6,
        "updatedAt": 1788254323578
    },
    "PL_GW5_BHA_ARS": {
        "fixtureId": "PL_GW5_BHA_ARS",
        "matchTitle": "BHA vs ARS",
        "formation": "4-3-3",
        "captainId": "ars_9",
        "viceCaptainId": "ars_4",
        "playerIds": [
            "bha_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "bha_9",
            "bha_10",
            "ars_9",
            "bha_16",
            "bha_17",
            "ars_16"
        ],
        "benchIds": [
            "ars_1",
            "bha_5",
            "bha_5",
            "ars_11"
        ],
        "totalPrice": 90.6,
        "updatedAt": 1788254323581
    },
    "PL_GW5_BOU_LIV": {
        "fixtureId": "PL_GW5_BOU_LIV",
        "matchTitle": "BOU vs LIV",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "bou_10",
        "playerIds": [
            "liv_1",
            "bou_5",
            "bou_3",
            "bou_4",
            "liv_7",
            "bou_10",
            "liv_10",
            "liv_11",
            "bou_16",
            "bou_17",
            "liv_16"
        ],
        "benchIds": [
            "bou_1",
            "bou_11",
            "liv_12",
            "liv_12"
        ],
        "totalPrice": 91,
        "updatedAt": 1788254323583
    },
    "PL_GW5_MCI_SUN": {
        "fixtureId": "PL_GW5_MCI_SUN",
        "matchTitle": "MCI vs SUN",
        "formation": "4-3-3",
        "captainId": "mci_11",
        "viceCaptainId": "mci_18",
        "playerIds": [
            "sun_1",
            "mci_6",
            "sun_3",
            "sun_4",
            "sun_6",
            "mci_11",
            "mci_12",
            "mci_10",
            "mci_18",
            "sun_18",
            "sun_17"
        ],
        "benchIds": [
            "mci_1",
            "mci_4",
            "sun_10",
            "sun_10"
        ],
        "totalPrice": 98.3,
        "updatedAt": 1788254323584
    },
    "PL_GW5_FUL_MUN": {
        "fixtureId": "PL_GW5_FUL_MUN",
        "matchTitle": "FUL vs MUN",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "mun_10",
        "playerIds": [
            "mun_1",
            "ful_4",
            "ful_5",
            "ful_6",
            "mun_3",
            "ful_9",
            "mun_9",
            "mun_10",
            "ful_16",
            "ful_17",
            "mun_16"
        ],
        "benchIds": [
            "ful_1",
            "ful_10",
            "mun_11",
            "mun_11"
        ],
        "totalPrice": 93.5,
        "updatedAt": 1788254323587
    },
    "LALIGA_MW8_ATM_RMA": {
        "fixtureId": "LALIGA_MW8_ATM_RMA",
        "matchTitle": "ATM vs RMA",
        "formation": "4-3-3",
        "captainId": "rma_17",
        "viceCaptainId": "rma_10",
        "playerIds": [
            "atm_1",
            "atm_3",
            "atm_4",
            "rma_3",
            "rma_6",
            "atm_10",
            "rma_10",
            "rma_11",
            "atm_18",
            "rma_17",
            "rma_19"
        ],
        "benchIds": [
            "rma_1",
            "atm_9",
            "atm_8",
            "rma_9"
        ],
        "totalPrice": 99.6,
        "updatedAt": 1788254323592
    },
    "LALIGA_MW8_ATH_SEV": {
        "fixtureId": "LALIGA_MW8_ATH_SEV",
        "matchTitle": "ATH vs SEV",
        "formation": "4-3-3",
        "captainId": "ath_11",
        "viceCaptainId": "ath_18",
        "playerIds": [
            "sev_1",
            "ath_3",
            "sev_3",
            "sev_8",
            "sev_6",
            "ath_11",
            "ath_10",
            "sev_10",
            "ath_18",
            "ath_19",
            "ath_17"
        ],
        "benchIds": [
            "ath_1",
            "ath_12",
            "sev_15",
            "sev_15"
        ],
        "totalPrice": 90.8,
        "updatedAt": 1788254323595
    },
    "PL_GW6_ARS_LEE": {
        "fixtureId": "PL_GW6_ARS_LEE",
        "matchTitle": "ARS vs LEE",
        "formation": "4-3-3",
        "captainId": "ars_9",
        "viceCaptainId": "ars_4",
        "playerIds": [
            "lee_1",
            "ars_4",
            "ars_5",
            "lee_5",
            "lee_3",
            "ars_9",
            "ars_11",
            "ars_10",
            "ars_16",
            "lee_16",
            "lee_17"
        ],
        "benchIds": [
            "ars_1",
            "ars_3",
            "lee_10",
            "lee_10"
        ],
        "totalPrice": 94.2,
        "updatedAt": 1788254323598
    },
    "PL_GW6_CHE_BOU": {
        "fixtureId": "PL_GW6_CHE_BOU",
        "matchTitle": "CHE vs BOU",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "bou_10",
        "playerIds": [
            "che_1",
            "che_3",
            "che_7",
            "bou_5",
            "bou_3",
            "che_9",
            "che_10",
            "bou_10",
            "bou_16",
            "bou_17",
            "bou_18"
        ],
        "benchIds": [
            "bou_1",
            "che_15",
            "che_15",
            "bou_11"
        ],
        "totalPrice": 91.8,
        "updatedAt": 1788254323600
    },
    "PL_GW6_MUN_TOT": {
        "fixtureId": "PL_GW6_MUN_TOT",
        "matchTitle": "MUN vs TOT",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "mun_10",
        "playerIds": [
            "mun_1",
            "mun_3",
            "mun_4",
            "tot_7",
            "tot_3",
            "mun_9",
            "mun_10",
            "tot_9",
            "mun_16",
            "tot_15",
            "tot_16"
        ],
        "benchIds": [
            "tot_1",
            "mun_11",
            "mun_11",
            "tot_12"
        ],
        "totalPrice": 97.2,
        "updatedAt": 1788254323604
    },
    "PL_GW6_LIV_MCI": {
        "fixtureId": "PL_GW6_LIV_MCI",
        "matchTitle": "LIV vs MCI",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "mci_6",
        "playerIds": [
            "mci_1",
            "mci_6",
            "mci_4",
            "mci_3",
            "mci_7",
            "liv_10",
            "liv_11",
            "liv_12",
            "liv_16",
            "liv_17",
            "liv_18"
        ],
        "benchIds": [
            "liv_1",
            "liv_9",
            "mci_11",
            "mci_11"
        ],
        "totalPrice": 99,
        "updatedAt": 1788254323607
    },
    "PL_GW7_EVE_CHE": {
        "fixtureId": "PL_GW7_EVE_CHE",
        "matchTitle": "EVE vs CHE",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_15",
        "playerIds": [
            "che_1",
            "eve_3",
            "eve_4",
            "eve_7",
            "che_3",
            "eve_9",
            "eve_10",
            "che_9",
            "eve_17",
            "che_15",
            "che_16"
        ],
        "benchIds": [
            "eve_1",
            "eve_15",
            "che_10",
            "che_10"
        ],
        "totalPrice": 93.6,
        "updatedAt": 1788254323609
    },
    "PL_GW7_BRE_LIV": {
        "fixtureId": "PL_GW7_BRE_LIV",
        "matchTitle": "BRE vs LIV",
        "formation": "4-3-3",
        "captainId": "bre_11",
        "viceCaptainId": "liv_10",
        "playerIds": [
            "bre_1",
            "bre_5",
            "bre_6",
            "liv_7",
            "liv_3",
            "bre_11",
            "liv_10",
            "liv_11",
            "bre_16",
            "bre_17",
            "liv_16"
        ],
        "benchIds": [
            "liv_1",
            "bre_12",
            "bre_12",
            "liv_12"
        ],
        "totalPrice": 90.7,
        "updatedAt": 1788254323610
    },
    "PL_GW7_MCI_IPS": {
        "fixtureId": "PL_GW7_MCI_IPS",
        "matchTitle": "MCI vs IPS",
        "formation": "4-3-3",
        "captainId": "mci_18",
        "viceCaptainId": "mci_6",
        "playerIds": [
            "mci_1",
            "mci_6",
            "mci_4",
            "mci_3",
            "ips_3",
            "ips_9",
            "ips_10",
            "ips_11",
            "mci_18",
            "ips_16",
            "ips_17"
        ],
        "benchIds": [
            "ips_1",
            "mci_11",
            "mci_11",
            "ips_13"
        ],
        "totalPrice": 95,
        "updatedAt": 1788254323612
    },
    "PL_GW7_LEE_MUN": {
        "fixtureId": "PL_GW7_LEE_MUN",
        "matchTitle": "LEE vs MUN",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "mun_10",
        "playerIds": [
            "lee_1",
            "lee_5",
            "lee_3",
            "lee_4",
            "mun_3",
            "mun_9",
            "mun_10",
            "mun_11",
            "lee_16",
            "lee_17",
            "mun_16"
        ],
        "benchIds": [
            "mun_1",
            "lee_10",
            "lee_10",
            "mun_13"
        ],
        "totalPrice": 94,
        "updatedAt": 1788254323614
    },
    "PL_GW7_NFO_ARS": {
        "fixtureId": "PL_GW7_NFO_ARS",
        "matchTitle": "NFO vs ARS",
        "formation": "4-3-3",
        "captainId": "ars_9",
        "viceCaptainId": "ars_4",
        "playerIds": [
            "nfo_1",
            "nfo_5",
            "ars_4",
            "ars_5",
            "ars_3",
            "nfo_9",
            "ars_9",
            "ars_11",
            "nfo_15",
            "nfo_16",
            "ars_16"
        ],
        "benchIds": [
            "ars_1",
            "nfo_11",
            "nfo_11",
            "ars_6"
        ],
        "totalPrice": 95,
        "updatedAt": 1788254323617
    },
    "LALIGA_MW10_SEV_FCB": {
        "fixtureId": "LALIGA_MW10_SEV_FCB",
        "matchTitle": "SEV vs FCB",
        "formation": "4-3-3",
        "captainId": "fcb_19",
        "viceCaptainId": "fcb_17",
        "playerIds": [
            "sev_1",
            "sev_3",
            "sev_8",
            "fcb_4",
            "fcb_5",
            "fcb_17",
            "fcb_18",
            "fcb_11",
            "sev_15",
            "sev_16",
            "fcb_19"
        ],
        "benchIds": [
            "fcb_2",
            "sev_7",
            "sev_18",
            "fcb_13"
        ],
        "totalPrice": 99.9,
        "updatedAt": 1788254323621
    },
    "PL_GW7_TOT_COV": {
        "fixtureId": "PL_GW7_TOT_COV",
        "matchTitle": "TOT vs COV",
        "formation": "4-3-3",
        "captainId": "tot_7",
        "viceCaptainId": "tot_9",
        "playerIds": [
            "cov_1",
            "tot_7",
            "tot_3",
            "tot_5",
            "tot_8",
            "tot_9",
            "cov_12",
            "cov_13",
            "tot_15",
            "cov_15",
            "cov_17"
        ],
        "benchIds": [
            "tot_1",
            "tot_12",
            "cov_4",
            "cov_4"
        ],
        "totalPrice": 75.8,
        "updatedAt": 1788254323623
    },
    "PL_GW8_AVL_MCI": {
        "fixtureId": "PL_GW8_AVL_MCI",
        "matchTitle": "AVL vs MCI",
        "formation": "4-3-3",
        "captainId": "mci_18",
        "viceCaptainId": "mci_6",
        "playerIds": [
            "mci_1",
            "mci_6",
            "mci_4",
            "mci_3",
            "mci_7",
            "avl_9",
            "avl_12",
            "avl_13",
            "avl_16",
            "avl_17",
            "mci_18"
        ],
        "benchIds": [
            "avl_1",
            "avl_14",
            "mci_11",
            "mci_11"
        ],
        "totalPrice": 97.5,
        "updatedAt": 1788254323625
    },
    "PL_GW8_ARS_EVE": {
        "fixtureId": "PL_GW8_ARS_EVE",
        "matchTitle": "ARS vs EVE",
        "formation": "4-3-3",
        "captainId": "ars_9",
        "viceCaptainId": "ars_4",
        "playerIds": [
            "eve_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "ars_9",
            "eve_9",
            "eve_10",
            "ars_16",
            "eve_17",
            "eve_18"
        ],
        "benchIds": [
            "ars_1",
            "ars_11",
            "eve_3",
            "eve_3"
        ],
        "totalPrice": 95.1,
        "updatedAt": 1788254323627
    },
    "PL_GW8_LIV_BHA": {
        "fixtureId": "PL_GW8_LIV_BHA",
        "matchTitle": "LIV vs BHA",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "bha_5",
        "playerIds": [
            "bha_1",
            "liv_7",
            "liv_3",
            "bha_5",
            "bha_3",
            "liv_10",
            "liv_11",
            "bha_9",
            "liv_16",
            "bha_16",
            "bha_17"
        ],
        "benchIds": [
            "liv_1",
            "liv_12",
            "bha_10",
            "bha_10"
        ],
        "totalPrice": 88.7,
        "updatedAt": 1788254323628
    },
    "PL_GW8_CHE_TOT": {
        "fixtureId": "PL_GW8_CHE_TOT",
        "matchTitle": "CHE vs TOT",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_10",
        "playerIds": [
            "che_1",
            "che_3",
            "che_7",
            "tot_7",
            "tot_3",
            "che_9",
            "che_10",
            "che_12",
            "tot_15",
            "tot_16",
            "tot_17"
        ],
        "benchIds": [
            "tot_1",
            "che_15",
            "che_15",
            "tot_9"
        ],
        "totalPrice": 94,
        "updatedAt": 1788254323632
    },
    "PL_GW8_MUN_BOU": {
        "fixtureId": "PL_GW8_MUN_BOU",
        "matchTitle": "MUN vs BOU",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "bou_10",
        "playerIds": [
            "mun_1",
            "mun_3",
            "bou_5",
            "bou_3",
            "bou_4",
            "mun_9",
            "mun_10",
            "bou_10",
            "mun_16",
            "bou_16",
            "bou_17"
        ],
        "benchIds": [
            "bou_1",
            "mun_11",
            "mun_11",
            "bou_11"
        ],
        "totalPrice": 97.5,
        "updatedAt": 1788254323635
    },
    "LALIGA_MW11_RMA_FCB": {
        "fixtureId": "LALIGA_MW11_RMA_FCB",
        "matchTitle": "RMA vs FCB",
        "formation": "4-3-3",
        "captainId": "rma_17",
        "viceCaptainId": "fcb_17",
        "playerIds": [
            "rma_1",
            "rma_3",
            "fcb_4",
            "fcb_5",
            "fcb_6",
            "fcb_17",
            "fcb_18",
            "fcb_11",
            "rma_17",
            "rma_20",
            "rma_19"
        ],
        "benchIds": [
            "rma_2",
            "rma_9",
            "fcb_10",
            "fcb_8"
        ],
        "totalPrice": 99.9,
        "updatedAt": 1788254323638
    },
    "PL_GW9_CHE_MUN": {
        "fixtureId": "PL_GW9_CHE_MUN",
        "matchTitle": "CHE vs MUN",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "che_9",
        "playerIds": [
            "che_1",
            "che_3",
            "che_7",
            "che_8",
            "mun_3",
            "che_9",
            "che_10",
            "mun_9",
            "mun_16",
            "mun_17",
            "mun_18"
        ],
        "benchIds": [
            "mun_1",
            "che_15",
            "che_15",
            "mun_10"
        ],
        "totalPrice": 99.2,
        "updatedAt": 1788254323641
    },
    "PL_GW9_MCI_BHA": {
        "fixtureId": "PL_GW9_MCI_BHA",
        "matchTitle": "MCI vs BHA",
        "formation": "4-3-3",
        "captainId": "mci_18",
        "viceCaptainId": "bha_5",
        "playerIds": [
            "mci_1",
            "mci_6",
            "mci_4",
            "mci_3",
            "bha_5",
            "bha_9",
            "bha_10",
            "bha_12",
            "mci_18",
            "bha_16",
            "bha_17"
        ],
        "benchIds": [
            "bha_1",
            "mci_11",
            "mci_11",
            "bha_14"
        ],
        "totalPrice": 95.7,
        "updatedAt": 1788254323642
    },
    "PL_GW9_TOT_CRY": {
        "fixtureId": "PL_GW9_TOT_CRY",
        "matchTitle": "TOT vs CRY",
        "formation": "4-3-3",
        "captainId": "cry_10",
        "viceCaptainId": "tot_7",
        "playerIds": [
            "cry_1",
            "tot_7",
            "tot_3",
            "cry_3",
            "cry_4",
            "tot_9",
            "tot_12",
            "cry_10",
            "tot_15",
            "cry_17",
            "cry_18"
        ],
        "benchIds": [
            "tot_1",
            "tot_13",
            "cry_11",
            "cry_11"
        ],
        "totalPrice": 81.3,
        "updatedAt": 1788254323643
    },
    "PL_GW9_LIV_ARS": {
        "fixtureId": "PL_GW9_LIV_ARS",
        "matchTitle": "LIV vs ARS",
        "formation": "4-3-3",
        "captainId": "ars_9",
        "viceCaptainId": "ars_4",
        "playerIds": [
            "ars_1",
            "liv_7",
            "liv_3",
            "liv_4",
            "ars_4",
            "liv_10",
            "ars_9",
            "ars_11",
            "liv_16",
            "ars_16",
            "ars_17"
        ],
        "benchIds": [
            "liv_1",
            "liv_11",
            "ars_5",
            "ars_5"
        ],
        "totalPrice": 99.1,
        "updatedAt": 1788254323644
    },
    "PL_GW10_ARS_HUL": {
        "fixtureId": "PL_GW10_ARS_HUL",
        "matchTitle": "ARS vs HUL",
        "formation": "4-3-3",
        "captainId": "ars_9",
        "viceCaptainId": "ars_4",
        "playerIds": [
            "ars_1",
            "ars_4",
            "hul_3",
            "hul_4",
            "hul_5",
            "ars_9",
            "ars_11",
            "hul_10",
            "ars_16",
            "ars_17",
            "hul_18"
        ],
        "benchIds": [
            "hul_1",
            "ars_5",
            "ars_5",
            "hul_6"
        ],
        "totalPrice": 84.7,
        "updatedAt": 1788254323645
    },
    "PL_GW10_CRY_LIV": {
        "fixtureId": "PL_GW10_CRY_LIV",
        "matchTitle": "CRY vs LIV",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "liv_11",
        "playerIds": [
            "liv_1",
            "cry_3",
            "cry_4",
            "liv_7",
            "liv_3",
            "cry_10",
            "liv_10",
            "liv_11",
            "cry_17",
            "cry_18",
            "liv_16"
        ],
        "benchIds": [
            "cry_1",
            "cry_11",
            "liv_12",
            "liv_12"
        ],
        "totalPrice": 90.5,
        "updatedAt": 1788254323646
    },
    "PL_GW10_LEE_TOT": {
        "fixtureId": "PL_GW10_LEE_TOT",
        "matchTitle": "LEE vs TOT",
        "formation": "4-3-3",
        "captainId": "lee_1",
        "viceCaptainId": "lee_5",
        "playerIds": [
            "lee_1",
            "lee_5",
            "lee_3",
            "lee_4",
            "lee_6",
            "tot_9",
            "tot_12",
            "tot_13",
            "lee_16",
            "tot_15",
            "tot_16"
        ],
        "benchIds": [
            "tot_1",
            "lee_10",
            "lee_10",
            "tot_7"
        ],
        "totalPrice": 80.2,
        "updatedAt": 1788254323647
    },
    "PL_GW10_MUN_AVL": {
        "fixtureId": "PL_GW10_MUN_AVL",
        "matchTitle": "MUN vs AVL",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "mun_10",
        "playerIds": [
            "mun_1",
            "mun_3",
            "mun_4",
            "avl_3",
            "avl_4",
            "mun_9",
            "mun_10",
            "avl_9",
            "mun_16",
            "avl_16",
            "avl_17"
        ],
        "benchIds": [
            "avl_1",
            "mun_11",
            "mun_11",
            "avl_12"
        ],
        "totalPrice": 95,
        "updatedAt": 1788254323649
    },
    "PL_GW10_NFO_MCI": {
        "fixtureId": "PL_GW10_NFO_MCI",
        "matchTitle": "NFO vs MCI",
        "formation": "4-3-3",
        "captainId": "mci_18",
        "viceCaptainId": "nfo_9",
        "playerIds": [
            "mci_1",
            "nfo_5",
            "mci_6",
            "mci_4",
            "mci_3",
            "nfo_9",
            "nfo_11",
            "nfo_12",
            "nfo_15",
            "nfo_16",
            "mci_18"
        ],
        "benchIds": [
            "nfo_1",
            "nfo_6",
            "mci_11",
            "mci_11"
        ],
        "totalPrice": 99.8,
        "updatedAt": 1788254323650
    },
    "PL_GW10_SUN_CHE": {
        "fixtureId": "PL_GW10_SUN_CHE",
        "matchTitle": "SUN vs CHE",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_15",
        "playerIds": [
            "sun_1",
            "sun_3",
            "sun_4",
            "sun_6",
            "che_3",
            "che_9",
            "che_10",
            "che_12",
            "sun_18",
            "sun_17",
            "che_15"
        ],
        "benchIds": [
            "che_1",
            "sun_10",
            "sun_10",
            "che_14"
        ],
        "totalPrice": 89.7,
        "updatedAt": 1788254323652
    },
    "LALIGA_MW13_ATM_SEV": {
        "fixtureId": "LALIGA_MW13_ATM_SEV",
        "matchTitle": "ATM vs SEV",
        "formation": "4-3-3",
        "captainId": "atm_18",
        "viceCaptainId": "sev_15",
        "playerIds": [
            "atm_1",
            "atm_3",
            "sev_3",
            "sev_8",
            "sev_6",
            "atm_10",
            "atm_12",
            "atm_11",
            "atm_18",
            "sev_15",
            "sev_16"
        ],
        "benchIds": [
            "sev_1",
            "atm_17",
            "atm_17",
            "sev_18"
        ],
        "totalPrice": 94.3,
        "updatedAt": 1788254323654
    },
    "LALIGA_MW13_ATH_FCB": {
        "fixtureId": "LALIGA_MW13_ATH_FCB",
        "matchTitle": "ATH vs FCB",
        "formation": "4-3-3",
        "captainId": "fcb_17",
        "viceCaptainId": "ath_11",
        "playerIds": [
            "fcb_2",
            "ath_3",
            "fcb_4",
            "fcb_5",
            "fcb_6",
            "ath_11",
            "ath_10",
            "fcb_17",
            "ath_18",
            "ath_19",
            "ath_17"
        ],
        "benchIds": [
            "fcb_3",
            "ath_8",
            "ath_12",
            "fcb_19"
        ],
        "totalPrice": 99.5,
        "updatedAt": 1788254323657
    },
    "PL_GW11_CHE_LEE": {
        "fixtureId": "PL_GW11_CHE_LEE",
        "matchTitle": "CHE vs LEE",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_15",
        "playerIds": [
            "lee_1",
            "che_3",
            "lee_5",
            "lee_3",
            "lee_4",
            "che_9",
            "che_10",
            "che_12",
            "che_15",
            "lee_16",
            "lee_17"
        ],
        "benchIds": [
            "che_1",
            "che_14",
            "lee_10",
            "lee_10"
        ],
        "totalPrice": 90.2,
        "updatedAt": 1788254323658
    },
    "PL_GW11_LIV_MUN": {
        "fixtureId": "PL_GW11_LIV_MUN",
        "matchTitle": "LIV vs MUN",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "liv_10",
        "playerIds": [
            "liv_1",
            "liv_7",
            "mun_3",
            "mun_4",
            "mun_7",
            "liv_10",
            "liv_11",
            "mun_9",
            "liv_16",
            "mun_16",
            "mun_17"
        ],
        "benchIds": [
            "mun_1",
            "liv_12",
            "liv_12",
            "mun_10"
        ],
        "totalPrice": 98.4,
        "updatedAt": 1788254323659
    },
    "PL_GW11_MCI_FUL": {
        "fixtureId": "PL_GW11_MCI_FUL",
        "matchTitle": "MCI vs FUL",
        "formation": "4-3-3",
        "captainId": "mci_18",
        "viceCaptainId": "mci_6",
        "playerIds": [
            "mci_1",
            "mci_6",
            "mci_4",
            "mci_3",
            "mci_7",
            "ful_9",
            "ful_10",
            "ful_11",
            "mci_18",
            "ful_16",
            "ful_17"
        ],
        "benchIds": [
            "ful_1",
            "mci_11",
            "mci_11",
            "ful_4"
        ],
        "totalPrice": 97,
        "updatedAt": 1788254323660
    },
    "PL_GW11_NEW_ARS": {
        "fixtureId": "PL_GW11_NEW_ARS",
        "matchTitle": "NEW vs ARS",
        "formation": "4-3-3",
        "captainId": "ars_9",
        "viceCaptainId": "ars_4",
        "playerIds": [
            "new_1",
            "new_3",
            "new_8",
            "ars_4",
            "ars_5",
            "ars_9",
            "ars_11",
            "ars_10",
            "new_15",
            "new_17",
            "ars_16"
        ],
        "benchIds": [
            "ars_1",
            "new_9",
            "new_9",
            "ars_3"
        ],
        "totalPrice": 94.9,
        "updatedAt": 1788254323662
    },
    "PL_GW11_TOT_IPS": {
        "fixtureId": "PL_GW11_TOT_IPS",
        "matchTitle": "TOT vs IPS",
        "formation": "4-3-3",
        "captainId": "ips_16",
        "viceCaptainId": "ips_3",
        "playerIds": [
            "ips_1",
            "tot_7",
            "ips_3",
            "ips_4",
            "ips_5",
            "tot_9",
            "tot_12",
            "tot_13",
            "tot_15",
            "ips_16",
            "ips_17"
        ],
        "benchIds": [
            "tot_1",
            "tot_3",
            "ips_9",
            "ips_9"
        ],
        "totalPrice": 76.3,
        "updatedAt": 1788254323664
    },
    "PL_GW12_ARS_MCI": {
        "fixtureId": "PL_GW12_ARS_MCI",
        "matchTitle": "ARS vs MCI",
        "formation": "4-3-3",
        "captainId": "mci_11",
        "viceCaptainId": "ars_9",
        "playerIds": [
            "mci_1",
            "ars_4",
            "ars_5",
            "mci_6",
            "mci_4",
            "ars_9",
            "ars_11",
            "mci_11",
            "ars_16",
            "ars_18",
            "mci_18"
        ],
        "benchIds": [
            "ars_1",
            "ars_8",
            "mci_9",
            "mci_17"
        ],
        "totalPrice": 99.8,
        "updatedAt": 1788254323665
    },
    "PL_GW12_EVE_LIV": {
        "fixtureId": "PL_GW12_EVE_LIV",
        "matchTitle": "EVE vs LIV",
        "formation": "4-3-3",
        "captainId": "eve_3",
        "viceCaptainId": "liv_10",
        "playerIds": [
            "liv_1",
            "eve_3",
            "eve_4",
            "eve_7",
            "liv_7",
            "eve_9",
            "liv_10",
            "liv_11",
            "eve_17",
            "eve_18",
            "liv_16"
        ],
        "benchIds": [
            "eve_1",
            "eve_10",
            "liv_12",
            "liv_12"
        ],
        "totalPrice": 91.4,
        "updatedAt": 1788254323666
    },
    "PL_GW12_MUN_BRE": {
        "fixtureId": "PL_GW12_MUN_BRE",
        "matchTitle": "MUN vs BRE",
        "formation": "4-3-3",
        "captainId": "bre_11",
        "viceCaptainId": "bre_12",
        "playerIds": [
            "mun_1",
            "mun_3",
            "bre_5",
            "bre_6",
            "bre_3",
            "bre_11",
            "bre_12",
            "bre_10",
            "mun_16",
            "mun_17",
            "mun_18"
        ],
        "benchIds": [
            "bre_1",
            "mun_9",
            "mun_9",
            "bre_15"
        ],
        "totalPrice": 92.6,
        "updatedAt": 1788254323668
    },
    "PL_GW12_NFO_CHE": {
        "fixtureId": "PL_GW12_NFO_CHE",
        "matchTitle": "NFO vs CHE",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "nfo_9",
        "playerIds": [
            "che_1",
            "nfo_5",
            "nfo_3",
            "che_3",
            "che_7",
            "nfo_9",
            "che_9",
            "che_10",
            "nfo_15",
            "nfo_16",
            "nfo_17"
        ],
        "benchIds": [
            "nfo_1",
            "nfo_11",
            "che_15",
            "che_15"
        ],
        "totalPrice": 94.1,
        "updatedAt": 1788254323670
    },
    "PL_GW12_SUN_TOT": {
        "fixtureId": "PL_GW12_SUN_TOT",
        "matchTitle": "SUN vs TOT",
        "formation": "4-3-3",
        "captainId": "sun_3",
        "viceCaptainId": "sun_18",
        "playerIds": [
            "sun_1",
            "sun_3",
            "sun_4",
            "sun_6",
            "sun_7",
            "tot_9",
            "tot_12",
            "tot_13",
            "sun_18",
            "tot_15",
            "tot_16"
        ],
        "benchIds": [
            "tot_1",
            "sun_10",
            "sun_10",
            "tot_7"
        ],
        "totalPrice": 79.2,
        "updatedAt": 1788254323671
    },
    "PL_GW13_BRE_ARS": {
        "fixtureId": "PL_GW13_BRE_ARS",
        "matchTitle": "BRE vs ARS",
        "formation": "4-3-3",
        "captainId": "ars_4",
        "viceCaptainId": "bre_11",
        "playerIds": [
            "ars_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "bre_11",
            "bre_12",
            "bre_10",
            "bre_16",
            "bre_17",
            "ars_16"
        ],
        "benchIds": [
            "bre_1",
            "bre_5",
            "ars_9",
            "ars_9"
        ],
        "totalPrice": 97.3,
        "updatedAt": 1788254323673
    },
    "PL_GW13_CHE_CRY": {
        "fixtureId": "PL_GW13_CHE_CRY",
        "matchTitle": "CHE vs CRY",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_15",
        "playerIds": [
            "che_1",
            "che_3",
            "che_7",
            "che_8",
            "cry_3",
            "che_9",
            "cry_10",
            "cry_11",
            "che_15",
            "cry_17",
            "cry_18"
        ],
        "benchIds": [
            "cry_1",
            "che_10",
            "che_10",
            "cry_14"
        ],
        "totalPrice": 89.7,
        "updatedAt": 1788254323674
    },
    "PL_GW13_LIV_SUN": {
        "fixtureId": "PL_GW13_LIV_SUN",
        "matchTitle": "LIV vs SUN",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "liv_11",
        "playerIds": [
            "sun_1",
            "liv_7",
            "sun_3",
            "sun_4",
            "sun_6",
            "liv_10",
            "liv_11",
            "liv_12",
            "liv_16",
            "sun_18",
            "sun_17"
        ],
        "benchIds": [
            "liv_1",
            "liv_9",
            "sun_10",
            "sun_10"
        ],
        "totalPrice": 90,
        "updatedAt": 1788254323675
    },
    "PL_GW13_MCI_LEE": {
        "fixtureId": "PL_GW13_MCI_LEE",
        "matchTitle": "MCI vs LEE",
        "formation": "4-3-3",
        "captainId": "mci_11",
        "viceCaptainId": "mci_18",
        "playerIds": [
            "lee_1",
            "mci_6",
            "lee_5",
            "lee_3",
            "lee_4",
            "mci_11",
            "mci_12",
            "mci_10",
            "mci_18",
            "lee_16",
            "lee_17"
        ],
        "benchIds": [
            "mci_1",
            "mci_4",
            "lee_10",
            "lee_10"
        ],
        "totalPrice": 98.8,
        "updatedAt": 1788254323676
    },
    "PL_GW13_NEW_MUN": {
        "fixtureId": "PL_GW13_NEW_MUN",
        "matchTitle": "NEW vs MUN",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "new_3",
        "playerIds": [
            "new_1",
            "new_3",
            "new_8",
            "new_4",
            "mun_3",
            "mun_9",
            "mun_10",
            "mun_11",
            "new_15",
            "new_17",
            "mun_16"
        ],
        "benchIds": [
            "mun_1",
            "new_9",
            "new_9",
            "mun_13"
        ],
        "totalPrice": 94.7,
        "updatedAt": 1788254323678
    },
    "PL_GW13_TOT_FUL": {
        "fixtureId": "PL_GW13_TOT_FUL",
        "matchTitle": "TOT vs FUL",
        "formation": "4-3-3",
        "captainId": "ful_9",
        "viceCaptainId": "ful_16",
        "playerIds": [
            "ful_1",
            "tot_7",
            "tot_3",
            "tot_5",
            "tot_8",
            "ful_9",
            "ful_10",
            "ful_11",
            "tot_15",
            "tot_16",
            "ful_16"
        ],
        "benchIds": [
            "tot_1",
            "tot_9",
            "ful_4",
            "ful_4"
        ],
        "totalPrice": 79.3,
        "updatedAt": 1788254323680
    },
    "LALIGA_MW15_ATH_RMA": {
        "fixtureId": "LALIGA_MW15_ATH_RMA",
        "matchTitle": "ATH vs RMA",
        "formation": "4-3-3",
        "captainId": "rma_17",
        "viceCaptainId": "rma_16",
        "playerIds": [
            "rma_1",
            "ath_3",
            "ath_4",
            "rma_3",
            "rma_6",
            "ath_11",
            "ath_10",
            "ath_12",
            "ath_18",
            "rma_17",
            "rma_16"
        ],
        "benchIds": [
            "ath_1",
            "ath_8",
            "rma_9",
            "rma_8"
        ],
        "totalPrice": 99.8,
        "updatedAt": 1788254323683
    },
    "PL_GW14_BRE_MCI": {
        "fixtureId": "PL_GW14_BRE_MCI",
        "matchTitle": "BRE vs MCI",
        "formation": "4-3-3",
        "captainId": "bre_11",
        "viceCaptainId": "mci_18",
        "playerIds": [
            "mci_1",
            "bre_5",
            "mci_6",
            "mci_4",
            "mci_3",
            "bre_11",
            "bre_12",
            "bre_10",
            "bre_16",
            "bre_17",
            "mci_18"
        ],
        "benchIds": [
            "bre_1",
            "bre_6",
            "mci_11",
            "mci_11"
        ],
        "totalPrice": 99.2,
        "updatedAt": 1788254323684
    },
    "PL_GW14_CHE_LIV": {
        "fixtureId": "PL_GW14_CHE_LIV",
        "matchTitle": "CHE vs LIV",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_15",
        "playerIds": [
            "liv_1",
            "che_3",
            "che_7",
            "che_8",
            "liv_7",
            "che_9",
            "liv_10",
            "liv_11",
            "che_15",
            "che_16",
            "liv_16"
        ],
        "benchIds": [
            "liv_2",
            "che_10",
            "che_10",
            "liv_12"
        ],
        "totalPrice": 98.1,
        "updatedAt": 1788254323685
    },
    "PL_GW14_MUN_COV": {
        "fixtureId": "PL_GW14_MUN_COV",
        "matchTitle": "MUN vs COV",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "mun_10",
        "playerIds": [
            "mun_1",
            "mun_3",
            "mun_4",
            "cov_4",
            "cov_5",
            "mun_9",
            "mun_10",
            "cov_12",
            "mun_16",
            "cov_15",
            "cov_17"
        ],
        "benchIds": [
            "cov_1",
            "mun_11",
            "mun_11",
            "cov_13"
        ],
        "totalPrice": 91,
        "updatedAt": 1788254323688
    },
    "PL_GW14_TOT_ARS": {
        "fixtureId": "PL_GW14_TOT_ARS",
        "matchTitle": "TOT vs ARS",
        "formation": "4-3-3",
        "captainId": "ars_4",
        "viceCaptainId": "ars_5",
        "playerIds": [
            "ars_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "tot_9",
            "tot_12",
            "tot_13",
            "tot_15",
            "tot_16",
            "ars_16"
        ],
        "benchIds": [
            "tot_1",
            "tot_7",
            "ars_9",
            "ars_9"
        ],
        "totalPrice": 95.3,
        "updatedAt": 1788254323690
    },
    "LALIGA_MW16_ATM_ATH": {
        "fixtureId": "LALIGA_MW16_ATM_ATH",
        "matchTitle": "ATM vs ATH",
        "formation": "4-3-3",
        "captainId": "atm_18",
        "viceCaptainId": "ath_11",
        "playerIds": [
            "ath_1",
            "atm_3",
            "atm_4",
            "ath_3",
            "ath_4",
            "atm_10",
            "atm_12",
            "ath_11",
            "atm_18",
            "ath_18",
            "ath_19"
        ],
        "benchIds": [
            "atm_1",
            "atm_17",
            "ath_10",
            "ath_10"
        ],
        "totalPrice": 99.9,
        "updatedAt": 1788254323693
    },
    "PL_GW15_ARS_BOU": {
        "fixtureId": "PL_GW15_ARS_BOU",
        "matchTitle": "ARS vs BOU",
        "formation": "4-3-3",
        "captainId": "ars_4",
        "viceCaptainId": "ars_5",
        "playerIds": [
            "ars_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "bou_10",
            "bou_11",
            "bou_12",
            "ars_16",
            "bou_16",
            "bou_17"
        ],
        "benchIds": [
            "bou_1",
            "ars_9",
            "ars_9",
            "bou_5"
        ],
        "totalPrice": 96.6,
        "updatedAt": 1788254323694
    },
    "PL_GW15_CRY_MUN": {
        "fixtureId": "PL_GW15_CRY_MUN",
        "matchTitle": "CRY vs MUN",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "mun_10",
        "playerIds": [
            "mun_1",
            "cry_3",
            "cry_4",
            "mun_3",
            "mun_4",
            "cry_10",
            "mun_9",
            "mun_10",
            "cry_17",
            "cry_18",
            "mun_16"
        ],
        "benchIds": [
            "cry_1",
            "cry_11",
            "mun_11",
            "mun_11"
        ],
        "totalPrice": 95.5,
        "updatedAt": 1788254323696
    },
    "PL_GW15_HUL_TOT": {
        "fixtureId": "PL_GW15_HUL_TOT",
        "matchTitle": "HUL vs TOT",
        "formation": "4-3-3",
        "captainId": "hul_1",
        "viceCaptainId": "hul_3",
        "playerIds": [
            "hul_1",
            "hul_3",
            "hul_4",
            "hul_5",
            "tot_7",
            "hul_10",
            "tot_9",
            "tot_12",
            "hul_18",
            "tot_15",
            "tot_16"
        ],
        "benchIds": [
            "tot_1",
            "hul_6",
            "hul_6",
            "tot_13"
        ],
        "totalPrice": 73.3,
        "updatedAt": 1788254323697
    },
    "PL_GW15_LIV_LEE": {
        "fixtureId": "PL_GW15_LIV_LEE",
        "matchTitle": "LIV vs LEE",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "liv_11",
        "playerIds": [
            "lee_1",
            "liv_7",
            "lee_5",
            "lee_3",
            "lee_4",
            "liv_10",
            "liv_11",
            "liv_12",
            "liv_16",
            "lee_16",
            "lee_17"
        ],
        "benchIds": [
            "liv_1",
            "liv_9",
            "lee_10",
            "lee_10"
        ],
        "totalPrice": 90.5,
        "updatedAt": 1788254323698
    },
    "PL_GW15_MCI_CHE": {
        "fixtureId": "PL_GW15_MCI_CHE",
        "matchTitle": "MCI vs CHE",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_15",
        "playerIds": [
            "mci_1",
            "mci_6",
            "mci_4",
            "mci_3",
            "mci_7",
            "che_9",
            "che_10",
            "che_12",
            "che_15",
            "che_16",
            "che_17"
        ],
        "benchIds": [
            "che_1",
            "mci_11",
            "mci_11",
            "che_14"
        ],
        "totalPrice": 96.6,
        "updatedAt": 1788254323700
    },
    "PL_GW16_ARS_MUN": {
        "fixtureId": "PL_GW16_ARS_MUN",
        "matchTitle": "ARS vs MUN",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "ars_9",
        "playerIds": [
            "ars_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "mun_3",
            "ars_9",
            "ars_11",
            "mun_9",
            "mun_16",
            "mun_17",
            "mun_18"
        ],
        "benchIds": [
            "mun_1",
            "ars_6",
            "ars_6",
            "mun_10"
        ],
        "totalPrice": 99.1,
        "updatedAt": 1788254323702
    },
    "PL_GW16_CHE_AVL": {
        "fixtureId": "PL_GW16_CHE_AVL",
        "matchTitle": "CHE vs AVL",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_10",
        "playerIds": [
            "avl_1",
            "che_3",
            "che_7",
            "che_8",
            "avl_3",
            "che_9",
            "che_10",
            "che_12",
            "avl_16",
            "avl_17",
            "avl_15"
        ],
        "benchIds": [
            "avl_2",
            "che_15",
            "che_15",
            "avl_9"
        ],
        "totalPrice": 93.6,
        "updatedAt": 1788254323705
    },
    "PL_GW16_LIV_TOT": {
        "fixtureId": "PL_GW16_LIV_TOT",
        "matchTitle": "LIV vs TOT",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "liv_11",
        "playerIds": [
            "liv_1",
            "liv_7",
            "liv_3",
            "tot_7",
            "tot_3",
            "liv_10",
            "liv_11",
            "tot_9",
            "liv_16",
            "tot_15",
            "tot_16"
        ],
        "benchIds": [
            "tot_1",
            "liv_12",
            "liv_12",
            "tot_12"
        ],
        "totalPrice": 92.2,
        "updatedAt": 1788254323706
    },
    "PL_GW16_MCI_HUL": {
        "fixtureId": "PL_GW16_MCI_HUL",
        "matchTitle": "MCI vs HUL",
        "formation": "4-3-3",
        "captainId": "mci_11",
        "viceCaptainId": "hul_3",
        "playerIds": [
            "mci_1",
            "mci_6",
            "hul_3",
            "hul_4",
            "hul_5",
            "mci_11",
            "hul_10",
            "hul_16",
            "mci_18",
            "mci_12",
            "mci_10"
        ],
        "benchIds": [
            "hul_1",
            "mci_4",
            "mci_4",
            "hul_6"
        ],
        "totalPrice": 91.9,
        "updatedAt": 1788254323709
    },
    "LALIGA_MW18_FCB_ATM": {
        "fixtureId": "LALIGA_MW18_FCB_ATM",
        "matchTitle": "FCB vs ATM",
        "formation": "4-3-3",
        "captainId": "fcb_17",
        "viceCaptainId": "fcb_18",
        "playerIds": [
            "fcb_2",
            "fcb_4",
            "fcb_5",
            "fcb_6",
            "atm_3",
            "fcb_17",
            "fcb_18",
            "atm_10",
            "atm_18",
            "atm_17",
            "atm_19"
        ],
        "benchIds": [
            "fcb_3",
            "fcb_10",
            "atm_12",
            "atm_12"
        ],
        "totalPrice": 99.7,
        "updatedAt": 1788254323713
    },
    "LALIGA_MW18_SEV_ATH": {
        "fixtureId": "LALIGA_MW18_SEV_ATH",
        "matchTitle": "SEV vs ATH",
        "formation": "4-3-3",
        "captainId": "ath_11",
        "viceCaptainId": "ath_18",
        "playerIds": [
            "sev_1",
            "sev_3",
            "sev_8",
            "sev_6",
            "ath_3",
            "sev_10",
            "ath_11",
            "ath_10",
            "ath_18",
            "ath_19",
            "ath_17"
        ],
        "benchIds": [
            "ath_1",
            "sev_15",
            "sev_15",
            "ath_12"
        ],
        "totalPrice": 90.8,
        "updatedAt": 1788254323716
    },
    "PL_GW17_COV_CHE": {
        "fixtureId": "PL_GW17_COV_CHE",
        "matchTitle": "COV vs CHE",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_10",
        "playerIds": [
            "che_1",
            "cov_4",
            "cov_5",
            "che_3",
            "che_7",
            "che_9",
            "che_10",
            "che_12",
            "cov_15",
            "cov_17",
            "cov_18"
        ],
        "benchIds": [
            "cov_1",
            "cov_12",
            "che_15",
            "che_15"
        ],
        "totalPrice": 87.3,
        "updatedAt": 1788254323719
    },
    "PL_GW17_CRY_ARS": {
        "fixtureId": "PL_GW17_CRY_ARS",
        "matchTitle": "CRY vs ARS",
        "formation": "4-3-3",
        "captainId": "ars_4",
        "viceCaptainId": "ars_5",
        "playerIds": [
            "ars_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "cry_10",
            "cry_11",
            "cry_14",
            "cry_17",
            "cry_18",
            "ars_16"
        ],
        "benchIds": [
            "cry_1",
            "cry_3",
            "ars_9",
            "ars_9"
        ],
        "totalPrice": 94.6,
        "updatedAt": 1788254323721
    },
    "PL_GW17_HUL_LIV": {
        "fixtureId": "PL_GW17_HUL_LIV",
        "matchTitle": "HUL vs LIV",
        "formation": "4-3-3",
        "captainId": "hul_3",
        "viceCaptainId": "liv_10",
        "playerIds": [
            "liv_1",
            "hul_3",
            "hul_4",
            "hul_5",
            "hul_6",
            "hul_10",
            "liv_10",
            "liv_11",
            "hul_18",
            "liv_16",
            "liv_17"
        ],
        "benchIds": [
            "hul_1",
            "hul_16",
            "liv_12",
            "liv_12"
        ],
        "totalPrice": 84.6,
        "updatedAt": 1788254323723
    },
    "PL_GW17_MUN_NFO": {
        "fixtureId": "PL_GW17_MUN_NFO",
        "matchTitle": "MUN vs NFO",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "nfo_9",
        "playerIds": [
            "mun_1",
            "mun_3",
            "nfo_5",
            "nfo_3",
            "nfo_4",
            "mun_9",
            "mun_10",
            "nfo_9",
            "mun_16",
            "nfo_15",
            "nfo_16"
        ],
        "benchIds": [
            "nfo_1",
            "mun_11",
            "mun_11",
            "nfo_11"
        ],
        "totalPrice": 99.3,
        "updatedAt": 1788254323726
    },
    "PL_GW17_NEW_MCI": {
        "fixtureId": "PL_GW17_NEW_MCI",
        "matchTitle": "NEW vs MCI",
        "formation": "4-3-3",
        "captainId": "mci_11",
        "viceCaptainId": "mci_18",
        "playerIds": [
            "new_1",
            "new_3",
            "new_8",
            "new_4",
            "mci_6",
            "mci_11",
            "mci_12",
            "mci_10",
            "new_15",
            "new_17",
            "mci_18"
        ],
        "benchIds": [
            "mci_1",
            "new_9",
            "new_9",
            "mci_4"
        ],
        "totalPrice": 99.5,
        "updatedAt": 1788254323728
    },
    "PL_GW17_TOT_BOU": {
        "fixtureId": "PL_GW17_TOT_BOU",
        "matchTitle": "TOT vs BOU",
        "formation": "4-3-3",
        "captainId": "bou_10",
        "viceCaptainId": "bou_16",
        "playerIds": [
            "bou_1",
            "tot_7",
            "bou_5",
            "bou_3",
            "bou_4",
            "tot_9",
            "tot_12",
            "bou_10",
            "tot_15",
            "tot_16",
            "bou_16"
        ],
        "benchIds": [
            "tot_1",
            "tot_13",
            "bou_11",
            "bou_11"
        ],
        "totalPrice": 82.7,
        "updatedAt": 1788254323731
    },
    "PL_GW18_AVL_LIV": {
        "fixtureId": "PL_GW18_AVL_LIV",
        "matchTitle": "AVL vs LIV",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "liv_11",
        "playerIds": [
            "liv_1",
            "avl_3",
            "avl_4",
            "liv_7",
            "liv_3",
            "avl_9",
            "liv_10",
            "liv_11",
            "avl_16",
            "avl_17",
            "liv_16"
        ],
        "benchIds": [
            "avl_1",
            "avl_12",
            "liv_12",
            "liv_12"
        ],
        "totalPrice": 90,
        "updatedAt": 1788254323733
    },
    "PL_GW18_EVE_MCI": {
        "fixtureId": "PL_GW18_EVE_MCI",
        "matchTitle": "EVE vs MCI",
        "formation": "4-3-3",
        "captainId": "eve_3",
        "viceCaptainId": "mci_18",
        "playerIds": [
            "mci_1",
            "eve_3",
            "mci_6",
            "mci_4",
            "mci_3",
            "eve_9",
            "eve_10",
            "eve_15",
            "eve_17",
            "eve_18",
            "mci_18"
        ],
        "benchIds": [
            "eve_1",
            "eve_4",
            "mci_11",
            "mci_11"
        ],
        "totalPrice": 99.9,
        "updatedAt": 1788254323734
    },
    "PL_GW18_FUL_ARS": {
        "fixtureId": "PL_GW18_FUL_ARS",
        "matchTitle": "FUL vs ARS",
        "formation": "4-3-3",
        "captainId": "ars_9",
        "viceCaptainId": "ars_4",
        "playerIds": [
            "ful_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "ful_9",
            "ful_10",
            "ars_9",
            "ful_16",
            "ful_17",
            "ars_16"
        ],
        "benchIds": [
            "ars_1",
            "ful_4",
            "ful_4",
            "ars_11"
        ],
        "totalPrice": 90.2,
        "updatedAt": 1788254323738
    },
    "PL_GW18_IPS_CHE": {
        "fixtureId": "PL_GW18_IPS_CHE",
        "matchTitle": "IPS vs CHE",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_10",
        "playerIds": [
            "che_1",
            "ips_3",
            "ips_4",
            "che_3",
            "che_7",
            "che_9",
            "che_10",
            "che_12",
            "ips_16",
            "ips_17",
            "ips_18"
        ],
        "benchIds": [
            "ips_1",
            "ips_9",
            "che_15",
            "che_15"
        ],
        "totalPrice": 87.3,
        "updatedAt": 1788254323741
    },
    "PL_GW18_MUN_SUN": {
        "fixtureId": "PL_GW18_MUN_SUN",
        "matchTitle": "MUN vs SUN",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "mun_10",
        "playerIds": [
            "sun_1",
            "mun_3",
            "sun_3",
            "sun_4",
            "sun_6",
            "mun_9",
            "mun_10",
            "mun_11",
            "mun_16",
            "sun_18",
            "sun_17"
        ],
        "benchIds": [
            "mun_1",
            "mun_13",
            "sun_10",
            "sun_10"
        ],
        "totalPrice": 93.5,
        "updatedAt": 1788254323744
    },
    "PL_GW18_TOT_BHA": {
        "fixtureId": "PL_GW18_TOT_BHA",
        "matchTitle": "TOT vs BHA",
        "formation": "4-3-3",
        "captainId": "bha_9",
        "viceCaptainId": "bha_10",
        "playerIds": [
            "bha_1",
            "tot_7",
            "tot_3",
            "tot_5",
            "tot_8",
            "bha_9",
            "bha_10",
            "bha_12",
            "tot_15",
            "bha_16",
            "bha_17"
        ],
        "benchIds": [
            "tot_1",
            "tot_9",
            "bha_5",
            "bha_5"
        ],
        "totalPrice": 78.8,
        "updatedAt": 1788254323747
    },
    "PL_GW19_ARS_IPS": {
        "fixtureId": "PL_GW19_ARS_IPS",
        "matchTitle": "ARS vs IPS",
        "formation": "4-3-3",
        "captainId": "ars_4",
        "viceCaptainId": "ars_5",
        "playerIds": [
            "ars_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "ips_9",
            "ips_10",
            "ips_11",
            "ars_16",
            "ips_16",
            "ips_17"
        ],
        "benchIds": [
            "ips_1",
            "ars_9",
            "ars_9",
            "ips_3"
        ],
        "totalPrice": 92.6,
        "updatedAt": 1788254323751
    },
    "PL_GW19_BHA_MUN": {
        "fixtureId": "PL_GW19_BHA_MUN",
        "matchTitle": "BHA vs MUN",
        "formation": "4-3-3",
        "captainId": "bha_5",
        "viceCaptainId": "bha_9",
        "playerIds": [
            "mun_1",
            "bha_5",
            "mun_3",
            "mun_4",
            "mun_7",
            "bha_9",
            "bha_10",
            "bha_12",
            "bha_16",
            "bha_17",
            "mun_16"
        ],
        "benchIds": [
            "bha_1",
            "bha_14",
            "mun_9",
            "mun_9"
        ],
        "totalPrice": 91.7,
        "updatedAt": 1788254323754
    },
    "PL_GW19_CHE_NEW": {
        "fixtureId": "PL_GW19_CHE_NEW",
        "matchTitle": "CHE vs NEW",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_15",
        "playerIds": [
            "new_1",
            "che_3",
            "new_3",
            "new_8",
            "new_4",
            "che_9",
            "che_10",
            "che_12",
            "che_15",
            "new_15",
            "new_17"
        ],
        "benchIds": [
            "che_1",
            "che_14",
            "new_9",
            "new_9"
        ],
        "totalPrice": 90.9,
        "updatedAt": 1788254323756
    },
    "PL_GW19_LIV_COV": {
        "fixtureId": "PL_GW19_LIV_COV",
        "matchTitle": "LIV vs COV",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "liv_11",
        "playerIds": [
            "liv_1",
            "liv_7",
            "liv_3",
            "cov_4",
            "cov_5",
            "liv_10",
            "liv_11",
            "cov_12",
            "liv_16",
            "cov_15",
            "cov_17"
        ],
        "benchIds": [
            "cov_1",
            "liv_12",
            "liv_12",
            "cov_13"
        ],
        "totalPrice": 86,
        "updatedAt": 1788254323757
    },
    "PL_GW19_MCI_TOT": {
        "fixtureId": "PL_GW19_MCI_TOT",
        "matchTitle": "MCI vs TOT",
        "formation": "4-3-3",
        "captainId": "mci_18",
        "viceCaptainId": "mci_6",
        "playerIds": [
            "mci_1",
            "mci_6",
            "mci_4",
            "mci_3",
            "mci_7",
            "tot_9",
            "tot_12",
            "tot_13",
            "mci_18",
            "tot_15",
            "tot_16"
        ],
        "benchIds": [
            "tot_1",
            "mci_11",
            "mci_11",
            "tot_7"
        ],
        "totalPrice": 98.2,
        "updatedAt": 1788254323758
    },
    "PL_GW20_ARS_BRE": {
        "fixtureId": "PL_GW20_ARS_BRE",
        "matchTitle": "ARS vs BRE",
        "formation": "4-3-3",
        "captainId": "ars_4",
        "viceCaptainId": "bre_11",
        "playerIds": [
            "ars_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "bre_11",
            "bre_12",
            "bre_10",
            "ars_16",
            "bre_16",
            "bre_17"
        ],
        "benchIds": [
            "bre_1",
            "ars_9",
            "ars_9",
            "bre_5"
        ],
        "totalPrice": 97.3,
        "updatedAt": 1788254323760
    },
    "PL_GW20_CRY_CHE": {
        "fixtureId": "PL_GW20_CRY_CHE",
        "matchTitle": "CRY vs CHE",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_15",
        "playerIds": [
            "che_1",
            "cry_3",
            "che_3",
            "che_7",
            "che_8",
            "cry_10",
            "cry_11",
            "che_9",
            "cry_17",
            "cry_18",
            "che_15"
        ],
        "benchIds": [
            "cry_1",
            "cry_14",
            "che_10",
            "che_10"
        ],
        "totalPrice": 89.7,
        "updatedAt": 1788254323763
    },
    "PL_GW20_FUL_TOT": {
        "fixtureId": "PL_GW20_FUL_TOT",
        "matchTitle": "FUL vs TOT",
        "formation": "4-3-3",
        "captainId": "ful_9",
        "viceCaptainId": "ful_16",
        "playerIds": [
            "ful_1",
            "tot_7",
            "tot_3",
            "tot_5",
            "tot_8",
            "ful_9",
            "ful_10",
            "ful_11",
            "ful_16",
            "tot_15",
            "tot_16"
        ],
        "benchIds": [
            "tot_1",
            "ful_4",
            "ful_4",
            "tot_9"
        ],
        "totalPrice": 79.3,
        "updatedAt": 1788254323765
    },
    "PL_GW20_LEE_MCI": {
        "fixtureId": "PL_GW20_LEE_MCI",
        "matchTitle": "LEE vs MCI",
        "formation": "4-3-3",
        "captainId": "mci_11",
        "viceCaptainId": "mci_18",
        "playerIds": [
            "lee_1",
            "lee_5",
            "lee_3",
            "lee_4",
            "mci_6",
            "mci_11",
            "mci_12",
            "mci_10",
            "lee_16",
            "lee_17",
            "mci_18"
        ],
        "benchIds": [
            "mci_1",
            "lee_10",
            "lee_10",
            "mci_4"
        ],
        "totalPrice": 98.8,
        "updatedAt": 1788254323765
    },
    "PL_GW20_MUN_NEW": {
        "fixtureId": "PL_GW20_MUN_NEW",
        "matchTitle": "MUN vs NEW",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "new_3",
        "playerIds": [
            "new_1",
            "mun_3",
            "new_3",
            "new_8",
            "new_4",
            "mun_9",
            "mun_10",
            "mun_11",
            "mun_16",
            "new_15",
            "new_17"
        ],
        "benchIds": [
            "mun_1",
            "mun_13",
            "new_9",
            "new_9"
        ],
        "totalPrice": 94.7,
        "updatedAt": 1788254323768
    },
    "PL_GW20_SUN_LIV": {
        "fixtureId": "PL_GW20_SUN_LIV",
        "matchTitle": "SUN vs LIV",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "liv_11",
        "playerIds": [
            "sun_1",
            "sun_3",
            "sun_4",
            "sun_6",
            "liv_7",
            "liv_10",
            "liv_11",
            "liv_12",
            "sun_18",
            "sun_17",
            "liv_16"
        ],
        "benchIds": [
            "liv_1",
            "sun_10",
            "sun_10",
            "liv_9"
        ],
        "totalPrice": 90,
        "updatedAt": 1788254323768
    },
    "PL_GW21_AVL_MUN": {
        "fixtureId": "PL_GW21_AVL_MUN",
        "matchTitle": "AVL vs MUN",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "mun_10",
        "playerIds": [
            "mun_1",
            "avl_3",
            "avl_4",
            "mun_3",
            "mun_4",
            "avl_9",
            "mun_9",
            "mun_10",
            "avl_16",
            "avl_17",
            "mun_16"
        ],
        "benchIds": [
            "avl_1",
            "avl_12",
            "mun_11",
            "mun_11"
        ],
        "totalPrice": 95,
        "updatedAt": 1788254323770
    },
    "PL_GW21_CHE_SUN": {
        "fixtureId": "PL_GW21_CHE_SUN",
        "matchTitle": "CHE vs SUN",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_15",
        "playerIds": [
            "sun_1",
            "che_3",
            "sun_3",
            "sun_4",
            "sun_6",
            "che_9",
            "che_10",
            "che_12",
            "che_15",
            "sun_18",
            "sun_17"
        ],
        "benchIds": [
            "che_1",
            "che_14",
            "sun_10",
            "sun_10"
        ],
        "totalPrice": 89.7,
        "updatedAt": 1788254323772
    },
    "PL_GW21_HUL_ARS": {
        "fixtureId": "PL_GW21_HUL_ARS",
        "matchTitle": "HUL vs ARS",
        "formation": "4-3-3",
        "captainId": "ars_9",
        "viceCaptainId": "ars_4",
        "playerIds": [
            "ars_1",
            "hul_3",
            "hul_4",
            "hul_5",
            "ars_4",
            "hul_10",
            "ars_9",
            "ars_11",
            "hul_18",
            "ars_16",
            "ars_17"
        ],
        "benchIds": [
            "hul_1",
            "hul_6",
            "ars_5",
            "ars_5"
        ],
        "totalPrice": 84.7,
        "updatedAt": 1788254323773
    },
    "PL_GW21_LIV_CRY": {
        "fixtureId": "PL_GW21_LIV_CRY",
        "matchTitle": "LIV vs CRY",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "liv_11",
        "playerIds": [
            "liv_1",
            "liv_7",
            "liv_3",
            "cry_3",
            "cry_4",
            "liv_10",
            "liv_11",
            "cry_10",
            "liv_16",
            "cry_17",
            "cry_18"
        ],
        "benchIds": [
            "cry_1",
            "liv_12",
            "liv_12",
            "cry_11"
        ],
        "totalPrice": 90.5,
        "updatedAt": 1788254323774
    },
    "PL_GW21_MCI_NFO": {
        "fixtureId": "PL_GW21_MCI_NFO",
        "matchTitle": "MCI vs NFO",
        "formation": "4-3-3",
        "captainId": "mci_11",
        "viceCaptainId": "mci_18",
        "playerIds": [
            "mci_1",
            "mci_6",
            "nfo_5",
            "nfo_3",
            "nfo_4",
            "mci_11",
            "mci_12",
            "nfo_9",
            "mci_18",
            "nfo_15",
            "nfo_16"
        ],
        "benchIds": [
            "nfo_1",
            "mci_4",
            "mci_4",
            "nfo_11"
        ],
        "totalPrice": 99.6,
        "updatedAt": 1788254323775
    },
    "PL_GW21_TOT_LEE": {
        "fixtureId": "PL_GW21_TOT_LEE",
        "matchTitle": "TOT vs LEE",
        "formation": "4-3-3",
        "captainId": "lee_1",
        "viceCaptainId": "lee_5",
        "playerIds": [
            "lee_1",
            "lee_5",
            "lee_3",
            "lee_4",
            "lee_6",
            "tot_9",
            "tot_12",
            "tot_13",
            "tot_15",
            "tot_16",
            "lee_16"
        ],
        "benchIds": [
            "tot_1",
            "tot_7",
            "lee_10",
            "lee_10"
        ],
        "totalPrice": 80.2,
        "updatedAt": 1788254323777
    },
    "LALIGA_MW20_SEV_RMA": {
        "fixtureId": "LALIGA_MW20_SEV_RMA",
        "matchTitle": "SEV vs RMA",
        "formation": "4-3-3",
        "captainId": "rma_17",
        "viceCaptainId": "rma_10",
        "playerIds": [
            "rma_1",
            "sev_3",
            "sev_8",
            "sev_6",
            "rma_3",
            "sev_10",
            "rma_10",
            "rma_11",
            "sev_15",
            "sev_16",
            "rma_17"
        ],
        "benchIds": [
            "sev_1",
            "sev_7",
            "rma_9",
            "rma_16"
        ],
        "totalPrice": 100,
        "updatedAt": 1788254323780
    },
    "PL_GW22_ARS_NEW": {
        "fixtureId": "PL_GW22_ARS_NEW",
        "matchTitle": "ARS vs NEW",
        "formation": "4-3-3",
        "captainId": "ars_9",
        "viceCaptainId": "ars_4",
        "playerIds": [
            "new_1",
            "ars_4",
            "ars_5",
            "new_3",
            "new_8",
            "ars_9",
            "ars_11",
            "ars_10",
            "ars_16",
            "new_15",
            "new_17"
        ],
        "benchIds": [
            "ars_1",
            "ars_3",
            "new_9",
            "new_9"
        ],
        "totalPrice": 94.9,
        "updatedAt": 1788254323783
    },
    "PL_GW22_BHA_MCI": {
        "fixtureId": "PL_GW22_BHA_MCI",
        "matchTitle": "BHA vs MCI",
        "formation": "4-3-3",
        "captainId": "mci_18",
        "viceCaptainId": "bha_5",
        "playerIds": [
            "mci_1",
            "bha_5",
            "mci_6",
            "mci_4",
            "mci_3",
            "bha_9",
            "bha_10",
            "bha_12",
            "bha_16",
            "bha_17",
            "mci_18"
        ],
        "benchIds": [
            "bha_1",
            "bha_14",
            "mci_11",
            "mci_11"
        ],
        "totalPrice": 95.7,
        "updatedAt": 1788254323784
    },
    "PL_GW22_CRY_TOT": {
        "fixtureId": "PL_GW22_CRY_TOT",
        "matchTitle": "CRY vs TOT",
        "formation": "4-3-3",
        "captainId": "cry_10",
        "viceCaptainId": "tot_7",
        "playerIds": [
            "cry_1",
            "cry_3",
            "cry_4",
            "tot_7",
            "tot_3",
            "cry_10",
            "tot_9",
            "tot_12",
            "cry_17",
            "cry_18",
            "tot_15"
        ],
        "benchIds": [
            "tot_1",
            "cry_11",
            "cry_11",
            "tot_13"
        ],
        "totalPrice": 81.3,
        "updatedAt": 1788254323786
    },
    "PL_GW22_LEE_CHE": {
        "fixtureId": "PL_GW22_LEE_CHE",
        "matchTitle": "LEE vs CHE",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_15",
        "playerIds": [
            "lee_1",
            "lee_5",
            "lee_3",
            "lee_4",
            "che_3",
            "che_9",
            "che_10",
            "che_12",
            "lee_16",
            "lee_17",
            "che_15"
        ],
        "benchIds": [
            "che_1",
            "lee_10",
            "lee_10",
            "che_14"
        ],
        "totalPrice": 90.2,
        "updatedAt": 1788254323787
    },
    "PL_GW22_MUN_LIV": {
        "fixtureId": "PL_GW22_MUN_LIV",
        "matchTitle": "MUN vs LIV",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "liv_10",
        "playerIds": [
            "liv_1",
            "mun_3",
            "mun_4",
            "mun_7",
            "liv_7",
            "mun_9",
            "liv_10",
            "liv_11",
            "mun_16",
            "mun_17",
            "liv_16"
        ],
        "benchIds": [
            "mun_1",
            "mun_10",
            "liv_12",
            "liv_12"
        ],
        "totalPrice": 98.4,
        "updatedAt": 1788254323789
    },
    "PL_GW23_BRE_MUN": {
        "fixtureId": "PL_GW23_BRE_MUN",
        "matchTitle": "BRE vs MUN",
        "formation": "4-3-3",
        "captainId": "bre_11",
        "viceCaptainId": "bre_12",
        "playerIds": [
            "mun_1",
            "bre_5",
            "bre_6",
            "bre_3",
            "mun_3",
            "bre_11",
            "bre_12",
            "bre_10",
            "mun_16",
            "mun_17",
            "mun_18"
        ],
        "benchIds": [
            "bre_1",
            "bre_15",
            "mun_9",
            "mun_9"
        ],
        "totalPrice": 92.6,
        "updatedAt": 1788254323791
    },
    "PL_GW23_CHE_NFO": {
        "fixtureId": "PL_GW23_CHE_NFO",
        "matchTitle": "CHE vs NFO",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "nfo_9",
        "playerIds": [
            "che_1",
            "che_3",
            "che_7",
            "nfo_5",
            "nfo_3",
            "che_9",
            "che_10",
            "nfo_9",
            "nfo_15",
            "nfo_16",
            "nfo_17"
        ],
        "benchIds": [
            "nfo_1",
            "che_15",
            "che_15",
            "nfo_11"
        ],
        "totalPrice": 94.1,
        "updatedAt": 1788254323793
    },
    "PL_GW23_LIV_EVE": {
        "fixtureId": "PL_GW23_LIV_EVE",
        "matchTitle": "LIV vs EVE",
        "formation": "4-3-3",
        "captainId": "eve_3",
        "viceCaptainId": "liv_10",
        "playerIds": [
            "liv_1",
            "liv_7",
            "eve_3",
            "eve_4",
            "eve_7",
            "liv_10",
            "liv_11",
            "eve_9",
            "liv_16",
            "eve_17",
            "eve_18"
        ],
        "benchIds": [
            "eve_1",
            "liv_12",
            "liv_12",
            "eve_10"
        ],
        "totalPrice": 91.4,
        "updatedAt": 1788254323794
    },
    "PL_GW23_MCI_ARS": {
        "fixtureId": "PL_GW23_MCI_ARS",
        "matchTitle": "MCI vs ARS",
        "formation": "4-3-3",
        "captainId": "mci_11",
        "viceCaptainId": "ars_9",
        "playerIds": [
            "mci_1",
            "mci_6",
            "mci_4",
            "ars_4",
            "ars_5",
            "mci_11",
            "ars_9",
            "ars_11",
            "mci_18",
            "ars_16",
            "ars_18"
        ],
        "benchIds": [
            "ars_1",
            "mci_9",
            "mci_17",
            "ars_8"
        ],
        "totalPrice": 99.8,
        "updatedAt": 1788254323795
    },
    "PL_GW23_TOT_SUN": {
        "fixtureId": "PL_GW23_TOT_SUN",
        "matchTitle": "TOT vs SUN",
        "formation": "4-3-3",
        "captainId": "sun_3",
        "viceCaptainId": "sun_18",
        "playerIds": [
            "sun_1",
            "sun_3",
            "sun_4",
            "sun_6",
            "sun_7",
            "tot_9",
            "tot_12",
            "tot_13",
            "tot_15",
            "tot_16",
            "sun_18"
        ],
        "benchIds": [
            "tot_1",
            "tot_7",
            "sun_10",
            "sun_10"
        ],
        "totalPrice": 79.2,
        "updatedAt": 1788254323797
    },
    "PL_GW24_ARS_LIV": {
        "fixtureId": "PL_GW24_ARS_LIV",
        "matchTitle": "ARS vs LIV",
        "formation": "4-3-3",
        "captainId": "ars_9",
        "viceCaptainId": "ars_4",
        "playerIds": [
            "ars_1",
            "ars_4",
            "liv_7",
            "liv_3",
            "liv_4",
            "ars_9",
            "ars_11",
            "liv_10",
            "ars_16",
            "ars_17",
            "liv_16"
        ],
        "benchIds": [
            "liv_1",
            "ars_5",
            "ars_5",
            "liv_11"
        ],
        "totalPrice": 99.1,
        "updatedAt": 1788254323798
    },
    "PL_GW24_FUL_MCI": {
        "fixtureId": "PL_GW24_FUL_MCI",
        "matchTitle": "FUL vs MCI",
        "formation": "4-3-3",
        "captainId": "mci_18",
        "viceCaptainId": "mci_6",
        "playerIds": [
            "mci_1",
            "ful_4",
            "mci_6",
            "mci_4",
            "mci_3",
            "ful_9",
            "ful_10",
            "ful_11",
            "ful_16",
            "ful_17",
            "mci_18"
        ],
        "benchIds": [
            "ful_1",
            "ful_14",
            "mci_11",
            "mci_11"
        ],
        "totalPrice": 96.5,
        "updatedAt": 1788254323799
    },
    "PL_GW24_IPS_TOT": {
        "fixtureId": "PL_GW24_IPS_TOT",
        "matchTitle": "IPS vs TOT",
        "formation": "4-3-3",
        "captainId": "ips_9",
        "viceCaptainId": "ips_16",
        "playerIds": [
            "ips_1",
            "ips_3",
            "ips_4",
            "tot_7",
            "tot_3",
            "ips_9",
            "tot_9",
            "tot_12",
            "ips_16",
            "ips_17",
            "tot_15"
        ],
        "benchIds": [
            "tot_1",
            "ips_10",
            "ips_10",
            "tot_13"
        ],
        "totalPrice": 77.8,
        "updatedAt": 1788254323802
    },
    "PL_GW24_MUN_CHE": {
        "fixtureId": "PL_GW24_MUN_CHE",
        "matchTitle": "MUN vs CHE",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "che_9",
        "playerIds": [
            "che_1",
            "mun_3",
            "che_3",
            "che_7",
            "che_8",
            "mun_9",
            "che_9",
            "che_10",
            "mun_16",
            "mun_17",
            "mun_18"
        ],
        "benchIds": [
            "mun_1",
            "mun_10",
            "che_15",
            "che_15"
        ],
        "totalPrice": 99.2,
        "updatedAt": 1788254323804
    },
    "LALIGA_MW23_RMA_ATM": {
        "fixtureId": "LALIGA_MW23_RMA_ATM",
        "matchTitle": "RMA vs ATM",
        "formation": "4-3-3",
        "captainId": "rma_10",
        "viceCaptainId": "atm_18",
        "playerIds": [
            "rma_1",
            "rma_3",
            "rma_6",
            "atm_3",
            "atm_4",
            "rma_10",
            "rma_11",
            "atm_10",
            "atm_18",
            "atm_17",
            "atm_19"
        ],
        "benchIds": [
            "rma_2",
            "rma_9",
            "atm_12",
            "atm_12"
        ],
        "totalPrice": 99.7,
        "updatedAt": 1788254323807
    },
    "PL_GW25_COV_LIV": {
        "fixtureId": "PL_GW25_COV_LIV",
        "matchTitle": "COV vs LIV",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "liv_11",
        "playerIds": [
            "liv_1",
            "cov_4",
            "cov_5",
            "cov_6",
            "liv_7",
            "cov_12",
            "liv_10",
            "liv_11",
            "cov_15",
            "cov_17",
            "liv_16"
        ],
        "benchIds": [
            "cov_1",
            "cov_13",
            "liv_12",
            "liv_12"
        ],
        "totalPrice": 83.5,
        "updatedAt": 1788254323808
    },
    "PL_GW25_IPS_ARS": {
        "fixtureId": "PL_GW25_IPS_ARS",
        "matchTitle": "IPS vs ARS",
        "formation": "4-3-3",
        "captainId": "ars_4",
        "viceCaptainId": "ars_5",
        "playerIds": [
            "ars_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "ips_9",
            "ips_10",
            "ips_11",
            "ips_16",
            "ips_17",
            "ars_16"
        ],
        "benchIds": [
            "ips_1",
            "ips_3",
            "ars_9",
            "ars_9"
        ],
        "totalPrice": 92.6,
        "updatedAt": 1788254323810
    },
    "PL_GW25_MUN_BHA": {
        "fixtureId": "PL_GW25_MUN_BHA",
        "matchTitle": "MUN vs BHA",
        "formation": "4-3-3",
        "captainId": "bha_5",
        "viceCaptainId": "bha_9",
        "playerIds": [
            "mun_1",
            "mun_3",
            "mun_4",
            "mun_7",
            "bha_5",
            "bha_9",
            "bha_10",
            "bha_12",
            "mun_16",
            "bha_16",
            "bha_17"
        ],
        "benchIds": [
            "bha_1",
            "mun_9",
            "mun_9",
            "bha_14"
        ],
        "totalPrice": 91.7,
        "updatedAt": 1788254323812
    },
    "PL_GW25_NEW_CHE": {
        "fixtureId": "PL_GW25_NEW_CHE",
        "matchTitle": "NEW vs CHE",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_15",
        "playerIds": [
            "new_1",
            "new_3",
            "new_8",
            "new_4",
            "che_3",
            "che_9",
            "che_10",
            "che_12",
            "new_15",
            "new_17",
            "che_15"
        ],
        "benchIds": [
            "che_1",
            "new_9",
            "new_9",
            "che_14"
        ],
        "totalPrice": 90.9,
        "updatedAt": 1788254323814
    },
    "PL_GW25_TOT_MCI": {
        "fixtureId": "PL_GW25_TOT_MCI",
        "matchTitle": "TOT vs MCI",
        "formation": "4-3-3",
        "captainId": "mci_18",
        "viceCaptainId": "mci_6",
        "playerIds": [
            "mci_1",
            "mci_6",
            "mci_4",
            "mci_3",
            "mci_7",
            "tot_9",
            "tot_12",
            "tot_13",
            "tot_15",
            "tot_16",
            "mci_18"
        ],
        "benchIds": [
            "tot_1",
            "tot_7",
            "mci_11",
            "mci_11"
        ],
        "totalPrice": 98.2,
        "updatedAt": 1788254323815
    },
    "PL_GW26_ARS_FUL": {
        "fixtureId": "PL_GW26_ARS_FUL",
        "matchTitle": "ARS vs FUL",
        "formation": "4-3-3",
        "captainId": "ars_9",
        "viceCaptainId": "ars_4",
        "playerIds": [
            "ful_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "ars_9",
            "ful_9",
            "ful_10",
            "ars_16",
            "ful_16",
            "ful_17"
        ],
        "benchIds": [
            "ars_1",
            "ars_11",
            "ful_4",
            "ful_4"
        ],
        "totalPrice": 90.2,
        "updatedAt": 1788254323817
    },
    "PL_GW26_BHA_TOT": {
        "fixtureId": "PL_GW26_BHA_TOT",
        "matchTitle": "BHA vs TOT",
        "formation": "4-3-3",
        "captainId": "bha_9",
        "viceCaptainId": "bha_10",
        "playerIds": [
            "bha_1",
            "tot_7",
            "tot_3",
            "tot_5",
            "tot_8",
            "bha_9",
            "bha_10",
            "bha_12",
            "bha_16",
            "bha_17",
            "tot_15"
        ],
        "benchIds": [
            "tot_1",
            "bha_5",
            "bha_5",
            "tot_9"
        ],
        "totalPrice": 78.8,
        "updatedAt": 1788254323820
    },
    "PL_GW26_CHE_IPS": {
        "fixtureId": "PL_GW26_CHE_IPS",
        "matchTitle": "CHE vs IPS",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_10",
        "playerIds": [
            "che_1",
            "che_3",
            "che_7",
            "ips_3",
            "ips_4",
            "che_9",
            "che_10",
            "che_12",
            "ips_16",
            "ips_17",
            "ips_18"
        ],
        "benchIds": [
            "ips_1",
            "che_15",
            "che_15",
            "ips_9"
        ],
        "totalPrice": 87.3,
        "updatedAt": 1788254323822
    },
    "PL_GW26_LIV_HUL": {
        "fixtureId": "PL_GW26_LIV_HUL",
        "matchTitle": "LIV vs HUL",
        "formation": "4-3-3",
        "captainId": "hul_3",
        "viceCaptainId": "liv_10",
        "playerIds": [
            "liv_1",
            "hul_3",
            "hul_4",
            "hul_5",
            "hul_6",
            "liv_10",
            "liv_11",
            "hul_10",
            "liv_16",
            "liv_17",
            "hul_18"
        ],
        "benchIds": [
            "hul_1",
            "liv_12",
            "liv_12",
            "hul_16"
        ],
        "totalPrice": 84.6,
        "updatedAt": 1788254323823
    },
    "PL_GW26_MCI_NEW": {
        "fixtureId": "PL_GW26_MCI_NEW",
        "matchTitle": "MCI vs NEW",
        "formation": "4-3-3",
        "captainId": "mci_11",
        "viceCaptainId": "mci_18",
        "playerIds": [
            "new_1",
            "mci_6",
            "new_3",
            "new_8",
            "new_4",
            "mci_11",
            "mci_12",
            "mci_10",
            "mci_18",
            "new_15",
            "new_17"
        ],
        "benchIds": [
            "mci_1",
            "mci_4",
            "new_9",
            "new_9"
        ],
        "totalPrice": 99.5,
        "updatedAt": 1788254323825
    },
    "PL_GW26_NFO_MUN": {
        "fixtureId": "PL_GW26_NFO_MUN",
        "matchTitle": "NFO vs MUN",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "nfo_9",
        "playerIds": [
            "nfo_1",
            "nfo_5",
            "nfo_3",
            "nfo_4",
            "mun_3",
            "nfo_9",
            "mun_9",
            "mun_10",
            "nfo_15",
            "mun_16",
            "mun_17"
        ],
        "benchIds": [
            "mun_1",
            "nfo_11",
            "nfo_11",
            "mun_11"
        ],
        "totalPrice": 96.3,
        "updatedAt": 1788254323827
    },
    "PL_GW27_AVL_CHE": {
        "fixtureId": "PL_GW27_AVL_CHE",
        "matchTitle": "AVL vs CHE",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_10",
        "playerIds": [
            "avl_1",
            "avl_3",
            "che_3",
            "che_7",
            "che_8",
            "che_9",
            "che_10",
            "che_12",
            "avl_16",
            "avl_17",
            "avl_15"
        ],
        "benchIds": [
            "avl_2",
            "avl_9",
            "che_15",
            "che_15"
        ],
        "totalPrice": 93.6,
        "updatedAt": 1788254323829
    },
    "PL_GW27_HUL_MCI": {
        "fixtureId": "PL_GW27_HUL_MCI",
        "matchTitle": "HUL vs MCI",
        "formation": "4-3-3",
        "captainId": "mci_11",
        "viceCaptainId": "hul_1",
        "playerIds": [
            "hul_1",
            "hul_3",
            "hul_4",
            "hul_5",
            "mci_6",
            "hul_10",
            "hul_16",
            "mci_11",
            "mci_18",
            "mci_12",
            "mci_10"
        ],
        "benchIds": [
            "mci_1",
            "hul_6",
            "hul_6",
            "mci_4"
        ],
        "totalPrice": 89.9,
        "updatedAt": 1788254323832
    },
    "PL_GW27_MUN_ARS": {
        "fixtureId": "PL_GW27_MUN_ARS",
        "matchTitle": "MUN vs ARS",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "ars_9",
        "playerIds": [
            "ars_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "mun_9",
            "mun_10",
            "ars_9",
            "mun_16",
            "mun_17",
            "mun_18"
        ],
        "benchIds": [
            "mun_1",
            "mun_7",
            "ars_11",
            "ars_11"
        ],
        "totalPrice": 99.7,
        "updatedAt": 1788254323834
    },
    "PL_GW27_TOT_LIV": {
        "fixtureId": "PL_GW27_TOT_LIV",
        "matchTitle": "TOT vs LIV",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "liv_11",
        "playerIds": [
            "liv_1",
            "tot_7",
            "tot_3",
            "liv_7",
            "liv_3",
            "tot_9",
            "liv_10",
            "liv_11",
            "tot_15",
            "tot_16",
            "liv_16"
        ],
        "benchIds": [
            "tot_1",
            "tot_12",
            "liv_12",
            "liv_12"
        ],
        "totalPrice": 92.2,
        "updatedAt": 1788254323835
    },
    "PL_GW28_ARS_CRY": {
        "fixtureId": "PL_GW28_ARS_CRY",
        "matchTitle": "ARS vs CRY",
        "formation": "4-3-3",
        "captainId": "ars_4",
        "viceCaptainId": "ars_5",
        "playerIds": [
            "ars_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "cry_10",
            "cry_11",
            "cry_14",
            "ars_16",
            "cry_17",
            "cry_18"
        ],
        "benchIds": [
            "cry_1",
            "ars_9",
            "ars_9",
            "cry_3"
        ],
        "totalPrice": 94.6,
        "updatedAt": 1788254323837
    },
    "PL_GW28_BOU_TOT": {
        "fixtureId": "PL_GW28_BOU_TOT",
        "matchTitle": "BOU vs TOT",
        "formation": "4-3-3",
        "captainId": "bou_10",
        "viceCaptainId": "bou_16",
        "playerIds": [
            "bou_1",
            "bou_5",
            "bou_3",
            "bou_4",
            "tot_7",
            "bou_10",
            "tot_9",
            "tot_12",
            "bou_16",
            "tot_15",
            "tot_16"
        ],
        "benchIds": [
            "tot_1",
            "bou_11",
            "bou_11",
            "tot_13"
        ],
        "totalPrice": 82.7,
        "updatedAt": 1788254323839
    },
    "PL_GW28_CHE_COV": {
        "fixtureId": "PL_GW28_CHE_COV",
        "matchTitle": "CHE vs COV",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_10",
        "playerIds": [
            "che_1",
            "che_3",
            "che_7",
            "cov_4",
            "cov_5",
            "che_9",
            "che_10",
            "che_12",
            "cov_15",
            "cov_17",
            "cov_18"
        ],
        "benchIds": [
            "cov_1",
            "che_15",
            "che_15",
            "cov_12"
        ],
        "totalPrice": 87.3,
        "updatedAt": 1788254323841
    },
    "PL_GW28_LIV_AVL": {
        "fixtureId": "PL_GW28_LIV_AVL",
        "matchTitle": "LIV vs AVL",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "liv_11",
        "playerIds": [
            "liv_1",
            "liv_7",
            "liv_3",
            "avl_3",
            "avl_4",
            "liv_10",
            "liv_11",
            "avl_9",
            "liv_16",
            "avl_16",
            "avl_17"
        ],
        "benchIds": [
            "avl_1",
            "liv_12",
            "liv_12",
            "avl_12"
        ],
        "totalPrice": 90,
        "updatedAt": 1788254323843
    },
    "PL_GW28_MCI_EVE": {
        "fixtureId": "PL_GW28_MCI_EVE",
        "matchTitle": "MCI vs EVE",
        "formation": "4-3-3",
        "captainId": "eve_3",
        "viceCaptainId": "mci_18",
        "playerIds": [
            "mci_1",
            "mci_6",
            "mci_4",
            "mci_3",
            "eve_3",
            "eve_9",
            "eve_10",
            "eve_15",
            "mci_18",
            "eve_17",
            "eve_18"
        ],
        "benchIds": [
            "eve_1",
            "mci_11",
            "mci_11",
            "eve_4"
        ],
        "totalPrice": 99.9,
        "updatedAt": 1788254323843
    },
    "PL_GW28_SUN_MUN": {
        "fixtureId": "PL_GW28_SUN_MUN",
        "matchTitle": "SUN vs MUN",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "mun_10",
        "playerIds": [
            "sun_1",
            "sun_3",
            "sun_4",
            "sun_6",
            "mun_3",
            "mun_9",
            "mun_10",
            "mun_11",
            "sun_18",
            "sun_17",
            "mun_16"
        ],
        "benchIds": [
            "mun_1",
            "sun_10",
            "sun_10",
            "mun_13"
        ],
        "totalPrice": 93.5,
        "updatedAt": 1788254323846
    },
    "PL_GW29_CHE_ARS": {
        "fixtureId": "PL_GW29_CHE_ARS",
        "matchTitle": "CHE vs ARS",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "ars_9",
        "playerIds": [
            "che_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "che_9",
            "che_10",
            "ars_9",
            "che_15",
            "che_16",
            "ars_16"
        ],
        "benchIds": [
            "ars_1",
            "che_7",
            "che_14",
            "ars_11"
        ],
        "totalPrice": 99.3,
        "updatedAt": 1788254323848
    },
    "PL_GW29_COV_MCI": {
        "fixtureId": "PL_GW29_COV_MCI",
        "matchTitle": "COV vs MCI",
        "formation": "4-3-3",
        "captainId": "mci_18",
        "viceCaptainId": "mci_6",
        "playerIds": [
            "mci_1",
            "mci_6",
            "mci_4",
            "mci_3",
            "mci_7",
            "cov_12",
            "cov_13",
            "cov_14",
            "cov_15",
            "cov_17",
            "mci_18"
        ],
        "benchIds": [
            "cov_1",
            "cov_4",
            "mci_11",
            "mci_11"
        ],
        "totalPrice": 94,
        "updatedAt": 1788254323849
    },
    "PL_GW29_LIV_IPS": {
        "fixtureId": "PL_GW29_LIV_IPS",
        "matchTitle": "LIV vs IPS",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "liv_11",
        "playerIds": [
            "liv_1",
            "liv_7",
            "ips_3",
            "ips_4",
            "ips_5",
            "liv_10",
            "liv_11",
            "ips_9",
            "liv_16",
            "ips_16",
            "ips_17"
        ],
        "benchIds": [
            "ips_1",
            "liv_12",
            "liv_12",
            "ips_10"
        ],
        "totalPrice": 84.5,
        "updatedAt": 1788254323851
    },
    "PL_GW29_MUN_EVE": {
        "fixtureId": "PL_GW29_MUN_EVE",
        "matchTitle": "MUN vs EVE",
        "formation": "4-3-3",
        "captainId": "eve_3",
        "viceCaptainId": "eve_9",
        "playerIds": [
            "mun_1",
            "mun_3",
            "mun_4",
            "eve_3",
            "eve_4",
            "eve_9",
            "eve_10",
            "eve_15",
            "mun_16",
            "mun_17",
            "eve_17"
        ],
        "benchIds": [
            "eve_1",
            "mun_9",
            "mun_9",
            "eve_7"
        ],
        "totalPrice": 95.9,
        "updatedAt": 1788254323852
    },
    "PL_GW29_TOT_NFO": {
        "fixtureId": "PL_GW29_TOT_NFO",
        "matchTitle": "TOT vs NFO",
        "formation": "4-3-3",
        "captainId": "nfo_9",
        "viceCaptainId": "nfo_5",
        "playerIds": [
            "nfo_1",
            "nfo_5",
            "nfo_3",
            "nfo_4",
            "nfo_6",
            "tot_9",
            "tot_12",
            "nfo_9",
            "tot_15",
            "tot_16",
            "tot_17"
        ],
        "benchIds": [
            "tot_1",
            "tot_7",
            "nfo_11",
            "nfo_11"
        ],
        "totalPrice": 83.5,
        "updatedAt": 1788254323855
    },
    "LALIGA_MW27_ATM_FCB": {
        "fixtureId": "LALIGA_MW27_ATM_FCB",
        "matchTitle": "ATM vs FCB",
        "formation": "4-3-3",
        "captainId": "fcb_17",
        "viceCaptainId": "fcb_18",
        "playerIds": [
            "atm_1",
            "atm_3",
            "fcb_4",
            "fcb_5",
            "fcb_6",
            "fcb_17",
            "fcb_18",
            "fcb_11",
            "atm_18",
            "atm_17",
            "atm_19"
        ],
        "benchIds": [
            "fcb_2",
            "atm_9",
            "atm_8",
            "fcb_10"
        ],
        "totalPrice": 99.5,
        "updatedAt": 1788254323859
    },
    "PL_GW30_ARS_SUN": {
        "fixtureId": "PL_GW30_ARS_SUN",
        "matchTitle": "ARS vs SUN",
        "formation": "4-3-3",
        "captainId": "ars_4",
        "viceCaptainId": "ars_5",
        "playerIds": [
            "ars_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "sun_10",
            "sun_13",
            "sun_9",
            "ars_16",
            "sun_18",
            "sun_17"
        ],
        "benchIds": [
            "sun_1",
            "ars_9",
            "ars_9",
            "sun_3"
        ],
        "totalPrice": 95.5,
        "updatedAt": 1788254323861
    },
    "PL_GW30_EVE_TOT": {
        "fixtureId": "PL_GW30_EVE_TOT",
        "matchTitle": "EVE vs TOT",
        "formation": "4-3-3",
        "captainId": "eve_3",
        "viceCaptainId": "eve_9",
        "playerIds": [
            "eve_1",
            "eve_3",
            "eve_4",
            "eve_7",
            "tot_7",
            "eve_9",
            "tot_9",
            "tot_12",
            "eve_17",
            "tot_15",
            "tot_16"
        ],
        "benchIds": [
            "tot_1",
            "eve_10",
            "eve_10",
            "tot_13"
        ],
        "totalPrice": 83.7,
        "updatedAt": 1788254323863
    },
    "PL_GW30_FUL_LIV": {
        "fixtureId": "PL_GW30_FUL_LIV",
        "matchTitle": "FUL vs LIV",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "liv_11",
        "playerIds": [
            "ful_1",
            "ful_4",
            "ful_5",
            "ful_6",
            "liv_7",
            "liv_10",
            "liv_11",
            "liv_12",
            "ful_16",
            "ful_17",
            "liv_16"
        ],
        "benchIds": [
            "liv_1",
            "ful_9",
            "ful_9",
            "liv_9"
        ],
        "totalPrice": 88,
        "updatedAt": 1788254323864
    },
    "PL_GW30_HUL_CHE": {
        "fixtureId": "PL_GW30_HUL_CHE",
        "matchTitle": "HUL vs CHE",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_15",
        "playerIds": [
            "che_1",
            "hul_3",
            "hul_4",
            "hul_5",
            "che_3",
            "hul_10",
            "hul_16",
            "che_9",
            "hul_18",
            "che_15",
            "che_16"
        ],
        "benchIds": [
            "hul_1",
            "hul_6",
            "che_10",
            "che_10"
        ],
        "totalPrice": 84.7,
        "updatedAt": 1788254323865
    },
    "PL_GW30_MCI_MUN": {
        "fixtureId": "PL_GW30_MCI_MUN",
        "matchTitle": "MCI vs MUN",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "mci_11",
        "playerIds": [
            "mun_1",
            "mci_6",
            "mci_4",
            "mci_3",
            "mun_3",
            "mci_11",
            "mci_12",
            "mun_9",
            "mun_16",
            "mun_17",
            "mun_18"
        ],
        "benchIds": [
            "mci_1",
            "mci_9",
            "mun_10",
            "mun_10"
        ],
        "totalPrice": 97.2,
        "updatedAt": 1788254323869
    },
    "PL_GW31_BOU_MCI": {
        "fixtureId": "PL_GW31_BOU_MCI",
        "matchTitle": "BOU vs MCI",
        "formation": "4-3-3",
        "captainId": "mci_18",
        "viceCaptainId": "bou_10",
        "playerIds": [
            "mci_1",
            "bou_5",
            "mci_6",
            "mci_4",
            "mci_3",
            "bou_10",
            "bou_11",
            "bou_12",
            "bou_16",
            "bou_17",
            "mci_18"
        ],
        "benchIds": [
            "bou_1",
            "bou_13",
            "mci_11",
            "mci_11"
        ],
        "totalPrice": 99,
        "updatedAt": 1788254323870
    },
    "PL_GW31_CHE_FUL": {
        "fixtureId": "PL_GW31_CHE_FUL",
        "matchTitle": "CHE vs FUL",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_10",
        "playerIds": [
            "che_1",
            "che_3",
            "che_7",
            "ful_4",
            "ful_5",
            "che_9",
            "che_10",
            "che_12",
            "ful_16",
            "ful_17",
            "ful_18"
        ],
        "benchIds": [
            "ful_1",
            "che_15",
            "che_15",
            "ful_9"
        ],
        "totalPrice": 89.3,
        "updatedAt": 1788254323874
    },
    "PL_GW31_COV_ARS": {
        "fixtureId": "PL_GW31_COV_ARS",
        "matchTitle": "COV vs ARS",
        "formation": "4-3-3",
        "captainId": "ars_9",
        "viceCaptainId": "ars_4",
        "playerIds": [
            "cov_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "cov_12",
            "cov_13",
            "ars_9",
            "cov_15",
            "cov_17",
            "ars_16"
        ],
        "benchIds": [
            "ars_1",
            "cov_4",
            "cov_4",
            "ars_11"
        ],
        "totalPrice": 87.2,
        "updatedAt": 1788254323876
    },
    "PL_GW31_LIV_NEW": {
        "fixtureId": "PL_GW31_LIV_NEW",
        "matchTitle": "LIV vs NEW",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "new_3",
        "playerIds": [
            "new_1",
            "liv_7",
            "new_3",
            "new_8",
            "new_4",
            "liv_10",
            "liv_11",
            "liv_12",
            "liv_16",
            "new_15",
            "new_17"
        ],
        "benchIds": [
            "liv_1",
            "liv_9",
            "new_9",
            "new_9"
        ],
        "totalPrice": 91.2,
        "updatedAt": 1788254323877
    },
    "PL_GW31_MUN_HUL": {
        "fixtureId": "PL_GW31_MUN_HUL",
        "matchTitle": "MUN vs HUL",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "hul_3",
        "playerIds": [
            "mun_1",
            "hul_3",
            "hul_4",
            "hul_5",
            "hul_6",
            "mun_9",
            "mun_10",
            "hul_10",
            "mun_16",
            "mun_17",
            "hul_18"
        ],
        "benchIds": [
            "hul_1",
            "mun_11",
            "mun_11",
            "hul_16"
        ],
        "totalPrice": 89,
        "updatedAt": 1788254323879
    },
    "PL_GW31_TOT_BRE": {
        "fixtureId": "PL_GW31_TOT_BRE",
        "matchTitle": "TOT vs BRE",
        "formation": "4-3-3",
        "captainId": "bre_11",
        "viceCaptainId": "bre_12",
        "playerIds": [
            "bre_1",
            "tot_7",
            "bre_5",
            "bre_6",
            "bre_3",
            "tot_9",
            "bre_11",
            "bre_12",
            "tot_15",
            "tot_16",
            "tot_17"
        ],
        "benchIds": [
            "tot_1",
            "tot_12",
            "bre_10",
            "bre_10"
        ],
        "totalPrice": 81.8,
        "updatedAt": 1788254323881
    },
    "PL_GW32_ARS_AVL": {
        "fixtureId": "PL_GW32_ARS_AVL",
        "matchTitle": "ARS vs AVL",
        "formation": "4-3-3",
        "captainId": "ars_4",
        "viceCaptainId": "ars_5",
        "playerIds": [
            "ars_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "avl_9",
            "avl_12",
            "avl_13",
            "ars_16",
            "avl_16",
            "avl_17"
        ],
        "benchIds": [
            "avl_1",
            "ars_9",
            "ars_9",
            "avl_14"
        ],
        "totalPrice": 94.6,
        "updatedAt": 1788254323883
    },
    "PL_GW32_BHA_CHE": {
        "fixtureId": "PL_GW32_BHA_CHE",
        "matchTitle": "BHA vs CHE",
        "formation": "4-3-3",
        "captainId": "che_15",
        "viceCaptainId": "bha_5",
        "playerIds": [
            "che_1",
            "bha_5",
            "che_3",
            "che_7",
            "che_8",
            "bha_9",
            "bha_10",
            "bha_12",
            "bha_16",
            "bha_17",
            "che_15"
        ],
        "benchIds": [
            "bha_1",
            "bha_14",
            "che_9",
            "che_9"
        ],
        "totalPrice": 88,
        "updatedAt": 1788254323885
    },
    "PL_GW32_IPS_MUN": {
        "fixtureId": "PL_GW32_IPS_MUN",
        "matchTitle": "IPS vs MUN",
        "formation": "4-3-3",
        "captainId": "ips_9",
        "viceCaptainId": "ips_16",
        "playerIds": [
            "mun_1",
            "ips_3",
            "mun_3",
            "mun_4",
            "mun_7",
            "ips_9",
            "ips_10",
            "ips_11",
            "ips_16",
            "ips_17",
            "mun_16"
        ],
        "benchIds": [
            "ips_1",
            "ips_13",
            "mun_9",
            "mun_9"
        ],
        "totalPrice": 91,
        "updatedAt": 1788254323888
    },
    "PL_GW32_MCI_CRY": {
        "fixtureId": "PL_GW32_MCI_CRY",
        "matchTitle": "MCI vs CRY",
        "formation": "4-3-3",
        "captainId": "mci_18",
        "viceCaptainId": "mci_6",
        "playerIds": [
            "mci_1",
            "mci_6",
            "mci_4",
            "mci_3",
            "mci_7",
            "cry_10",
            "cry_11",
            "cry_14",
            "mci_18",
            "cry_17",
            "cry_18"
        ],
        "benchIds": [
            "cry_1",
            "mci_11",
            "mci_11",
            "cry_3"
        ],
        "totalPrice": 97.5,
        "updatedAt": 1788254323888
    },
    "PL_GW32_NEW_TOT": {
        "fixtureId": "PL_GW32_NEW_TOT",
        "matchTitle": "NEW vs TOT",
        "formation": "4-3-3",
        "captainId": "new_3",
        "viceCaptainId": "new_15",
        "playerIds": [
            "new_1",
            "new_3",
            "new_8",
            "new_4",
            "new_5",
            "tot_9",
            "tot_12",
            "tot_13",
            "new_15",
            "tot_15",
            "tot_16"
        ],
        "benchIds": [
            "tot_1",
            "new_9",
            "new_9",
            "tot_7"
        ],
        "totalPrice": 81,
        "updatedAt": 1788254323891
    },
    "PL_GW32_NFO_LIV": {
        "fixtureId": "PL_GW32_NFO_LIV",
        "matchTitle": "NFO vs LIV",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "nfo_9",
        "playerIds": [
            "nfo_1",
            "nfo_5",
            "nfo_3",
            "liv_7",
            "liv_3",
            "nfo_9",
            "liv_10",
            "liv_11",
            "nfo_15",
            "nfo_16",
            "liv_16"
        ],
        "benchIds": [
            "liv_1",
            "nfo_11",
            "nfo_11",
            "liv_12"
        ],
        "totalPrice": 92.8,
        "updatedAt": 1788254323892
    },
    "PL_GW33_BOU_ARS": {
        "fixtureId": "PL_GW33_BOU_ARS",
        "matchTitle": "BOU vs ARS",
        "formation": "4-3-3",
        "captainId": "ars_4",
        "viceCaptainId": "ars_5",
        "playerIds": [
            "ars_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "bou_10",
            "bou_11",
            "bou_12",
            "bou_16",
            "bou_17",
            "ars_16"
        ],
        "benchIds": [
            "bou_1",
            "bou_5",
            "ars_9",
            "ars_9"
        ],
        "totalPrice": 96.6,
        "updatedAt": 1788254323894
    },
    "PL_GW33_CHE_MCI": {
        "fixtureId": "PL_GW33_CHE_MCI",
        "matchTitle": "CHE vs MCI",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_15",
        "playerIds": [
            "mci_1",
            "mci_6",
            "mci_4",
            "mci_3",
            "mci_7",
            "che_9",
            "che_10",
            "che_12",
            "che_15",
            "che_16",
            "che_17"
        ],
        "benchIds": [
            "che_1",
            "che_14",
            "mci_11",
            "mci_11"
        ],
        "totalPrice": 96.6,
        "updatedAt": 1788254323896
    },
    "PL_GW33_LEE_LIV": {
        "fixtureId": "PL_GW33_LEE_LIV",
        "matchTitle": "LEE vs LIV",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "liv_11",
        "playerIds": [
            "lee_1",
            "lee_5",
            "lee_3",
            "lee_4",
            "liv_7",
            "liv_10",
            "liv_11",
            "liv_12",
            "lee_16",
            "lee_17",
            "liv_16"
        ],
        "benchIds": [
            "liv_1",
            "lee_10",
            "lee_10",
            "liv_9"
        ],
        "totalPrice": 90.5,
        "updatedAt": 1788254323896
    },
    "PL_GW33_MUN_CRY": {
        "fixtureId": "PL_GW33_MUN_CRY",
        "matchTitle": "MUN vs CRY",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "mun_10",
        "playerIds": [
            "mun_1",
            "mun_3",
            "mun_4",
            "cry_3",
            "cry_4",
            "mun_9",
            "mun_10",
            "cry_10",
            "mun_16",
            "cry_17",
            "cry_18"
        ],
        "benchIds": [
            "cry_1",
            "mun_11",
            "mun_11",
            "cry_11"
        ],
        "totalPrice": 95.5,
        "updatedAt": 1788254323898
    },
    "PL_GW33_TOT_HUL": {
        "fixtureId": "PL_GW33_TOT_HUL",
        "matchTitle": "TOT vs HUL",
        "formation": "4-3-3",
        "captainId": "hul_1",
        "viceCaptainId": "hul_3",
        "playerIds": [
            "hul_1",
            "tot_7",
            "hul_3",
            "hul_4",
            "hul_5",
            "tot_9",
            "hul_10",
            "hul_16",
            "tot_15",
            "tot_16",
            "tot_17"
        ],
        "benchIds": [
            "tot_1",
            "tot_12",
            "hul_6",
            "hul_6"
        ],
        "totalPrice": 73.2,
        "updatedAt": 1788254323899
    },
    "PL_GW34_ARS_TOT": {
        "fixtureId": "PL_GW34_ARS_TOT",
        "matchTitle": "ARS vs TOT",
        "formation": "4-3-3",
        "captainId": "ars_4",
        "viceCaptainId": "ars_5",
        "playerIds": [
            "ars_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "tot_9",
            "tot_12",
            "tot_13",
            "ars_16",
            "tot_15",
            "tot_16"
        ],
        "benchIds": [
            "tot_1",
            "ars_9",
            "ars_9",
            "tot_7"
        ],
        "totalPrice": 95.3,
        "updatedAt": 1788254323901
    },
    "PL_GW34_COV_MUN": {
        "fixtureId": "PL_GW34_COV_MUN",
        "matchTitle": "COV vs MUN",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "mun_10",
        "playerIds": [
            "mun_1",
            "cov_4",
            "cov_5",
            "mun_3",
            "mun_4",
            "cov_12",
            "mun_9",
            "mun_10",
            "cov_15",
            "cov_17",
            "cov_18"
        ],
        "benchIds": [
            "cov_1",
            "cov_13",
            "mun_11",
            "mun_11"
        ],
        "totalPrice": 89,
        "updatedAt": 1788254323904
    },
    "PL_GW34_LIV_CHE": {
        "fixtureId": "PL_GW34_LIV_CHE",
        "matchTitle": "LIV vs CHE",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_15",
        "playerIds": [
            "liv_1",
            "liv_7",
            "che_3",
            "che_7",
            "che_8",
            "liv_10",
            "liv_11",
            "che_9",
            "liv_16",
            "che_15",
            "che_16"
        ],
        "benchIds": [
            "liv_2",
            "liv_12",
            "che_10",
            "che_10"
        ],
        "totalPrice": 98.1,
        "updatedAt": 1788254323905
    },
    "PL_GW34_MCI_BRE": {
        "fixtureId": "PL_GW34_MCI_BRE",
        "matchTitle": "MCI vs BRE",
        "formation": "4-3-3",
        "captainId": "bre_11",
        "viceCaptainId": "mci_18",
        "playerIds": [
            "mci_1",
            "mci_6",
            "mci_4",
            "mci_3",
            "bre_5",
            "bre_11",
            "bre_12",
            "bre_10",
            "mci_18",
            "bre_16",
            "bre_17"
        ],
        "benchIds": [
            "bre_1",
            "mci_11",
            "mci_11",
            "bre_6"
        ],
        "totalPrice": 99.2,
        "updatedAt": 1788254323906
    },
    "PL_GW35_BOU_MUN": {
        "fixtureId": "PL_GW35_BOU_MUN",
        "matchTitle": "BOU vs MUN",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "bou_10",
        "playerIds": [
            "mun_1",
            "bou_5",
            "bou_3",
            "bou_4",
            "mun_3",
            "bou_10",
            "mun_9",
            "mun_10",
            "bou_16",
            "bou_17",
            "mun_16"
        ],
        "benchIds": [
            "bou_1",
            "bou_11",
            "mun_11",
            "mun_11"
        ],
        "totalPrice": 97.5,
        "updatedAt": 1788254323908
    },
    "PL_GW35_LEE_ARS": {
        "fixtureId": "PL_GW35_LEE_ARS",
        "matchTitle": "LEE vs ARS",
        "formation": "4-3-3",
        "captainId": "ars_9",
        "viceCaptainId": "ars_4",
        "playerIds": [
            "lee_1",
            "lee_5",
            "lee_3",
            "ars_4",
            "ars_5",
            "ars_9",
            "ars_11",
            "ars_10",
            "lee_16",
            "lee_17",
            "ars_16"
        ],
        "benchIds": [
            "ars_1",
            "lee_10",
            "lee_10",
            "ars_3"
        ],
        "totalPrice": 94.2,
        "updatedAt": 1788254323910
    },
    "PL_GW35_MCI_LIV": {
        "fixtureId": "PL_GW35_MCI_LIV",
        "matchTitle": "MCI vs LIV",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "mci_6",
        "playerIds": [
            "mci_1",
            "mci_6",
            "mci_4",
            "mci_3",
            "mci_7",
            "liv_10",
            "liv_11",
            "liv_12",
            "liv_16",
            "liv_17",
            "liv_18"
        ],
        "benchIds": [
            "liv_1",
            "mci_11",
            "mci_11",
            "liv_9"
        ],
        "totalPrice": 99,
        "updatedAt": 1788254323912
    },
    "PL_GW35_TOT_CHE": {
        "fixtureId": "PL_GW35_TOT_CHE",
        "matchTitle": "TOT vs CHE",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_10",
        "playerIds": [
            "che_1",
            "tot_7",
            "tot_3",
            "che_3",
            "che_7",
            "che_9",
            "che_10",
            "che_12",
            "tot_15",
            "tot_16",
            "tot_17"
        ],
        "benchIds": [
            "tot_1",
            "tot_9",
            "che_15",
            "che_15"
        ],
        "totalPrice": 94,
        "updatedAt": 1788254323914
    },
    "LALIGA_MW35_FCB_RMA": {
        "fixtureId": "LALIGA_MW35_FCB_RMA",
        "matchTitle": "FCB vs RMA",
        "formation": "4-3-3",
        "captainId": "fcb_19",
        "viceCaptainId": "fcb_17",
        "playerIds": [
            "rma_1",
            "fcb_4",
            "fcb_5",
            "rma_3",
            "rma_6",
            "fcb_17",
            "fcb_18",
            "fcb_11",
            "fcb_19",
            "rma_20",
            "rma_19"
        ],
        "benchIds": [
            "fcb_2",
            "fcb_10",
            "rma_9",
            "rma_8"
        ],
        "totalPrice": 99.3,
        "updatedAt": 1788254323918
    },
    "PL_GW36_ARS_NFO": {
        "fixtureId": "PL_GW36_ARS_NFO",
        "matchTitle": "ARS vs NFO",
        "formation": "4-3-3",
        "captainId": "ars_9",
        "viceCaptainId": "ars_4",
        "playerIds": [
            "nfo_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "nfo_5",
            "ars_9",
            "ars_11",
            "nfo_9",
            "ars_16",
            "nfo_15",
            "nfo_16"
        ],
        "benchIds": [
            "ars_1",
            "ars_6",
            "nfo_11",
            "nfo_11"
        ],
        "totalPrice": 95,
        "updatedAt": 1788254323920
    },
    "PL_GW36_CHE_EVE": {
        "fixtureId": "PL_GW36_CHE_EVE",
        "matchTitle": "CHE vs EVE",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "che_15",
        "playerIds": [
            "che_1",
            "che_3",
            "eve_3",
            "eve_4",
            "eve_7",
            "che_9",
            "eve_9",
            "eve_10",
            "che_15",
            "che_16",
            "eve_17"
        ],
        "benchIds": [
            "eve_1",
            "che_10",
            "che_10",
            "eve_15"
        ],
        "totalPrice": 93.6,
        "updatedAt": 1788254323922
    },
    "PL_GW36_COV_TOT": {
        "fixtureId": "PL_GW36_COV_TOT",
        "matchTitle": "COV vs TOT",
        "formation": "4-3-3",
        "captainId": "tot_7",
        "viceCaptainId": "tot_9",
        "playerIds": [
            "cov_1",
            "tot_7",
            "tot_3",
            "tot_5",
            "tot_8",
            "cov_12",
            "cov_13",
            "tot_9",
            "cov_15",
            "cov_17",
            "cov_18"
        ],
        "benchIds": [
            "tot_1",
            "cov_4",
            "cov_4",
            "tot_12"
        ],
        "totalPrice": 73.8,
        "updatedAt": 1788254323924
    },
    "PL_GW36_IPS_MCI": {
        "fixtureId": "PL_GW36_IPS_MCI",
        "matchTitle": "IPS vs MCI",
        "formation": "4-3-3",
        "captainId": "mci_18",
        "viceCaptainId": "mci_6",
        "playerIds": [
            "mci_1",
            "ips_3",
            "mci_6",
            "mci_4",
            "mci_3",
            "ips_9",
            "ips_10",
            "ips_11",
            "ips_16",
            "ips_17",
            "mci_18"
        ],
        "benchIds": [
            "ips_1",
            "ips_13",
            "mci_11",
            "mci_11"
        ],
        "totalPrice": 95,
        "updatedAt": 1788254323925
    },
    "PL_GW36_LIV_BRE": {
        "fixtureId": "PL_GW36_LIV_BRE",
        "matchTitle": "LIV vs BRE",
        "formation": "4-3-3",
        "captainId": "bre_11",
        "viceCaptainId": "liv_10",
        "playerIds": [
            "liv_1",
            "liv_7",
            "bre_5",
            "bre_6",
            "bre_3",
            "liv_10",
            "liv_11",
            "bre_11",
            "liv_16",
            "bre_16",
            "bre_17"
        ],
        "benchIds": [
            "bre_1",
            "liv_12",
            "liv_12",
            "bre_12"
        ],
        "totalPrice": 90.7,
        "updatedAt": 1788254323927
    },
    "PL_GW36_MUN_LEE": {
        "fixtureId": "PL_GW36_MUN_LEE",
        "matchTitle": "MUN vs LEE",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "mun_10",
        "playerIds": [
            "lee_1",
            "mun_3",
            "lee_5",
            "lee_3",
            "lee_4",
            "mun_9",
            "mun_10",
            "mun_11",
            "mun_16",
            "lee_16",
            "lee_17"
        ],
        "benchIds": [
            "mun_1",
            "mun_13",
            "lee_10",
            "lee_10"
        ],
        "totalPrice": 94,
        "updatedAt": 1788254323928
    },
    "PL_GW37_BOU_CHE": {
        "fixtureId": "PL_GW37_BOU_CHE",
        "matchTitle": "BOU vs CHE",
        "formation": "4-3-3",
        "captainId": "che_9",
        "viceCaptainId": "bou_10",
        "playerIds": [
            "che_1",
            "bou_5",
            "bou_3",
            "che_3",
            "che_7",
            "bou_10",
            "che_9",
            "che_10",
            "bou_16",
            "bou_17",
            "bou_18"
        ],
        "benchIds": [
            "bou_1",
            "bou_11",
            "che_15",
            "che_15"
        ],
        "totalPrice": 91.8,
        "updatedAt": 1788254323931
    },
    "PL_GW37_BHA_LIV": {
        "fixtureId": "PL_GW37_BHA_LIV",
        "matchTitle": "BHA vs LIV",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "bha_5",
        "playerIds": [
            "bha_1",
            "bha_5",
            "bha_3",
            "liv_7",
            "liv_3",
            "bha_9",
            "liv_10",
            "liv_11",
            "bha_16",
            "bha_17",
            "liv_16"
        ],
        "benchIds": [
            "liv_1",
            "bha_10",
            "bha_10",
            "liv_12"
        ],
        "totalPrice": 88.7,
        "updatedAt": 1788254323932
    },
    "PL_GW37_EVE_ARS": {
        "fixtureId": "PL_GW37_EVE_ARS",
        "matchTitle": "EVE vs ARS",
        "formation": "4-3-3",
        "captainId": "ars_9",
        "viceCaptainId": "ars_4",
        "playerIds": [
            "eve_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "eve_9",
            "eve_10",
            "ars_9",
            "eve_17",
            "eve_18",
            "ars_16"
        ],
        "benchIds": [
            "ars_1",
            "eve_3",
            "eve_3",
            "ars_11"
        ],
        "totalPrice": 95.1,
        "updatedAt": 1788254323934
    },
    "PL_GW37_MCI_AVL": {
        "fixtureId": "PL_GW37_MCI_AVL",
        "matchTitle": "MCI vs AVL",
        "formation": "4-3-3",
        "captainId": "mci_18",
        "viceCaptainId": "mci_6",
        "playerIds": [
            "mci_1",
            "mci_6",
            "mci_4",
            "mci_3",
            "mci_7",
            "avl_9",
            "avl_12",
            "avl_13",
            "mci_18",
            "avl_16",
            "avl_17"
        ],
        "benchIds": [
            "avl_1",
            "mci_11",
            "mci_11",
            "avl_14"
        ],
        "totalPrice": 97.5,
        "updatedAt": 1788254323935
    },
    "PL_GW37_TOT_MUN": {
        "fixtureId": "PL_GW37_TOT_MUN",
        "matchTitle": "TOT vs MUN",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "mun_10",
        "playerIds": [
            "mun_1",
            "tot_7",
            "tot_3",
            "mun_3",
            "mun_4",
            "tot_9",
            "mun_9",
            "mun_10",
            "tot_15",
            "tot_16",
            "tot_17"
        ],
        "benchIds": [
            "tot_1",
            "tot_12",
            "mun_11",
            "mun_11"
        ],
        "totalPrice": 96.1,
        "updatedAt": 1788254323937
    },
    "PL_GW38_ARS_BHA": {
        "fixtureId": "PL_GW38_ARS_BHA",
        "matchTitle": "ARS vs BHA",
        "formation": "4-3-3",
        "captainId": "ars_4",
        "viceCaptainId": "ars_5",
        "playerIds": [
            "ars_1",
            "ars_4",
            "ars_5",
            "ars_3",
            "ars_6",
            "bha_9",
            "bha_10",
            "bha_12",
            "ars_16",
            "bha_16",
            "bha_17"
        ],
        "benchIds": [
            "bha_1",
            "ars_9",
            "ars_9",
            "bha_5"
        ],
        "totalPrice": 93.8,
        "updatedAt": 1788254323939
    },
    "PL_GW38_AVL_TOT": {
        "fixtureId": "PL_GW38_AVL_TOT",
        "matchTitle": "AVL vs TOT",
        "formation": "4-3-3",
        "captainId": "tot_7",
        "viceCaptainId": "avl_9",
        "playerIds": [
            "avl_1",
            "avl_3",
            "tot_7",
            "tot_3",
            "tot_5",
            "avl_9",
            "avl_12",
            "avl_13",
            "avl_16",
            "tot_15",
            "tot_16"
        ],
        "benchIds": [
            "tot_1",
            "avl_14",
            "avl_14",
            "tot_9"
        ],
        "totalPrice": 79.8,
        "updatedAt": 1788254323941
    },
    "PL_GW38_CHE_BRE": {
        "fixtureId": "PL_GW38_CHE_BRE",
        "matchTitle": "CHE vs BRE",
        "formation": "4-3-3",
        "captainId": "che_15",
        "viceCaptainId": "bre_11",
        "playerIds": [
            "che_1",
            "che_3",
            "bre_5",
            "bre_6",
            "bre_3",
            "bre_11",
            "bre_12",
            "bre_10",
            "che_15",
            "che_16",
            "che_17"
        ],
        "benchIds": [
            "bre_1",
            "che_9",
            "che_9",
            "bre_15"
        ],
        "totalPrice": 90.4,
        "updatedAt": 1788254323943
    },
    "PL_GW38_LIV_BOU": {
        "fixtureId": "PL_GW38_LIV_BOU",
        "matchTitle": "LIV vs BOU",
        "formation": "4-3-3",
        "captainId": "liv_10",
        "viceCaptainId": "bou_10",
        "playerIds": [
            "liv_1",
            "liv_7",
            "bou_5",
            "bou_3",
            "bou_4",
            "liv_10",
            "liv_11",
            "bou_10",
            "liv_16",
            "bou_16",
            "bou_17"
        ],
        "benchIds": [
            "bou_1",
            "liv_12",
            "liv_12",
            "bou_11"
        ],
        "totalPrice": 91,
        "updatedAt": 1788254323944
    },
    "PL_GW38_MUN_FUL": {
        "fixtureId": "PL_GW38_MUN_FUL",
        "matchTitle": "MUN vs FUL",
        "formation": "4-3-3",
        "captainId": "mun_9",
        "viceCaptainId": "mun_10",
        "playerIds": [
            "mun_1",
            "mun_3",
            "mun_4",
            "ful_4",
            "ful_5",
            "mun_9",
            "mun_10",
            "ful_9",
            "mun_16",
            "ful_16",
            "ful_17"
        ],
        "benchIds": [
            "ful_1",
            "mun_11",
            "mun_11",
            "ful_10"
        ],
        "totalPrice": 94,
        "updatedAt": 1788254323947
    },
    "PL_GW38_SUN_MCI": {
        "fixtureId": "PL_GW38_SUN_MCI",
        "matchTitle": "SUN vs MCI",
        "formation": "4-3-3",
        "captainId": "mci_11",
        "viceCaptainId": "mci_18",
        "playerIds": [
            "sun_1",
            "sun_3",
            "sun_4",
            "sun_6",
            "mci_6",
            "mci_11",
            "mci_12",
            "mci_10",
            "sun_18",
            "sun_17",
            "mci_18"
        ],
        "benchIds": [
            "mci_1",
            "sun_10",
            "sun_10",
            "mci_4"
        ],
        "totalPrice": 98.3,
        "updatedAt": 1788254323947
    }
};

// Helper Functions
function getGitRoom(roomCode) {
    if (typeof SAVED_ROOMS_DATA !== 'undefined' && SAVED_ROOMS_DATA[roomCode]) {
        return JSON.parse(JSON.stringify(SAVED_ROOMS_DATA[roomCode]));
    }
    return null;
}

function getAllGitRooms() {
    if (typeof SAVED_ROOMS_DATA !== 'undefined') {
        return Object.values(SAVED_ROOMS_DATA).map(r => JSON.parse(JSON.stringify(r)));
    }
    return [];
}

function setGitRoom(room) {
    if (typeof SAVED_ROOMS_DATA !== 'undefined' && room && room.code) {
        SAVED_ROOMS_DATA[room.code] = JSON.parse(JSON.stringify(room));
    }
}

function getGitUserSquad(userId, fixtureId) {
    if (typeof SAVED_USER_SQUADS_DATA !== 'undefined' && SAVED_USER_SQUADS_DATA[userId] && SAVED_USER_SQUADS_DATA[userId][fixtureId]) {
        return JSON.parse(JSON.stringify(SAVED_USER_SQUADS_DATA[userId][fixtureId]));
    }
    return getGitSavedSquad(fixtureId);
}

function setGitUserSquad(userId, fixtureId, squadData) {
    if (!fixtureId || !squadData) return;
    const cleanSquad = JSON.parse(JSON.stringify(squadData));
    if (typeof SAVED_USER_SQUADS_DATA !== 'undefined') {
        if (!SAVED_USER_SQUADS_DATA[userId]) SAVED_USER_SQUADS_DATA[userId] = {};
        SAVED_USER_SQUADS_DATA[userId][fixtureId] = cleanSquad;
    }
    if (typeof SAVED_SQUADS_DATA !== 'undefined') {
        SAVED_SQUADS_DATA[fixtureId] = cleanSquad;
    }
}

function getGitSavedSquad(fixtureId) {
    if (typeof SAVED_SQUADS_DATA !== 'undefined' && SAVED_SQUADS_DATA[fixtureId]) {
        return JSON.parse(JSON.stringify(SAVED_SQUADS_DATA[fixtureId]));
    }
    return null;
}

function updateGitDatabase(newRooms, newUserSquads, newSquads) {
    if (newRooms && typeof SAVED_ROOMS_DATA !== 'undefined') {
        for (const code in newRooms) SAVED_ROOMS_DATA[code] = newRooms[code];
    }
    if (newUserSquads && typeof SAVED_USER_SQUADS_DATA !== 'undefined') {
        for (const u in newUserSquads) SAVED_USER_SQUADS_DATA[u] = newUserSquads[u];
    }
    if (newSquads && typeof SAVED_SQUADS_DATA !== 'undefined') {
        for (const f in newSquads) SAVED_SQUADS_DATA[f] = newSquads[f];
    }
}
