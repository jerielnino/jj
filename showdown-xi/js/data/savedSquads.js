/**
 * Showdown XI - Permanent Git-Backed Rooms & Squads Database
 * This file is tracked in Git to provide permanent multiplayer rooms, user profiles, and squad rosters across all devices.
 */

// 1. Permanent Default Rooms (Separated by Room Code and Fixture)
const SAVED_ROOMS_DATA = {
    "ARS-COV-LEAGUE": {
        "code": "ARS-COV-LEAGUE",
        "name": "ARS vs COV Official Showdown Room",
        "fixtureId": "PL_GW1_ARS_COV",
        "createdAt": 1788254323489,
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
                        "updatedAt": 1788254323489
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323489
            }
        ]
    },
    "HUL-MUN-LEAGUE": {
        "code": "HUL-MUN-LEAGUE",
        "name": "HUL vs MUN Official Showdown Room",
        "fixtureId": "PL_GW1_HUL_MUN",
        "createdAt": 1788254323491,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323491
            }
        ]
    },
    "BRE-TOT-LEAGUE": {
        "code": "BRE-TOT-LEAGUE",
        "name": "BRE vs TOT Official Showdown Room",
        "fixtureId": "PL_GW1_BRE_TOT",
        "createdAt": 1788254323495,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323495
            }
        ]
    },
    "MCI-BOU-LEAGUE": {
        "code": "MCI-BOU-LEAGUE",
        "name": "MCI vs BOU Official Showdown Room",
        "fixtureId": "PL_GW1_MCI_BOU",
        "createdAt": 1788254323497,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323497
            }
        ]
    },
    "NEW-LIV-LEAGUE": {
        "code": "NEW-LIV-LEAGUE",
        "name": "NEW vs LIV Official Showdown Room",
        "fixtureId": "PL_GW1_NEW_LIV",
        "createdAt": 1788254323499,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323499
            }
        ]
    },
    "FCB-ATH-LEAGUE": {
        "code": "FCB-ATH-LEAGUE",
        "name": "FCB vs ATH Official Showdown Room",
        "fixtureId": "LALIGA_MW1_FCB_ATH",
        "createdAt": 1788254323506,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323506
            }
        ]
    },
    "FUL-CHE-LEAGUE": {
        "code": "FUL-CHE-LEAGUE",
        "name": "FUL vs CHE Official Showdown Room",
        "fixtureId": "PL_GW1_FUL_CHE",
        "createdAt": 1788254323509,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323509
            }
        ]
    },
    "SEV-ATM-LEAGUE": {
        "code": "SEV-ATM-LEAGUE",
        "name": "SEV vs ATM Official Showdown Room",
        "fixtureId": "LALIGA_MW1_SEV_ATM",
        "createdAt": 1788254323513,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323513
            }
        ]
    },
    "CRY-MCI-LEAGUE": {
        "code": "CRY-MCI-LEAGUE",
        "name": "CRY vs MCI Official Showdown Room",
        "fixtureId": "PL_GW2_CRY_MCI",
        "createdAt": 1788254323515,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323515
            }
        ]
    },
    "RMA-ATH-LEAGUE": {
        "code": "RMA-ATH-LEAGUE",
        "name": "RMA vs ATH Official Showdown Room",
        "fixtureId": "LALIGA_MW2_RMA_ATH",
        "createdAt": 1788254323521,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323521
            }
        ]
    },
    "LIV-NFO-LEAGUE": {
        "code": "LIV-NFO-LEAGUE",
        "name": "LIV vs NFO Official Showdown Room",
        "fixtureId": "PL_GW2_LIV_NFO",
        "createdAt": 1788254323523,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323523
            }
        ]
    },
    "TOT-NEW-LEAGUE": {
        "code": "TOT-NEW-LEAGUE",
        "name": "TOT vs NEW Official Showdown Room",
        "fixtureId": "PL_GW2_TOT_NEW",
        "createdAt": 1788254323525,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323525
            }
        ]
    },
    "CHE-BHA-LEAGUE": {
        "code": "CHE-BHA-LEAGUE",
        "name": "CHE vs BHA Official Showdown Room",
        "fixtureId": "PL_GW2_CHE_BHA",
        "createdAt": 1788254323527,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323527
            }
        ]
    },
    "MUN-IPS-LEAGUE": {
        "code": "MUN-IPS-LEAGUE",
        "name": "MUN vs IPS Official Showdown Room",
        "fixtureId": "PL_GW2_MUN_IPS",
        "createdAt": 1788254323530,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323530
            }
        ]
    },
    "AVL-ARS-LEAGUE": {
        "code": "AVL-ARS-LEAGUE",
        "name": "AVL vs ARS Official Showdown Room",
        "fixtureId": "PL_GW2_AVL_ARS",
        "createdAt": 1788254323532,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
                    "PL_GW2_AVL_ARS": {
                        "fixtureId": "PL_GW2_AVL_ARS",
                        "matchTitle": "AVL vs ARS",
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
                        "totalPrice": 94.6,
                        "updatedAt": 1788254323532
                    }
                },
                "squad": {
                    "fixtureId": "PL_GW2_AVL_ARS",
                    "matchTitle": "AVL vs ARS",
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
                    "totalPrice": 94.6,
                    "updatedAt": 1788254323532
                },
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323532
            }
        ]
    },
    "RMA-SEV-LEAGUE": {
        "code": "RMA-SEV-LEAGUE",
        "name": "RMA vs SEV Official Showdown Room",
        "fixtureId": "LALIGA_MW4_RMA_SEV",
        "createdAt": 1788254323535,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
                    "LALIGA_MW4_RMA_SEV": {
                        "fixtureId": "LALIGA_MW4_RMA_SEV",
                        "matchTitle": "RMA vs SEV",
                        "formation": "4-3-3",
                        "captainId": "rma_17",
                        "viceCaptainId": "rma_16",
                        "playerIds": [
                            "sev_1",
                            "rma_3",
                            "sev_3",
                            "sev_8",
                            "sev_6",
                            "rma_10",
                            "rma_11",
                            "sev_10",
                            "rma_17",
                            "rma_16",
                            "sev_15"
                        ],
                        "benchIds": [
                            "rma_1",
                            "rma_9",
                            "sev_7",
                            "sev_16"
                        ],
                        "totalPrice": 100,
                        "updatedAt": 1788254323535
                    }
                },
                "squad": {
                    "fixtureId": "LALIGA_MW4_RMA_SEV",
                    "matchTitle": "RMA vs SEV",
                    "formation": "4-3-3",
                    "captainId": "rma_17",
                    "viceCaptainId": "rma_16",
                    "playerIds": [
                        "sev_1",
                        "rma_3",
                        "sev_3",
                        "sev_8",
                        "sev_6",
                        "rma_10",
                        "rma_11",
                        "sev_10",
                        "rma_17",
                        "rma_16",
                        "sev_15"
                    ],
                    "benchIds": [
                        "rma_1",
                        "rma_9",
                        "sev_7",
                        "sev_16"
                    ],
                    "totalPrice": 100,
                    "updatedAt": 1788254323535
                },
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323535
            }
        ]
    },
    "IPS-LIV-LEAGUE": {
        "code": "IPS-LIV-LEAGUE",
        "name": "IPS vs LIV Official Showdown Room",
        "fixtureId": "PL_GW3_IPS_LIV",
        "createdAt": 1788254323537,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323537
            }
        ]
    },
    "MCI-COV-LEAGUE": {
        "code": "MCI-COV-LEAGUE",
        "name": "MCI vs COV Official Showdown Room",
        "fixtureId": "PL_GW3_MCI_COV",
        "createdAt": 1788254323538,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323538
            }
        ]
    },
    "NFO-TOT-LEAGUE": {
        "code": "NFO-TOT-LEAGUE",
        "name": "NFO vs TOT Official Showdown Room",
        "fixtureId": "PL_GW3_NFO_TOT",
        "createdAt": 1788254323542,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323542
            }
        ]
    },
    "EVE-MUN-LEAGUE": {
        "code": "EVE-MUN-LEAGUE",
        "name": "EVE vs MUN Official Showdown Room",
        "fixtureId": "PL_GW3_EVE_MUN",
        "createdAt": 1788254323546,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323546
            }
        ]
    },
    "ARS-CHE-LEAGUE": {
        "code": "ARS-CHE-LEAGUE",
        "name": "ARS vs CHE Official Showdown Room",
        "fixtureId": "PL_GW3_ARS_CHE",
        "createdAt": 1788254323550,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323550
            }
        ]
    },
    "CHE-HUL-LEAGUE": {
        "code": "CHE-HUL-LEAGUE",
        "name": "CHE vs HUL Official Showdown Room",
        "fixtureId": "PL_GW4_CHE_HUL",
        "createdAt": 1788254323552,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323552
            }
        ]
    },
    "LIV-FUL-LEAGUE": {
        "code": "LIV-FUL-LEAGUE",
        "name": "LIV vs FUL Official Showdown Room",
        "fixtureId": "PL_GW4_LIV_FUL",
        "createdAt": 1788254323555,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323555
            }
        ]
    },
    "TOT-EVE-LEAGUE": {
        "code": "TOT-EVE-LEAGUE",
        "name": "TOT vs EVE Official Showdown Room",
        "fixtureId": "PL_GW4_TOT_EVE",
        "createdAt": 1788254323558,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323558
            }
        ]
    },
    "SUN-ARS-LEAGUE": {
        "code": "SUN-ARS-LEAGUE",
        "name": "SUN vs ARS Official Showdown Room",
        "fixtureId": "PL_GW4_SUN_ARS",
        "createdAt": 1788254323560,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323560
            }
        ]
    },
    "MUN-MCI-LEAGUE": {
        "code": "MUN-MCI-LEAGUE",
        "name": "MUN vs MCI Official Showdown Room",
        "fixtureId": "PL_GW4_MUN_MCI",
        "createdAt": 1788254323564,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323564
            }
        ]
    },
    "FCB-SEV-LEAGUE": {
        "code": "FCB-SEV-LEAGUE",
        "name": "FCB vs SEV Official Showdown Room",
        "fixtureId": "LALIGA_MW5_FCB_SEV",
        "createdAt": 1788254323569,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323569
            }
        ]
    },
    "ATH-ATM-LEAGUE": {
        "code": "ATH-ATM-LEAGUE",
        "name": "ATH vs ATM Official Showdown Room",
        "fixtureId": "LALIGA_MW5_ATH_ATM",
        "createdAt": 1788254323573,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323573
            }
        ]
    },
    "BRE-CHE-LEAGUE": {
        "code": "BRE-CHE-LEAGUE",
        "name": "BRE vs CHE Official Showdown Room",
        "fixtureId": "PL_GW5_BRE_CHE",
        "createdAt": 1788254323575,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323575
            }
        ]
    },
    "TOT-AVL-LEAGUE": {
        "code": "TOT-AVL-LEAGUE",
        "name": "TOT vs AVL Official Showdown Room",
        "fixtureId": "PL_GW5_TOT_AVL",
        "createdAt": 1788254323578,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323578
            }
        ]
    },
    "BHA-ARS-LEAGUE": {
        "code": "BHA-ARS-LEAGUE",
        "name": "BHA vs ARS Official Showdown Room",
        "fixtureId": "PL_GW5_BHA_ARS",
        "createdAt": 1788254323581,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323581
            }
        ]
    },
    "BOU-LIV-LEAGUE": {
        "code": "BOU-LIV-LEAGUE",
        "name": "BOU vs LIV Official Showdown Room",
        "fixtureId": "PL_GW5_BOU_LIV",
        "createdAt": 1788254323583,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323583
            }
        ]
    },
    "MCI-SUN-LEAGUE": {
        "code": "MCI-SUN-LEAGUE",
        "name": "MCI vs SUN Official Showdown Room",
        "fixtureId": "PL_GW5_MCI_SUN",
        "createdAt": 1788254323584,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323584
            }
        ]
    },
    "FUL-MUN-LEAGUE": {
        "code": "FUL-MUN-LEAGUE",
        "name": "FUL vs MUN Official Showdown Room",
        "fixtureId": "PL_GW5_FUL_MUN",
        "createdAt": 1788254323587,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323587
            }
        ]
    },
    "ATM-RMA-LEAGUE": {
        "code": "ATM-RMA-LEAGUE",
        "name": "ATM vs RMA Official Showdown Room",
        "fixtureId": "LALIGA_MW8_ATM_RMA",
        "createdAt": 1788254323592,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323592
            }
        ]
    },
    "ATH-SEV-LEAGUE": {
        "code": "ATH-SEV-LEAGUE",
        "name": "ATH vs SEV Official Showdown Room",
        "fixtureId": "LALIGA_MW8_ATH_SEV",
        "createdAt": 1788254323595,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323595
            }
        ]
    },
    "ARS-LEE-LEAGUE": {
        "code": "ARS-LEE-LEAGUE",
        "name": "ARS vs LEE Official Showdown Room",
        "fixtureId": "PL_GW6_ARS_LEE",
        "createdAt": 1788254323598,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323598
            }
        ]
    },
    "CHE-BOU-LEAGUE": {
        "code": "CHE-BOU-LEAGUE",
        "name": "CHE vs BOU Official Showdown Room",
        "fixtureId": "PL_GW6_CHE_BOU",
        "createdAt": 1788254323600,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323600
            }
        ]
    },
    "MUN-TOT-LEAGUE": {
        "code": "MUN-TOT-LEAGUE",
        "name": "MUN vs TOT Official Showdown Room",
        "fixtureId": "PL_GW6_MUN_TOT",
        "createdAt": 1788254323604,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323604
            }
        ]
    },
    "LIV-MCI-LEAGUE": {
        "code": "LIV-MCI-LEAGUE",
        "name": "LIV vs MCI Official Showdown Room",
        "fixtureId": "PL_GW6_LIV_MCI",
        "createdAt": 1788254323607,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323607
            }
        ]
    },
    "EVE-CHE-LEAGUE": {
        "code": "EVE-CHE-LEAGUE",
        "name": "EVE vs CHE Official Showdown Room",
        "fixtureId": "PL_GW7_EVE_CHE",
        "createdAt": 1788254323609,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323609
            }
        ]
    },
    "BRE-LIV-LEAGUE": {
        "code": "BRE-LIV-LEAGUE",
        "name": "BRE vs LIV Official Showdown Room",
        "fixtureId": "PL_GW7_BRE_LIV",
        "createdAt": 1788254323610,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323610
            }
        ]
    },
    "MCI-IPS-LEAGUE": {
        "code": "MCI-IPS-LEAGUE",
        "name": "MCI vs IPS Official Showdown Room",
        "fixtureId": "PL_GW7_MCI_IPS",
        "createdAt": 1788254323612,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323612
            }
        ]
    },
    "LEE-MUN-LEAGUE": {
        "code": "LEE-MUN-LEAGUE",
        "name": "LEE vs MUN Official Showdown Room",
        "fixtureId": "PL_GW7_LEE_MUN",
        "createdAt": 1788254323614,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323614
            }
        ]
    },
    "NFO-ARS-LEAGUE": {
        "code": "NFO-ARS-LEAGUE",
        "name": "NFO vs ARS Official Showdown Room",
        "fixtureId": "PL_GW7_NFO_ARS",
        "createdAt": 1788254323617,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323617
            }
        ]
    },
    "SEV-FCB-LEAGUE": {
        "code": "SEV-FCB-LEAGUE",
        "name": "SEV vs FCB Official Showdown Room",
        "fixtureId": "LALIGA_MW10_SEV_FCB",
        "createdAt": 1788254323621,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323621
            }
        ]
    },
    "TOT-COV-LEAGUE": {
        "code": "TOT-COV-LEAGUE",
        "name": "TOT vs COV Official Showdown Room",
        "fixtureId": "PL_GW7_TOT_COV",
        "createdAt": 1788254323623,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323623
            }
        ]
    },
    "AVL-MCI-LEAGUE": {
        "code": "AVL-MCI-LEAGUE",
        "name": "AVL vs MCI Official Showdown Room",
        "fixtureId": "PL_GW8_AVL_MCI",
        "createdAt": 1788254323625,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323625
            }
        ]
    },
    "ARS-EVE-LEAGUE": {
        "code": "ARS-EVE-LEAGUE",
        "name": "ARS vs EVE Official Showdown Room",
        "fixtureId": "PL_GW8_ARS_EVE",
        "createdAt": 1788254323627,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323627
            }
        ]
    },
    "LIV-BHA-LEAGUE": {
        "code": "LIV-BHA-LEAGUE",
        "name": "LIV vs BHA Official Showdown Room",
        "fixtureId": "PL_GW8_LIV_BHA",
        "createdAt": 1788254323628,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323628
            }
        ]
    },
    "CHE-TOT-LEAGUE": {
        "code": "CHE-TOT-LEAGUE",
        "name": "CHE vs TOT Official Showdown Room",
        "fixtureId": "PL_GW8_CHE_TOT",
        "createdAt": 1788254323632,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323632
            }
        ]
    },
    "MUN-BOU-LEAGUE": {
        "code": "MUN-BOU-LEAGUE",
        "name": "MUN vs BOU Official Showdown Room",
        "fixtureId": "PL_GW8_MUN_BOU",
        "createdAt": 1788254323635,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323635
            }
        ]
    },
    "RMA-FCB-LEAGUE": {
        "code": "RMA-FCB-LEAGUE",
        "name": "RMA vs FCB Official Showdown Room",
        "fixtureId": "LALIGA_MW11_RMA_FCB",
        "createdAt": 1788254323638,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323638
            }
        ]
    },
    "CHE-MUN-LEAGUE": {
        "code": "CHE-MUN-LEAGUE",
        "name": "CHE vs MUN Official Showdown Room",
        "fixtureId": "PL_GW9_CHE_MUN",
        "createdAt": 1788254323641,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323641
            }
        ]
    },
    "MCI-BHA-LEAGUE": {
        "code": "MCI-BHA-LEAGUE",
        "name": "MCI vs BHA Official Showdown Room",
        "fixtureId": "PL_GW9_MCI_BHA",
        "createdAt": 1788254323642,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323642
            }
        ]
    },
    "TOT-CRY-LEAGUE": {
        "code": "TOT-CRY-LEAGUE",
        "name": "TOT vs CRY Official Showdown Room",
        "fixtureId": "PL_GW9_TOT_CRY",
        "createdAt": 1788254323643,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323643
            }
        ]
    },
    "LIV-ARS-LEAGUE": {
        "code": "LIV-ARS-LEAGUE",
        "name": "LIV vs ARS Official Showdown Room",
        "fixtureId": "PL_GW9_LIV_ARS",
        "createdAt": 1788254323644,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323644
            }
        ]
    },
    "ARS-HUL-LEAGUE": {
        "code": "ARS-HUL-LEAGUE",
        "name": "ARS vs HUL Official Showdown Room",
        "fixtureId": "PL_GW10_ARS_HUL",
        "createdAt": 1788254323645,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323645
            }
        ]
    },
    "CRY-LIV-LEAGUE": {
        "code": "CRY-LIV-LEAGUE",
        "name": "CRY vs LIV Official Showdown Room",
        "fixtureId": "PL_GW10_CRY_LIV",
        "createdAt": 1788254323646,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323646
            }
        ]
    },
    "LEE-TOT-LEAGUE": {
        "code": "LEE-TOT-LEAGUE",
        "name": "LEE vs TOT Official Showdown Room",
        "fixtureId": "PL_GW10_LEE_TOT",
        "createdAt": 1788254323647,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323647
            }
        ]
    },
    "MUN-AVL-LEAGUE": {
        "code": "MUN-AVL-LEAGUE",
        "name": "MUN vs AVL Official Showdown Room",
        "fixtureId": "PL_GW10_MUN_AVL",
        "createdAt": 1788254323649,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323649
            }
        ]
    },
    "NFO-MCI-LEAGUE": {
        "code": "NFO-MCI-LEAGUE",
        "name": "NFO vs MCI Official Showdown Room",
        "fixtureId": "PL_GW10_NFO_MCI",
        "createdAt": 1788254323650,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323650
            }
        ]
    },
    "SUN-CHE-LEAGUE": {
        "code": "SUN-CHE-LEAGUE",
        "name": "SUN vs CHE Official Showdown Room",
        "fixtureId": "PL_GW10_SUN_CHE",
        "createdAt": 1788254323652,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323652
            }
        ]
    },
    "ATM-SEV-LEAGUE": {
        "code": "ATM-SEV-LEAGUE",
        "name": "ATM vs SEV Official Showdown Room",
        "fixtureId": "LALIGA_MW13_ATM_SEV",
        "createdAt": 1788254323654,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323654
            }
        ]
    },
    "ATH-FCB-LEAGUE": {
        "code": "ATH-FCB-LEAGUE",
        "name": "ATH vs FCB Official Showdown Room",
        "fixtureId": "LALIGA_MW13_ATH_FCB",
        "createdAt": 1788254323657,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323657
            }
        ]
    },
    "CHE-LEE-LEAGUE": {
        "code": "CHE-LEE-LEAGUE",
        "name": "CHE vs LEE Official Showdown Room",
        "fixtureId": "PL_GW11_CHE_LEE",
        "createdAt": 1788254323658,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323658
            }
        ]
    },
    "LIV-MUN-LEAGUE": {
        "code": "LIV-MUN-LEAGUE",
        "name": "LIV vs MUN Official Showdown Room",
        "fixtureId": "PL_GW11_LIV_MUN",
        "createdAt": 1788254323659,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323659
            }
        ]
    },
    "MCI-FUL-LEAGUE": {
        "code": "MCI-FUL-LEAGUE",
        "name": "MCI vs FUL Official Showdown Room",
        "fixtureId": "PL_GW11_MCI_FUL",
        "createdAt": 1788254323660,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323660
            }
        ]
    },
    "NEW-ARS-LEAGUE": {
        "code": "NEW-ARS-LEAGUE",
        "name": "NEW vs ARS Official Showdown Room",
        "fixtureId": "PL_GW11_NEW_ARS",
        "createdAt": 1788254323662,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323662
            }
        ]
    },
    "TOT-IPS-LEAGUE": {
        "code": "TOT-IPS-LEAGUE",
        "name": "TOT vs IPS Official Showdown Room",
        "fixtureId": "PL_GW11_TOT_IPS",
        "createdAt": 1788254323664,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323664
            }
        ]
    },
    "ARS-MCI-LEAGUE": {
        "code": "ARS-MCI-LEAGUE",
        "name": "ARS vs MCI Official Showdown Room",
        "fixtureId": "PL_GW12_ARS_MCI",
        "createdAt": 1788254323665,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323665
            }
        ]
    },
    "EVE-LIV-LEAGUE": {
        "code": "EVE-LIV-LEAGUE",
        "name": "EVE vs LIV Official Showdown Room",
        "fixtureId": "PL_GW12_EVE_LIV",
        "createdAt": 1788254323666,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323666
            }
        ]
    },
    "MUN-BRE-LEAGUE": {
        "code": "MUN-BRE-LEAGUE",
        "name": "MUN vs BRE Official Showdown Room",
        "fixtureId": "PL_GW12_MUN_BRE",
        "createdAt": 1788254323668,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323668
            }
        ]
    },
    "NFO-CHE-LEAGUE": {
        "code": "NFO-CHE-LEAGUE",
        "name": "NFO vs CHE Official Showdown Room",
        "fixtureId": "PL_GW12_NFO_CHE",
        "createdAt": 1788254323670,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323670
            }
        ]
    },
    "SUN-TOT-LEAGUE": {
        "code": "SUN-TOT-LEAGUE",
        "name": "SUN vs TOT Official Showdown Room",
        "fixtureId": "PL_GW12_SUN_TOT",
        "createdAt": 1788254323671,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323671
            }
        ]
    },
    "BRE-ARS-LEAGUE": {
        "code": "BRE-ARS-LEAGUE",
        "name": "BRE vs ARS Official Showdown Room",
        "fixtureId": "PL_GW13_BRE_ARS",
        "createdAt": 1788254323673,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323673
            }
        ]
    },
    "CHE-CRY-LEAGUE": {
        "code": "CHE-CRY-LEAGUE",
        "name": "CHE vs CRY Official Showdown Room",
        "fixtureId": "PL_GW13_CHE_CRY",
        "createdAt": 1788254323674,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323674
            }
        ]
    },
    "LIV-SUN-LEAGUE": {
        "code": "LIV-SUN-LEAGUE",
        "name": "LIV vs SUN Official Showdown Room",
        "fixtureId": "PL_GW13_LIV_SUN",
        "createdAt": 1788254323675,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323675
            }
        ]
    },
    "MCI-LEE-LEAGUE": {
        "code": "MCI-LEE-LEAGUE",
        "name": "MCI vs LEE Official Showdown Room",
        "fixtureId": "PL_GW13_MCI_LEE",
        "createdAt": 1788254323676,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323676
            }
        ]
    },
    "NEW-MUN-LEAGUE": {
        "code": "NEW-MUN-LEAGUE",
        "name": "NEW vs MUN Official Showdown Room",
        "fixtureId": "PL_GW13_NEW_MUN",
        "createdAt": 1788254323678,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323678
            }
        ]
    },
    "TOT-FUL-LEAGUE": {
        "code": "TOT-FUL-LEAGUE",
        "name": "TOT vs FUL Official Showdown Room",
        "fixtureId": "PL_GW13_TOT_FUL",
        "createdAt": 1788254323680,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323680
            }
        ]
    },
    "ATH-RMA-LEAGUE": {
        "code": "ATH-RMA-LEAGUE",
        "name": "ATH vs RMA Official Showdown Room",
        "fixtureId": "LALIGA_MW15_ATH_RMA",
        "createdAt": 1788254323683,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323683
            }
        ]
    },
    "BRE-MCI-LEAGUE": {
        "code": "BRE-MCI-LEAGUE",
        "name": "BRE vs MCI Official Showdown Room",
        "fixtureId": "PL_GW14_BRE_MCI",
        "createdAt": 1788254323684,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323684
            }
        ]
    },
    "CHE-LIV-LEAGUE": {
        "code": "CHE-LIV-LEAGUE",
        "name": "CHE vs LIV Official Showdown Room",
        "fixtureId": "PL_GW14_CHE_LIV",
        "createdAt": 1788254323685,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323685
            }
        ]
    },
    "MUN-COV-LEAGUE": {
        "code": "MUN-COV-LEAGUE",
        "name": "MUN vs COV Official Showdown Room",
        "fixtureId": "PL_GW14_MUN_COV",
        "createdAt": 1788254323688,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323688
            }
        ]
    },
    "TOT-ARS-LEAGUE": {
        "code": "TOT-ARS-LEAGUE",
        "name": "TOT vs ARS Official Showdown Room",
        "fixtureId": "PL_GW14_TOT_ARS",
        "createdAt": 1788254323690,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323690
            }
        ]
    },
    "ATM-ATH-LEAGUE": {
        "code": "ATM-ATH-LEAGUE",
        "name": "ATM vs ATH Official Showdown Room",
        "fixtureId": "LALIGA_MW16_ATM_ATH",
        "createdAt": 1788254323693,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323693
            }
        ]
    },
    "ARS-BOU-LEAGUE": {
        "code": "ARS-BOU-LEAGUE",
        "name": "ARS vs BOU Official Showdown Room",
        "fixtureId": "PL_GW15_ARS_BOU",
        "createdAt": 1788254323694,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323694
            }
        ]
    },
    "CRY-MUN-LEAGUE": {
        "code": "CRY-MUN-LEAGUE",
        "name": "CRY vs MUN Official Showdown Room",
        "fixtureId": "PL_GW15_CRY_MUN",
        "createdAt": 1788254323696,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323696
            }
        ]
    },
    "HUL-TOT-LEAGUE": {
        "code": "HUL-TOT-LEAGUE",
        "name": "HUL vs TOT Official Showdown Room",
        "fixtureId": "PL_GW15_HUL_TOT",
        "createdAt": 1788254323697,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323697
            }
        ]
    },
    "LIV-LEE-LEAGUE": {
        "code": "LIV-LEE-LEAGUE",
        "name": "LIV vs LEE Official Showdown Room",
        "fixtureId": "PL_GW15_LIV_LEE",
        "createdAt": 1788254323698,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323698
            }
        ]
    },
    "MCI-CHE-LEAGUE": {
        "code": "MCI-CHE-LEAGUE",
        "name": "MCI vs CHE Official Showdown Room",
        "fixtureId": "PL_GW15_MCI_CHE",
        "createdAt": 1788254323700,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323700
            }
        ]
    },
    "ARS-MUN-LEAGUE": {
        "code": "ARS-MUN-LEAGUE",
        "name": "ARS vs MUN Official Showdown Room",
        "fixtureId": "PL_GW16_ARS_MUN",
        "createdAt": 1788254323702,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323703
            }
        ]
    },
    "CHE-AVL-LEAGUE": {
        "code": "CHE-AVL-LEAGUE",
        "name": "CHE vs AVL Official Showdown Room",
        "fixtureId": "PL_GW16_CHE_AVL",
        "createdAt": 1788254323705,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323705
            }
        ]
    },
    "LIV-TOT-LEAGUE": {
        "code": "LIV-TOT-LEAGUE",
        "name": "LIV vs TOT Official Showdown Room",
        "fixtureId": "PL_GW16_LIV_TOT",
        "createdAt": 1788254323706,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323706
            }
        ]
    },
    "MCI-HUL-LEAGUE": {
        "code": "MCI-HUL-LEAGUE",
        "name": "MCI vs HUL Official Showdown Room",
        "fixtureId": "PL_GW16_MCI_HUL",
        "createdAt": 1788254323709,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323709
            }
        ]
    },
    "FCB-ATM-LEAGUE": {
        "code": "FCB-ATM-LEAGUE",
        "name": "FCB vs ATM Official Showdown Room",
        "fixtureId": "LALIGA_MW18_FCB_ATM",
        "createdAt": 1788254323713,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323713
            }
        ]
    },
    "SEV-ATH-LEAGUE": {
        "code": "SEV-ATH-LEAGUE",
        "name": "SEV vs ATH Official Showdown Room",
        "fixtureId": "LALIGA_MW18_SEV_ATH",
        "createdAt": 1788254323716,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323716
            }
        ]
    },
    "COV-CHE-LEAGUE": {
        "code": "COV-CHE-LEAGUE",
        "name": "COV vs CHE Official Showdown Room",
        "fixtureId": "PL_GW17_COV_CHE",
        "createdAt": 1788254323719,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323719
            }
        ]
    },
    "CRY-ARS-LEAGUE": {
        "code": "CRY-ARS-LEAGUE",
        "name": "CRY vs ARS Official Showdown Room",
        "fixtureId": "PL_GW17_CRY_ARS",
        "createdAt": 1788254323721,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323721
            }
        ]
    },
    "HUL-LIV-LEAGUE": {
        "code": "HUL-LIV-LEAGUE",
        "name": "HUL vs LIV Official Showdown Room",
        "fixtureId": "PL_GW17_HUL_LIV",
        "createdAt": 1788254323723,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323723
            }
        ]
    },
    "MUN-NFO-LEAGUE": {
        "code": "MUN-NFO-LEAGUE",
        "name": "MUN vs NFO Official Showdown Room",
        "fixtureId": "PL_GW17_MUN_NFO",
        "createdAt": 1788254323726,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323726
            }
        ]
    },
    "NEW-MCI-LEAGUE": {
        "code": "NEW-MCI-LEAGUE",
        "name": "NEW vs MCI Official Showdown Room",
        "fixtureId": "PL_GW17_NEW_MCI",
        "createdAt": 1788254323728,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323728
            }
        ]
    },
    "TOT-BOU-LEAGUE": {
        "code": "TOT-BOU-LEAGUE",
        "name": "TOT vs BOU Official Showdown Room",
        "fixtureId": "PL_GW17_TOT_BOU",
        "createdAt": 1788254323731,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323731
            }
        ]
    },
    "AVL-LIV-LEAGUE": {
        "code": "AVL-LIV-LEAGUE",
        "name": "AVL vs LIV Official Showdown Room",
        "fixtureId": "PL_GW18_AVL_LIV",
        "createdAt": 1788254323733,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323733
            }
        ]
    },
    "EVE-MCI-LEAGUE": {
        "code": "EVE-MCI-LEAGUE",
        "name": "EVE vs MCI Official Showdown Room",
        "fixtureId": "PL_GW18_EVE_MCI",
        "createdAt": 1788254323734,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323734
            }
        ]
    },
    "FUL-ARS-LEAGUE": {
        "code": "FUL-ARS-LEAGUE",
        "name": "FUL vs ARS Official Showdown Room",
        "fixtureId": "PL_GW18_FUL_ARS",
        "createdAt": 1788254323738,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323738
            }
        ]
    },
    "IPS-CHE-LEAGUE": {
        "code": "IPS-CHE-LEAGUE",
        "name": "IPS vs CHE Official Showdown Room",
        "fixtureId": "PL_GW18_IPS_CHE",
        "createdAt": 1788254323741,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323741
            }
        ]
    },
    "MUN-SUN-LEAGUE": {
        "code": "MUN-SUN-LEAGUE",
        "name": "MUN vs SUN Official Showdown Room",
        "fixtureId": "PL_GW18_MUN_SUN",
        "createdAt": 1788254323744,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323744
            }
        ]
    },
    "TOT-BHA-LEAGUE": {
        "code": "TOT-BHA-LEAGUE",
        "name": "TOT vs BHA Official Showdown Room",
        "fixtureId": "PL_GW18_TOT_BHA",
        "createdAt": 1788254323747,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323747
            }
        ]
    },
    "ARS-IPS-LEAGUE": {
        "code": "ARS-IPS-LEAGUE",
        "name": "ARS vs IPS Official Showdown Room",
        "fixtureId": "PL_GW19_ARS_IPS",
        "createdAt": 1788254323751,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323751
            }
        ]
    },
    "BHA-MUN-LEAGUE": {
        "code": "BHA-MUN-LEAGUE",
        "name": "BHA vs MUN Official Showdown Room",
        "fixtureId": "PL_GW19_BHA_MUN",
        "createdAt": 1788254323754,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323754
            }
        ]
    },
    "CHE-NEW-LEAGUE": {
        "code": "CHE-NEW-LEAGUE",
        "name": "CHE vs NEW Official Showdown Room",
        "fixtureId": "PL_GW19_CHE_NEW",
        "createdAt": 1788254323756,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323756
            }
        ]
    },
    "LIV-COV-LEAGUE": {
        "code": "LIV-COV-LEAGUE",
        "name": "LIV vs COV Official Showdown Room",
        "fixtureId": "PL_GW19_LIV_COV",
        "createdAt": 1788254323757,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323757
            }
        ]
    },
    "MCI-TOT-LEAGUE": {
        "code": "MCI-TOT-LEAGUE",
        "name": "MCI vs TOT Official Showdown Room",
        "fixtureId": "PL_GW19_MCI_TOT",
        "createdAt": 1788254323758,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323758
            }
        ]
    },
    "ARS-BRE-LEAGUE": {
        "code": "ARS-BRE-LEAGUE",
        "name": "ARS vs BRE Official Showdown Room",
        "fixtureId": "PL_GW20_ARS_BRE",
        "createdAt": 1788254323760,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323760
            }
        ]
    },
    "CRY-CHE-LEAGUE": {
        "code": "CRY-CHE-LEAGUE",
        "name": "CRY vs CHE Official Showdown Room",
        "fixtureId": "PL_GW20_CRY_CHE",
        "createdAt": 1788254323763,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323763
            }
        ]
    },
    "FUL-TOT-LEAGUE": {
        "code": "FUL-TOT-LEAGUE",
        "name": "FUL vs TOT Official Showdown Room",
        "fixtureId": "PL_GW20_FUL_TOT",
        "createdAt": 1788254323765,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323765
            }
        ]
    },
    "LEE-MCI-LEAGUE": {
        "code": "LEE-MCI-LEAGUE",
        "name": "LEE vs MCI Official Showdown Room",
        "fixtureId": "PL_GW20_LEE_MCI",
        "createdAt": 1788254323765,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323765
            }
        ]
    },
    "MUN-NEW-LEAGUE": {
        "code": "MUN-NEW-LEAGUE",
        "name": "MUN vs NEW Official Showdown Room",
        "fixtureId": "PL_GW20_MUN_NEW",
        "createdAt": 1788254323768,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323768
            }
        ]
    },
    "SUN-LIV-LEAGUE": {
        "code": "SUN-LIV-LEAGUE",
        "name": "SUN vs LIV Official Showdown Room",
        "fixtureId": "PL_GW20_SUN_LIV",
        "createdAt": 1788254323768,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323768
            }
        ]
    },
    "AVL-MUN-LEAGUE": {
        "code": "AVL-MUN-LEAGUE",
        "name": "AVL vs MUN Official Showdown Room",
        "fixtureId": "PL_GW21_AVL_MUN",
        "createdAt": 1788254323770,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323770
            }
        ]
    },
    "CHE-SUN-LEAGUE": {
        "code": "CHE-SUN-LEAGUE",
        "name": "CHE vs SUN Official Showdown Room",
        "fixtureId": "PL_GW21_CHE_SUN",
        "createdAt": 1788254323772,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323772
            }
        ]
    },
    "HUL-ARS-LEAGUE": {
        "code": "HUL-ARS-LEAGUE",
        "name": "HUL vs ARS Official Showdown Room",
        "fixtureId": "PL_GW21_HUL_ARS",
        "createdAt": 1788254323773,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323773
            }
        ]
    },
    "LIV-CRY-LEAGUE": {
        "code": "LIV-CRY-LEAGUE",
        "name": "LIV vs CRY Official Showdown Room",
        "fixtureId": "PL_GW21_LIV_CRY",
        "createdAt": 1788254323774,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323774
            }
        ]
    },
    "MCI-NFO-LEAGUE": {
        "code": "MCI-NFO-LEAGUE",
        "name": "MCI vs NFO Official Showdown Room",
        "fixtureId": "PL_GW21_MCI_NFO",
        "createdAt": 1788254323775,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323775
            }
        ]
    },
    "TOT-LEE-LEAGUE": {
        "code": "TOT-LEE-LEAGUE",
        "name": "TOT vs LEE Official Showdown Room",
        "fixtureId": "PL_GW21_TOT_LEE",
        "createdAt": 1788254323777,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323777
            }
        ]
    },
    "SEV-RMA-LEAGUE": {
        "code": "SEV-RMA-LEAGUE",
        "name": "SEV vs RMA Official Showdown Room",
        "fixtureId": "LALIGA_MW20_SEV_RMA",
        "createdAt": 1788254323780,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323781
            }
        ]
    },
    "ARS-NEW-LEAGUE": {
        "code": "ARS-NEW-LEAGUE",
        "name": "ARS vs NEW Official Showdown Room",
        "fixtureId": "PL_GW22_ARS_NEW",
        "createdAt": 1788254323783,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323783
            }
        ]
    },
    "BHA-MCI-LEAGUE": {
        "code": "BHA-MCI-LEAGUE",
        "name": "BHA vs MCI Official Showdown Room",
        "fixtureId": "PL_GW22_BHA_MCI",
        "createdAt": 1788254323784,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323784
            }
        ]
    },
    "CRY-TOT-LEAGUE": {
        "code": "CRY-TOT-LEAGUE",
        "name": "CRY vs TOT Official Showdown Room",
        "fixtureId": "PL_GW22_CRY_TOT",
        "createdAt": 1788254323786,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323786
            }
        ]
    },
    "LEE-CHE-LEAGUE": {
        "code": "LEE-CHE-LEAGUE",
        "name": "LEE vs CHE Official Showdown Room",
        "fixtureId": "PL_GW22_LEE_CHE",
        "createdAt": 1788254323787,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323788
            }
        ]
    },
    "MUN-LIV-LEAGUE": {
        "code": "MUN-LIV-LEAGUE",
        "name": "MUN vs LIV Official Showdown Room",
        "fixtureId": "PL_GW22_MUN_LIV",
        "createdAt": 1788254323789,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323789
            }
        ]
    },
    "BRE-MUN-LEAGUE": {
        "code": "BRE-MUN-LEAGUE",
        "name": "BRE vs MUN Official Showdown Room",
        "fixtureId": "PL_GW23_BRE_MUN",
        "createdAt": 1788254323791,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323791
            }
        ]
    },
    "CHE-NFO-LEAGUE": {
        "code": "CHE-NFO-LEAGUE",
        "name": "CHE vs NFO Official Showdown Room",
        "fixtureId": "PL_GW23_CHE_NFO",
        "createdAt": 1788254323793,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323793
            }
        ]
    },
    "LIV-EVE-LEAGUE": {
        "code": "LIV-EVE-LEAGUE",
        "name": "LIV vs EVE Official Showdown Room",
        "fixtureId": "PL_GW23_LIV_EVE",
        "createdAt": 1788254323794,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323794
            }
        ]
    },
    "MCI-ARS-LEAGUE": {
        "code": "MCI-ARS-LEAGUE",
        "name": "MCI vs ARS Official Showdown Room",
        "fixtureId": "PL_GW23_MCI_ARS",
        "createdAt": 1788254323795,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323795
            }
        ]
    },
    "TOT-SUN-LEAGUE": {
        "code": "TOT-SUN-LEAGUE",
        "name": "TOT vs SUN Official Showdown Room",
        "fixtureId": "PL_GW23_TOT_SUN",
        "createdAt": 1788254323797,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323797
            }
        ]
    },
    "ARS-LIV-LEAGUE": {
        "code": "ARS-LIV-LEAGUE",
        "name": "ARS vs LIV Official Showdown Room",
        "fixtureId": "PL_GW24_ARS_LIV",
        "createdAt": 1788254323798,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323798
            }
        ]
    },
    "FUL-MCI-LEAGUE": {
        "code": "FUL-MCI-LEAGUE",
        "name": "FUL vs MCI Official Showdown Room",
        "fixtureId": "PL_GW24_FUL_MCI",
        "createdAt": 1788254323799,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323799
            }
        ]
    },
    "IPS-TOT-LEAGUE": {
        "code": "IPS-TOT-LEAGUE",
        "name": "IPS vs TOT Official Showdown Room",
        "fixtureId": "PL_GW24_IPS_TOT",
        "createdAt": 1788254323802,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323802
            }
        ]
    },
    "MUN-CHE-LEAGUE": {
        "code": "MUN-CHE-LEAGUE",
        "name": "MUN vs CHE Official Showdown Room",
        "fixtureId": "PL_GW24_MUN_CHE",
        "createdAt": 1788254323804,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323804
            }
        ]
    },
    "RMA-ATM-LEAGUE": {
        "code": "RMA-ATM-LEAGUE",
        "name": "RMA vs ATM Official Showdown Room",
        "fixtureId": "LALIGA_MW23_RMA_ATM",
        "createdAt": 1788254323807,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323807
            }
        ]
    },
    "COV-LIV-LEAGUE": {
        "code": "COV-LIV-LEAGUE",
        "name": "COV vs LIV Official Showdown Room",
        "fixtureId": "PL_GW25_COV_LIV",
        "createdAt": 1788254323808,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323808
            }
        ]
    },
    "IPS-ARS-LEAGUE": {
        "code": "IPS-ARS-LEAGUE",
        "name": "IPS vs ARS Official Showdown Room",
        "fixtureId": "PL_GW25_IPS_ARS",
        "createdAt": 1788254323810,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323810
            }
        ]
    },
    "MUN-BHA-LEAGUE": {
        "code": "MUN-BHA-LEAGUE",
        "name": "MUN vs BHA Official Showdown Room",
        "fixtureId": "PL_GW25_MUN_BHA",
        "createdAt": 1788254323812,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323812
            }
        ]
    },
    "NEW-CHE-LEAGUE": {
        "code": "NEW-CHE-LEAGUE",
        "name": "NEW vs CHE Official Showdown Room",
        "fixtureId": "PL_GW25_NEW_CHE",
        "createdAt": 1788254323814,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323814
            }
        ]
    },
    "TOT-MCI-LEAGUE": {
        "code": "TOT-MCI-LEAGUE",
        "name": "TOT vs MCI Official Showdown Room",
        "fixtureId": "PL_GW25_TOT_MCI",
        "createdAt": 1788254323815,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323815
            }
        ]
    },
    "ARS-FUL-LEAGUE": {
        "code": "ARS-FUL-LEAGUE",
        "name": "ARS vs FUL Official Showdown Room",
        "fixtureId": "PL_GW26_ARS_FUL",
        "createdAt": 1788254323817,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323817
            }
        ]
    },
    "BHA-TOT-LEAGUE": {
        "code": "BHA-TOT-LEAGUE",
        "name": "BHA vs TOT Official Showdown Room",
        "fixtureId": "PL_GW26_BHA_TOT",
        "createdAt": 1788254323820,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323820
            }
        ]
    },
    "CHE-IPS-LEAGUE": {
        "code": "CHE-IPS-LEAGUE",
        "name": "CHE vs IPS Official Showdown Room",
        "fixtureId": "PL_GW26_CHE_IPS",
        "createdAt": 1788254323822,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323822
            }
        ]
    },
    "LIV-HUL-LEAGUE": {
        "code": "LIV-HUL-LEAGUE",
        "name": "LIV vs HUL Official Showdown Room",
        "fixtureId": "PL_GW26_LIV_HUL",
        "createdAt": 1788254323823,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323823
            }
        ]
    },
    "MCI-NEW-LEAGUE": {
        "code": "MCI-NEW-LEAGUE",
        "name": "MCI vs NEW Official Showdown Room",
        "fixtureId": "PL_GW26_MCI_NEW",
        "createdAt": 1788254323825,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323825
            }
        ]
    },
    "NFO-MUN-LEAGUE": {
        "code": "NFO-MUN-LEAGUE",
        "name": "NFO vs MUN Official Showdown Room",
        "fixtureId": "PL_GW26_NFO_MUN",
        "createdAt": 1788254323827,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323827
            }
        ]
    },
    "AVL-CHE-LEAGUE": {
        "code": "AVL-CHE-LEAGUE",
        "name": "AVL vs CHE Official Showdown Room",
        "fixtureId": "PL_GW27_AVL_CHE",
        "createdAt": 1788254323829,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323829
            }
        ]
    },
    "HUL-MCI-LEAGUE": {
        "code": "HUL-MCI-LEAGUE",
        "name": "HUL vs MCI Official Showdown Room",
        "fixtureId": "PL_GW27_HUL_MCI",
        "createdAt": 1788254323832,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323832
            }
        ]
    },
    "MUN-ARS-LEAGUE": {
        "code": "MUN-ARS-LEAGUE",
        "name": "MUN vs ARS Official Showdown Room",
        "fixtureId": "PL_GW27_MUN_ARS",
        "createdAt": 1788254323834,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323834
            }
        ]
    },
    "TOT-LIV-LEAGUE": {
        "code": "TOT-LIV-LEAGUE",
        "name": "TOT vs LIV Official Showdown Room",
        "fixtureId": "PL_GW27_TOT_LIV",
        "createdAt": 1788254323835,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323835
            }
        ]
    },
    "ARS-CRY-LEAGUE": {
        "code": "ARS-CRY-LEAGUE",
        "name": "ARS vs CRY Official Showdown Room",
        "fixtureId": "PL_GW28_ARS_CRY",
        "createdAt": 1788254323837,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323837
            }
        ]
    },
    "BOU-TOT-LEAGUE": {
        "code": "BOU-TOT-LEAGUE",
        "name": "BOU vs TOT Official Showdown Room",
        "fixtureId": "PL_GW28_BOU_TOT",
        "createdAt": 1788254323839,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323839
            }
        ]
    },
    "CHE-COV-LEAGUE": {
        "code": "CHE-COV-LEAGUE",
        "name": "CHE vs COV Official Showdown Room",
        "fixtureId": "PL_GW28_CHE_COV",
        "createdAt": 1788254323841,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323841
            }
        ]
    },
    "LIV-AVL-LEAGUE": {
        "code": "LIV-AVL-LEAGUE",
        "name": "LIV vs AVL Official Showdown Room",
        "fixtureId": "PL_GW28_LIV_AVL",
        "createdAt": 1788254323843,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323843
            }
        ]
    },
    "MCI-EVE-LEAGUE": {
        "code": "MCI-EVE-LEAGUE",
        "name": "MCI vs EVE Official Showdown Room",
        "fixtureId": "PL_GW28_MCI_EVE",
        "createdAt": 1788254323843,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323843
            }
        ]
    },
    "SUN-MUN-LEAGUE": {
        "code": "SUN-MUN-LEAGUE",
        "name": "SUN vs MUN Official Showdown Room",
        "fixtureId": "PL_GW28_SUN_MUN",
        "createdAt": 1788254323846,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323846
            }
        ]
    },
    "CHE-ARS-LEAGUE": {
        "code": "CHE-ARS-LEAGUE",
        "name": "CHE vs ARS Official Showdown Room",
        "fixtureId": "PL_GW29_CHE_ARS",
        "createdAt": 1788254323848,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323848
            }
        ]
    },
    "COV-MCI-LEAGUE": {
        "code": "COV-MCI-LEAGUE",
        "name": "COV vs MCI Official Showdown Room",
        "fixtureId": "PL_GW29_COV_MCI",
        "createdAt": 1788254323849,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323849
            }
        ]
    },
    "LIV-IPS-LEAGUE": {
        "code": "LIV-IPS-LEAGUE",
        "name": "LIV vs IPS Official Showdown Room",
        "fixtureId": "PL_GW29_LIV_IPS",
        "createdAt": 1788254323851,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323851
            }
        ]
    },
    "MUN-EVE-LEAGUE": {
        "code": "MUN-EVE-LEAGUE",
        "name": "MUN vs EVE Official Showdown Room",
        "fixtureId": "PL_GW29_MUN_EVE",
        "createdAt": 1788254323852,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323852
            }
        ]
    },
    "TOT-NFO-LEAGUE": {
        "code": "TOT-NFO-LEAGUE",
        "name": "TOT vs NFO Official Showdown Room",
        "fixtureId": "PL_GW29_TOT_NFO",
        "createdAt": 1788254323855,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323855
            }
        ]
    },
    "ATM-FCB-LEAGUE": {
        "code": "ATM-FCB-LEAGUE",
        "name": "ATM vs FCB Official Showdown Room",
        "fixtureId": "LALIGA_MW27_ATM_FCB",
        "createdAt": 1788254323859,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323859
            }
        ]
    },
    "ARS-SUN-LEAGUE": {
        "code": "ARS-SUN-LEAGUE",
        "name": "ARS vs SUN Official Showdown Room",
        "fixtureId": "PL_GW30_ARS_SUN",
        "createdAt": 1788254323861,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323861
            }
        ]
    },
    "EVE-TOT-LEAGUE": {
        "code": "EVE-TOT-LEAGUE",
        "name": "EVE vs TOT Official Showdown Room",
        "fixtureId": "PL_GW30_EVE_TOT",
        "createdAt": 1788254323863,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323863
            }
        ]
    },
    "FUL-LIV-LEAGUE": {
        "code": "FUL-LIV-LEAGUE",
        "name": "FUL vs LIV Official Showdown Room",
        "fixtureId": "PL_GW30_FUL_LIV",
        "createdAt": 1788254323864,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323864
            }
        ]
    },
    "HUL-CHE-LEAGUE": {
        "code": "HUL-CHE-LEAGUE",
        "name": "HUL vs CHE Official Showdown Room",
        "fixtureId": "PL_GW30_HUL_CHE",
        "createdAt": 1788254323865,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323865
            }
        ]
    },
    "MCI-MUN-LEAGUE": {
        "code": "MCI-MUN-LEAGUE",
        "name": "MCI vs MUN Official Showdown Room",
        "fixtureId": "PL_GW30_MCI_MUN",
        "createdAt": 1788254323869,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323869
            }
        ]
    },
    "BOU-MCI-LEAGUE": {
        "code": "BOU-MCI-LEAGUE",
        "name": "BOU vs MCI Official Showdown Room",
        "fixtureId": "PL_GW31_BOU_MCI",
        "createdAt": 1788254323870,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323870
            }
        ]
    },
    "CHE-FUL-LEAGUE": {
        "code": "CHE-FUL-LEAGUE",
        "name": "CHE vs FUL Official Showdown Room",
        "fixtureId": "PL_GW31_CHE_FUL",
        "createdAt": 1788254323874,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323874
            }
        ]
    },
    "COV-ARS-LEAGUE": {
        "code": "COV-ARS-LEAGUE",
        "name": "COV vs ARS Official Showdown Room",
        "fixtureId": "PL_GW31_COV_ARS",
        "createdAt": 1788254323876,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323876
            }
        ]
    },
    "LIV-NEW-LEAGUE": {
        "code": "LIV-NEW-LEAGUE",
        "name": "LIV vs NEW Official Showdown Room",
        "fixtureId": "PL_GW31_LIV_NEW",
        "createdAt": 1788254323877,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323877
            }
        ]
    },
    "MUN-HUL-LEAGUE": {
        "code": "MUN-HUL-LEAGUE",
        "name": "MUN vs HUL Official Showdown Room",
        "fixtureId": "PL_GW31_MUN_HUL",
        "createdAt": 1788254323879,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323879
            }
        ]
    },
    "TOT-BRE-LEAGUE": {
        "code": "TOT-BRE-LEAGUE",
        "name": "TOT vs BRE Official Showdown Room",
        "fixtureId": "PL_GW31_TOT_BRE",
        "createdAt": 1788254323881,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323881
            }
        ]
    },
    "ARS-AVL-LEAGUE": {
        "code": "ARS-AVL-LEAGUE",
        "name": "ARS vs AVL Official Showdown Room",
        "fixtureId": "PL_GW32_ARS_AVL",
        "createdAt": 1788254323883,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323883
            }
        ]
    },
    "BHA-CHE-LEAGUE": {
        "code": "BHA-CHE-LEAGUE",
        "name": "BHA vs CHE Official Showdown Room",
        "fixtureId": "PL_GW32_BHA_CHE",
        "createdAt": 1788254323885,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323885
            }
        ]
    },
    "IPS-MUN-LEAGUE": {
        "code": "IPS-MUN-LEAGUE",
        "name": "IPS vs MUN Official Showdown Room",
        "fixtureId": "PL_GW32_IPS_MUN",
        "createdAt": 1788254323888,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323888
            }
        ]
    },
    "MCI-CRY-LEAGUE": {
        "code": "MCI-CRY-LEAGUE",
        "name": "MCI vs CRY Official Showdown Room",
        "fixtureId": "PL_GW32_MCI_CRY",
        "createdAt": 1788254323888,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323888
            }
        ]
    },
    "NEW-TOT-LEAGUE": {
        "code": "NEW-TOT-LEAGUE",
        "name": "NEW vs TOT Official Showdown Room",
        "fixtureId": "PL_GW32_NEW_TOT",
        "createdAt": 1788254323891,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323891
            }
        ]
    },
    "NFO-LIV-LEAGUE": {
        "code": "NFO-LIV-LEAGUE",
        "name": "NFO vs LIV Official Showdown Room",
        "fixtureId": "PL_GW32_NFO_LIV",
        "createdAt": 1788254323892,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323892
            }
        ]
    },
    "BOU-ARS-LEAGUE": {
        "code": "BOU-ARS-LEAGUE",
        "name": "BOU vs ARS Official Showdown Room",
        "fixtureId": "PL_GW33_BOU_ARS",
        "createdAt": 1788254323894,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323894
            }
        ]
    },
    "CHE-MCI-LEAGUE": {
        "code": "CHE-MCI-LEAGUE",
        "name": "CHE vs MCI Official Showdown Room",
        "fixtureId": "PL_GW33_CHE_MCI",
        "createdAt": 1788254323896,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323896
            }
        ]
    },
    "LEE-LIV-LEAGUE": {
        "code": "LEE-LIV-LEAGUE",
        "name": "LEE vs LIV Official Showdown Room",
        "fixtureId": "PL_GW33_LEE_LIV",
        "createdAt": 1788254323896,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323896
            }
        ]
    },
    "MUN-CRY-LEAGUE": {
        "code": "MUN-CRY-LEAGUE",
        "name": "MUN vs CRY Official Showdown Room",
        "fixtureId": "PL_GW33_MUN_CRY",
        "createdAt": 1788254323898,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323898
            }
        ]
    },
    "TOT-HUL-LEAGUE": {
        "code": "TOT-HUL-LEAGUE",
        "name": "TOT vs HUL Official Showdown Room",
        "fixtureId": "PL_GW33_TOT_HUL",
        "createdAt": 1788254323899,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323899
            }
        ]
    },
    "ARS-TOT-LEAGUE": {
        "code": "ARS-TOT-LEAGUE",
        "name": "ARS vs TOT Official Showdown Room",
        "fixtureId": "PL_GW34_ARS_TOT",
        "createdAt": 1788254323901,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323901
            }
        ]
    },
    "COV-MUN-LEAGUE": {
        "code": "COV-MUN-LEAGUE",
        "name": "COV vs MUN Official Showdown Room",
        "fixtureId": "PL_GW34_COV_MUN",
        "createdAt": 1788254323904,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323904
            }
        ]
    },
    "LIV-CHE-LEAGUE": {
        "code": "LIV-CHE-LEAGUE",
        "name": "LIV vs CHE Official Showdown Room",
        "fixtureId": "PL_GW34_LIV_CHE",
        "createdAt": 1788254323905,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323905
            }
        ]
    },
    "MCI-BRE-LEAGUE": {
        "code": "MCI-BRE-LEAGUE",
        "name": "MCI vs BRE Official Showdown Room",
        "fixtureId": "PL_GW34_MCI_BRE",
        "createdAt": 1788254323906,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323906
            }
        ]
    },
    "BOU-MUN-LEAGUE": {
        "code": "BOU-MUN-LEAGUE",
        "name": "BOU vs MUN Official Showdown Room",
        "fixtureId": "PL_GW35_BOU_MUN",
        "createdAt": 1788254323908,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323908
            }
        ]
    },
    "LEE-ARS-LEAGUE": {
        "code": "LEE-ARS-LEAGUE",
        "name": "LEE vs ARS Official Showdown Room",
        "fixtureId": "PL_GW35_LEE_ARS",
        "createdAt": 1788254323910,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323910
            }
        ]
    },
    "MCI-LIV-LEAGUE": {
        "code": "MCI-LIV-LEAGUE",
        "name": "MCI vs LIV Official Showdown Room",
        "fixtureId": "PL_GW35_MCI_LIV",
        "createdAt": 1788254323912,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323912
            }
        ]
    },
    "TOT-CHE-LEAGUE": {
        "code": "TOT-CHE-LEAGUE",
        "name": "TOT vs CHE Official Showdown Room",
        "fixtureId": "PL_GW35_TOT_CHE",
        "createdAt": 1788254323914,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323914
            }
        ]
    },
    "FCB-RMA-LEAGUE": {
        "code": "FCB-RMA-LEAGUE",
        "name": "FCB vs RMA Official Showdown Room",
        "fixtureId": "LALIGA_MW35_FCB_RMA",
        "createdAt": 1788254323918,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323918
            }
        ]
    },
    "ARS-NFO-LEAGUE": {
        "code": "ARS-NFO-LEAGUE",
        "name": "ARS vs NFO Official Showdown Room",
        "fixtureId": "PL_GW36_ARS_NFO",
        "createdAt": 1788254323920,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323920
            }
        ]
    },
    "CHE-EVE-LEAGUE": {
        "code": "CHE-EVE-LEAGUE",
        "name": "CHE vs EVE Official Showdown Room",
        "fixtureId": "PL_GW36_CHE_EVE",
        "createdAt": 1788254323922,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323922
            }
        ]
    },
    "COV-TOT-LEAGUE": {
        "code": "COV-TOT-LEAGUE",
        "name": "COV vs TOT Official Showdown Room",
        "fixtureId": "PL_GW36_COV_TOT",
        "createdAt": 1788254323924,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323924
            }
        ]
    },
    "IPS-MCI-LEAGUE": {
        "code": "IPS-MCI-LEAGUE",
        "name": "IPS vs MCI Official Showdown Room",
        "fixtureId": "PL_GW36_IPS_MCI",
        "createdAt": 1788254323925,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323925
            }
        ]
    },
    "LIV-BRE-LEAGUE": {
        "code": "LIV-BRE-LEAGUE",
        "name": "LIV vs BRE Official Showdown Room",
        "fixtureId": "PL_GW36_LIV_BRE",
        "createdAt": 1788254323927,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323927
            }
        ]
    },
    "MUN-LEE-LEAGUE": {
        "code": "MUN-LEE-LEAGUE",
        "name": "MUN vs LEE Official Showdown Room",
        "fixtureId": "PL_GW36_MUN_LEE",
        "createdAt": 1788254323928,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323928
            }
        ]
    },
    "BOU-CHE-LEAGUE": {
        "code": "BOU-CHE-LEAGUE",
        "name": "BOU vs CHE Official Showdown Room",
        "fixtureId": "PL_GW37_BOU_CHE",
        "createdAt": 1788254323931,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323931
            }
        ]
    },
    "BHA-LIV-LEAGUE": {
        "code": "BHA-LIV-LEAGUE",
        "name": "BHA vs LIV Official Showdown Room",
        "fixtureId": "PL_GW37_BHA_LIV",
        "createdAt": 1788254323932,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323932
            }
        ]
    },
    "EVE-ARS-LEAGUE": {
        "code": "EVE-ARS-LEAGUE",
        "name": "EVE vs ARS Official Showdown Room",
        "fixtureId": "PL_GW37_EVE_ARS",
        "createdAt": 1788254323934,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323934
            }
        ]
    },
    "MCI-AVL-LEAGUE": {
        "code": "MCI-AVL-LEAGUE",
        "name": "MCI vs AVL Official Showdown Room",
        "fixtureId": "PL_GW37_MCI_AVL",
        "createdAt": 1788254323935,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323935
            }
        ]
    },
    "TOT-MUN-LEAGUE": {
        "code": "TOT-MUN-LEAGUE",
        "name": "TOT vs MUN Official Showdown Room",
        "fixtureId": "PL_GW37_TOT_MUN",
        "createdAt": 1788254323937,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323937
            }
        ]
    },
    "ARS-BHA-LEAGUE": {
        "code": "ARS-BHA-LEAGUE",
        "name": "ARS vs BHA Official Showdown Room",
        "fixtureId": "PL_GW38_ARS_BHA",
        "createdAt": 1788254323939,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323939
            }
        ]
    },
    "AVL-TOT-LEAGUE": {
        "code": "AVL-TOT-LEAGUE",
        "name": "AVL vs TOT Official Showdown Room",
        "fixtureId": "PL_GW38_AVL_TOT",
        "createdAt": 1788254323941,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323941
            }
        ]
    },
    "CHE-BRE-LEAGUE": {
        "code": "CHE-BRE-LEAGUE",
        "name": "CHE vs BRE Official Showdown Room",
        "fixtureId": "PL_GW38_CHE_BRE",
        "createdAt": 1788254323943,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323943
            }
        ]
    },
    "LIV-BOU-LEAGUE": {
        "code": "LIV-BOU-LEAGUE",
        "name": "LIV vs BOU Official Showdown Room",
        "fixtureId": "PL_GW38_LIV_BOU",
        "createdAt": 1788254323944,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323944
            }
        ]
    },
    "MUN-FUL-LEAGUE": {
        "code": "MUN-FUL-LEAGUE",
        "name": "MUN vs FUL Official Showdown Room",
        "fixtureId": "PL_GW38_MUN_FUL",
        "createdAt": 1788254323947,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                    }
                },
                "squad": {
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
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323947
            }
        ]
    },
    "SUN-MCI-LEAGUE": {
        "code": "SUN-MCI-LEAGUE",
        "name": "SUN vs MCI Official Showdown Room",
        "fixtureId": "PL_GW38_SUN_MCI",
        "createdAt": 1788254323947,
        "creatorId": "jj7758",
        "participants": [
            {
                "userId": "jj7758",
                "name": "JJ (Commissioner)",
                "avatar": "👑",
                "isHost": true,
                "squads": {
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
                },
                "squad": {
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
                },
                "matchScore": 0,
                "totalScore": 0,
                "submittedAt": 1788254323947
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
            "matchTitle": "AVL vs ARS",
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
            "totalPrice": 94.6,
            "updatedAt": 1788254323532
        },
        "LALIGA_MW4_RMA_SEV": {
            "fixtureId": "LALIGA_MW4_RMA_SEV",
            "matchTitle": "RMA vs SEV",
            "formation": "4-3-3",
            "captainId": "rma_17",
            "viceCaptainId": "rma_16",
            "playerIds": [
                "sev_1",
                "rma_3",
                "sev_3",
                "sev_8",
                "sev_6",
                "rma_10",
                "rma_11",
                "sev_10",
                "rma_17",
                "rma_16",
                "sev_15"
            ],
            "benchIds": [
                "rma_1",
                "rma_9",
                "sev_7",
                "sev_16"
            ],
            "totalPrice": 100,
            "updatedAt": 1788254323535
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
        "matchTitle": "AVL vs ARS",
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
        "totalPrice": 94.6,
        "updatedAt": 1788254323532
    },
    "LALIGA_MW4_RMA_SEV": {
        "fixtureId": "LALIGA_MW4_RMA_SEV",
        "matchTitle": "RMA vs SEV",
        "formation": "4-3-3",
        "captainId": "rma_17",
        "viceCaptainId": "rma_16",
        "playerIds": [
            "sev_1",
            "rma_3",
            "sev_3",
            "sev_8",
            "sev_6",
            "rma_10",
            "rma_11",
            "sev_10",
            "rma_17",
            "rma_16",
            "sev_15"
        ],
        "benchIds": [
            "rma_1",
            "rma_9",
            "sev_7",
            "sev_16"
        ],
        "totalPrice": 100,
        "updatedAt": 1788254323535
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

function getGitRoomByFixture(fixtureId) {
    if (typeof SAVED_ROOMS_DATA !== 'undefined') {
        for (const code in SAVED_ROOMS_DATA) {
            if (SAVED_ROOMS_DATA[code].fixtureId === fixtureId) {
                return JSON.parse(JSON.stringify(SAVED_ROOMS_DATA[code]));
            }
        }
    }
    return null;
}

function getGitUserSquad(userId, fixtureId) {
    if (typeof SAVED_USER_SQUADS_DATA !== 'undefined' && SAVED_USER_SQUADS_DATA[userId] && SAVED_USER_SQUADS_DATA[userId][fixtureId]) {
        return JSON.parse(JSON.stringify(SAVED_USER_SQUADS_DATA[userId][fixtureId]));
    }
    return getGitSavedSquad(fixtureId);
}

function getGitSavedSquad(fixtureId) {
    if (typeof SAVED_SQUADS_DATA !== 'undefined' && SAVED_SQUADS_DATA[fixtureId]) {
        return JSON.parse(JSON.stringify(SAVED_SQUADS_DATA[fixtureId]));
    }
    return null;
}

function exportSavedSquadsFile() {
    const localRooms = JSON.parse(localStorage.getItem('showdown_xi_rooms_v2') || '{}');
    const localMaster = JSON.parse(localStorage.getItem('showdown_xi_master_squads') || '{}');
    const currentUserId = window.authManager?.currentUser?.username || window.roomManager?.userProfile?.id || 'jj7758';

    const mergedRooms = { ...(typeof SAVED_ROOMS_DATA !== 'undefined' ? SAVED_ROOMS_DATA : {}), ...localRooms };
    const mergedSquads = { ...(typeof SAVED_SQUADS_DATA !== 'undefined' ? SAVED_SQUADS_DATA : {}), ...localMaster };
    const mergedUserSquads = { ...(typeof SAVED_USER_SQUADS_DATA !== 'undefined' ? SAVED_USER_SQUADS_DATA : {}) };

    if (!mergedUserSquads[currentUserId]) mergedUserSquads[currentUserId] = {};
    mergedUserSquads[currentUserId] = { ...mergedUserSquads[currentUserId], ...localMaster };

    const content = '/**\n' +
        ' * Showdown XI - Permanent Git-Backed Rooms & Squads Database\n' +
        ' * This file is tracked in Git to provide permanent multiplayer rooms, user profiles, and squad rosters across all devices.\n' +
        ' */\n\n' +
        '// 1. Permanent Default Rooms (Separated by Room Code and Fixture)\n' +
        'const SAVED_ROOMS_DATA = ' + JSON.stringify(mergedRooms, null, 4) + ';\n\n' +
        '// 2. Permanent User Squads (Separated by User ID -> Fixture ID -> Squad)\n' +
        'const SAVED_USER_SQUADS_DATA = ' + JSON.stringify(mergedUserSquads, null, 4) + ';\n\n' +
        '// 3. Baseline Fixture Squads Map\n' +
        'const SAVED_SQUADS_DATA = ' + JSON.stringify(mergedSquads, null, 4) + ';\n\n' +
        'function getGitRoom(roomCode) {\n' +
        '    if (typeof SAVED_ROOMS_DATA !== \'undefined\' && SAVED_ROOMS_DATA[roomCode]) {\n' +
        '        return JSON.parse(JSON.stringify(SAVED_ROOMS_DATA[roomCode]));\n' +
        '    }\n' +
        '    return null;\n' +
        '}\n\n' +
        'function getGitRoomByFixture(fixtureId) {\n' +
        '    if (typeof SAVED_ROOMS_DATA !== \'undefined\') {\n' +
        '        for (const code in SAVED_ROOMS_DATA) {\n' +
        '            if (SAVED_ROOMS_DATA[code].fixtureId === fixtureId) {\n' +
        '                return JSON.parse(JSON.stringify(SAVED_ROOMS_DATA[code]));\n' +
        '            }\n' +
        '        }\n' +
        '    }\n' +
        '    return null;\n' +
        '}\n\n' +
        'function getGitUserSquad(userId, fixtureId) {\n' +
        '    if (typeof SAVED_USER_SQUADS_DATA !== \'undefined\' && SAVED_USER_SQUADS_DATA[userId] && SAVED_USER_SQUADS_DATA[userId][fixtureId]) {\n' +
        '        return JSON.parse(JSON.stringify(SAVED_USER_SQUADS_DATA[userId][fixtureId]));\n' +
        '    }\n' +
        '    return getGitSavedSquad(fixtureId);\n' +
        '}\n\n' +
        'function getGitSavedSquad(fixtureId) {\n' +
        '    if (typeof SAVED_SQUADS_DATA !== \'undefined\' && SAVED_SQUADS_DATA[fixtureId]) {\n' +
        '        return JSON.parse(JSON.stringify(SAVED_SQUADS_DATA[fixtureId]));\n' +
        '    }\n' +
        '    return null;\n' +
        '}\n';

    const blob = new Blob([content], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'savedSquads.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
