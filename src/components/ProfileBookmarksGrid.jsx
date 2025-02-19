import React from 'react';

const ProfileBookmarksGrid = ({ posts }) => {
    return (
        <div className="grid grid-cols-6 gap-2 cursor-auto">
            {posts.map((post, index) => (
                <div key={index} className="aspect-square bg-gray-200 cursor-pointer">
                    <img
                        src={`http://localhost:8080${post.post.url}`}
                        alt={`Post ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default ProfileBookmarksGrid;
