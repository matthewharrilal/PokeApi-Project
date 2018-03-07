import React, { Component } from 'react';
import PokemonHelper from './helper_productt'
import PokemonType from './type'

class Pokemons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: null,
            pokemons: [],
            formUrl: null,
            type: null
        }
    }

    setType() {
        const type = 'Matthew'
        this.setState({type})
    }

    fetchAllPokemonTypes () {
        return this.state.pokemons.map((item, index) => {
            return (
                <PokemonType key={index} name={item.props.children.props.name} onClick={() => this.setType()}/>
            )
        })
    }


    fetchAllPokemon() {
        const basePath = `https://pokeapi.co/api/v2/pokemon/`
        const options = {mode: 'no-cors'}
        fetch(basePath)
        .then(res => res.json())
        .then((json) => {

            const pokemons = json['results'].map((item, index) => {

                return (
                    <div>
                    <PokemonHelper key={index} name={item.name} url={item.url}/>
                    </div>
                )
            });
            this.setState({ pokemons }, () => {
                console.log("These are the pokemons " + pokemons);
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
            console.log('This is the current state ' + this.state.type)
        return (
            <div className="AllPokemon">
                {this.fetchAllPokemonTypes()}
                <button onClick={() => this.showPokemon()}>Get All Pokemon </button>
                {this.state.pokemons}
            </div>

        )
    }
};

export default Pokemons;
