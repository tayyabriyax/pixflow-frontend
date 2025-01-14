import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import postReducer from './postSlice';
import commentReducer from "./commentSlice";
import likeReducer from "./likeSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer,
        comment: commentReducer,
        like: likeReducer
    },
});