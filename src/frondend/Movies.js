import React from 'react';
import { Link } from 'react-router-dom';

export default function Movies(props) {
    return (
    <Link to ={`/${props.id}`} className="item">
      <img src={props.img} alt={`${props.name} logo`} />
      <div className="overlay">
        <h2>{props.name}</h2>
      </div>
    </Link>
    );
  }