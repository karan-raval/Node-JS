const mongoose = require('mongoose')
require('dotenv').config()
const connect=()=>{
    mongoose.connect(process.env.mongourl)
    console.log('Database Connected Successfully')
}

module.exports=connect