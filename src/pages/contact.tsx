import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { Contact } from "@/src/app/contact/contact";

interface Props {}

const ContactPage: NextPage<Props> = (props: Props) => {
    return (
        <main>
            <Head>
                <title>Contact - Florian Thom</title>
                <meta
                    name="description"
                    content="Get an overview on how to contact Florian Thom. In addition to send an email you connect on platforms like linkedin oder xing."
                />
            </Head>
            <Contact></Contact>
        </main>
    );
};

export default ContactPage;
