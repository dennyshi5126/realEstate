import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {

  render () {
    return (
      <header>
          <div className = 'logo'>logo</div>
          <div className = 'links'>
            <ul>
                <li><a href='#'>Create Ads</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Log In</a></li>
                <li><a href='#' className = 'regButton'>Register</a></li>
            </ul>
          </div>
      </header>
    )
  }


}