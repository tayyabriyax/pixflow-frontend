import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <Link to={"/profile"} className="flex items-center justify-center min-h-screen bg-white">
                <h1 className="text-2xl font-bold text-center text-gray-800">
                    This feature is currently unavailable
                </h1>
        </Link>
    );
};

export default Profile;