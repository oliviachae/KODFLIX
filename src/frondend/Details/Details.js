import React from "react";
import { Link, Redirect } from "react-router-dom";
import getMovies from "../getMovies";
import "./Details.css";

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: {}
    };
  }

  componentDidMount() {
    let movieId = this.props.match.params.movieId;
    let movies = getMovies().find(movies => movies.id === movieId);
    this.setState({ movies });
  }

  render() {
    if (this.state.movies === undefined) {
      return <Redirect to="/not-found" />;
    } else {
        return (
         <div className="Details">
              <h1>{this.state.movies.name}</h1>
          <div className='content'>
              <div className='text'>
                  {this.state.movies.details}</div>
                <img  
                className='detailsImg'
                src={this.state.movies.img} 
                alt={this.state.movies.name} />
          </div>
          <Link to="/">Back to Home page</Link>
        </div>
      );
    }
  }
}
