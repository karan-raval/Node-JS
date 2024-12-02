const express =require('express')

const Movierouter= express.Router()


Movierouter.get('/',(req,res)=>{

    res.render('LoginSignup.ejs')
})

module.exports=Movierouter