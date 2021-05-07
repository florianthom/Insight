import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React from "react";
import { RecordButton } from "@/src/app/reports/recordButton/recordButton";
import { useQuery } from "react-query";
import { Document } from "@/src/openapi_models/models/Document";
import { BasicSpinner } from "@/src/app/shared/basicSpinner/basicSpinner";
import { PagedResponseDocument } from "@/src/openapi_models/models/PagedResponseDocument";
import { firstPage, pageSize } from "@/src/app/shared/constants/constants";

interface Props {}

export const Reports: React.FC<Props> = (props: Props) => {
    const { isLoading, error, data: documentsData } = useQuery<PagedResponseDocument, Error>(
        "/documents?pagesize=" + pageSize + "&pagenumber=" + firstPage,
    );
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <div className="pt-56 pb-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-black text-3xl tracking-more-than-wide">MY REPORTS AND TALKS</h2>
                    <div className="text-base text-black pt-24">
                        Here is an excerpt of my previous work in form of reports and talks. This includes minor
                        personal work and some interesting stuff i did at university. Because of that the individual
                        topics may differ.
                    </div>
                    <div className="pt-24">
                        {isLoading ? (
                            <div className="text-center">
                                <BasicSpinner></BasicSpinner>
                            </div>
                        ) : (
                            documentsData?.data?.map((a) => (
                                <div className="py-8" key={(a as Document).id}>
                                    <RecordButton document={a as Document}></RecordButton>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
