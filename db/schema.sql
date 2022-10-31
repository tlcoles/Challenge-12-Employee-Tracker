DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db 
DEFAULT CHARACTER SET utf8 
DEFAULT COLLATE utf8_general_ci;
SET GLOBAL FOREIGN_KEY_CHECKS=0;


USE employees_db;

CREATE TABLE `department` (
    `id` INT NOT NULL,
    `name` VARCHAR(30) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `name_UNIQUE` (`name`)
);

CREATE TABLE `role` (
    `id` INT NOT NULL,
    `title` VARCHAR(30) NOT NULL,
    `salary` DECIMAL(8 , 2 ) NOT NULL,
    `department_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`department_id`)
        REFERENCES `department` (`id`)
        ON DELETE CASCADE
);

CREATE TABLE `employee` (
    `id` INT NOT NULL,
    `first_name` VARCHAR(30) NOT NULL,
    `last_name` VARCHAR(30) NOT NULL,
    `role_id` INT,
    `manager_id` INT DEFAULT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`role_id`)
        REFERENCES `role` (`id`)
        ON DELETE SET NULL,
    FOREIGN KEY (`manager_id`)
        REFERENCES `employee` (`id`)
        ON DELETE SET NULL,
        UNIQUE KEY `id_UNIQUE` (`id`)
);