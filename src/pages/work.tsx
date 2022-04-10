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
                <meta
                    name="description"
                    content="FLORIAN THOM - WORK: Discover ventures of the past and currently in process in addition to the CV of Florian Thom."
                />
            </Head>
            <Work></Work>
        </main>
    );
};

export default WorkPage;
