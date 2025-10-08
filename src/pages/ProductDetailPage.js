import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CategorySidebar from '../components/CategorySidebar';
import CartSidebar from '../components/CartSidebar';
import { useNavigate } from 'react-router-dom';
import {BASE_URL} from '../config';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(500); // start with 500
  const [circulation, setCirculation] = useState(1000);
  const [series, setSeries] = useState(1);
  const [unitPrice, setUnitPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${BASE_URL}/api/products/${id}`)
      .then(res => {
        setProduct(res.data);
        const price = quantity === 1000 ? parseFloat(res.data.quantity_1000) : parseFloat(res.data.quantity_500);
        setUnitPrice(price);
      })
      .catch(err => console.error('Product detail fetch error:', err));
  }, [id]);

  const increaseQuantity = () => {
  const newQuantity = quantity + 500;
  setQuantity(newQuantity);
  setSeries(newQuantity / 500);
};

const decreaseQuantity = () => {
  if (quantity > 500) {
    const newQuantity = quantity - 500;
    setQuantity(newQuantity);
    setSeries(newQuantity / 500);
  }
};


  const increaseCirculation = () => setCirculation(prev => prev + 100);
  const decreaseCirculation = () => setCirculation(prev => (prev > 100 ? prev - 100 : 100));

  if (!product) return <div>Loading...</div>;

  const labelPrice = parseFloat(product.label) || 0;
  const totalPrice = (unitPrice + labelPrice) * series;

  return (
    <>
      <CategorySidebar />
      <CartSidebar />

      {/* Breadcrumb */}
      <div className="ms-breadcrumb m-b-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="row ms_breadcrumb_inner">
                <div
                  className="col-md-12 col-sm-12 back"
                  style={{
                    background:
                      'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/assets/img/product-images/sl1.jpg")',
                  }}
                >
                  <h2>{product.title}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="ms-product-tab padding-tb-30">
        <div className="container">
          <div className="row g-4">
            {/* Product Image */}
            <div className="col-md-5">
              <div className="product-img">
                <img
                  src={`${BASE_URL}/uploads/${product.image}`}
                  alt={product.title}
                  className="img-fluid rounded"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="col-md-7">
              <div className="product-info">
                <h3 className="fw-bold mb-3">{product.title}</h3>
                <p className="mb-3">Label: AED {product.label}</p>
                <p className="mb-3">Category: {product.category}</p>

                <div className="row align-items-center my-4">
                  {/* Quantity Toggle */}
                  <div className="col-auto">
                    <label>Quantity</label>
                    <div className="input-group">
                      <button className="btn btn-outline-secondary" onClick={decreaseQuantity}>-</button>
                      <input type="text" className="form-control text-center" value={quantity} readOnly />
                      <button className="btn btn-outline-secondary" onClick={increaseQuantity}>+</button>
                    </div>
                  </div>

                  {/* Circulation */}
                  <div className="col-auto">
                    <label>Circulation</label>
                    <div className="input-group">
                      <button className="btn btn-outline-secondary" onClick={decreaseCirculation}>-</button>
                      <input type="text" className="form-control text-center" value={circulation} readOnly />
                      <button className="btn btn-outline-secondary" onClick={increaseCirculation}>+</button>
                    </div>
                  </div>

                  {/* Series (read-only) */}
                  <div className="col-auto">
                    <label>Series</label>
                    <input type="text" className="form-control text-center" value={series} readOnly />
                  </div>

                  {/* Price Display */}
                  <div className="col-12 mt-3">
                    <h5 className="text-dark">
                      Price: <span style={{ color: 'red' }}>
                        AED {totalPrice.toFixed(2)}
                      </span>
                    </h5>
                  </div>
                </div>

                {/* Badges */}
                <div className="d-flex gap-3 mb-3">
                  <span className="badge bg-secondary">Turnaround: Normal</span>
                  <span className="badge bg-secondary">Printed Side: Front and Back</span>
                </div>

                {/* Process Duration Table */}
                <div className="mb-4">
                  <h6 className="fw-bold">Process Duration: <span className="text-primary">2 Business Day(s)</span></h6>
                  <table className="table table-bordered w-auto">
                    <thead>
                      <tr>
                        <th>Printed Side</th>
                        <th>Normal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Front and Back</td>
                        <td>2 Business Day(s)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Dimensions */}
                <div>
                  <h6 className="fw-bold">Available Dimension(s):</h6>
                  {product.dimensions ? (
                    <p>After Cutting: <strong>{product.dimensions}</strong></p>
                  ) : (
                    <p className="text-muted">No dimension provided for this product.</p>
                  )}
                  <p className="text-muted small">
                    <i className="fa fa-info-circle text-warning"></i> Up to 4.76% off for online orders. Crossed-out price applies to in-person purchases.
                  </p>
                </div>

                <button
                  className="btn btn-danger mt-3"
                  onClick={() => {
                    navigate('/start-ordering', {
                      state: {
                        product,
                        quantity,
                        circulation,
                        series,
                        totalPrice
                      }
                    });
                  }}
                >
                  <i className="fa fa-shopping-cart me-2"></i> Start Ordering
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
