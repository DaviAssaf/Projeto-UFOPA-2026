<?php

class AuthMiddleware
{
    public static function check()
    {
        if (!isset($_SESSION["user"]) || $_SESSION["user"]["level"] != 1) {
            http_response_code(403);
            echo json_encode(["error" => "Sem permissão"]);
            exit;
        }
    }
}
