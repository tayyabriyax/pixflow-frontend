import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProfileHeader, ProfileTabs } from '../components';
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
                {activeTab === 'Posts' && <div>Show Posts Grid</div>}
                {activeTab === 'Favorites' && <div>Show Favorites Grid</div>}
                {activeTab === 'Bookmarks' && <div>Show Bookmarks Grid</div>}
            </div>
        </Link>
    );
};

export default Profile;