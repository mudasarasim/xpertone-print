import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';

const AddTour = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    duration: '',
    category: '',
    image: null,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = async () => {
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      await axios.post(`${BASE_URL}/api/admin/tours/add`, data);
      alert('✅ Tour added!');
    } catch (err) {
      console.error(err);
      alert('❌ Failed to add tour.');
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Add New Tour</h3>
      <div className="mb-3">
        <label>Title</label>
        <input name="title" className="form-control" value={form.title} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Description</label>
        <textarea name="description" className="form-control" value={form.description} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Price</label>
        <input name="price" className="form-control" value={form.price} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Duration</label>
        <input name="duration" className="form-control" value={form.duration} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Category</label>
        <input name="category" className="form-control" value={form.category} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Image</label>
        <input type="file" className="form-control" onChange={handleImageChange} />
      </div>
      <button className="btn btn-success" onClick={handleSubmit}>Add Tour</button>
    </div>
  );
};

export default AddTour;
