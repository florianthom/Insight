import Head from "next/head";
import React from "react";

interface Props { }

export const Meta: React.FC<Props> = (props: Props) => (
    <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="icon" href="/static/images/favicon.ico" />
        <meta key="og:title" property="og:title" content="Florian Thom" />
        <meta key="og:description" property="og:description" content="Freelancer covering professional services in IT and Media. From webapps to cloud expertise I offer tailored solutions to elevate your business." />
        <meta key="og:image" property="og:image" content="https://www.florianthom.com/static/images/florianthom.jpg" />
        <meta key="og:url" property="og:url" content="https://www.florianthom.com" />
        <meta key="og:type" property="og:type" content="website" />
    </Head>
);
