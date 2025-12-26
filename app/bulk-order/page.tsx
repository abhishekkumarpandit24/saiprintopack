// app/bulk-order/page.tsx
export default function BulkOrderPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-6">
        Bulk Order Enquiry
      </h1>
      <p className="text-gray-700 text-center mb-8">
        For orders above 10,000 units — get custom pricing, dedicated support,
        and faster delivery.
      </p>

      <form className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Company Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Contact Person</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Product Type</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded">
            <option>Select</option>
            <option>Flexible Packaging</option>
            <option>Labels</option>
            <option>Industrial Liners</option>
            <option>Eco-Packaging</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            Estimated Quantity (Monthly)
          </label>
          <input
            type="text"
            placeholder="e.g. 50,000 units"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            Message / Special Requirements
          </label>
          <textarea
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-3 rounded font-semibold hover:bg-green-800 transition"
        >
          Submit Enquiry
        </button>
      </form>

      <div className="mt-8 text-center text-gray-600">
        <p>Our bulk sales team will contact you within 2 business hours.</p>
      </div>
    </div>
  );
}
