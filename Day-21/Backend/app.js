const express=require('express')
const connection = require('./Config/server')
const UserRouter = require('./Routes/UserRouter')
const cors=require('cors')
require("dotenv").config()
const app = express()
app.use(cors())
app.use(express.json())
app.use('/',UserRouter)

app.listen(process.env.port,()=>{
    connection()
    console.log(`server running at ${process.env.port} `)
})

