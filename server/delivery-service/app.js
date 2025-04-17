const express = require("express");
const cors = require("cors");
const deliveryRoutes = require("./src/routes/DeliveryRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/delivery", deliveryRoutes);

const POST = process.env.POST || 3000;
app.listen(POST, () => {
  console.log(`Server is running on port ${POST}`);
});
