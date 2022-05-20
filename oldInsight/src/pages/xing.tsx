import { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";
import * as constants from "@/src/app/shared/constants/constants";
import Head from "next/head";
import { NavBar } from "@/src/app/shared/navbar/navbar";

interface Props {}

const XingPage: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace(constants.xing_link);
    });

    return (
        <main>
            <Head>
                <title>Xing - Florian Thom</title>
                <meta
                    name="description"
                    content="Get a direct link to the xing-profile of Florian Thom. There you can add him to your network and much more."
                />
            </Head>
            <NavBar></NavBar>
            <div className="pt-56">You should be redirected to: {constants.xing_link}.</div>
        </main>
    );
};

export default XingPage;
