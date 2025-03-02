import React from 'react';
import { IMAGE_URL } from '../store/constants';

const ProfilePostGrid = ({ posts }) => {
    return (
        <div className="grid grid-cols-6 gap-2 cursor-auto">
            {posts.map((post, index) => (
                <div key={index} className="aspect-square bg-gray-200 cursor-pointer">
                    <img
                        src={`${IMAGE_URL}${post.url}`}
                        alt={`Post ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default ProfilePostGrid;
