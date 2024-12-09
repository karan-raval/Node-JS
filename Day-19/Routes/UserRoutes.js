const {Router}=require('express')

const UserRouter=Router()

UserRouter.get('/',(req,res)=>{
res.render('signup.ejs')
})
UserRouter.post('/',(req,res)=>{
    let data=req.body
    
})

module.exports=UserRouter