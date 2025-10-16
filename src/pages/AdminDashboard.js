import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <h3 className="logo">Admin Panel</h3>
        <nav className="nav flex-column">
          <Link to="/admin/orders" className="nav-link">
            <i className="fa fa-list-alt"></i> Orders
          </Link>
          <Link to="/admin/contacts" className="nav-link">
            <i className="fa fa-envelope"></i> Contact Messages
          </Link>
          <Link to="/admin/add-product" className="nav-link">
            <i className="fa fa-plus-circle"></i> Add Product
          </Link>
         <Link to="/admin/AdminSafetyProducts" className="nav-link">
              <i className="fa fa-shield"></i> Add Safety Products
            </Link>
           <Link to="/admin/safety-orders" className="nav-link">
  <i className="fa fa-shield me-2"></i> View Safety Orders
</Link>
<Link to="/admin/process-tracker" className="nav-link">
  <i className="fa fa-shield me-2"></i> Track All Orders
</Link>


        </nav>
      </div>

      {/* Main content */}
      <div className="admin-content">
        <div className="welcome-box shadow-lg p-5 rounded">
          <h2 className="fw-bold mb-3">Welcome to Admin Dashboard 👋</h2>
          <p className="text-muted mb-4">
            Manage your orders, products, and customer messages easily.
          </p>
          <div className="quick-actions d-flex flex-wrap gap-3">
            <Link to="/admin/orders" className="btn btn-primary shadow-lg">
              <i className="fa fa-list-alt me-2"></i> View Orders
            </Link>
            <Link to="/admin/contacts" className="btn btn-info shadow-lg">
              <i className="fa fa-envelope me-2"></i> View Messages
            </Link>
            <Link to="/admin/add-product" className="btn btn-success shadow-lg">
              <i className="fa fa-plus-circle me-2"></i> Add Product
            </Link>
            <Link to="/admin/AdminSafetyProducts" className="btn btn-warning shadow-lg">
              <i className="fa fa-shield me-2"></i> Add Safety Products
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
