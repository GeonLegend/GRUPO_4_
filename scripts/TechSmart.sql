DROP DATABASE IF EXISTS techsmart;
CREATE DATABASE TechSmart;
USE TechSmart;

CREATE TABLE users_types(
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
    avatar			varchar(80) not null,
    id_user_type	bigint unsigned default 3,
    primary key(id),
    foreign key(id_user_type) references users_types(id)
);

CREATE TABLE categories(
	id				bigint unsigned not null auto_increment,
    name			varchar(80) not null,
    description		varchar(600),
    primary key(id)
);

/*
CREATE TABLE subcategories(
	id 				bigint unsigned not null auto_increment,
    id_category		bigint unsigned not null,
    name			varchar(80) not null,
    description		varchar(600),
    primary key(id),
    foreign key(id_category) references categories(id)
);
*/
CREATE TABLE products_features(
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
    image				varchar(300) not null default "default.png",
    primary key(id),
    foreign key(id_category) references categories(id),
    foreign key(id_product_features) references products_features(id)
);

CREATE TABLE users_products(
	id 				bigint unsigned not null auto_increment,
    id_user			bigint unsigned not null,
    id_product 		bigint unsigned not null,
    date			date not null,
    primary key(id),
    foreign key(id_user) references users(id),
    foreign key(id_product) references products(id)
);

CREATE TABLE carts(
	id 				bigint unsigned not null auto_increment,
    id_user			bigint unsigned not null,
    status 			bool not null,
    primary key(id),
    foreign key(id_user) references users(id)
);

CREATE TABLE carts_products(
	id				bigint unsigned not null auto_increment,
    id_product		bigint unsigned not null,
    id_cart			bigint unsigned not null,
    number			int unsigned not null,
    primary key(id),
    foreign key(id_product) references products (id),
    foreign key(id_cart) references carts (id)
);




