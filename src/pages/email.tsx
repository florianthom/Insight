import { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";
import * as constants from "../app/shared/constants/constants";

interface Props {}

const EmailPage: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace("mailto:" + constants.email_string);
    });

    return <div>Your email-provider should be opened up with inserted email ({constants.email_string}).</div>;
};

export default EmailPage;
