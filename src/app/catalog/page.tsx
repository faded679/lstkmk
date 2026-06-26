// @ts-nocheck
"use client";

import { useState, useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Funnel, Ruler, Bank, Warehouse, Factory, Storefront, Car, Calculator as CalculatorIcon } from "@phosphor-icons/react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import catalogData from "@/data/catalog.json";

const categoryIcons: Record<string, any> = {
  agricultural: Bank,
  storage: Warehouse,
  industrial: Factory,
  commercial: Storefront,
  transport: Car,
};

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [calcArea, setCalcArea] = useState<number>(500);
  const [calcPricePerSqm, setCalcPricePerSqm] = useState<number>(5500);
  const shouldReduceMotion = useReducedMotion();

  const calcTotal = useMemo(() => calcArea * calcPricePerSqm, [calcArea, calcPricePerSqm]);

  const filteredProducts = catalogData.products.filter((product) => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    const subcategoryMatch = selectedSubcategory === "all" || product.subcategory === selectedSubcategory;
    const priceMatch = product.priceMin >= priceRange[0] && product.priceMax <= priceRange[1];
    return categoryMatch && subcategoryMatch && priceMatch;
  });

  const selectedCategoryData = catalogData.categories.find((cat) => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Каталог проектов
          </h1>
          <p className="text-xl text-gray-600">
            Готовые решения для строительства под ключ
          </p>
        </motion.div>

        {/* Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white"
        >
          <div className="flex items-center gap-3 mb-6">
            <CalculatorIcon size={32} className="text-blue-200" />
            <h2 className="text-2xl font-bold">Калькулятор стоимости</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-blue-100 mb-2">
                Площадь (м²)
              </label>
              <input
                type="number"
                value={calcArea}
                onChange={(e) => setCalcArea(Number(e.target.value))}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-blue-100 mb-2">
                Цена за м² (₽)
              </label>
              <input
                type="number"
                value={calcPricePerSqm}
                onChange={(e) => setCalcPricePerSqm(Number(e.target.value))}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="5500"
              />
            </div>
            
            <div className="flex flex-col justify-end">
              <div className="text-sm text-blue-100 mb-1">Предварительная стоимость</div>
              <div className="text-3xl font-bold">
                {calcTotal.toLocaleString()} ₽
              </div>
            </div>
          </div>
          
          <p className="mt-4 text-sm text-blue-200">
            * Это предварительный расчёт. Точную стоимость уточните у менеджера.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-72 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <div className="flex items-center gap-2 mb-6">
                <Funnel size={24} className="text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900">Фильтры</h2>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Категория</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedSubcategory("all");
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === "all"
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    Все категории
                  </button>
                  {catalogData.categories.map((category) => {
                    const Icon = categoryIcons[category.id] || Bank;
                    return (
                      <button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setSelectedSubcategory("all");
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                          selectedCategory === category.id
                            ? "bg-blue-50 text-blue-700 font-medium"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <Icon size={18} />
                        {category.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Subcategory Filter */}
              {selectedCategory !== "all" && selectedCategoryData && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Подкатегория</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedSubcategory("all")}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedSubcategory === "all"
                          ? "bg-blue-50 text-blue-700 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      Все
                    </button>
                    {selectedCategoryData.subcategories.map((subcategory) => (
                      <button
                        key={subcategory.id}
                        onClick={() => setSelectedSubcategory(subcategory.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedSubcategory === subcategory.id
                            ? "bg-blue-50 text-blue-700 font-medium"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {subcategory.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Цена за м² (₽)</h3>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="От"
                  />
                  <span className="text-gray-400">—</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="До"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedSubcategory("all");
                  setPriceRange([0, 10000]);
                }}
                className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Сбросить фильтры
              </button>
            </div>
          </motion.aside>

          {/* Products Grid */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <p className="text-gray-600">
                Найдено: <span className="font-semibold text-gray-900">{filteredProducts.length}</span> проектов
              </p>
            </motion.div>

            {filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-500 text-lg">По вашему запросу ничего не найдено</p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <Link href={`/catalog/${product.slug}`}>
                      <div className="aspect-video bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
                        <Ruler size={48} className="text-blue-300" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                            {product.name}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-500">от {product.priceMin.toLocaleString()} ₽/м²</p>
                            <p className="text-xs text-gray-400">до {product.priceMax.toLocaleString()} ₽/м²</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">{product.area} м²</p>
                            <p className="text-xs text-gray-500">{product.dimensions}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
