import { counterSlice } from "@/src/app/home/store/slices/counterSlice";
import { tokenStoreSlice } from "@/src/app/store/slices/tokenStoreSlice";

export const rootReducer = {
    counter: counterSlice.reducer,
    tokenStore: tokenStoreSlice.reducer,
};
