import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center text-white">
      <Link to="/" className="text-2xl font-bold">
        RIAN SHOP
      </Link>
      <Link to="/cart" className="relative bg-blue-600 text-white py-2 px-4 rounded ml-4">
        Cart ({cartCount})
      </Link>
    </nav>
  );
}

export default Navbar;
