import React from 'react'
import PokemonList from './PokemonList'
import {
  getPokemonList,
  getPokemonDetails,
} from './pokedexDuck'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'

class PokedexMain extends React.Component{
  componentDidMount() {
      this.props.getPokemonList()
  }
  render() {
    return (
        <div id="wrap" className="row">
          <div className="col-md-3">
            <div className="page-header">
              <h1>Pokedex <small>(50)</small></h1>
            </div>
            <h3>Pokemons</h3>
            <PokemonList pokeList = { this.props.pokemonList.get('list')}/>
            <p>
              <a href="#">About</a>
            </p>
          </div>

          <div className="col-md-9">
            <div className="page-header">
              <h1>Details of {this.props.currentPokemon.get('name')}</h1>
            </div>
            {React.cloneElement(this.props.children, {
              currentPokemon: this.props.currentPokemon
            })}
          </div>
        </div>
    )
  }
}

const dispatchSelector = createSelector(
  (dispatch) => dispatch,
  (dispatch) => ({
      getPokemonList: () => dispatch(getPokemonList()),
      getPokemonDetails: (name) =>  dispatch(getPokemonDetails(name))
  })
)

export default connect(
  (state) => ({
      pokemonList: state.pokedex.get('pokemonList'),
      currentPokemon:state.pokedex.get('currentPokemon'),
  }),
  dispatchSelector)(PokedexMain)
