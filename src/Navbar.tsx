import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="site-header sticky-top py-1">
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        <Link to="/" className="py-2 d-none d-md-inline-block">Home</Link>
        <Link to="/nutrition" className="py-2 d-none d-md-inline-block">Nutrition</Link>
        <Link to="/metronome" className="py-2 d-none d-md-inline-block">Metronome</Link>
        <a className="py-2 d-none d-md-inline-block">Albums</a>
        <Link to="/aboutme" className="py-2 d-none d-md-inline-block">About Me</Link>
        <Link to="/account" className="py-2 d-none d-md-inline-block">Account</Link>
        <Link to="/login" className="py-2 d-none d-md-inline-block">Login</Link>
        <Link to="/signup" className="py-2 d-none d-md-inline-block">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;