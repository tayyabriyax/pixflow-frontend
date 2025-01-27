import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFollowersAsync, getFollowingAsync } from '../store/followSlice';
import FollowListModal from './FollowListModal';
import EditProfileModal from './EditProfileModal';

const ProfileHeader = ({ user }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalData, setModalData] = useState([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const followers = useSelector((state) => state.follow.followers);
    const following = useSelector((state) => state.follow.following);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFollowersAsync());
        dispatch(getFollowingAsync());
    }, []);

    const handleOpenModal = (title, data) => {
        setModalTitle(title);
        setModalData(data);
        setIsModalOpen(true);
    };

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
                    <button onClick={() => setIsEditModalOpen(true)}
                        className="px-4 py-2 bg-gray-100 text-sm font-semibold rounded hover:bg-gray-200">
                        Edit profile
                    </button>
                </div>

                {isEditModalOpen && (
                    <EditProfileModal
                        userData={user}
                        onClose={() => setIsEditModalOpen(false)}
                    />
                )}

                <div className="flex space-x-4 text-sm text-gray-600">
                    <span>
                        <strong className="text-black">{user.posts ? user.posts.length : 0}</strong> posts
                    </span>
                    <button onClick={() => handleOpenModal('Followers', followers)}>
                        <strong className="text-black">{followers.length}</strong> followers
                    </button>
                    <button onClick={() => handleOpenModal('Following', following)}>
                        <strong className="text-black">{following.length}</strong> followers
                    </button>

                    {isModalOpen && (
                        <FollowListModal
                            title={modalTitle}
                            users={modalData}
                            onClose={() => setIsModalOpen(false)}
                        />
                    )}
                </div>

                <div className="text-sm font-medium text-gray-800">{user.email}</div>
            </div>
        </div>
    );
};

export default ProfileHeader;
