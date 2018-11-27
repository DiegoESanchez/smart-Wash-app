DROP DATABASE IF EXISTS smartWash;

CREATE DATABASE smartWash;

USE smartWash;

CREATE TABLE orders(
  id int NOT NULL AUTO_INCREMENT,
  lat varchar(10) NOT NULL,
  lon varchar(10) NOT NULL,
  userId int(10) NOT NULL,
  address varchar(100) NOT NULL,
  size varchar(100) NOT NULL,
  specialInd varchar(100) NOT NULL,
  service varchar(100) NOT NULL,
  dates varchar(100) NOT NULL,
  times varchar(10) NOT NULL,
  total int(10) NOT NULL,
  status varchar(20) NOT NULL,
  PRIMARY KEY(ID)
);

INSERT INTO orders (lat, lon, userId, address, size, specialInd, service, dates, times,total,status)
VALUES ("55.930", "-3.118", 2, "calle 2 no. 11", "1-3 kg", "suavitel", "Laundry", "10/30/2018", "11:00 a.m.", 50, "entregada" );

CREATE TABLE users(
  id int NOT NULL AUTO_INCREMENT,
  email varchar(50) NOT NULL,
  userName varchar(50) NOT NULL,
  phone varchar(10) NOT NULL,
  PRIMARY KEY (ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to create the database and the tables.*/

 -- INSERT INTO users (email, userName) VALUES ("anastasio@lelelele.lo", "Anastasio");
