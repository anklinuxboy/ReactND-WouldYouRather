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
    const { id, question, authedUser, author, url } = this.props

    console.log('Question ', question)

    const { selectedOption } = this.state

    return (
      <div className='container'>
        <div className='question-detail'>
          <h3>{`Asked by ${author}`}</h3>
          <div className='question-detail-info'>
            <img className='user-image' src={url} alt={'Avatar'} />
            <div className='detail'>
              <h4>Would You Rather</h4>
              <form onSubmit={this.onSubmit}>
                <div className='radio-label'>
                  <label>
                    <input type='radio' name='option' value='optionOne' checked={selectedOption === 'optionOne'} onChange={this.onChange} />
                    {question.optionOne.text}
                  </label>
                </div>
                <div className='radio-label'>
                  <label>
                    <input type='radio' name='option' value='optionTwo' checked={selectedOption === 'optionTwo'} onChange={this.onChange} />
                    {question.optionTwo.text}
                  </label>
                </div>
                <input type='submit' value='Submit' />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params

  return {
    id,
    question: questions[id],
    authedUser,
    author: users[questions[id].author].name,
    url: users[questions[id].author].avatarURL,
  }
}

export default connect(mapStateToProps)(QuestionDetail)
