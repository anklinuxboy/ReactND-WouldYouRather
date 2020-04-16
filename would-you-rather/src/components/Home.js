import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav'
import QuestionCreate from './QuestionCreate'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import QuestionDetail from './QuestionDetail'

class Home extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
        <Nav />
        <div>
          <Route path='/' exact component={Dashboard} />
          <Route path='/add' component={QuestionCreate} />
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/question/:id' component={QuestionDetail} />
        </div>
      </div>
      </Router>
    )
  }
}

export default connect()(Home)