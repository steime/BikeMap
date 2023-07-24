import L from "leaflet";

export function initializeMap() {
  // Leaflet map initialization
  const map = L.map("map").setView([51.505, -0.09] as L.LatLngExpression, 13);

  // Add a tile layer to the map (using OpenStreetMap tiles as an example)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

  // Add markers for the clickable locations (example coordinates)
  const locations: { name: string; latlng: L.LatLngExpression }[] = [
    { name: "Location 1", latlng: [51.505, -0.09] as L.LatLngExpression },
    { name: "Location 2", latlng: [51.51, -0.1] as L.LatLngExpression },
    // Add more locations as needed
  ];

  locations.forEach((loc) => {
    const marker = L.marker(loc.latlng).addTo(map);
    marker.bindPopup(`<b>${loc.name}</b><br>Coordinates: ${loc.latlng}`).openPopup();
  });
}
