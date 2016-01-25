function initMap(){
  var mapView = document.getElementById('map');
  var map = new google.maps.Map(mapView,{
    center: {lat: 47.609895, lng:-122.330259},
    zoom: 7
  });
}
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
var ratLatLng = {lat:46.1776465, lng:-117.6790793};
function addMarker(){
  var marker = new google.maps.Marker({
    position: ratLatLng,
    map: map
  });
}
