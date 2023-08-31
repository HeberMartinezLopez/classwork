INSERT INTO  customers (id, first_name, last_name)
VALUES (1, "Heber", "Martinez"),
       (2, "Aaron", "Martinez"),
       (3, "Cesar", "Martinez");

INSERT INTO customer_order(id, customer_id, order_details)
VALUES (1, 3, "Art Supplies"),
       (2, 1, "Guitar Strings"),
       (3, 2, "God of War 2018");
