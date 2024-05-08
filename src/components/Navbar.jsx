import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="text-white font-bold text-lg">Logo</Link>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/about" className="text-white">About</Link>
          <Link to="/fund" className="text-white">Fund</Link>
          <Link to="/donation" className="text-white">Donation</Link>
          <Link to="/contact" className="text-white">Contact</Link>
          <Link to="/login" className="text-white">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
