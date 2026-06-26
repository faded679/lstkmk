// @ts-nocheck
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, Ruler, Bank, Warehouse, Factory, Store, Car, Check, Phone, Envelope } from "@phosphor-icons/react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import catalogData from "@/data/catalog.json";

const categoryIcons: Record<string, any> = {
  agricultural: Bank,
  storage: Warehouse,
  industrial: Factory,
  commercial: Store,
  transport: Car,
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [activeTab, setActiveTab] = useState<"description" | "features">("description");
  const shouldReduceMotion = useReducedMotion();

  const product = catalogData.products.find((p) => p.slug === params.slug);

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

  const category = catalogData.categories.find((cat) => cat.id === product.category);
  const subcategory = category?.subcategories.find((sub) => sub.id === product.subcategory);
  const CategoryIcon = category ? categoryIcons[category.id] : Bank;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <Link href="/catalog" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft size={20} />
            Каталог проектов
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-video bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl flex items-center justify-center mb-6">
              <Ruler size={96} className="text-blue-300" />
            </div>
            
            {/* Price Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">Стоимость за м²</p>
                  <p className="text-3xl font-bold text-gray-900">
                    от {product.priceMin.toLocaleString()} ₽
                  </p>
                  <p className="text-sm text-gray-400">до {product.priceMax.toLocaleString()} ₽</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Площадь</p>
                  <p className="text-2xl font-semibold text-gray-900">{product.area} м²</p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Ruler size={20} />
                  <span>{product.dimensions}</span>
                </div>
                {product.capacity && (
                  <div className="flex items-center gap-2 text-gray-600 mt-2">
                    <Bank size={20} />
                    <span>{product.capacity}</span>
                  </div>
                )}
              </div>

              <a
                href="tel:+78001009151"
                className="block w-full py-3 px-4 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Phone size={20} className="inline mr-2" />
                Заказать расчёт
              </a>
            </div>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category Badge */}
            <div className="flex items-center gap-2 mb-4">
              {category && (
                <>
                  <CategoryIcon size={20} className="text-blue-600" />
                  <span className="text-sm text-gray-600">{category.name}</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-sm text-gray-600">{subcategory?.name}</span>
                </>
              )}
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setActiveTab("description")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "description"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Описание
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "features"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Характеристики
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              {activeTab === "description" ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="prose prose-gray max-w-none"
                >
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg p-6 text-white"
            >
              <h3 className="text-xl font-semibold mb-4">Нужна консультация?</h3>
              <p className="text-blue-100 mb-6">
                Наши специалисты ответят на любой интересующий вопрос и помогут с выбором проекта
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+78001009151"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                >
                  <Phone size={20} />
                  +7 (800) 100-91-51
                </a>
                <a
                  href="mailto:maxsteel31@bk.ru"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-colors font-medium"
                >
                  <Envelope size={20} />
                  maxsteel31@bk.ru
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
