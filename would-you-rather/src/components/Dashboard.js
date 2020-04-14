import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
  render() {
    const { authedUser, users, questions } = this.props

    return (
      <div>
        <ul>
          {
            questions.map((qid) => (
              <li key={qid}>
                <Question id={qid} />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser,
    users: Object.keys(users),
    questions: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)