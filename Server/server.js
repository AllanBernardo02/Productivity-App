const express = require("express");

const app = express();
const port = 5000;
require("dotenv").config();

const dbConfig = require("./config/dbConfig");

app.get("/", (req, res) => {
  res.send("Hello, this is the root endPointss!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
