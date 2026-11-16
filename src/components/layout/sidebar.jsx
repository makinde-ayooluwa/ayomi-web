import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Sidebar({ links }) {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div
            onMouseOver={
                () => setCollapsed(true)
            }
            onMouseOut={
                () => setCollapsed(false)
            }
            className={
                `sidebar ${collapsed && "collapsed"}`
            }
        >
            {/* <div className='text-[var(--champagne-gold)]'>
                <h1>MAIN MENU</h1>
            </div> */}
            <div className={`grid gap-3 justify-${collapsed ? "center" : "start"}`}>
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={link.link}
                        style={{
                            transition: "all 0.3s ease"
                        }}
                        className={`group flex items-center gap-3 p-4 my-2 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-black ${collapsed ? "justify-start w-[250px]" : "justify-center w-fit"} sidebar-link`}
                    >
                        <span className="text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110">
                            {link.icon}
                        </span>

                        <span
                            className={` whitespace-nowrap overflow-hidden transition-all duration-300 ${collapsed ? "opacity-100 max-w-40" : "opacity-0 max-w-0"} `}
                        >
                            {collapsed && link.title}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}
