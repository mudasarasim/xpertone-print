// src/components/CartSidebar.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { BASE_URL } from "../config";

const CartSidebar = () => {
  const { cartItems, removeFromCart, updateQuantity, isCartOpen, closeCart } = useCart();

  // ✅ Calculate subtotal (supports both product types)
  const subtotal = cartItems.reduce((acc, item) => {
    const price =
      Number(item.quantity_500) ||
      Number(item.price) ||
      Number(item.unit_price) ||
      0;
    const quantity = Number(item.quantity || 1);
    return acc + price * quantity;
  }, 0);

  const vat = subtotal * 0.2;
  const total = subtotal + vat;

  const handleQtyChange = (id, qty) => {
    if (qty >= 1) updateQuantity(id, qty);
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div className="ms-side-cart-overlay" onClick={closeCart}></div>
      <div id="ms-side-cart" className="ms-side-cart">
        <div className="ms-cart-inner">
          <div className="ms-cart-top">
            <div className="ms-cart-title">
              <span className="cart_title">My Cart</span>
              <button className="ms-cart-close" onClick={closeCart}>
                <img src="/assets/img/icons/close.svg" className="svg_img pro_svg" alt="close" />
              </button>
            </div>

            <ul className="ms-cart-pro-items">
              {cartItems.length === 0 ? (
                <li>No items in cart</li>
              ) : (
                cartItems.map((item) => {
                  const price =
                    Number(item.quantity_500) ||
                    Number(item.price) ||
                    Number(item.unit_price) ||
                    0;
                  const qty = Number(item.quantity || 1);

                  return (
                    <li key={item.id}>
                      <Link to={`/product/${item.id}`} className="ms-pro-img">
                        <img
                          src={
                            item.image?.startsWith("http")
                              ? item.image
                              : `${BASE_URL}/backend/uploads/${item.image}`
                          }
                          alt={item.title || "Product"}
                        />
                      </Link>

                      <div className="ms-pro-content">
                        <Link to={`/product/${item.id}`} className="cart-pro-title">
                          {item.title || "Product"}
                        </Link>

                        {item.label && <div><small className="text-muted">{item.label}</small></div>}
                        {item.category && (
                          <div><small className="text-muted">Category: {item.category}</small></div>
                        )}
                        {item.dimensions && (
                          <div><small className="text-muted">Size: {item.dimensions}</small></div>
                        )}

                        <span className="cart-price">
                          <span>AED {(price * qty).toFixed(2)}</span> x {qty}
                        </span>

                        <div className="qty-plus-minus d-flex align-items-center gap-2">
                          <button onClick={() => handleQtyChange(item.id, qty - 1)}>-</button>
                          <input className="qty-input" type="text" value={qty} readOnly />
                          <button onClick={() => handleQtyChange(item.id, qty + 1)}>+</button>
                        </div>

                        <button className="remove" onClick={() => removeFromCart(item.id)}>×</button>
                      </div>
                    </li>
                  );
                })
              )}
            </ul>
          </div>

          <div className="ms-cart-bottom">
            <div className="cart-sub-total">
              <table className="table cart-table">
                <tbody>
                  <tr>
                    <td className="text-left">Sub-Total :</td>
                    <td className="text-right">AED {subtotal.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="text-left">VAT (20%) :</td>
                    <td className="text-right">AED {vat.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="text-left">Total :</td>
                    <td className="text-right primary-color">AED {total.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="cart_btn">
              <Link to="/cart" className="ms-btn-1">
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
