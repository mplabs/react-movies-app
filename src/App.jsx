import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from './store'

import { Cards } from './components/Cards'
import { SearchInput } from './components/SearchInput'
import { SearchToggle } from './components/SearchToggle'

const mapStateToProps = state => ({
  query: state.app.query,
  searchOverlay: state.app.searchOverlay,
  movies: state.movies
})

const mapDispatchToProps = dispatch => ({
  loaded: () => dispatch(actions.AppLoaded()),
  updateQuery: query => dispatch(actions.UpdateQuery(query)),
  onOverlayToggle: () => dispatch(actions.ToggleSearchOverlay())
})

@connect(mapStateToProps, mapDispatchToProps)
export class App extends Component {
  render() {
    const { movies, searchOverlay, onOverlayToggle, updateQuery } = this.props
    return (
      <div className="wrapper">
        {!searchOverlay && (
          <SearchToggle className="search-toggle" onToggle={() => onOverlayToggle()} />
        )}
        {searchOverlay && (
          <SearchInput onClose={() => onOverlayToggle()} onSearch={query => updateQuery(query)} />
        )}
        <Cards movies={movies} />
      </div>
    )
  }
}
