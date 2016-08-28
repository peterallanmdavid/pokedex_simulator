/* @flow */
import immutable from 'immutable'
import React from 'react'
import PokemonItem from './PokemonListItem'

const PokeList = ({
  pokeList,
  onShowPokemonDetails,
}) => {
  const pokemons = pokeList.map((pokemon) => (
    <PokemonItem
        key={pokemon.get('name')}
        name={pokemon.get('name')} />
  ))

  return(
    <div className="list-group">
      { pokemons }
    </div>
  )
}

export default PokeList
