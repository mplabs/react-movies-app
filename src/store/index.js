import { applyMiddleware, compose, combineReducers, createStore } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

import * as actions from './actions'
import { moviesEpic } from '../epics/movies'

const rootEpic = combineEpics(moviesEpic)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const epicMiddleware = createEpicMiddleware()

const initialAppState = {
  searchOverlay: false,
  query: ''
}

const appReducer = (state = initialAppState, action) => {
  switch(action.type) {
    case actions.UPDATE_QUERY: {
      return {
        ...state,
        query: action.payload
      }
    }

    case actions.TOGGLE_SEARCH_OVERLAY: {
      return {
        ...state,
        searchOverlay: !state.searchOverlay
      }
    }

    default: {
      return state
    }
  }
}

const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case actions.SET_MOVIES: {
      return action.payload
    }

    default: {
      return state
    }
  }
}

export const reducer = combineReducers({
  app: appReducer,
  movies: moviesReducer
})

export const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(epicMiddleware))
)

epicMiddleware.run(rootEpic)

export { actions }
