import { NextPage } from "next";
import React from "react";
import { Home } from "@/src/app/home/home";
import Head from "next/head";
import { defaultQueryClient } from "@/src/app/shared/queryClient/defaultQueryClient";
import { firstPage, pageSize } from "@/src/app/shared/constants/constants";
import { dehydrate } from "react-query/hydration";

interface Props {}

export async function getStaticProps(): Promise<any> {
    const queryClient = defaultQueryClient;
    await queryClient.prefetchQuery("/projects?pagesize=" + 100 + "&pagenumber=" + firstPage);
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

const IndexPage: NextPage<Props> = (props: Props) => {
    return (
        <main>
            <Head>
                <title>Florian Thom</title>
                <meta name="description" content="Test Application: Index-Page" />
            </Head>
            <Home></Home>
        </main>
    );
};

export default IndexPage;
