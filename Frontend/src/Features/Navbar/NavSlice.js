import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isClicked: false,
};

export const navSlice = createSlice({
    initialState,
    name: "NavSlice",
    reducers: {
        clicked: (state) => {
            state.isClicked = true;
        },
        hide: (state) => {
            state.isClicked = false;
        }
    }
});


export const { clicked, hide } = navSlice.actions;
export default navSlice.reducer;