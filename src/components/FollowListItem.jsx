import React from 'react';
import { IMAGE_URL } from '../store/constants';

const FollowListItem = ({ user }) => {
    return (
        <div className="flex items-center px-4 py-2 hover:bg-gray-100">

            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                <img
                    src={`${IMAGE_URL}${user.profilePic}`}
                    alt={user.username}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="ml-4">
                <h4 className="font-semibold text-sm">{user.userName}</h4>
                <p className="text-xs text-gray-500">{user.email}</p>
            </div>
        </div>
    );
};

export default FollowListItem;
