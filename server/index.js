const express = require("express");
const compression = require("compression");
const path = require("path");
const app = express();
const port = 3000;

app.use(compression());

app.use(
  "/products/:productid",
  express.static(path.join(__dirname, "/../client/dist"), {
    maxAge: 1,
    index: false
  })
);

app.get("/", (req, res) => {
  res.redirect("/products/4");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
