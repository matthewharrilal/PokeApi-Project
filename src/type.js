import React, {Component} from 'react'

class PokemonType extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            typeOfPokemon:[]

        })
    }

    componentWillMount() {
        this.getPokeType()
    }

    getPokeType() {
        const emptyListOfPokemonTypes = []
        const basePath = `https://pokeapi.co/api/v2/type`
        fetch(basePath)
        .then(res => res.json())
        .then((json) => {
            json.results.map((item, index) => {
                this.setState({
                    typeOfPokemon: emptyListOfPokemonTypes.push(item.name)
                })

            })
        }).catch(err => console.log(err.message))

    }

    displayType() {
        if (this.state.type !== null) {
            return <h1>{this.state.typeOfPokemon}</h1>
        }
        return <p>Loading Types...</p>
    }


    render() {
        console.log('THis is the state of the pokemon ' + this.state.typeOfPokemon)
        return (
            <div>
            {this.getPokeType()}
            {this.state.typeOfPokemon}
            </div>
        )
    }
}

export default PokemonType
