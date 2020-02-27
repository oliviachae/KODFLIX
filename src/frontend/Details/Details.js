import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./Details.css";

export default class Details extends React.Component {
 

  // componentDidMount() {
  //   let movieId = this.props.match.params.movieId;
  //   this.setState({movieId})
  //   // let movies = this.state.movieList.find(movies => movies.id === movieId);
  //   // this.setState({ movies });

  //   // fetch('/rest/movie')
  //   //     .then(response => {
  //   //       console.log(response)
  //   //       return response.json()})
  //   //     .then(movieList => {
  //   //       this.setState({ movieList });
  //   //     })
          
  // }

  render() {
    
    if (!this.props.location.state) {
      return <Redirect to="/not-found" />;
    } else {
      const { name, details, id } = this.props.location.state;
        return (
         <div className="Details">
              <h1>{name}</h1>
          <div className='content'>
              <div className='text'>
                  {details}</div>
                <img  
                className='detailsImg'
                src={id && require(`../img/${id}.jpg`)} 
                alt={`${name} logo`}
                 />
          </div>
          <Link to="/">Back to Home page</Link>
        </div>
      );
    }
  }
}
