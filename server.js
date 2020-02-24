const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config/database");

const app = express();

//Body parser Midlleware parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to local db");
});

const items = require("./router/api/item");
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, err => {
  err ? console.log(err) : console.log(`Server running on port: ${port}`);
});
