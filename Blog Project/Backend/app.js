const express = require('express')
const cors=require('cors')
const connet = require('./Config/server')
const UserRouter = require('./Routes/UserRoutes')
require('dotenv').config()

const app=express()
app.use(express.json())
app.use(cors())

app.use('/',UserRouter)



app.listen(process.env.port,()=>{
    connet()
    console.log(`server running at ${process.env.port}`);
    
})