import { counterReducer } from "../../home/store/reducers/counterReducer";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    CounterState: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
