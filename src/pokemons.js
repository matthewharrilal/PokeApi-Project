import React, { Component } from 'react';

class Pokemons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: null
        }
    }

    fetchAllPokemon() {
        const basePath = `https://pokeapi.co/api/v2/pokemon/`
        const options = {mode: 'no-cors'}
        fetch(basePath)
        .then(res => res.json())
        .then(json => {
            console.log(json['results'])
            json['results'].map((item) => {
                console.log(item.name)
            })
        }).catch(err => console.log(err.message))
    }

    render () {
        return (
            <button onClick={this.fetchAllPokemon.bind(this)}> Get All Pokemon</button>
        )
    }
};

export default Pokemons;
