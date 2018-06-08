import React from 'react'

import SearchBar from './SearchBar'
import User from './User'

class Search extends React.Component {
  state = {
    searchString: '',
  }

  handleChange = event => {
    this.setState({searchString: event.target.value})
  }

  render() {
    return (
      <div>
        <SearchBar
          searchString={this.state.searchString}
          handleChange={this.handleChange}
        />
        <User searchString={this.state.searchString} />
      </div>
    )
  }
}

export default Search
