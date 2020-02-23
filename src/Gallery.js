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
          <Movies id="HarryPotter" name="Harry Potter" img={HarryPotter} />
          <Movies id="CaptainMarvel" name="Captain Marvel" img={captainMarvel} />
          <Movies id="Aladdin" name="Aladdin" img={Aladdin} />
        </div>
        <div className="container">
          <Movies id="FantasticBeasts" name="Fantastic Beasts" img={fantasticBeasts} />
          <Movies id="Joker" name="Joker" img={joker} />
          <Movies id="Titanic" name="Titanic" img={titanic} />
        </div>
      </div>
    );
  }