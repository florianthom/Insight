import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { Work } from "@/src/app/work/work";

interface Props { }

const WorkPage: NextPage<Props> = (props: Props) => {
    return (
        <main>
            <Head>
                <title>Work & References - Florian Thom</title>
                <meta
                    name="description"
                    content="FLORIAN THOM - WORK & REFERENCES: Discover snippets of our portfolio of creafted work and successful client projects. Our expanding track record proves we are the partner you want to work with."
                />
            </Head>
            <Work></Work>
        </main>
    );
};

export default WorkPage;
