import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NewArrivalProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/products");
        if (Array.isArray(res.data)) {
          // ✅ Take next 8 products as “new arrivals”
          setProducts(res.data.slice(8, 16));
        }
      } catch (error) {
        console.error("Error fetching new arrival products:", error);
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
        No new arrival products found.
      </p>
    );
  }

  return (
    <div className="row margin-minus-b-15">
      <div className="col">
        <div className="tab-content">
          <div className="tab-pane fade show active" id="new-arrivals">
            <div className="row align-items-stretch">
              {products.map((product) => (
                <div
                  className="col-md-3 col-sm-6 col-xs-6 ms-product-content"
                  key={product.id}
                >
                  {/* ✅ Product detail link added */}
                  <Link
                    to={`/product/${product.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="ms-product-inner">
                      <div className="ms-pro-image-outer">
                        <div className="ms-pro-image">
                          <div className="image">
                            <img
                              className="main-image"
                              src={`http://localhost:5001/uploads/${product.image}`}
                              alt={product.title}
                            />
                          </div>

                          {/* ✅ Optional badge if present */}
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

                      {/* ✅ Circulation (price options) */}
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

export default NewArrivalProducts;
