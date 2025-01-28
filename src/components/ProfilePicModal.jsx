import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const ProfilePicModal = ({ onClose, onSave }) => {
    const [previewImage, setPreviewImage] = useState(null);

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result); 
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        if (previewImage) {
            onSave(previewImage); 
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
                    <label className="block">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleProfilePicChange}
                            className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md
                                 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-purple-700 
                                 hover:file:bg-purple-100"
                        />
                    </label>
                    <div className="flex justify-end space-x-2">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-purple-500 text-white font-semibold rounded hover:bg-purple-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePicModal;
