import React, { Component } from 'react'
import PropTypes from 'prop-types'


import { Close } from './Close'

export class SearchInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  componentDidMount() {
    this.inputRef.current.focus()
  }

  handleKeyup(evt) {
    const { onClose, onSearch } = this.props
    switch(evt.key) {
      case 'Enter':
        onClose()
        break
      case 'Escape':
        onSearch('')
        onClose()
        break
    }
  }
  
  render() {
    const { onCLose, onSearch } = this.props
    return (
      <div className="search__wrapper">
        <button className="search__close" onClick={() => onClose()}><Close /></button>
        <input className="search__input" placeholder="Suchen" onInput={evt => onSearch(evt.target.value)} ref={this.inputRef} onKeyUp={evt => this.handleKeyup(evt)} />
      </div>
    )
  }
}

SearchInput.propTypes = {
  onClose: PropTypes.func,
  onSearch: PropTypes.func
}
