import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'; 
import FollowListItem from './FollowListItem';

const FollowListModal = ({ title, users, onClose }) => {

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-5"
            onClick={handleOverlayClick}
        >
            <div className="bg-white w-[90%] max-w-96 h-[70vh] rounded-lg overflow-hidden border flex flex-col">

                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-black">
                        <AiOutlineClose size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {users.map((user) => (
                        <FollowListItem key={user.id} user={user.user} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FollowListModal;
