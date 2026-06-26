// @ts-nocheck

import Link from "next/link";
import Navigation from "@/components/Navigation";
import catalogData from "@/data/catalog.json";
import ProductContent from "./ProductContent";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = catalogData.products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Товар не найден</h1>
          <Link href="/catalog" className="text-blue-600 hover:text-blue-700">
            ← Вернуться в каталог
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      <ProductContent product={product} categories={catalogData.categories} />
    </div>
  );
}
