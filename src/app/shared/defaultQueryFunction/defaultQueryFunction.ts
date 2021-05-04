import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/app/store/store";
import { apiBaseUrl } from "@/src/app/shared/constants/constants";
import { decrementConterActionCreator } from "@/src/app/home/store/slices/counterSlice";
import { setTokens } from "@/src/app/store/slices/tokenStoreSlice";

// official reference: https://react-query.tanstack.com/guides/default-query-function
// inofficial reference: https://github.com/benawad/dogehouse/blob/e2180fcec6eefaf783d986d903f813a776699d52/kibbeh/src/modules/auth/useTokenStore.ts
// i guess his approach is to always send accesstoken + refreshtoken + the backend checks if accesstoken is valid and if not
// the backend checks the refreshtoken + if valid -> generates a new accesstoken+refreshtoken combination and puts them into the
// header of the response
// here: for now here are refresh token ignored (also because this backend does not automaticly generates a new key-pair combination on the fly)
export const defaultQueryFn = async ({ queryKey }: { queryKey: string }) => {
    // const tokenStoreState = useSelector((state: RootState) => state.tokenStore);
    // const dispatch = useDispatch();

    // const { accessToken, refreshToken } = tokenStoreState;

    const response = await fetch("https://localhost:5000/api/v1" + queryKey, {
        headers: {
            // Authorization: "Bearer " + accessToken,
            // "Content-Type": "application/json",
        },
    });

    if (response.status !== 200) {
        throw new Error(await response.text());
    }

    // const _accessToken = response.headers.get("access-token");
    // const _refreshToken = response.headers.get("refresh-token");
    // if (_accessToken && _refreshToken) {
    //     dispatch(setTokens({ accessToken: _accessToken, refreshToken: _refreshToken }));
    // }

    return await response.json();
};
