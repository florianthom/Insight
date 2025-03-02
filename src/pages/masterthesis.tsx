import { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";
import * as constants from "@/src/app/shared/constants/constants";
import Head from "next/head";
import { NavBar } from "@/src/app/shared/navbar/navbar";

interface Props { }

const MasterThesisPage: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace(constants.masterThesisLink);
    });

    return (
        <main>
            <Head>
                <title>Master Thesis - Florian Thom</title>
                <meta
                    name="description"
                    content="Get a direct link to the master thesis of Florian Thom. To get more insights on his activity you can inspect most of his projects."
                />
            </Head>
            <NavBar></NavBar>
            <div className="pt-56">You should be redirected to {constants.masterThesisLink}.</div>
        </main>
    );
};

export default MasterThesisPage;
