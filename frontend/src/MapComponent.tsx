import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Gebiet, customIcon } from './types';

interface MapComponentProps {
    gebiete: Gebiet[];
}

const MapComponent: React.FC<MapComponentProps> = ({ gebiete }) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<L.Map | null>(null);

    useEffect(() => {
        if (mapRef.current && !mapInstance.current) {
            // Initialize the map
            mapInstance.current = L.map(mapRef.current).setView([47, 8.4], 8.5);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(mapInstance.current);
        }

        if (mapInstance.current) {
            gebiete.forEach(gebiet => {
                const popupContent = `
                <div>
                    <h4>${gebiet.name}</h4>
                    <p>${gebiet.openingHours}</p>
                    <p>Coordinates: ${gebiet.xCoordinate}, ${gebiet.yCoordinate}</p>
                    <a href="${gebiet.website}" target="_blank" class="Button-Style">Webseite</a>
                </div>
                `

                L.marker([gebiet.xCoordinate, gebiet.yCoordinate], { icon: customIcon })
                    .addTo(mapInstance.current!)
                    .bindPopup(popupContent);
            });
        }

        return () => {
            // Cleanup map instance on unmount
            if (mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
            }
        };
    }, [gebiete]);

    return <div className = "Map-Component" ref={mapRef}/>;
};

export default MapComponent;
