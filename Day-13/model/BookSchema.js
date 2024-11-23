const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  bookname: { type: String },
  authorname: { type: String },
  price: { type: String },
  image: { type: String },
  description: { type: String },
});

const BookModel = mongoose.model("allBooks", BookSchema);

module.exports = BookModel;
