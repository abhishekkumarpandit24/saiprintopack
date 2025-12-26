// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Company</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded h-32"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            We’d love to hear from you! Reach out for quotes, partnerships, or
            career opportunities.
          </p>
          <div className="space-y-3 text-gray-700">
            <p>
              📧 <strong>Email:</strong> sales@saiprintopack.org
            </p>
            <p>
              📞 <strong>Phone:</strong> +91-11-66607447,66607448
            </p>
            <p>
              📍 <strong>Address:</strong>
              <br />
              A102/4, Okhla Industrial Area, Phase 2,
              <br />
              South Delhi, Delhi, 110020
              <br />
              India
            </p>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Working Hours</h3>
            <p>Monday – Saturday: 9:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
