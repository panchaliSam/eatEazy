const express = require("express");
const cors = require("cors");
const deliveryRoutes = require("./src/routes/DeliveryRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/delivery", deliveryRoutes);

const PORT = process.env.PORT || 4005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
