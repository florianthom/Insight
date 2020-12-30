import "@/src/styles/globals.scss";
import type { AppProps } from "next/app";
import { NextPage } from "next";
// needs to be imported to be able to use this font in tailwind.config.js
import "@fontsource/inter";
import React from "react";
import { NavBar } from "@/src/app/shared/navbar/navbar";

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
            <NavBar></NavBar>
            <props.Component {...props.pageProps} />
        </div>
    );
};

export default MyApp;
