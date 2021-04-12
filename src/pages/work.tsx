import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { Work } from "@/src/app/work/work";

interface Props {}

const WorkPage: NextPage<Props> = (props: Props) => {
    return (
        <main>
            <Head>
                <title>Work & CV - Florian Thom</title>
                <meta name="description" content="Test Application: Index-Page" />
            </Head>
            <Work></Work>
        </main>
    );
};

export default WorkPage;
