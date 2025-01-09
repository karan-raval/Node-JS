const express = require("express");
const connection = require("./Config/server");
const UserRouter = require("./Routes/UserRoutes");
const ProductCategoryRoute = require("./Routes/ProductCategoryRoutes");
require('dotenv').config()

const app = express()
app.use(express.json())

app.use("/user",UserRouter)
app.use("/product/category", ProductCategoryRoute)

app.listen(process.env.port,()=>{
    console.log(`Port Running on ${process.env.port}`);
    connection()
})