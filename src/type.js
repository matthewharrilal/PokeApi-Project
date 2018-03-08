import React, {Component} from 'react'

class PokemonType extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            type:null
        })
    }

    render() {
        return (
            <div>
            <button onClick={this.props.onClick}>{this.props.name}</button>
            </div>
        )
    }
}

export default PokemonType
