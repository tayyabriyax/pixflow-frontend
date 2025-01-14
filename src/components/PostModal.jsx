import React from 'react'
import PostModalMedia from './PostModalMedia'
import PostModalComment from './PostModalComment'

const PostModal = ({ post, onClose }) => {

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div onClick={handleOverlayClick}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-5">
            <div className="bg-white flex flex-row w-[90%] max-w-4xl h-[80vh] rounded-lg overflow-hidden border">

                <div className="w-1/2 bg-gray-900">
                    <PostModalMedia url={post.url} />
                </div>

                <div className="w-1/2 p-4 flex flex-col">
                    <PostModalComment post={post} />
                </div>
            </div>
        </div>
    )
}

export default PostModal