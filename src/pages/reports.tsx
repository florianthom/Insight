import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { Work } from "@/src/app/work/work";
import { Reports } from "@/src/app/reports/reports";

interface Props {}

const ReportsPage: NextPage<Props> = (props: Props) => {
    return (
        <main>
            <Head>
                <title>Reports & Talks- Florian Thom</title>
                <meta name="description" content="Test Application: Index-Page" />
            </Head>
            <Reports></Reports>
        </main>
    );
};

export default ReportsPage;
