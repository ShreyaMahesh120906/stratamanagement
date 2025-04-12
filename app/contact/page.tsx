import { useState } from "react";

export default function Contact() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change and update form data
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Form submitted with the following data: ${JSON.stringify(formData)}`);
    // Reset the form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
        {/* Name Input */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ddd",
            }}
            required
          />
        </div>

        {/* Email Input */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ddd",
            }}
            required
          />
        </div>

        {/* Message Input */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ddd",
              height: "150px",
            }}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            backgroundColor: "#f4f4f4",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </main>
  );
}
