import React from "react";
import { LayoutWrapper } from "@/src/app/shared/layoutWrapper/layoutWrapper";
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
                <LayoutWrapper>
                    <props.appProps.Component {...props.appProps.pageProps} />
                </LayoutWrapper>
            </Provider>
        </div>
    );
};
