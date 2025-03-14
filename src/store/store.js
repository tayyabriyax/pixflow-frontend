import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import postReducer from './postSlice';
import commentReducer from "./commentSlice";
import likeReducer from "./likeSlice";
import userReducer from "./userSlice";
import followReducer from "./followSlice";
import bookmarkReducer from "./bookmarkSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer,
        comment: commentReducer,
        like: likeReducer,
        user: userReducer,
        follow: followReducer,
        bookmark: bookmarkReducer,
    },
});