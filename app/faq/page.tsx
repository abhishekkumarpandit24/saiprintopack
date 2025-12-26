// app/faq/page.tsx
export default function FAQPage() {
  const faqs = [
    {
      q: "What is the minimum order quantity (MOQ)?",
      a: "MOQ starts from 1,000 units for most flexible packaging products. We also support prototype runs for new brands.",
    },
    {
      q: "How long does production take?",
      a: "Standard lead time is 5–7 working days after artwork approval. Rush orders (3 days) available on request.",
    },
    {
      q: "Do you offer eco-friendly packaging?",
      a: "Yes! We provide recyclable, biodegradable, and compostable options including PLA, paper-based laminates, and mono-material structures.",
    },
    {
      q: "Are you certified?",
      a: "We are ISO 9001:2015, ISO 14001:2015, and FSSC 22000 certified. Our facility meets global food and pharma safety standards.",
    },
    {
      q: "Do you ship pan-India?",
      a: "Yes, we deliver to all major cities and towns across India with trusted logistics partners.",
    },
    {
      q: "Can you help with design?",
      a: "Absolutely! Our in-house design team offers free artwork creation and structural support.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-4">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10">
        Everything you need to know about working with Sai Print-o-Pack.
      </p>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-gray-200 pb-6">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {faq.q}
            </h3>
            <p className="text-gray-600">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <p className="text-gray-700">
          Still have questions?{" "}
          <a
            href="mailto:sales@saiprintopack.org"
            className="text-green-700 hover:underline"
          >
            Email us
          </a>{" "}
          or call +91 98765 43210.
        </p>
      </div>
    </div>
  );
}
