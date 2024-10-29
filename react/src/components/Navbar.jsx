import React from 'react';

function Navbar({ cartCount, openModal }) {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center text-white">
      <h1 className="text-2xl">RIAN SHOP</h1>
      <button onClick={openModal} className="relative bg-blue-600 text-white py-2 px-4 rounded">
        Cart ({cartCount})
      </button>
    </nav>
  );
}

export default Navbar;
