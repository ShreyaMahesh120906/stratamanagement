import Head from 'next/head'
import Link from 'next/link'

// Testimonial Component
const Testimonial = ({ quote, author }) => (
  <div className="testimonial-card">
    <p>“{quote}”</p>
    <strong>- {author}</strong>
  </div>
)

export default function Home() {
  return (
    <>
      <Head>
        <title>Strata Manager</title>
      </Head>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
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

        {/* Contact Section */}
        <section className="contact-cta">
          <h2>Need Assistance?</h2>
          <p>Our support team is here to help.</p>
          <Link href="/contact">
            <button className="cta-button">Contact Us</button>
          </Link>
        </section>

        {/* Contact the Strata Committee */}
        <section style={{ marginTop: '3rem' }}>
          <h2>Contact the Strata Committee</h2>
          <p>Have questions or concerns? Get in touch with us.</p>

          <form action="/api/contact" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>

          <h3>📞 Contact Information:</h3>
          <ul className="contact-info">
            <li><strong>Email:</strong> strata@buildingmanagement.com</li>
            <li><strong>Phone:</strong> +61 2 1234 5678</li>
            <li><strong>Office Hours:</strong> Mon-Fri, 9 AM - 5 PM</li>
          </ul>
        </section>
      </main>
    </>
  )
}
