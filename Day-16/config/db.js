 const mongoose =('mongoose')

 const connect = async()=>{
    await mongoose.connect('mongodb+srv://karan:raval@cluster0.howpl.mongodb.net/MovieData?retryWrites=true&w=majority&appName=Cluster0')
    console.log('database conncetd susscessfully')
 }

module.exports=connect