require("dotenv").config();

module.exports = {
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DATABASE_URL: process.env.DATABASE_URL,
  DB_NAME: process.env.DB_NAME,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRATION: process.env.JWT_EXPIRATION,
  AUTH_SERVICE_PORT: process.env.AUTH_SERVICE_PORT,
  AUTH_SERVICE_URL: process.env.AUTH_SERVICE_URL,
  AUTH_SERVICE_URL: process.env.AUTH_SERVICE_URL,
};
