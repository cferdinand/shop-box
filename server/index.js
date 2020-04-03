const express = require("express");
const compression = require("compression");
const app = express();
const path = require("path");
const port = 3000;

app.use(compression());

app.use("/products/:productid", express.static("dist"));

app.get("/", (req, res) => {
  res.redirect("/products/4");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
