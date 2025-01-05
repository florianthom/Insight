import { NextPage } from "next";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as constants from "@/src/app/shared/constants/constants";
import Head from "next/head";
import { NavBar } from "@/src/app/shared/navbar/navbar";

interface Props {}

const DrivePage: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace(constants.drive);
    });

    return (
        <main>
            <Head>
                <title>Drive - Florian Thom</title>
                <meta name="description" content="Get a direct link to the Drive of Florian Thom." />
            </Head>
            <NavBar></NavBar>
            <div className="pt-56">You should be redirected to: {constants.drive}.</div>
        </main>
    );
};

export default DrivePage;
