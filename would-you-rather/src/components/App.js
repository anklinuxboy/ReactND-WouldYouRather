import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'

import Login from './Login'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import QuestionCreate from './QuestionCreate'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar />
        <div>
          {
            this.props.loading
            ? <Login />
            : <Leaderboard />
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
