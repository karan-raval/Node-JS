const express=require('express')

const app=express()

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))



app.listen(2902,()=>{
    console.log('Server Runnig at 2902')
})