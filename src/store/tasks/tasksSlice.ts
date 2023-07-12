import { createSlice } from '@reduxjs/toolkit';

export interface Task {
    _id: string,
    title: string,
    category: string,
    deadline?: string | null,
    priority?: string | null,
    status: string,
    note?: string | null,
}

export interface TasksState {
    tasks: [] | Task[],
    isLoading: boolean,
    error: string | number | null
}

const initialState: TasksState = {
    tasks: [],
    isLoading: false,
    error: null
};


export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            // .addCase(() => {
            // })
});



export const tasksReducer = tasksSlice.reducer;
