import React, { useState, useEffect } from 'react';
import './App.css';
import MapComponent from './MapComponent';
import { Gebiet } from './types';

const App: React.FC = () => {

  const [gebiete, setGebiete] = useState<Gebiet[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/gebiet')
            .then(response => response.json())
            .then(data => {
                setGebiete(data); // Assuming the data is in the format expected by MapComponent
            })
            .catch(error => {
                console.error('Error fetching gebiete:', error);
            });
    }, []);

  return (
      <div className="App">
          <h1>CC-Bikers</h1>
          <MapComponent gebiete={gebiete}/>
      </div>
  );
};

export default App;
