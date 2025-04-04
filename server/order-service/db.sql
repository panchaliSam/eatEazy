DROP DATABASE IF EXISTS food_ordering;
CREATE DATABASE food_ordering;
USE food_ordering;

CREATE TABLE users (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       first_name VARCHAR(50) NOT NULL,
                       last_name VARCHAR(50) NOT NULL,
                       email VARCHAR(100) NOT NULL,
                       phone VARCHAR(20) NOT NULL,
                       auth_provider ENUM('local', 'google') DEFAULT 'local',
                       google_id VARCHAR(100) DEFAULT NULL,
                       role ENUM('customer', 'restaurant_admin', 'delivery_personnel', 'admin') NOT NULL,
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE restaurants (
                             id INT AUTO_INCREMENT PRIMARY KEY,
                             name VARCHAR(100) NOT NULL,
                             description TEXT,
                             address VARCHAR(255),
                             phone VARCHAR(20),
                             email VARCHAR(100),
                             owner_id INT,
                             availability BOOLEAN DEFAULT TRUE,
                             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                             updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                             CONSTRAINT fk_restaurant_owner FOREIGN KEY (owner_id) REFERENCES users(id)
) ENGINE=InnoDB;

CREATE TABLE addresses (
                           id INT AUTO_INCREMENT PRIMARY KEY,
                           user_id INT NOT NULL,
                           address_line1 VARCHAR(255) NOT NULL,
                           address_line2 VARCHAR(255),
                           city VARCHAR(100),
                           state VARCHAR(100),
                           postal_code VARCHAR(20),
                           country VARCHAR(100),
                           latitude DECIMAL(10,8) DEFAULT NULL,
                           longitude DECIMAL(11,8) DEFAULT NULL,
                           CONSTRAINT fk_address_user FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB;

CREATE TABLE menu_items (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            restaurant_id INT NOT NULL,
                            name VARCHAR(100) NOT NULL,
                            description TEXT,
                            price DECIMAL(10,2) NOT NULL,
                            availability BOOLEAN DEFAULT TRUE,
                            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                            CONSTRAINT fk_menu_restaurant FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
) ENGINE=InnoDB;

CREATE TABLE carts (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       customer_id INT NOT NULL,
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                       CONSTRAINT fk_cart_customer FOREIGN KEY (customer_id) REFERENCES users(id)
) ENGINE=InnoDB;

CREATE TABLE cart_items (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            cart_id INT NOT NULL,
                            menu_item_id INT NOT NULL,
                            quantity INT NOT NULL,
                            CONSTRAINT fk_cart_cartitem FOREIGN KEY (cart_id) REFERENCES carts(id) ON DELETE CASCADE,
                            CONSTRAINT fk_menu_cartitem FOREIGN KEY (menu_item_id) REFERENCES menu_items(id)
) ENGINE=InnoDB;

CREATE TABLE orders (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        customer_id INT NOT NULL,
                        restaurant_id INT NOT NULL,
                        total_amount DECIMAL(10,2) NOT NULL,
                        status ENUM('pending', 'confirmed', 'preparing', 'out_for_delivery', 'delivered', 'cancelled') DEFAULT 'pending',
                        order_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        delivery_time TIMESTAMP NULL,
                        CONSTRAINT fk_order_customer FOREIGN KEY (customer_id) REFERENCES users(id),
                        CONSTRAINT fk_order_restaurant FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
) ENGINE=InnoDB;

CREATE TABLE order_items (
                             id INT AUTO_INCREMENT PRIMARY KEY,
                             order_id INT NOT NULL,
                             menu_item_id INT NOT NULL,
                             quantity INT NOT NULL,
                             price DECIMAL(10,2) NOT NULL,
                             CONSTRAINT fk_orderitem_order FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
                             CONSTRAINT fk_orderitem_menu FOREIGN KEY (menu_item_id) REFERENCES menu_items(id)
) ENGINE=InnoDB;

CREATE TABLE deliveries (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            order_id INT NOT NULL,
                            delivery_person_id INT,
                            status ENUM('assigned', 'picked_up', 'in_transit', 'delivered') DEFAULT 'assigned',
                            assigned_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                            delivered_time TIMESTAMP NULL,
                            CONSTRAINT fk_delivery_order FOREIGN KEY (order_id) REFERENCES orders(id),
                            CONSTRAINT fk_delivery_person FOREIGN KEY (delivery_person_id) REFERENCES users(id)
) ENGINE=InnoDB;

CREATE TABLE card_details (
                              id INT AUTO_INCREMENT PRIMARY KEY,
                              user_id INT NOT NULL,
                              card_holder_name VARCHAR(100) NOT NULL,
                              card_number VARCHAR(20) NOT NULL,  -- Should be stored securely (encrypted/tokenized)
                              card_last4 VARCHAR(4) NOT NULL,
                              card_type VARCHAR(50),
                              expiry_month INT NOT NULL,
                              expiry_year INT NOT NULL,
                              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                              updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                              CONSTRAINT fk_card_user FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB;

CREATE TABLE payments (
                          id INT AUTO_INCREMENT PRIMARY KEY,
                          order_id INT NOT NULL,
                          payment_method ENUM('PayHere', 'COD') NOT NULL,
                          payment_status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
                          transaction_id VARCHAR(100),
                          amount DECIMAL(10,2) NOT NULL,
                          card_detail_id INT DEFAULT NULL,
                          payment_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                          CONSTRAINT fk_payment_order FOREIGN KEY (order_id) REFERENCES orders(id),
                          CONSTRAINT fk_payment_card FOREIGN KEY (card_detail_id) REFERENCES card_details(id)
) ENGINE=InnoDB;

CREATE TABLE notifications (
                               id INT AUTO_INCREMENT PRIMARY KEY,
                               user_id INT NOT NULL,
                               order_id INT,
                               notification_type ENUM('order_confirmation', 'delivery_update', 'payment_confirmation') NOT NULL,
                               message TEXT,
                               sent_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                               CONSTRAINT fk_notification_user FOREIGN KEY (user_id) REFERENCES users(id),
                               CONSTRAINT fk_notification_order FOREIGN KEY (order_id) REFERENCES orders(id)
) ENGINE=InnoDB;

CREATE TABLE otp_verifications (
                                   id INT AUTO_INCREMENT PRIMARY KEY,
                                   user_id INT NOT NULL,
                                   otp_code VARCHAR(10) NOT NULL,
                                   contact_method ENUM('email', 'phone') NOT NULL,
                                   expires_at TIMESTAMP NOT NULL,
                                   verified BOOLEAN DEFAULT FALSE,
                                   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                   CONSTRAINT fk_otp_user FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB;

CREATE TABLE delivery_locations (
                                    id INT AUTO_INCREMENT PRIMARY KEY,
                                    delivery_id INT NOT NULL,
                                    latitude DECIMAL(10,8) NOT NULL,
                                    longitude DECIMAL(11,8) NOT NULL,
                                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                                    CONSTRAINT fk_delivery_location FOREIGN KEY (delivery_id) REFERENCES deliveries(id)
) ENGINE=InnoDB;