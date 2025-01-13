import React from 'react'

const PostCaption = ({userName, caption}) => {
    return (
        <div className="mt-4">
            <p className="text-gray-700">
                <span className="font-medium">{userName}</span>
                {` ${caption}`}
            </p>
        </div>
    )
}

export default PostCaption