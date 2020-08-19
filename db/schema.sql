CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

DROP TABLE IF EXISTS burgers;

-- The table that will contain all of the burgers that the user decides upon
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY (id)
);
