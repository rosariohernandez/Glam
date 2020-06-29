function initializeMap() {
  var glam = {
    lat: 43.6698287415683,
    lng: -79.3887230627839
  };   
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: glam
  });
  var marker = new google.maps.Marker({
    position: glam,
    map: map 
  });
} 
   