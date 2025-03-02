import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './constants';

const initialState = {
    loadData: false,
    likes: {}
}

const getLikesAsync = createAsyncThunk('likes/getLikesAsync', async (post_id, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            throw new Error("Authorization token is missing.");
        }

        const response = await axios.get(
            `${BASE_URL}/like/like-count/${post_id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        return { post_id, likes: response.data };
    } catch (error) {
        if (error.response) {
            console.error(`HTTP error! Status: ${error.response.status}`);
            return rejectWithValue(error.response.data);
        } else if (error.request) {
            console.error('No response received:', error.request);
            return rejectWithValue('No response received from the server.');
        } else {
            console.error('Error:', error.message);
            return rejectWithValue(error.message);
        }
    }
}
);


const likePostAsync = createAsyncThunk('likes/likePostAsync', async (post_id, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            throw new Error("Authorization token is missing.");
        }

        const response = await axios.post(
            `${BASE_URL}/like/like-post/${post_id}`,
            {},
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error(`HTTP error! Status: ${error.response.status}`);
            console.error('Response data:', error.response.data);
            return rejectWithValue(error.response.data);
        } else if (error.request) {
            console.error('No response received:', error.request);
            return rejectWithValue('No response received from the server.');
        } else {
            console.error('Error:', error.message);
            return rejectWithValue(error.message);
        }
    }
});

const unLikePostAsync = createAsyncThunk('likes/unLikePostAsync', async (post_id, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            throw new Error("Authorization token is missing.");
        }

        const response = await axios.post(
            `${BASE_URL}/like/unlike-post/${post_id}`,
            {},
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error(`HTTP error! Status: ${error.response.status}`);
            console.error('Response data:', error.response.data);
            return rejectWithValue(error.response.data);
        } else if (error.request) {
            console.error('No response received:', error.request);
            return rejectWithValue('No response received from the server.');
        } else {
            console.error('Error:', error.message);
            return rejectWithValue(error.message);
        }
    }
});

const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLikesAsync.fulfilled, (state, action) => {
                const { post_id, likes } = action.payload;
                state.likes[post_id] = likes; 
            })
            .addCase(likePostAsync.fulfilled, (state) => {
                state.loadData = !state.loadData
            })
            .addCase(unLikePostAsync.fulfilled, (state) => {
                state.loadData = !state.loadData
            })
    }
});

export default likeSlice.reducer;
export { likePostAsync, getLikesAsync, unLikePostAsync }