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
        <div className="p-5 text-center bg-gray-100">
            <Head>
                <link rel="icon" href="/home_fill.svg" />
                <title>Florian Thom</title>
            </Head>
            <main>
                <div>
                    <div>index.tsx</div>
                </div>
            </main>
        </div>
    );
};

export default IndexPage;
