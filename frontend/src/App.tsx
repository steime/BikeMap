import React, { useState, useEffect } from 'react';
import './App.css';
import MapComponent from './Components/MapComponent';
import { Gebiet } from './types';
import SearchBar from './Components/SearchBar';
import logo from './CCBikersLogo.jpg'
import BurgerMenu from './Components/BurgerMenu';
import SidePanel from './Components/SidePanel';

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
      <header className="AppHeader">
        <img src={logo} alt="Logo" className='Logo'></img>
        <h2>CC-Bikers</h2>
        <SearchBar onSearch={handleSearch} gebiete={gebiete} />
        <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} onClick={toggleMenu} />
      </header>
      <div className='MapContainer'>
        <SidePanel onSearch={handleSearch} gebiete={gebiete} />
        <MapComponent gebiete={filteredGebiete} />
      </div>
      <footer className='AppFooter'>
        <a className='AppLink' href='www.goggle.ch'>Impressum</a>
      </footer>
    </div>
  );
};

export default App;
