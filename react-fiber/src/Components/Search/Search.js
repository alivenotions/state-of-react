import React from 'react'
// import ReactDOM from 'react-dom'

import SearchBar from './SearchBar'
import User from './User'
import userData from './MOCK_DATA'

const AsyncMode = React.unstable_AsyncMode

class Search extends React.Component {
  state = {
    searchString: '',
    users: userData,
  }

  handleChange = event => {
    event.persist()
    // ReactDOM.unstable_deferredUpdates(() => 
    this.setState(state => ({searchString: event.target.value}))
    // )
  }

  render() {
    return (
      <div>
        <SearchBar
          searchString={this.state.searchString}
          handleChange={this.handleChange}
        />
        {/* <AsyncMode> */}
          <User searchString={this.state.searchString} users={this.state.users}/>
        {/* </AsyncMode> */}
      </div>
    )
  }
}

export default Search
