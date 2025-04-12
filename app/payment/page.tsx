'use client';

import { useState } from "react"; // Import useState

export default function Payment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Log the form data for now
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        alt="Payment Banner"
        style={{
          width: "100%",
          maxHeight: "300px",
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "2rem",
        }}
      />

      <h1>Make a Payment</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name" style={{ display: "block" }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ padding: "0.5rem", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email" style={{ display: "block" }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ padding: "0.5rem", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="amount" style={{ display: "block" }}>
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            style={{ padding: "0.5rem", width: "100%" }}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Submit Payment
        </button>
      </form>
    </main>
  );
}

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  backgroundColor: "#f4f4f4",
  cursor: "pointer",
};
