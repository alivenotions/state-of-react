import React from 'react'

import './SearchBar.css'

const SearchBar = props => (
  <div className="search-bar">
    <input
      className="input"
      type="text"
      value={props.searchString}
      onChange={props.handleChange}
    />
  </div>
)

export default SearchBar
