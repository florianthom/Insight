import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React, { useState } from "react";
import { ReportItem } from "@/src/app/reports/recordButton/reportItem";
import { Document } from "@/src/app/shared/models/Document";
import * as constants from "@/src/app/shared/constants/constants";
import data from "@/data/documentsData.json";
import {
    getNumberPages,
    nextPageAvailable,
    paginate,
    previousPageAvailable,
} from "@/src/app/shared/utils/paginationUtils";

interface Props { }

export const Reports: React.FC<Props> = (props: Props) => {
    const documentsData: Document[] = data;
    const [page, setPage] = useState(constants.firstPage);
    const pagedData = paginate(documentsData, constants.pageSizeReports, page);

    function handleScroll2(): void {
        if (nextPageAvailable(documentsData, constants.pageSizeReports, page)) {
            setPage((a) => a + 1);
        }
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    return (
        <div>
            <NavBar></NavBar>
            <div>
                <div className="pt-56 pb-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-black text-3xl tracking-headline">REPORTS AND TALKS</h2>
                    <div className="text-base text-black pt-24">
                        Computer science enthusiast - Interested in research & development.
                        Open to new technologies in software and hardware.
                        Here is an excerpt of my previous work in form of reports and talks.
                        This encompasses various personal projects and notable undertakings during my time at the university.
                        Because of that the individual topics may differ.
                    </div>
                    <div className="pt-24">
                        {pagedData
                            .sort((a: Document, b: Document) =>
                                new Date(a.DocumentCreatedTime!) >= new Date(b.DocumentCreatedTime!) ? -1 : 1,
                            )
                            .map((a) => (
                                <div className="py-8" key={(a as Document).Id}>
                                    <ReportItem document={a as Document}></ReportItem>
                                </div>
                            ))}
                    </div>
                    {
                        <div className="px-4 pt-8 text-center">
                            <div>
                                <div className="flex justify-around items-center">
                                    <button
                                        onClick={() => {
                                            if (previousPageAvailable(page)) {
                                                setPage((a) => a - 1);
                                            }
                                            window.scrollTo({
                                                top: 0,
                                                left: 0,
                                                behavior: "smooth",
                                            });
                                        }}
                                        disabled={!previousPageAvailable(page)}
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
                                            of {getNumberPages(documentsData, constants.pageSizeReports)}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => handleScroll2()}
                                        disabled={!nextPageAvailable(documentsData, constants.pageSizeReports, page)}
                                        className="bg-gray-100 hover:bg-gray-200 border py-4 m-1 w-3/12 disabled:opacity-50 disabled:cursor-default"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
