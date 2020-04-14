import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class LoginUser extends Component {

  onUserSelect = (e) => {
    e.preventDefault()

    const { dispatch, id } = this.props
    dispatch(setAuthedUser(id))
  }

  render() {
    const { name, url } = this.props

    return (
      <div className='login-user-list-item' onClick={this.onUserSelect}>
        <img className='user-image' src={url} alt={'Avatar'} />
        <h4>{name}</h4>
      </div>
    )
  }
}

function mapStateToProps({ users }, { id }) {
  const name = users[id].name
  const url = users[id].avatarURL

  return {
    id,
    name,
    url,
  }
}

export default connect(mapStateToProps)(LoginUser)