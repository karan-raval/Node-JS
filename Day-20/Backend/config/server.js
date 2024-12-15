const mongoose=require('mongoose')
require('dotenv').config();
const connect = async()=>{
    await mongoose.connect(process.env.db)
    console.log('database conncetd susscessfully')
 }

module.exports=connect