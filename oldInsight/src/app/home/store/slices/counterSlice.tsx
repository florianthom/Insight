import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Counter {
    Counter: number;
}

type CounterState = {
    isCompleted: boolean;
    page: number;
} & Counter;

const countersInitialState: CounterState = {
    Counter: 0,
    isCompleted: true,
    page: 1,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState: countersInitialState,
    reducers: {
        increment: function (state: CounterState, action: PayloadAction<{ numbertoAdjustCounter: number }>) {
            state.Counter = state.Counter + action.payload.numbertoAdjustCounter;
        },
        decrement: function (
            state: CounterState,
            action: PayloadAction<{ numbertoAdjustCounter: number; isCompleted: boolean }>,
        ) {
            state.Counter = state.Counter - action.payload.numbertoAdjustCounter;
        },
    },
});

export const {
    increment: incrementConterActionCreator,
    decrement: decrementConterActionCreator,
} = counterSlice.actions;
