import React from 'react'

const AddComment = () => {
    return (
        <div className="mt-4">
            <form className="flex items-center space-x-2">
                <input
                    type="text"
                    placeholder="Add a comment..."
                    className="flex-grow p-2 text-sm border border-gray-300 rounded-lg 
                            focus:outline-none focus:ring focus:ring-blue-200"
                />
                <button
                    type="submit"
                    className="text-blue-500 hover:underline focus:outline-none"
                >
                    Post
                </button>
            </form>
        </div>
    )
}

export default AddComment