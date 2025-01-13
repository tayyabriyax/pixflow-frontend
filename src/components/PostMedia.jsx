import React from 'react'

const PostMedia = ({url}) => {
    return (
        <img
            src={`http://localhost:8080${url}`}
            srcSet={`
                http://localhost:8080${url}?w=640 640w,
                http://localhost:8080${url}?w=1024 1024w,
                http://localhost:8080${url}?w=1600 1600w
                `}
            sizes="(max-width: 640px) 640px, 
                (max-width: 1024px) 1024px, 
                1600px"
            alt="https://via.placeholder.com/600x400"
            className="w-full rounded-lg max-h-[32rem] object-cover"
        />
    )
}

export default PostMedia