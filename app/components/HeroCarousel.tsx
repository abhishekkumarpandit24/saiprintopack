"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const AUTO_PLAY_DELAY = 3000;

const banners = [
  {
    id: 1,
    image: "/images/banner1.png",
    title: "WE PRINT",
    subtitle: "PERSONALISED GIFTS ONLINE.",
    tagline: "India's First Online Document Printing Store",
    cta: "PRINT NOW",
    href: "/print-now",
  },
  {
    id: 2,
    image: "/images/banner2.png",
    title: "SUSTAINABLE",
    subtitle: "ECO-FRIENDLY PACKAGING",
    tagline: "100% Recyclable • Biodegradable Options",
    cta: "EXPLORE PRODUCTS",
    href: "/products",
  },
  {
    id: 3,
    image: "/images/banner3.png",
    title: "BULK ORDERS",
    subtitle: "AT COMPETITIVE RATES",
    tagline: "Save up to 25% on high-volume packaging",
    cta: "REQUEST QUOTE",
    href: "/bulk-order",
  },
  {
    id: 4,
    image: "/images/banner4.png",
    title: "TRUSTED BY",
    subtitle: "500+ BRANDS NATIONWIDE",
    tagline: "ISO Certified • Pan-India Delivery",
    cta: "PARTNER WITH US",
    href: "/contact",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 🔁 Faster autoplay
  useEffect(() => {
    if (isHovered) return;

    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, AUTO_PLAY_DELAY);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, isHovered]);

  return (
    <section
      className="relative h-[520px] overflow-hidden rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        {banners.map((banner, i) => (
          <Image
            key={banner.id}
            src={banner.image}
            alt={banner.title}
            fill
            priority={i === 0}
            className={`object-cover transition-opacity duration-1000 ${
              i === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 text-white">
        <h1
          key={`title-${currentIndex}`}
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 animate-slideUp"
        >
          {banners[currentIndex].title}
          <br />
          <span className="text-green-300">
            {banners[currentIndex].subtitle}
          </span>
        </h1>

        <p
          key={`tag-${currentIndex}`}
          className="text-lg md:text-xl max-w-2xl mb-6 opacity-90 animate-slideUp delay-100"
        >
          {banners[currentIndex].tagline}
        </p>

        <Link
          href={banners[currentIndex].href}
          className="bg-white text-green-800 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition shadow-lg animate-slideUp delay-200"
        >
          {banners[currentIndex].cta}
        </Link>
      </div>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
