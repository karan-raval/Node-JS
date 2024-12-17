const express =require('express')
const cors=require('cors')
const app=express()


app.use(cors())

app.listen(8888,()=>{
    console.log('server running at 8888')
})