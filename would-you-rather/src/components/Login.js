import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginUser from './LoginUser'

class Login extends Component {
  render() {
    return (
      <div className='login-user-container'>
        <ul className='login-user-list'>
          {
            this.props.userIds.map((userId) => (
              <li className='login-user-item' key={userId}>
                <LoginUser id={userId} />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(Login)