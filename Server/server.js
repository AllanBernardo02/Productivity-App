const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello, this is the root endPointss!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
