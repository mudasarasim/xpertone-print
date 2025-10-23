// // src/pages/Checkout.js
// import React, { useState } from 'react';
// import { useCart } from '../context/CartContext';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // ✅ Added

// const Checkout = () => {
//   const { cartItems, clearCart } = useCart();
//   const navigate = useNavigate(); // ✅ Used for redirection
//   const [form, setForm] = useState({ customer_name: '', email: '', phone: '' });
//   const [message, setMessage] = useState('');

//   const subtotal = cartItems.reduce((acc, item) => acc + (Number(item.quantity_500) || 0) * (item.quantity || 1), 0);
//   const vat = subtotal * 0.2;
//   const total = subtotal + vat;

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');

//     if (cartItems.length === 0) {
//       setMessage('❌ Your cart is empty.');
//       return;
//     }

//     try {
//       const res = await axios.post('http://localhost:5001/api/checkout/place-order', {
//         ...form,
//         items: cartItems,
//         subtotal,
//         vat,
//         total,
//       });

//       console.log('✅ Server Response:', res.data);

//       if (res.data.success) {
//         clearCart();
//          navigate('/order-placed', { state: { orderId: res.data.orderId } });
//       } else {
//         setMessage('❌ Something went wrong. Please try again.');
//       }
//     } catch (err) {
//       console.error('❌ Error placing order:', err);
//       if (err.response) {
//         console.error('Server responded with:', err.response.data);
//       }
//       setMessage('❌ Failed to place order. Please try again later.');
//     }
//   };

//   return (
//     <div className="container py-4">
//       <h2>Checkout</h2>
//       {message && <div className="alert alert-info">{message}</div>}

//       <form onSubmit={handleSubmit} className="row g-3">
//         <div className="col-md-4">
//           <input name="customer_name" className="form-control" placeholder="Your Name" onChange={handleChange} required />
//         </div>
//         <div className="col-md-4">
//           <input name="email" className="form-control" placeholder="Email" onChange={handleChange} required />
//         </div>
//         <div className="col-md-4">
//           <input name="phone" className="form-control" placeholder="Phone" onChange={handleChange} required />
//         </div>

//         <div className="col-12">
//           <h5>Order Summary:</h5>
//           <ul className="list-group mb-3">
//             {cartItems.map((item) => (
//               <li key={item.id} className="list-group-item d-flex align-items-center gap-3">
//                 <img
//                   src={
//                     item.image?.startsWith('http')
//                       ? item.image
//                       : `http://localhost:5001/backend/uploads/${item.image}`
//                   }
//                   alt={item.title}
//                   style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '6px' }}
//                 />
//                 <div className="flex-grow-1">
//                   <h6 className="mb-1">{item.title}</h6>
//                   <small>Qty: {item.quantity}</small>
//                 </div>
//                 <span className="fw-bold">
//                   AED {(item.quantity_500 * item.quantity).toFixed(2)}
//                 </span>
//               </li>
//             ))}

//             <li className="list-group-item d-flex justify-content-between">
//               <strong>Subtotal:</strong>
//               <span>AED {subtotal.toFixed(2)}</span>
//             </li>
//             <li className="list-group-item d-flex justify-content-between">
//               <strong>VAT (20%):</strong>
//               <span>AED {vat.toFixed(2)}</span>
//             </li>
//             <li className="list-group-item d-flex justify-content-between">
//               <strong>Total:</strong>
//               <span className="text-success fw-bold">AED {total.toFixed(2)}</span>
//             </li>
//           </ul>
//         </div>

//         <div className="col-12">
//           <button type="submit" className="btn btn-success w-100">
//             Confirm & Place Order
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Checkout;
