// src/pages/ThankYou.js
import React from 'react';

const ThankYou = () => {
  return (
    <div className="container text-center py-5">
      <h1 className="text-success mb-4">
        <i className="fa fa-check-circle me-2"></i>Order Placed!
      </h1>
      <p className="lead">Thank you! Your order has been placed successfully.</p>
      <a href="/" className="btn btn-outline-dark mt-3">
        <i className="fa fa-home me-1"></i> Back to Home
      </a>
    </div>
  );
};

export default ThankYou;
