-- drpos if already existing and then creates the database
DROP DATABASE IF EXISTS workers_db;
CREATE DATABASE workers_db;
USE workers_db;
-- table in db to store department names
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);
-- table in db to store employees
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(30),
    lastName VARCHAR(30),
);
-- table in db for role
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary VARCHAR(30)
)