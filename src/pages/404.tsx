import React, {useEffect, useState} from "react";
import {NextPage} from "next";
import {useRouter} from "next/router";
import Head from "next/head";
import {redirectList} from "@/src/app/shared/utils/redirectList";

interface Props {
}


const App404: NextPage<Props> = (props: Props) => {

    const router = useRouter();
    const [redirecting, setRedirecting] = useState(false);


    useEffect(() => {
        console.log(router.asPath)
        // const redirectUrl = redirectRoutes[router.asPath]
        const redirectUrl = redirectList.filter(a => a.source + "/" == router.asPath)
        if (redirectUrl.length != 0) {
            setRedirecting(true)
            window.location.replace(redirectUrl[0].destination);
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
