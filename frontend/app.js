fetch('http://localhost:3000/api/locations')
  .then(response => response.json())
  .then(locations => {
    var map = L.map('map').setView([locations[0].latitude, locations[0].longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    locations.forEach(location => {
      var marker = L.marker([location.latitude, location.longitude]).addTo(map);

      // Bind a popup to the marker
      marker.bindPopup(`<b>${location.name}</b><br>Latitude: ${location.latitude}<br>Longitude: ${location.longitude}`);
    });
});