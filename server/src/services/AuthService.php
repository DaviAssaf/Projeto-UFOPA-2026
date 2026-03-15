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
}
