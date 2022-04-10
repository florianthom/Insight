import { NextPage } from "next";
import React, { useEffect } from "react";
import { Home } from "@/src/app/home/home";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { github_link } from "@/src/app/shared/constants/constants";
import * as constants from "@/src/app/shared/constants/constants";

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

// const GithubPage: NextPage<Props> = (props: Props) => {
//     const router = useRouter();
//     useEffect(() => {
//         window.location.replace(github_link);
//     });
//
//     return <div>You should be redirected to {constants.github_link}</div>;
// };

export default HomePage;
