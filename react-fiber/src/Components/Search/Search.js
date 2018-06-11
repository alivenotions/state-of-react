import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './SearchBar'
import User from './User'
import userData from './MOCK_DATA'

class Search extends React.Component {
  state = {
    searchString: '',
    users: userData,
  }

  handleChange = event => {
    ReactDOM.flushSync(() => this.setState({searchString: event.target.value},
      () => {
        const searchString = event.target.value.trim().toLowerCase()
        
        if(searchString.length >= 0) {
          const users = userData.filter(
            user => user.first_name.toLowerCase().match(searchString)
          )
          // ReactDOM.unstable_deferredUpdates(() => { this.setState({users}) })
          this.setState({users})
        }
      }
    )
  )
  }

  render() {
    return (
      <div>
        <SearchBar
          searchString={this.state.searchString}
          handleChange={this.handleChange}
        />
        <User users={this.state.users}/>
      </div>
    )
  }
}

export default Search
