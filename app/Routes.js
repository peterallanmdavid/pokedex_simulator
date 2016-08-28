import React from 'react'
import PokedexMain from './pokedex/PokedexMain'
import PokemonDetails from './pokedex/PokemonDetails'
import {getPokemonDetails} from './pokedex/pokedexDuck'
import {
  Router,
  Route,
  Link,
  IndexRoute,
  browserHistory,
} from 'react-router'


const onEnter = (store, event) => {
    store.dispatch(getPokemonDetails(event.params.pokemonName))
}
const Routes = ({store}) => {
  return(
    <Router history={browserHistory}>
      <Route path="/" component={PokedexMain}>
        <IndexRoute component={PokemonDetails}/>
        <Route
            path="/pokemonDetails/:pokemonName"
            component={PokemonDetails}
            onEnter={(event) => onEnter(store, event)}
        />
      </Route>
    </Router>
  )

}

export default Routes
