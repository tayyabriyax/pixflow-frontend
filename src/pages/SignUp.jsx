import React, { useState } from 'react';
import {
    InputField,
    PasswordField,
    PrimaryButton
} from '../components';
import { Link, useNavigate } from 'react-router-dom';
import { signupAsync } from '../store/authSlice';
import { useDispatch } from 'react-redux';

const SignUp = () => {

    const [signupCredentials, setSignupCredentials] = useState({ userName: "", email: "", password: "" });
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleChangeCredentials = (e) => {
        setSignupCredentials({
            ...signupCredentials,
            [e.target.name]: e.target.value
        });
    };

    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signup = async (e) => {
        e.preventDefault();
        if (signupCredentials.password === confirmPassword) {
            dispatch(signupAsync(signupCredentials));
            setSignupCredentials({
                ...signupCredentials,
                userName: "",
                email: "",
                password: ""
            });
            setConfirmPassword("");
            setPasswordError("");
            navigate("/");
        } else {
            setPasswordError("Password fields must be same !");
        }
    };

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
                        value={signupCredentials.userName}
                        onChange={handleChangeCredentials}
                        placeholder={"Enter your username"} />

                    <InputField
                        label={"Email"}
                        name={"email"}
                        type={"email"}
                        value={signupCredentials.email}
                        onChange={handleChangeCredentials}
                        placeholder={"Enter your email"} />

                    <PasswordField
                        name={"password"}
                        label={"Password"}
                        value={signupCredentials.password}
                        onChange={handleChangeCredentials}
                        placeholder={"Enter your password"} />

                    <PasswordField
                        id={"confirmPassword"}
                        label={"Confirm Password"}
                        value={confirmPassword}
                        onChange={handleChangeConfirmPassword}
                        placeholder={"Confirm your password"} />

                    <span className='text-red-500 text-xs'>{passwordError}</span>

                    <PrimaryButton
                        label={"Sign Up"}
                        onClick={signup} />

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
