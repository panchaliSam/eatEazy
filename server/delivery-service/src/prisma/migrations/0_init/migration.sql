-- CreateTable
CREATE TABLE `delivery` (
    `DeliveryID` INTEGER NOT NULL AUTO_INCREMENT,
    `OrderID` INTEGER NOT NULL,
    `DeliveryPersonID` INTEGER NULL,
    `AssignedAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `DeliveredAt` DATETIME(0) NULL,
    `DeliveryStatus` ENUM('Assigned', 'In Transit', 'Delivered', 'Failed') NOT NULL,

    UNIQUE INDEX `delivery_OrderID_key`(`OrderID`),
    PRIMARY KEY (`DeliveryID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `deliveryroutes` (
    `RouteID` INTEGER NOT NULL AUTO_INCREMENT,
    `DeliveryID` INTEGER NOT NULL,
    `StartLocation` LONGBLOB NOT NULL,
    `EndLocation` LONGBLOB NOT NULL,

    UNIQUE INDEX `deliveryroutes_DeliveryID_key`(`DeliveryID`),
    PRIMARY KEY (`RouteID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `UserID` INTEGER NOT NULL AUTO_INCREMENT,
    `Firstname` VARCHAR(255) NOT NULL,
    `Lastname` VARCHAR(255) NOT NULL,
    `Phone` VARCHAR(15) NULL,
    `Role` ENUM('Admin', 'Restaurant', 'Customer', 'DeliveryPerson') NOT NULL,

    PRIMARY KEY (`UserID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

