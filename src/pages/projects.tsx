import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { Projects } from "@/src/app/projects/projects";

interface Props {}

const ProjectsPage: NextPage<Props> = (props: Props) => {
    return (
        <main>
            <Head>
                <title>Projects - Florian Thom</title>
                <meta name="description" content="Test Application: Index-Page" />
            </Head>
            <Projects></Projects>
        </main>
    );
};

export default ProjectsPage;
