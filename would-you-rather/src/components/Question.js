import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    const { question, author, url } = this.props

    return (
      <div>
        <h4>{`${author} asks`}</h4>
        <div>
          <img className='user-image' src={url} alt={'Avatar'} />
          <div>
            <h6>Would You Rather</h6>
            <p>{question.optionOne.text}</p>
          </div>
        </div>
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