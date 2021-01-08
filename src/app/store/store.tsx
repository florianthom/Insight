import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "@/src/app/store/reducers/rootReducer";

const middleware = [...getDefaultMiddleware()];

export const store = configureStore({
    reducer: rootReducer,
    middleware: middleware,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
