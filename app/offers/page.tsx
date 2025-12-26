// app/offers/page.tsx
import Link from "next/link";

export default function OffersPage() {
  const offers = [
    {
      title: "First Order Discount",
      desc: "Get 15% OFF on your first packaging order over ₹10,000.",
      code: "WELCOME15",
      valid: "Valid till 31 Dec 2025",
    },
    {
      title: "Bulk Order Savings",
      desc: "Save up to 25% on orders above 50,000 units.",
      code: "BULK25",
      valid: "Contact sales for quote",
    },
    {
      title: "Free Artwork Design",
      desc: "Complimentary design support on all new orders.",
      code: "No code needed",
      valid: "Limited to 3 revisions",
    },
    {
      title: "Referral Bonus",
      desc: "Refer a client and earn ₹2,000 in PCash.",
      code: "REFER2K",
      valid: "Terms apply",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-4">
        Exclusive Offers
      </h1>
      <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10">
        Save more on your sustainable packaging journey with Sai Print-o-Pack.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className="bg-green-50 border border-green-200 rounded-lg p-6"
          >
            <h3 className="font-bold text-xl text-green-800 mb-2">
              {offer.title}
            </h3>
            <p className="text-gray-700 mb-3">{offer.desc}</p>
            <div className="bg-white inline-block px-3 py-1 rounded text-sm font-mono text-green-700 border border-green-300">
              {offer.code}
            </div>
            <p className="text-sm text-gray-500 mt-3">{offer.valid}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/contact"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition"
        >
          Claim Your Offer
        </Link>
      </div>
    </div>
  );
}
