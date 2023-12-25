import L from "leaflet";
import 'leaflet/dist/leaflet.css';

export interface Gebiet {
    id: string;
    name: string,
    lastUpdate: string,
    openingHours: string,
    numberOfAnlagen: number,
    xCoordinate: number,
    yCoordinate: number,
    website? :string,
    region?: string,
    rating?: number, 
    price?: number 
}

export const customIcon = new L.Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });