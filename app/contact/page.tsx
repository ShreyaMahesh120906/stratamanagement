'use client';

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Log the form data for now
    // Add logic to send form data to the server or API
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
        alt="Strata Contact Banner"
        style={{
          width: "100%",
          maxHeight: "300px",
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "2rem",
        }}
      />

      <h1>Contact the Strata Committee</h1>
      <p>Have questions or concerns? Get in touch with us.</p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
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
        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, height: "150px" }}
        ></textarea>
        <button type="submit" style={buttonStyle}>
          Send
        </button>
      </form>

      <h2>📞 Contact Information:</h2>
      <ul style={contactInfoStyle}>
        <li>
          <strong>Email:</strong> strata@buildingmanagement.com
        </li>
        <li>
          <strong>Phone:</strong> +61 2 1234 5678
        </li>
        <li>
          <strong>Office Hours:</strong> Mon-Fri, 9 AM - 5 PM
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

const contactInfoStyle = {
  listStyle: "none",
  padding: "0",
  textAlign: "center" as const,
};
