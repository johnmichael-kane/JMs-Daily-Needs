// Navbar.tsx

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/nutrition">Nutrition</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/metronome">Metronome</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/account">Account</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;