import React from "react";
import { NavBar } from "@/src/app/shared/navbar/navbar";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "./store/store";

export interface Props {
    appProps: AppProps;
}

export const App: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <Provider store={store}>
                <NavBar></NavBar>
                <div className="text-center text-xl p-5">
                    <props.appProps.Component {...props.appProps.pageProps} />
                </div>
            </Provider>
        </div>
    );
};
