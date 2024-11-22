const mongoose =require('mongoose')

const conncet =async()=>{
    await mongoose.connect("mongodb://localhost:27017/")
    console.log('database conncetd susscessfully')
}

module.exports=conncet