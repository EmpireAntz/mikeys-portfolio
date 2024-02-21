import React from 'react';
import Navigation from './Navigation'; 

function Header() {
  return (
    <header className="bg-secondary text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1>Mikey Whipple</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;