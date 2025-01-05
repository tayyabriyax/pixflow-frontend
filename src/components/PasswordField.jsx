import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordField = ({ label, placeholder, id }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="mb-4 relative">
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
            <div className="relative">
                <input
                    type={passwordVisible ? 'text' : 'password'}
                    id={id}
                    autoComplete="off"
                    className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 
                        focus:ring-purple-400"
                    placeholder={placeholder}
                />
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>
        </div>
    )
}

export default PasswordField