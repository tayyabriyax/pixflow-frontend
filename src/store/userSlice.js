import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    userDetails: [],
    loadData: false
}

const getUserDetailsAsync = createAsyncThunk('user/getUserDetailsAsync', async (_, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            throw new Error("Authorization token is missing.");
        }

        const response = await axios.get(
            `http://localhost:8080/api/user/user-details`,
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

const updateUserAsync = createAsyncThunk('user/updateUser', async (userCredentials, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("jwtToken");
        const response = await axios.put(
            'http://localhost:8080/api/user/update-user',
            userCredentials,
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

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUserDetailsAsync.fulfilled, (state, action) => {
                state.userDetails = action.payload
                const userName = action.payload.userName;
                localStorage.setItem("userName", userName)
            })
            .addCase(updateUserAsync.fulfilled, (state) => {
                state.loadData = !state.loadData
            })
    }
});

export default userSlice.reducer;
export { getUserDetailsAsync, updateUserAsync }