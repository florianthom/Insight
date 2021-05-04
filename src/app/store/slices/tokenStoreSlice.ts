import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const accessTokenKey = "@florianthom-personalwebsite/token";
const refreshTokenKey = "@florianthom-personalwebsite/refresh-token";

type TokenStoreState = {
    accessToken: string;
    refreshToken: string;
};

const countersInitialState: TokenStoreState = {
    accessToken: "",
    refreshToken: "",
};

export const tokenStoreSlice = createSlice({
    name: "tokenStore",
    initialState: countersInitialState,
    reducers: {
        setTokens: function (
            state: TokenStoreState,
            action: PayloadAction<{ accessToken: string; refreshToken: string }>,
        ) {
            try {
                localStorage.setItem(accessTokenKey, action.payload.accessToken);
                localStorage.setItem(refreshTokenKey, action.payload.refreshToken);
            } catch {}
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
    },
});

export const { setTokens } = tokenStoreSlice.actions;
