import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { Sidebar } from './components';
import { useSelector } from 'react-redux';

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

const PrivateRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    return isAuthenticated ? children : <Navigate to="/" />;
};

export { Layout, PrivateRoute }