import Link from "next/link";
import "./home.css"; // Optional if you want to split styles

// Testimonial Component
const Testimonial = ({ quote, author }: { quote: string; author: string }) => (
  <div className="testimonial-card">
    <p>“{quote}”</p>
    <strong>- {author}</strong>
  </div>
);

export default function Home() {
  return (
    <main className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Ideal Building Management Solution</h1>
          <p>Efficient, Transparent, and Reliable</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="features-container">
          <div className="feature">
            <span className="feature-icon">🏢</span>
            <h3>Efficient Management</h3>
            <p>Our platform ensures smooth building operations and communication.</p>
          </div>
          <div className="feature">
            <span className="feature-icon">💰</span>
            <h3>Transparent Payments</h3>
            <p>Easy payment tracking with automated reminders for levies and fees.</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🔧</span>
            <h3>Maintenance Alerts</h3>
            <p>Never miss a repair request—stay updated with real-time notifications.</p>
          </div>
          <div className="feature">
            <span className="feature-icon">📅</span>
            <h3>Meeting Scheduling</h3>
            <p>Organize and track meetings with built-in calendar integration.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-container">
          <Testimonial quote="This platform has made building management effortless!" author="Sarah W." />
          <Testimonial quote="A game-changer for our committee meetings!" author="John D." />
          <Testimonial quote="Super easy to use and great support!" author="Emma L." />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <h2>Need Assistance?</h2>
        <p>Our support team is here to help.</p>
        <Link href="/contact">
          <button className="cta-button">Contact Us</button>
        </Link>
      </section>
    </main>
  );
}
