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
                                userName={post.auther.userName}
                                createdAt={post.createdAt} />

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
        </div>
    );
};

export default Home;