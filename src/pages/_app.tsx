import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
// needs to be imported to be able to use this font in tailwind.config.js
import "@fontsource/inter";
import React from "react";
import { App } from "../app/app";

const MyApp: NextPage<AppProps> = (props: AppProps) => {
    return (
        <div>
            <App appProps={props}></App>
        </div>
    );
};

export default MyApp;
