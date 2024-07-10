import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import AboutUs from './components/AboutUs';
import ProductPage from './components/ProductPage';
import OrderDetailsPage from './components/OrderDetailsPage';
import CustomerSupportPage from './components/CustomerSupportPage';
import CartPage from './components/CartPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/order-details" element={<OrderDetailsPage />} />
          <Route path="/customer-support" element={<CustomerSupportPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
