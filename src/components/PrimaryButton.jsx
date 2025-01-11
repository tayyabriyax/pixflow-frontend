import React from 'react'

const PrimaryButton = ({ label, onClick }) => {
    return (
        <button
            type="submit"
            onClick={onClick}
            className="w-full px-4 py-2 text-sm font-medium text-white bg-purple-500 rounded-lg 
                hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
            {label}
        </button>
    )
}

export default PrimaryButton