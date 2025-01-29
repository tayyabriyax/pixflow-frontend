import React from 'react'

const SaveButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 bg-purple-500 text-white font-semibold rounded hover:bg-purple-600"
        >
            Save
        </button>
    )
}

export default SaveButton