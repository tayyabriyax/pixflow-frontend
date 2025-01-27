import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import InputField from './InputField';
import ProfilePicModal from './ProfilePicModal';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-5"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="bg-white w-[90%] max-w-lg rounded-lg overflow-hidden border">

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
                                shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            placeholder="Tell something about yourself..."
                        ></textarea>
                    </div>

                    <div className="flex justify-end space-x-2">
                        <button
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            className="px-4 py-2 bg-purple-500 text-white font-semibold rounded hover:bg-purple-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>

            {isProfilePicModalOpen &&
                <ProfilePicModal
                    onClose={() => setIsProfilePicModalOpen(false)} />}
        </div>
    );
};

export default EditProfileModal;
