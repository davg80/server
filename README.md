# API-rest full

## Install EXPRESS
```
npm install express --save
```
## Installa nodemon on global
```
npm install -g nodemon
```

## TABLES
users && messages
CREATE TABLE `users` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`email` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
	`username` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
	`password` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_general_ci',
	`bio` TEXT NULL,
	`isAdmin` TINYINT NOT NULL DEFAULT 0 COLLATE 'utf8mb4_general_ci',
	PRIMARY KEY (`id`)
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
;

CREATE TABLE `messages` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
	`content` TEXT NOT NULL COLLATE 'utf8mb4_general_ci',
	`attachment` VARCHAR(120) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`likes` INT(11) NOT NULL DEFAULT '0',
	`id_user` INT NULL,
	PRIMARY KEY (`id`) USING BTREE,
	CONSTRAINT `FK_messages_users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
;

## ORM 
_(administrator)_
```
npm install -g sequelize
```
_install ORM for project_
```
npm install --save -dev sequelize
```
_install de mySQL_
```
npm install mysql --save
```
_initialize sequelize_
```
sequelize init
```
## Create attribute for sequelize for users table
```
sequelize model:create --attributes "email:string username:string password:string bio:string isAdmin:boolean" --name User
```
## Create attribute for sequelize for message table
```
sequelize model:create --attributes "title:string content:string attachment:string likes:integer id_user:integer" --name Message
```
## Create database
```
 npm install mysql2
```
## Add Columns
```
sequelize db:migrate
```