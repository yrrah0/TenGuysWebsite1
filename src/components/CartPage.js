import React, { useState } from 'react';
import './CartPage.css';

const initialCart = [
  { id: 1, name: 'Jersey', price: 50, quantity: 2 },
  { id: 2, name: 'Hat', price: 20, quantity: 1 },
  { id: 3, name: 'Mousepad', price: 15, quantity: 3 },
  // Add more items as needed
];

function CartPage() {
  const [cart] = useState(initialCart);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    console.log('Proceed to checkout');
    // Add checkout functionality here
  };

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        <h3>Total: ${calculateTotal()}</h3>
      </div>
      <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default CartPage;
