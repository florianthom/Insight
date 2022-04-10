import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { Projects } from "@/src/app/projects/projects";
import { QueryClient } from "react-query";
import { firstPage, pageSize } from "@/src/app/shared/constants/constants";
import { dehydrate } from "react-query/hydration";
import { defaultQueryFunction } from "@/src/app/shared/defaultQueryFunction/defaultQueryFunction";
import { defaultQueryClient } from "@/src/app/shared/queryClient/defaultQueryClient";

interface Props {}

export async function getServerSideProps(): Promise<any> {
    const queryClient = defaultQueryClient;
    await queryClient.prefetchQuery("/projects?pagesize=" + pageSize + "&pagenumber=" + firstPage);
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

const ProjectsPage: NextPage<Props> = (props: Props) => {
    return (
        <main>
            <Head>
                <title>Projects - Florian Thom</title>
                <meta
                    name="description"
                    content="FLORIAN THOM - PROJECTS: Discover interesting projects implemented by state of the art software through a custom graphical overview."
                />
            </Head>
            <Projects></Projects>
        </main>
    );
};

export default ProjectsPage;
