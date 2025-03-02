import React from 'react'
import { IMAGE_URL } from '../store/constants'

const PostMedia = ({url}) => {
    return (
        <img
            src={`${IMAGE_URL}${url}`}
            sizes="(max-width: 640px) 640px, 
                (max-width: 1024px) 1024px, 
                1600px"
            alt="https://via.placeholder.com/600x400"
            className="w-full rounded-lg max-h-[32rem] object-cover"
        />
    )
}

export default PostMedia