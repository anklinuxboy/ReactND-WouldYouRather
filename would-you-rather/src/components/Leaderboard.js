import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderboardUser from './LeaderboardUser'

class Leaderboard extends Component {
  render() {
    return (
      <div className='container'>
        <ul>
          {
            this.props.userIds.map((id) => (
              <li key={id}>
                <LeaderboardUser id={id} />
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
      .sort((a, b) => 
        (Object.keys(users[b].answers).length + users[b].questions.length)
        - (Object.keys(users[a].answers).length + users[a].questions.length)
      )
  }
}

export default connect(mapStateToProps)(Leaderboard)