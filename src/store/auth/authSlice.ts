import { createSlice } from '@reduxjs/toolkit';
import {User} from "../../utils/types"
import { login, logout, refreshUser, register } from './operations';

export interface AuthState {
    user: User
    token: string | null,
    isLoggedIn: boolean,
    isRefreshing: boolean
}

const initialState: AuthState = {
    user: {
        name: null,
        email: null
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => builder
        .addCase(register.fulfilled, (state, { payload }) => {
            state.token = payload.token;
            state.isLoggedIn = true;
        })
        .addCase(login.fulfilled, (state, { payload }) => {
            state.token = payload.token;
            state.isLoggedIn = true;
        })    
        .addCase(refreshUser.pending, (state) => {
            state.isRefreshing = true;
        })               
        .addCase(refreshUser.fulfilled, (state, {payload}) => {
            state.user = payload.user;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })    
        .addCase(refreshUser.rejected, (state) => {
            state.isRefreshing = false;
        })    
        .addCase(logout.fulfilled, (state) => {
            state.user = { name: null, email: null };
            state.token = null;                  
            state.isLoggedIn = false;
        }) 
});


export const authReduser = authSlice.reducer;