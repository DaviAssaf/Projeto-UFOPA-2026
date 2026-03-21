<?php

header("Content-Type: application/json");

session_start();

require_once __DIR__ . "/Router.php";
require_once __DIR__ . "/../middleware/AuthMiddleware.php";
require_once __DIR__ . "/../controllers/AuthController.php";

$router = new Router();

$authController = new AuthController();

$router->post("/UFOPA2026/server/public/api/register", function () use ($authController) {
    $authController->register();
});

$router->post("/UFOPA2026/server/public/api/login", function () use ($authController) {
    $authController->login();
});

$router->post("/UFOPA2026/server/public/api/upload-annal", function () {

    AuthMiddleware::check();

    require_once __DIR__ . "/../controllers/ArchiveController.php";

    $controller = new ArchiveController();
    $controller->upload();
});

$router->get("/UFOPA2026/server/public/api/archives", function () {

    require_once __DIR__ . "/../controllers/ArchiveController.php";

    $controller = new ArchiveController();
    $controller->index();
});

$router->get("/UFOPA2026/server/public/api/me", function () {

    if (isset($_SESSION["user"])) {
        echo json_encode([
            "user" => $_SESSION["user"]
        ]);
    } else {
        echo json_encode([
            "user" => null
        ]);
    }
});

$router->post("/UFOPA2026/server/public/api/logout", function () {

    $_SESSION = [];

    session_destroy();

    echo json_encode([
        "success" => true
    ]);
});

$uri = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$method = $_SERVER["REQUEST_METHOD"];

$router->resolve($uri, $method);
