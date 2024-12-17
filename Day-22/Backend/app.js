const express =require('express')
const cors=require('cors')
require('dotenv').config()
const connect=require('./Config/Server')
const UserRouter = require('./Routes/UserRouter')
const app=express()

app.use(cors())
app.use(express.json())

app.use('/',UserRouter)

app.listen(process.env.port,()=>{
    connect()
    console.log('server running at 8888')
})