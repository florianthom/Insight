import { NextPage } from "next";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as constants from "@/src/app/shared/constants/constants";
import Head from "next/head";
import { NavBar } from "@/src/app/shared/navbar/navbar";

interface Props {}

const SpotifyPage: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace(constants.spotify_profile);
    });

    return (
        <main>
            <Head>
                <title>Linkedin - Florian Thom</title>
                <meta
                    name="description"
                    content="Get a direct link to the spotify-profile of Florian Thom. Leave a follow!"
                />
            </Head>
            <NavBar></NavBar>
            <div className="pt-56">You should be redirected to: {constants.spotify_profile}.</div>
        </main>
    );
};

export default SpotifyPage;
