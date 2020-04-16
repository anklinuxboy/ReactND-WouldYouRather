import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionDetail extends Component {
  render() {
    return (
      <div>
        Question Detail
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions }, props) {
  const { id } = props.match.params

  return {
    id,
    question: questions[id]
  }
}

export default connect(mapStateToProps)(QuestionDetail)
