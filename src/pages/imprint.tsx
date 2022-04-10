import { NextPage } from "next";
import { Imprint } from "@/src/app/imprint/imprint";
import React from "react";
import Head from "next/head";

interface Props {}

const ImprintPage: NextPage<Props> = (props: Props) => {
    return (
        <main>
            <Head>
                <title>Imprint - Florian Thom</title>
                <meta name="description" content="Read through the imprint of the Homepage of Florian Thom." />
            </Head>
            <Imprint></Imprint>
        </main>
    );
};

export default ImprintPage;
