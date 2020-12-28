import "../styles/globals.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { GetServerSideProps, NextPage } from "next";

const MyApp: NextPage<AppProps> = (props: AppProps) => {
    return <props.Component {...props.pageProps} />;
};

export default MyApp;
