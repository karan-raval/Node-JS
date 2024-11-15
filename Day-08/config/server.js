const mongoose = require("mongoose")

const connect =async()=>{
    await mongoose.connect("link")
    console.log("Database Connected")
}

module.exports=connect