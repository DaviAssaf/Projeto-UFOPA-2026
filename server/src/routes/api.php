<?php

header("Content-Type: application/json");

require_once __DIR__ . "/../controllers/AuthController.php";

$uri = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$method = $_SERVER["REQUEST_METHOD"];


if ($uri === "/UFOPA2026/server/public/api/register" && $method === "POST") {
    $controller = new AuthController();
    $controller->register();
    exit;
}

echo json_encode([
    "error" => "Rota não encontrada",
    "uri" => $uri
]);
