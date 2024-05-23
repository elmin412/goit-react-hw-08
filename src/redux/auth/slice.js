import { createSlice } from "@reduxjs/toolkit";
import { register, logOut, logIn, refreshUser } from "./operations";
import { act } from "react";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        loading: false,
        error: null,

    },

    extraReducers: builder =>
        builder
            .addCase(register.pending, (state) => {
    state.loading = true
            })
            .addCase(register.fulfilled, (state, action) => {
        state.name = action.payload.name
        state.token = action.payload.token
                state.isLoggedIn = true
                state.loading = false
            })
            .addCase(register.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false
            })
            .addCase(logIn.pending, (state) => {
                state.loading = true
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.loading = false;
            })
            .addCase(logIn.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(logOut.pending, (state) => {
                state.loading = true;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = {
                    name: null,
                    email: null,
                };
                state.token = null;
                state.isLoggedIn = false;
                state.loading = false
            })
            .addCase(logOut.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
    })

})

export default authSlice.reducer