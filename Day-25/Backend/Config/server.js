const mongoose =require('mongoose')
require('dotenv').config()

const connection = async()=>{
    await mongoose.connect(process.env.mongourl)
    console.log("Database Connected");
    
}

module.exports = connection