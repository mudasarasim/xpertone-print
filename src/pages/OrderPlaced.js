// src/pages/OrderPlaced.js
import React from 'react';
import { Link } from 'react-router-dom';

const OrderPlaced = () => {
  return (
    <div className="container py-5 text-center">
      <i className="fa fa-check-circle text-success" style={{ fontSize: '4rem' }}></i>
      <h2 className="mt-3">Thank You!</h2>
      <p className="lead">Your order has been placed successfully.</p>
      <Link to="/" className="btn btn-primary mt-4">
        Back to Home
      </Link>
    </div>
  );
};

export default OrderPlaced;
