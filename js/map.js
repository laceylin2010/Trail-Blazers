var hikeLocations = [
    ['ChIJux_5uX9-kFQRXfq9V9dRHew'],
    ['ChIJg3Y2Kwl9kFQROXw23USWrFg'],
    ['ChIJzZIh6chlkFQRLymmtgO_vvs'],
    ['ChIJBXxQvChpkFQRXhgEP3VwNAs'],
    ['ChIJ2ZiobrhokFQRSNdjuDiDL80'],
    ['ChIJE8C370I6mlQR0xlEMt5rMX4'],
    ['ChIJ52Dlp7FlkFQRBqLZdyZKY_8'],
    ['ChIJYU7JzRqCkFQRClmdSyAwrXo'],
    ['ChIJP0C9_LOnlVQRTNytXAfffX4'],
    ['ChIJcSyAW0m8mlQRaEMFJPYD10I'],
    ['ChIJwfFbyzv5hFQREar8lD92eUI'],
    ['ChIJ5XwsYep4mlQRvwrnu'],
    [' ChIJ2ZvyIuLllVQRegkC-kO-5ZU'],
    ['ChIJoQagVdb5llQR1TH4jACyxdE'],
    ['ChIJNbOX0WpgmlQRDSgN7D62UpY']


];

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.609895, lng: -122.330259},
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
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
}
