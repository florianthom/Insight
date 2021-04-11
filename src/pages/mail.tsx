import { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";

interface Props {}

const Mail: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace("mailto:thom.florian@yahoo.de");
    });

    return <div>Your email-provider should be open up with my inserted email (thom.florian@yahoo.de).</div>;
};

export default Mail;
