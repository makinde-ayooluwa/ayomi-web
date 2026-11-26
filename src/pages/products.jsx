import React, { useEffect, useState } from 'react'
import { RiDropdownList } from 'react-icons/ri';
import { RxDropdownMenu } from 'react-icons/rx';
import ProductCard from '../components/interface/productCard';

export default function Products({ categories, products, addToCart }) {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filter, setFilter] = useState("all")
    useEffect(() => {
        function filterProducts() {
            const filteration = filter == "all" ? [...products] : [...products].filter((x) => {
                return x.category == filter;
            });
            setFilteredProducts([...filteration])
        }
        filterProducts();
    }, [filter])
    console.log(filteredProducts)
    return (
        <div className='w-full'>
            <div className='m-3'>
                <div className="grid">
                    <h1 className='text-[var(--deep-purple)] font-bold text-[15px] tracking-wider'>
                        EXPLORE THE PRODUCTS
                    </h1>
                </div>
                <div className='grid lg:grid-cols-[1.5fr_5fr] grid-cols-1 mt-5 gap-3 justify-between'>
                    {/* FILTER */}
                    <div className='sticky top-30 z-50'>
                        <aside className='bg-white shadow rounded-[15px] sticky top-30 self-start h-fit z-50'>
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
                                            <input type="radio" onInput={()=>setFilter(category.slug)} name="category-select" id="" />
                                            {category.name}
                                        </div>
                                    ))}
                                </details>
                            </div>
                        </aside>
                    </div>
                    <div className='w-full'>
                        <div className="grid gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2">
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
