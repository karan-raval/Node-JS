const mongoose =require('mongoose')

const connect = async()=>{
    await mongoose.connect("mongodb://localhost:27017/karan/BookStore")
    console.log("Database is connected successfully !!!")
}


module.exports = connect