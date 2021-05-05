import { NextPage } from "next";
import { Privacy } from "@/src/app/privacy/privacy";
import React from "react";
import Head from "next/head";

interface Props {}

const PrivacyPage: NextPage<Props> = (props: Props) => {
    return (
        <main>
            <Head>
                <title>Privacy - Florian Thom</title>
                <meta name="description" content="Test Application: Index-Page" />
            </Head>
            <Privacy></Privacy>
        </main>
    );
};

export default PrivacyPage;
