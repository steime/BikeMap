import React, { useState, useEffect } from 'react';
import './App.css';
import MapComponent from './MapComponent';
import { Gebiet } from './types';
import SearchBar from './SearchBar';
import logo from './CCBikersLogo.jpg'
import BurgerMenu from './BurgerMenu';

const App: React.FC = () => {

  const [gebiete, setGebiete] = useState<Gebiet[]>([]);
  const [filteredGebiete, setFilteredGebiete] = useState<Gebiet[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("Menu toggled", !isMenuOpen);
      };

      return (
        <div className="App">
            <header className="App-Header">
              <img src={logo} alt="Logo" className='Logo'></img>
              <h2>CC-Bikers</h2>
              <SearchBar onSearch={handleSearch} gebiete={gebiete}/>
              <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} onClick={toggleMenu} />
            </header>
            <div className='Map-Container'>
                <MapComponent gebiete={filteredGebiete}/>
            </div>
            <footer className='App-Footer'>
                <a className='App-Link' href='www.goggle.ch'>Impressum</a>
            </footer>
        </div>
    );
};

export default App;
