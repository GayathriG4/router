import React from 'react';

function CartPage({ cart, removeFromCart, updateQuantity }) {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountedTotal = totalPrice * 0.9; // 10% discount

  return (
    <div className="bg-gray-100 min-h-screen w-full flex justify-center items-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-xl">Your cart is empty.</p>
        ) : (
          <div className="w-full">
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center justify-between border-b pb-4 mb-4">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.title} className="h-20 w-20 object-contain" />
                    <div className="text-left flex-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-gray-700">${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      +
                    </button>
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

            <div className="text-center mt-6">
              <p className="text-lg font-semibold">Total Price: ${totalPrice.toFixed(2)}</p>
              <p className="text-lg font-semibold">Discounted Price: ${discountedTotal.toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
