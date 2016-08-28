import {Provider} from 'react-redux'
import store from './app/store'
import React from 'react'
import ReactDOM from 'react-dom'
import PokedexMain from './app/pokedex/PokedexMain'
import PokemonDetails from './app/pokedex/PokemonDetails'
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
        <Route path="/pokemonDetails/:pokemonName" component={PokemonDetails}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('content')
)
