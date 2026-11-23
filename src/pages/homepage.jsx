
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

const categories = [
  { name: "All Products", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500" },
  { name: "Fashion", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500" },
  { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500" },
  { name: "Accessories", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
  { name: "Lifestyle", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=500" }
];

const products = [
  {
    id: 1,
    name: "Classic Minimalist Watch",
    category: "Accessories",
    price: 45000,
    oldPrice: 58000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Premium Everyday Sneakers",
    category: "Fashion",
    price: 38500,
    oldPrice: 45000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700",
    tag: "Popular"
  },
  {
    id: 3,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 62000,
    oldPrice: null,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
    tag: "New Arrival"
  },
  {
    id: 4,
    name: "Modern Leather Handbag",
    category: "Fashion",
    price: 52000,
    oldPrice: 65000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700",
    tag: "Limited Offer"
  }
];

const formatPrice = (price) =>
  `₦${price.toLocaleString("en-NG")}`;

export default function Homepage() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All Products" ||
      product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#20251f]">

      {/* Announcement */}
      <div className="bg-[#263b2d] px-4 py-2.5 text-center text-xs font-medium tracking-wide text-white">
        FREE DELIVERY ON ORDERS ABOVE ₦100,000
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">

          <a href="#" className="text-2xl font-black tracking-tight">
            Mide<span className="text-[#78956f]">Vault.</span>
          </a>

          <nav className="hidden items-center gap-9 text-sm font-medium text-gray-600 md:flex">
            <a href="#" className="text-[#263b2d]">Home</a>
            <a href="#categories" className="hover:text-[#78956f]">Categories</a>
            <a href="#products" className="hover:text-[#78956f]">Shop</a>
            <a href="#about" className="hover:text-[#78956f]">About Us</a>
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <div className="flex items-center rounded-full bg-gray-100 px-4 py-2.5">
              <Search size={17} className="text-gray-500" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-36 bg-transparent pl-2 text-sm outline-none"
              />
            </div>

            <button className="relative">
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#78956f] text-xs text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button className="relative">
              <ShoppingBag size={21} />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#78956f] text-xs text-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-gray-100 bg-white px-6 py-5 md:hidden">
            <nav className="flex flex-col gap-5 text-sm font-medium">
              <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#categories" onClick={() => setMenuOpen(false)}>Categories</a>
              <a href="#products" onClick={() => setMenuOpen(false)}>Shop</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20 lg:px-8">

        <div className="max-w-xl">
          <span className="mb-6 inline-flex rounded-full bg-[#e9eee6] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#526d4b]">
            Your everyday shopping destination
          </span>

          <h1 className="text-5xl font-bold leading-[1.12] tracking-tight md:text-6xl lg:text-7xl">
            Find your
            <span className="block text-[#78956f]">everyday</span>
            essentials.
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-gray-500">
            Discover thoughtfully selected products that make everyday
            living better. Quality finds, great value, all in one place.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-3 rounded-full bg-[#263b2d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#3c5742]"
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
              <p className="text-xs font-semibold uppercase tracking-widest text-[#78956f]">
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
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf1e9] text-[#526d4b]">
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#78956f]">
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
                setSelectedCategory(category.name);
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
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#78956f]">
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
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                    selectedCategory === category.name
                      ? "bg-[#263b2d] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-[#f3f3f0]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                  />

                  <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold">
                    {product.tag}
                  </span>

                  <button
                    aria-label="Add to wishlist"
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white"
                  >
                    <Heart size={17} />
                  </button>

                  <button
                    onClick={() => setCartCount((count) => count + 1)}
                    className="absolute bottom-3 left-3 right-3 rounded-full bg-[#263b2d] py-3 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100"
                  >
                    Add to Cart
                  </button>
                </div>

                <div className="pt-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] text-gray-400">{product.category}</span>
                    <span className="flex items-center gap-1 text-xs">
                      <Star size={12} className="fill-yellow-400 text-yellow-400" />
                      {product.rating}
                    </span>
                  </div>

                  <h3 className="mt-2 text-sm font-semibold">{product.name}</h3>

                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold">{formatPrice(product.price)}</span>
                    {product.oldPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {formatPrice(product.oldPrice)}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setCartCount((count) => count + 1)}
                    className="mt-4 w-full rounded-full border border-gray-200 py-2.5 text-xs font-semibold transition hover:border-[#263b2d] hover:bg-[#263b2d] hover:text-white sm:hidden"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
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
        <div className="relative overflow-hidden rounded-[2rem] bg-[#263b2d] px-8 py-14 text-white md:px-16 md:py-20">
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
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#263b2d] transition hover:bg-[#e9eee6]"
            >
              Shop Collection <ArrowRight size={17} />
            </a>
          </div>

          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border-[50px] border-white/5" />
          <div className="absolute -bottom-48 right-20 h-96 w-96 rounded-full bg-[#78956f]/20 blur-3xl" />
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-[#18251c] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">

          <div>
            <h2 className="text-2xl font-black">
              Mide<span className="text-[#91ad85]">Vault.</span>
            </h2>
            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
              Your everyday shopping destination. Discover quality products
              and enjoy a better shopping experience.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Quick Links</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Home</a>
              <a href="#categories" className="hover:text-white">Categories</a>
              <a href="#products" className="hover:text-white">Shop</a>
              <a href="#about" className="hover:text-white">About Us</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Customer Service</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Contact Us</a>
              <a href="#" className="hover:text-white">Shipping Information</a>
              <a href="#" className="hover:text-white">Returns & Refunds</a>
              <a href="#" className="hover:text-white">FAQs</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Stay in the loop</h3>
            <p className="mt-4 text-sm leading-6 text-gray-400">
              Get updates on new arrivals and special offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex overflow-hidden rounded-full bg-white p-1"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent px-4 text-xs text-gray-800 outline-none"
              />
              <button className="rounded-full bg-[#78956f] px-4 py-3 text-xs font-bold text-white">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-6 text-xs text-gray-500 sm:flex-row lg:px-8">
            <p>© {new Date().getFullYear()} Mide Vault. All rights reserved.</p>
            <p>Designed for better everyday shopping.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
