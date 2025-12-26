// app/signup/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [accountType, setAccountType] = useState<
    "customer" | "reseller" | "corporate"
  >("customer");

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-800">
          Create Your Account
        </h1>
        <p className="text-gray-600 mt-2">
          {accountType === "customer" &&
            "For businesses placing packaging orders"}
          {accountType === "reseller" &&
            "For agencies, designers, and distributors"}
          {accountType === "corporate" &&
            "For large enterprises & multinational clients"}
        </p>
      </div>

      {/* Account Type Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 p-2 bg-gray-100 rounded-lg">
        <button
          onClick={() => setAccountType("customer")}
          className={`px-4 py-2 rounded-md font-medium transition ${
            accountType === "customer"
              ? "bg-white text-green-700 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Customer
        </button>
        <button
          onClick={() => setAccountType("reseller")}
          className={`px-4 py-2 rounded-md font-medium transition ${
            accountType === "reseller"
              ? "bg-white text-green-700 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Reseller
        </button>
        <button
          onClick={() => setAccountType("corporate")}
          className={`px-4 py-2 rounded-md font-medium transition ${
            accountType === "corporate"
              ? "bg-white text-green-700 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Corporate
        </button>
      </div>

      {/* Signup Form */}
      <form className="bg-white p-6 rounded-xl shadow space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 mb-1">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700 mb-1">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-gray-700 mb-1">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 mb-1">
            Work Email *
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+91 98765 43210"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
          />
        </div>

        {/* Reseller-Specific Field */}
        {accountType === "reseller" && (
          <div>
            <label htmlFor="gst" className="block text-gray-700 mb-1">
              GSTIN (Optional but recommended)
            </label>
            <input
              type="text"
              id="gst"
              placeholder="27AABCCDDEEFFG"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
        )}

        {/* Corporate-Specific Field */}
        {accountType === "corporate" && (
          <div>
            <label htmlFor="pan" className="block text-gray-700 mb-1">
              Corporate PAN *
            </label>
            <input
              type="text"
              id="pan"
              placeholder="ABCDE1234F"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password *
            </label>
            <input
              type="password"
              id="password"
              minLength={8}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 mb-1"
            >
              Confirm Password *
            </label>
            <input
              type="password"
              id="confirmPassword"
              minLength={8}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="flex items-start">
          <input type="checkbox" id="terms" className="mt-1 mr-2" required />
          <label htmlFor="terms" className="text-gray-700 text-sm">
            I agree to the{" "}
            <Link href="/terms" className="text-green-700 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy-policy"
              className="text-green-700 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-3 rounded-md font-semibold hover:bg-green-800 transition"
        >
          Create Account
        </button>
      </form>

      <div className="text-center mt-6 text-gray-600">
        <p>
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-green-700 hover:underline font-medium"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
