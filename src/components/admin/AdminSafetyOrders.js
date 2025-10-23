import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../config";

const AdminSafetyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/safetyorder`);
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
              <th>Design Image</th> {/* ✅ Added */}
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

                  {/* ✅ Show uploaded design image */}
                  <td>
                    {o.design_image ? (
                      <>
                        <img
                          src={`${BASE_URL}/backend/uploads/${o.design_image}`}
                          alt="Design"
                          width="80"
                          height="80"
                          style={{ objectFit: "cover", borderRadius: "8px" }}
                        />
                        <br />
                        <a
                          href={`${BASE_URL}/backend/uploads/${o.design_image}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-primary mt-2"
                        >
                          View Full
                        </a>
                      </>
                    ) : (
                      <span className="text-muted">No Image</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="12" className="text-muted">
                  No safety orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminSafetyOrders;