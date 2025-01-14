import React, { useState } from 'react'
import PostModal from './PostModal';

const AddComment = ({ post }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="mt-4">
            <button onClick={() => setShowModal(true)} className='mb-2 text-sm'>View all comments...</button>
            <form className="flex items-center space-x-2">
                <input
                    type="text"
                    placeholder="Add a comment..."
                    className="flex-grow p-2 text-sm border border-gray-300 rounded 
                            focus:outline-none focus:ring focus:ring-blue-200"
                />
                <button
                    type='submit'
                    className="ml-2 px-4 py-2 bg-white border hover:text-white text-sm rounded hover:bg-purple-600"
                >
                    Post
                </button>
            </form>
            {showModal &&
                <PostModal
                    post={post}
                    onClose={() => setShowModal(false)} />}
        </div>
    )
}

export default AddComment