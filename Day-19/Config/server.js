const mongoose =require('mongoose')

const connect=async()=>{
    await mongoose.connect('mongodb+srv://karan:raval@cluster0.howpl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log('Database is connected successfully')
}

module.exports=connect