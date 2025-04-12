'use client';

import { useState } from "react";

export default function Maintenance() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    unit: "",
    issue: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Log the form data for now
    // Add logic to send form data to the server or API
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Maintenance Requests</h1>
      <p>Report and track maintenance issues for your building.</p>

      <h2>🔧 Submit a Request</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="text"
          name="unit"
          placeholder="Apartment/Unit Number"
          required
          value={formData.unit}
          onChange={handleChange}
          style={inputStyle}
        />
        <textarea
          name="issue"
          placeholder="Describe the issue"
          required
          value={formData.issue}
          onChange={handleChange}
          style={{ ...inputStyle, height: "150px" }}
        ></textarea>
        <button type="submit" style={buttonStyle}>
          Submit Request
        </button>
      </form>

      <h2>📋 Ongoing Maintenance Requests</h2>
      <ul style={maintenanceListStyle}>
        <li style={listItemStyle}>
          <strong>🚰 Leaking Pipe - Apartment 12B</strong>
          <p>Status: <span style={statusInProgress}>In Progress 🔄</span></p>
          <p>Reported on: March 28, 2025</p>
        </li>
        <li style={listItemStyle}>
          <strong>💡 Light Out in Hallway - Level 3</strong>
          <p>Status: <span style={statusCompleted}>Completed ✅</span></p>
          <p>Resolved on: March 25, 2025</p>
        </li>
        <li style={listItemStyle}>
          <strong>🛠 Broken Door Lock - Gym Entrance</strong>
          <p>Status: <span style={statusPending}>Pending ⏳</span></p>
          <p>Reported on: April 1, 2025</p>
        </li>
      </ul>
    </main>
  );
}

const inputStyle = {
  padding: "0.5rem",
  width: "80%",
  marginBottom: "1rem",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  backgroundColor: "#f4f4f4",
  cursor: "pointer",
};

const maintenanceListStyle = {
  listStyle: "none",
  padding: "0",
  textAlign: "center" as const,
};

const listItemStyle = {
  marginBottom: "1.5rem",
};

const statusInProgress = {
  color: "orange",
};

const statusCompleted = {
  color: "green",
};

const statusPending = {
  color: "gray",
};
