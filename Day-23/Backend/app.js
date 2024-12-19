const express =require('express')
const cors=require('cors')
const  connect  = require('./Config/server')
require('dotenv').config()
const UserRouter=require('./Routes/UserRouter')

const app=express()
app.use(cors())

app.use('/',UserRouter)



app.listen(process.env.port,()=>{
    connect()
console.log(`Server Running at ${process.env.port}`)
})