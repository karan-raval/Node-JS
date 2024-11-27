const express =require('express')
const connet = require('./config/server')
const cors =require('cors')
const MovieRouter =require('./Routes/MovieRoutes')
const MovieModel = require('./Model/MovieSchema')
const app=express()

app.use(express.json())
app.use(cors())
app.use('/',MovieRouter)

app.listen(3344,()=>{
    connet()
    console.log('server running at 3344')
})