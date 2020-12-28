import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";

const MyApp: NextPage<AppProps> = (props: AppProps) => {
    return <props.Component {...props.pageProps} />;
};

export default MyApp;
