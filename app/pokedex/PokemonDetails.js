import React from 'react'

class PokemonDetails extends React.Component{
  componentDidMount() {
    //call pokemon details here
  }
  render() {
    return(
      <div className="page-header">
        THIS IS POKEMON DETAILS {this.props.params.pokemonName}
      </div>
    )
  }
}

export default PokemonDetails
