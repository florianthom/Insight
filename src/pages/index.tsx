import Head from "next/head";
import { NextPage } from "next";
import React from "react";

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
            <div className="p-5 text-center bg-gray-100">
                <div>index.tsx</div>
            </div>
        </div>
    );
};

export default IndexPage;
