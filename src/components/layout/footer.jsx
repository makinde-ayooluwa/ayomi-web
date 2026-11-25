import React from 'react'

export default function Footer() {
    return (
        <footer id="about" className="bg-[var(--deep-purple)] text-white">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">

                <div>
                    {/* <h2 className="text-2xl font-black">
                        Mide<span className="text-[#91ad85]">Vault.</span>
                    </h2> */}
                    <img src="/logo.png" alt="" />
                    <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
                        Your everyday shopping destination. Discover quality products
                        and enjoy a better shopping experience.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold">Quick Links</h3>
                    <div className="mt-5 flex flex-col gap-3 text-sm text-gray-400">
                        <a href="/" className="hover:text-white">Home</a>
                        <a href="/categories" className="hover:text-white">Categories</a>
                        <a href="/products" className="hover:text-white">Shop</a>
                        {/* <a href="#about" className="hover:text-white">About Us</a> */}
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
                        <button className="rounded-full bg-[var(--deep-purple)] px-4 py-3 text-xs font-bold text-white">
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
    )
}
