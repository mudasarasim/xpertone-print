import React, { useEffect, useState } from 'react';
import axios from '../config'; // ✅ Use the configured Axios instance

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/api/contact/all')
      .then((res) => setMessages(res.data))
      .catch((err) => console.error('Error fetching messages:', err));
  }, []);

  return (
    <div className="container mt-5">
      <h3>Contact Messages</h3>
      <table className="table table-bordered mt-3">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg, idx) => (
            <tr key={msg.id || idx}>
              <td>{idx + 1}</td>
              <td>{msg.name}</td>
              <td>{msg.email}</td>
              <td>{msg.phone}</td>
              <td>{msg.message}</td>
              <td>{new Date(msg.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMessages;
