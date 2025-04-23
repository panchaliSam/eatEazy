require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(cors());
app.use(helmet());
app.disable("x-powered-by");

app.use(express.urlencoded({ extended: true }));

const services = {
  auth: process.env.AUTH_SERVICE_URL,
  restaurant: process.env.RESTAURANT_SERVICE_URL,
  orders: process.env.ORDER_SERVICE_URL,
  notifications: process.env.NOTIFICATION_SERVICE_URL,
  payments: process.env.PAYMENT_SERVICE_URL,
  delivery: process.env.DELIVERY_SERVICE_URL,
};

app.use(
  "/auth",
  createProxyMiddleware({
    target: services.auth,
    changeOrigin: true,
  })
);

app.use(
  "/restaurants",
  createProxyMiddleware({
    target: services.restaurant,
    changeOrigin: true,
  })
);

app.use(
  "/orders",
  createProxyMiddleware({
    target: services.orders,
    changeOrigin: true,
  })
);

app.use(
  "/notifications",
  createProxyMiddleware({
    target: services.notifications,
    changeOrigin: true,
  })
);

app.use(
  "/payments",
  createProxyMiddleware({
    target: services.payments,
    changeOrigin: true,
  })
);

app.use(
  "/delivery",
  createProxyMiddleware({
    target: services.delivery,
    changeOrigin: true,
  })
);

app.get("/", (req, res) => {
  res.send("API Gateway is running...");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});
