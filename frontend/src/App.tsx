import React from 'react';
import './App.css';
import logo from './CCBikersLogo.jpg'
import BodyContainer from './Components/BodyContainer';

const App: React.FC = () => {

  return (
    <div className="App">
      <header className="AppHeader">
        <img src={logo} alt="Logo" className='Logo'></img>
        <h2>CC-Bikers</h2>
      </header>
      <BodyContainer />
      <footer className='AppFooter'>
        <a className='AppLink' href='www.goggle.ch'>Impressum</a>
      </footer>
    </div>
  );
};

export default App;
