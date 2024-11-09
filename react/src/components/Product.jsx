import React from 'react';

function Product({ product, addToCart }) {
  // Truncate the description to 100 characters
  const shortDescription = product.description.length > 100
    ? `${product.description.slice(0, 100)}...`
    : product.description;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center">
      <img src={product.image} alt={product.title} className="h-40 mb-4 object-contain" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-500 mt-2">${product.price}</p>
      <p className="text-gray-700 text-sm mt-2">{shortDescription}</p> {/* Truncated description */}
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;