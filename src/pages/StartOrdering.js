import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const StartOrdering = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, quantity, circulation, series, totalPrice } = location.state || {};

  const [frontFile, setFrontFile] = useState(null);
  const [backFile, setBackFile] = useState(null);

  if (!product) return <div>No product data provided.</div>;

  const handleFrontUpload = (e) => setFrontFile(e.target.files[0]);
  const handleBackUpload = (e) => setBackFile(e.target.files[0]);

  const handleNext = () => {
    navigate('/confirm-order', {
      state: {
        product,
        quantity,
        circulation,
        series,
        totalPrice,
        frontFile,
        backFile,
      },
    });
  };

  return (
    <div className="container-fluid p-4" style={{ background: '#f8f8f8' }}>
      {/* Header */}
      <div className="bg-white p-3 rounded shadow-sm d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0"><strong>{product.title}</strong></h5>
        <div className="d-flex align-items-center gap-3">
          <span><strong>Turnaround:</strong> Normal</span>
          <span><strong>Printed Side:</strong> Front and Back</span>
          <span><strong>Quantity:</strong> {quantity}</span>
        </div>
      </div>

      {/* Step Navigation */}
      <div className="bg-white rounded shadow-sm d-flex mb-4">
        <div className="flex-grow-1 text-center p-3 bg-dark text-white">
          <i className="fa fa-laptop me-2"></i> Select Files
        </div>
        <div className="flex-grow-1 text-center p-3 border">
          <i className="fa fa-check-circle me-2"></i> Confirm Details
        </div>
      </div>

      <div className="row">
        {/* File Upload Section */}
        <div className="col-md-9">
          <div className="bg-white p-4 rounded shadow-sm mb-4">
            <h6 className="mb-4">Four-Color print</h6>
            <div className="row">
              {/* Front Side Upload */}
              <div className="col-md-6 mb-4">
                <div className="border border-2 border-dashed rounded text-center py-5" style={{ borderColor: '#aaa', minHeight: '200px' }}>
                  <div className="fw-bold mb-2">Front Side</div>
                  <input type="file" onChange={handleFrontUpload} />
                  {!frontFile && <p className="text-danger mt-2">Click Here</p>}
                </div>
              </div>

              {/* Back Side Upload */}
              <div className="col-md-6 mb-4">
                <div className="border border-2 border-dashed rounded text-center py-5" style={{ borderColor: '#aaa', minHeight: '200px' }}>
                  <div className="fw-bold mb-2">Back Side</div>
                  <input type="file" onChange={handleBackUpload} />
                  {!backFile && <p className="text-danger mt-2">Click Here</p>}
                </div>
              </div>
            </div>

            <div className="text-end">
              <button
                className="btn btn-primary"
                onClick={handleNext}
                disabled={!frontFile || !backFile}
              >
                Next <i className="fa fa-arrow-right ms-1"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-md-3">
          <div className="bg-white p-3 rounded shadow-sm">
            <h6 className="fw-bold mb-3">Order Details</h6>
            <p><strong>Product:</strong> {product.title}</p>
            <p><strong>Circulation:</strong> {circulation}</p>
            <p><strong>Series:</strong> {series}</p>
            <p><strong>Quantity:</strong> {quantity}</p>
            <hr />
            <p><strong>Total Product Price:</strong> AED {totalPrice.toFixed(2)}</p>
            <p className="text-danger fw-bold fs-5">Total Amount: AED {totalPrice.toFixed(2)}</p>

            {/* File Preview Placeholder */}
            <div className="mt-4">
              <h6 className="fw-bold">File Preview <i className="fa fa-eye ms-1 text-muted"></i></h6>
              <div className="bg-light border text-center py-2 mb-2">
                <small className="text-muted">{frontFile ? frontFile.name : 'Image Not Found'}</small>
              </div>
              <div className="bg-light border text-center py-2">
                <small className="text-muted">{backFile ? backFile.name : 'Image Not Found'}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartOrdering;
