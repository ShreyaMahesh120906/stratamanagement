import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      {/* Hero Section */}
      <section>
        <h1>Your Ideal Building Management Solution</h1>
        <p>Efficient, Transparent, and Reliable</p>
      </section>

      {/* Features */}
      <section style={{ marginTop: "2rem" }}>
        <h2>Why Choose Us?</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", marginTop: "1rem" }}>
          <Feature icon="🏢" title="Efficient Management" text="Smooth building operations and communication." />
          <Feature icon="💰" title="Transparent Payments" text="Easy tracking and reminders for levies and fees." />
          <Feature icon="🔧" title="Maintenance Alerts" text="Real-time updates on repair requests." />
          <Feature icon="📅" title="Meeting Scheduling" text="Built-in calendar integration." />
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ marginTop: "4rem" }}>
        <h2>What Our Users Say</h2>
        <Testimonial quote="Effortless building management!" author="Sarah W." />
        <Testimonial quote="A game-changer for meetings!" author="John D." />
        <Testimonial quote="Super easy to use!" author="Emma L." />
      </section>

      {/* Contact CTA */}
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

function Feature({ icon, title, text }) {
  return (
    <div style={{ width: "200px", textAlign: "center" }}>
      <div style={{ fontSize: "2rem" }}>{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Testimonial({ quote, author }) {
  return (
    <div style={{ margin: "1rem 0" }}>
      <p><em>“{quote}”</em></p>
      <strong>- {author}</strong>
    </div>
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
