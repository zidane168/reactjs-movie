import "./App.css";
import { useEffect, useState } from "react";

import searchIcon from './search.svg'
import Products, { Movies } from './MovieCard'

const API_URL = 'http://www.omdbapi.com/?apikey=7f4fff21&s=movie';
 
// {"Search":[{"Title":"Movie Movie","Year":"1978","imdbID":"tt0077952","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTJlMDIxN2YtYmU0NS00ZjIxLWFiMjgtNjlkZTQ2Y2I1NDQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg"},{"Title":"Films of Fury: The Kung Fu Movie Movie","Year":"2011","imdbID":"tt1779401","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTUzODI2ODE4OV5BMl5BanBnXkFtZTgwNDAzNTA2MDE@._V1_SX300.jpg"},{"Title":"The Movie Movie","Year":"1986","imdbID":"tt0226165","Type":"movie","Poster":"N/A"},{"Title":"The Return of the Movie Movie","Year":"1972","imdbID":"tt1373217","Type":"movie","Poster":"N/A"}],"totalResults":"4","Response":"True"}

// const movies = [
//   {
//     "Title":"Movie Movie",
//     "Year":"1978",
//     "imdbID":"tt0077952",
//     "Type":"movie",
//     "Poster":"https://m.media-amazon.com/images/M/MV5BOTJlMDIxN2YtYmU0NS00ZjIxLWFiMjgtNjlkZTQ2Y2I1NDQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg"
//   }
// ]


function App() {

  const [ searchTerm, setSearchTerm ] = useState('');
  const [ movies, setMovies ] = useState([])
  
  const searchMovie = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    
    setMovies(data["Search"])
  }

  useEffect( () => {
    searchMovie('movie')
  }, [])

  return (
    <div className="App">
      <h1> Movie by Zidane </h1>

      <div className="search justify-content-center">
        <div className="input-group">
          <input placeholder="Search for movie" className="control" 
            onChange={ (e) => { setSearchTerm(e.target.value) } }
          />
          <img src={ searchIcon } alt="search" className="searchIcon" 
            onClick={ () => { searchMovie(searchTerm) } }
          />
        </div>
      </div>
      
      { 
        movies?.length > 0 ?  <Movies movies={ movies }/> : 
                  <>
                    <h1> Movie Not found!! </h1>
                  </> 
      }

      {
        <Products />
      }
  
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=b9eMGE7QtTk