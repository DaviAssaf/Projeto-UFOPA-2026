<?php
require_once __DIR__ . "/../services/AuthService.php";

class AuthController
{
    public function register()
    {
        $data = json_decode(file_get_contents("php://input"), true);

        $service = new AuthService();

        $result = $service->register($data);

        echo json_encode($result);
    }

    public function login()
    {
        $data = json_decode(file_get_contents("php://input"), true);

        $service = new AuthService();
        $result = $service->login($data);

        echo json_encode($result);
    }
}
