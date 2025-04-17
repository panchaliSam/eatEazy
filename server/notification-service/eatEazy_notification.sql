-- Create Notification Database
CREATE DATABASE IF NOT EXISTS eatEazy_notification;
USE eatEazy_notification;

-- Notifications Table
CREATE TABLE IF NOT EXISTS Notifications (
    NotificationID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT NOT NULL,
    Message TEXT NOT NULL,
    Channel ENUM('SMS', 'Email', 'InApp') DEFAULT 'InApp',
    NotificationType VARCHAR(100),  -- e.g., orderConfirmation, paymentSuccess
    NotificationDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    IsRead BOOLEAN DEFAULT FALSE
);
