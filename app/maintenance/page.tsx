import { useState, useEffect } from "react";

export default function Maintenance() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    unit: "",
    issue: "",
  });

  const [maintenanceRequests, setMaintenanceRequests] = useState([]);

  useEffect(() => {
    // Fetch the list of maintenance requests from the API
    const fetchRequests = async () => {
      try {
        const response = await fetch('/api/maintenance');
        const data = await response.json();
        setMaintenanceRequests(data);
      } catch (error) {
        console.error("Error fetching maintenance requests:", error);
      }
    };

    fetchRequests();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/maintenance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Request submitted successfully!");
        setFormData({ name: "", email: "", unit: "", issue: "" }); // Reset the form
        // Fetch the updated list of requests
        const updatedResponse = await fetch('/api/maintenance');
        const updatedData = await updatedResponse.json();
        setMaintenanceRequests(updatedData);
      } else {
        alert("There was an issue submitting your request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit request. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
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
        {maintenanceRequests.map((request, index) => (
          <li key={index} style={listItemStyle}>
            <strong>{request.issue} - Apartment {request.unit}</strong>
            <p>Status: <span style={statusInProgress}>In Progress 🔄</span></p>
            <p>Reported on: {new Date().toLocaleDateString()}</p>
          </li>
        ))}
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
