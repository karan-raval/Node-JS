const express=require('express')
const connection = require('./Config/server')
require("dotenv").config()
const app = express()

app.listen(process.env.port,()=>{
    connection()
    console.log(`server running at ${process.env.port} `)
})

