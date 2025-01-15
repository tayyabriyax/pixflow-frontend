import React from 'react';

const PostModalMedia = ({ url }) => {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <img
                src={`http://localhost:8080${url}`}
                sizes="(max-width: 640px) 640px, 
                    (max-width: 1024px) 1024px, 
                    1600px"
                alt="https://via.placeholder.com/600x400"
                className="w-full max-h-full object-cover"
            />
        </div>
    );
};

export default PostModalMedia;