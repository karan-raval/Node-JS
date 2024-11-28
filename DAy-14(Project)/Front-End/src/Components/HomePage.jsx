import React, { useState, useEffect } from "react";
import "../assets/Homepage.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]); // Initialize state as an empty array

  // Fetch movies data on component mount
  useEffect(() => {
    fetch("http://localhost:3344/allmovie")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      <div className="wrapper">
        <div className="search-block">
          <a href="/">
            <h1>TheMovieDB</h1>
          </a>
          <form
            id="search-form"
            onSubmit={(e) => {
              e.preventDefault(); // Prevent form default behavior
              // Add search logic here if needed
            }}
          >
            <input type="text" id="query" placeholder="Search movies..." />
            <button className="btn" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="row" id="root">
          {movies.length > 0 ? (
            movies.map((el, index) => (
              <div className="col" key={index}>
                <div className="card">
                  <a className="card-media">
                    <img src={el.poster_path} alt="Movie Poster" width="100%" />
                  </a>
                  <div className="card-content">
                    <div className="card-cont-header">
                      <div className="cont-left">
                        <h3 style={{ fontWeight: 600 }}>{el.movieName}</h3>
                        <span style={{ color: "#12efec" }}>
                          {el.release_date}
                        </span>
                      </div>
                      <div className="cont-right">
                        <a
                          href={el.poster_path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                        >
                          See image
                        </a>
                      </div>
                    </div>
                    <div className="describe">{el.overview}</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No movies found!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
