function initMap(){
  var mapView = document.getElementById('map');
  var map = new google.maps.Map(mapView,{
    center: {lat: 44.540, lng: -78.546 },
    zoom: 7
  });
}
