import { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";
import * as constants from "@/src/app/shared/constants/constants";
import Head from "next/head";
import { NavBar } from "@/src/app/shared/navbar/navbar";

interface Props { }

const BachelorThesisPage: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace(constants.bachelorThesisLink);
    });

    return (
        <main>
            <Head>
                <title>Bachelor Thesis - Florian Thom</title>
                <meta
                    name="description"
                    content="Get a direct link to the bachelor thesis of Florian Thom. To get more insights on his activity you can inspect most of his projects."
                />
            </Head>
            <NavBar></NavBar>
            <div className="pt-56">You should be redirected to {constants.bachelorThesisLink}.</div>
        </main>
    );
};

export default BachelorThesisPage;
