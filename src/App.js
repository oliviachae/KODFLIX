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
            <div className='overlay'>
              <h1>Harry Potter</h1>
              </div>
          </div>
          <div className="item">
            <img src={captainMarvel} alt="Captain Marvel Image" />
            <div className='overlay'>
              <h1>Captain Marvel</h1>
              </div>
          </div>
          <div className="item">
            <img src={Aladdin} alt="Aladdin Image" />
            <div className='overlay'>
              <h1>Aladdin</h1>
              </div>
          </div>
        </div>
      
        <div className="container">
          <div className="item">
            <img src={fantasticBeasts} alt="Fantastic Beasts Image" />
            <div className='overlay'>
              <h1>Fantastic Beasts</h1>
              </div>
          </div>
          <div className="item">
            <img src={joker} alt="joker Image" />
            <div className='overlay'>
              <h1>joker</h1>
              </div>
          </div>
          <div className="item">
            <img src={titanic} alt="Titanic Image" />
            <div className='overlay'>
              <h1>Titanic</h1>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
