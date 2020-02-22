import React from 'react';
import javascript from './javascript.png';
import './App.css';

class App extends React.Component {
  render() {
    return(
      <div className="App">
      
        <img src={javascript} className="JSlogo" alt="logo" />
        <br /> <br /> <br />
        <div className='container'>
          <div className='item'>Harry Potter</div>
          <div className='item'>Captain Marvel</div>
          <div className='item'>Aladdin</div>
        </div>

        <div className='container'>
          <div className='item'>Fantastic Beasts</div>
          <div className='item'>Joker</div>
          <div className='item'>Titanic</div>
        </div>
     
    </div>
    );
  }
}

export default App;
