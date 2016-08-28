import {Provider} from 'react-redux'
import store from './store'
import React from 'react'
import PokedexMain from './pokedex/PokedexMain'
import PokemonDetails from './pokedex/PokemonDetails'
import {
  Router,
  Route,
  Link,
  browserHistory,
} from 'react-router'


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={PokedexMain}>
        <Route path="/pokemonDetails/:pokemonId" component={PokemonDetails}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
