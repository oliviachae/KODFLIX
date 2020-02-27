import React from 'react';
import { Link } from 'react-router-dom';

export default function Movies(props) {
    return (
    <Link to ={{pathname:`/${props.id}`, state: {name: props.name, img: props.img, details: props.details, id: props.id}}} className="item">
      <img src={require(`./img/${props.id}.jpg`)} alt={`${props.name} logo`} />
      <div className="overlay">
        <h2>{props.name}</h2>
      </div>
    </Link>
    );
  }