import { NextPage } from "next";
import React, {useEffect, useState} from "react";
import { Home } from "@/src/app/home/home";
import Head from "next/head";
import { defaultQueryClient } from "@/src/app/shared/queryClient/defaultQueryClient";
import { firstPage, pageSize, pageSizeLandingPage } from "@/src/app/shared/constants/constants";
import { dehydrate } from "react-query/hydration";
import Router, {useRouter} from "next/router";
import {redirectList} from "@/src/app/shared/utils/redirectList";

interface Props {}

// export async function getStaticProps(): Promise<any> {
//     const queryClient = defaultQueryClient;
//     await queryClient.prefetchQuery("/projects?pagesize=" + pageSizeLandingPage + "&pagenumber=" + firstPage);
//     return {
//         props: {
//             dehydratedState: dehydrate(queryClient)
//         },
//     };
// }

const IndexPage: NextPage<Props> = (props: Props) => {
    return (
        <main>
            <Head>
                <title>Home - Florian Thom</title>
                <meta
                    name="description"
                    content="FLORIAN THOM - Computer science enthusiast, interested in research & development. Open to new technologies in software and hardware."
                />
            </Head>
            <Home />
        </main>
    );
};

export default IndexPage;
