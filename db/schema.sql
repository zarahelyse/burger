/* Create and use the burgers_db db */
DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;

/* Create a table for all your burgers */
CREATE TABLE `burgers` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`burger_name` VARCHAR( 255) NOT NULL,
	`devoured` VARCHAR( 255 ) NOT NULL,
	`role` BOOLEAN NOT NULL,
	PRIMARY KEY ( `id` )
);