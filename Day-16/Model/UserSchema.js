const mongoose =('mongoose')

const UserSchema=mongoose.schema({
    username:{type:String},
    email:{type:String,require:true},
    password:{type:String,require:true},
    type:{type:String,default:"user"},
})
module.exports=UserSchema