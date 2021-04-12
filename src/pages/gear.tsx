import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { Gear } from "@/src/app/gear/gear";

interface Props {}

const GearPage: NextPage<Props> = (props: Props) => {
    return (
        <main>
            <Head>
                <title>Work & CV - Florian Thom</title>
                <meta name="description" content="Test Application: Index-Page" />
            </Head>
            <Gear></Gear>
        </main>
    );
};

export default GearPage;
