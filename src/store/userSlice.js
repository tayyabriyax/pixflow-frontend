import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './constants';

const initialState = {
    userDetails: [],
    searchedUsers: [],
    loadData: false
}

const getUserDetailsAsync = createAsyncThunk('user/getUserDetailsAsync', async (_, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            throw new Error("Authorization token is missing.");
        }

        const response = await axios.get(
            `${BASE_URL}/user/user-details`,
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

const getSearchedUsersAsync = createAsyncThunk('user/getSearchedUsersAsync', async (keyword, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            throw new Error("Authorization token is missing.");
        }

        const response = await axios.get(
            `${BASE_URL}/user/search-user/${keyword}`,
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
            `${BASE_URL}/user/update-user`,
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

const updateProfilePicAsync = createAsyncThunk('user/updateProfilePic', async (profilePic, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            throw new Error("Authorization token is missing.");
        }

        const formData = new FormData();
        formData.append("profilePic", profilePic);

        const response = await axios.put(
            `${BASE_URL}/user/update-profile-pic`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
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
            .addCase(updateProfilePicAsync.fulfilled, (state) => {
                state.loadData = !state.loadData
            })
            .addCase(getSearchedUsersAsync.fulfilled, (state, action) => {
                state.searchedUsers = action.payload
            })
    }
});

export default userSlice.reducer;
export { getUserDetailsAsync, updateUserAsync, updateProfilePicAsync, getSearchedUsersAsync }