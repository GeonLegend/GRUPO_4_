CREATE DATABASE TechSmart;
USE TechSmart;

CREATE TABLE user_type(
	id				bigint unsigned not null auto_increment,
    name 			varchar(80) not null,
    description		varchar(240) not null,
	primary key(id)
);

CREATE TABLE users(
	id				bigint unsigned not null auto_increment,
    first_name		varchar(120) not null,
    last_name 		varchar(80) not null,
    password 		varchar(200) not null,
    email 			varchar(120) not null,
    gender 			varchar(1)	not null,
    country 		varchar(80) not null,
    date_of_birth	date not null,
    avatar			varchar(80) not null,
    id_user_type	bigint unsigned default 2,
    primary key(id),
    foreign key(id_user_type) references user_type(id)
);

CREATE TABLE category(
	id				bigint unsigned not null auto_increment,
    name			varchar(80) not null,
    description		varchar(600),
    primary key(id)
);

CREATE TABLE product_features(
	id 				bigint unsigned not null auto_increment,
    brand			varchar(300) not null,
    stock			int unsigned not null default 0,
    description 	varchar(1800) not null,
	warranty		int not null default 0, 
    rating 			float unsigned not null,
    primary key(id)
);

CREATE TABLE products(
	id 				bigint unsigned not null auto_increment,
    id_category		bigint unsigned not null,
    id_product_features bigint unsigned not null,
    name 			varchar(120) not null,
    price 			float not null,
    discount 		int unsigned default 0,
    image				varchar(300) not null,
    primary key(id),
    foreign key(id_category) references category(id),
    foreign key(id_product_features) references product_features(id)
);

CREATE TABLE user_product(
	id 				bigint unsigned not null auto_increment,
    id_user			bigint unsigned not null,
    id_product 		bigint unsigned not null,
    date			date not null,
    primary key(id),
    foreign key(id_user) references users(id),
    foreign key(id_product) references products(id)
);

CREATE TABLE orders(
	id 				bigint unsigned not null auto_increment,
    id_product 		bigint unsigned not null,
    stock 			int unsigned not null,
    total_price		float unsigned not null,
    method_of_pay 	varchar(120) not null,
    status 			varchar(30) not null,
    date			date not null,
    address			varchar(240) not null,
    primary key(id),
    foreign key(id_product) references products(id)
);

CREATE TABLE cart(
	id 				bigint unsigned not null auto_increment,
    id_user			bigint unsigned not null,
    id_order		bigint unsigned not null,
    primary key(id),
    foreign key(id_user) references users(id),
    foreign key(id_order) references orders(id)
);

CREATE TABLE sales(
	id 				bigint unsigned not null auto_increment,
    id_cart			bigint unsigned not null,
    date			date not null,
    primary key(id),
    foreign key(id_cart) references cart(id)
);








