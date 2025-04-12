import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Strata Manager</title>
      </Head>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to Strata Manager</h1>
        <p>Manage your buildings, meetings, and maintenance all in one place.</p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
    </>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  backgroundColor: '#f4f4f4',
  cursor: 'pointer',
};
