import Head from "next/head";
import { MY_SEO } from "@/seo-config";
import React from "react";

interface Props {}

export const Meta: React.FC<Props> = (props: Props) => (
    <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/homeFill.svg" />

        <title>Florian Thom</title>
        <meta key="og:title" property="og:title" content="Florian Thom" />
        <meta key="description" property="description" content={MY_SEO.description} />
        <meta key="og:type" property="og:type" content={MY_SEO.openGraph.type} />
        <meta key="og:title" property="og:title" content={MY_SEO.openGraph.title} />
        <meta key="og:description" property="og:description" content={MY_SEO.openGraph.description} />
        <meta key="og:url" property="og:url" content={MY_SEO.openGraph.url} />
        <meta key="og:image" property="og:image" content={MY_SEO.openGraph.image} />
    </Head>
);
