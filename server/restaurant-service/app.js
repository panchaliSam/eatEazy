const express = require("express");
const restaurantRoutes = require("./src/routes/restaurantRoutes");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.RESTAURANT_SERVICE_PORT || 4002;

app.use("/", restaurantRoutes);

app.get("/", (req, res) => {
  res.send("Restaurant Service is running!");
});

app.listen(PORT, () => {
  console.log(`Restaurant Service is running on port ${PORT}`);
});
