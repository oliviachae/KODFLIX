import React from 'react';

export default function Movies(props) {
    return (
    <div className="item">
      <img src={props.img} alt={`${props.name} logo`} />
      <div className="overlay">
        <h1>{props.name}</h1>
      </div>
    </div>
    );
  }