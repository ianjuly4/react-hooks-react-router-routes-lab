import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies)
  return (
    <div>
    <h1>Movies Page</h1>
    {movies.map((movie)=>{
      return <div key={movie.title} >
        <h2> Name: {movie.title}</h2>
       <h4>Time: {movie.time}</h4>
       <ul>Genres: {movie.genres.map((genre)=>{
        return <li key={genre}>{genre}</li>
       })}
       </ul>
      </div>
    })}
    </div>
  )
}
export default Movies;
