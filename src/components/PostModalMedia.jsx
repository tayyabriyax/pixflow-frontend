import React from 'react';
import { IMAGE_URL } from '../store/constants';

const PostModalMedia = ({ url }) => {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <img
                src={`${IMAGE_URL}${url}`}
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