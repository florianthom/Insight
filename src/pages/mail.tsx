import { NextPage } from "next";
import React, { useEffect } from "react";
import { Router, useRouter } from "next/router";
import { email_string } from "../app/shared/constants/constants";

interface Props {}

const Mail: NextPage<Props> = (props: Props) => {
    const router = useRouter();
    useEffect(() => {
        window.location.replace("mailto:" + email_string);
    });

    return <div>Your email-provider should be open up with my inserted email ({email_string}).</div>;
};

export default Mail;
