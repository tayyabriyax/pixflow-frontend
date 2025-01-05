import React from 'react';
import {
    InputField,
    PasswordField,
    PrimaryButton
} from '../components';
import { Link } from 'react-router-dom';

const SignUp = () => {

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 
                via-purple-100 to-pink-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Sign Up</h2>

                <form>
                    <InputField
                        label={"Username"}
                        name={"userName"}
                        type={"text"}
                        placeholder={"Enter your username"} />

                    <InputField
                        label={"Email"}
                        name={"email"}
                        type={"email"}
                        placeholder={"Enter your email"} />

                    <PasswordField
                        id={"password"}
                        label={"Password"}
                        placeholder={"Enter your password"} />

                    <PasswordField
                        id={"confirmPassword"}
                        label={"Confirm Password"}
                        placeholder={"Confirm your password"} />

                    <PrimaryButton
                        label={"Sign Up"} />

                    <div className="mt-4 text-center text-sm text-gray-600">
                        Already have an account? <Link to={"/"}
                            className="text-purple-500 hover:underline">Sign In</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
