import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { Gear } from "@/src/app/gear/gear";

interface Props {}

const GearPage: NextPage<Props> = (props: Props) => {
    return (
        <main>
            <Head>
                <title>Gear - Florian Thom</title>
                <meta
                    name="description"
                    content="FLORIAN THOM - GEAR: Get an overview of the gear of Florian Thom. Inspect Software and Hardware and discover recommended books."
                />
            </Head>
            <Gear></Gear>
        </main>
    );
};

export default GearPage;
