<?php
require_once __DIR__ . "/../models/User.php";

class AuthService
{
    public function register($data)
    {
        $user = new User();

        $hashedPassword = password_hash($data["password"], PASSWORD_BCRYPT);

        $user->create(
            $data["name"],
            $data["email"],
            $hashedPassword
        );

        $createdUser = $user->findByEmail($data["email"]);

        $_SESSION["user"] = [
            "id" => $createdUser["id"],
            "name" => $createdUser["name"],
            "email" => $createdUser["email"]
        ];

        return [
            "success" => true
        ];
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
