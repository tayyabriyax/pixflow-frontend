import React from 'react'

const InputField = ({label, name, type, placeholder, value, onChange}) => {
    return (
        <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                autoComplete="off"
                value={value}
                onChange={onChange}
                className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 
                    focus:ring-purple-400"
                placeholder={placeholder}
            />
        </div>
    )
}

export default InputField