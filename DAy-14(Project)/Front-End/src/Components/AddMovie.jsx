import React, { useState } from 'react'

const AddMovie = () => {
    const [state,setstate]=useState({
        movieName:'',
        imdbRating:'',
        genre:'',
        releaseYear:'',
        poster:''
    })

    const handleChange=(e)=>{
        let { name, value } = e.target;
    setstate({ ...state, [name]: value });
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
console.log(state)
    }
  return (
    <div>
  <div className="form-container">
        <h2>Add Movie Details</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Movie Name</label>
                <input type="text" id="movieName" name="movieName" value={state.movieName} onChange={handleChange} required/>
            </div>

            <div className="form-group">
                <label>Poster</label>
                <input type="file" id="movieName" name="poster" value={state.poster} onChange={handleChange} required/>
            </div>

            <div className="form-group">
                <label >IMDB Rating</label>
                <input type="number" id="imdbRating" name="imdbRating" value={state.imdbRating} onChange={handleChange} min="0" max="10" step="0.1" required/>
            </div>

            <div className="form-group">
                <label >Genre</label>
                <select id="genre" name="genre" value={state.genre} onChange={handleChange} required>
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
                <input type="number" onChange={handleChange} value={state.releaseYear} id="releaseYear" name="releaseYear" min="1900" max="2024" required/>
            </div>

            <button type="submit">Add Movie</button>
        </form>
    </div>
    </div>
  )
}

export default AddMovie