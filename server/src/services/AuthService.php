<?php
require_once __DIR__ . "/../models/User.php";

class AuthService
{
    public function register($data)
    {
        $user = new User();

        $hashedPassword = password_hash($data["password"], PASSWORD_BCRYPT);

        return $user->create(
            $data["name"],
            $data["email"],
            $hashedPassword
        );
    }

    public function login($data)
    {
        $userModel = new User();

        $email = $data["email"];
        $password = $data["password"];

        $user = $userModel->findByEmail($email);

        if (!$user) {
            return [
                "error" => "Usuário não encontrado"
            ];
        }

        if (!password_verify($password, $user["password"])) {
            return [
                "error" => "Senha incorreta"
            ];
        }

        $_SESSION["user"] = [
            "id" => $user["id"],
            "name" => $user["name"],
            "email" => $user["email"]
        ];

        return [
            "success" => true,
            "user" => $_SESSION["user"]
        ];
    }
}
