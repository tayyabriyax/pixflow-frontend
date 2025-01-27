import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import InputField from './InputField';

const EditProfileModal = ({ userData, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        username: userData.userName || '',
        email: userData.email || '',
        about: userData.about || '',
        profilePic: userData.profilePic || '',
    });

    const [isProfilePicModalOpen, setIsProfilePicModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, profilePic: reader.result });
                setIsProfilePicModalOpen(false);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="bg-white w-[90%] max-w-lg rounded-lg overflow-hidden shadow-lg">

                <div className="flex justify-between items-center px-4 py-3 border-b">
                    <h2 className="text-lg font-semibold">Edit Profile</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-black">
                        <AiOutlineClose size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-4 space-y-4">

                    <div className="flex flex-col items-center space-y-2">
                        <div
                            className="w-24 h-24 rounded-full overflow-hidden border border-gray-300 cursor-pointer"
                            onClick={() => setIsProfilePicModalOpen(true)}
                        >
                            <img
                                src={`http://localhost:8080${formData.profilePic}`}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-sm text-blue-500 cursor-pointer">
                            Change Profile Picture
                        </p>
                    </div>

                    <InputField
                        label={"Username"}
                        name={"username"}
                        type={"text"}
                        value={formData.username}
                        onChange={handleChange}
                        placeholder={"Enter your username"} />

                    <InputField
                        label={"Email"}
                        name={"email"}
                        type={"text"}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={"Enter your email"} />

                    <div>
                        <label className="block text-sm font-medium text-gray-700">About</label>
                        <textarea
                            name="about"
                            value={formData.about}
                            onChange={handleChange}
                            rows={3}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg 
                                shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Tell something about yourself..."
                        ></textarea>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>

            {isProfilePicModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={(e) => e.target === e.currentTarget && setIsProfilePicModalOpen(false)}
                >
                    <div className="bg-white w-[90%] max-w-md rounded-lg shadow-lg p-6 space-y-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold">Change Profile Picture</h2>
                            <button
                                onClick={() => setIsProfilePicModalOpen(false)}
                                className="text-gray-600 hover:text-black"
                            >
                                <AiOutlineClose size={20} />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleProfilePicChange}
                                className="block w-full text-sm text-gray-700"
                            />
                            <button
                                onClick={() => setIsProfilePicModalOpen(false)}
                                className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditProfileModal;
