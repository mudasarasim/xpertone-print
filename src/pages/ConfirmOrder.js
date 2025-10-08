import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ConfirmOrder = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  if (!state) return <div className="container py-5">No order data provided.</div>;

  const {
    product,
    quantity,
    circulation,
    series,
    totalPrice,
    frontFile,
    backFile,
  } = state;

 const handleSubmit = async () => {
  if (!frontFile || !backFile) return alert('Both files are required');

  const formData = new FormData();
  formData.append('product_title', product.title);
  formData.append('quantity', quantity);
  formData.append('circulation', circulation);
  formData.append('series', series);
  formData.append('total_price', totalPrice);
  formData.append('frontFile', frontFile);
  formData.append('backFile', backFile);

  try {
    setLoading(true);
    console.log('📤 Sending order to server...');
    const res = await axios.post('http://localhost:5001/api/orders', formData);

    console.log('✅ Server response:', res.data);
    setSuccessMsg(res.data.message || 'Order placed successfully');

    // Navigate only if order ID is returned
    if (res.data.orderId) {
      setTimeout(() => {
        navigate('/thank-you');
      }, 2000);
    } else {
      alert('⚠️ Order placed but no orderId returned.');
    }
  } catch (err) {
    console.error('❌ Order submission error:', err);
    alert('Failed to submit order');
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="container py-5">
      <div className="bg-white shadow rounded p-4">
        <h3 className="mb-4 border-bottom pb-2">Confirm Your Order</h3>

        {successMsg && (
          <div className="alert alert-success d-flex align-items-center gap-2">
            <i className="fa fa-check-circle"></i> {successMsg}
          </div>
        )}

        <div className="row">
          <div className="col-md-6">
            <ul className="list-group mb-3">
              <li className="list-group-item"><strong>Product:</strong> {product.title}</li>
              <li className="list-group-item"><strong>Quantity:</strong> {quantity}</li>
              <li className="list-group-item"><strong>Circulation:</strong> {circulation}</li>
              <li className="list-group-item"><strong>Series:</strong> {series}</li>
              <li className="list-group-item text-danger fw-bold">Total: AED {totalPrice.toFixed(2)}</li>
            </ul>
          </div>

          <div className="col-md-6">
            <div className="border p-3 mb-3 rounded bg-light text-center">
              <h6>Front File</h6>
              <p>{frontFile?.name || 'Not uploaded'}</p>
            </div>
            <div className="border p-3 rounded bg-light text-center">
              <h6>Back File</h6>
              <p>{backFile?.name || 'Not uploaded'}</p>
            </div>
          </div>
        </div>

        <div className="text-end mt-4">
          <button
            className="btn btn-success px-4"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <>
                <i className="fa fa-spinner fa-spin me-2"></i> Placing Order...
              </>
            ) : (
              <>
                <i className="fa fa-check-circle me-2"></i> Place Final Order
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
