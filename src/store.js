import{configureStore}from "@reduxjs/toolkit";
import modalReducer from "./features/modal/modalSlice"
import competitorReducer from "./features/competitor/competitorSlice"
import authReducer from "./features/authSlice"
export const store=configureStore({
    reducer:{
            modal:modalReducer,
            competitor:competitorReducer,
             auth: authReducer,
    }
})