import { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";
import * as constants from "../app/shared/constants/constants";

interface Props {}

const Mail: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace("mailto:" + constants.email);
    });

    return <div>Your email-provider should be open up with my inserted email ({constants.email}).</div>;
};

export default Mail;
