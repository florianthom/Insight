import { NextPage } from "next";
import React from "react";
import { Home } from "@/src/app/home/home";
import Head from "next/head";

interface Props {}

const IndexPage: NextPage<Props> = (props: Props) => {
    return (
        <main>
            <Head>
                <title>Florian Thom</title>
                <meta name="description" content="Test Application: Index-Page" />
            </Head>
            <Home></Home>
        </main>
    );
};

export default IndexPage;
