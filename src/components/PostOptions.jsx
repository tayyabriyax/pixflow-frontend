import React from 'react'
import { FaRegHeart, FaRegComment, FaRegShareSquare, FaRegBookmark } from 'react-icons/fa';

const PostOptions = () => {
    return (
        <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-4">
                <button className="flex items-center text-gray-600 hover:text-red-500">
                    <FaRegHeart className="mr-1" size={20} />
                </button>
                <button className="flex items-center text-gray-600 hover:text-blue-500">
                    <FaRegComment className="mr-1" size={20} />
                </button>
                <button className="flex items-center text-gray-600 hover:text-green-500">
                    <FaRegShareSquare className="mr-1" size={20} />
                </button>
            </div>
            <button className="flex items-center text-gray-600 hover:text-yellow-500">
                <FaRegBookmark size={20} />
            </button>
        </div>
    )
}

export default PostOptions