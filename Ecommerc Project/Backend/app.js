const express = require("express");
const connection = require("./Config/server");
const UserRouter = require("./Routes/UserRoutes");
const CategoryRoute = require("./Routes/CategoryRoutes");
require('dotenv').config()
const cors=require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.use("/user",UserRouter)
app.use("/", CategoryRoute)
app.use("/",SubCategoryRoutes)

app.listen(process.env.port,()=>{
    console.log(`Port Running on ${process.env.port}`);
    connection()
})