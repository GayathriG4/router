import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';
import CartModal from './components/CartModal';

const API_URL = 'https://fakestoreapi.com/products';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch products data from API on component mount
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Function to add product to cart
  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      alert('Item already added to the cart');
    } else {
      setCart([...cart, product]);
    }
  };

  // Function to remove product from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className="App">
      {/* Navbar component with cart count */}
      <Navbar cartCount={cart.length} openModal={() => setIsModalOpen(true)} />
      
      {/* Product List */}
      <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      
      {/* Cart Modal */}
      {isModalOpen && (
        <CartModal
          cart={cart}
          removeFromCart={removeFromCart}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
