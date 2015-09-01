export default {

  createMap(element, options) {
    return new google.maps.Map(document.getElementById(element), options);
  },

  defineHeight(element) {
    window.document.getElementById(element).style.height = (window.innerHeight - 100)+'px'
  },

  centralize(map) {

      debugger
    google.maps.event.addDomListener(window, 'resize', () => {
      GoogleMaps.defineHeight('map_canvas')
      map.setCenter(map.getCenter())
    })


  }
  // init() {
  //   this.loadScript(function() {
  //     let map = new google.maps.Map(document.getElementById('map'), {
  //       center: {lat: -34.397, lng: 150.644},
  //       zoom: 8
  //     });
  //   })
  // },

  // loadScript(callback) {
  //   const API_KEY = 'AIzaSyBj7gVf8K7wEPNYdcqw5GEtwp2x3qX3X-k'
  //   let src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`
  //   let script      = document.createElement("script")
  //       script.type = "text/javascript"
  //       script.src  = src
  //   if (callback)
  //     script.onload=callback;
  //   document.head.appendChild(script);
  // }
}
