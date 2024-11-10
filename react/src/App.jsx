import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';

const API_URL = 'https://fakestoreapi.com/products';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        {/* Centered container for Navbar and main content */}
        <Navbar cartCount={cart.length} />
        
        <main className="flex-grow flex justify-center items-center">
          <Routes>
            {/* Redirect from root `/` to `/products` */}
            <Route path="/" element={<Navigate to="/products" />} />

            {/* Product Page Route */}
            <Route
              path="/products"
              element={<ProductList products={products} addToCart={addToCart} />}
            />

            {/* Cart Page Route */}
            <Route
              path="/cart"
              element={
                <div className="w-full max-w-5xl p-6">
                  <CartPage
                    cart={cart}
                    removeFromCart={removeFromCart}
                    updateQuantity={updateQuantity}
                  />
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
