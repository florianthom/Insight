import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: 0 as number,
    reducers: {
        increment: (state: number, action: PayloadAction<number>) => {
            return state + action.payload;
        },
        decrement: (state: number, action: PayloadAction<number>) => {
            return state - action.payload;
        },
    },
});

export const counterActionCreator = {
    increment: counterSlice.actions.increment,
    decrement: counterSlice.actions.decrement,
};
