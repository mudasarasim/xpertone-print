import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config';

const safetyCategories = ['Safety vest', 'Cargo Trousers', 'Pant-Shirts-Coveralls'];

const AdminSafetyProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    label: '',
    category: '',
    price: '',
    sizeInput: '',
    size: [],
    image: null,
  });
  const [editingId, setEditingId] = useState(null);
  const [success, setSuccess] = useState('');

  // Fetch safety products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/safety-products`);
      setProducts(res.data);
    } catch (err) {
      console.error('Error fetching safety products:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSizeKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const newSize = formData.sizeInput.trim();
      if (newSize && !formData.size.includes(newSize)) {
        setFormData({ ...formData, size: [...formData.size, newSize], sizeInput: '' });
      }
    }
  };

  const removeSize = (s) => {
    setFormData({ ...formData, size: formData.size.filter(item => item !== s) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.label || !formData.category || !formData.price || formData.size.length === 0) {
      alert('Please fill all required fields including price');
      return;
    }

    const data = new FormData();
    data.append('title', formData.title);
    data.append('label', formData.label);
    data.append('category', formData.category);
    data.append('price', formData.price);
    data.append('size', JSON.stringify(formData.size));

    if (formData.image) data.append('image', formData.image);

    try {
      if (editingId) {
        await axios.put(`${BASE_URL}/api/safety-products/${editingId}`, data);
        setSuccess('✅ Safety product updated successfully!');
      } else {
        await axios.post(`${BASE_URL}/api/safety-products`, data);
        setSuccess('✅ Safety product added successfully!');
      }

      setFormData({ title: '', label: '', category: '', price: '', sizeInput: '', size: [], image: null });
      setEditingId(null);
      fetchProducts();
    } catch (err) {
      console.error('Error adding/updating safety product:', err);
      setSuccess('❌ Failed to save product');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`${BASE_URL}/api/safety-products/${id}`);
        fetchProducts();
      } catch (err) {
        console.error('Error deleting safety product:', err);
      }
    }
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setFormData({
      title: product.title,
      label: product.label,
      category: product.category,
      price: product.price || '',
      sizeInput: '',
      size: Array.isArray(product.size) ? product.size : JSON.parse(product.size),
      image: null,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const parseSizes = (size) => {
    if (!size) return [];
    if (Array.isArray(size)) return size;
    try {
      const parsed = JSON.parse(size);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      return [size];
    }
  };

  // Filtered products based on search term
  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2>{editingId ? 'Edit Safety Product' : 'Add Safety Product'}</h2>
      {success && <p>{success}</p>}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label>Category</label>
          <select name="category" className="form-control" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            {safetyCategories.map((c, idx) => (
              <option key={idx} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label>Title</label>
          <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Label</label>
          <input type="text" className="form-control" name="label" value={formData.label} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Price (AED)</label>
          <input type="number" step="0.01" min="0" className="form-control" name="price" value={formData.price} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Sizes (press Enter or comma)</label>
          <input
            type="text"
            className="form-control"
            name="sizeInput"
            value={formData.sizeInput}
            onChange={handleChange}
            onKeyDown={handleSizeKeyDown}
            placeholder="e.g. S, M, L"
          />
          <div className="mt-2">
            {formData.size.map((s, idx) => (
              <span key={idx} className="badge bg-primary me-2" style={{ cursor: 'pointer' }} onClick={() => removeSize(s)}>
                {s} &times;
              </span>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label>Image {editingId ? '(leave empty to keep existing)' : ''}</label>
          <input type="file" className="form-control" name="image" onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary">{editingId ? 'Update' : 'Add'} Product</button>
      </form>

      <hr />

      <h3>All Safety Products</h3>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row">
        {filteredProducts.map((p) => (
          <div className="col-md-3 mb-4" key={p.id}>
            <div className="card h-100">
              <img src={`${BASE_URL}/backend/uploads/${p.image}`} className="card-img-top" alt={p.title} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">
                  <strong>Label:</strong> {p.label}<br />
                  <strong>Category:</strong> {p.category}<br />
                  <strong>Sizes:</strong> {parseSizes(p.size).join(', ')}<br />
                  <strong>Price:</strong> AED {p.price}
                </p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-sm btn-warning" onClick={() => handleEdit(p)}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(p.id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {filteredProducts.length === 0 && <p className="text-muted">No products match your search.</p>}
      </div>
    </div>
  );
};

export default AdminSafetyProducts;
