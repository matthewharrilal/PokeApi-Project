import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from './pokemon'
import Pokemons from './pokemons'
class App extends Component {
  render() {
    return (
      <div className="App">
          <Pokemons/>
      </div>
    );
  }
}

export default App;
