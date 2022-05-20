import { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";
import * as constants from "@/src/app/shared/constants/constants";
import Head from "next/head";
import { NavBar } from "@/src/app/shared/navbar/navbar";

interface Props {}

const GithubPage: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace(constants.github_link);
    });

    return (
        <main>
            <Head>
                <title>Github - Florian Thom</title>
                <meta
                    name="description"
                    content="Get a direct link to the github-profile of Florian Thom. In addition to get insights on his activity you can inspect most of his projects."
                />
            </Head>
            <NavBar></NavBar>
            <div className="pt-56">You should be redirected to {constants.github_link}.</div>
        </main>
    );
};

export default GithubPage;
