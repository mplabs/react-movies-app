import {  combineEpics } from 'redux-observable'
import { debounceTime, flatMap, map, pluck } from 'rxjs/operators'

import { actions } from '../store'
import { MovieResource } from '../resources/movie.resource'

const resource = new MovieResource('612d888c')

const transformResults = apiResult => (apiResult.Search || [])
  .filter(movie => movie.Poster !== 'N/A')
  .map(movie =>({ ...movie, Poster: movie.Poster.replace('http:', 'https:') }))

const fetchMovies = actions$ =>
  actions$
    .ofType(actions.UPDATE_QUERY)
    .pipe(
      pluck('payload'),
      debounceTime(250),
      flatMap(title => resource.list(title)),
      map(transformResults),
      map(movies => actions.SetMovies(movies)))

export const moviesEpic = combineEpics(fetchMovies)
