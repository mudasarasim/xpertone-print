import React from 'react';
import './Login.css'; // You can define your styles here
import { Link } from 'react-router-dom';
import CategorySidebar from '../components/CategorySidebar';
import CartSidebar from '../components/CartSidebar';
import WishlistSidebar from '../components/WishlistSidebar';

const Login = () => {
  return (
    <>
    <CategorySidebar />
    <CartSidebar />
    <WishlistSidebar />
      {/* Top Banner */}
      <div className="ms-breadcrumb m-b-30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="row ms_breadcrumb_inner">
                <div
                  className="col-md-12 col-sm-12 back"
                  style={{
                    background:
                      'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("assets/img/product-images/sl1.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    padding: '60px 0',
                    textAlign: 'center',
                  }}
                >
                  <h2>Login Here</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Form Section */}
      <section className="ms-login padding-tb-30" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="section-title-2 text-center">
            <h2 className="ms-title">
              Login<span></span>
            </h2>
            <p>Get access to your Orders, Wishlist and Recommendations.</p>
          </div>

          <div
            className="ms-login-content d-flex justify-content-center align-items-center flex-wrap mt-5"
            style={{ gap: '50px' }}
          >
            {/* Login Form */}
            <div className="ms-login-box" style={{ flex: '1 1 300px', maxWidth: '400px' }}>
              <div className="ms-login-wrapper">
                <div className="ms-login-container">
                  <div className="ms-login-form">
                    <form action="#" method="post">
                      <div className="form-group mb-3">
                        <label>Email Address*</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your email add..."
                          required
                        />
                      </div>

                      <div className="form-group mb-3">
                        <label>Password*</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter your password"
                          required
                        />
                      </div>

                      <div className="form-group d-flex justify-content-between align-items-center mb-3">
                        <a href="#" className="text-muted">
                          Forgot Password?
                        </a>
                      </div>

                      <div className="form-group d-flex justify-content-between align-items-center">
                        <Link to={'/signup'}>Create Account?</Link>
                        <button type="submit" className="btn btn-dark">
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Login Illustration */}
            <div className="ms-login-box d-n-991" style={{ flex: '1 1 300px', maxWidth: '400px' }}>
              <div className="ms-login-img text-center">
                <img
                  src="assets/img/login.png"
                  alt="login"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
