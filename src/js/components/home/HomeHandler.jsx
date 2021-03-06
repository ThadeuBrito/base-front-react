'use strict'

import React from 'react'
import {RouteHandler} from 'react-router'
import Header from 'js/components/share/Header'
import Map from 'js/components/map/Map'
import SideBar from 'js/components/share/SideBar'

import 'sass/home/HomeHandler'
import 'sass/share/Header'

class HomeHandler extends React.Component{
  render() {
    return (
      <div>
        <Header/>
        <Map/>
        <SideBar/>
        <RouteHandler/>
      </div>
    )
  }
}

export default HomeHandler
