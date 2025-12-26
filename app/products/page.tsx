// app/products/page.tsx
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const products = [
    {
      title: "Flexible Packaging",
      description:
        "Stand-up pouches, flat pouches, sachets for food, pharma & more.",
      href: "/products/flexible",
    },
    {
      title: "Labels & Sleeves",
      description:
        "Shrink sleeves, pressure-sensitive labels with premium printing.",
      href: "/products/labels",
    },
    {
      title: "Industrial Liners",
      description:
        "Heavy-duty barrier films for chemicals, agrochemicals, and powders.",
      href: "/products/liners",
    },
    {
      title: "Eco-Packaging",
      description: "Compostable, biodegradable, and recyclable solutions.",
      href: "/products/eco",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
        Our Products
      </h1>
      <p className="text-gray-700 mb-10 max-w-2xl">
        Explore our range of high-quality, sustainable packaging solutions
        tailored to your industry needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, idx) => (
          <ProductCard
            key={idx}
            title={product.title}
            description={product.description}
            image={`/images/${product.title
              .toLowerCase()
              .replace(/\s+/g, "-")}.jpg`}
            href={product.href}
          />
        ))}
      </div>
    </div>
  );
}
