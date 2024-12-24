import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/auth/authSlice";
import navReducer from "../Features/Navbar/NavSlice";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        nav: navReducer
    },
});

