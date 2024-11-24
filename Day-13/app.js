const express = require("express");
const connect = require("./config/server");
const BookRouter=require('./Routes/bookRoutes')
const app = express();

app.set("view engine",'ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.use("/book",BookRouter)
// app.use("/user",UserRoute)


app.listen(3333, () => {
  connect();
  console.log("server started at 3333");
});
