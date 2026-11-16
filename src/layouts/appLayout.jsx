import React from 'react'
import Header from '../components/layout/header'
import Sidebar from '../components/layout/sidebar'
import { MdCategory, MdHome } from 'react-icons/md'

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
        }
    ]
    return (
        <div className='w-full'>
            <Header />
            <div className='grid grid-cols-[auto_5fr]'>
                <Sidebar links={links} />
                {children}
            </div>
        </div>
    )
}
