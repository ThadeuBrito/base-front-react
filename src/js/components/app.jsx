'use strict'

import React from 'react'
import 'sass/main'

class App extends React.Component{
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
      </div>
    )
  }
}

export default App
