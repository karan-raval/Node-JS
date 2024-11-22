const express = require("express");
const BookModel = require("./model/BookSchema");
const connect = require("./confic/server");
const path = require("path")
const fs = require("fs")
const multer = require("multer")
const app = express();

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))



const s = multer.diskStorage({
  destination : (req,file,cb)=>{
      cb(null,path.join(__dirname,"/public/assets"))
  },
  filename : (req,file,cb)=>{
     cb(null,file.originalname)
  }
}) 

const Data = multer({storage : s})



app.get("/",async(req,res)=>{
  let Books = await BookModel.find()
  res.render("index.ejs",{Books : Books})
})


app.get("/addBook",(req,res)=>{
  res.render("BookForm.ejs")
})


app.post("/addBook",Data.single("image"),async(req,res)=>{
  await BookModel.create({
    ...req.body,
    image : req.file.filename
 })
 res.redirect("/")
})



app.get("/deleteBook/:id",async(req,res)=>{
  const {id} = req.params
  const data = await BookModel.findById(id);
  if(data.image){
     const image_path = path.join(__dirname,"/public/assets", data.image) 
     if(fs.existsSync(image_path)){
       fs.unlinkSync(image_path)
     }
  }
 await BookModel.findByIdAndDelete(id)
  res.redirect("/")
})

app.get("/editBook/:id",async(req,res)=>{
  let {id} = req.params;
  let data = await BookModel.findById(id)
  
  res.render("editForm.ejs",{data : data})
})

app.post("/editBook/:id",async(req,res)=>{
  const {id} = req.params
  await BookModel.findByIdAndUpdate(id,req.body)
  res.redirect("/")
})


app.listen(3131, () => {
  connect()
  console.log("server is running at 3131");
});
