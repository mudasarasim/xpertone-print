import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CategorySidebar from '../components/CategorySidebar';
import CartSidebar from '../components/CartSidebar';
import {BASE_URL} from '../config';


const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/register`, form);
      localStorage.setItem('userToken', res.data.token);
      navigate('/login'); // ✅ Redirect after successful signup
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Signup failed. Try again.');
    }
  };

  return (
    <>
      <CategorySidebar />
      <CartSidebar />


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
                  <h2>Sign Up Here</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Form Section */}
      <section className="ms-login padding-tb-30" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="section-title-2 text-center">
            <h2 className="ms-title">
              Sign Up<span></span>
            </h2>
            <p>Get access to your Orders, Wishlist and Recommendations.</p>
          </div>

          <div
            className="ms-login-content d-flex justify-content-center align-items-center flex-wrap mt-5"
            style={{ gap: '50px' }}
          >
            {/* Signup Form */}
            <div className="ms-login-box" style={{ flex: '1 1 300px', maxWidth: '400px' }}>
              <div className="ms-login-wrapper">
                <div className="ms-login-container">
                  <div className="ms-login-form">
                    <form onSubmit={handleSubmit}>
                      {error && <div className="alert alert-danger">{error}</div>}

                      <div className="form-group mb-3">
                        <label>Username*</label>
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          placeholder="Enter your Username..."
                          value={form.username}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group mb-3">
                        <label>Email Address*</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter your email add..."
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group mb-3">
                        <label>Password*</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Enter your password"
                          value={form.password}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group d-flex justify-content-between align-items-center">
                        <Link to={'/login'}>Already have an account Login here...</Link>
                        <button type="submit" className="btn btn-dark">
                          Signup
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Illustration */}
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

export default Signup;
