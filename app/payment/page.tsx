import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Payments() {
  return (
    <main>
      <h1>Payments & Levies</h1>
      <p>Manage your strata fees and make secure online payments.</p>

      <div className="payment-info">
        <h2>💰 Your Outstanding Balance: <span className="amount">$750.00</span></h2>
        <button className="pay-now">Pay Now</button>
      </div>

      <h2>Recent Transactions:</h2>
      <ul className="transaction-list">
        <li>March 10, 2025 - Payment of $500.00 (Completed ✅)</li>
        <li>February 8, 2025 - Payment of $500.00 (Completed ✅)</li>
      </ul>
    </main>
  );
}
