import { Home } from "@/src/app/home/home";
import { render, RenderResult } from "@testing-library/react";
import { SignificantProjectsTable } from "@/src/app/home/significantProjectsTable/significantProjectsTable";

describe("HomeComponent", () => {
    let expectedProps;

    beforeEach(() => {
        expectedProps = {};
    });

    test("Should render h1-tag with content: Home", () => {
        const renderResult: RenderResult = render(<SignificantProjectsTable></SignificantProjectsTable>);
        expect(renderResult.container.querySelector("td")).toBeDefined();
    });
});
