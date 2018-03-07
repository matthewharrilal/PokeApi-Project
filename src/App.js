import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemons from './pokemons'
import PokemonType from './type'


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
