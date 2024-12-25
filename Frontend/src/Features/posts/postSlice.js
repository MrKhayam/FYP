import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { uploadPost } from './postSerice';

const initialState = {
    posts: [],
    postLoading: false,
    postError: false,
    postSuccess: false,
    postMessage: "",
};




export const uploadTweet = createAsyncThunk("posts/upload-post", async (data,thunkApi) => {
    try {
        const token = thunkApi.getState().auth.token;
        return await uploadPost(data, token);
    } catch (error) {
        const message = error.response.data.message;
        return thunkApi.rejectWithValue(message);
    }
})


export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        postReset: (state) => {
            state.postLoading = false;
            state.postError = false;
            state.postSuccess = false;
            state.postMessage = "";
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(uploadTweet.pending, (state) => {
            state.postLoading = true;
            state.postError = false;
            state.postSuccess = false;
            state.postMessage = "";
          })
          .addCase(uploadTweet.rejected, (state, action) => {
            state.postLoading = false;
            state.postError = true;
            state.postSuccess = false;
            state.postMessage = action.payload;
          })
          .addCase(uploadTweet.fulfilled, (state, action) => {
            state.posts.push(action.payload);
            state.postLoading = false;
            state.postError = false;
            state.postSuccess = true;
            state.postMessage = "Tweet Uploaded Successfully.";
          });
    }
});


export const { postReset } = postSlice.actions;
export default postSlice.reducer;