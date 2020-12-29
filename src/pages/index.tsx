import Head from "next/head";
import { NextPage } from "next";
import React from "react";
import { Home } from "src/app/home/home";

interface Props {
    test?: {
        test: string;
    };
}

const IndexPage: NextPage<Props> = (props: Props) => {
    return (
        <div>
            <Head>
                <link rel="icon" href="/home_fill.svg" />
                <title>Florian Thom</title>
            </Head>
            <Home></Home>
        </div>
    );
};

export default IndexPage;
