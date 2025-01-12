import React, { useEffect, useState } from 'react';
import {
    InputField,
    PasswordField,
    PrimaryButton
} from '../components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../store/authSlice';

const SignIn = () => {

    const [loginCredentials, setLoginCredentials] = useState({ userName: "", password: "" });

    const handleChangeCredentials = (e) => {
        setLoginCredentials({
            ...loginCredentials,
            [e.target.name]: e.target.value
        });
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        dispatch(loginAsync(loginCredentials));
        setLoginCredentials({
            ...loginCredentials,
            userName: "",
            password: ""
        });
    };

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const error = useSelector((state) => state.auth.error);

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/home");
        }
    }, [isAuthenticated])

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
                        value={loginCredentials.userName}
                        onChange={handleChangeCredentials}
                        placeholder={"Enter your username"} />

                    <PasswordField
                        name={"password"}
                        label={"Password"}
                        value={loginCredentials.password}
                        onChange={handleChangeCredentials}
                        placeholder={"Enter your password"} />

                    <span className='text-red-500 text-xs'>{error}</span>

                    <div className="mb-4 mt-2 flex items-center justify-between">
                        <label className="flex text-sm text-gray-700">
                            <input type="checkbox" className="mr-2" /> Remember me
                        </label>
                        <a href="#" className="text-sm text-purple-500 hover:underline">Forgot Password?</a>
                    </div>

                    <PrimaryButton
                        onClick={login}
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