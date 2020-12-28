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
                <title>Florian Thom</title>
            </Head>
            <main>
                <div>
                    <h1>index.tsx</h1>
                </div>
            </main>
        </div>
    );
};

export default IndexPage;
