import React, { useEffect } from 'react';
import PostCaption from './PostCaption';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsAsync } from '../store/commentSlice';

const PostModalComment = ({ post }) => {

    const comments = useSelector((state) => state.comment.comments);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCommentsAsync(post.id));
    }, [])

    return (
        <div className="flex flex-col h-full">

            <PostCaption
                caption={post.caption}
                userName={post.auther.userName}
                profilePic={post.auther.profilePic} />

            <hr />
            <h4 className="font-medium text-gray-800 my-2">Comments</h4>

            <div className="flex-grow overflow-y-auto mb-4 text-sm">
                {comments.map((comment, index) => (
                    <div key={index} className="mb-2">
                        <span className="font-semibold">{comment.userId.userName}: </span>
                        <span>{comment.content}</span>
                    </div>
                ))}
            </div>

            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Add a comment..."
                    className="flex-grow border border-gray-300 rounded px-2 py-1"
                />
                <button
                    className="ml-2 px-4 py-1 bg-white border hover:text-white rounded hover:bg-purple-600"
                >
                    Post
                </button>
            </div>
        </div>
    );
};

export default PostModalComment;
