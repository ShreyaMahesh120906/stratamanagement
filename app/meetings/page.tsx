'use client';

export default function Meetings() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      {/* Banner Image */}
      <img
        src="/images/Strata.png"
        alt="Meetings Banner"
        style={{
          width: "100%",
          maxHeight: "300px",
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "2rem",
        }}
      />

      <h1>Upcoming Meetings & Notices</h1>
      <p>Here are the scheduled strata meetings:</p>

      <ul style={meetingListStyle}>
        <li style={meetingItemStyle}>
          <strong>📅 April 15, 2025:</strong> General Owners' Meeting at 6:00 PM (Community Hall)
        </li>
        <li style={meetingItemStyle}>
          <strong>📅 April 22, 2025:</strong> Budget Planning Session at 5:30 PM (Online)
        </li>
        <li style={meetingItemStyle}>
          <strong>📅 May 5, 2025:</strong> Annual General Meeting at 7:00 PM (Clubhouse)
        </li>
      </ul>

      <p><em>Check back regularly for updates on meeting times and agenda items.</em></p>
    </main>
  );
}

const meetingListStyle = {
  listStyle: "none",
  padding: "0",
  margin: "1rem 0",
};

const meetingItemStyle = {
  marginBottom: "1rem",
  fontSize: "1.2rem",
};
