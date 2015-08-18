'use strict'

import React from 'react'
import {RouteHandler} from 'react-router'

import 'sass/home/HomeHandler'

class HomeHandler extends React.Component{
  render() {
    return (
      <div className="main-box">
        <div className="welcome-text">
          Welcome to React Boilerplate
          <div className="author-label">
            Created by
            <span className="author-name">Thadeu Brito</span>
          </div>
        </div>
        <RouteHandler/>
      </div>
    )
  }
}

export default HomeHandler
