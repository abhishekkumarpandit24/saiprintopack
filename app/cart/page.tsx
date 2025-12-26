// app/cart/page.tsx
import Link from "next/link";

export default function CartPage() {
  // Mock cart items (in real app, this would come from context/API)
  const cartItems = [
    {
      id: 1,
      name: "Stand-up Pouch - 200g",
      material: "PET/ALU/PE",
      size: "150mm x 200mm",
      print: "4 Color CMYK",
      quantity: 10000,
      price: 2.5,
    },
    {
      id: 2,
      name: "Shrink Sleeve Labels",
      material: "PVC",
      size: "80mm x 120mm",
      print: "6 Color + Varnish",
      quantity: 50000,
      price: 0.85,
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold text-green-800 mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg">Your cart is empty</p>
          <Link
            href="/products"
            className="mt-4 inline-block text-green-700 hover:underline font-medium"
          >
            ← Browse Products
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4">Product</th>
                  <th className="p-4">Details</th>
                  <th className="p-4">Qty</th>
                  <th className="p-4 text-right">Price</th>
                  <th className="p-4 text-right">Total</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="p-4 font-medium">{item.name}</td>
                    <td className="p-4 text-sm text-gray-600">
                      <div>{item.material}</div>
                      <div>{item.size}</div>
                      <div>{item.print}</div>
                    </td>
                    <td className="p-4">
                      <input
                        type="number"
                        min="1000"
                        step="1000"
                        defaultValue={item.quantity}
                        className="w-24 px-2 py-1 border rounded"
                      />
                    </td>
                    <td className="p-4 text-right">
                      ₹{item.price.toFixed(2)}/unit
                    </td>
                    <td className="p-4 text-right font-medium">
                      ₹{(item.quantity * item.price).toFixed(2)}
                    </td>
                    <td className="p-4">
                      <button className="text-red-600 hover:text-red-800 text-sm">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="lg:w-1/3 ml-auto bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>GST (18%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-300 pt-2 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Link
                href="/checkout"
                className="block w-full bg-green-700 text-white text-center py-3 rounded-md hover:bg-green-800 transition"
              >
                Proceed to Checkout
              </Link>
              <Link
                href="/products"
                className="block w-full text-center py-3 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 transition"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
