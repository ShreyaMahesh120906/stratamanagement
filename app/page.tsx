import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      {/* Logo Image */}
      <img
        src="/images/logo.png"
        alt="Strata Manager Logo"
        style={{ maxWidth: "200px", height: "auto", marginBottom: "1.5rem" }}
      />

      <h1>Your Ideal Building Management Solution</h1>
      <p>Efficient, Transparent, and Reliable</p>

      <section style={{ marginTop: "2rem" }}>
        <h2>Why Choose Us?</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          <div style={featureStyle}>
            <span>🏢</span>
            <h3>Efficient Management</h3>
            <p>Our platform ensures smooth building operations.</p>
          </div>
          <div style={featureStyle}>
            <span>💰</span>
            <h3>Transparent Payments</h3>
            <p>Easy payment tracking with automated reminders.</p>
          </div>
          <div style={featureStyle}>
            <span>🔧</span>
            <h3>Maintenance Alerts</h3>
            <p>Stay updated with real-time repair requests.</p>
          </div>
          <div style={featureStyle}>
            <span>📅</span>
            <h3>Meeting Scheduling</h3>
            <p>Organize and track your meetings with ease.</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "4rem" }}>
        <h2>What Our Users Say</h2>
        <div style={testimonialStyle}>
          <p>“Effortless building management!”</p>
          <strong>- Sarah W.</strong>
        </div>
        <div style={testimonialStyle}>
          <p>“A game-changer for meetings!”</p>
          <strong>- John D.</strong>
        </div>
        <div style={testimonialStyle}>
          <p>“Super easy to use!”</p>
          <strong>- Emma L.</strong>
        </div>
      </section>

      {/* 🔽 PHP Integration Starts Here */}
      <section style={{ marginTop: "4rem" }}>
        <h2>Live Strata Notices (via PHP)</h2>
        <p>This section shows dynamic PHP content from our server.</p>
        <iframe
          src="https://smah0632.replit.app"
          width="100%"
          height="400"
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            marginTop: "1rem",
          }}
          title="PHP Notices"
        />
      </section>

      <section style={{ marginTop: "4rem" }}>
        <h2>Need Assistance?</h2>
        <p>Our support team is here to help.</p>
        <Link href="/contact">
          <button style={buttonStyle}>Contact Us</button>
        </Link>
      </section>
    </main>
  );
}

const featureStyle = {
  width: "200px",
  textAlign: "center" as "center",
  padding: "1rem",
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
};

const testimonialStyle = {
  margin: "1rem 0",
  textAlign: "center" as "center",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  backgroundColor: "#f4f4f4",
  cursor: "pointer",
};
