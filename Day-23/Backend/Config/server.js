const mongoose=require('mongoose')
require=('dotenv').config()
const connet=()=>{
    mongoose.connect(process.env.mongourl)
}

module.exports=connet