import React, { useEffect, useState } from 'react';
import { ProfileBookmarksGrid, ProfileHeader, ProfilePostGrid, ProfileTabs } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetailsAsync } from '../store/userSlice';
import { getBookmarkAsync } from '../store/bookmarkSlice';

const Profile = () => {

    const userDetails = useSelector((state) => state.user.userDetails);
    const bookmarks = useSelector((state) => state.bookmark.bookmarks);
    const loadData = useSelector((state) => state.user.loadData);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserDetailsAsync());
        dispatch(getBookmarkAsync());
    }, [loadData])

    const [activeTab, setActiveTab] = useState('Posts');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="min-h-screen bg-white">

            <ProfileHeader
                user={userDetails} />

            <ProfileTabs activeTab={activeTab} onTabChange={handleTabChange} />

            <div className="p-4">
                {activeTab === 'Posts' && <ProfilePostGrid
                    posts={userDetails.posts ? userDetails.posts : []} />}
                {activeTab === 'Bookmarks' && <ProfileBookmarksGrid
                    posts={bookmarks ? bookmarks : []} />}
            </div>

        </div>
    );
};

export default Profile;