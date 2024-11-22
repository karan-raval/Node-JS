
const mongoose =require('mongoose')

const BookSchema =mongoose.Schema({
bookname : {type:string},
authorname: {type:string},
price: {type:string},
image: {type:string},
description: {type:string},
})

const BookModel=mongoose.model("allBooks",BookSchema)

module.exports=BookModel