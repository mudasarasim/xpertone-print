import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TopRatedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchTopRated = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/products");
        if (Array.isArray(res.data)) {
          const lastEight = res.data.slice(-8); // ✅ show only last 8
          setProducts(lastEight.reverse()); // reverse to show latest first
        }
      } catch (err) {
        console.error("Error fetching top-rated products:", err);
      }
    };
    fetchTopRated();
  }, []);

  if (products.length === 0) {
    return <p className="text-center">No products found</p>;
  }

  return (
    <div className="row margin-minus-b-15">
      <div className="col">
        <div className="tab-content">
          <div className="tab-pane fade show active" id="all">
            <div className="row">
              {products.map((product) => (
                <div
                  className="col-md-3 col-sm-6 col-xs-6 ms-product-content"
                  key={product.id}
                >
                  {/* ✅ Clicking card opens product detail page */}
                  <Link
                    to={`/product/${product.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <div className="image">
                            <img
                              className="image"
                              src={`http://localhost:5001/uploads/${product.image}`}
                              alt={product.title}
                            />
                          </div>

                          {/* ✅ Product badge if available */}
                          {product.badge && (
                            <span className="flags">
                              <span className={product.badge}>
                                {product.badge.toUpperCase()}
                              </span>
                            </span>
                          )}
            
                        </div>
                      </div>

                      {/* ✅ Product title */}
                      <div className="ms-product-title">{product.title}</div>

                      {/* ✅ Circulations (pricing) */}
                      <div className="ms-circulations">
                        <h6>Available Circulations:</h6>
                        <div className="ms-circulation-item">
                          <span>500 pcs</span>
                          <span>AED-{product.quantity_500}</span>
                        </div>
                        <div className="ms-circulation-item">
                          <span>1000 pcs</span>
                          <span>AED-{product.quantity_1000}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedProducts;
