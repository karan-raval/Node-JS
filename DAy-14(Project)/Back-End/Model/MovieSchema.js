const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  movieName: { type: String },
  image: { type: String },
  imdbRating: { type: String },
  genre: { type: String },
  releaseYear: { type: String },
});
const MovieModel = mongoose.model("movie", MovieSchema);

module.exports = MovieModel;
