import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gallery from "./Gallery";
import Details from "./Details";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Gallery} />
          <Route exact path='/:movieId' component={Details} />
        </div>
      </Router>
    );
  }
}


export default App;
