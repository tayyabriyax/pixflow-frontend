import React from 'react';

const ProfileHeader = ({ user }) => {
    return (
        <div className="bg-white shadow-md p-6 flex items-center justify-center space-x-10 cursor-auto py-20">
            <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-300">
                <img
                    src={`http://localhost:8080${user.profilePic}`}
                    alt="https://via.placeholder.com/150"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-4">
                    <h2 className="text-2xl font-bold">{user.userName}</h2>
                    <button className="px-4 py-2 bg-gray-100 text-sm font-semibold rounded hover:bg-gray-200">
                        Edit profile
                    </button>
                </div>

                <div className="flex space-x-4 text-sm text-gray-600">
                    <span>
                        <strong className="text-black">{user.posts ? user.posts.length : 0}</strong> posts
                    </span>
                    <span>
                        <strong className="text-black">0</strong> followers
                    </span>
                    <span>
                        <strong className="text-black">6</strong> following
                    </span>
                </div>

                <div className="text-sm font-medium text-gray-800">{user.email}</div>
            </div>
        </div>
    );
};

export default ProfileHeader;
