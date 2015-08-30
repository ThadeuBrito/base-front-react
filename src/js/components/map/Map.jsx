'use strict'

import React from 'react'

import 'sass/map/Map'

class Map extends React.Component{


  getCurrentPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(function(position) {
        return position
      });
  }

  loadMarkers(map) {
    var marker = new google.maps.Marker({
      position: {lat: -27.1272657, lng: -48.6043775},
      map: map,
      title: 'Hello World!'
    });
  }

  componentDidMount() {
    window.document.getElementById('map_canvas').style.height = (window.innerHeight - 100)+'px'

    const mapOptions = {
      center: {lat: -27.1272657, lng: -48.6043775},
      zoom: 18
    }
    const map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

    let center = map.getCenter();
    google.maps.event.addDomListener(window, 'resize', function() {
        window.document.getElementById('map_canvas').style.height = (window.innerHeight - 100)+'px'
        map.setCenter(center);
    });

    this.loadMarkers(map)
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
