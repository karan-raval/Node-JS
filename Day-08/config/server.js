const mongoose = require("mongoose")

const connect =async()=>{
    await mongoose.connect("mongodb://localhost:27017")
    console.log("Database Connected")
}

module.exports=connect