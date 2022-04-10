import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React, { useState } from "react";
import { ReportItem } from "@/src/app/reports/recordButton/reportItem";
import { useQuery } from "react-query";
import { Document } from "@/src/openapi_models/models/Document";
import { BasicSpinner } from "@/src/app/shared/basicSpinner/basicSpinner";
import { PagedResponseDocument } from "@/src/openapi_models/models/PagedResponseDocument";
import { firstPage, pageSizeLess } from "@/src/app/shared/constants/constants";

interface Props {}

export const Reports: React.FC<Props> = (props: Props) => {
    const [page, setPage] = useState(firstPage);
    const { isLoading, error, data: documentsData } = useQuery<PagedResponseDocument, Error>(
        "/documents?pagesize=" + pageSizeLess + "&pagenumber=" + page,
        { keepPreviousData: true },
    );
    function handleScroll(): void {
        setTimeout(() => {
            this.scrollIntoView({ behavior: "smooth" });
        }, 500);
    }
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <div className="pt-56 pb-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-black text-3xl tracking-headline">MY REPORTS AND TALKS</h2>
                    <div className="text-base text-black pt-24">
                        Here is an excerpt of my previous work in form of reports and talks. This includes minor
                        personal work and some interesting stuff I did at university. Because of that the individual
                        topics may differ. That said, some of the work I didnt do alone but in a team.
                    </div>
                    <div className="pt-24">
                        {isLoading ? (
                            <div className="text-center">
                                <BasicSpinner></BasicSpinner>
                            </div>
                        ) : (
                            documentsData?.data
                                .sort((a: Document, b: Document) =>
                                    new Date(a.documentCreatedTime) >= new Date(b.documentCreatedTime) ? -1 : 1,
                                )
                                .map((a) => (
                                    <div className="py-8" key={(a as Document).id}>
                                        <ReportItem document={a as Document}></ReportItem>
                                    </div>
                                ))
                        )}
                    </div>
                    {isLoading ? (
                        <div></div>
                    ) : (
                        <div className="px-4 pt-8 text-center">
                            <div>
                                <div className="flex justify-around items-center">
                                    <button
                                        onClick={() => {
                                            if (documentsData.previousPage) {
                                                setPage((a) => a - 1);
                                            }
                                            window.scrollTo({
                                                top: 0,
                                                left: 0,
                                                behavior: "smooth",
                                            });
                                        }}
                                        disabled={documentsData === undefined || !documentsData.previousPage}
                                        className="bg-gray-100 hover:bg-gray-200 border py-4 m-1 w-3/12 disabled:opacity-50 disabled:cursor-default"
                                    >
                                        Previous
                                    </button>
                                    <div>
                                        <span>
                                            Page{" "}
                                            <span className="bg-white rounded border border-gray-300 px-4 py-2">
                                                {page}
                                            </span>{" "}
                                            of {documentsData.pagesTotal}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => {
                                            if (documentsData.nextPage) {
                                                setPage((a) => a + 1);
                                            }
                                            window.scrollTo({
                                                top: 0,
                                                left: 0,
                                                behavior: "smooth",
                                            });
                                        }}
                                        disabled={documentsData === undefined || !documentsData.nextPage}
                                        className="bg-gray-100 hover:bg-gray-200 border py-4 m-1 w-3/12 disabled:opacity-50 disabled:cursor-default"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
