import { Head } from "next/document";
import Link from "next/link";
import { NavBar } from "@/src/app/shared/navbar/navbar";
import { Provider } from "react-redux";
import React from "react";

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
        </div>
    );
};
