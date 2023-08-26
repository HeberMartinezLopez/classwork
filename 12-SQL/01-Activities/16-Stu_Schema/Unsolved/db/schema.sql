-- Write your schema here --
DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;
USE inventory_db;

CREATE TABLE products(
    id INT PRIMARY KEY,
    product_name VARCHAR(30) NOT NULL,
    category_name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    in_stock BOOLEAN NOT NULL
);
CREATE TABLE categories(
    id INT PRIMARY KEY,
    category_name VARCHAR(30)
);
