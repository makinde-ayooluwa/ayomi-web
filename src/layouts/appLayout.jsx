import React from 'react'
import Header from '../components/layout/header'
import Sidebar from '../components/layout/sidebar'
import { MdCategory, MdHome, MdPerson, MdShoppingCart } from 'react-icons/md'

export default function AppLayout({ children }) {
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
            {/* <Header /> */}
            <div className='grid grid-cols-[auto_5fr]'>
                {/* <Sidebar links={links} /> */}
                {children}
            </div>
        </div>
    )
}
