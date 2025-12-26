// app/privacy-policy/page.tsx
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
        Privacy Policy
      </h1>
      <p className="text-gray-600 mb-8">
        Last updated: {new Date().toLocaleDateString("en-GB")}
      </p>

      <div className="prose prose-green max-w-none space-y-6">
        <p>
          Sai Print-o-Pack (“we,” “us,” or “our”) operates the website{" "}
          <a
            href="https://www.saiprintopack.com"
            className="text-green-700 hover:underline"
          >
            www.saiprintopack.com
          </a>{" "}
          and related services (collectively, the “Services”). This Privacy
          Policy explains how we collect, use, disclose, and protect your
          information when you visit our website or place an order with us.
        </p>

        <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
        <p>We may collect the following information:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Personal Information</strong>: Name, company name, email
            address, phone number, billing/shipping address.
          </li>
          <li>
            <strong>Order Details</strong>: Product specifications, quantity,
            design files, communication history.
          </li>
          <li>
            <strong>Technical Data</strong>: IP address, browser type, device
            information, cookies.
          </li>
          <li>
            <strong>Payment Information</strong>: Processed securely via
            Razorpay, Stripe, or bank transfer (we do not store full card
            details).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">
          2. How We Use Your Information
        </h2>
        <p>We use your information to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Fulfill and manage your orders</li>
          <li>Provide customer support and respond to inquiries</li>
          <li>Improve our products, website, and services</li>
          <li>
            Comply with legal and regulatory obligations (e.g., GST, FSSAI)
          </li>
          <li>
            Send transactional emails (order confirmations, delivery updates)
          </li>
          <li>
            With your consent: send promotional offers (you can unsubscribe
            anytime)
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">3. Data Sharing & Disclosure</h2>
        <p>We do not sell your personal data. We may share it only with:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Service Providers</strong>: Logistics partners (Delhivery,
            Ecom Express), cloud hosting (AWS), and payment gateways.
          </li>
          <li>
            <strong>Legal Authorities</strong>: If required by law or to protect
            our rights.
          </li>
          <li>
            <strong>Corporate Affiliates</strong>: Within our group for
            operational efficiency.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">4. Data Security</h2>
        <p>
          We implement industry-standard security measures including SSL
          encryption, secure servers, and access controls to protect your data.
          Our facility is ISO 27001-aligned for information security.
        </p>

        <h2 className="text-2xl font-semibold">5. Your Rights</h2>
        <p>You may:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Access, correct, or delete your personal data</li>
          <li>Withdraw consent for marketing communications</li>
          <li>Request a copy of your data (data portability)</li>
          <li>Complain to a supervisory authority (e.g., MeitY, India)</li>
        </ul>
        <p>
          To exercise these rights, email us at{" "}
          <a
            href="mailto:privacy@saiprintopack.org"
            className="text-green-700 hover:underline"
          >
            privacy@saiprintopack.org
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold">6. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. The updated version
          will be posted here with a new “Last updated” date.
        </p>

        <h2 className="text-2xl font-semibold">7. Contact Us</h2>
        <p>
          For questions about this policy or your data, contact our Data
          Protection Officer:
        </p>
        <address className="not-italic">
          Sai Print-o-Pack
          <br />
          <p>
            📍 <strong>Address:</strong>
            <br />
            A102/4, Okhla Industrial Area, Phase 2,
            <br />
            South Delhi, Delhi, 110020
            <br />
            India
          </p>
          Email:{" "}
          <a
            href="mailto:privacy@saiprintopack.org"
            className="text-green-700 hover:underline"
          >
            privacy@saiprintopack.org
          </a>
          <br />
          Phone: +91-11-66607447,66607448
        </address>
      </div>

      <div className="mt-10 pt-6 border-t border-gray-200 text-center">
        <Link href="/" className="text-green-700 hover:underline font-medium">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
