import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React from "react";
import { RecordButton } from "@/src/app/reports/recordButton/recordButton";

interface Props {}

export const Reports: React.FC<Props> = (props: Props) => {
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
                        <RecordButton></RecordButton>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
