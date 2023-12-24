fetch('http://localhost:3000/api/locations')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(locations => {
    console.log(locations);  // Corrected to 'locations'
    var map = L.map('map').setView([locations[0].xCoordinate, locations[0].yCoordinate], 13);  // Adjust these coordinates as needed

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    locations.forEach(location => {
      if (typeof location.xCoordinate === 'number' && typeof location.yCoordinate === 'number') {
        var marker = L.marker([location.xCoordinate, location.yCoordinate]).addTo(map);
        marker.bindPopup(`<b>${location.name}</b><br>Latitude: ${location.xCoordinate}<br>Longitude: ${location.yCoordinate}`);
      } else {
        console.log('Invalid coordinates for location:', location);
      }
    });
  }).catch(error => {
    console.error('Fetch error:', error);
  });;
