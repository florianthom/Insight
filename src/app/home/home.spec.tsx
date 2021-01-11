import { Home } from "@/src/app/home/home";
import { LayoutRenderer } from "@/src/app/shared/tests/test-utils";
import { render, RenderResult } from "@testing-library/react";

describe("HomeComponent", () => {
    let expectedProps;

    beforeEach(() => {
        expectedProps = {};
    });

    test("Should render h1-tag with content: Home", () => {
        const renderResult: RenderResult = render(<Home />, { wrapper: LayoutRenderer, ...expectedProps });
        expect(renderResult.container.querySelector("h1")).toHaveTextContent("Home");
    });
});
