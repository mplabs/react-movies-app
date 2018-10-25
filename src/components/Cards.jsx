import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Card } from './Card'

export class Cards extends Component {
  hasMovies() {
    return this.props.movies && this.props.movies.length > 0
  }

  render() {
    const { movies } = this.props
    return (
      <div className="cards">
        <div className="cards__grid">
          {this.hasMovies() && movies.map((movie, idx) => (
            <Card key={idx} poster={movie.Poster} />
          ))}
          {!this.hasMovies() && (
            <div className="cards__empty">Keine Filme gefunden</div>
          )}
        </div>
      </div>
    )
  }
}

Cards.propTypes = {
  movies: PropTypes.array
}
