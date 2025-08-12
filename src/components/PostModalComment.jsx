import React, { useEffect, useState } from 'react';
import PostCaption from './PostCaption';
import { useDispatch, useSelector } from 'react-redux';
import { createCommentsAsync, getCommentsAsync } from '../store/commentSlice';
import Comment from './Comment';

const PostModalComment = ({ post }) => {

    const comments = useSelector((state) => state.comment.comments);
    const loadData = useSelector((state) => state.comment.loadData)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCommentsAsync(post.id));
    }, [loadData])

    const [comment, setComment] = useState({ content: "" });

    const handleChangeInComment = (e) => {
        setComment({
            ...comment,
            content: e.target.value
        })
    }

    const createComment = async () => {
        dispatch(createCommentsAsync({ post_id: post.id, comment: comment }));
        setComment({
            ...comment,
            content: ""
        });
    };

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
                    <React.Fragment key={index}>
                        <Comment
                            userName={comment.userId.userName}
                            profilePic={comment.userId.profilePic}
                            content={comment.content}
                            createdAt={comment.createdAt} />
                    </React.Fragment>
                ))}
            </div>

            <div className="flex items-center">
                <input
                    type="text"
                    value={comment.content}
                    onChange={handleChangeInComment}
                    placeholder="Add a comment..."
                    className="flex-grow border border-gray-300 rounded px-2 py-1"
                />
                <button
                    onClick={createComment}
                    className="ml-2 px-4 py-1 bg-white border hover:text-white rounded hover:bg-purple-600"
                >
                    Post
                </button>
            </div>
        </div>
    );
};

export default PostModalComment;
