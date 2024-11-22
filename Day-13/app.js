const express = require("express");
const app = express();
const connect = require("./config/server");

app.listen(3333, () => {
  connect();
  console.log("server started at 3333");
});
