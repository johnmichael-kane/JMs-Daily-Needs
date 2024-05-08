// Navbar.tsx

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="site-header sticky-top py-1">
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        <a className="py-2 d-none d-md-inline-block" href="/nutrition">Nutrition</a>
        <a className="py-2 d-none d-md-inline-block" href="/metronome">Metronome</a>
        <a className="py-2 d-none d-md-inline-block" href="/about">About Me</a>
        <a className="py-2 d-none d-md-inline-block" href="/account">Account</a>
      </div>
    </nav>
  );
};

export default Navbar;