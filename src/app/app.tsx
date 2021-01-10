import React from "react";
import { LayoutWrapper } from "@/src/app/shared/layoutWrapper/layoutWrapper";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "./store/store";

export interface Props {
    children: React.ReactNode;
}

export const App: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <Provider store={store}>
                <LayoutWrapper>
                    <div>{props.children}</div>
                </LayoutWrapper>
            </Provider>
        </div>
    );
};
