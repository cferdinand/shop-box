const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/", (req, res) => {
  res.redirect("/products/1");
});

app.use("/products/:productid", express.static("dist"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
