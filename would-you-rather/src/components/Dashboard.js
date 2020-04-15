import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
  render() {
    const { authedUser, users, unansweredQuestions, answeredQuestions } = this.props

    return (
      <div className='container'>
        <h3 className='category-header'>Unanswered Questions</h3>
        <ul>
          {
            unansweredQuestions.map((qid) => (
              <li key={qid}>
                <Question id={qid} />
              </li>
            ))
          }
        </ul>
        <h3 className='category-header'>Answered Questions</h3>
        <ul>
          {
            answeredQuestions.map((qid) => (
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

  const unansweredQuestions = []
  const answeredQuestions = []

  const qids = Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  qids.forEach(qid => {
    if (questions[qid].optionOne.votes.length === 0 
      && questions[qid].optionTwo.votes.length === 0) {
        unansweredQuestions.push(qid)
    } else {
      answeredQuestions.push(qid)
    }
  })


  return {
    authedUser,
    users: Object.keys(users),
    unansweredQuestions,
    answeredQuestions
  }
}

export default connect(mapStateToProps)(Dashboard)