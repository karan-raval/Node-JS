// import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  

  return (
    <>
    <div class="form-container">
        <h2>Add Movie Details</h2>
        <form>
            <div class="form-group">
                <label for="movieName">Movie Name</label>
                <input type="text" id="movieName" name="movieName" required/>
            </div>

            <div class="form-group">
                <label for="imdbRating">IMDB Rating</label>
                <input type="number" id="imdbRating" name="imdbRating" min="0" max="10" step="0.1" required/>
            </div>

            <div class="form-group">
                <label for="genre">Genre</label>
                <select id="genre" name="genre" required>
                    <option value="">Select Genre</option>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="drama">Drama</option>
                    <option value="horror">Horror</option>
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="thriller">Thriller</option>
                </select>
            </div>

            <div class="form-group">
                <label for="releaseYear">Release Year</label>
                <input type="number" id="releaseYear" name="releaseYear" min="1900" max="2024" required/>
            </div>

            <button type="submit">Add Movie</button>
        </form>
    </div>
    </>
  );
};

export default App;