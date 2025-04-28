-- Create Payment Database
CREATE DATABASE IF NOT EXISTS eateazy;
USE eateazy;

-- Payments Table
CREATE TABLE IF NOT EXISTS Payments (
    PaymentID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT NOT NULL,
    UserID INT NOT NULL, -- ADDED: UserID to link payment to a user
    Amount DECIMAL(10, 2) NOT NULL,
    -- UPDATED: PaymentMethod enum to include required methods
    PaymentMethod ENUM('PayHere', 'Dialog Genie', 'FriMi', 'Stripe', 'PayPal') NOT NULL,
    PaymentStatus ENUM('Pending', 'Completed', 'Failed', 'Refunded') NOT NULL, -- Added Refunded status
    TransactionID VARCHAR(255) NULL, -- Made nullable, might not be available immediately
    PaymentDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Consistent timestamps
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    -- ⚠️ No foreign key to Orders (since it's in a different service)
    -- ⚠️ No foreign key to Users (assuming user management is in another service)
);

-- Consider adding indexes for performance
CREATE INDEX idx_payments_orderid ON Payments (OrderID);
CREATE INDEX idx_payments_userid ON Payments (UserID);
CREATE INDEX idx_payments_status ON Payments (PaymentStatus);
