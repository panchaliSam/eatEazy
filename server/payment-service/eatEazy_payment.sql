CREATE DATABASE IF NOT EXISTS eatEazy_payment;
USE eatEazy_payment;

CREATE TABLE IF NOT EXISTS Payments (
    PaymentID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT NOT NULL,
    Amount DECIMAL(10, 2) NOT NULL,
    PaymentMethod ENUM('PayHere', 'Dialog Genie', 'FriMi', 'Stripe', 'PayPal') NOT NULL,
    PaymentStatus ENUM('Pending', 'Completed', 'Failed') NOT NULL,
    TransactionID VARCHAR(255) NOT NULL,
    PaymentDate DATETIME DEFAULT CURRENT_TIMESTAMP
    -- ⚠️ No foreign key to Orders (since it's in a different service)
);

