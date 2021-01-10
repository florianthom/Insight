import Head from "next/head";
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
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/homeFill.svg" />
                <title>Florian Thom</title>
                <meta property="og:title" content="Florian Thom" key="title" />
            </Head>

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
