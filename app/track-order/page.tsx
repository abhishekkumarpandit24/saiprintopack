// app/track-order/page.tsx
export default function TrackOrderPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-6">
        Track Your Order
      </h1>
      <p className="text-gray-700 text-center mb-8">
        Enter your order ID to check real-time status.
      </p>

      <form className="space-y-4">
        <div>
          <label htmlFor="orderId" className="block text-gray-700 mb-2">
            Order ID
          </label>
          <input
            type="text"
            id="orderId"
            placeholder="e.g. SPO-2025-12345"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
        >
          Track Order
        </button>
      </form>

      <div className="mt-10 text-center text-gray-600 text-sm">
        <p>Can’t find your order ID?</p>
        <p className="mt-1">
          Check your email confirmation or contact us at{" "}
          <a
            href="mailto:sales@saiprintopack.org"
            className="text-green-700 hover:underline"
          >
            sales@saiprintopack.org
          </a>
        </p>
      </div>
    </div>
  );
}
