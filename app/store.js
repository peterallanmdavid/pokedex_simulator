/* @flow */
import thunkMiddleware from 'redux-thunk'
import pokedex from './pokedex/pokedexDuck'
import {
    applyMiddleware,
    combineReducers,
    createStore,
} from 'redux'

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore)

export default createStoreWithMiddleware(combineReducers({
    pokedex,
}))
