-- Write your Schema Here -- 
DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;
CREATE TABLE customers(
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30)
);

CREATE TABLE customer_order (
    id INT,
    customer_id INT,
    order_details TEXT,
    FOREIGN KEY(customer_id)
    REFERENCES customers(id)
    ON DELETE CASCADE
);