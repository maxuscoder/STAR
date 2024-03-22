'use strict';
let map;
let marker;
let circle;

function moveISS(marker) {
  fetch('http://api.open-notify.org/iss-now.json')
    .then(res => res.json())
    .then(data => {
      const lat = data['iss_position']['latitude'];
      const lng = data['iss_position']['longitude'];
      marker.setLatLng([lat, lng]);
      circle.setLatLng([lat, lng]);
    })
    .catch(error => console.error('Error:', error));
  setTimeout(function () {
    moveISS(marker);
  }, 5000);
}

document.addEventListener('DOMContentLoaded', function () {
  map = L.map('map').setView([51.505, -0.09], 3);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const iss_icon = L.icon({
    iconUrl: 'images/iss.png',
    iconSize: [90, 50], // Size of the marker image
    iconAnchor: [50, 25], // Point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // Point from which the popup should open relative to the iconAnchor
    //shadowUrl: 'my-icon-shadow.png', // Optional shadow image
    //shadowSize: [68, 95], // Size of the shadow image
    // shadowAnchor: [22, 94],
  });

  marker = L.marker([50, 50], { icon: iss_icon }).addTo(map);
  circle = L.circle([51.508, -0.11], {
    color: '#658EBD',
    fillColor: '#429AFF',
    fillOpacity: 0.5,
    radius: 200000,
  }).addTo(map);
  moveISS(marker);
});
