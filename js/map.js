var hikeLocations = [
    ['ChIJux_5uX9-kFQRXfq9V9dRHew'],
    ['ChIJg3Y2Kwl9kFQROXw23USWrFg']

  // ['Rattlesnake Ridge', 'ChIJux_5uX9-kFQRXfq9V9dRHew'],
  // ['Pretzel Tree Trail', 47.4808, -122.0554],
  // ['Lower Coal Creek Trail', 47.5542, -122.166],
  // ['Wildside Trail', 47.5348, -122.1288],
  // ['Wenatchee Crest Snowshow', 47.3423, -120.6012],
  // ['Little Si', 47.4880, -121.7231],
  // ['Poo Poo Point', 47.5195, -122.0299],
  // ['Bandera Mountain', 47.4247, -121.5836],
  // ['Eagle Creek', 45.6400, -121.9208],
  // ['Wallace Falls', 47.8669, -121.6780],
];

function initMap(){
  var mapView = document.getElementById('map');
  var map = new google.maps.Map(mapView,{
    center: {lat: 47.609895, lng:-122.330259},
    zoom: 6

  });
  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

  for (var i = 0; i < hikeLocations.length; i++) {
    service.getDetails({
      placeId: hikeLocations[i]
    }, function(place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log('google.maps.places.PlacesServiceStatus');
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
          place.formatted_address + '</div>' + '<div><strong>' + place.vicinity + '</strong><br>');
          infowindow.open(map, this);
        });
      }
    });
  }

  // var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  // for (var i=0;i<hikeLocations.length;i++){
  //   var marker = new google.maps.Marker({
  //     position:new google.maps.LatLng(hikeLocations[i][1],hikeLocations[i][2]),
  //     map: map
  //   });
  // }
}
