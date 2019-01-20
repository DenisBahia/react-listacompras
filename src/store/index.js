import {createStore, applyMiddleware, compose} from "redux"
import createSagaMiddleware from "redux-saga"

import Reducers from "./reducers/index"
import sagas from "./sagas"

import {loadState, saveState} from "./localStorage"

const localStorageState = loadState()
const sagaMiddleware = createSagaMiddleware()
const middleWares = [sagaMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const Store = createStore(Reducers, localStorageState, composeEnhancers(
    applyMiddleware(...middleWares)
))

sagaMiddleware.run(sagas)

Store.subscribe(() => {
    saveState({list: Store.getState().list})
})

export default Store