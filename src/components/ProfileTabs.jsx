import React from 'react';

const ProfileTabs = ({ activeTab, onTabChange }) => {
    const tabs = ['Posts', 'Bookmarks'];

    return (
        <div className="bg-white border-b flex justify-center space-x-4 py-2">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    className={`px-4 py-2 text-sm font-semibold ${
                        activeTab === tab
                            ? 'border-b-2 border-blue-500 text-blue-500'
                            : 'text-gray-600'
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default ProfileTabs;
