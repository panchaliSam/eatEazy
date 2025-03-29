require('dotenv').config();

module.exports = {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    AUTH_SERVICE_PORT: process.env.AUTH_SERVICE_PORT,
    RESTAURANT_SERVICE_PORT: process.env.RESTAURANT_SERVICE_PORT,
};
