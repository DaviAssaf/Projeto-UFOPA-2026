CREATE TABLE IF NOT EXISTS users (
id int primary key auto_increment not null unique,
`name` varchar(70) not null,
email varchar(100) not null unique,
`password` varchar(255) not null,
`level` tinyint not null default 0,
created_at datetime not null default CURRENT_TIMESTAMP,
updated_at DATETIME NOT NULL
);