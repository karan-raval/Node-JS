const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  type: { type: String },
  moviename: { type: String },
  imdbrating: { type: String },
  Gener: { type: String },
  Year: { type: String },
});
const MovieModel = mongoose.model("movie", MovieSchema);

module.exports = MovieModel;
