import React, { useState } from 'react';

const editmovie = () => {
    const [state, setState] = useState({});
    return (
        <>
        <div className="form-container">
            <h2>Add Movie Details</h2>
            <form onSubmit={handleSubmit} action='/addmovie' method='post' encType="multipart/form-data">
                <div className="form-group">
                    <label>Movie Name</label>
                    <input
                        type="text"
                        id="movieName"
                        name="movieName"
                        value={state.movieName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Poster</label>
                    <input
                        type="file"
                        id="poster"
                        name="poster"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>IMDB Rating</label>
                    <input
                        type="number"
                        id="imdbRating"
                        name="imdbRating"
                        onChange={handleChange}
                        min="0"
                        max="10"
                        step="0.1"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Type</label>
                    <select
                        id="genre"
                        name="type"
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Type</option>
                        <option value="movie">Movie</option>
                        <option value="web-series">Web-Series</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Genre</label>
                    <select
                        id="genre"
                        name="genre"
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Genre</option>
                        <option value="action">Action</option>
                        <option value="comedy">Comedy</option>
                        <option value="drama">Drama</option>
                        <option value="horror">Horror</option>
                        <option value="sci-fi">Sci-Fi</option>
                        <option value="thriller">Thriller</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Release Year</label>
                    <input
                        type="number"
                        id="releaseYear"
                        name="releaseYear"
                        value={state.releaseYear}
                        onChange={handleChange}
                        min="1900"
                        max="2024"
                        required
                    />
                </div>

                <button type="submit">Add Movie</button>
            </form>
        </div>
        
        </>
    )
}

export default editmovie;

