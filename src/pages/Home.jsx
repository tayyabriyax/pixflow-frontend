import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAsync } from '../store/postSlice';
import { AddComment, Post, PostAuther, PostMedia, PostOptions } from '../components';
import { getUserDetailsAsync } from '../store/userSlice';

const Home = () => {

    const posts = useSelector((state) => state.post.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsAsync());
        dispatch(getUserDetailsAsync())
    }, [])

    return (
        <div className="flex min-h-screen bg-white cursor-auto">

            <div className="flex-grow p-4">
                {
                    posts.map((post) => (
                        <Post key={post.id}>
                            <PostAuther
                                profilePic={post.auther.profilePic}
                                userName={post.auther.userName} />

                            <PostMedia
                                url={post.url} />

                            <PostOptions
                                post={post} />

                            <AddComment
                                post={post} />
                        </Post>
                    ))
                }
            </div>

            <div className="hidden lg:block w-1/4 p-4">
                <h2 className="text-lg font-semibold text-gray-700">More Features</h2>
                <p className="text-sm text-gray-500">Placeholder for additional features...</p>
            </div>
        </div>
    );
};

export default Home;