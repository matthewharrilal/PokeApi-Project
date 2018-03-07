import React, { Component } from "react"

class PokemonHelper extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pokeImageUrl: null
        }
    }

    componentWillMount() {
        this.fetchPokeData()
    }

    // api/v2/pokemon-form/this.props.name

    fetchPokeData() {
        const basePath = `https://pokeapi.co/api/v2/pokemon-form/${this.props.name}/`
        fetch(basePath)
        .then((res) => {
            return res.json()
        }).then((json) => {
            const pokeImageUrl = json.sprites.front_default

            this.setState({ pokeImageUrl })
        })
        .catch(err => console.log(err.message))
    }

    // The reason that we have this function in here is due to the reasont that we want to be able to fetch the poke data and from there
    // what we can do is when the user taps thte on

    getImage() {
        if (this.state.pokeImageUrl !== null) {
            return <img src={this.state.pokeImageUrl} className="poke-image" />
            // return <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`} />
        }
        return <p>Loading Image...</p>
    }

    render() {
        return (
            <div id='PokemonHelper' className="pokemonStyles">
                {this.getImage()}
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}


export default PokemonHelper
