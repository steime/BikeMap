import React from 'react';

interface BurgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  onClick: () => void; // Add this line
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, toggleMenu, onClick }) => {
  return (
    <div className={`Menu ${isOpen ? 'open' : ''}`} onClick={onClick}>
      {/* Menu items */}
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <button onClick={toggleMenu}>Close</button>
    </div>
  );
};

export default BurgerMenu;
