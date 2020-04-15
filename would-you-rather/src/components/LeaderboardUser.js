import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderboardUser extends Component {
  render() {
    const { name, avatarURL, answers, questions } = this.props.user
    const numQuestions = questions.length
    const numAnswers = Object.keys(answers).length

    return (
      <div className='leaderboard-user'>
        <img className='user-image' src={avatarURL} alt={'Avatar'} />
        <div className='user-details'>
          <h3>{name}</h3>
          <p>{`Answered: ${numAnswers}`}</p>
          <p>{`Questions Asked: ${numQuestions}`}</p>
        </div>
        <div>
          <h4>Total</h4>
          <p>{numAnswers + numQuestions}</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id]
  }
}

export default connect(mapStateToProps)(LeaderboardUser)