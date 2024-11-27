import React, { useState } from 'react'

const AddMovie = () => {
    const [state,setstate]=useState({
        movieName:'',
        imdbRating:'',
        genre:'',
        releaseYear:'',
        poster:null
    })

    const handleChange=(e)=>{
        let { name, value } = e.target;
        if(name == "poster"){
            setstate({ ...state, [name]: e.target.files[0] });
        }else{
            setstate({ ...state, [name]: value });
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(state)
        let formData = new FormData();
        formData.append("movieName", state.movieName);
        formData.append("imdbRating", state.imdbRating);
        formData.append("genre", state.genre);
        formData.append("releaseYear", state.releaseYear);
        formData.append("poster", state.poster);
        fetch(`http://localhost:3344/addmovie`,{
            method : "POST",
            body : formData
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
  <div className="form-container">
        <h2>Add Movie Details</h2>
        <form onSubmit={handleSubmit} method='post' action='/addmovie'  encType="multipart/form-data">
            <div className="form-group">
                <label>Movie Name</label>
                <input type="text" id="movieName" name="movieName" value={state.movieName} onChange={handleChange} required/>
            </div>

            <div className="form-group">
                <label>Poster</label>
                <input type="file" id="movieName" name="poster"  onChange={handleChange} required/>
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