import "@/src/app/global.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import React from "react";
import "@/src/app/global.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";
import { Hydrate } from "react-query/hydration";
import { LayoutWrapper } from "@/src/app/shared/layoutWrapper/layoutWrapper";
import { Head } from "next/document";
import { Meta } from "@/src/app/shared/meta/meta";
import { Provider } from "react-redux";
import { store } from "@/src/app/store/store";

// call order: _document.tsx -> app.tsx -> app.tsx -> layout -> children
//  _document.tsx gets only rendered server-side

// getServerSideProps = Retrieve the payload on the client-side, at run time (such as implementing)
//                      - not recommended except in some szenarios where latency is a problem (e.g. dashboard)
//                          - reason: lose many static-optimization benefits

// getStaticProps = Produce the data at build time, so that the visitor gets the bundled version
//                  of the page you want to serve (for this you can try)
//                  - has revalidate-parameter
//                  - recommended

// getInitialProps= For the initial page load, getInitialProps will run on the server only.
//                  getInitialProps will then run on the client when navigating to a different
//                  route via the next/link component or by using next/router. However, if getInitialProps
//                  is used in a custom _app.js, and the page being navigated to implements getServerSideProps,
//                  then getInitialProps will run on the server.
//                  - not recommended: used other two method for a more granular featch-method

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

const MyApp: NextPage<AppProps> = (props: AppProps) => {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={props.pageProps.dehydratedState}>
                    <Provider store={store}>
                        <Meta />
                        <props.Component {...props.pageProps} />
                    </Provider>
                </Hydrate>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </div>
    );
};

export default MyApp;
