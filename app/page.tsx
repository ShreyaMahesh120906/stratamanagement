import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Your Ideal Building Management Solution</h1>
      <p>Efficient, Transparent, and Reliable</p>

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
