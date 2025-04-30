-- CreateTable
CREATE TABLE `Restaurants` (
    `RestaurantID` INTEGER NOT NULL AUTO_INCREMENT,
    `OwnerID` INTEGER NULL,
    `RestaurantName` VARCHAR(255) NOT NULL,
    `Address` TEXT NOT NULL,
    `Phone` VARCHAR(15) NULL,
    `Email` VARCHAR(255) NULL,
    `Availability` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`RestaurantID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MenuItems` (
    `MenuItemID` INTEGER NOT NULL AUTO_INCREMENT,
    `RestaurantID` INTEGER NULL,
    `Name` VARCHAR(255) NOT NULL,
    `Description` TEXT NULL,
    `Price` DECIMAL(10, 2) NOT NULL,
    `IsAvailable` BOOLEAN NULL DEFAULT true,

    INDEX `RestaurantID`(`RestaurantID`),
    PRIMARY KEY (`MenuItemID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MenuItems` ADD CONSTRAINT `menuitems_ibfk_1` FOREIGN KEY (`RestaurantID`) REFERENCES `Restaurants`(`RestaurantID`) ON DELETE CASCADE ON UPDATE NO ACTION;
