import { NextPage } from "next";
import { Impressum } from "@/src/app/impressum/impressum";
import React from "react";
import Head from "next/head";

interface Props {}

const ImpressumPage: NextPage<Props> = (props: Props) => {
    return (
        <main>
            <Head>
                <title>Impressum - Florian Thom</title>
                <meta name="description" content="Test Application: Index-Page" />
            </Head>
            <Impressum></Impressum>
        </main>
    );
};

export default ImpressumPage;
