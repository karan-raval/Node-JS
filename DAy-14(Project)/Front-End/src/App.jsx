// import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  

  return (
    <div class="wrapper">
    <div class="search-block">
        <a href="/">
            <h1>TheMovieDB</h1>
        </a>
        <form id="search-form">
            <input type="text" id="query" placeholder="Search movies..." />
            <button class="btn" type="submit">Search</button>
        </form>
        <div class="col">
          <div class="card">
            <a class="card-media" href="./img-01.jpeg">
              <img src="${movie.poster_path}" alt="PUBG Mobile" width="100%" />
            </a>

            <div class="card-content">
              <div class="card-cont-header">
                <div class="cont-left">
                  <h3 style={{fontWeight: 600}}>$movie.original_title</h3>
                  <span style={{color: '#12efec'}}>$movie.release_date</span>
                </div>
                <div class="cont-right">
                  <a href="${movie.poster_path}" target="_blank" class="btn">See image</a>
                </div>
              </div>

              <div class="describe">
                $movie.overview
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="row" id="root"></div>
</div>
  );
};

export default App;