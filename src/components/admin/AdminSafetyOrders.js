import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminSafetyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/safetyorder");
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching safety orders:", err);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">All Safety Orders</h2>
      <Link to="/admin/dashboard" className="btn btn-secondary mb-3">
        ← Back to Admin Dashboard
      </Link>

      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Product</th>
              <th>Small</th>
              <th>Medium</th>
              <th>Large</th>
              <th>XL</th>
              <th>Total (AED)</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((o) => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.customer_name}</td>
                  <td>{o.customer_email}</td>
                  <td>{o.customer_phone}</td>
                  <td>{o.delivery_location}</td>
                  <td>{o.product_title}</td>
                  <td>{o.small_qty}</td>
                  <td>{o.medium_qty}</td>
                  <td>{o.large_qty}</td>
                  <td>{o.xl_qty}</td>
                  <td><strong>{o.total_price}</strong></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11" className="text-muted">No safety orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminSafetyOrders;
