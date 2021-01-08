import { counterReducer } from "@/src/app/home/store/reducers/counterReducer";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    CounterState: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// import { counterSlice } from "@/src/app/home/store/slices/counterSlice";
//
// export const rootReducer = {
//     counter: counterSlice.reducer,
// };
