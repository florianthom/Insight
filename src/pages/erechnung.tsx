import { NextPage } from "next";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as constants from "@/src/app/shared/constants/constants";
import Head from "next/head";
import { NavBar } from "@/src/app/shared/navbar/navbar";

interface Props {}

const ERechnungPage: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace(constants.erechnungWebsite);
    });

    return (
        <main>
            <Head>
                <title>E-Rechnung - Florian Thom</title>
                <meta name="description" content="Get a direct link to the E-Rechnung-Software of Florian Thom." />
            </Head>
            <NavBar></NavBar>
            <div className="pt-56">You should be redirected to: {constants.erechnungWebsite}.</div>
        </main>
    );
};

export default ERechnungPage;
