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
            console.log(">> ", pokeImageUrl)
            this.setState({ pokeImageUrl })
        })
        .catch(err => console.log(err.message))
    }

    getImage() {
        console.log('>>> ', this.state)
        if (this.state.pokeImageUrl !== null) {
            return <img src={this.state.pokeImageUrl} className="poke-image" />
            // return <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`} />
        }
        return <p>Loading Image...</p>
    }

    render() {
        return (
            <div id='PokemonHelper'>
                {this.getImage()}
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}

export default PokemonHelper
