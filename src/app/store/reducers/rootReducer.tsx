import { counterSlice } from "@/src/app/home/store/slices/counterSlice";

export const rootReducer = {
    counter: counterSlice.reducer,
};
