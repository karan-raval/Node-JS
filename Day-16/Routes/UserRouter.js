const express =require('express')
const UserSchema = require('../Model/UserSchema')
const UserModel = require('../Model/UserSchema')

const UserRouter= express.Router()


UserRouter.get('/login',(req,res)=>{

    res.render('Login.ejs')
})

UserRouter.get('/signup',(req,res)=>{

    res.render('Signup.ejs')
})

UserRouter.post("/signup",async(req,res)=>{
    // const{usename,email,password}=req.body
    const data = req.body;
  try {
       let a = new UserModel(data)
       await a.save()
       return res.redirect("/login")
  } catch (error) {
      res.status(401).json({msg : error.message})
  }
})

UserRouter.post("/login",async(req,res)=>{
    const {email,password}  = req.body
    console.log(email,password)
  try {
      let user = await UserModel.findOne({email : email})
      console.log(user)
      if(!user){
        return res.status(401).json({msg : "Email is Not Registered"})
      }
      if(user.password != password){
          return res.status(401).json({msg : "Password Incorrect"})
      }
      res.status(200).json({msg : "User Login Successfully"})
  } catch (error) {
      res.status(401).json({msg : error.message})
  }
})


module.exports=UserRouter