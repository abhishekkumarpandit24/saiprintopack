// components/HeroBanner.tsx
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative h-[500px] bg-gradient-to-r from-green-800 to-green-600 flex items-center justify-center text-white text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow">
          India’s Trusted Sustainable Packaging Partner
        </h1>
        <p className="text-xl mb-8 opacity-90">
          Flexible packaging solutions with global certifications, eco-friendly
          materials, and end-to-end service.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-green-800 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition shadow-lg"
        >
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
