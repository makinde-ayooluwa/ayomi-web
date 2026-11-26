import { Menu, Search, ShoppingBag, ShoppingCart, X } from 'lucide-react'
import React, { useState } from 'react'
import { useProduct } from '../../providers/productProvider';
import { Link } from "react-router-dom"
export default function Header({ search, setSearch, cartCount, addToCart, menuOpen, setMenuOpen, products }) {
  return (
    <header className="sticky top-0 z-100 border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">

        {/* <a href="/" className="text-2xl font-black tracking-tight">
          Mide<span className="text-[#78956f]">Vault.</span>
        </a> */}
        <Link to={"/"}>
          <img src="/logo.png" alt="" width={100} />
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-medium text-gray-600 md:flex">
          <a href="/" className="text-[#263b2d]">Home</a>
          {/* <a href="/categories" className="hover:text-[#78956f]">Categories</a> */}
          <Link to="/products" className="hover:text-[#78956f]">Shop</Link>
          {/* <a href="/#about" className="hover:text-[#78956f]">About Us</a> */}
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

          <Link className="relative" to={"/cart"}>
            <ShoppingCart size={21} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#78956f] text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <Link to={"/cart"} className="relative">
            <ShoppingCart size={21} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#78956f] text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-5 text-sm font-medium">
            <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
            {/* <a href="/categories" onClick={() => setMenuOpen(false)}>Categories</a> */}
            <a href="/products" onClick={() => setMenuOpen(false)}>Shop</a>
            {/* <a href="/about" onClick={() => setMenuOpen(false)}>About Us</a> */}
          </nav>
        </div>
      )}
    </header>

  )
}
