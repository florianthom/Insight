import "@/src/app/global.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import React from "react";
import "@/src/app/global.css";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate } from "react-query/hydration";
import { Meta } from "@/src/app/shared/meta/meta";
import { Provider } from "react-redux";
import { store } from "@/src/app/store/store";
import { queryClient } from "@/src/app/shared/queryClient/defaultQueryClient";

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

const MyApp: NextPage<AppProps> = (props: AppProps) => {
    return (
        <div>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={props.pageProps.dehydratedState}>
                        <Meta />
                        <props.Component {...props.pageProps} />
                    </Hydrate>
                    <ReactQueryDevtools initialIsOpen={true} />
                </QueryClientProvider>
            </Provider>
        </div>
    );
};

export default MyApp;
