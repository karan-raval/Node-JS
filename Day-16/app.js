const express =require('express')
const connect =require('./config/db')
const Movierouter = require('./Routes/MovieRouter')
const app=express()

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.use('/',Movierouter)

app.listen(3122,()=>{
    connect()
    console.log('server running at 3122')
})