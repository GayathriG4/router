import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav className="bg-gray-800 p-4 w-full flex justify-between items-center text-white fixed top-0 left-0 z-10">
      <Link to="/" className="text-xl font-bold">
        RIAN SHOP
      </Link>
      <Link to="/cart" className="bg-blue-600 text-white py-1 px-3 rounded text-sm">
        Cart ({cartCount})
      </Link>
    </nav>
  );
}

export default Navbar;
