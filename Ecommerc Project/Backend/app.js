const express = require("express");
const connection = require("./Config/server");
const UserRouter = require("./Routes/UserRoutes");
const ProductCategoryRoute = require("./Routes/ProductCategoryRoutes");
require('dotenv').config()
const cors=require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.use("/user",UserRouter)
app.use("/category", ProductCategoryRoute)

app.listen(process.env.port,()=>{
    console.log(`Port Running on ${process.env.port}`);
    connection()
})