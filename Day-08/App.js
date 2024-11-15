const express = require("express")
const connect = require('./config/server')
const StudentModel = require('./config/classSchema')

const app =express()

app.use(express.json())


app.post('/addData',async(req,res)=>{
    await StudentModel.create(req.body)
    res.send("User registerd Successfully")
})

app.get("/allData",async(req,res)=>{
    let data =await StudentModel.find()
    res.send(data)
})

app.listen(1000,()=>{
    connect()
    console.log("server is running at 1000")
})

