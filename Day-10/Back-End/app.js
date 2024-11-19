const express = require("express");
const connect = require("./Config/db");
const cors = require("cors");
const BookModel = require("./Model/BookModel");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  let books = await BookModel.find();
  res.send(books);
});

app.post("/addBook", async (req, res) => {
  let a = await BookModel.create(req.body);
   res.send({data : a})
  // res.redirect('/allbook')
});

app.listen(1234, () => {
  connect();
  console.log("Server is running at port 1234");
});
