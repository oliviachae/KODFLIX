import React from "react";
import "./App.css";
import HarryPotter from "./img/HarryPotter.jpg";
import Aladdin from "./img/Aladdin.jpg";
import captainMarvel from "./img/captainMarvel.jpg";
import fantasticBeasts from "./img/fantasticBeasts.jpg";
import joker from "./img/joker.jpg";
import titanic from "./img/titanic.jpg";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="item">
            <img src={HarryPotter} alt="Harry Potter Image" />
          </div>
          <div className="item">
            <img src={captainMarvel} alt="Harry Potter Image" />
          </div>
          <div className="item">
            <img src={Aladdin} alt="Harry Potter Image" />
  
          </div>
        </div>
        <div className="container">
          <div className="item">
            <img src={fantasticBeasts} alt="Harry Potter Image" />
             
          </div>
          <div className="item">
            <img src={joker} alt="Harry Potter Image" />
            
          </div>
          <div className="item">
            <img src={titanic} alt="Harry Potter Image" />
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
