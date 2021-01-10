import { NavBar } from "@/src/app/shared/navbar/navbar";
import React from "react";
import { Meta } from "@/src/app/shared/meta/meta";

interface Props {
    children: React.ReactNode;
}

export const DefaultLayout: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
                <div className="md:container md:mx-auto p-5">
                    <div>{props.children}</div>
                </div>
            </div>
            <footer></footer>
        </div>
    );
};
