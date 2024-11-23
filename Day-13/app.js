const express = require("express");
const app = express();
const connect = require("./config/server");

app.set("view engine",'ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.listen(3333, () => {
  connect();
  console.log("server started at 3333");
});
