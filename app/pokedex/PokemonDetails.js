import React from 'react'
import PokemonDetailsImageView from './PokemonDetailsImageView'
import PokemonDetailsImages from './PokemonDetailsImages'



class PokemonDetails extends React.Component{
  render() {
    const currentPokemon = this.props.currentPokemon.toJS()
    console.log(`CURRENT POKEMON ${currentPokemon}`)
    const pokemonName = this.props.params.pokemonName
    const isFemale = (sprites) =>  Boolean(
      sprites.back_female ||
      sprites.back_shiny_female ||
      sprites.front_female ||
      sprites.front_shiny_female
    )
    return(
      <div className="page-header">
        {currentPokemon.sprites ? <PokemonDetailsImages sprites={currentPokemon.sprites}/>: null}
        {currentPokemon.sprites && isFemale(currentPokemon.sprites) ? <PokemonDetailsImages
            sprites={currentPokemon.sprites}
            isFemale/> : null
        }
        {//the rest of the pokemong details here
        }
      </div>
    )
  }
}

export default PokemonDetails
