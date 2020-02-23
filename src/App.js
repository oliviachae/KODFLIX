import React from "react";
import "./App.css";
import Movies from "./Movies";
import Gallery from './Gallery';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Gallery />
      </div>
    );
  }
}



export default App;
