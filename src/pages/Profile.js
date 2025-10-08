import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css'; // Naya CSS file
import {BASE_URL} from '../config';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('userToken');
      if (!token) return;

      try {
        const res = await axios.get(`${BASE_URL}/api/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data.user);
      } catch (err) {
        console.error('Error fetching profile:', err);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    window.location.href = '/'; // redirect to homepage after logout
  };

  if (!user) return <p className="loading-text">Loading profile...</p>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="User Avatar"
            className="profile-avatar"
          />
          <h2 className="profile-name">{user.username}</h2>
          <p className="profile-title">User Profile</p>
        </div>
        <div className="profile-info">
          <div className="info-item">
            <span className="info-label">User ID:</span>
            <span className="info-value">{user.id}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Email:</span>
            <span className="info-value">{user.email}</span>
          </div>
        </div>
        <div className="profile-actions">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
