import React from 'react';
import { FaRegHeart, FaRegComment, FaRegShareSquare, FaRegBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Link to={"/home"} className="flex min-h-screen bg-white">
            {/* Main Content */}
            <div className="flex-grow p-4">
                <div className="max-w-lg mx-auto bg-white border-b">
                    <div className="p-4">
                        {/* User Info */}
                        <div className="flex items-center mb-4">
                            <img
                                src="https://via.placeholder.com/40"
                                alt="User"
                                className="w-10 h-10 rounded-full"
                            />
                            <div className="ml-3">
                                <h4 className="text-sm font-medium text-gray-800">John Doe</h4>
                                <p className="text-xs text-gray-500">2 hours ago</p>
                            </div>
                        </div>

                        {/* Post Image */}
                        <img
                            src="https://via.placeholder.com/600x400"
                            alt="Post"
                            className="w-full rounded-lg"
                        />

                        {/* Post Actions */}
                        <div className="flex justify-between items-center mt-4">
                            <div className="flex space-x-4">
                                <button className="flex items-center text-gray-600 hover:text-red-500">
                                    <FaRegHeart className="mr-1" size={20} />
                                </button>
                                <button className="flex items-center text-gray-600 hover:text-blue-500">
                                    <FaRegComment className="mr-1" size={20} />
                                </button>
                                <button className="flex items-center text-gray-600 hover:text-green-500">
                                    <FaRegShareSquare className="mr-1" size={20} />
                                </button>
                            </div>
                            <button className="flex items-center text-gray-600 hover:text-yellow-500">
                                <FaRegBookmark size={20} />
                            </button>
                        </div>

                        {/* Post Caption */}
                        <div className="mt-4">
                            <p className="text-gray-700">
                                <span className="font-medium">John Doe</span> Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis.
                            </p>
                        </div>

                        {/* Write Comment Section */}
                        <div className="mt-4">
                            <form className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    placeholder="Add a comment..."
                                    className="flex-grow p-2 text-sm border border-gray-300 rounded-lg 
                                        focus:outline-none focus:ring focus:ring-blue-200"
                                />
                                <button
                                    type="submit"
                                    className="text-blue-500 hover:underline focus:outline-none"
                                >
                                    Post
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side Placeholder */}
            <div className="hidden lg:block w-1/4 p-4">
                <h2 className="text-lg font-semibold text-gray-700">More Features</h2>
                <p className="text-sm text-gray-500">Placeholder for additional features...</p>
            </div>
        </Link>
    );
};

export default Home;