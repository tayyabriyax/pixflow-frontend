import React, { useState } from 'react';
import {
    FaRegHeart, FaHeart,
    FaRegShareSquare,
    FaRegBookmark, FaBookmark,
    FaRegComment
} from 'react-icons/fa';
import PostModal from './PostModal';
import { useDispatch } from 'react-redux';
import { likePostAsync, unLikePostAsync } from '../store/likeSlice';

const PostOptions = ({ post }) => {

    const [showModal, setShowModal] = useState(false);

    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);

    const dispatch = useDispatch();

    const likePost = () => {
        dispatch(likePostAsync(post.id));
    }

    const unLikePost = () => {
        dispatch(unLikePostAsync(post.id));
    }

    return (
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
                {bookmarked ? <FaBookmark size={20} /> : <FaRegBookmark size={20} />}
            </button>

            {showModal &&
                <PostModal
                    post={post}
                    onClose={() => setShowModal(false)} />}
        </div>
    );
}

export default PostOptions;