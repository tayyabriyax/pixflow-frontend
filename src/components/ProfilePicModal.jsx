import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import SaveButton from './SaveButton';
import CancelButton from './CancelButton';
import { useDispatch } from 'react-redux';
import { updateProfilePicAsync } from '../store/userSlice';

const ProfilePicModal = ({ onClose }) => {
    const [profilePic, setProfilePic] = useState(null);
    const [profilePicSrc, setProfilePicSrc] = useState(null);

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(e.target.files[0]);
                setProfilePicSrc(reader.result)
            };
            reader.readAsDataURL(file);
        }
    };

    const dispatch = useDispatch();

    const handleSave = () => {
        if (profilePic) {
            dispatch(updateProfilePicAsync(profilePic));
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-5"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="bg-white w-[90%] max-w-md rounded-lg shadow-lg p-6 space-y-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Change Profile Picture</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-black"
                    >
                        <AiOutlineClose size={20} />
                    </button>
                </div>
                <div className="space-y-4">
                    {profilePicSrc ? (
                        <div className='w-full flex justify-center'>
                            <img
                                src={profilePicSrc}
                                alt="Preview"
                                className="w-40 h-40 object-cover rounded-lg border"
                            />
                        </div>
                    ) : (
                        <label className="block">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleProfilePicChange}
                                className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md
                                 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-purple-700 
                                 hover:file:bg-purple-100"
                            />
                        </label>)}
                    <div className="flex justify-end space-x-2">
                        <CancelButton
                            onClick={onClose} />

                        <SaveButton
                            onClick={handleSave} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePicModal;
