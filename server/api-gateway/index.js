require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(cors());
app.use(helmet());
app.disable("x-powered-by");

const services = {
    auth: process.env.AUTH_SERVICE_URL,
    restaurant: process.env.RESTAURANT_SERVICE_URL,
};

app.use("/auth", createProxyMiddleware({
    target: services.auth,
    changeOrigin: true,
}));

app.use("/restaurants", createProxyMiddleware({
    target: services.restaurant,
    changeOrigin: true,
}));

app.get("/", (req, res) => {
    res.send("API Gateway is running...");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
});
