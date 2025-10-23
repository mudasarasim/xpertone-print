import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddProduct.css'; // animation aur styling ke liye (niche mention karunga CSS)
import { BASE_URL } from '../../config';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    label: '',
    quantity_500: '',
    quantity_1000: '',
    category: '',
    dimensions: '',
    image: null,
  });
  const [success, setSuccess] = useState(null);
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/products`);
      setProducts(res.data);
    } catch (err) {
      console.error('Error fetching products:', err);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      if (editingId) {
        await axios.put(`${BASE_URL}/api/products/${editingId}`, data);
        setSuccess('✅ Product updated successfully!');
      } else {
        const res = await axios.post(`${BASE_URL}/api/products`, data);
        if (res.data.success) setSuccess('✅ Product added successfully!');
      }
      setFormData({
        title: '',
        label: '',
        quantity_500: '',
        quantity_1000: '',
        category: '',
        dimensions: '',
        image: null,
      });
      setEditingId(null);
      fetchProducts();
    } catch (err) {
      setSuccess('❌ Failed to save product');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`${BASE_URL}/api/products/${id}`);
        fetchProducts();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleEdit = (product) => {
    setFormData({
      title: product.title,
      label: product.label,
      quantity_500: product.quantity_500,
      quantity_1000: product.quantity_1000,
      category: product.category,
      dimensions: product.dimensions || '',
      image: null,
    });
    setEditingId(product.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter products by title
  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2>{editingId ? 'Edit Product' : 'Add New Product'}</h2>
      {success && <p className="text-success">{success}</p>}

      <form onSubmit={handleSubmit} encType="multipart/form-data" className="mb-4">
        <div className="row g-3">
          <div className="col-md-6">
            <label>Title</label>
            <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label>Label</label>
            <input type="text" className="form-control" name="label" value={formData.label} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label>Quantity 500</label>
            <input type="number" className="form-control" name="quantity_500" value={formData.quantity_500} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label>Quantity 1000</label>
            <input type="number" className="form-control" name="quantity_1000" value={formData.quantity_1000} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label>Category</label>
            <select name="category" className="form-control" value={formData.category} onChange={handleChange} required>
              <option value="">Select Category</option>
              <option value="Business Cards">Business Cards</option>
              <option value="Premium Business Cards">Premium Business Cards</option>
              <option value="Official Papers">Official Papers</option>
              <option value="Brochures">Brochures</option>
              <option value="Flyers">Flyers</option>
              <option value="Envelopes">Envelopes</option>
              <option value="Table Mat">Table Mat</option>
              <option value="Shopping Bags">Shopping Bags</option>
              <option value="Fast Food Boxes">Fast Food Boxes</option>
              <option value="Die Cutting Products">Die Cutting Products</option>
              <option value="Sticker">Sticker</option>
              <option value="Menu">Menu</option>
              <option value="Luxury Products">Luxury Products</option>
              <option value="Car Mat">Car Mat</option>
              <option value="Safety Jackets">Safety Jackets</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Available Dimension(s)</label>
            <input type="text" className="form-control" name="dimensions" value={formData.dimensions} onChange={handleChange} placeholder="e.g. 90 x 55 mm" />
          </div>
          <div className="col-md-6">
            <label>Image {editingId && "(Upload new image to replace)"}</label>
            <input type="file" className="form-control" name="image" onChange={handleChange} required={!editingId} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">{editingId ? 'Update Product' : 'Add Product'}</button>
      </form>

      <hr />

      <h3 className="mt-4">All Products</h3>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Search by title..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      </div>

      <div className="row">
        {filteredProducts.length > 0 ? filteredProducts.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card product-card h-100">
              <img
                src={`${BASE_URL}/backend/uploads/${product.image}`}
                className="card-img-top"
                alt={product.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  <strong>Label:</strong> {product.label} <br />
                  <strong>Category:</strong> {product.category} <br />
                  <strong>Dimension:</strong> {product.dimensions || 'N/A'} <br />
                  <strong>500 pcs:</strong> AED {product.quantity_500} <br />
                  <strong>1000 pcs:</strong> AED {product.quantity_1000}
                </p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-sm btn-warning" onClick={() => handleEdit(product)}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        )) : (
          <p className="text-muted">No products match your search.</p>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
