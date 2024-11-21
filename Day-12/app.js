const express = require("express");
const app = express();

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.get("/",async(req,res)=>{
  let Books = await BookModel.find()
  res.render("index.ejs",{Books : Books})
})


app.get("/addBook",(req,res)=>{
  res.render("BookForm.ejs")
})


app.post("/addBook",async(req,res)=>{
   await BookModel.create(req.body)
   res.redirect("/")
})


app.get("/deleteBook/:id",async (req,res)=>{
  let {id} = req.params
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
  console.log("server is running at 3131");
});
