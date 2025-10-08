import React, { useState } from 'react';
import axios from 'axios';
import {BASE_URL} from '../config';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post(`${BASE_URL}/api/admin/login`, form);
      localStorage.setItem('adminToken', res.data.token);
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="admin-login-wrapper d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow-sm p-4 rounded-4 login-card" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="text-center mb-4">
          <img src="/assets/img/logo/logo.png" alt="Logo" style={{ width: '120px' }} />
          <h3 className="mt-3">Admin Login</h3>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 py-2">
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <small className="text-muted">Forgot password? Contact your system administrator.</small>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
