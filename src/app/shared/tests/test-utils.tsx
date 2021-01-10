import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "mutationobserver-shim";
import React from "react";
import { LayoutWrapper } from "@/src/app/shared/layoutWrapper/layoutWrapper";
import { Provider } from "react-redux";

export interface Props {
    children: React.ReactNode;
}

const LayoutRenderer: React.FC = (props: Props) => {
    return (
        <LayoutWrapper>
            <div>{props.children}</div>
        </LayoutWrapper>
    );
};

const customRender = (ui, options) =>
    render(ui, {
        wrapper: LayoutRenderer,
        ...options,
    });

export * from "@testing-library/react";
export { customRender as render };
