const express =require('express')
const connet = require('./config/server')

const app=express()

app.listen(3344,()=>{
    connet()
    console.log('server running at 3344')
})