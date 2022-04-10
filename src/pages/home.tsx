import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Link from "next/link";

interface Props {}

const HomePage: NextPage<Props> = (props: Props) => {
    return (
        <main>
            <Head>
                <title>Home - Florian Thom</title>
                <meta name="description" content="Test Application: Index-Page" />
            </Head>
            <Link href="/">
                <a className="my-4 min-w-flex-100 text-center whitespace-nowrap hover:underline">Home</a>
            </Link>
        </main>
    );
};

export default HomePage;
