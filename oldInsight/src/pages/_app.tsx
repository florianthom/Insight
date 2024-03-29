import "@/src/app/global.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import React from "react";
import "@/src/app/global.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate } from "react-query/hydration";
import { Meta } from "@/src/app/shared/meta/meta";
import { Provider } from "react-redux";
import { store } from "@/src/app/store/store";
import { defaultQueryClient } from "@/src/app/shared/queryClient/defaultQueryClient";
import * as constants from "@/src/app/shared/constants/constants";

// call order: _document.tsx -> app.tsx -> app.tsx -> layout -> children
//  _document.tsx gets only rendered server-side

// next. js 3 function:
// - getInitialProps (legacy),
// - getStaticProps (get data on server at buildtime),
// - getServerSideProps (getData on server on run time)

const MyApp: NextPage<AppProps> = (props: AppProps) => {
    const queryClientRef = React.useRef<QueryClient>();
    if (!queryClientRef.current) {
        queryClientRef.current = defaultQueryClient;
    }

    // does not work alone
    // const queryClient = new QueryClient();

    return (
        <div>
            <Provider store={store}>
                {/*https://github.com/tannerlinsley/react-query/issues/3476*/}
                {/*does not work with react 18 currently*/}
                <QueryClientProvider client={queryClientRef.current}>
                    <Hydrate state={props.pageProps.dehydratedState}>
                        <Meta />
                        {/*https://stackoverflow.com/questions/71809903/next-js-component-cannot-be-used-as-a-jsx-component*/}
                        <props.Component {...props.pageProps} />
                    </Hydrate>
                    <ReactQueryDevtools initialIsOpen={!constants.__prod__} />
                </QueryClientProvider>
            </Provider>
        </div>
    );
};

export default MyApp;
