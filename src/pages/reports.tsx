import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { Reports } from "@/src/app/reports/reports";
import { defaultQueryClient } from "@/src/app/shared/queryClient/defaultQueryClient";
import { firstPage, pageSize } from "@/src/app/shared/constants/constants";
import { dehydrate } from "react-query/hydration";

interface Props {}

export async function getStaticProps(): Promise<any> {
    const queryClient = defaultQueryClient;
    await queryClient.prefetchQuery("/documents?pagesize=" + pageSize + "&pagenumber=" + firstPage);
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

const ReportsPage: NextPage<Props> = (props: Props) => {
    return (
        <main>
            <Head>
                <title>Reports & Talks- Florian Thom</title>
                <meta name="description" content="Test Application: Index-Page" />
            </Head>
            <Reports></Reports>
        </main>
    );
};

export default ReportsPage;
