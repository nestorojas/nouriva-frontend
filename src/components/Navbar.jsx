import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-100 shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-green-700">Nouriva</Link>
      {/* Future auth links here */}
    </nav>
  );
}

export default Navbar;