// app/price-calculator/page.tsx
export default function PriceCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-6">
        Price Calculator
      </h1>
      <p className="text-gray-700 text-center mb-8">
        Get an instant estimate for your packaging order.
      </p>

      <div className="bg-white p-6 rounded-xl shadow">
        <div className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2">Product Type</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded">
              <option>Stand-up Pouch</option>
              <option>Flat Pouch</option>
              <option>Shrink Sleeve</option>
              <option>Industrial Liner</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">
                Quantity (Units)
              </label>
              <input
                type="number"
                min="1000"
                defaultValue="5000"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Material</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded">
                <option>PET/PE</option>
                <option>BOPP/CPP</option>
                <option>Biodegradable PLA</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Print Colors</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded">
              <option>1 Color</option>
              <option>4 Color (CMYK)</option>
              <option>6 Color + Varnish</option>
            </select>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-green-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-800 transition">
            Calculate Price
          </button>
        </div>

        <div className="mt-6 text-center text-gray-600">
          <p>
            Note: Final quote may vary based on design complexity and logistics.
          </p>
          <p className="mt-2">
            For accurate pricing,{" "}
            <a href="/contact" className="text-green-700 hover:underline">
              contact our sales team
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
