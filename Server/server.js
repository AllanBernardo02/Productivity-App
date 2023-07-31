const express = require("express");
const app = express();
const port = 5000;
require("dotenv").config();

const userRoutes = require("./routes/user.js");

const dbConfig = require("./config/dbConfig");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, this is the root endPointss!");
});

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
