import React from 'react';
import Movies from './Movies'
import HarryPotter from "./img/HarryPotter.jpg";
import Aladdin from "./img/Aladdin.jpg";
import captainMarvel from "./img/captainMarvel.jpg";
import fantasticBeasts from "./img/fantasticBeasts.jpg";
import joker from "./img/joker.jpg";
import titanic from "./img/titanic.jpg";

export default function Gallery() {
    return (
      <div>
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