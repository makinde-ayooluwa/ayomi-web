import React from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../providers/productProvider';
import { EvCharger, Haze, ShoppingCart, Star, StarIcon, Wallet } from 'lucide-react';
import { BsStar } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { GiBuyCard } from 'react-icons/gi';
import { FaNairaSign } from 'react-icons/fa6';
import { BiMoney } from 'react-icons/bi';
import { useCart } from '../providers/cartProvider';
import ProductCard from '../components/interface/productCard';

export default function ProductDetails({ addToCart }) {
    const { id } = useParams();
    const { getProductById, getRelatedProductByCategory } = useProduct();
    const product = getProductById(id);
    const relatedProducts = getRelatedProductByCategory(product.category);
    console.log(relatedProducts)
    return (
        <div className='w-full'>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start justify-between mt-10">
                <div className='w-full flex items-center justify-center'>
                    <img src={product.image ?? "/logo.jpg"} className='rounded-[0px] shadow-lg border-0' alt={product.name} width={600} />
                </div>
                <div className='mx-5'>
                    <div className="text-[20px] font-extrabold uppercase">
                        <h1>About this product</h1>
                    </div>
                    <div className='text-[40px] text-[var(--deep-purple)] my-2 font-extrabold'>
                        <h1>{product.name}</h1>
                    </div>
                    <div className='text-gray-500'>
                        <span className='uppercase font-bold'>
                            {product.category}
                        </span>
                    </div>
                    <div className='text-gray-600 mt-3'>
                        {product.description ?? "Lorem ipsum for testing,Lorem ipsum for testing,Lorem ipsum for testing,Lorem ipsum for testing,Lorem ipsum for testing,"}
                    </div>
                    <div className='p-3 text-start flex gap-1'>
                        <span>
                            <FaStar color='#cfcf00' size={20} />
                        </span>
                        <span>{product.rating} rating</span>
                    </div>
                    <div className='p-3 text-start flex gap-3'>
                        {/* <span>
                            <BiMoney size={20} />
                        </span> */}
                        <span className='text-2xl font-bold'>
                            NGN {product.price.toLocaleString()}
                        </span>
                    </div>
                    <div className='grid grid-cols-1 lg:flex gap-3 justify-between items-center my-4'>
                        <button className='p-4 bg-[var(--deep-purple)] text-white text-center w-full rounded-[10px] flex justify-center gap-2 font-bold' onClick={() => addToCart(product)}>
                            <span>
                                <ShoppingCart />
                            </span>
                            <span>Add to cart</span>
                        </button>
                        <button className='p-4 border border-[var(--deep-purple)] text-[var(--deep-purple)] text-center w-full rounded-[10px] flex justify-center gap-2 font-bold'>
                            <span>
                                <GiBuyCard />
                            </span>
                            <span>Buy now</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full my-10'>
                <div className='m-7'>
                    <div className='text-gray-600 font-bold'>
                        <h1>RELATED PRODUCTS</h1>
                    </div>
                    {relatedProducts.length < 2 && relatedProducts.find((x)=>x.id == product.id) &&
                        <div className='text-center w-full m-7 text-gray-600'>
                            No related products found
                        </div>
                    }
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-2'>
                        {relatedProducts.map((relProduct, index) => product.id !== relProduct.id && (
                            <ProductCard product={relProduct} key={index} addToCart={addToCart} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
