import React from 'react'

import './User.css'

class User extends React.Component {

  render() {
    let { users } = this.props
    const searchString = this.props.searchString.trim().toLowerCase()

    if(searchString.length > 0) {
      users = users.filter(
        user => user.first_name.toLowerCase().match(searchString)
      )
    }

    return(
      <div className="users">
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.first_name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default User
