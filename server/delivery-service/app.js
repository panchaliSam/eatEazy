const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const POST = process.env.POST || 3000;
app.listen(POST, () => {
  console.log(`Server is running on port ${POST}`);
});
