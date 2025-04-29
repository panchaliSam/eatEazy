-- Create the database
CREATE DATABASE eatEazy_users;

-- Use the created database
USE eatEazy_users;

-- Create the Users table
CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Firstname VARCHAR(255) NOT NULL,
    Lastname VARCHAR(255) NOT NULL,
    PasswordHash VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Phone VARCHAR(15),
    Role ENUM('Admin', 'Restaurant', 'Customer', 'DeliveryPerson') NOT NULL
);

-- Create the RefreshTokens table
CREATE TABLE RefreshTokens (
    TokenID INT AUTO_INCREMENT PRIMARY KEY,
    Token VARCHAR(255) NOT NULL UNIQUE,
    UserID INT NOT NULL,
    ExpiresAt DATETIME NOT NULL,
    CreatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
