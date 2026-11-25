import React, { useEffect, useState } from 'react'
import { RiDropdownList } from 'react-icons/ri';
import { RxDropdownMenu } from 'react-icons/rx';
import ProductCard from '../components/interface/productCard';

export default function Products({ categories, products, addToCart }) {
    const [filteredProducts, setFilteredProduct] = useState([]);
    const [filter, setFilter] = useState({
        category: ["all"],
        name: "ASCENDING"
    })
    useEffect(() => {
        function filterProducts() {
            const {category, name} = Object.keys(filter);
            // const filteration = [11,2,22,1].sort((a, b) => a - b)
            // console.log(filteration)
        }
        filterProducts();
    }, [])
    const filteration = ["A","B","D","C"].sort((a, b) => a - b)
            console.log(filteration)
    return (
        <div className='w-full'>
            <div className='m-3'>
                <div className="grid">
                    <h1 className='text-[var(--deep-purple)] font-bold text-[15px] tracking-wider'>
                        EXPLORE THE PRODUCTS
                    </h1>
                </div>
                <div className='grid lg:grid-cols-[1.5fr_5fr] grid-cols-1 mt-5 items-center justify-between'>
                    {/* FILTER */}
                    <div className='sticky top-0'>
                        <aside className='bg-white shadow rounded-[15px] sticky top-24 self-start h-fit z-50'>
                            <div className='p-2 border-b'>
                                <h1 className='font-bold'>Filter by</h1>
                            </div>
                            <div className='p-3'>
                                <details>
                                    <summary className='flex items-center justify-between cursor-pointer list-none [&::-webkit-details-marker]:hidden'>
                                        <h1 className='font-bold'>Category</h1>
                                        <span className='transition-transform group-open:rotate-180'>
                                            <RxDropdownMenu />
                                        </span>
                                    </summary>
                                    {categories.map((category, index) => (
                                        <div key={index} className='flex justify-start gap-4 p-2'>
                                            <input type="checkbox" name="" id="" />
                                            {category.name}
                                        </div>
                                    ))}
                                </details>
                            </div>
                        </aside>
                    </div>
                    <div className='w-full'>
                        <div className="grid grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                            {filteredProducts.map((filtered, index) => (
                                <ProductCard product={filtered} key={index} addToCart={addToCart} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
