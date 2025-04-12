import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Strata Manager</title>
      </Head>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to Strata Manager</h1>
        <p>Manage your buildings, meetings, and maintenance all in one place.</p>
        
        {/* Features Section */}
        <div>
          <h2>Features</h2>
          <ul>
            <li>Track building maintenance</li>
            <li>Organize residents and tenant information</li>
            <li>Plan and manage meetings</li>
          </ul>
        </div>

        {/* Contact Section */}
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
