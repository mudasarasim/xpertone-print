import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';
import { BASE_URL } from '../config';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
  const fetchProfileAndOrders = async () => {
    const token = localStorage.getItem('userToken');
    if (!token) return;

    try {
      const res = await axios.get(`${BASE_URL}/api/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data.user);

      // Normal orders
      const normalOrders = await axios.get(`${BASE_URL}/api/orders/my-orders`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Safety orders
      const safetyOrders = await axios.get(`${BASE_URL}/api/safetyorder`);

      // Combine both types of orders (optional labeling)
      const merged = [
        ...normalOrders.data.map(o => ({ ...o, type: 'Print Order' })),
        ...safetyOrders.data.map(o => ({ ...o, type: 'Safety Order' })),
      ];

      setOrders(merged);
    } catch (err) {
      console.error('Error fetching profile or orders:', err);
    }
  };

  fetchProfileAndOrders();
}, []);


  const handleLogout = () => {
    localStorage.removeItem('userToken');
    window.location.href = '/';
  };

  if (!user) return <p className="loading-text">Loading profile...</p>;

  return (
    <div className="profile-layout">
      {/* 🧭 Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Avatar"
            className="sidebar-avatar"
          />
          <h3>{user.username}</h3>
          <p>{user.email}</p>
        </div>

        <nav className="sidebar-nav">
          <button
            className={`nav-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            👤 Profile
          </button>
          <button
            className={`nav-btn ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            📦 My Orders
          </button>
          <button className="nav-btn logout" onClick={handleLogout}>
            🚪 Logout
          </button>
        </nav>
      </aside>

      {/* 📄 Main Content */}
      <main className="profile-main">
        {activeTab === 'profile' && (
          <div className="profile-card">
            <h2>User Profile</h2>
            <div className="profile-info">
              <div className="info-item">
                <span className="info-label">User ID:</span>
                <span className="info-value">{user.id}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Username:</span>
                <span className="info-value">{user.username}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">{user.email}</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="orders-section">
            <h2>📦 My Orders</h2>
            {orders.length === 0 ? (
              <p>You haven’t placed any orders yet.</p>
            ) : (
              <div className="table-container">
                <table className="orders-table">
                 <thead>
  <tr>
    <th>Type</th>
    <th>Order ID</th>
    <th>Product</th>
    <th>Quantity</th>
    <th>Total (AED)</th>
    <th>Date</th>
  </tr>
</thead>
<tbody>
  {orders.map((order, index) => (
    <tr key={index}>
      <td>{order.type}</td>
      <td>{order.id}</td>
      <td>{order.product_title}</td>
      <td>{order.quantity || (order.small_qty + order.medium_qty + order.large_qty + order.xl_qty)}</td>
      <td>{order.total_price}</td>
      <td>{new Date(order.created_at).toLocaleString()}</td>
    </tr>
  ))}
</tbody>

                </table>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Profile;
