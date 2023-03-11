import { NextPage } from "next";
import * as constants from "../app/shared/constants/constants";
import Head from "next/head";
import { NavBar } from "@/src/app/shared/navbar/navbar";

interface Props { }

const PhonePage: NextPage<Props> = (props: Props) => {
    return (
        <main>
            <Head>
                <title>Phone - Florian Thom</title>
                <meta
                    name="description"
                    content="Get a direct link to the phone number of Florian Thom. You can call or message him right away."
                />
            </Head>
            <NavBar></NavBar>
            <div className="pt-56">
                If you want to contact me you can also call me under phone number ({constants.personal_phone_number}).
            </div>
        </main>
    );
};

export default PhonePage;
