import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CategorySidebar from '../components/CategorySidebar';
import CartSidebar from '../components/CartSidebar';
import WishlistSidebar from '../components/WishlistSidebar';
import {BASE_URL} from '../config';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error('Error loading product:', err));
  }, [id]);

  if (!product) return <p className="text-center mt-5">Loading...</p>;

  return (
    <>
      <CategorySidebar />
      <CartSidebar />
      <WishlistSidebar />

      <div className="ms-breadcrumb m-b-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="row ms_breadcrumb_inner">
                <div
                  className="col-md-12 col-sm-12 back"
                  style={{
                    background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/assets/img/product-images/sl1.jpg")',
                  }}
                >
                  <h2>{product.title}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="ms-product-tab padding-tb-30">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-5">
              <div className="product-img">
                <img
                  src={`${BASE_URL}/backend/uploads/${product.image}`}
                  alt={product.title}
                  className="img-fluid rounded"
                />
              </div>
            </div>

            <div className="col-md-7">
              <div className="product-info">
                <h3 className="fw-bold mb-3">{product.title}</h3>
                <p>
                  <strong>Category:</strong> {product.category} <br />
                  <strong>Label:</strong> {product.label}
                </p>

                <div className="row align-items-center my-4">
                  <div className="col-auto">
                    <label>500 pcs</label>
                    <div className="form-control">AED {product.quantity_500}</div>
                  </div>
                  <div className="col-auto">
                    <label>1000 pcs</label>
                    <div className="form-control">AED {product.quantity_1000}</div>
                  </div>
                </div>

                <button className="btn btn-danger mt-3">
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
