const {Router}=require('express')
const userModel =require('../Model/UserSchema')
const passport = require('passport')
const LocalStratergy =require('passport-local').Strategy

const UserRouter=Router()
passport.use(new LocalStratergy(
    async (username,password,done)=>{
        let user = await userModel.findOne({username})
        if(!user){
            return done(null,false,{msg:"user not register"})
        }
        if(user.password != password){
            return done(null,false,{msg:"incorrect password"})
        }
        return done(null,user)
    }
))

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser(async(id,done)=>{
    let user=await userModel.findById(id)
    done(null,user)
})

UserRouter.get('/',(req,res)=>{
res.render('signup.ejs')
})

UserRouter.post('/',(req,res)=>{
    let data=req.body
})


module.exports=UserRouter