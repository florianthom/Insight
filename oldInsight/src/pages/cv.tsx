import { NextPage } from "next";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as constants from "@/src/app/shared/constants/constants";
import Head from "next/head";
import { NavBar } from "@/src/app/shared/navbar/navbar";

interface Props {}

const CVPage: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace(constants.cv_international_link);
    });

    return (
        <main>
            <Head>
                <title>CV - Florian Thom</title>
                <meta
                    name="description"
                    content="Get a direct link to the CV of Florian Thom. You can check his experience, references and passions. Additionally contact details are provided so just connect with him."
                />
            </Head>
            <NavBar></NavBar>
            <div className="pt-56">You should be redirected to: {constants.cv_international_link}.</div>
        </main>
    );
};

export default CVPage;
