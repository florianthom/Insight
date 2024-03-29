import { NextPage } from "next";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as constants from "@/src/app/shared/constants/constants";
import Head from "next/head";
import { NavBar } from "@/src/app/shared/navbar/navbar";

interface Props {}

const LinkedinPage: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace(constants.linkedin_link);
    });

    return (
        <main>
            <Head>
                <title>Linkedin - Florian Thom</title>
                <meta
                    name="description"
                    content="Get a direct link to the linkedin-profile of Florian Thom. You can connect and follow him and write some messages."
                />
            </Head>
            <NavBar></NavBar>
            <div className="pt-56">You should be redirected to: {constants.linkedin_link}.</div>
        </main>
    );
};

export default LinkedinPage;
