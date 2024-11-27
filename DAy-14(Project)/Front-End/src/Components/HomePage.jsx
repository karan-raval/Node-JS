import React, { useState } from "react";
import "../assets/Homepage.css";

const HomePage = () => {
  const [state, setstate] = useState();
  fetch("http://localhost:3344/allmovie")
    .then((Res) => Res.json())
    .then((Res) =>
      // console.log(Res)
      setstate(Res)
    );
  return (
    <>
      <div class="wrapper">
        <div class="search-block">
          <a href="/">
            <h1>TheMovieDB</h1>
          </a>
          <form id="search-form">
            <input type="text" id="query" placeholder="Search movies..." />
            <button class="btn" type="submit">
              Search
            </button>
          </form>
        </div>
        <div class="row" id="root">
          <div class="col">
            state.map((el)=>{
              <div class="card">
                <a class="card-media">
                  <img src="${movie.poster_path}" alt="" width="100%" />
                </a>
                <div class="card-content">
                  <div class="card-cont-header">
                    <div class="cont-left">
                      <h3 style={{ fontWeight: 600 }}>$movie.original_title</h3>
                      <span style={{ color: "#12efec" }}>
                        $movie.release_date
                      </span>
                    </div>
                    <div class="cont-right">
                      <a href="" target="_blank" class="btn">
                        See image
                      </a>
                    </div>
                  </div>
                  <div class="describe">$movie.overview</div>
                </div>
              </div>
            }
            )
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
