/* @flow */
import immutable from 'immutable'
import {createAction, handleActions} from 'redux-actions'
import pokedexConstant from './pokdexConstants'

const SET_POKEMON_LIST = 'pokedex_simulator/pokelist/SET_POKEMON_LIST'


const baseUrl = pokedexConstant.POKEMON_API_URL
const pokemonListLocalStorageKey = 'POKEMON_LIST_LOCAL_STORAGE_KEY'
const LIMIT = 'limit=50'
const pokemonListApiUrl = `${baseUrl}?${LIMIT}`

export const setPokemonList = createAction(SET_POKEMON_LIST)

const savePokemonListToLocalStorage = (name, obj) => {
  window.localStorage.setItem(name, JSON.stringify(obj))
}

const getPokemonListFromLocalStorage = (name) => {
  var api = window.localStorage.getItem(name);
  console.log(JSON.parse(api))
  return JSON.parse(api);
}

const convertToImmutablePayload = (payload) => immutable.fromJS({
    list: payload.results,
    total: payload.count,
    previous: payload.previous,
    next: payload.next,
})

const fetchPokemonListFromApi =() =>(dispatch) => {
  fetch(pokemonListApiUrl)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      savePokemonListToLocalStorage(pokemonListLocalStorageKey, response)
      const payload = convertToImmutablePayload(response)
      dispatch(setPokemonList(payload))
    }).catch(function(res) {
      debugger
      console.log(`Error getting PokemonList from API`)
    })
}
export const getPokemonList = () => (dispatch) => {
  const pokemonListFromStorage = getPokemonListFromLocalStorage(pokemonListLocalStorageKey)

  if (pokemonListFromStorage){
    const payload = convertToImmutablePayload(pokemonListFromStorage)
    dispatch(setPokemonList(payload))
  } else {
    dispatch(fetchPokemonListFromApi())
  }
}

const initialState = immutable.fromJS({
    pokemonList: {
      list: [],
      total: null,
      previous: null,
      next: null,
    },
    currentPokemon: {},
})


export default handleActions({
    [SET_POKEMON_LIST]: (state, {payload}) => state.set('pokemonList', payload),
}, initialState)
