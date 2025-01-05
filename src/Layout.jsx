import React from 'react'
import { useLocation } from 'react-router-dom';
import { Sidebar } from './components';

const Layout = ({ children }) => {
    
    const location = useLocation();
    const showSidebar = location.pathname !== '/' && location.pathname !== '/signup';

    return (
        <div className="flex">
            {showSidebar && <Sidebar theme="light" />}
            <div className={`flex-grow ${showSidebar ? 'ml-64' : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Layout