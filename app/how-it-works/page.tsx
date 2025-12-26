// app/how-it-works/page.tsx
import Link from "next/link";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Share Your Requirements",
      desc: "Tell us about your packaging needs — material, size, quantity, design, or just an idea.",
    },
    {
      number: "02",
      title: "Get Quote & Artwork Support",
      desc: "Our team provides a competitive quote within 2 hours and free design assistance.",
    },
    {
      number: "03",
      title: "Approve & Confirm",
      desc: "Review the proof, approve, and confirm your order. We handle prepress quality checks.",
    },
    {
      number: "04",
      title: "Production & Delivery",
      desc: "Manufactured in our ISO-certified facility and delivered pan-India in 5-7 days.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-4">
        How It Works
      </h1>
      <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
        Simple, transparent, and fast — from idea to delivery in just 4 steps.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center"
          >
            <div className="text-4xl font-bold text-green-700 mb-3">
              {step.number}
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/contact"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition"
        >
          Start Your Order Now
        </Link>
      </div>
    </div>
  );
}
