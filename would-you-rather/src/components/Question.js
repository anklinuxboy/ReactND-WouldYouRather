import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    const { question, author, url } = this.props

    return (
      <div className='question'>
        <h4>{`${author} asks`}</h4>
        <div className='question-info'>
          <img className='user-image' src={url} alt={'Avatar'} />
          <div className='question-info-text'>
            <h4>Would You Rather</h4>
            <p>{`${question.optionOne.text} or...`}</p>
          </div>
        </div>
        <button>View Poll</button>
      </div>
    )
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id]
  const author = users[question.author].name
  const url = users[question.author].avatarURL

  return {
    question,
    author,
    url
  }
}

export default connect(mapStateToProps)(Question)