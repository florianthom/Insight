import { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";

interface Props {}

const Mail: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace("mailto:thom.florian@yahoo.de");
    });

    return <div>You should be redirected to: thom.florian@yahoo.de</div>;
};

export default Mail;
