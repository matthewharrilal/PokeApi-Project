import React, { Component } from 'react';
import PokemonHelper from './helper_productt'

class Pokemons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: null,
            pokemons: [],
            formUrl: null
        }
    }



    fetchAllPokemon() {
        const basePath = `https://pokeapi.co/api/v2/pokemon/`
        const options = {mode: 'no-cors'}
        fetch(basePath)
        .then(res => res.json())
        .then((json) => {
            // console.log(`worked`);
            // console.log(json);
            const pokemons = json['results'].map((item, index) => {
                // console.log(index);
                // console.log(item.name);
                return (
                    <PokemonHelper key={index} name={item.name} url={item.url}/>
                )
            });
            // console.log(results);
            this.setState({ pokemons }, () => {
                console.log(`set pokemon state`);
            });

        }).catch(err => console.log(err.message))
    }

    showPokemon() {
        if (this.state.pokemons.length == 0) {
            this.fetchAllPokemon();
        }
        console.log('show pokemon api');
    }

    // Now that we have an array with all the pokemons name what we can do from theree
    // <button onClick={this.fetchAllPokemon.bind(this)}> Get All Pokemon</button>
    render () {
        console.log(this.state.pokemons);
        // if (this.state.pokemons.length == 0) {
        //     this.fetchAllPokemon()
        // }
        return (
            <div className="AllPokemon">
                <button onClick={() => this.showPokemon()}> Get All Pokemon</button>
                {this.state.pokemons}
            </div>

        )
    }
};

export default Pokemons;
