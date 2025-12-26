// components/ProductCard.tsx
import Link from "next/link";

export default function ProductCard({
  title,
  description,
  image,
  href,
}: {
  title: string;
  description: string;
  image: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
    >
      <div className="bg-gray-200 h-48 flex items-center justify-center">
        <span className="text-gray-500 text-sm">Image: {title}</span>
      </div>
      <div className="p-5 bg-white">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </Link>
  );
}
