// app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "./components/HeroCarousel";
import StatsHighlight from "./components/StatsHighlight";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Banner */}
      <HeroCarousel />

      {/* Promo Banner */}
      <section className="bg-gray-100 py-4 text-center mb-8">
        <p className="text-gray-700">
          🚚 Enjoy FREE delivery on every order above ₹499 or grab a 25% OFF on
          your first purchase! 🎉 Simply apply the coupon code at checkout and
          save more with SaiPrintoPack.in ✨
        </p>
      </section>
      {/* Product Categories Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <ProductCategoryCard
          image="/images/document.png"
          title="DOCUMENTS"
          link="/contact"
        />
        <ProductCategoryCard
          image="/images/banner1.png"
          title="BOOKS"
          link="/contact"
        />
        <ProductCategoryCard
          image="/images/banner4.png"
          title="THESIS & DISSERTATION"
          link="/contact"
        />
        <ProductCategoryCard
          image="/images/certificates.png"
          title="CERTIFICATE & CARDS"
          link="/contact"
        />
        {/* Add more as needed */}
      </section>
      <StatsHighlight />
    </main>
  );
}

// Reusable Card Component
function ProductCategoryCard({
  image,
  title,
  link,
}: {
  image: string;
  title: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="block overflow-hidden rounded-lg shadow hover:shadow-lg transition"
    >
      <div className="aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 text-center bg-white">
        <h3 className="font-semibold text-gray-800">{title}</h3>
      </div>
    </Link>
  );
}
