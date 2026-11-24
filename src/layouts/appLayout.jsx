import React from 'react'
import Header from '../components/layout/header'
import Sidebar from '../components/layout/sidebar'
import { MdCategory, MdHome, MdPerson, MdShoppingCart } from 'react-icons/md'

export default function AppLayout({ children, search, products, setSearch, cartCount, addToCart, menuOpen, setMenuOpen }) {
    const links = [
        {
            title: "Home",
            link: "/",
            icon: <MdHome />
        },
        {
            title: "Categories",
            link: "/categories",
            icon: <MdCategory />
        },
        {
            title: "Cart",
            link: "/cart",
            icon: <MdShoppingCart />
        },
        {
            title: "Profile",
            link: "/profile",
            icon: <MdPerson />
        },
    ]
    return (
        <div className='w-full'>
            <Header products={products} search={search} setSearch={setSearch} addToCart={addToCart} cartCount={cartCount} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className=''>
                {/* <Sidebar links={links} /> */}
                {children}
            </div>
        </div>
    )
}
