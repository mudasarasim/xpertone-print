// src/pages/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CategorySidebar from '../components/CategorySidebar';
import CartSidebar from '../components/CartSidebar';
import { useCart } from '../context/CartContext';
import { BASE_URL } from '../config';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(500);
  const [circulation, setCirculation] = useState(1000);
  const [series, setSeries] = useState(1);
  const [unitPrice, setUnitPrice] = useState(0);
  const navigate = useNavigate();
  const { addToCart, openCart } = useCart();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        const price =
          quantity === 1000
            ? parseFloat(res.data.quantity_1000)
            : parseFloat(res.data.quantity_500);
        setUnitPrice(price);
      })
      .catch((err) => console.error('Product detail fetch error:', err));
  }, [id]);

  const increaseQuantity = () => {
    const newQty = quantity + 500;
    setQuantity(newQty);
    setSeries(newQty / 500);
  };

  const decreaseQuantity = () => {
    if (quantity > 500) {
      const newQty = quantity - 500;
      setQuantity(newQty);
      setSeries(newQty / 500);
    }
  };

  if (!product) return <div>Loading...</div>;

  const labelPrice = parseFloat(product.label) || 0;
  const totalPrice = (unitPrice + labelPrice) * series;

  const handleAddToCart = () => {
  const productData = {
    id: product.id,
    title: product.title,
    image: product.image,
    label: product.label,
    category: product.category,
    dimensions: product.dimensions,
    price: totalPrice,
  };

  addToCart(productData, series, totalPrice);
  alert('✅ Product added to cart successfully!');
  openCart();
};


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
                  src={`${BASE_URL}/backend/uploads/${product.image}`}
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

                {/* Quantity Controls */}
                <div className="row align-items-center my-4">
                  <div className="col-auto">
                    <label>Quantity</label>
                    <div className="input-group">
                      <button
                        className="btn btn-outline-secondary"
                        onClick={decreaseQuantity}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="form-control text-center"
                        value={quantity}
                        readOnly
                      />
                      <button
                        className="btn btn-outline-secondary"
                        onClick={increaseQuantity}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="col-12 mt-3">
                    <h5 className="text-dark">
                      Price:{' '}
                      <span style={{ color: 'red' }}>
                        AED {totalPrice.toFixed(2)}
                      </span>
                    </h5>
                  </div>
                </div>

                {/* Buttons */}
                <div className="d-flex gap-3 mt-4">
                  <button className="btn btn-primary" onClick={handleAddToCart}>
                    <i className="fa fa-shopping-cart me-2"></i> Add to Cart
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      navigate('/start-ordering', {
                        state: {
                          product,
                          quantity,
                          circulation,
                          series,
                          totalPrice,
                        },
                      })
                    }
                  >
                    <i className="fa fa-bolt me-2"></i> Start Ordering
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
