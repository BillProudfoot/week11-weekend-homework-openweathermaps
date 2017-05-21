var initialize = function{
  var mapDiv = document.getElementById('main-map');
  var londonButton = document.querySelector('#london-button');
  var localButton = document.querySelector('#local-button');

  var center = { lat: 40.712, lng: -74.005 };

  var mainMap = new MapWrapper(mapDiv, center, 10);

  mainMap.addClickEvent();
  mainMap.addInfoWindow(center, "Here is todays forecast");

  var goToLondon = function(){
    var london = { lat: 51.5074, lng: 0.1278 };
    mainMap.openweathermap.setCenter(london);
    mainMap.addInfoWindow(london, "<h3>London</h3>");
  }

  var findLocation = function(){
    mainMap.geoLocate();
  }

  londonButton.addEventListener('click', goToLondon);
  whereAmIButton.addEventListener('click', findLocation);
}

window.addEventListener('load', initialize);