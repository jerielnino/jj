const fs = require('fs');

async function buildComprehensive() {
    const resB = await fetch('https://fantasy.premierleague.com/api/bootstrap-static/');
    const bData = await resB.json();

    const resF = await fetch('https://fantasy.premierleague.com/api/fixtures/');
    const allFixtures = await resF.json();

    const posMap = { 1: 'GK', 2: 'DEF', 3: 'MID', 4: 'FWD' };

    // Team codes map
    const plTeamCrestMap = {
        'ARS': 'https://crests.football-data.org/57.png',
        'AVL': 'https://crests.football-data.org/58.png',
        'BOU': 'https://crests.football-data.org/1044.png',
        'BRE': 'https://crests.football-data.org/402.png',
        'BHA': 'https://crests.football-data.org/397.png',
        'CHE': 'https://crests.football-data.org/61.png',
        'CRY': 'https://crests.football-data.org/354.png',
        'EVE': 'https://crests.football-data.org/62.png',
        'FUL': 'https://crests.football-data.org/63.png',
        'IPS': 'https://crests.football-data.org/349.png',
        'LEI': 'https://crests.football-data.org/338.png',
        'LIV': 'https://crests.football-data.org/64.png',
        'MCI': 'https://crests.football-data.org/65.png',
        'MUN': 'https://crests.football-data.org/66.png',
        'NEW': 'https://crests.football-data.org/67.png',
        'NFO': 'https://crests.football-data.org/351.png',
        'SOU': 'https://crests.football-data.org/340.png',
        'TOT': 'https://crests.football-data.org/73.png',
        'WHU': 'https://crests.football-data.org/563.png',
        'WOL': 'https://crests.football-data.org/76.png'
    };

    const teamColors = {
        'ARS': { primary: '#EF0107', secondary: '#FFFFFF' },
        'AVL': { primary: '#95BFE5', secondary: '#7A003C' },
        'BOU': { primary: '#DA291C', secondary: '#000000' },
        'BRE': { primary: '#E30613', secondary: '#FFFFFF' },
        'BHA': { primary: '#0057B8', secondary: '#FFCD00' },
        'CHE': { primary: '#034694', secondary: '#EE242C' },
        'CRY': { primary: '#1B458F', secondary: '#C4122E' },
        'EVE': { primary: '#003399', secondary: '#FFFFFF' },
        'FUL': { primary: '#000000', secondary: '#FFFFFF' },
        'IPS': { primary: '#0047AB', secondary: '#FFFFFF' },
        'LEI': { primary: '#003090', secondary: '#FDBE11' },
        'LIV': { primary: '#C8102E', secondary: '#F6EB61' },
        'MCI': { primary: '#6CABDD', secondary: '#1C2C5B' },
        'MUN': { primary: '#DA291C', secondary: '#FBE122' },
        'NEW': { primary: '#241F20', secondary: '#FFFFFF' },
        'NFO': { primary: '#DD0000', secondary: '#FFFFFF' },
        'SOU': { primary: '#D71920', secondary: '#130C0E' },
        'TOT': { primary: '#132257', secondary: '#FFFFFF' },
        'WHU': { primary: '#7A263A', secondary: '#1BB1E7' },
        'WOL': { primary: '#FDB913', secondary: '#231F20' }
    };

    const teams = {};
    const fplIdToCode = {};

    bData.teams.forEach(t => {
        const code = t.short_name;
        fplIdToCode[t.id] = code;
        const colors = teamColors[code] || { primary: '#333', secondary: '#fff' };

        teams[code] = {
            id: code,
            fplTeamId: t.id,
            name: t.name,
            shortName: t.name.replace('Manchester ', 'Man ').replace('Tottenham Hotspur', 'Spurs').replace('Nottingham Forest', 'Nottm Forest'),
            league: 'PL',
            badge: plTeamCrestMap[code] || 'https://crests.football-data.org/57.png',
            primaryColor: colors.primary,
            secondaryColor: colors.secondary,
            players: []
        };

        const plPlayers = bData.elements.filter(e => e.team === t.id);
        plPlayers.sort((a, b) => b.total_points - a.total_points);

        plPlayers.slice(0, 18).forEach(p => {
            const photoCode = p.photo ? p.photo.replace('.jpg', '.png') : 'Photo-Missing.png';
            teams[code].players.push({
                id: code.toLowerCase() + '_' + p.id,
                fplId: p.id,
                name: p.first_name + ' ' + p.second_name,
                webName: p.web_name,
                pos: posMap[p.element_type],
                club: code,
                price: p.now_cost / 10,
                number: p.squad_number || 0,
                form: parseFloat(p.form) || 5.0,
                photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p' + photoCode,
                goals: p.goals_scored || 0,
                assists: p.assists || 0,
                cleanSheets: p.clean_sheets || 0,
                saves: p.saves || 0
            });
        });
    });

    // Add La Liga Teams
    teams['RMA'] = {
        id: 'RMA',
        name: 'Real Madrid',
        shortName: 'Real Madrid',
        league: 'LALIGA',
        badge: 'https://crests.football-data.org/86.png',
        primaryColor: '#FEBE10',
        secondaryColor: '#00529F',
        players: [
            { id: 'rma_1', name: 'Thibaut Courtois', webName: 'Courtois', pos: 'GK', club: 'RMA', price: 6.0, number: 1, form: 6.1, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p88641.png', goals: 0, assists: 0, cleanSheets: 10, saves: 52 },
            { id: 'rma_2', name: 'Antonio Rüdiger', webName: 'Rüdiger', pos: 'DEF', club: 'RMA', price: 6.2, number: 22, form: 6.0, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p102380.png', goals: 2, assists: 0, cleanSheets: 10, saves: 0 },
            { id: 'rma_3', name: 'Lucas Vázquez', webName: 'Vázquez', pos: 'DEF', club: 'RMA', price: 5.2, number: 17, form: 4.9, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p115472.png', goals: 1, assists: 3, cleanSheets: 7, saves: 0 },
            { id: 'rma_4', name: 'Éder Militão', webName: 'Militão', pos: 'DEF', club: 'RMA', price: 5.8, number: 3, form: 5.2, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p241159.png', goals: 1, assists: 1, cleanSheets: 6, saves: 0 },
            { id: 'rma_5', name: 'Ferland Mendy', webName: 'Mendy', pos: 'DEF', club: 'RMA', price: 5.4, number: 23, form: 4.8, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p228286.png', goals: 0, assists: 1, cleanSheets: 8, saves: 0 },
            { id: 'rma_6', name: 'Jude Bellingham', webName: 'Bellingham', pos: 'MID', club: 'RMA', price: 10.5, number: 5, form: 8.1, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p464347.png', goals: 8, assists: 7, cleanSheets: 9, saves: 0 },
            { id: 'rma_7', name: 'Federico Valverde', webName: 'Valverde', pos: 'MID', club: 'RMA', price: 7.8, number: 8, form: 6.9, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p220648.png', goals: 4, assists: 4, cleanSheets: 9, saves: 0 },
            { id: 'rma_8', name: 'Luka Modrić', webName: 'Modrić', pos: 'MID', club: 'RMA', price: 6.2, number: 10, form: 5.3, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p18498.png', goals: 2, assists: 5, cleanSheets: 8, saves: 0 },
            { id: 'rma_9', name: 'Eduardo Camavinga', webName: 'Camavinga', pos: 'MID', club: 'RMA', price: 6.0, number: 6, form: 5.1, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p466848.png', goals: 1, assists: 2, cleanSheets: 7, saves: 0 },
            { id: 'rma_10', name: 'Aurélien Tchouaméni', webName: 'Tchouaméni', pos: 'MID', club: 'RMA', price: 5.8, number: 14, form: 5.0, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p243568.png', goals: 1, assists: 1, cleanSheets: 8, saves: 0 },
            { id: 'rma_11', name: 'Arda Güler', webName: 'Güler', pos: 'MID', club: 'RMA', price: 5.7, number: 15, form: 4.5, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p544837.png', goals: 3, assists: 2, cleanSheets: 4, saves: 0 },
            { id: 'rma_12', name: 'Vinícius Júnior', webName: 'Vinícius Jr', pos: 'FWD', club: 'RMA', price: 11.5, number: 7, form: 8.9, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p246333.png', goals: 12, assists: 8, cleanSheets: 9, saves: 0 },
            { id: 'rma_13', name: 'Kylian Mbappé', webName: 'Mbappé', pos: 'FWD', club: 'RMA', price: 12.0, number: 9, form: 8.7, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p231388.png', goals: 15, assists: 4, cleanSheets: 9, saves: 0 },
            { id: 'rma_14', name: 'Rodrygo', webName: 'Rodrygo', pos: 'FWD', club: 'RMA', price: 8.5, number: 11, form: 6.6, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p466847.png', goals: 6, assists: 5, cleanSheets: 7, saves: 0 },
            { id: 'rma_15', name: 'Brahim Díaz', webName: 'Brahim', pos: 'FWD', club: 'RMA', price: 6.5, number: 21, form: 5.4, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p220689.png', goals: 4, assists: 3, cleanSheets: 6, saves: 0 }
        ]
    };

    teams['FCB'] = {
        id: 'FCB',
        name: 'FC Barcelona',
        shortName: 'Barcelona',
        league: 'LALIGA',
        badge: 'https://crests.football-data.org/81.png',
        primaryColor: '#004D98',
        secondaryColor: '#A50044',
        players: [
            { id: 'fcb_1', name: 'Marc-André ter Stegen', webName: 'Ter Stegen', pos: 'GK', club: 'FCB', price: 5.8, number: 1, form: 5.5, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p80774.png', goals: 0, assists: 0, cleanSheets: 7, saves: 40 },
            { id: 'fcb_2', name: 'Wojciech Szczesny', webName: 'Szczesny', pos: 'GK', club: 'FCB', price: 5.2, number: 25, form: 5.2, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p59936.png', goals: 0, assists: 0, cleanSheets: 4, saves: 24 },
            { id: 'fcb_3', name: 'Jules Koundé', webName: 'Koundé', pos: 'DEF', club: 'FCB', price: 6.1, number: 23, form: 6.5, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p243565.png', goals: 2, assists: 4, cleanSheets: 8, saves: 0 },
            { id: 'fcb_4', name: 'Pau Cubarsí', webName: 'Cubarsí', pos: 'DEF', club: 'FCB', price: 5.2, number: 2, form: 5.6, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p580001.png', goals: 0, assists: 1, cleanSheets: 8, saves: 0 },
            { id: 'fcb_5', name: 'Alejandro Balde', webName: 'Balde', pos: 'DEF', club: 'FCB', price: 5.4, number: 3, form: 5.7, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p493105.png', goals: 1, assists: 3, cleanSheets: 8, saves: 0 },
            { id: 'fcb_6', name: 'Íñigo Martínez', webName: 'Iñigo', pos: 'DEF', club: 'FCB', price: 5.3, number: 5, form: 5.4, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p102047.png', goals: 1, assists: 1, cleanSheets: 7, saves: 0 },
            { id: 'fcb_7', name: 'Pedri', webName: 'Pedri', pos: 'MID', club: 'FCB', price: 8.0, number: 8, form: 7.2, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p487627.png', goals: 4, assists: 5, cleanSheets: 8, saves: 0 },
            { id: 'fcb_8', name: 'Gavi', webName: 'Gavi', pos: 'MID', club: 'FCB', price: 6.8, number: 6, form: 5.3, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p510344.png', goals: 2, assists: 2, cleanSheets: 5, saves: 0 },
            { id: 'fcb_9', name: 'Dani Olmo', webName: 'Olmo', pos: 'MID', club: 'FCB', price: 7.9, number: 20, form: 7.0, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p243564.png', goals: 6, assists: 3, cleanSheets: 6, saves: 0 },
            { id: 'fcb_10', name: 'Lamine Yamal', webName: 'Lamine Yamal', pos: 'MID', club: 'FCB', price: 9.6, number: 19, form: 8.8, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p580002.png', goals: 8, assists: 10, cleanSheets: 8, saves: 0 },
            { id: 'fcb_11', name: 'Raphinha', webName: 'Raphinha', pos: 'MID', club: 'FCB', price: 9.5, number: 11, form: 8.9, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p224467.png', goals: 12, assists: 9, cleanSheets: 8, saves: 0 },
            { id: 'fcb_12', name: 'Robert Lewandowski', webName: 'Lewandowski', pos: 'FWD', club: 'FCB', price: 11.2, number: 9, form: 9.1, photo: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p59937.png', goals: 17, assists: 3, cleanSheets: 8, saves: 0 }
        ]
    };

    teams['ATM'] = {
        id: 'ATM',
        name: 'Atlético de Madrid',
        shortName: 'Atlético',
        league: 'LALIGA',
        badge: 'https://crests.football-data.org/78.png',
        primaryColor: '#CB3524',
        secondaryColor: '#272E61',
        players: [
            { id: 'atm_1', name: 'Jan Oblak', webName: 'Oblak', pos: 'GK', club: 'ATM', price: 5.7, number: 13, form: 5.8, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/177126.png', goals: 0, assists: 0, cleanSheets: 10, saves: 54 },
            { id: 'atm_2', name: 'Juan Musso', webName: 'Musso', pos: 'GK', club: 'ATM', price: 4.5, number: 1, form: 4.8, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/389050.png', goals: 0, assists: 0, cleanSheets: 2, saves: 12 },
            { id: 'atm_3', name: 'José María Giménez', webName: 'Giménez', pos: 'DEF', club: 'ATM', price: 5.2, number: 2, form: 5.5, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/474589.png', goals: 1, assists: 0, cleanSheets: 9, saves: 0 },
            { id: 'atm_4', name: 'Robin Le Normand', webName: 'Le Normand', pos: 'DEF', club: 'ATM', price: 5.0, number: 24, form: 5.2, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/609516.png', goals: 0, assists: 0, cleanSheets: 8, saves: 0 },
            { id: 'atm_5', name: 'Nahuel Molina', webName: 'Molina', pos: 'DEF', club: 'ATM', price: 5.0, number: 16, form: 5.0, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/726345.png', goals: 1, assists: 2, cleanSheets: 7, saves: 0 },
            { id: 'atm_6', name: 'Reinildo Mandava', webName: 'Reinildo', pos: 'DEF', club: 'ATM', price: 4.8, number: 23, form: 4.9, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/655938.png', goals: 0, assists: 1, cleanSheets: 6, saves: 0 },
            { id: 'atm_7', name: 'Axel Witsel', webName: 'Witsel', pos: 'DEF', club: 'ATM', price: 4.7, number: 20, form: 4.8, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/33633.png', goals: 0, assists: 0, cleanSheets: 6, saves: 0 },
            { id: 'atm_8', name: 'Marcos Llorente', webName: 'Llorente', pos: 'MID', club: 'ATM', price: 6.5, number: 14, form: 6.8, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/602563.png', goals: 3, assists: 3, cleanSheets: 8, saves: 0 },
            { id: 'atm_9', name: 'Rodrigo De Paul', webName: 'De Paul', pos: 'MID', club: 'ATM', price: 6.2, number: 5, form: 5.8, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/324578.png', goals: 2, assists: 3, cleanSheets: 8, saves: 0 },
            { id: 'atm_10', name: 'Conor Gallagher', webName: 'Gallagher', pos: 'MID', club: 'ATM', price: 6.0, number: 4, form: 5.6, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/966027.png', goals: 3, assists: 1, cleanSheets: 7, saves: 0 },
            { id: 'atm_11', name: 'Koke', webName: 'Koke', pos: 'MID', club: 'ATM', price: 5.5, number: 6, form: 5.2, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/184533.png', goals: 1, assists: 2, cleanSheets: 7, saves: 0 },
            { id: 'atm_12', name: 'Pablo Barrios', webName: 'Barrios', pos: 'MID', club: 'ATM', price: 5.2, number: 8, form: 5.4, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/1338192.png', goals: 1, assists: 1, cleanSheets: 6, saves: 0 },
            { id: 'atm_13', name: 'Samuel Lino', webName: 'Lino', pos: 'MID', club: 'ATM', price: 6.2, number: 12, form: 6.0, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/1010313.png', goals: 3, assists: 4, cleanSheets: 7, saves: 0 },
            { id: 'atm_14', name: 'Thomas Lemar', webName: 'Lemar', pos: 'MID', club: 'ATM', price: 5.0, number: 11, form: 4.5, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/468931.png', goals: 0, assists: 1, cleanSheets: 4, saves: 0 },
            { id: 'atm_15', name: 'Antoine Griezmann', webName: 'Griezmann', pos: 'FWD', club: 'ATM', price: 9.0, number: 7, form: 7.8, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/184138.png', goals: 7, assists: 7, cleanSheets: 9, saves: 0 },
            { id: 'atm_16', name: 'Julián Álvarez', webName: 'J.Álvarez', pos: 'FWD', club: 'ATM', price: 9.4, number: 19, form: 8.0, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/974753.png', goals: 8, assists: 4, cleanSheets: 8, saves: 0 },
            { id: 'atm_17', name: 'Alexander Sørloth', webName: 'Sørloth', pos: 'FWD', club: 'ATM', price: 7.6, number: 9, form: 6.4, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/440330.png', goals: 6, assists: 2, cleanSheets: 6, saves: 0 },
            { id: 'atm_18', name: 'Giuliano Simeone', webName: 'Giuliano', pos: 'FWD', club: 'ATM', price: 5.2, number: 22, form: 5.1, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/1226147.png', goals: 1, assists: 1, cleanSheets: 4, saves: 0 }
        ]
    };

    teams['SEV'] = {
        id: 'SEV',
        name: 'Sevilla FC',
        shortName: 'Sevilla',
        league: 'LALIGA',
        badge: 'https://crests.football-data.org/559.png',
        primaryColor: '#FFFFFF',
        secondaryColor: '#D4001F',
        players: [
            { id: 'sev_1', name: 'Ørjan Nyland', webName: 'Nyland', pos: 'GK', club: 'SEV', price: 4.8, number: 13, form: 4.8, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/73409.png', goals: 0, assists: 0, cleanSheets: 5, saves: 42 },
            { id: 'sev_2', name: 'Álvaro Fernández', webName: 'Á.Fernández', pos: 'GK', club: 'SEV', price: 4.4, number: 1, form: 4.5, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/1148810.png', goals: 0, assists: 0, cleanSheets: 2, saves: 14 },
            { id: 'sev_3', name: 'Loïc Badé', webName: 'Badé', pos: 'DEF', club: 'SEV', price: 4.9, number: 22, form: 5.0, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/1119461.png', goals: 1, assists: 0, cleanSheets: 6, saves: 0 },
            { id: 'sev_4', name: 'Adrià Pedrosa', webName: 'Pedrosa', pos: 'DEF', club: 'SEV', price: 4.7, number: 3, form: 4.8, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/927646.png', goals: 0, assists: 2, cleanSheets: 5, saves: 0 },
            { id: 'sev_5', name: 'Kike Salas', webName: 'Salas', pos: 'DEF', club: 'SEV', price: 4.6, number: 4, form: 4.7, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/1327489.png', goals: 1, assists: 0, cleanSheets: 5, saves: 0 },
            { id: 'sev_6', name: 'José Ángel Carmona', webName: 'Carmona', pos: 'DEF', club: 'SEV', price: 4.6, number: 32, form: 4.9, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/1281461.png', goals: 0, assists: 1, cleanSheets: 5, saves: 0 },
            { id: 'sev_7', name: 'Marcão', webName: 'Marcão', pos: 'DEF', club: 'SEV', price: 4.5, number: 23, form: 4.6, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/753593.png', goals: 0, assists: 0, cleanSheets: 4, saves: 0 },
            { id: 'sev_8', name: 'Nemanja Gudelj', webName: 'Gudelj', pos: 'MID', club: 'SEV', price: 5.0, number: 6, form: 5.1, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/214152.png', goals: 1, assists: 1, cleanSheets: 6, saves: 0 },
            { id: 'sev_9', name: 'Saúl Ñíguez', webName: 'Saúl', pos: 'MID', club: 'SEV', price: 5.5, number: 17, form: 5.4, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/309334.png', goals: 2, assists: 2, cleanSheets: 5, saves: 0 },
            { id: 'sev_10', name: 'Lucien Agoumé', webName: 'Agoumé', pos: 'MID', club: 'SEV', price: 5.0, number: 18, form: 5.0, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/971790.png', goals: 0, assists: 1, cleanSheets: 5, saves: 0 },
            { id: 'sev_11', name: 'Albert Sambi Lokonga', webName: 'Lokonga', pos: 'MID', club: 'SEV', price: 5.2, number: 12, form: 5.0, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/858544.png', goals: 0, assists: 1, cleanSheets: 5, saves: 0 },
            { id: 'sev_12', name: 'Djibril Sow', webName: 'Sow', pos: 'MID', club: 'SEV', price: 5.0, number: 20, form: 4.8, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/688204.png', goals: 1, assists: 1, cleanSheets: 5, saves: 0 },
            { id: 'sev_13', name: 'Manu Bueno', webName: 'Bueno', pos: 'MID', club: 'SEV', price: 4.5, number: 28, form: 4.5, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/1428849.png', goals: 0, assists: 0, cleanSheets: 3, saves: 0 },
            { id: 'sev_14', name: 'Dodi Lukébakio', webName: 'Lukébakio', pos: 'FWD', club: 'SEV', price: 6.5, number: 11, form: 6.8, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/688876.png', goals: 6, assists: 2, cleanSheets: 5, saves: 0 },
            { id: 'sev_15', name: 'Chidera Ejuke', webName: 'Ejuke', pos: 'FWD', club: 'SEV', price: 6.0, number: 21, form: 6.2, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/837270.png', goals: 3, assists: 3, cleanSheets: 5, saves: 0 },
            { id: 'sev_16', name: 'Peque Fernández', webName: 'Peque', pos: 'FWD', club: 'SEV', price: 5.5, number: 14, form: 5.2, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/1132607.png', goals: 1, assists: 2, cleanSheets: 4, saves: 0 },
            { id: 'sev_17', name: 'Isaac Romero', webName: 'Isaac', pos: 'FWD', club: 'SEV', price: 5.8, number: 7, form: 5.5, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/1130991.png', goals: 4, assists: 2, cleanSheets: 5, saves: 0 },
            { id: 'sev_18', name: 'Kelechi Iheanacho', webName: 'Iheanacho', pos: 'FWD', club: 'SEV', price: 5.8, number: 9, form: 5.0, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/688247.png', goals: 2, assists: 1, cleanSheets: 4, saves: 0 }
        ]
    };

    teams['ATH'] = {
        id: 'ATH',
        name: 'Athletic Club',
        shortName: 'Athletic',
        league: 'LALIGA',
        badge: 'https://crests.football-data.org/77.png',
        primaryColor: '#EE2524',
        secondaryColor: '#FFFFFF',
        players: [
            { id: 'ath_1', name: 'Unai Simón', webName: 'Simón', pos: 'GK', club: 'ATH', price: 5.5, number: 1, form: 5.8, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/660625.png', goals: 0, assists: 0, cleanSheets: 9, saves: 48 },
            { id: 'ath_2', name: 'Julen Agirrezabala', webName: 'Agirrezabala', pos: 'GK', club: 'ATH', price: 4.6, number: 13, form: 5.0, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/1280020.png', goals: 0, assists: 0, cleanSheets: 3, saves: 16 },
            { id: 'ath_3', name: 'Dani Vivian', webName: 'Vivian', pos: 'DEF', club: 'ATH', price: 5.2, number: 3, form: 5.6, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/940743.png', goals: 1, assists: 0, cleanSheets: 8, saves: 0 },
            { id: 'ath_4', name: 'Aitor Paredes', webName: 'Paredes', pos: 'DEF', club: 'ATH', price: 5.0, number: 4, form: 5.4, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/1191407.png', goals: 1, assists: 1, cleanSheets: 7, saves: 0 },
            { id: 'ath_5', name: 'Yeray Álvarez', webName: 'Yeray', pos: 'DEF', club: 'ATH', price: 4.9, number: 5, form: 5.0, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/639450.png', goals: 0, assists: 0, cleanSheets: 6, saves: 0 },
            { id: 'ath_6', name: 'Yuri Berchiche', webName: 'Yuri', pos: 'DEF', club: 'ATH', price: 4.9, number: 17, form: 5.1, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/80295.png', goals: 1, assists: 2, cleanSheets: 7, saves: 0 },
            { id: 'ath_7', name: 'Andoni Gorosabel', webName: 'Gorosabel', pos: 'DEF', club: 'ATH', price: 4.8, number: 2, form: 4.9, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/839893.png', goals: 0, assists: 1, cleanSheets: 6, saves: 0 },
            { id: 'ath_8', name: 'Adama Boiro', webName: 'Boiro', pos: 'DEF', club: 'ATH', price: 4.5, number: 32, form: 4.7, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/1331249.png', goals: 0, assists: 0, cleanSheets: 4, saves: 0 },
            { id: 'ath_9', name: 'Oihan Sancet', webName: 'Sancet', pos: 'MID', club: 'ATH', price: 7.2, number: 8, form: 7.4, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/950545.png', goals: 7, assists: 3, cleanSheets: 7, saves: 0 },
            { id: 'ath_10', name: 'Nico Williams', webName: 'Nico W.', pos: 'MID', club: 'ATH', price: 8.5, number: 10, form: 8.2, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/1202110.png', goals: 6, assists: 8, cleanSheets: 8, saves: 0 },
            { id: 'ath_11', name: 'Álex Berenguer', webName: 'Berenguer', pos: 'MID', club: 'ATH', price: 6.2, number: 7, form: 6.2, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/574629.png', goals: 4, assists: 4, cleanSheets: 7, saves: 0 },
            { id: 'ath_12', name: 'Íñigo Ruiz de Galarreta', webName: 'Galarreta', pos: 'MID', club: 'ATH', price: 5.2, number: 16, form: 5.2, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/282462.png', goals: 0, assists: 2, cleanSheets: 7, saves: 0 },
            { id: 'ath_13', name: 'Mikel Vesga', webName: 'Vesga', pos: 'MID', club: 'ATH', price: 5.0, number: 6, form: 4.8, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/616545.png', goals: 1, assists: 1, cleanSheets: 6, saves: 0 },
            { id: 'ath_14', name: 'Beñat Prados', webName: 'Prados', pos: 'MID', club: 'ATH', price: 5.0, number: 24, form: 5.0, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/1229176.png', goals: 1, assists: 0, cleanSheets: 6, saves: 0 },
            { id: 'ath_15', name: 'Mikel Jauregizar', webName: 'Jauregizar', pos: 'MID', club: 'ATH', price: 4.8, number: 23, form: 5.1, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/1553099.png', goals: 1, assists: 1, cleanSheets: 5, saves: 0 },
            { id: 'ath_16', name: 'Álvaro Djaló', webName: 'Djaló', pos: 'FWD', club: 'ATH', price: 6.2, number: 11, form: 5.5, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/1355668.png', goals: 2, assists: 1, cleanSheets: 5, saves: 0 },
            { id: 'ath_17', name: 'Iñaki Williams', webName: 'Iñaki W.', pos: 'FWD', club: 'ATH', price: 7.5, number: 9, form: 7.0, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/604105.png', goals: 7, assists: 5, cleanSheets: 7, saves: 0 },
            { id: 'ath_18', name: 'Gorka Guruzeta', webName: 'Guruzeta', pos: 'FWD', club: 'ATH', price: 7.0, number: 12, form: 6.5, status: 'a', news: '', chance: 100, photo: 'https://images.fotmob.com/image_resources/playerimages/711231.png', goals: 5, assists: 3, cleanSheets: 6, saves: 0 }
        ]
    };

    // Filter ALL fixtures involving key teams: ARS, CHE, LIV, MCI, MUN, TOT
    const keyPlIds = [1, 7, 12, 13, 14, 18];
    const targetFixtures = allFixtures.filter(f => keyPlIds.includes(f.team_h) || keyPlIds.includes(f.team_a));

    const fixturesArray = targetFixtures.map(f => {
        const homeCode = fplIdToCode[f.team_h];
        const awayCode = fplIdToCode[f.team_a];
        const homeTeam = teams[homeCode];
        const awayTeam = teams[awayCode];

        return {
            id: 'PL_GW' + f.event + '_' + homeCode + '_' + awayCode,
            fplFixtureId: f.id,
            league: 'PL',
            leagueName: 'Premier League',
            homeClub: homeCode,
            awayClub: awayCode,
            matchweek: f.event,
            venue: homeTeam ? (homeTeam.name + ' Ground') : 'Premier League Stadium',
            kickoffTime: f.kickoff_time,
            status: f.finished ? 'FINISHED' : (f.started ? 'LIVE' : 'SCHEDULED'),
            homeScore: f.team_h_score ?? 0,
            awayScore: f.team_a_score ?? 0,
            featured: keyPlIds.includes(f.team_h) && keyPlIds.includes(f.team_a)
        };
    });

    // Add La Liga Key Fixtures
    const laLigaFixtures = [
        {
            id: 'LALIGA_MW4_RMA_SEV',
            league: 'LALIGA',
            leagueName: 'La Liga',
            homeClub: 'RMA',
            awayClub: 'SEV',
            matchweek: 4,
            venue: 'Santiago Bernabéu, Madrid',
            kickoffTime: '2026-09-01T19:30:00Z',
            status: 'SCHEDULED',
            homeScore: 0,
            awayScore: 0,
            featured: true
        },
        {
            id: 'LALIGA_MW5_FCB_SEV',
            league: 'LALIGA',
            leagueName: 'La Liga',
            homeClub: 'FCB',
            awayClub: 'SEV',
            matchweek: 5,
            venue: 'Estadi Olímpic, Barcelona',
            kickoffTime: '2026-09-15T14:15:00Z',
            status: 'SCHEDULED',
            homeScore: 0,
            awayScore: 0,
            featured: false
        },
        {
            id: 'LALIGA_MW8_ATM_RMA',
            league: 'LALIGA',
            leagueName: 'La Liga',
            homeClub: 'ATM',
            awayClub: 'RMA',
            matchweek: 8,
            venue: 'Cívitas Metropolitano, Madrid (Madrid Derby)',
            kickoffTime: '2026-09-27T19:00:00Z',
            status: 'SCHEDULED',
            homeScore: 0,
            awayScore: 0,
            featured: true
        },
        {
            id: 'LALIGA_MW10_FCB_SEV',
            league: 'LALIGA',
            leagueName: 'La Liga',
            homeClub: 'FCB',
            awayClub: 'SEV',
            matchweek: 10,
            venue: 'Estadi Olímpic, Barcelona',
            kickoffTime: '2026-10-20T19:00:00Z',
            status: 'SCHEDULED',
            homeScore: 0,
            awayScore: 0,
            featured: false
        },
        {
            id: 'LALIGA_MW11_RMA_FCB',
            league: 'LALIGA',
            leagueName: 'La Liga',
            homeClub: 'RMA',
            awayClub: 'FCB',
            matchweek: 11,
            venue: 'Santiago Bernabéu, Madrid (El Clásico)',
            kickoffTime: '2026-10-25T19:00:00Z',
            status: 'SCHEDULED',
            homeScore: 0,
            awayScore: 0,
            featured: true
        },
        {
            id: 'LALIGA_MW18_FCB_ATM',
            league: 'LALIGA',
            leagueName: 'La Liga',
            homeClub: 'FCB',
            awayClub: 'ATM',
            matchweek: 18,
            venue: 'Estadi Olímpic, Barcelona',
            kickoffTime: '2026-12-20T20:00:00Z',
            status: 'SCHEDULED',
            homeScore: 0,
            awayScore: 0,
            featured: true
        },
        {
            id: 'LALIGA_MW23_RMA_ATM',
            league: 'LALIGA',
            leagueName: 'La Liga',
            homeClub: 'RMA',
            awayClub: 'ATM',
            matchweek: 23,
            venue: 'Santiago Bernabéu, Madrid',
            kickoffTime: '2027-02-07T20:00:00Z',
            status: 'SCHEDULED',
            homeScore: 0,
            awayScore: 0,
            featured: true
        },
        {
            id: 'LALIGA_MW35_FCB_RMA',
            league: 'LALIGA',
            leagueName: 'La Liga',
            homeClub: 'FCB',
            awayClub: 'RMA',
            matchweek: 35,
            venue: 'Estadi Olímpic, Barcelona (El Clásico Leg 2)',
            kickoffTime: '2027-05-09T19:00:00Z',
            status: 'SCHEDULED',
            homeScore: 0,
            awayScore: 0,
            featured: true
        }
    ];

    const combinedFixtures = [...fixturesArray, ...laLigaFixtures];
    combinedFixtures.sort((a, b) => new Date(a.kickoffTime) - new Date(b.kickoffTime));

    const teamsContent = `/**
 * Showdown XI - Official Comprehensive Team & Player Database
 * All Premier League clubs and La Liga top clubs with authentic crests and player photos.
 */

const TEAMS_DATA = ` + JSON.stringify(teams, null, 4) + `;

function getMatchPlayers(homeClubId, awayClubId) {
    const homeTeam = TEAMS_DATA[homeClubId];
    const awayTeam = TEAMS_DATA[awayClubId];
    if (!homeTeam || !awayTeam) return [];
    return [...homeTeam.players, ...awayTeam.players];
}

function getPlayerById(playerId) {
    for (const teamKey in TEAMS_DATA) {
        const p = TEAMS_DATA[teamKey].players.find(pl => pl.id === playerId);
        if (p) return { ...p, teamInfo: TEAMS_DATA[teamKey] };
    }
    return null;
}
`;

    const fixturesContent = `/**
 * Showdown XI - Official Comprehensive Fixtures Schedule
 * Contains ALL games of key teams (Liverpool, Arsenal, Chelsea, Man City, Man Utd, Spurs, Real Madrid, Barca, Atletico) against all opponents.
 */

const FIXTURES_DATA = ` + JSON.stringify(combinedFixtures, null, 4) + `;

function getMatchDeadlineInfo(kickoffIsoString) {
    const kickoff = new Date(kickoffIsoString).getTime();
    const now = Date.now();
    const LOCK_BUFFER_MS = 5 * 60 * 60 * 1000;
    const lockTime = kickoff - LOCK_BUFFER_MS;

    const msUntilLock = lockTime - now;
    const msUntilKickoff = kickoff - now;

    let status = 'OPEN';
    let isLocked = false;
    let isLive = false;
    let isFinished = false;

    if (msUntilKickoff <= -105 * 60 * 1000) {
        status = 'FINISHED';
        isFinished = true;
        isLocked = true;
    } else if (msUntilKickoff <= 0) {
        status = 'LIVE';
        isLive = true;
        isLocked = true;
    } else if (msUntilLock <= 0) {
        status = 'LOCKED';
        isLocked = true;
    } else if (msUntilLock <= 60 * 60 * 1000) {
        status = 'LOCKING_SOON';
        isLocked = false;
    } else {
        status = 'OPEN';
        isLocked = false;
    }

    const kickoffDate = new Date(kickoff);
    const lockDate = new Date(lockTime);
    const dateOptions = {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
    };

    return {
        status,
        isLocked,
        isLive,
        isFinished,
        lockTimestamp: lockTime,
        kickoffTimestamp: kickoff,
        msUntilLock: Math.max(0, msUntilLock),
        msUntilKickoff: Math.max(0, msUntilKickoff),
        formattedLockCountdown: formatMilliseconds(Math.max(0, msUntilLock)),
        formattedKickoffCountdown: formatMilliseconds(Math.max(0, msUntilKickoff)),
        lockDateStr: lockDate.toLocaleDateString('en-IN', dateOptions) + ' IST',
        kickoffDateStr: kickoffDate.toLocaleDateString('en-IN', dateOptions) + ' IST'
    };
}

function formatMilliseconds(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (n) => String(n).padStart(2, '0');
    if (days > 0) {
        return days + 'd ' + pad(hours) + 'h ' + pad(minutes) + 'm';
    }
    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}
`;

    fs.writeFileSync('js/data/teams.js', teamsContent);
    fs.writeFileSync('js/data/fixtures.js', fixturesContent);
    console.log('✅ Generated ' + Object.keys(teams).length + ' teams and ' + combinedFixtures.length + ' official fixtures!');
}

buildComprehensive();
