import React from "react";
import { NavBar } from "./shared/navbar/navbar";
import type { AppProps } from "next/app";

export interface Props {
    appProps: AppProps;
}

export const App: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <NavBar></NavBar>
            <props.appProps.Component {...props.appProps.pageProps} />
        </div>
    );
};
