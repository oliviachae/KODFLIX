import React from "react";
import Movie from "./Movies";
import getMovies from './getMovies';


export default class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      movieList: []
    }
  }

  componentDidMount() {
    
    fetch('/rest/movies')
        .then(response => {
          return response.json()})
        .then(movieList => {
          this.setState({ movieList: movieList.movieList });
        })
          
  }
  render() {
    console.log(this.state.movieList)
    return (
    <div>
      <div className="container">
        {this.state.movieList.map(movie => (
           <Movie
            key={movie.id}
            id={movie.id}
            name={movie.name}
            details={movie.details}
          />
        ))}
      </div>
    </div>
  );
}

}
