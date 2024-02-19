import React from 'react';
import Navigation from './Navigation'; 

function Header() {
  return (
    <header className="bg-secondary text-white py-3">
      <h1>Mikey Whipple</h1>
      <nav className="nav justify-content-center">
        <Navigation />
      </nav>
    </header>
  );
}

export default Header;