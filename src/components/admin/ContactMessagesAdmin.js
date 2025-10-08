import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config';

const ContactMessagesAdmin = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/contact/admin`);
        setMessages(res.data);
      } catch (err) {
        console.error('❌ Failed to fetch messages:', err);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="container mt-5">
      <h2>📥 Contact Messages</h2>
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <div className="table-responsive mt-4">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Received At</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg.id}>
                  <td>{msg.id}</td>
                  <td>{msg.name}</td>
                  <td>{msg.email}</td>
                  <td>{msg.phone}</td>
                  <td>{msg.message}</td>
                  <td>{new Date(msg.submitted_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactMessagesAdmin;
