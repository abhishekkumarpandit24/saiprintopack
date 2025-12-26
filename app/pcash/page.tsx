// app/pcash/page.tsx
import Link from "next/link";

export default function PCashPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-6">
        PCash Loyalty Program
      </h1>
      <p className="text-gray-700 text-center mb-8">
        Earn and redeem PCash on every order with Sai Print-o-Pack.
      </p>

      <div className="bg-green-50 rounded-xl p-6 mb-8 text-center">
        <p className="text-2xl font-bold text-green-800">Your Balance: ₹0.00</p>
        <p className="text-gray-600 mt-2">
          No PCash earned yet. Place your first order to start earning!
        </p>
      </div>

      <div className="prose prose-green max-w-none">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Earn 2% PCash on every order (e.g., ₹200 PCash on ₹10,000 order)
          </li>
          <li>Redeem PCash on future orders (max 50% of order value)</li>
          <li>Refer friends and earn ₹2,000 PCash per successful referral</li>
          <li>PCash never expires</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Redeem Now</h2>
        <p>PCash is automatically applied at checkout when you’re logged in.</p>
      </div>

      <div className="text-center mt-10">
        <Link
          href="/products"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition"
        >
          Start Earning PCash
        </Link>
      </div>
    </div>
  );
}
