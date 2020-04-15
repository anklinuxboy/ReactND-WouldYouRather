import React, { Component } from 'react'
import { connect } from 'react-redux'

import Question from './Question'

class QuestionContainer extends Component {
  render() {
    return (
      <div>
          <ul>
          {
            this.props.questionIds.map((qid) => (
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

export default connect()(QuestionContainer)