// src/pages/SafetyProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SafetyProductDetails.css';
import { useCart } from '../context/CartContext';
import { BASE_URL } from '../config';

const safetyCategories = ['Safety Vest', 'Pant-Shirts-Coveralls', 'Safety Cargo Trousers'];

const SafetyProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sizeQuantities, setSizeQuantities] = useState({});
  const { addToCart, openCart } = useCart();

  const parseSizes = (size) => {
    if (!size) return [];
    if (Array.isArray(size)) return size;
    try {
      const parsed = JSON.parse(size);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      return [size];
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/safety-products/${id}`);
        setProduct(res.data);

        const productSizes = parseSizes(res.data.size);
        const qtyObj = {};
        productSizes.forEach((s) => (qtyObj[s] = 0));
        setSizeQuantities(qtyObj);
      } catch (err) {
        console.error('Error fetching product details:', err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleQuantityChange = (size, value) => {
    const qty = parseInt(value);
    if (!isNaN(qty) && qty >= 0) {
      setSizeQuantities({ ...sizeQuantities, [size]: qty });
    }
  };

  const handleAddToCart = () => {
  const selectedSizes = Object.entries(sizeQuantities).filter(([_, qty]) => qty > 0);
  if (selectedSizes.length === 0) {
    alert('Please select quantity for at least one size.');
    return;
  }

  selectedSizes.forEach(([size, qty]) => {
    const totalPrice = product.price * qty;
    const productData = {
      id: product.id,
      title: product.title,
      image: product.image,
      category: product.category,
      label: product.label,
      price: product.price,
    };
    addToCart(productData, qty, totalPrice, size);
  });

  alert('✅ Product added to cart successfully!');
  openCart();
};


  const handleStartOrdering = () => {
    const hasQuantity = Object.values(sizeQuantities).some((q) => q > 0);
    if (!hasQuantity) {
      alert('Please select quantity for at least one size.');
      return;
    }
    navigate('/order', { state: { items: [{ ...product, sizeQuantities }] } });
  };

  if (loading) return <p className="loading-text">Loading...</p>;
  if (!product) return <p className="loading-text">Product not found.</p>;

  const sizes = parseSizes(product.size);

  return (
    <div className="container safety-details mt-5">
      <div className="row g-4">
        {/* Product Image */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div
            className="product-image-wrapper shadow-sm rounded"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: '400px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              backgroundColor: '#f8f9fa',
            }}
          >
            <img
              src={`${BASE_URL}/backend/uploads/${product.image}`}
              alt={product.title}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <div className="details-card p-4 shadow-sm rounded bg-white">
            <h2 className="mb-3 product-title" style={{ background: 'transparent' }}>
              {product.title}
            </h2>
            <p><strong>Label:</strong> {product.label}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> AED {product.price}</p>

            {safetyCategories.includes(product.category) && (
              <div className="mt-4">
                <h5>Sizes & Quantities</h5>
                <div className="sizes-container mt-2">
                  {sizes.map((size) => (
                    <div key={size} className="size-qty d-flex align-items-center mb-3">
                      <span className="size-label me-3">{size}</span>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={sizeQuantities[size]}
                        onChange={(e) => handleQuantityChange(size, e.target.value)}
                        className="form-control qty-input shadow-sm"
                        style={{ width: '100px' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              className="btn btn-outline-primary mt-3 w-100 btn-hover"
              onClick={handleAddToCart}
            >
              <i className="fa fa-shopping-cart me-2"></i> Add to Cart
            </button>

            <button
              className="btn btn-primary mt-3 w-100 btn-hover"
              onClick={handleStartOrdering}
            >
              Start Ordering
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyProductDetails;
