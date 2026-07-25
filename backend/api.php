<?php

declare(strict_types=1);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$dataPath = __DIR__ . '/../data/data.json';

if (!is_file($dataPath)) {
    http_response_code(500);
    echo json_encode(['error' => 'Data file not found']);
    exit;
}

$content = file_get_contents($dataPath);
if ($content === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Unable to read data file']);
    exit;
}

echo $content;
