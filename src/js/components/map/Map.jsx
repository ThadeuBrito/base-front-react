'use strict'

import React from 'react'

import PointActions from 'js/actions/PointActions'
import PointStore from 'js/stores/PointStore'
import SideBarActions from 'js/actions/SideBarActions'
import SideBar from 'js/components/share/SideBar'

import PointInfo from 'js/components/point/PointInfo'

import GoogleMaps from 'js/utils/GoogleMaps'

import 'sass/map/Map'

class Map extends React.Component{

  constructor() {
    super()
    this.state = this._getInitialState();
  }

  _getInitialState() {
    return {
      points: PointStore.points,
      map: null
    };
  }

  _onChange() {
    this.setState(this._getInitialState());
  }

  componentDidMount() {
    PointStore.addChangeListener(this._onChange.bind(this));
    this.buildMap()
    PointActions.list()
  }

  getCurrentPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(function(position) {
        return position
      });
  }

  buildMap() {
    GoogleMaps.defineHeight('map_canvas')

    const mapOptions = {
      center: {lat: -27.1272657, lng: -48.6043775},
      zoom: 16
    }
    const map = GoogleMaps.createMap('map_canvas', mapOptions);

    google.maps.event.addDomListener(window, 'resize', () => {
      GoogleMaps.defineHeight('map_canvas')
      map.setCenter(map.getCenter());
    })

    // Add points when load
    google.maps.event.addDomListener(window, 'load', () => {
      this.setState({map: map})
      this.renderPoints()
    })

    // Update points when change zoom
    map.addListener('zoom_changed', () => {
      console.log(`zoom: ${map.zoom}, lat: ${map.center.lat()}, lng: ${map.center.lng()}`)
    })

  }

  renderPoints() {
    let points = this.state.points

    points.map( (point) => {

      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(point.latitude, point.longitude),
        map: this.state.map,
        point: point
      })

      marker.addListener('click', function() {
        this.openSideBar(marker.point)
      }.bind(this));

    });
  }

  openSideBar(point) {
    SideBarActions.open(this.pointInfor.bind(this, point))
  }

  pointInfor(point) {
    return(
      <PointInfo point={point}/>
    )
  }

  render() {
    return (
        <div className="row">
          <div id="map_canvas" className="twelve columns"></div>
        </div>
    )
  }
}

export default Map
