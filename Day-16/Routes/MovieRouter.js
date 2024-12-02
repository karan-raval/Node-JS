const express =require('express')

const Movierouter= express.Router()


Movierouter.get('/login',(req,res)=>{

    res.render('Login.ejs')
})

Movierouter.get('/signup',(req,res)=>{

    res.render('Signup.ejs')
})


module.exports=Movierouter