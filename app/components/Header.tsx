// components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Utility Bar */}
      <div className="bg-gray-50 border-b border-gray-200 text-sm">
        <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center gap-4">
          <div className="flex space-x-6">
            <Link href="/about" className="hover:text-blue-700">
              ABOUT US
            </Link>
            <Link href="/how-it-works" className="hover:text-blue-700">
              HOW IT WORKS?
            </Link>
            <Link href="/faq" className="hover:text-blue-700">
              FAQS
            </Link>
            <Link href="/offers" className="hover:text-blue-700">
              OFFERS
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-red-600 font-medium">
              📧 EMAIL : sales@saiprintopack.org
            </span>
          </div>
          <div className="flex space-x-6 ml-auto">
            <Link href="/track-order" className="hover:text-blue-700">
              TRACK ORDER
            </Link>
            <Link href="/pcash" className="hover:text-blue-700">
              💰 PCASH ( 0.00 )
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold text-green-700 hover:text-green-800 transition"
          >
            Sai Print-o-Pack
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <button className="text-gray-700 hover:text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <Link href="/" className="text-gray-700 hover:text-green-600">
              🏠
            </Link>
            <div className="relative group">
              {/* Dropdown Menu (optional) */}
            </div>
            <Link
              href="/price-calculator"
              className="text-gray-700 hover:text-green-600"
            >
              PRICE CALCULATOR
            </Link>
            <Link
              href="/print-now"
              className="text-gray-700 hover:text-green-600"
            >
              PRINT NOW
            </Link>
            <Link
              href="/bulk-order"
              className="text-gray-700 hover:text-green-600"
            >
              BULK ORDER
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Link
                href="/cart"
                className="text-gray-700 hover:text-green-600 relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10v8a2 2 0 002 2h2a2 2 0 002-2v-8a2 2 0 00-2-2h-2m-4-4h-2M5 7a2 2 0 002-2v-2a2 2 0 00-2-2H3a2 2 0 00-2 2v2a2 2 0 002 2zm8 0a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2h2zm8 0a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2h2z"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
            <Link
              href="/login"
              className="text-gray-700 hover:text-green-600 flex items-center space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14a4 4 0 214 4 0 014 4m0 0v2a4 4 0 01-4 4m0-8a4 4 0 014-4"
                />
              </svg>
              LOGIN / SIGNUP
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 pb-4">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
              <MobileLink
                href="/"
                label="🏠 Home"
                onClick={() => setIsMenuOpen(false)}
              />

              <MobileLink
                href="/price-calculator"
                label="Price Calculator"
                onClick={() => setIsMenuOpen(false)}
              />

              <MobileLink
                href="/print-now"
                label="Print Now"
                onClick={() => setIsMenuOpen(false)}
              />

              <MobileLink
                href="/bulk-order"
                label="Bulk Order"
                onClick={() => setIsMenuOpen(false)}
              />

              <MobileLink
                href="/cart"
                label="Cart (0)"
                onClick={() => setIsMenuOpen(false)}
              />

              <MobileLink
                href="/login"
                label="Login / Signup"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function MobileLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: React.ReactNode;
  onClick: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block px-2 py-1 rounded transition ${
        isActive
          ? "text-green-600 font-semibold bg-green-50"
          : "text-gray-700 hover:text-green-600"
      }`}
    >
      {label}
    </Link>
  );
}
