import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../config";
import { useCart } from "../context/CartContext";
import "./BestSellerProducts.css";

const BestSellerProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  // ✅ Parse size strings (handles commas, spaces, etc.)
  const parseSizes = (sizeString) => {
    if (!sizeString) return [];
    return sizeString.split(/[, ]+/).map((s) => s.trim()).filter(Boolean);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/api/safety-products/category/Pant & Shirts/Coveralls`
        );
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <p className="text-center text-muted py-4">
        No products found in this category.
      </p>
    );
  }

  return (
    <div className="row g-4">
      {products.map((product) => (
        <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
          <div className="product-card shadow-sm">
            <Link
              to={`/safety-product/product/${product.id}`}
              className="text-decoration-none text-dark"
            >
              {/* 🖼 Image */}
              <div className="product-image-wrapper">
                <img
                  src={`${BASE_URL}/backend/uploads/${product.image}`}
                  alt={product.title}
                  className="product-image"
                />
              </div>

              {/* 🏷 Title */}
              <div className="product-title bg-gradient text-white text-center py-2 fw-bold">
                {product.title}
              </div>

              {/* 📏 Sizes */}
              <div className="product-details text-center py-3">
                <p className="mb-1 fw-semibold text-dark">Available Sizes:</p>
                <p className="sizes-text mb-0 text-muted">
                  {parseSizes(product.size).join(", ") || "N/A"}
                </p>

                {/* 💰 Price */}
                <div className="price-section mt-3">
                  <span className="currency">AED</span>{" "}
                  <span className="price text-danger fw-bold">
                    {parseFloat(product.price).toFixed(2)}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestSellerProducts;
