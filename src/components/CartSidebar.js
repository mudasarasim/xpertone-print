// src/components/CartSidebar.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../config';

const CartSidebar = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + Number(item.totalPrice || 0),
    0
  );
  const vat = subtotal * 0.2;
  const total = subtotal + vat;

  return (
    <div className="container py-5">
      <h3 className="mb-4">🛒 Your Cart</h3>

      {cartItems.length === 0 ? (
        <p className="text-muted">No items in cart.</p>
      ) : (
        <>
          <div className="row g-4">
            {cartItems.map((item, index) => {
              const qty = Number(item.quantity || 1);
              const price = Number(item.price || 0);
              const size = item.size ? `(${item.size})` : '';

              return (
                <div key={`${item.id}-${item.size || index}`} className="col-md-6 col-lg-4">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={
                        item.image?.startsWith('http')
                          ? item.image
                          : `${BASE_URL}/backend/uploads/${item.image}`
                      }
                      className="card-img-top"
                      alt={item.title}
                      style={{ objectFit: 'cover', height: '200px' }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">
                        {item.title} {size && <span className="text-muted">{size}</span>}
                      </h5>
                      <p className="card-text mb-2">
                        Price: AED {price.toFixed(2)} <br />
                        Quantity: {qty} <br />
                        <strong>Total: AED {(price * qty).toFixed(2)}</strong>
                      </p>

                      <div className="d-flex align-items-center gap-2 mb-3">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, qty - 1, item.size)}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={qty}
                          readOnly
                          className="form-control form-control-sm text-center"
                          style={{ width: '50px' }}
                        />
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, qty + 1, item.size)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="btn btn-danger btn-sm mt-auto"
                        onClick={() => removeFromCart(item.id, item.size)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 p-4 bg-light border rounded">
            <h4>🧾 Summary</h4>
            <table className="table">
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td className="text-end">AED {subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>VAT (20%)</td>
                  <td className="text-end">AED {vat.toFixed(2)}</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <th className="text-end text-success">AED {total.toFixed(2)}</th>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-end gap-3">
              <Link to="/" className="btn btn-primary">
                Back To Home
              </Link>
              <Link to="/checkout" className="btn btn-success">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;
