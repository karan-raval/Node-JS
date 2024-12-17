const mongoose = require('mongoose')

const connect=()=>{
    mongoose.connect('mongodb+srv://karan:raval@cluster0.howpl.mongodb.net/token?retryWrites=true&w=majority&appName=Cluster0')
    console.log('Database Connected Successfully')
}

module.exports=connect