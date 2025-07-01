// pages/ProductDetail.js
import React from 'react';
import CategorySidebar from '../components/CategorySidebar';
import CartSidebar from '../components/CartSidebar';
import WishlistSidebar from '../components/WishlistSidebar';

const ProductDetail = () => {
  return (
    <>
      <CategorySidebar />
      <CartSidebar />
      <WishlistSidebar />

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
                      'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("assets/img/product-images/sl1.jpg")',
                  }}
                >
                  <h2>Product Detail</h2>
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
                <img src="assets/img/product-images/p1.png" alt="Rounded Corner Card" className="img-fluid rounded" />
              </div>
            </div>

            {/* Product Details */}
            <div className="col-md-7">
              <div className="product-info">
                <h3 className="fw-bold mb-3">Rounded Corner Spot UV Matt Lamination 350gsm</h3>
                <p>
                  4 Color, 2 Sides, <a href="#">Spot UV</a>, Rounded Corner Matt Laminated 400 gsm. Before Cutting: 9.5 x 6 cm, After Cutting: 9 x 5.5 cm.
                  Areas you select will be <a href="#">Spot UV</a>.
                </p>

                <div className="row align-items-center my-4">
                  <div className="col-auto">
                    <label>Quantity</label>
                    <div className="input-group">
                      <button className="btn btn-outline-secondary">-</button>
                      <input type="text" className="form-control text-center" value="1000" readOnly />
                      <button className="btn btn-outline-secondary">+</button>
                    </div>
                  </div>

                  <div className="col-auto">
                    <label>Circulation</label>
                    <input type="text" className="form-control" value="1000" readOnly />
                  </div>

                  <div className="col-auto">
                    <label>Series</label>
                    <input type="text" className="form-control" value="1" readOnly />
                  </div>
                </div>

                <div className="d-flex gap-3 mb-3">
                  <span className="badge bg-secondary">Turnaround: Normal</span>
                  <span className="badge bg-secondary">Printed Side: Front and Back</span>
                </div>

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

                <div>
                  <h6 className="fw-bold">Available Dimension(s):</h6>
                  <p>After Cutting: <strong>90 x 55 mm</strong> (95 x 60 mm)</p>
                  <p className="text-muted small">
                    <i className="fa fa-info-circle text-warning"></i> Up to 4.76% off for online orders. Crossed-out price applies to in-person purchases.
                  </p>
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
