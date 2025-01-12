import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isAuthenticated: !!localStorage.getItem('jwtToken'),
    error: ""
}

const loginAsync = createAsyncThunk('loginAsync', async (loginCredentials, { rejectWithValue }) => {
    try {
        const response = await axios.post(
            'http://localhost:8080/api/public/sign-in',
            loginCredentials,
            {
                headers: {
                    'Content-Type': 'application/json',
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

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('jwtToken');
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginAsync.fulfilled, (state, action) => {
            const token = action.payload;
            localStorage.setItem('jwtToken', token);
            state.isAuthenticated = true;
        })
        .addCase(loginAsync.rejected, (state, action) => {
            state.isAuthenticated = false;
            state.error = action.payload
        })
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
export {loginAsync}