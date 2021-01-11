import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { LayoutWrapper } from "@/src/app/shared/layoutWrapper/layoutWrapper";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "@/src/app/store/store";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";

const defaultQueryFn = async ({ queryKey }) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com${queryKey[0]}`);
    return data;
};

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            queryFn: defaultQueryFn,
        },
    },
});

export interface Props {
    children: React.ReactNode;
}

export const LayoutRenderer: React.FC = (props: Props) => {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <LayoutWrapper>
                        <div>{props.children}</div>
                    </LayoutWrapper>
                </Provider>
            </QueryClientProvider>
        </div>
    );
};
