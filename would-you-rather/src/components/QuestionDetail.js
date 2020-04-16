import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleAnswerQuestion } from '../actions/shared'

class QuestionDetail extends Component {
  state = {
    selectedOption: 'optionOne'
  }

  onChange = (e) => {
    this.setState({ selectedOption: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()

    const { dispatch, id } = this.props
    dispatch(handleAnswerQuestion(id, this.state.selectedOption))
  }

  render() {
    const { question, authedUser, author, url } = this.props
    const { selectedOption } = this.state

    if (question === null || question === undefined) {
      return <p>{"This question doesn't exist"}</p>
    }

    const { optionOne, optionTwo } = question

    let poll = true
    if (optionOne.votes.includes(authedUser) 
      || optionTwo.votes.includes(authedUser)) {
        poll = false
      }
    const optionOneVotes = optionOne.votes.length
    const optionTwoVotes = optionTwo.votes.length
    const totalVotes = optionOneVotes + optionTwoVotes

    return (
      <div className='container'>
        <div className='question-detail'>
          <h3>{`Asked by ${author}`}</h3>
          <div className='question-detail-info'>
            <img className='user-image' src={url} alt={'Avatar'} />
            <div className='detail'>
              <h4>Would You Rather</h4>
              {
                poll 
                ? <form onSubmit={this.onSubmit}>
                    <div className='radio-label'>
                      <label>
                        <input type='radio' name='option' value='optionOne' checked={selectedOption === 'optionOne'} onChange={this.onChange} />
                        {optionOne.text}
                      </label>
                    </div>
                    <div className='radio-label'>
                      <label>
                        <input type='radio' name='option' value='optionTwo' checked={selectedOption === 'optionTwo'} onChange={this.onChange} />
                        {optionTwo.text}
                      </label>
                    </div>
                    <input type='submit' value='Submit' />
                  </form>
                : <div>
                    <div className={optionOne.votes.includes(authedUser) ? 'user-selected' : 'user-not-selected'}>
                      <p className={optionOne.votes.includes(authedUser) ? 'show' : 'hide'}>** You selected this option 🤘 **</p>
                      <p className='option-text'>{optionOne.text}</p>
                      <p>{`${Math.round((optionOneVotes/(totalVotes))*100)}% of people voted for this`}</p>
                      <p>{`${optionOneVotes} out of ${totalVotes}`}</p>
                    </div>
                    <div className={optionTwo.votes.includes(authedUser) ? 'user-selected' : 'user-not-selected'}>
                      <p className={optionTwo.votes.includes(authedUser) ? 'show' : 'hide'}> ** You selected this option 🤘 **</p>
                      <p className='option-text'>{question.optionTwo.text}</p>
                      <p>{`${Math.round((optionTwoVotes/(totalVotes))*100)}% of people voted for this`}</p>
                      <p>{`${optionTwoVotes} out of ${totalVotes}`}</p>
                    </div>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params
  const question = questions[id]
  let author = ''
  let url = ''
  if (question !== undefined) {
    author = users[question.id.author].name
    url = users[question.id.author].avatarURL
  }

  return {
    id,
    question: questions[id],
    authedUser,
    author: author,
    url: url,
  }
}

export default connect(mapStateToProps)(QuestionDetail)
