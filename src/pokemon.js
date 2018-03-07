import React, { Component } from 'react';

class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: null,
            height: null,
            weight: null
        }
    }

    fetchPokemon(event) {
        const count = 2
        const basePath = `https://pokeapi.co/api/v2/pokemon/${event.target.value}/`
        const options = {mode: 'no-cors'}
        fetch(basePath)
        .then(res => res.json())
        .then((json) => {
            this.setState({name: json.name,
                            id: json.id,
                            height: json.height,
                            weight: json.weight})
        }).catch(err => console.log(err.message))
    }

    render() {
        console.log('This is the name of the pokemon ' + this.state.name)
        return (
            <h1><button onClick={this.fetchPokemon.bind(this)}> Fetch Pokemon</button></h1>
        )
    }
}

export default Pokemon;
