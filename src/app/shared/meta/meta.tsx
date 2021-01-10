import Head from "next/head";
import React from "react";

interface Props {}

export const Meta: React.FC<Props> = (props: Props) => (
    <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />

        <link rel="icon" href="/homeFill.svg" />
        <meta key="og:title" property="og:title" content="Florian Thom" />
        <meta key="og:description" property="og:description" content="example content" />
        <meta key="og:type" property="og:type" content="example content" />
        <meta key="og:url" property="og:url" content="example content" />
        <meta key="og:image" property="og:image" content="example content" />
    </Head>
);
