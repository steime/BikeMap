import React, { useState, useEffect } from 'react';
import './App.css';
import MapComponent from './MapComponent';
import { Gebiet } from './types';
import SearchBar from './SearchBar';

const App: React.FC = () => {

  const [gebiete, setGebiete] = useState<Gebiet[]>([]);
  const [filteredGebiete, setFilteredGebiete] = useState<Gebiet[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/gebiet')
            .then(response => response.json())
            .then(data => {
                setGebiete(data);
                setFilteredGebiete(data);
            })
            .catch(error => {
                console.error('Error fetching gebiete:', error);
            });
    }, []);

    const handleSearch = (query: string) => {
        const filtered = gebiete.filter(gebiet =>
          gebiet.name.toLowerCase().includes(query.toLowerCase())
          // Add more conditions here if you want to filter by other fields
        );
        setFilteredGebiete(filtered);
      };

      return (
        <div className="App">
            <header className="App-header">
              <h2>CC-Bikers</h2>
              <SearchBar onSearch={handleSearch} gebiete={gebiete}/>
            </header>
            <div className='map-container'>
                <MapComponent gebiete={filteredGebiete}/>
            </div>
            <footer>
                <a href='www.goggle.ch'>Impressum</a>
            </footer>
        </div>
    );
};

export default App;
