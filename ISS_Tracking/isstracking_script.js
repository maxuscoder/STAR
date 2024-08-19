'use strict';
let map;
let marker;
let circle;

function moveISS(marker) {
  fetch('https://api.wheretheiss.at/v1/satellites/25544')
    .then(res => res.json())
    .then(data => {
      const lat = data.latitude;
      const lng = data.longitude;
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
    iconSize: [90, 50],
    iconAnchor: [50, 25],
    popupAnchor: [-3, -76],
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
