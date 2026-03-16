<?php

class User
{
    private $conn;

    public function __construct()
    {
        $this->conn = require __DIR__ . "/../config/config.php";
    }

    public function create($name, $email, $password)
    {
        $query = "INSERT INTO users(name,email,password,updated_at) VALUES (?,?,?,NOW())";

        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("sss", $name, $email, $password);

        try {

            if ($stmt->execute()) {
                return ["success" => true];
            }

            return ["error" => "Erro ao criar usuário"];
        } catch (mysqli_sql_exception $e) {

            if ($e->getCode() == 1062) {
                return ["error" => "Email já cadastrado"];
            }

            return ["error" => "Erro no banco"];
        }
    }

    public function findByEmail($email)
    {
        $query = "SELECT * FROM users WHERE email = ?";

        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("s", $email);
        $stmt->execute();

        $result = $stmt->get_result();

        if ($result->num_rows === 0) {
            return null;
        }

        return $result->fetch_assoc();
    }
}
