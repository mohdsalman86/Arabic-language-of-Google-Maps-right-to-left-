 
function initialize() {
  var mapOptions = {
    scaleControl: true,
    center: new google.maps.LatLng(26.06670, 50.55770),
    zoom: 10
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var marker = new google.maps.Marker({
    map: map,
    position: map.getCenter()
  });
  var infowindow = new google.maps.InfoWindow();
  infowindow.setContent('<b>هنا البحرين</b>');
  google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

 