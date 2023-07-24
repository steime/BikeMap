// src/location.ts
export interface Location {
    name: string;
    latlng: [number, number];
    description: string;
  }
  
  export const locations: Location[] = [
    {
      name: 'Location 1',
      latlng: [40.7128, -74.0060],
      description: 'Description for Location 1'
    },
    {
      name: 'Location 2',
      latlng: [34.0522, -118.2437],
      description: 'Description for Location 2'
    },
    // Add more locations as needed
  ];
  