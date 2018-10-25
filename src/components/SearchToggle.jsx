import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Search } from './Search'

export class SearchToggle extends Component {
  render() {
    const { onToggle } = this.props
    return (
      <button className="search-button search-toggle" onClick={() => onToggle()}>
        <Search />
      </button>
    )
  }
}

SearchToggle.propTypes = {
  onToggle: PropTypes.func
}
