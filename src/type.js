import React, {Component} from 'react'

class PokemonType extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            type:null
        })
    }

    getPokeType() {
        const basePath = `https://pokeapi.co/api/v2/pokemon/${this.props.name}`
        fetch(basePath)
        .then(res => res.json())
        .then((json) => {
            const type  = 'Matthew'
            this.setState({type})
        }).catch(err => console.log(err.message))
    }
     // What do we have to do from here we have to essentially get all the types of the pokemon and then what we have to do from there is
     // make a button that display the state so we are going to make that and we have to connect this component to the pokemons Component
     // so our items component can be connected to the pokemon component so if we fetch here every time it renders we can get a new type
     // so say we do that what we have to do from there is make a button that gets the poke type and displays the name when clicked
     // and for the pokemons file what we are going to have to do is make the onClick a part of the props and we can lift state up

    render() {
        return (
            <button onClick={this.props.onClick}>Get Types</button>
        )
    }
}

export default PokemonType
