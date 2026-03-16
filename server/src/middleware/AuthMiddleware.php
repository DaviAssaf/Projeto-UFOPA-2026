<?php

class AuthMiddleware
{
    public static function check()
    {
        if (!isset($_SESSION["user"])) {

            echo json_encode([
                "error" => "Não autorizado"
            ]);

            exit;
        }
    }
}
