-- Create the database
CREATE DATABASE IF NOT EXISTS eatEazy;

USE eatEazy;

-- Users Table
CREATE TABLE IF NOT EXISTS Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Firstname VARCHAR(255) NOT NULL,
    Lastname VARCHAR(255) NOT NULL,
    PasswordHash VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Phone VARCHAR(15),
    Role ENUM('Admin', 'Restaurant', 'Customer', 'DeliveryPerson') NOT NULL
);

-- Restaurants Table
CREATE TABLE IF NOT EXISTS Restaurants (
    RestaurantID INT AUTO_INCREMENT PRIMARY KEY,
    OwnerID INT,
    RestaurantName VARCHAR(255) NOT NULL,
    Address TEXT NOT NULL,
    Phone VARCHAR(15),
    Email VARCHAR(255),
    Availability VARCHAR(255) NOT NULL,
    FOREIGN KEY (OwnerID) REFERENCES Users(UserID) ON DELETE SET NULL
);

-- MenuItems Table
CREATE TABLE IF NOT EXISTS MenuItems (
    MenuItemID INT AUTO_INCREMENT PRIMARY KEY,
    RestaurantID INT,
    Name VARCHAR(255) NOT NULL,
    Description TEXT,
    Price DECIMAL(10, 2) NOT NULL,
    IsAvailable BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (RestaurantID) REFERENCES Restaurants(RestaurantID) ON DELETE CASCADE
);

-- Carts Table
CREATE TABLE IF NOT EXISTS Carts (
    CartID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT NOT NULL,
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

-- CartItems Table
CREATE TABLE IF NOT EXISTS CartItems (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    CartID INT NOT NULL,
    MenuItemID INT NOT NULL,
    Quantity INT NOT NULL,
    CONSTRAINT FK_Cart_CartItem FOREIGN KEY (CartID) REFERENCES Carts(CartID) ON DELETE CASCADE,
    CONSTRAINT FK_Menu_CartItem FOREIGN KEY (MenuItemID) REFERENCES MenuItems(MenuItemID) ON DELETE CASCADE
);

-- Orders Table
CREATE TABLE IF NOT EXISTS Orders (
    OrderID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT,
    RestaurantID INT,
    OrderStatus ENUM('Pending', 'Confirmed', 'Preparing', 'Out for Delivery', 'Delivered', 'Cancelled') NOT NULL,
    OrderTotal DECIMAL(10, 2) NOT NULL,
    OrderDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (CustomerID) REFERENCES Users(UserID) ON DELETE CASCADE,
    FOREIGN KEY (RestaurantID) REFERENCES Restaurants(RestaurantID) ON DELETE CASCADE
);

-- OrderDetails Table
CREATE TABLE IF NOT EXISTS OrderDetails (
    OrderDetailID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT,
    MenuItemID INT,
    Quantity INT NOT NULL,
    ItemPrice DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID) ON DELETE CASCADE,
    FOREIGN KEY (MenuItemID) REFERENCES MenuItems(MenuItemID) ON DELETE CASCADE
);

-- Delivery Table
CREATE TABLE IF NOT EXISTS Delivery (
    DeliveryID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT,
    DeliveryPersonID INT,
    AssignedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    DeliveredAt DATETIME,
    DeliveryStatus ENUM('Assigned', 'In Transit', 'Delivered', 'Failed') NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID) ON DELETE CASCADE,
    FOREIGN KEY (DeliveryPersonID) REFERENCES Users(UserID) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS DeliveryRoutes (
    RouteID INT AUTO_INCREMENT PRIMARY KEY,
    DeliveryID INT,
    StartLocation POINT NOT NULL, -- Pickup location (Restaurant)
    EndLocation POINT NOT NULL,   -- Drop-off location (Customer)
    FOREIGN KEY (DeliveryID) REFERENCES Delivery(DeliveryID) ON DELETE CASCADE
);


-- Payments Table
CREATE TABLE IF NOT EXISTS Payments (
    PaymentID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT,
    PaymentMethod ENUM('PayHere', 'Dialog Genie', 'FriMi', 'Stripe', 'PayPal') NOT NULL,
    PaymentStatus ENUM('Pending', 'Completed', 'Failed') NOT NULL,
    TransactionID VARCHAR(255) NOT NULL,
    PaymentDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID) ON DELETE CASCADE
);

-- Notifications Table
CREATE TABLE IF NOT EXISTS Notifications (
    NotificationID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    Message TEXT NOT NULL,
    NotificationDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    IsRead BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

