const express = require("express");
const connection = require("./Config/server");
const UserRouter = require("./Routes/UserRoutes");
const SubCategoryRoute = require("./Routes/SubCategoryRoutes");
const CategoryRoute = require("./Routes/categoryRoutes");
require('dotenv').config()
const cors=require('cors');

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/user",UserRouter)
app.use("/", CategoryRoute)
app.use("/",SubCategoryRoute)

app.listen(process.env.port,()=>{
    console.log(`Port Running on ${process.env.port}`);
    connection()
})