import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../components";

const Create = ({ onClose, onSubmit }) => {
    const [postData, setPostData] = useState({
        file: null,
        caption: "",
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPostData({ ...postData, file: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCaptionChange = (e) => {
        setPostData({ ...postData, caption: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!postData.file) {
            alert("Please upload a media file.");
            return;
        }
        onSubmit(postData);
        setPostData({ file: null, caption: "" });
        onClose();
    };

    return (
        <Link to={"/create"} className="min-h-screen bg-white">
            <div
                className="flex items-center justify-center min-h-screen cursor-auto">

                <div className="bg-white w-[90%] max-w-lg rounded-lg border overflow-hidden">

                    <div className="flex justify-between items-center px-4 py-3 border-b">
                        <h2 className="text-lg font-semibold">Create Post</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="p-4 space-y-4">

                        <div className="flex flex-col items-center space-y-3">
                            {postData.file ? (
                                <img
                                    src={postData.file}
                                    alt="Preview"
                                    className="w-64 h-64 object-cover rounded-lg border"
                                />
                            ) : (
                                <label className="w-full flex flex-col items-center justify-center px-6 py-16 border-2 
                                            border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
                                    <FiUpload size={30} className="text-gray-500" />
                                    <span className="text-gray-500 text-sm">Upload a file</span>
                                    <input
                                        type="file"
                                        accept="image/*,video/*"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                </label>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Caption</label>
                            <textarea
                                value={postData.caption}
                                onChange={handleCaptionChange}
                                rows={3}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg 
                                    focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Write a caption..."
                            ></textarea>
                        </div>

                        <PrimaryButton
                            label={"Post"} />
                    </form>
                </div>
            </div>
        </Link>
    )
}

export default Create