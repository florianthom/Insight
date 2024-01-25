import { NextPage } from "next";
import React from "react";
import { Home } from "@/src/app/home/home";
import Head from "next/head";

interface Props { }

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
                    content="FLORIAN THOM - Freelancer covering professional services in IT and Media. From webapps to cloud expertise I offer tailored solutions to elevate your business."
                />
            </Head>
            <Home />
        </main>
    );
};

export default IndexPage;
