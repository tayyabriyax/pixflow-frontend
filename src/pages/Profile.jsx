import React, { useEffect, useState } from 'react';
import { EmptyState, ProfileBookmarksGrid, ProfileHeader, ProfilePostGrid, ProfileTabs } from '../components';
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

            <ProfileTabs
                activeTab={activeTab}
                onTabChange={handleTabChange} />

            <div className="p-4">
                {activeTab === "Posts" && (
                    <>
                        {userDetails.posts && userDetails.posts.length > 0 ? (
                            <ProfilePostGrid posts={userDetails.posts} />
                        ) : (
                            <EmptyState
                                title="Share Photos"
                                description="When you share photos, they will appear on your profile."
                                actionText="Share your first photo"
                                onActionClick={() => console.log("Redirect to create post page")}
                            />
                        )}
                    </>
                )}

                {activeTab === "Bookmarks" && (
                    <>
                        {bookmarks && bookmarks.length > 0 ? (
                            <ProfileBookmarksGrid posts={bookmarks} />
                        ) : (
                            <EmptyState
                                title="No Bookmarks Yet"
                                description="Save posts you like to find them later."
                                actionText="Explore Posts"
                                onActionClick={() => console.log("Redirect to explore page")}
                            />
                        )}
                    </>
                )}
            </div>

        </div>
    );
};

export default Profile;