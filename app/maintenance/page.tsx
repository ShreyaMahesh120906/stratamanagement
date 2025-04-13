'use client';

import { useState, useEffect } from "react";

export default function Maintenance() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    unit: "",
    issue: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [requests, setRequests] = useState<any[]>([]);

  // Fetch maintenance requests from backend
  const fetchRequests = async () => {
    try {
      const response = await fetch('/api/maintenance');
      if (response.ok) {
        const data = await response.json();
        setRequests(data);
      }
    } catch (error) {
      console.error("Failed to fetch maintenance requests", error);
    }
  };

  // Load requests on first page load
  useEffect(() => {
    fetchRequests();
  }, []);

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage("Submitting...");

    try {
      const response = await fetch('/api/maintenance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setStatusMessage(result.message);
        setFormData({ name: "", email: "", unit: "", issue: "" });
        fetchRequests();
      } else {
        const error = await response.json();
        setStatusMessage(error.message);
      }
    } catch (error) {
      console.error("Error submitting request:", error);
      setStatusMessage("Failed to submit request.");
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      {/* Banner Image */}
      <img
        src="/images/Strata.png"
        alt="Maintenance Banner"
        style={{
          width: "100%",
          maxHeight: "300px",
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "2rem",
        }}
      />

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

      <p>{statusMessage}</p>

      <h2>📋 Ongoing Maintenance Requests</h2>
      {requests.length === 0 ? (
        <p>No maintenance requests submitted yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {requests.map((req, index) => (
            <li key={index} style={{ marginBottom: "1.5rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
              <strong>🛠 {req.issue} – Apartment {req.unit}</strong>
              <p><strong>Name:</strong> {req.name}</p>
              <p><strong>Email:</strong> {req.email}</p>
              <p>Status: <span style={{ color: "gray" }}>Pending ⏳</span></p>
              <p>Reported on: {new Date().toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}

    </main>
  );
}

// Styling
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

const statusPending = {
  color: "gray",
};
