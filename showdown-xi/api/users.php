<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$rootDir = dirname(__DIR__);
$usersJsonPath = $rootDir . DIRECTORY_SEPARATOR . 'users.json';
$usersJsPath = $rootDir . DIRECTORY_SEPARATOR . 'js' . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'users.js';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($usersJsonPath)) {
        echo file_get_contents($usersJsonPath);
    } else {
        echo json_encode(new stdClass());
    }
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    if (!is_array($data)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid JSON']);
        exit;
    }

    // Ensure commissioner exists
    if (!isset($data['jj7758'])) {
        $data['jj7758'] = [
            'username' => 'jj7758',
            'password' => 'foot4life',
            'displayName' => 'JJ (Commissioner)',
            'role' => 'ADMIN',
            'status' => 'APPROVED',
            'avatar' => '👑',
            'createdAt' => '2026-09-01T00:00:00.000Z',
            'approvedAt' => '2026-09-01T00:00:00.000Z'
        ];
    }

    // 1. Write users.json
    $jsonFormatted = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    $ok1 = file_put_contents($usersJsonPath, $jsonFormatted . "\n");

    // 2. Write js/data/users.js
    $jsFormatted = "/**\n * Showdown XI - Authorized Users Database\n * Managed by Commissioner (jj7758) and synchronized with Git.\n * This file is tracked in Git to provide persistent credentials across all devices.\n */\n\nconst AUTH_USERS_DATA = " . json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . ";\n\nfunction getGitUsersDatabase() {\n    if (typeof AUTH_USERS_DATA !== 'undefined') {\n        return JSON.parse(JSON.stringify(AUTH_USERS_DATA));\n    }\n    return {};\n}\n\nfunction updateGitUsersDatabase(newUsers) {\n    if (typeof AUTH_USERS_DATA !== 'undefined' && newUsers) {\n        for (const u in newUsers) {\n            AUTH_USERS_DATA[u] = newUsers[u];\n        }\n    }\n}\n";
    $ok2 = file_put_contents($usersJsPath, $jsFormatted);

    if ($ok1 !== false && $ok2 !== false) {
        echo json_encode(['success' => true, 'count' => count($data)]);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Could not write files on disk']);
    }
    exit;
}
