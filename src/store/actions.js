export const APP_LOADED = '[App] loaded'
export const UPDATE_QUERY = '[App] update query'
export const TOGGLE_SEARCH_OVERLAY = '[App] toggle search overlay'

export const FETCH = '[Movies] fetch'
export const SET_MOVIES = '[Movies] set list'

export const AppLoaded = () => ({ type: APP_LOADED })
export const UpdateQuery = query => ({ type: UPDATE_QUERY, payload: query })
export const ToggleSearchOverlay = () => ({ type: TOGGLE_SEARCH_OVERLAY })

export const Fetch = title => ({ type: FETCH, payload: title })
export const SetMovies = movies => ({ type: SET_MOVIES, payload: movies })
