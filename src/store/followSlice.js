import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './constants';

const initialState = {
    loadData: false,
    followers: [],
    following: []
}

const getFollowersAsync = createAsyncThunk('follow/getFollowersAsync', async (_, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            throw new Error("Authorization token is missing.");
        }

        const response = await axios.get(
            `${BASE_URL}/follow/followers`,
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


const getFollowingAsync = createAsyncThunk('follow/getFollowingAsync', async (_, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            throw new Error("Authorization token is missing.");
        }

        const response = await axios.get(
            `${BASE_URL}/follow/following`,
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

const followSlice = createSlice({
    name: 'follow',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFollowersAsync.fulfilled, (state, action) => {
                state.followers = action.payload; 
            })
            .addCase(getFollowingAsync.fulfilled, (state, action) => {
                state.following = action.payload;
            })
    }
});

export default followSlice.reducer;
export { getFollowersAsync, getFollowingAsync }