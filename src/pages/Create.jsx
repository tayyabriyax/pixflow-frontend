import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { PrimaryButton } from "../components";
import { useDispatch } from "react-redux";
import { createPostAsync } from "../store/postSlice";

const Create = () => {
    const [postMedia, setPostMedia] = useState(null);
    const [postMediaSrc, setPostMediaSrc] = useState(null);
    const [postCaption, setPostCaption] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPostMedia(e.target.files[0]);
                setPostMediaSrc(reader.result)
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCaptionChange = (e) => {
        setPostCaption(e.target.value);
    };

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!postMedia) {
            alert("Please upload a media file.");
            return;
        }
        dispatch(createPostAsync({ post: postMedia, caption: postCaption }));
        setPostCaption("");
        setPostMedia(null);
        setPostMediaSrc(null);
    };

    return (

        <div
            className="flex items-center justify-center min-h-screen cursor-auto">

            <div className="bg-white w-[90%] max-w-lg rounded-lg border overflow-hidden">

                <div className="flex justify-between items-center px-4 py-3 border-b">
                    <h2 className="text-lg font-semibold">Create Post</h2>
                </div>

                <form onSubmit={handleSubmit} className="p-4 space-y-4">

                    <div className="flex flex-col items-center space-y-3">
                        {postMediaSrc ? (
                            <img
                                src={postMediaSrc}
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
                            value={postCaption}
                            onChange={handleCaptionChange}
                            rows={3}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg 
                                    focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            placeholder="Write a caption..."
                        ></textarea>
                    </div>

                    <PrimaryButton
                        label={"Post"} />
                </form>
            </div>
        </div>

    )
}

export default Create