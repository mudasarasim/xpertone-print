import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./BestSellerProducts.css";
import { BASE_URL } from "../config";

const BestSellerProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/api/safety-products/category/Pant-Shirts-Coveralls`
        );
        if (Array.isArray(res.data)) {
          setProducts(res.data.slice(0, 8)); // limit to 8 items
        }
      } catch (error) {
        console.error("Error fetching Pant-Shirts-Coveralls products:", error);
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
        No Pant-Shirts-Coveralls products found.
      </p>
    );
  }

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex" key={product.id}>
          <div className="product-card flex-fill">
            <Link
              to={`/safety-product/product/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="product-image-container">
                <img
                  src={`${BASE_URL}/backend/uploads/${product.image}`}
                  alt={product.title}
                  className="product-image"
                />
              </div>

              <div className="product-title-bar">{product.title}</div>

              <div className="product-info">
                <h6>Available Sizes:</h6>
                <div className="size-list">
                 {Array.isArray(JSON.parse(product.size))
  ? JSON.parse(product.size).join(", ")
  : product.size}

                </div>
                <div className="circulation-item mt-2">
                  <span className="text-muted">AED</span>
                  <span className="price">{product.price}</span>
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
