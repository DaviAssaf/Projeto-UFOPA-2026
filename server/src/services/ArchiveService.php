<?php
require_once __DIR__ . "/../models/Archive.php";

class ArchiveService
{
    private $archiveModel;

    public function __construct()
    {
        $this->archiveModel = new Archive();
    }

    public function upload($data, $files)
    {
        if (!isset($files["file"])) {
            return ["error" => "Arquivo não enviado"];
        }

        $file = $files["file"];

        if ($file["type"] !== "application/pdf") {
            return ["error" => "Apenas PDF permitido"];
        }

        if ($file["size"] > 128 * 1024 * 1024) {
            return ["error" => "Arquivo muito grande (máx: 128MB)"];
        }

        $uploadDir = __DIR__ . "/../../public/uploads/";

        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        $fileName = uniqid() . ".pdf";
        $filePath = $uploadDir . $fileName;

        if (!move_uploaded_file($file["tmp_name"], $filePath)) {
            return ["error" => "Erro ao salvar arquivo"];
        }

        $userId = $_SESSION["user"]["id"];

        return $this->archiveModel->create(
            $data["title"],
            $data["description"],
            $file["name"],
            "uploads/" . $fileName,
            $file["size"],
            $userId
        );
    }

    public function getAll()
    {
        $archives = $this->archiveModel->getAll();

        foreach ($archives as &$archive) {
            $archive["formatted_size"] = $this->formatSize($archive["archive_size"]);
            $archive["published_in"] = date("d/m/Y H:i", strtotime($archive["published_in"]));
        }

        return $archives;
    }

    private function formatSize($bytes)
    {
        if ($bytes >= 1048576) {
            return round($bytes / 1048576, 2) . " MB";
        }

        return round($bytes / 1024, 2) . " KB";
    }
}
