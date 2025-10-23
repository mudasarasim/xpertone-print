import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../config';
import CategorySidebar from '../components/CategorySidebar';
import CartSidebar from '../components/CartSidebar';
import { useCart } from '../context/CartContext';
import './CategoryPage.css';

// ✅ Map URL-friendly labels to DB categories
const categoryMap = {
  'safety-vest': 'Safety Vest',
  'Pant-Shirts-Coveralls': 'Pant-Shirts-Coveralls',
  'safety-cargo-trousers': 'Safety Cargo Trousers',
  // 'safety-helmets': 'Safety Helmet',
};

// ✅ Safety product categories list
const safetyCategories = ['Safety Vest', 'Pant-Shirts-Coveralls', 'Safety Cargo Trousers'];

const CategoryWise = () => {
  const { addToCart } = useCart();
  const { label } = useParams();
  const [products, setProducts] = useState([]);

  // ✅ Handle "size" parsing safely
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

  // ✅ Fetch products based on category type (safety or normal)
  useEffect(() => {
  const fetchProducts = async () => {
    try {
      let res;
      const backendCategory = categoryMap[label];

      if (backendCategory && safetyCategories.includes(backendCategory)) {
        res = await axios.get(`${BASE_URL}/api/safety-products/category/${backendCategory}`);
      } else {
        res = await axios.get(`${BASE_URL}/api/products/category/${label}`);
      }

      console.log('Fetched products:', res.data); // 👈 check what comes back

      // ✅ Handle both possible response formats
      setProducts(Array.isArray(res.data) ? res.data : res.data.products || []);
    } catch (err) {
      console.error('Category fetch error:', err);
      setProducts([]); // fallback
    }
  };

  fetchProducts();
}, [label]);


  return (
    <>
      <CategorySidebar />
      <CartSidebar />

      {/* 🔹 Breadcrumb */}
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
                  <h2>{label.replace(/-/g, ' ')}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Product Section */}
      <section className="ms-product-tab padding-tb-30">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>
                  {label
                    .split('-')
                    .map((word) => word[0].toUpperCase() + word.slice(1))
                    .join(' ')}{' '}
                  <span>Products</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row margin-minus-b-15">
            <div className="col">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="all">
                  <div className="row">
                    {products.length > 0 ? (
                      products.map((product) => (
                        <div
                          className="col-md-3 col-sm-6 col-xs-6 ms-product-content"
                          key={product.id}
                        >
                          <div
                            className="ms-product-inner hover-box d-flex flex-column justify-content-between"
                            style={{
                              height: '100%',
                              border: '1px solid #eee',
                              borderRadius: '12px',
                              overflow: 'hidden',
                              backgroundColor: '#fff',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                              transition: 'all 0.3s ease',
                            }}
                          >
                            {/* 🖼 Product Image */}
                            <div
                              className="ms-pro-image-outer"
                              style={{ height: '220px', overflow: 'hidden', position: 'relative' }}
                            >
                              <div className="ms-pro-image" style={{ height: '100%' }}>
                                <Link
                                  to={
                                    safetyCategories.includes(product.category)
                                      ? `/safety-product/product/${product.id}`
                                      : `/product/${product.id}`
                                  }
                                  className="text-decoration-none text-dark"
                                >
                                  <img
                                    className="main-image w-100 h-100 object-fit-cover"
                                    src={`${BASE_URL}/backend/uploads/${product.image}`}
                                    alt={product.title}
                                  />
                                </Link>

                                <div
                                  className="hover-actions"
                                  style={{
                                    position: 'absolute',
                                    bottom: '10px',
                                    right: '10px',
                                    display: 'flex',
                                    gap: '8px',
                                  }}
                                >
                                  <button
                                    className="hover-btn cart"
                                    title="Add to Cart"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      addToCart(product);
                                    }}
                                    style={{
                                      backgroundColor: '#f05a28',
                                      border: 'none',
                                      borderRadius: '50%',
                                      width: '40px',
                                      height: '40px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <img
                                      src="/assets/img/icons/pro_cart.svg"
                                      alt="cart"
                                      style={{ width: '20px' }}
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>

                            {/* 🧾 Product Info */}
                            <div className="p-3 d-flex flex-column justify-content-between" style={{ flex: 1 }}>
                              <div className="ms-product-title text-center fw-bold mb-2" style={{ fontSize: '15px' }}>
                                {product.title}
                              </div>

                              {/* ✅ Conditional Section */}
                              {safetyCategories.includes(product.category) ? (
                                <p
                                  className="text-center mb-0"
                                  style={{ fontSize: '14px', color: '#555' }}
                                >
                                  <strong>Sizes:</strong>{' '}
                                  {parseSizes(product.size).join(', ') || 'N/A'}
                                </p>
                              ) : (
                                <div className="ms-circulations text-center">
                                  <h6 className="fw-bold mb-1" style={{ fontSize: '14px' }}>
                                    Available Circulations:
                                  </h6>
                                  <div className="ms-circulation-item d-flex justify-content-between px-3">
                                    <span>500 pcs</span>
                                    <span style={{ color: 'red' }}>AED-{product.quantity_500}</span>
                                  </div>
                                  <div className="ms-circulation-item d-flex justify-content-between px-3">
                                    <span>1000 pcs</span>
                                    <span style={{ color: 'red' }}>AED-{product.quantity_1000}</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-center">No products found in this category.</p>
                    )}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryWise;