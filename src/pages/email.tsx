import { NextPage } from "next";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as constants from "../app/shared/constants/constants";
import Head from "next/head";
import { NavBar } from "@/src/app/shared/navbar/navbar";

interface Props {}

const EmailPage: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace("mailto:" + constants.email_string);
    });

    return (
        <main>
            <Head>
                <title>Email - Florian Thom</title>
                <meta name="description" content="Test Application: Index-Page" />
            </Head>
            <NavBar></NavBar>
            <div className="pt-56">
                Your email-provider should be opened up with inserted email ({constants.email_string}).
            </div>
        </main>
    );
};

export default EmailPage;
