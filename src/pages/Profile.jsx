import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProfileHeader, ProfilePostGrid, ProfileTabs } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetailsAsync } from '../store/userSlice';

const Profile = () => {

    const userDetails = useSelector((state) => state.user.userDetails);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserDetailsAsync());
    }, [])

    const [activeTab, setActiveTab] = useState('Posts');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <Link to={"/profile"} className="min-h-screen bg-white">

            <ProfileHeader
                user={userDetails} />

            <ProfileTabs activeTab={activeTab} onTabChange={handleTabChange} />

            <div className="p-4">
                {activeTab === 'Posts' && <ProfilePostGrid
                    posts={userDetails.posts ? userDetails.posts : []} />}
                {activeTab === 'Favorites' && <div>No Favorites</div>}
                {activeTab === 'Bookmarks' && <div>No Bookmarks</div>}
            </div>
        </Link>
    );
};

export default Profile;