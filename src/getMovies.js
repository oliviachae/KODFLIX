import HarryPotter from "./img/HarryPotter.jpg";
import Aladdin from "./img/Aladdin.jpg";
import captainMarvel from "./img/captainMarvel.jpg";
import fantasticBeasts from "./img/fantasticBeasts.jpg";
import joker from "./img/joker.jpg";
import titanic from "./img/titanic.jpg";

export default function getMovies() {
    return [
      { id: "HarryPotter", name: "Harry Potter", img: HarryPotter },
      { id: "CaptainMarvel", name: "Captain Marvel", img: captainMarvel },
      { id: "Aladdin", name: "Aladdin", img: Aladdin },
      { id: "FantasticBeasts", name: "Fantastic Beasts", img: fantasticBeasts },
      { id: "Joker", name: "Joker", img: joker },
      { id: "Titanic", name: "Titanic", img: titanic }
    ];
  }