DROP DATABASE IF EXISTS grocery_db;
CREATE DATABASE grocery_db;

USE grocery_db;

DROP TABLE IF EXISTS products;
CREATE TABLE products(
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(30) NOT NULL,
  category_name VARCHAR(30) NOT NULL
);
