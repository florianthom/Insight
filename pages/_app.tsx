import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { NextPage } from "next";
// needs to be imported to be able to use this font in tailwind.config.js
import "@fontsource/inter";

const MyApp: NextPage<AppProps> = (props: AppProps) => {
    return <props.Component {...props.pageProps} />;
};

export default MyApp;
