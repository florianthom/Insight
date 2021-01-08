import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@/src/app/store/reducers/rootReducer";

export const store = configureStore({
    reducer: rootReducer,
});

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { rootReducer } from "@/src/app/store/reducers/rootReducer";
//
// const middleware = [...getDefaultMiddleware()];
//
// export const store = configureStore({
//     reducer: rootReducer,
//     middleware: middleware,
// });
