import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignIn = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 
                via-purple-100 to-pink-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Sign In</h2>

                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            autoComplete="off"
                            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 
                                focus:ring-purple-400"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                        <div className="relative">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id="password"
                                autoComplete="off"
                                className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 
                                    focus:ring-purple-400"
                                placeholder="Enter your password"
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

                    <div className="mb-4 flex items-center justify-between">
                        <label className="flex items-center text-sm text-gray-700">
                            <input type="checkbox" className="mr-2" /> Remember me
                        </label>
                        <a href="#" className="text-sm text-purple-500 hover:underline">Forgot Password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-sm font-medium text-white bg-purple-500 rounded-lg 
                            hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    >
                        Login
                    </button>

                    <div className="mt-4 text-center text-sm text-gray-600">
                        Don&apos;t have an account? <a href="#" className="text-purple-500 hover:underline">Sign Up</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;