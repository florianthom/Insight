import { QueryClient } from "react-query";
import { defaultQueryFunction } from "@/src/app/shared/defaultQueryFunction/defaultQueryFunction";

export const defaultQueryClient = new QueryClient({
    defaultOptions: {
        mutations: {
            onError: (e) => {
                if ("message" in (e as Error)) {
                    console.log((e as Error).message);
                }
            },
        },
        queries: {
            retry: false,
            staleTime: 60 * 1000 * 5,
            onError: (e) => {
                if ("message" in (e as Error)) {
                    console.log((e as Error).message);
                }
            },
            queryFn: defaultQueryFunction as any,
        },
    },
});
