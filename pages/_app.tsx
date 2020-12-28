import "../styles/globals.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { GetServerSideProps, NextPage } from "next";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
