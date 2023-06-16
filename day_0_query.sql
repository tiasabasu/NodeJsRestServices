CREATE DATABASE capita_greendb;

CREATE USER 'root'@'172.17.0.1' IDENTIFIED  BY 'capita';
GRANT ALL PRIVILEGES ON capita_greendb.*  TO 'root'@'localhost';
GRANT ALL PRIVILEGES ON capita_greendb.* TO 'root'@'172.17.0.1';
CREATE USER 'root'@'%' IDENTIFIED BY 'capita';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'172.30.39.245' WITH GRANT OPTION;
ALTER USER 'root'@'172.30.39.245' IDENTIFIED WITH mysql_native_password BY 'capita';

FLUSH PRIVILEGES;

CREATE TABLE capita_greendb.provider_detail
   (	pincode int NOT NULL, 
	Provider_Name VARCHAR(50) NOT NULL , 
	Contact_No VARCHAR(20) , 
	Rating_in_5 float(2,1),
	PRIMARY KEY (pincode, Provider_Name)
	); 
	
