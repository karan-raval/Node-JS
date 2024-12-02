const express =require('express')
const connect =require('./config/db')
const app=express()

app.listen(3122,()=>{
    connect()
    console.log('server running at 3122')
})