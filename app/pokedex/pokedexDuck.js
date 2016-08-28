/* @flow */
import immutable from 'immutable'
import {createAction, handleActions} from 'redux-actions'
import pokedexConstant from './pokdexConstants'

const SET_POKEMON_LIST = 'pokedex_simulator/pokelist/SET_POKEMON_LIST'
const SET_CURRENT_POKEMON = 'pokedex_simulator/pokelist/SET_CURRENT_POKEMON'

export const setPokemonList = createAction(SET_POKEMON_LIST)
export const setCurrentPokemon = createAction(SET_CURRENT_POKEMON)

const baseUrl = pokedexConstant.POKEMON_API_URL
const LIMIT = 'limit=50'

const pokemonListLocalStorageKey = 'POKEMON_LIST_LOCAL_STORAGE_KEY'
const pokemonDetailsLocalStorageKey = 'POKEMON_DETAILS_LOCAL_STORAGE_KEY'

const saveToLocalStorage = (name, obj) => {
  window.localStorage.setItem(name, JSON.stringify(obj))
}

const getFromLocalStorage = (name) => {
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

const fetchPokemonListFromApi  = (dispatch) => {
  fetch(`${baseUrl}?${LIMIT}`)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      saveToLocalStorage(pokemonListLocalStorageKey, response)
      const payload = convertToImmutablePayload(response)
      dispatch(setPokemonList(payload))
      console.log(`Successfully fetched data from API`)
    }).catch(function(res) {
      console.log(`Error getting PokemonList from API`)
    })
}

export const getPokemonList = () => (dispatch) => {
  const pokemonListFromStorage = getFromLocalStorage(pokemonListLocalStorageKey)
  if (pokemonListFromStorage){
    const payload = convertToImmutablePayload(pokemonListFromStorage)
    console.log(`Fetching Data from LocalStorage`)
    dispatch(setPokemonList(payload))
  } else {
    console.log(`Fetching Data from API`)
    dispatch(fetchPokemonListFromApi)
  }
}


const fetchPokemonDetailsFromApi = (name, localStorageKey) => (dispatch) => {
  fetch(`${baseUrl}${name}`)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      console.log(`Successfully fetched from API: ${response}`)
      saveToLocalStorage(localStorageKey, response)
      const payload = immutable.fromJS(response)
      dispatch(setCurrentPokemon(payload))

    }).catch(function(res) {
      console.log(`Error getting PokemonList from API ${res}`)
    })
}

export const getPokemonDetails = (name) => (dispatch) => {
  const localStorageKey = `${pokemonDetailsLocalStorageKey}_${name.toUpperCase()}`
  const pokemonDetailsFromLocalStorage = getFromLocalStorage(localStorageKey)
  if(pokemonDetailsFromLocalStorage){
    console.log(`Fetching Data from LocalStorage`)
    const payload = immutable.fromJS(pokemonDetailsFromLocalStorage)
    dispatch(setCurrentPokemon(payload))
  } else {
    console.log(`Fetching Data from API`)
    dispatch(fetchPokemonDetailsFromApi(name, localStorageKey))
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
    [SET_CURRENT_POKEMON]: (state, {payload}) => state.set('currentPokemon', payload),
}, initialState)
