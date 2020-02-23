import React from "react";
import "./App.css";
import Movies from './Movies';
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
        <Movies name="Harry Potter" img={HarryPotter} />
        <Movies name="Captain Marvel" img={captainMarvel} />
        <Movies name="Aladdin" img={Aladdin} />
        </div>
        <div className="container">
        <Movies name="Fantastic Beasts" img={fantasticBeasts} />
        <Movies name="Joker" img={joker} />
        <Movies name="Titanic" img={titanic} />
        </div>  
        
      </div>
      
    );
  }
} 




export default App;
