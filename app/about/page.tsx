// app/about/page.tsx
import Link from "next/link";
import StatsHighlight from "../components/StatsHighlight";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
        About Sai Print-o-Pack
      </h1>

      <StatsHighlight />

      <div className="prose prose-green max-w-none mt-10">
        <p>
          Founded in 1995, <strong>Sai Print-o-Pack</strong> has grown into one
          of India’s leading manufacturers of flexible packaging solutions. With
          a strong commitment to sustainability, innovation, and quality, we
          serve clients across FMCG, pharmaceuticals, food & beverage, and
          e-commerce sectors.
        </p>
        <p>
          Our state-of-the-art manufacturing facility in Ahmedabad spans over
          200,000 sq. ft., equipped with advanced printing, laminating, and
          pouch-making machinery from Germany, Italy, and Japan. We are ISO
          9001:2015, ISO 14001:2015, and FSSC 22000 certified.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
        <p>
          To be the most trusted and sustainable packaging partner in Asia by
          2030, driving circular economy principles across the value chain.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>End-to-end packaging solutions – from design to delivery</li>
          <li>
            Eco-friendly materials (biodegradable, recyclable, compostable)
          </li>
          <li>Strict quality control & global compliance</li>
          <li>Fast turnaround & pan-India logistics</li>
          <li>Dedicated R&D for sustainable innovations</li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/contact"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition"
        >
          Partner With Us
        </Link>
      </div>
    </div>
  );
}
