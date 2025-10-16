import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProcessTracker.css";
import { BASE_URL } from "../config";

const stages = [
  "Prepress",
  "Printing",
  "Collating",
  "Binding",
  "Polywrap",
  "Shipping",
  "Completed",
];

const ProcessTracker = () => {
  const [processes, setProcesses] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch all processes
  const fetchProcesses = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/process`);
      setProcesses(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching processes:", err);
      setLoading(false);
    }
  };

  // ✅ Update stage
  const updateStage = async (orderId, newStage) => {
    try {
      await axios.put(`${BASE_URL}/api/process/update/${orderId}`, {
        stage: newStage,
      });
      fetchProcesses();
    } catch (err) {
      console.error("Error updating stage:", err);
    }
  };

  useEffect(() => {
    fetchProcesses();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="process-tracker-container">
      <h2>🧩 Printing Process Tracker</h2>

      <table className="process-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Phone</th>
            <th>Current Stage</th>
            <th>Progress</th>
            <th>Update Stage</th>
          </tr>
        </thead>
        <tbody>
          {processes.map((item) => (
        <tr key={item.id}>
  <td>{item.order_id}</td>
  <td>{item.customer_name}</td>
  <td>{item.customer_phone}</td>
  <td>
    <span className={`stage-label ${item.current_stage.toLowerCase()}`}>
      {item.current_stage}
    </span>
  </td>
  <td>
    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{
          width: `${
            ((stages.indexOf(item.current_stage) + 1) / stages.length) * 100
          }%`,
        }}
      ></div>
    </div>
  </td>
  <td>
    <select
      value={item.current_stage}
      onChange={(e) => updateStage(item.order_id, e.target.value)}
      className="stage-dropdown"
    >
      {stages.map((stage) => (
        <option key={stage} value={stage}>
          {stage}
        </option>
      ))}
    </select>
  </td>
</tr>

          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProcessTracker;
