require('dotenv').config();

module.exports = {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    AUTH_SERVICE_PORT: process.env.AUTH_SERVICE_PORT,
    PAYMENT_SERVICE_PORT: process.env.PAYMENT_SERVICE_PORT,
    PAYHERE_MERCHANT_ID: process.env.PAYHERE_MERCHANT_ID,
    PAYHERE_MERCHANT_SECRET: process.env.PAYHERE_MERCHANT_SECRET
};