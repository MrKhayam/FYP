import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { registerUser } from './authService';

const isUserAvailable = localStorage.getItem("User");

const initialState = {
    user: isUserAvailable ? isUserAvailable : null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
};

export const regUser = createAsyncThunk(
    "auth/register",
    async (userData, thunkApi) => {
        try {
            return await registerUser(userData);
        } catch (error) {
            const message = error.response.data.message;
            return thunkApi.rejectWithValue(message);
        }
    }
);


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(regUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.message = "";
            })
            .addCase(regUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                state.user = null;
            })
            .addCase(regUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.message = "Account Successfully Created.";
                state.user = action.payload;
            })
    },
});


export const { reset } = authSlice.actions;
export default authSlice.reducer;