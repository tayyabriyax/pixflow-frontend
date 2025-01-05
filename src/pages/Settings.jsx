import React from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
    return (
        <Link to={"/settings"} className="flex items-center justify-center min-h-screen bg-white">
                <h1 className="text-2xl font-bold text-center text-gray-800">
                    This feature is currently unavailable
                </h1>
        </Link>
    );
};

export default Settings;