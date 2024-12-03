const express =require('express')

const Movierouter= express.Router()


Movierouter.get('/login',(req,res)=>{

    res.render('Login.ejs')
})

Movierouter.get('/signup',(req,res)=>{

    res.render('Signup.ejs')
})


UserRouter.post("/signup",async(req,res)=>{
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
  try {
      let user = await UserModel.findOne({email : email})
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


module.exports=Movierouter