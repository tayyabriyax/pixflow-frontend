import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createCommentsAsync } from '../store/commentSlice';
import { getLikesAsync } from '../store/likeSlice';

const AddComment = ({ post }) => {

    const likes = useSelector((state) => state.like.likes[post.id] || 0);
    const loadData = useSelector((state) => state.like.loadData);

    const [comment, setComment] = useState({ content: "" });

    const dispatch = useDispatch();

    const handleChangeInComment = (e) => {
        setComment({
            ...comment,
            content: e.target.value
        })
    }

    const createComment = async (e) => {
        e.preventDefault();
        dispatch(createCommentsAsync({ post_id: post.id, comment: comment }));
        setComment({
            ...comment,
            content: ""
        });
    };

    useEffect(() => {
        dispatch(getLikesAsync(post.id));
    }, [loadData])

    return (
        <div className="mt-2">
            <span className='text-sm font-semibold'>Likes</span>
            <span className='text-sm'>{" " + likes.likesCount}</span>
            <form className="flex items-center space-x-2 mt-2">
                <input
                    type="text"
                    value={comment.content}
                    onChange={handleChangeInComment}
                    placeholder="Add a comment..."
                    className="flex-grow p-2 text-sm border border-gray-300 rounded 
                            focus:outline-none focus:ring focus:ring-blue-200"
                />
                <button
                    type='submit'
                    onClick={createComment}
                    className="ml-2 px-4 py-2 bg-white border hover:text-white text-sm rounded hover:bg-purple-600"
                >
                    Post
                </button>
            </form>
        </div>
    )
}

export default AddComment