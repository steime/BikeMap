import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Gebiet, customIcon } from './types';

interface MapComponentProps {
    gebiete: Gebiet[];
}

const MapComponent: React.FC<MapComponentProps> = ({gebiete}) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<L.Map | null>(null);

    useEffect(() => {
        if (mapRef.current && !mapInstance.current) {
            // Initialize the map
            mapInstance.current = L.map(mapRef.current).setView([46, 9], 9);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(mapInstance.current);
        }

        if (mapInstance.current) {
            gebiete.forEach(gebiet => {
                L.marker([gebiet.xCoordinate, gebiet.yCoordinate],  { icon: customIcon })
                    .addTo(mapInstance.current!)
                    .bindPopup(gebiet.name);
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

    return <div ref={mapRef} style={{ height: '1800px' }} />;
};

export default MapComponent;
