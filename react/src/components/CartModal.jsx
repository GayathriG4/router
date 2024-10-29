import React from 'react';

function CartModal({ cart, removeFromCart, closeModal }) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4 text-center">Cart</h2>
        
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between mb-4 text-center">
                {/* Container to hold all elements in a centered column */}
                <div className="flex items-center justify-center space-x-4 w-full">
                  {/* Centered Product Image */}
                  <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />

                  {/* Centered Product Title */}
                  <span className="font-medium text-center flex-1">{item.title}</span>

                  {/* Centered Product Price */}
                  <span className="text-gray-700 text-center flex-1">${item.price}</span>

                  {/* Centered Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <button onClick={closeModal} className="mt-4 bg-gray-500 text-white py-2 px-4 rounded mx-auto block">
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;
