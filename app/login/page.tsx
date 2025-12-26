// app/login/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"customer" | "reseller" | "admin">(
    "customer"
  );

  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-800">Welcome Back</h1>
        <p className="text-gray-600 mt-2">
          {activeTab === "customer" && "Sign in to your account"}
          {activeTab === "reseller" && "Reseller login"}
          {activeTab === "admin" && "Admin portal"}
        </p>
      </div>

      {/* Login Tabs */}
      <div className="flex border-b border-gray-300 mb-6">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "customer"
              ? "text-green-700 border-b-2 border-green-700"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("customer")}
        >
          Customer
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "reseller"
              ? "text-green-700 border-b-2 border-green-700"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("reseller")}
        >
          Reseller
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "admin"
              ? "text-green-700 border-b-2 border-green-700"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("admin")}
        >
          Admin
        </button>
      </div>

      {/* Login Form */}
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
          />
        </div>

        <div className="flex justify-between items-center">
          <label className="flex items-center text-sm text-gray-600">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          <Link
            href="/forgot-password"
            className="text-green-700 text-sm hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded font-semibold hover:bg-green-800 transition"
        >
          Sign In
        </button>
      </form>

      {/* Signup Link */}
      <div className="mt-6 text-center text-gray-600">
        <p>
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-green-700 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
        {activeTab === "reseller" && (
          <p className="mt-2">
            <Link
              href="/reseller-application"
              className="text-green-700 hover:underline"
            >
              Apply to become a reseller →
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
