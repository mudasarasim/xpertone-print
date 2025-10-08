// pages/ContactUs.js
import React, { useState } from 'react';
import axios from 'axios';
import {BASE_URL} from '../config';
import './Contact.css';
import CategorySidebar from '../components/CategorySidebar';
import CartSidebar from '../components/CartSidebar';

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [feedback, setFeedback] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback({ type: '', text: '' });

    try {
      await axios.post(`${BASE_URL}/api/contact`, form);
      setFeedback({ type: 'success', text: '✅ Thank you for contacting us!' });
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      setFeedback({ type: 'error', text: '❌ Failed to send message. Please try again.' });
    }
  };

  return (
    <>
      <CategorySidebar />
      <CartSidebar />

      <div className="ms-breadcrumb m-b-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="row ms_breadcrumb_inner">
                <div
                  className="col-md-12 col-sm-12 back"
                  style={{
                    background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("assets/img/product-images/sl1.jpg")',
                  }}
                >
                  <h2>Contact Us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-section" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="row mt-5 text-center">
            <div className="col-md-4">
              <div className="contact-box p-4 shadow-sm">
                <div className="icon mb-2"><i className="fa fa-envelope fa-2x"></i></div>
                <h5>Mail & Website</h5>
                <p><i className="fa fa-envelope"></i> info@xpertonecreative.com</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-box p-4 shadow-sm">
                <div className="icon mb-2"><i className="fa fa-phone fa-2x"></i></div>
                <h5>Contact</h5>
                <p><i className="fa fa-mobile"></i> +971 52 635 3298</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-box p-4 shadow-sm">
                <div className="icon mb-2"><i className="fa fa-map-marker fa-2x"></i></div>
                <h5>Address</h5>
                <p>Um Suqeim Street - Al Barsha<br />Al Barsha 1 - Dubai<br />United Arab Emirates</p>
              </div>
            </div>
          </div>

          <div className="row" style={{ display: 'flex', gap: '30px' }}>
            <div className="col-lg-12 mt-5">
              {/* Feedback Alert */}
              {feedback.text && (
                <div className={`alert ${feedback.type === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
                  {feedback.text}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="4"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
              </form>
            </div>

            <div className="col-lg-12 mt-4">
              <iframe
                src="https://maps.google.com/maps?q=-12.942227,-38.480291&z=15&output=embed"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
