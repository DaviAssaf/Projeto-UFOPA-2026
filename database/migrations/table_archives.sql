CREATE TABLE IF NOT EXISTS archives (
id INT UNIQUE AUTO_INCREMENT PRIMARY KEY NOT NULL,
title VARCHAR(150) NOT NULL,
`description` TEXT,
archive_name VARCHAR(255) NOT NULL,
archive_path VARCHAR(255) NOT NULL,
archive_size INT NOT NULL,
published_by INT NOT NULL,
published_in DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT fk_archives_published_by_users FOREIGN KEY(published_by) REFERENCES users(id)
);