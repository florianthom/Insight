import React from "react";
import { Home } from "@/src/app/home/home";
import { render, RenderResult } from "@testing-library/react";
import { Props as HomeProps } from "./home";
import { defaultQueryClient } from "@/src/app/shared/queryClient/defaultQueryClient";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "@/src/app/store/store";
import { Hydrate } from "react-query/hydration";
import { Meta } from "@/src/app/shared/meta/meta";
import { Project } from "@/src/openapi_models/models/Project";
import { PagedResponseProject } from "@/src/openapi_models/models/PagedResponseProject";
import { SignificantProjectsTable } from "@/src/app/home/significantProjectsTable/significantProjectsTable";
import { jest } from "@jest/globals";

// reference: https://github.com/vercel/next.js/discussions/23034#discussioncomment-478460

// Mocks useRouter
const useRouter = jest.spyOn(require("next/router"), "useRouter");

export function mockNextUseRouter(props: { route: string; pathname: string; query: string; asPath: string }) {
    useRouter.mockImplementationOnce(() => ({
        route: props.route,
        pathname: props.pathname,
        query: props.query,
        asPath: props.asPath,
    }));
}

let DEFAULT_PROPS: HomeProps;
// Mocks Next.js route
mockNextUseRouter({
    route: "/home",
    pathname: "/home",
    query: "",
    asPath: `/home`,
});
const queryClient = defaultQueryClient;

const AllTheProviders = ({ children }) => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <Meta />
                {children}
            </QueryClientProvider>
        </Provider>
    );
};

function renderWithWrapper(ui, options): RenderResult {
    return render(ui, { wrapper: AllTheProviders, ...options });
}

jest.mock("./significantProjectsTable/significantProjectsTable.tsx", () => () => "SignificantProjectsTable");

describe("HomeComponent", () => {
    beforeEach(() => {
        DEFAULT_PROPS = {} as HomeProps;
    });
    // it == alias of test -> test == it
    test("if it renders without crashing", () => {
        const renderResult: RenderResult = renderWithWrapper(<Home />, {});
        // console.log(renderResult.container.textContent);
        expect(renderResult.container.textContent).toMatch("SignificantProjectsTable");
    });
});
