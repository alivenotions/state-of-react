import React from 'react'

import './User.css'

class User extends React.Component {

  render() {
    return(
      <div className="users">
        <ul>
          {this.props.users.map(user => (
            <li key={user.id}>{user.first_name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default User
