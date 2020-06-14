const express = require("express");
const apidb = require("./apidb");
const users = require("./users");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
const path = require("path");

const app = express();

app.use("/", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-type");
  next();
});

app.use(bodyParser.json());

app.use("/users", users);

app.use("/posts", apidb);

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// if(process.env.NODE_ENV === 'production'){

// }

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});