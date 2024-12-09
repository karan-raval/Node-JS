const express=require('express')
const UserRouter = require('./Routes/UserRoutes')
const connect =require('./Config/server')

const app=express()

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))


app.use('/user',UserRouter)



app.listen(2902,()=>{
    connect()
    console.log('Server Runnig at 2902')
})