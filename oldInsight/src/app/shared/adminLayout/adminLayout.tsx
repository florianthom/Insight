import { Head } from "next/document";
import { NavBar } from "@/src/app/shared/navbar/navbar";
import React from "react";

interface Props {
    children: React.ReactNode;
}

export const AdminLayout: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
                <div>{props.children}</div>
            </div>
        </div>
    );
};
