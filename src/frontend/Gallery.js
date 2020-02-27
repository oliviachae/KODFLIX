import React from "react";
import Movie from "./Movies";



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
