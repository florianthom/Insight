import { Action, configureStore, getDefaultMiddleware, ThunkAction } from "@reduxjs/toolkit";
import { rootReducer } from "@/src/app/store/reducers/rootReducer";
import { __prod__ } from "@/src/app/shared/constants/constants";

const middleware = [...getDefaultMiddleware()];

export const store = configureStore({
    reducer: rootReducer,
    middleware: middleware,
    devTools: !__prod__,
});

if (!__prod__ && module.hot) {
    module.hot.accept("@/src/app/store/reducers/rootReducer", () => {
        const newRootReducer = require("@/src/app/store/reducers/rootReducer").default;
        store.replaceReducer(newRootReducer);
    });
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
