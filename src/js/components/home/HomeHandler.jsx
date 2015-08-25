'use strict'

import React from 'react'
import {RouteHandler} from 'react-router'
import Header from 'js/components/share/Header'

import 'sass/home/HomeHandler'
import 'sass/share/Header'

class HomeHandler extends React.Component{
  render() {
    return (
      <div className="row">
        <Header/>
        home
        <RouteHandler/>
      </div>
    )
  }
}

export default HomeHandler
