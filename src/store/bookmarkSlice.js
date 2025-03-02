import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './constants';

const initialState = {
    bookmarks: [],
    loadData: false
}

const addBookmarkAsync = createAsyncThunk('bookmark/addBookmarkAsync', async (post_id, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("jwtToken");
        const response = await axios.post(
            `${BASE_URL}/bookmark/add-bookmark/${post_id}`,
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

const removeBookmarkAsync = createAsyncThunk('bookmark/removeBookmarkAsync', async (post_id, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            throw new Error("Authorization token is missing.");
        }

        const response = await axios.post(
            `${BASE_URL}/bookmark/remove-bookmark/${post_id}`,
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

const getBookmarkAsync = createAsyncThunk('bookmark/getBookmarkAsync', async (_, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            throw new Error("Authorization token is missing.");
        }

        const response = await axios.get(
            `${BASE_URL}/bookmark/get-bookmark`,
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


const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addBookmarkAsync.fulfilled, (state) => {
                state.loadData = !state.loadData
            })
            .addCase(removeBookmarkAsync.fulfilled, (state) => {
                state.loadData = !state.loadData
            })
            .addCase(getBookmarkAsync.fulfilled, (state, action) => {
                state.bookmarks = action.payload
            })
    }
});

export default bookmarkSlice.reducer;
export { addBookmarkAsync, removeBookmarkAsync, getBookmarkAsync }