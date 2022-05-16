import { NextPage } from "next";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as constants from "@/src/app/shared/constants/constants";
import Head from "next/head";
import { NavBar } from "@/src/app/shared/navbar/navbar";

interface Props {}

const TwitterPage: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace(constants.twitter_link);
    });

    return (
        <main>
            <Head>
                <title>Twitter - Florian Thom</title>
                <meta
                    name="description"
                    content="Get a direct link to the twitter-profile of Florian Thom. Leave a follow!"
                />
            </Head>
            <NavBar></NavBar>
            <div className="pt-56">You should be redirected to: {constants.twitter_link}.</div>
        </main>
    );
};

export default TwitterPage;
