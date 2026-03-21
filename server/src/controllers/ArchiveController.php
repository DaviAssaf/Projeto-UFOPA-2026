<?php
require_once __DIR__ . "/../services/ArchiveService.php";

class ArchiveController
{
    public function index()
    {
        $service = new ArchiveService();

        $archives = $service->getAll();

        echo json_encode([
            "archives" => $archives
        ]);
    }

    public function upload()
    {
        $service = new ArchiveService();

        $result = $service->upload($_POST, $_FILES);

        echo json_encode($result);
    }
}
