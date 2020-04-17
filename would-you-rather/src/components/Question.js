import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
  toParent = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/questions/${id}`)
  }

  render() {
    const { question, author, url } = this.props
    const id = question.id

    return (
      <Link to={`/questions/${id}`} className='question'>
        <h4>{`${author} asks`}</h4>
        <div className='question-info'>
          <img className='user-image' src={url} alt={'Avatar'} />
          <div className='question-info-text'>
            <h4>Would You Rather</h4>
            <p>{`${question.optionOne.text} or...`}</p>
          </div>
        </div>
        <button onClick={(e) => this.toParent(e, id)}>View Poll</button>
      </Link>
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

export default withRouter(connect(mapStateToProps)(Question))