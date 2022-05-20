import { NextPage } from "next";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as constants from "@/src/app/shared/constants/constants";
import Head from "next/head";
import { NavBar } from "@/src/app/shared/navbar/navbar";

interface Props {}

const PayPalPage: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace(constants.paypal);
    });

    return (
        <main>
            <Head>
                <title>PayPal - Florian Thom</title>
                <meta name="description" content="Get a direct link to the PayPal of Florian Thom." />
            </Head>
            <NavBar></NavBar>
            <div className="pt-56">You should be redirected to: {constants.paypal}.</div>
        </main>
    );
};

export default PayPalPage;
