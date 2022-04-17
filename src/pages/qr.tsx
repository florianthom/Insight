import { NextPage } from "next";
import React, { useEffect } from "react";
import Head from "next/head";
import { QR } from "@/src/app/qr/qr";

interface Props {}

const QRPage: NextPage<Props> = (props: Props) => {
    return (
        <main>
            <Head>
                <title>QR - Florian Thom</title>
                <meta
                    name="description"
                    content="Target address of the popular qr-code of Florian Thom. You can connect and follow him and write some messages."
                />
            </Head>
            <QR />
        </main>
    );
};

export default QRPage;
