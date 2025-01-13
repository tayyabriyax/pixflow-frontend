import React from 'react'

const Post = ({ children, id }) => {
    return (
        <div key={id} className="max-w-lg mx-auto bg-white border-b">
            <div className="p-4">
                {children}
            </div>
        </div>
    )
}

export default Post