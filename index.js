import {Provider} from 'react-redux'
import store from './app/store'
import React from 'react'
import ReactDOM from 'react-dom'
import PokedexMain from './app/pokedex/PokedexMain'
import PokemonDetails from './app/pokedex/PokemonDetails'

import Routes from './app/Routes'

ReactDOM.render(
  <Provider store={store}>
      <Routes store={store}/>
  </Provider>,
  document.getElementById('content')
)
