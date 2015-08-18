'use strict'

import React from 'react'

import 'sass/pages/NotFound'

class NotFound extends React.Component{
  render() {
    return (
      <div className="main-box">
        <div className="welcome-text">
          Page Not Found 404
          <div className="author-label">
            Created by
            <span className="author-name">Thadeu Brito</span>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound
