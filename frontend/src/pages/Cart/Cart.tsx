import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../redux/store';
import { removeFromCart, clearCart } from '../../redux/slices/cartSlice';

import './cart.css';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* КУРСЫ */}
          <div className="cart-items-container">
            <div className="cart-header">
              <h2>Your Cart ({items.length})</h2>
              <button className="clear-btn" onClick={() => dispatch(clearCart())}>
                Clear all
              </button>
            </div>

            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.logoImage} alt={item.title} className="item-image" />
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p>Lecture: {item.teacherId || ''}</p>
                  <button onClick={() => dispatch(removeFromCart(item.id))} className="remove-btn">
                    Remove
                  </button>
                </div>
                <div className="item-price">${item.price.toFixed(2)}</div>
              </div>
            ))}
          </div>

          {/* ЧЕК */}
          <div className="summary-card">
            <h3 className="summary-title">SUMMARY</h3>

            <div className="summary-row">
              <span>Total price:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="summary-row bold">
              <span>Actual payment:</span>
              <span className="highlighted-price">${total.toFixed(2)}</span>
            </div>

            <p className="summary-note">
              By completing your purchase you agree to these
              <Link to="/agree" className="summary-link">
                Terms of Service
              </Link>
              .
            </p>

            <button className="checkout-button">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
