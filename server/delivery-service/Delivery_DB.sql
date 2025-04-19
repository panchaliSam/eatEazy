-- Drop and Create the delivery-specific database
DROP DATABASE IF EXISTS eatEazy_delivery;
CREATE DATABASE eatEazy_delivery;
USE eatEazy_delivery;

-- Delivery Table
CREATE TABLE IF NOT EXISTS Delivery (
    DeliveryID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT NOT NULL,  -- This refers to the order in the Order Service
    DeliveryPersonID INT,  -- Refers to a user with DeliveryPerson role
    AssignedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    DeliveredAt DATETIME,
    DeliveryStatus ENUM('Assigned', 'In Transit', 'Delivered', 'Failed') NOT NULL
);

-- DeliveryRoutes Table
CREATE TABLE IF NOT EXISTS DeliveryRoutes (
    RouteID INT AUTO_INCREMENT PRIMARY KEY,
    DeliveryID INT UNIQUE,
    StartLocation POINT NOT NULL,  -- Pickup (restaurant)
    EndLocation POINT NOT NULL,    -- Drop-off (customer)
    FOREIGN KEY (DeliveryID) REFERENCES Delivery(DeliveryID) ON DELETE CASCADE
);

-- Optional: Indexes for geospatial queries (if needed)
CREATE SPATIAL INDEX idx_start_location ON DeliveryRoutes (StartLocation);
CREATE SPATIAL INDEX idx_end_location ON DeliveryRoutes (EndLocation);
