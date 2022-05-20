import { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";
import * as constants from "../app/shared/constants/constants";
import Head from "next/head";
import { NavBar } from "@/src/app/shared/navbar/navbar";

interface Props {}

const DiscordPage: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace(constants.discord_link);
    });

    return (
        <main>
            <Head>
                <title>Discord - Florian Thom</title>
                <meta
                    name="description"
                    content="Get a direct link to the custom discord server of Florian Thom. There you can message and call him."
                />
            </Head>
            <NavBar></NavBar>
            <div className="pt-56">You should be redirected to: {constants.discord_link}.</div>
        </main>
    );
};

export default DiscordPage;
