import { Heart, ShoppingCart, Star } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
const formatPrice = (price) =>
    `₦${price.toLocaleString("en-NG")}`;

export default function ProductCard({ product, addToCart }) {
    return (
        <div className="group">
            <div className="relative overflow-hidden rounded-2xl bg-[#f3f3f0]">
                <Link to={`/products/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                    />
                </Link>

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
                    onClick={() => addToCart(product)}
                    className="absolute bottom-3 left-3 right-3 rounded-full bg-[var(--deep-purple)] py-3 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100"
                >
                    Add to Cart
                </button>
            </div>

            <div className="pt-4">
                <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] text-gray-400 uppercase">{product.category}</span>
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
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full rounded-full border border-gray-200 py-2.5 text-xs font-semibold transition hover:border-[#263b2d] bg-[var(--deep-purple)] hover:bg-[var(--champagne-gold)] flex justify-center items-center gap-3 hover:text-white text-white sm:hidden"
                >
                    <ShoppingCart size={15} />
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    )
}
