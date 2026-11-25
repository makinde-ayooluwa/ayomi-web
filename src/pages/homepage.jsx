import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  Menu,
  ArrowRight,
  Heart,
  Star,
  Truck,
  ShieldCheck,
  Headphones,
  X
} from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../components/interface/productCard";
import Footer from "../components/layout/footer";
const formatPrice = (price) =>
  `₦${price.toLocaleString("en-NG")}`;

export default function Homepage({ products, categories, selectedCategory, setSelectedCategory, search, setSearch, cartCount, addToCart, menuOpen, setMenuOpen }) {
  const filteredProducts = products.filter((_, index) => index < 4).filter((product) => {
    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#20251f]">

      {/* Announcement */}
      <div className="bg-[var(--deep-purple)] px-4 py-2.5 text-center text-xs font-medium tracking-wide text-white">
        FREE DELIVERY ON ORDERS ABOVE ₦100,000
      </div>

      {/* Navbar */}

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20 lg:px-8">

        <div className="max-w-xl">
          <span className="mb-6 inline-flex rounded-full bg-[var(--light-purple)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--deep-purple)]">
            Your everyday shopping destination
          </span>

          <h1 className="text-5xl font-bold leading-[1.12] tracking-tight md:text-6xl lg:text-7xl">
            Find your
            <span className="block text-[var(--champagne-gold)]">everyday</span>
            essentials.
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-gray-500">
            Discover thoughtfully selected products that make everyday
            living better. Quality finds, great value, all in one place.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-3 rounded-full bg-[var(--champagne-gold)] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#3c5742]"
            >
              Explore Collection
              <ArrowRight size={17} />
            </a>

            <a
              href="#categories"
              className="rounded-full border border-gray-300 px-7 py-4 text-sm font-semibold transition hover:border-[#263b2d]"
            >
              Browse Categories
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-gray-200 pt-7">
            <div>
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="mt-1 text-xs text-gray-500">Products</p>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div>
              <h3 className="text-2xl font-bold">2k+</h3>
              <p className="mt-1 text-xs text-gray-500">Happy customers</p>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div>
              <h3 className="text-2xl font-bold">4.9/5</h3>
              <p className="mt-1 text-xs text-gray-500">Customer rating</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-4 -top-4 h-40 w-40 rounded-full bg-[#e7ecdf] blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
              alt="Modern shopping store"
              className="h-[420px] w-full object-cover md:h-[560px]"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-5 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--deep-purple)]">
                Curated for you
              </p>
              <div className="mt-2 flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold">Discover something new.</h3>
                <ArrowRight size={22} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-9 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">

          {[
            { icon: Truck, title: "Fast Delivery", text: "Get your orders delivered" },
            { icon: ShieldCheck, title: "Secure Shopping", text: "Safe and secure checkout" },
            { icon: Headphones, title: "Customer Support", text: "We're here to help" },
            { icon: Star, title: "Quality Products", text: "Carefully selected items" }
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf1e9] text-[var(--deep-purple)]">
                <item.icon size={21} />
              </div>
              <div>
                <h3 className="text-sm font-bold">{item.title}</h3>
                <p className="mt-1 text-xs text-gray-500">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--deep-purple)]">
              Explore our collection
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Shop by category
            </h2>
          </div>

          <a href="#products" className="hidden items-center gap-2 text-sm font-semibold md:flex">
            View all <ArrowRight size={17} />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => {
                setSelectedCategory(category.slug);
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group text-left"
            >
              <div className="overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-52"
                />
              </div>
              <h3 className="mt-4 text-sm font-bold">{category.name}</h3>
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--deep-purple)]">
                Handpicked for you
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Featured products
              </h2>
              <p className="mt-3 text-sm text-gray-500">
                Discover products worth adding to your collection.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition ${selectedCategory === category.name
                    ? "bg-[var(--deep-purple)] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-end p-5">
            <Link to={"/products"} className="hidden items-center gap-2 text-sm font-semibold md:flex">
              View all <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <ProductCard product={product} addToCart={addToCart} key={index} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="py-16 text-center text-sm text-gray-500">
              No products found. Try another search or category.
            </p>
          )}
        </div>
      </section>

      {/* Promotional banner */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--deep-purple)] px-8 py-14 text-white md:px-16 md:py-20">
          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b6c9a9]">
              Special collection
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              Good finds.
              <br />
              Better living.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-300">
              Explore our collection and find something that fits your
              lifestyle.
            </p>
            <a
              href="#products"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--champagne-gold)] text-white px-7 py-4 text-sm font-bold text-[#263b2d] transition hover:border hover:border-[var(--champagne-gold)] hover:bg-[var(--deep-purple)]"
            >
              Shop Collection <ArrowRight size={17} />
            </a>
          </div>

          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border-[50px] border-white/5" />
          <div className="absolute -bottom-48 right-20 h-96 w-96 rounded-full bg-[#78956f]/20 blur-3xl" />
        </div>
      </section>
    </div>
  );
}
