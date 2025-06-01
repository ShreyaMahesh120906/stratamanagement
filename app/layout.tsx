import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Strata Manager",
  description: "Manage your buildings, meetings, and maintenance all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <nav style={navStyle}>
          <Link href="/" style={linkStyle}>🏠 Home</Link>
          <Link href="/meetings" style={linkStyle}>📅 Meetings</Link>
          <Link href="/payment" style={linkStyle}>💳 Payments</Link>
          <Link href="/maintenance" style={linkStyle}>🛠 Maintenance</Link>
          <Link href="/contact" style={linkStyle}>📩 Contact</Link>
        </nav>
        <main style={{ padding: "2rem" }}>{children}</main>
      </body>
    </html>
  );
}

const navStyle = {
  display: "flex",
  gap: "1.5rem",
  padding: "1rem 2rem",
  backgroundColor: "#f8f8f8",
  borderBottom: "1px solid #ddd",
  fontSize: "1.1rem",
  fontWeight: "500",
};

const linkStyle = {
  textDecoration: "none",
  color: "#333",
};
