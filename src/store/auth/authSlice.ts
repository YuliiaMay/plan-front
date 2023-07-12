import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
    user: {
        name: string | null,
        email: string | null
    }
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
    extraReducers: (builder) =>
        builder
            // .addCase(() => {
            // })
});


export const authReduser = authSlice.reducer;