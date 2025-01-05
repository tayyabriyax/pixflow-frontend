import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const SidebarLink = ({ label, pathname, icon }) => {
    
    const location = useLocation();
    const hoverClass = 'hover:bg-purple-300';
    const activeClass = 'bg-purple-500 text-white';

    return (
        <Link
            to={pathname}
            className={`flex items-center p-3 ${location.pathname === pathname ? activeClass : hoverClass}`}
        >
            {icon}
            {label}
        </Link>
    )
}

export default SidebarLink