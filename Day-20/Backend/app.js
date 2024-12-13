const express=require('express')

const UserRouter = require('./Routes/UserRouter')
const connect = require('./config/server')
const cors=require('cors')
const app=express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/',UserRouter)

app.listen(3333,()=>{
    connect()
    console.log('server running at 3333')
})