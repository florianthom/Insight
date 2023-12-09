import * as constants from "@/src/app/shared/constants/constants";

// official reference: https://react-query.tanstack.com/guides/default-query-function
// inofficial reference: https://github.com/benawad/dogehouse/blob/e2180fcec6eefaf783d986d903f813a776699d52/kibbeh/src/modules/auth/useTokenStore.ts

// currently not complete, not usable and not used
export const defaultQueryFunction = async ({ queryKey }: { queryKey: string }) => {
    const response = await fetch(constants.api_base_url + queryKey, {});
    if (response.status !== 200) {
        throw new Error(await response.text());
    }
    return await response.json();
};
