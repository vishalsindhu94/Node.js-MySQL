DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(6,2) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL DEFAULT 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Spalding NBA Hexagrip Soft Grip NeverFlat Basketball", "Sports", 24.99, 20),
       ("Apple iPhone 7, GSM Unlocked, 32GB - Black (Refurbished)", "Electronics", 254.53, 5),
       ("Stylife® Mini Inflatable Football 7.5Inch","Sports",8.99, 20),
       ("Wilson NFL Super Grip Football","Sports",12.00, 20),
       ("Tachikara SV5WSC Sensi Tec Composite High Performance Volleyball","Sports",36.99, 20),
       ("Nike Men's Hyperdunk 2016 Low Basketball Shoe","Shoes",58.72, 15),
       ("Nike Lebron Xv Low Mens Basketball Trainers Ao1755 Sneakers Shoes","Shoes", 141.12, 15),
       ("PlayStation 4 Slim 1TB Console","Video Games", 299.99, 4),
       ("Xbox One S 1TB Console - Battlefield V Bundle","Video Games",239.99, 4),
       ("Nintendo Switch - Gray Joy-Co","Video Games",268.72,4);


);

