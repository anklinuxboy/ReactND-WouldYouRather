import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setAuthedUser } from '../actions/authedUser'
import QuestionContainer from './QuestionContainer'

class Dashboard extends Component {
  state = {
    unansweredDisplay: 'show',
    answeredDisplay: 'hide'
  }

  toggleUnansweredDisplay = (e) => {
    e.preventDefault()
    this.setState((currState) => {
      return {
        unansweredDisplay: currState.unansweredDisplay === 'show' ? 'hide' : 'show'
      }
    })
  }

  toggleAnsweredDisplay = (e) => {
    e.preventDefault()
    this.setState((currState) => {
      return {
        answeredDisplay: currState.answeredDisplay === 'show' ? 'hide' : 'show'
      }
    })
  }

  onLogout = (e) => {
    e.preventDefault()

    this.props.dispatch(setAuthedUser(null))
  }

  render() {
    const { authedUser, url, unansweredQuestions, answeredQuestions } = this.props
    const { unansweredDisplay, answeredDisplay } = this.state
    return (
      <div>
        <div className='account'>
          <p>{authedUser}</p>
          <img className='account-user-image' src={url} alt='Avatar' />
          <button onClick={this.onLogout}>Logout</button>
        </div>
        <h3 className='category-header' onClick={this.toggleUnansweredDisplay}>Unanswered Questions</h3>
        <div className={`${unansweredDisplay}`}>
          <QuestionContainer questionIds={unansweredQuestions} />
        </div>
        <h3 className='category-header' onClick={this.toggleAnsweredDisplay}>Answered Questions</h3>
        <div className={`${answeredDisplay}`}>
          <QuestionContainer questionIds={answeredQuestions} />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }) {

  const unansweredQuestions = []
  const answeredQuestions = []

  const qids = Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  qids.forEach(qid => {
    if (questions[qid].optionOne.votes.includes(authedUser)
      || questions[qid].optionTwo.votes.includes(authedUser)) {
        answeredQuestions.push(qid)
    } else {
      unansweredQuestions.push(qid)
    }
  })


  return {
    authedUser,
    url: users[authedUser].avatarURL,
    unansweredQuestions,
    answeredQuestions
  }
}

export default connect(mapStateToProps)(Dashboard)