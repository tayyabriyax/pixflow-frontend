import React from 'react';

const ProfilePostGrid = ({ posts }) => {
    return (
        <div className="grid grid-cols-3 gap-2">
            {posts.map((post, index) => (
                <div key={index} className="aspect-square bg-gray-200">
                    <img
                        src={post.url}
                        alt={`Post ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default ProfilePostGrid;
