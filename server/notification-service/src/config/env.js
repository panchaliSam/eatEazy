require('dotenv').config();

module.exports = {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRATION: process.env.JWT_EXPIRATION,
    REFRESH_TOKEN_EXPIRATION: process.env.REFRESH_TOKEN_EXPIRATION,
    NOTIFICATION_SERVICE_PORT: process.env.NOTIFICATION_SERVICE_PORT,
    SERVICE_API_KEY: process.env.SERVICE_API_KEY,
    API_GATEWAY_URL: process.env.API_GATEWAY_URL,
};
