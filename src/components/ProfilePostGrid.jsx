import React from 'react';
import { IMAGE_URL } from '../store/constants';

const ProfilePostGrid = ({ posts }) => {
    return (
        <div className="flex justify-center gap-4 flex-wrap cursor-auto">
            {posts.map((post, index) => (
                <div key={index} className="aspect-square bg-gray-200 cursor-pointer h-48 w-48">
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
