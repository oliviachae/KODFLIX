import React from "react";
import Movies from "./Movies";
import getMovies from './getMovies';


export default function Gallery() {
  return (
    <div>
      <div className="container">
        {getMovies().map(movie => (
          <Movies
            key={movie.id}
            id={movie.id}
            name={movie.name}
            img={movie.img}
          />
        ))}
      </div>
    </div>
  );
}


