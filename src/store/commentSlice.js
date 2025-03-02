import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './constants';

const initialState = {
    comments: [],
    loadData: false
}

const getCommentsAsync = createAsyncThunk('getCommentsAsync', async (post_id, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            throw new Error("Authorization token is missing.");
        }

        const response = await axios.get(
            `${BASE_URL}/comment/get-comment/${post_id}`,
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

const createCommentsAsync = createAsyncThunk('createCommentsAsync', async ({post_id, comment}, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            throw new Error("Authorization token is missing.");
        }

        const response = await axios.post(
            `${BASE_URL}/comment/create-comment/${post_id}`,
            comment,
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

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCommentsAsync.fulfilled, (state, action) => {
                state.comments = action.payload
            })
            .addCase(createCommentsAsync.fulfilled, (state) => {
                state.loadData = !state.loadData
            })
    }
});

export default commentSlice.reducer;
export { getCommentsAsync, createCommentsAsync }