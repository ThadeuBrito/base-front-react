'use strict'

import React from 'react'

import 'sass/home/HomeHandler'

class LoginHandler extends React.Component{
  render() {
    return (
      <div className="main-box">
        <div className="welcome-text">
          Welcome to Login Page
          <div className="author-label">
            Created by
            <span className="author-name">Thadeu Brito</span>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginHandler
