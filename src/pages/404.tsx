import React, {useEffect, useState} from "react";
import {NextPage} from "next";
import {useRouter} from "next/router";
import * as constants from "@/src/app/shared/constants/constants";
import Head from "next/head";

interface Props {
}

const reposUrl = "/github"
const emailUrl = "/email"

const redirectRoutes = {
    "/home/": "/",
    "/xing/": constants.xing_link,
    "/repos/": reposUrl,
    "/repositories/": reposUrl,
    "/mail/": emailUrl


}

const App404: NextPage<Props> = (props: Props) => {

    const router = useRouter();
    const [redirecting, setRedirecting] = useState(false);


    useEffect(() => {
        console.log(router.asPath)
        const redirectUrl = redirectRoutes[router.asPath]
        if (redirectUrl) {
            setRedirecting(true)
            window.location.replace(redirectUrl);
        }
    });


    return (
        <main>
            <Head>
                <title>Redirect - Florian Thom</title>
                <meta
                    name="description"
                    content="Get a direct link to the xing-profile of Florian Thom. There you can add him to your network and much more."
                />
            </Head>
            {redirecting ? (
                <div>
                    Redirecting...
                </div>
            ) : (
                <div>We can not find this page :(</div>
            )}

        </main>
    );
};

export default App404;
