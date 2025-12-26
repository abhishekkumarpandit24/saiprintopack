// app/terms/page.tsx
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
        Terms of Use
      </h1>
      <p className="text-gray-600 mb-8">
        Last updated: {new Date().toLocaleDateString("en-GB")}
      </p>

      <div className="prose prose-green max-w-none space-y-6">
        <p>
          These Terms of Use (“Terms”) govern your access to and use of the
          website{" "}
          <a
            href="https://www.saiprintopack.com"
            className="text-green-700 hover:underline"
          >
            www.saiprintopack.com
          </a>{" "}
          and services offered by Sai Print-o-Pack (“Company,” “we,” “us,” or
          “our”). By using our website or placing an order, you agree to these
          Terms.
        </p>

        <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
        <p>
          By accessing or using our Services, you confirm that you are at least
          18 years old, legally capable of entering binding contracts, and agree
          to these Terms. If you disagree, please do not use our Services.
        </p>

        <h2 className="text-2xl font-semibold">2. Services Overview</h2>
        <p>
          We provide custom flexible packaging solutions including pouches,
          labels, liners, and eco-friendly packaging for businesses across
          India. All orders are subject to material availability, design
          approval, and MOQ (Minimum Order Quantity).
        </p>

        <h2 className="text-2xl font-semibold">3. Account Registration</h2>
        <p>
          You must provide accurate information when creating an account. You
          are responsible for maintaining the confidentiality of your login
          credentials and all activities under your account.
        </p>

        <h2 className="text-2xl font-semibold">4. Orders & Payments</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            All prices are in INR and exclude GST (18% applicable as per law).
          </li>
          <li>Payment must be made in full before production begins.</li>
          <li>
            We accept bank transfers, UPI, credit/debit cards, and net banking.
          </li>
          <li>
            Orders may be canceled before artwork approval; no refunds after
            production starts.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
        <p>
          You retain ownership of your design files. By submitting artwork, you
          grant us a limited license to print and deliver your order. We do not
          claim ownership of your brand or content.
        </p>

        <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Sai Print-o-Pack shall not be
          liable for any indirect, incidental, or consequential damages arising
          from your use of our Services. Our total liability for any claim shall
          not exceed the amount paid by you for the relevant order.
        </p>

        <h2 className="text-2xl font-semibold">
          7. Governing Law & Jurisdiction
        </h2>
        <p>
          These Terms are governed by the laws of India. Any disputes shall be
          subject to the exclusive jurisdiction of courts in Ahmedabad, Gujarat.
        </p>

        <h2 className="text-2xl font-semibold">8. Changes to Terms</h2>
        <p>
          We may modify these Terms at any time. Continued use of our Services
          after changes constitutes acceptance.
        </p>

        <h2 className="text-2xl font-semibold">9. Contact Us</h2>
        <p>For questions about these Terms, please contact:</p>
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
            href="mailto:legal@saiprintopack.org"
            className="text-green-700 hover:underline"
          >
            legal@saiprintopack.org
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
