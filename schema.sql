create database yardsales;
use yardsales;

create 'users' (
     `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
    'user_name' VARCHAR(255) NOT NULL,
    'user-email' VARCHAR(255) NOT NULL,
    'user-password' VARCHAR(255) NOT NULL,
    'user-address' VARCHAR(255) NOT NULL,
    'yardsale title' VARCHAR(255),
    PRIMARY KEY 'id'
);

create 'yardsale_item' (
    'categories' VARCHAR(255) NOT NULL,
    'type' VARCHAR(255) NOT NULL,
    'description' VARCHAR(255),
    'price' FLOAT,
    'id' INT(11) NOT NULL,
    'image' BLOB, 
    SECONDARY key 'id'
)