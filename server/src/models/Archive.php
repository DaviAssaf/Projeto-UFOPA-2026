<?php

class Archive
{
    private $conn;

    public function __construct()
    {
        $this->conn = require __DIR__ . "/../config/config.php";
    }

    public function create($title, $description, $name, $path, $size, $userId)
    {
        $query = "INSERT INTO archives 
    (title, description, archive_name, archive_path, archive_size, published_by) 
    VALUES (?, ?, ?, ?, ?, ?)";

        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ssssii", $title, $description, $name, $path, $size, $userId);

        if ($stmt->execute()) {
            return ["success" => true];
        }

        return ["error" => "Erro ao salvar"];
    }

    public function getAll()
    {
        $query = "
            SELECT 
                a.id,
                a.title,
                a.description,
                a.archive_name,
                a.archive_path,
                a.archive_size,
                a.published_in,
                u.name AS author
            FROM archives a
            LEFT JOIN users u ON u.id = a.published_by
            ORDER BY a.published_in DESC
        ";

        $result = $this->conn->query($query);

        $archives = [];

        while ($row = $result->fetch_assoc()) {
            $archives[] = $row;
        }

        return $archives;
    }
}
