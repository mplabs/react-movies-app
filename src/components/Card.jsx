import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Card extends Component {
  render() {
    const { poster } = this.props
    return (
      <div className="card">
        <img className="card__poster" src={poster} />
      </div>
    )
  }
}

Card.propType = {
  poster: PropTypes.string
}
