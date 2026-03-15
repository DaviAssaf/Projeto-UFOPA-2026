<?php

class User
{
    private $conn;

    public function __construct()
    {
        $this->conn = require __DIR__ . "/../config/config.php";;
    }

    public function create($name, $email, $password)
    {
        $query = "INSERT INTO users(name,email,password,updated_at) VALUES (?,?,?,NOW())";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("sss", $name, $email, $password);

        if ($stmt->execute()) {
            return ["message" => "Usuário criado"];
        }

        return ["error" => "Erro ao criar Usuário"];
    }
}
