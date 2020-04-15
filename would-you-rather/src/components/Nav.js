import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li className='nav-element'>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li className='nav-element'>
          <NavLink to='/add' activeClassName='active'>
            Add Poll
          </NavLink>
        </li>
        <li className='nav-element'>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}