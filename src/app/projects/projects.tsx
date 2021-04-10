import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Footer } from "@/src/app/shared/footer/footer";
import React from "react";
import { RecordButton } from "@/src/app/reports/recordButton/recordButton";

interface Props {}

export const Projects: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <div className="pt-56 pb-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-black text-3xl tracking-more-than-wide">MY SOFTWARE REPOSITORY</h2>
                    <div className="text-base text-black pt-24">
                        My software repository is based on github. There are some private and public repositories. Here
                        is a list of some (private) projects with additional information.
                    </div>
                    <div className="pt-24">test</div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
