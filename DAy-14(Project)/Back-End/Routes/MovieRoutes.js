const express = require("express");
const MovieModel = require("../Model/MovieSchema");
const MovieRouter = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const s = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/assets"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const Data = multer({ storage: s });

MovieRouter.post("/addmovie", Data.single("poster"), async (req, res) => {
  try {
    const movieData = {
      movieName: req.body.movieName,
      imdbRating: req.body.imdbRating,
      genre: req.body.genre,
      releaseYear: req.body.releaseYear,
      image: req.file ? req.file.filename : null,
    };
    let data = await MovieModel.create(movieData);
    // console.log(data);
    res.status(200).send({ msg: "Data Added successfully", data: data });
    res.redirect('/allmovie')
  } catch (error) {
    res.status(401).send({ msg: error.message });
  }
});

MovieRouter.get("/allmovie", async (req, res) => {
  try {
    let data = await MovieModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(401).send({ msg: error.message});
  }
});

module.exports = MovieRouter;
