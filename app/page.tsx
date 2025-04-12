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
      </main>
    </>
  )
}


