import React from 'react';

function CartModal({ cart, removeFromCart, closeModal }) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2 lg:w-1/3 max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Cart</h2>
        
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 w-full">
                  {/* Centered Product Image */}
                  <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />

                  {/* Centered Product Title and Price */}
                  <div className="flex-1 text-center">
                    <span className="font-medium">{item.title}</span>
                  </div>
                  
                  <div className="text-gray-700 text-center flex-1">
                    ${item.price.toFixed(2)}
                  </div>

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
