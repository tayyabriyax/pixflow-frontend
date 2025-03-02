import React from 'react'
import { IMAGE_URL } from '../store/constants'

const PostCaption = ({ profilePic, userName, caption }) => {
    return (
        <div className="flex items-center mb-4">
            <img
                src={`${IMAGE_URL}${profilePic}`}
                alt="https://via.placeholder.com/40"
                className="w-10 h-10 rounded-full object-cover"
            />
            <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-800">{userName}</h4>
                <p className="text-xs text-gray-500">{caption}</p>
            </div>
        </div>
    )
}

export default PostCaption