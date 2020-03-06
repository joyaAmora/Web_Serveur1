const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "pug")

app.use("/", routes)

app.listen(3000)