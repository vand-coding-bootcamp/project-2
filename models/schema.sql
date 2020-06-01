DROP DATABASE IF EXISTS sweati_db;
CREATE DATABASE sweati_db;


-- for heroku db

CREATE TABLE sweati_conn (
id INT AUTO_INCREMENT NOT NULL,
description VARCHAR(255),
createdAt TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);