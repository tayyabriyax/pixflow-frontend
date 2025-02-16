import React, { useEffect, useState } from 'react';
import {
    FaRegHeart, FaHeart,
    FaRegShareSquare,
    FaRegBookmark, FaBookmark,
    FaRegComment
} from 'react-icons/fa';
import PostModal from './PostModal';
import { useDispatch, useSelector } from 'react-redux';
import { getLikesAsync, likePostAsync, unLikePostAsync } from '../store/likeSlice';
import { addBookmarkAsync, getBookmarkAsync, removeBookmarkAsync } from '../store/bookmarkSlice';

const PostOptions = ({ post }) => {

    const [showModal, setShowModal] = useState(false);

    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);

    const likes = useSelector((state) => state.like.likes[post.id] || 0);
    const loadData = useSelector((state) => state.like.loadData);
    const bookmarks = useSelector((state) => state.bookmark.bookmarks);

    const username = localStorage.getItem("userName");

    const dispatch = useDispatch();

    const likePost = () => {
        dispatch(likePostAsync(post.id));
    }

    const unLikePost = () => {
        dispatch(unLikePostAsync(post.id));
    }

    const addBookmark = () => {
        dispatch(addBookmarkAsync(post.id));
    }

    const removeBookmark = () => {
        dispatch(removeBookmarkAsync(post.id));
    }

    useEffect(() => {
        dispatch(getLikesAsync(post.id));
        dispatch(getBookmarkAsync());
    }, [loadData])

    useEffect(() => {
        if (likes?.likes?.some((like) => like.user.userName === username)) {
            setLiked(true);
        }
    }, [likes])

    useEffect(() => {
        if (bookmarks?.some((bookmark) => bookmark.post.id === post.id)) {
            setBookmarked(true);
        }
    }, [bookmarks])

    return (
        <>
            <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-4">

                    <button
                        onClick={() => setLiked(!liked)}
                        className={`flex items-center ${liked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}
                    >
                        {liked ? <FaHeart onClick={unLikePost} className="mr-1" size={20} /> :
                            <FaRegHeart onClick={likePost} className="mr-1" size={20} />}
                    </button>

                    <button onClick={() => setShowModal(true)}
                        className="flex items-center text-gray-600 hover:text-blue-500">
                        <FaRegComment className="mr-1" size={20} />
                    </button>

                    <button className="flex items-center text-gray-600 hover:text-green-500">
                        <FaRegShareSquare className="mr-1" size={20} />
                    </button>
                </div>

                <button
                    onClick={() => setBookmarked(!bookmarked)}
                    className={`flex items-center ${bookmarked ? 'text-yellow-500' : 'text-gray-600 hover:text-yellow-500'}`}
                >
                    {bookmarked ? <FaBookmark onClick={removeBookmark} size={20} /> : <FaRegBookmark onClick={addBookmark} size={20} />}
                </button>

                {showModal &&
                    <PostModal
                        post={post}
                        onClose={() => setShowModal(false)} />}
            </div>
            <div className='mt-2'>
                <span className='text-sm font-semibold'>Likes</span>
                <span className='text-sm'>{" " + likes.likesCount}</span>
            </div>
        </>
    );
}

export default PostOptions;