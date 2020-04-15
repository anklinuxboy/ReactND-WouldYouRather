import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleCreateQuestion } from '../actions/shared'

class QuestionCreate extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  }

  handleOptionOneChange = (e) => {
    const text = e.target.value

    this.setState(() => ({
      optionOne: text
    }))
  }

  handleOptionTwoChange = (e) => {
    const text = e.target.value

    this.setState(() => ({
      optionTwo: text
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOne, optionTwo } = this.state
    const { dispatch } = this.props

    dispatch(handleCreateQuestion(
      optionOne.trim(),
      optionTwo.trim()
    ))

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true
    }))
  }

  render() {

    const { optionOne, optionTwo, toHome } = this.state

    if (toHome) {
      // route to home
    }

    return (
      <div className='container'>
        <h3 className='page-header'>Add New Poll!</h3>
        <form className='create-question-form' onSubmit={this.handleSubmit}>
          <h3 className='form-header'>Would you rather...</h3>
          <input
            className='question-option-input'
            placeholder='Option one text'
            value={optionOne}
            onChange={this.handleOptionOneChange}
          />
          <input
            className='question-option-input'
            placeholder='Option two text'
            value={optionTwo}
            onChange={this.handleOptionTwoChange}
          />
          <button
            className='btn'
            type='submit'
            disabled={optionOne === '' || optionTwo === ''}
            >
              Submit
          </button>
        </form>
      </div>
    )
  }

}

export default connect()(QuestionCreate)