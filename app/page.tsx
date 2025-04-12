import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>Your Ideal Building Management Solution</h1>
      <p>Efficient, Transparent, and Reliable</p>

      <h2 style={{ marginTop: "3rem" }}>Features</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>🏢 Efficient Management</li>
        <li>💰 Transparent Payments</li>
        <li>🔧 Maintenance Alerts</li>
        <li>📅 Meeting Scheduling</li>
      </ul>

      <h2 style={{ marginTop: "3rem" }}>What Our Users Say</h2>
      <p>"This platform has made building management effortless!" - Sarah W.</p>
      <p>"A game-changer for our committee meetings!" - John D.</p>
      <p>"Super easy to use and great support!" - Emma L.</p>

      <h2 style={{ marginTop: "3rem" }}>Need Assistance?</h2>
      <p>Our support team is here to help.</p>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/contact">
          <button style={buttonStyle}>Contact</button>
        </Link>
        <Link href="/maintenance">
          <button style={buttonStyle}>Maintenance</button>
        </Link>
        <Link href="/meetings">
          <button style={buttonStyle}>Meetings</button>
        </Link>
        <Link href="/payment">
          <button style={buttonStyle}>Payment</button>
        </Link>
      </div>
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
