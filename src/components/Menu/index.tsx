import * as React from 'react'
import { NavLink } from 'react-router-dom'

import './style.scss'

class Menu extends React.Component {
  render() {
    return (
      <nav className='menu'>
        <ul className='menu__list'>
          <li className='menu__item'>
            <NavLink
              to='/section-1'
              className='menu__link'
              activeClassName='active'
              exact
            >
              Section 1
            </NavLink>
          </li>
          <li className='menu__item'>
            <NavLink
              to='/section-2'
              className='menu__link'
              activeClassName='active'
              exact
            >
              Section 2
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Menu
