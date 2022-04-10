import { NextPage } from "next";
import { Imprint } from "@/src/app/impressum/imprint";
import React from "react";
import Head from "next/head";

interface Props {}

const ImprintPage: NextPage<Props> = (props: Props) => {
    return (
        <main>
            <Head>
                <title>Imprint - Florian Thom</title>
                <meta name="description" content="Test Application: Index-Page" />
            </Head>
            <Imprint></Imprint>
        </main>
    );
};

export default ImprintPage;
