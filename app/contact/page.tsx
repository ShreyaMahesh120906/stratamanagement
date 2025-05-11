'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert('Submit clicked!'); // ✅ Confirms the button works
    console.log('Sending form data:', formData); // ✅ Check console

    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const text = await res.text();
        alert(`Failed: ${text}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <img
        src="/images/Strata.png"
        alt="Strata Contact Banner"
        style={{
          width: '100%',
          maxHeight: '300px',
          objectFit: 'cover',
          borderRadius: '12px',
          marginBottom: '2rem',
        }}
      />

      <h1>Contact the Strata Committee</h1>
      <p>Have questions or concerns? Get in touch with us.</p>

      <form onSubmit={handleSubmit} style={formStyle}>
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
          style={{ ...inputStyle, height: '150px' }}
        ></textarea>
        <button type="submit" style={buttonStyle}>Send</button>
      </form>

      <h2>📞 Contact Information:</h2>
      <ul style={contactInfoStyle}>
        <li><strong>Email:</strong> strata@buildingmanagement.com</li>
        <li><strong>Phone:</strong> +61 2 1234 5678</li>
        <li><strong>Office Hours:</strong> Mon–Fri, 9 AM – 5 PM</li>
      </ul>
    </main>
  );
}

// Styling
const formStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center' as const,
};

const inputStyle = {
  padding: '0.5rem',
  width: '80%',
  marginBottom: '1rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  backgroundColor: '#f4f4f4',
  cursor: 'pointer',
};

const contactInfoStyle = {
  listStyle: 'none',
  padding: 0,
  textAlign: 'center' as const,
};
