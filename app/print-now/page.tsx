// app/print-now/page.tsx
import Link from "next/link";

export default function PrintNowPage() {
  const categories = [
    { name: "Stand-up Pouches", href: "/products/flexible" },
    { name: "Labels & Tags", href: "/products/labels" },
    { name: "Certificate Printing", href: "/products/certificates" },
    { name: "Custom Boxes", href: "/products/boxes" },
    { name: "Eco-Friendly Bags", href: "/products/eco" },
    { name: "Industrial Packaging", href: "/products/industrial" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-4">
        Print Now
      </h1>
      <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10">
        Select your product category and get started in minutes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <Link key={idx} href={cat.href}>
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 text-center h-full flex flex-col justify-between">
              <div className="text-xl font-semibold text-gray-800">
                {cat.name}
              </div>
              <div className="mt-4 text-green-700 font-medium">→ Choose</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12 text-gray-700">
        <p>Need help choosing?</p>
        <Link
          href="/contact"
          className="text-green-700 hover:underline font-medium"
        >
          Talk to an expert
        </Link>
      </div>
    </div>
  );
}
