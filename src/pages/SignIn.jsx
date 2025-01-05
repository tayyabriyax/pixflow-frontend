import React from 'react';
import {
    InputField,
    PasswordField,
    PrimaryButton
} from '../components';
import { Link } from 'react-router-dom';

const SignIn = () => {

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 
                via-purple-100 to-pink-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Sign In</h2>

                <form>
                    <InputField
                        label={"Username"}
                        name={"userName"}
                        type={"text"}
                        placeholder={"Enter your username"} />

                    <PasswordField
                        label={"Password"}
                        placeholder={"Enter your password"} />

                    <div className="mb-4 flex items-center justify-between">
                        <label className="flex items-center text-sm text-gray-700">
                            <input type="checkbox" className="mr-2" /> Remember me
                        </label>
                        <a href="#" className="text-sm text-purple-500 hover:underline">Forgot Password?</a>
                    </div>

                    <PrimaryButton
                        label={"Sign In"} />

                    <div className="mt-4 text-center text-sm text-gray-600">
                        Don&apos;t have an account? <Link to={"/signup"}
                            className="text-purple-500 hover:underline">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;