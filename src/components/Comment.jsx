import React from 'react'
import { IMAGE_URL } from '../store/constants'

const Comment = ({ profilePic, userName, content }) => {
    return (
        <div className="flex items-center mb-4">
            <img
                src={`${IMAGE_URL}${profilePic}`}
                alt="https://via.placeholder.com/40"
                className="w-6 h-6 rounded-full object-cover"
            />
            <div className="ml-3">
                <p className='text-gray-800'>
                    <span className="text-sm font-medium">{userName}</span>
                    <span className='text-xs'>{" " + content}</span>
                </p>
                <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
        </div>
    )
}

export default Comment