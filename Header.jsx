import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <span className="header-logo">plex</span>
      </div>
      <div className="header-center">
        <nav className="header-menu">
          <button className="menu-item "><i class="fa-solid fa-house"></i>Home</button>
          <button className="menu-item"><i class="fa-solid fa-tv"></i>Live TV</button>
          <button className="menu-item"><i class="fa-brands fa-youtube"></i>On Demand</button>
          <button className="menu-item"><i class="fa-solid fa-compass"></i>Discover</button>
        </nav>
        <div className="header-search">
          <input type="text" placeholder="Search" />
          
        </div>
      </div>
      <div className="header-right">
        <button className="open-plex-btn">Sign In</button>
      </div>
    </header>
  );
}

export default Header; 